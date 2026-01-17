import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { backendUrl } from "./hooks/helper";

// Placeholder Dashboard component
const Dashboard = () => {
  const [serverMessage, setServerMessage] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const { googleAccessToken } = useContext(AuthContext);

  React.useEffect(() => {
    fetch(`${backendUrl}/api/hello?name=User`)
      .then((response) => response.json())
      .then((data) => {
        setServerMessage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching from server:", error);
        setServerMessage("Failed to connect to server");
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    if (googleAccessToken) {
      fetchEmails(googleAccessToken);
    }
  }, [googleAccessToken]);

  const fetchEmails = async (token) => {
    try {
      const response = await fetch(
        "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      console.log('Emails list:', data);
      for (const message of data.messages || []) {
        const msgResponse = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${message.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const msgData = await msgResponse.json();
        const headers = msgData.payload.headers;
        const subject = headers.find(h => h.name === 'Subject')?.value || 'No Subject';
        let body = '';
        if (msgData.payload.body.data) {
          body = atob(msgData.payload.body.data.replace(/-/g, '+').replace(/_/g, '/'));
        } else if (msgData.payload.parts) {
          const textPart = msgData.payload.parts.find(p => p.mimeType === 'text/plain');
          if (textPart && textPart.body.data) {
            body = atob(textPart.body.data.replace(/-/g, '+').replace(/_/g, '/'));
          }
        }
        console.log('Subject:', subject);
        console.log('Body:', body);
      }
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to FinanceAI Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Your AI-powered financial insights await!
        </p>
        {loading ? (
          <p>Loading server response...</p>
        ) : (
          <p className="text-lg text-green-600">Server says: {serverMessage}</p>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
