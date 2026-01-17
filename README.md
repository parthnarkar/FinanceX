# 💰 FinanceX

**Your AI-Powered Financial Copilot for Smarter Money Decisions**

[![Powered by Google Gemini](https://img.shields.io/badge/Powered%20by-Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

> 🏆 Built for MLH Gemini HackDay | 🤖 Showcasing Google Gemini AI capabilities

---

## 🎯 The Problem

**80% of Indians don't track their expenses.** Not because they don't care—but because traditional methods are:
- ⏰ **Time-consuming**: Manual data entry every single day
- 😴 **Boring**: Spreadsheets and calculators feel like work
- 🤔 **Confusing**: No actionable insights, just raw numbers

**What if your phone already knows where your money goes?** Every UPI payment, every bill, every subscription—it's all in your SMS inbox.

---

## 💡 Our Solution

**FinanceX** transforms your financial SMS messages into intelligent insights using Google Gemini AI. No typing. No manual categorization. Just paste your messages and let AI do the heavy lifting.

### Why Gemini?

Gemini isn't just an API call here—**it's the brain of FinanceX**:
- 🧠 **Understands Context**: Parses unstructured SMS into structured transactions
- 🎯 **Personalized Intelligence**: Generates insights specific to YOUR spending patterns
- 💬 **Conversational AI**: Chat naturally about your finances
- 🛡️ **Scam Detection**: Protects you from financial fraud with real-time analysis

---

## ✨ Key Features

### 📱 1. Intelligent SMS Parsing
Paste raw SMS from PhonePe, GPay, or bank alerts. Gemini extracts:
- Transaction amount
- Merchant name
- Category (Food, Transport, Shopping, etc.)
- Necessity classification (Need vs Want)
- Transaction date

**No manual entry. Ever.**

### 📊 2. AI-Powered Dashboard
Beautiful visualizations showing:
- Monthly spending breakdown by category
- Need vs Want analysis
- Recent transaction history with smart categorization
- Income vs Expense tracking

### 🔍 3. Financial Health Score
Gemini calculates your financial health (0-100) based on:
- Savings rate (40%)
- Discretionary spending control (30%)
- Subscription management (20%)
- Emergency fund adequacy (10%)

Get a clear picture of your financial wellness in seconds.

### 💡 4. Personalized Insights
Gemini analyzes your spending and generates:
- **Critical alerts**: Overspending warnings, hidden subscriptions
- **Pattern detection**: "You spend 40% more on weekends"
- **Actionable recommendations**: Specific steps to save ₹5,000/month
- **Positive trends**: Celebrate your financial wins

### 💬 5. Financial Advisor Chatbot
Ask anything about your finances:
- "Can I afford an iPhone this month?"
- "Why am I overspending on food?"
- "Explain SIP vs Fixed Deposit to me"
- "How can I save ₹10,000 more?"

Gemini responds using YOUR actual spending data—not generic advice.

### 🛡️ 6. Scam Message Detection
Paste suspicious messages and get instant fraud analysis:
- Risk level assessment (Safe/Suspicious/High Risk)
- Detected red flags (urgency tactics, fake links, OTP requests)
- Clear explanation of why it's a scam
- Actionable safety advice

**Protect yourself from UPI scams, fake KYC updates, and lottery frauds.**

---

### Quick Start:
1. Paste your transaction SMS messages
2. Watch Gemini parse and categorize in real-time
3. Explore your personalized dashboard
4. Chat with AI about your spending
5. Check suspicious messages for scams

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Tailwind CSS** - Styling and design system
- **Recharts** - Data visualizations
- **Lucide React** - Beautiful icons
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express** - API framework
- **Google Gemini API** - AI intelligence layer

### Deployment
- **Vercel** - Frontend hosting
- **Render/Railway** - Backend hosting

---

## 🚀 Getting Started

### Prerequisites
```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/financex.git
cd financex
```

2. **Install dependencies**
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. **Set up environment variables**

Create `.env` file in the `server` directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Run the application**

```bash
# Start backend server (from server directory)
npm run dev

# Start frontend (from client directory)
npm start
```

Visit `http://localhost:3000` to see the app in action!

---

## 📸 Screenshots

### Dashboard Overview
![Dashboard](screenshots/dashboard.png)
*AI-powered spending insights at a glance*

### Chat Interface
![Chatbot](screenshots/chatbot.png)
*Ask questions, get personalized answers*

### Scam Detection
![Scam Detection](screenshots/scam-detection.png)
*Stay protected from financial fraud*

---

## 🧪 Sample SMS for Testing

Try pasting these into FinanceX:

```
INR 450.00 debited from A/c XX1234 on 15-Jan-26 to VPA coffee.day@paytm (UPI Ref No 401234567890)

Your GPay transaction of Rs.1,200 to Swiggy was successful on 16-Jan-26. Order ID: SW12345

Rs 299 debited for Netflix subscription. A/c XX5678. 14-Jan-26. Available balance: Rs 45,231

You've sent Rs.5000 to Mom via PhonePe UPI on 13-Jan-26. UPI ID: mom@ybl
```

---

## 🎯 What Makes FinanceX Different?

| Feature | Traditional Apps | FinanceX |
|---------|------------------|----------|
| **Data Entry** | Manual typing | SMS paste (1 second) |
| **Categorization** | User selects | AI auto-detects |
| **Insights** | Generic tips | Personalized to YOUR data |
| **Advice** | Static articles | Conversational AI chat |
| **Scam Protection** | ❌ None | ✅ AI-powered detection |
| **Setup Time** | 30+ minutes | 30 seconds |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│                  User Interface                  │
│            (React + Tailwind CSS)                │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│              Express API Server                  │
│         (Request handling & routing)             │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│            Google Gemini AI                      │
│  ┌──────────────────────────────────────────┐   │
│  │  • SMS Parsing Engine                    │   │
│  │  • Insight Generation                    │   │
│  │  • Health Score Calculator               │   │
│  │  • Conversational Chat                   │   │
│  │  • Scam Detection                        │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

---

## 🎓 What We Learned

Building FinanceX taught us:
- **Prompt Engineering**: Crafting precise prompts for accurate financial parsing
- **AI Context Management**: Maintaining conversation state for personalized responses
- **Error Handling**: Gracefully managing API failures and edge cases
- **User Experience**: Making AI feel magical, not mechanical
- **Real-world Impact**: How AI can genuinely solve everyday problems

---

## 🔮 Future Roadmap

- [ ] **Bank Integration**: Direct connection to bank accounts via APIs
- [ ] **Investment Tracking**: Monitor stocks, mutual funds, and crypto
- [ ] **Bill Reminders**: AI-powered payment due date alerts
- [ ] **Family Sharing**: Multi-user accounts with shared budgets
- [ ] **Voice Input**: Talk to your financial advisor
- [ ] **Regional Languages**: Support for Hindi, Tamil, Telugu, and more
- [ ] **Recurring Expense Detection**: Auto-identify and manage subscriptions
- [ ] **Export Reports**: PDF/Excel financial statements

---

## 👥 Team

Built with ❤️ by AntiCode

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google Gemini** for powering our AI capabilities
- **MLH Gemini HackDay** for the opportunity to innovate
- The open-source community for amazing tools and libraries

---

## 📞 Contact

Have questions or feedback? Reach out!

- **Email**: your.email@example.com
- **Twitter**: [@financex](#)
- **LinkedIn**: [FinanceX Team](#)

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with 🚀 and Google Gemini AI

[Report Bug](../../issues) · [Request Feature](../../issues) · [Demo Video](#)

</div>