// frontend/src/pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const DashboardPage = () => {
  // Mock user data - replace with actual user data later

  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const fetchTransactionData = async(req, res) => {
      console.log("I am in fetchData function");
      
      const response = await axios.get('http://localhost:5000/api/users/transaction');
      if (!response) console.log("Error loading data");
      
      const data = await response.json();
      console.log("data", data);
      
      setTransaction(data);
    }

    fetchTransactionData();
  })
  


  // const [user] = useState({
  //   username: 
  // });
  // Mock data - replace with API calls later
  const stats = {
    balance: 12450.75,
    income: 8500.00,
    expenses: 3200.25,
    savings: 5300.50
  };

  const transactions = [
    { id: 1, description: 'Salary Deposit', amount: 5000, type: 'income', date: 'Jan 15, 2024', category: 'Income' },
    { id: 2, description: 'Rent Payment', amount: -1200, type: 'expense', date: 'Jan 14, 2024', category: 'Housing' },
    { id: 3, description: 'Groceries', amount: -150, type: 'expense', date: 'Jan 13, 2024', category: 'Food' },
    { id: 4, description: 'Freelance Project', amount: 3500, type: 'income', date: 'Jan 12, 2024', category: 'Income' },
    { id: 5, description: 'Utilities', amount: -200, type: 'expense', date: 'Jan 11, 2024', category: 'Utilities' },
    { id: 6, description: 'Dinner Out', amount: -85, type: 'expense', date: 'Jan 10, 2024', category: 'Food' },
    { id: 7, description: 'Investment Return', amount: 1500, type: 'income', date: 'Jan 09, 2024', category: 'Investment' },
  ];

  const recentTransactions = transactions.slice(0, 5);

  const handleLogout = () => {
    // Just a placeholder - implement logout later
    console.log('Logout clicked');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header / Navbar */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-lg font-bold text-slate-900">Kosh</span>
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/dashboard" className="text-sm font-medium text-[#4F46E5] border-b-2 border-[#4F46E5] pb-1">
                Dashboard
              </Link>
              <Link to="/transactions" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Transactions
              </Link>
              <Link to="/insights" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Insights
              </Link>
              <Link to="/settings" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Settings
              </Link>
            </nav>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#4F46E5]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#4F46E5] font-semibold text-sm">
                    {user?.username?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
                <span className="hidden sm:block text-sm font-medium text-slate-700">
                  {user?.username || 'User'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Welcome back, {user?.username || 'User'}! 👋
          </h1>
          <p className="text-slate-500 mt-1">Here's your financial overview for this month.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Balance Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-500">Total Balance</span>
              <div className="w-10 h-10 bg-[#4F46E5]/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#4F46E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0-1V5m0 1v1m0 1v1m0 1v1" />
                </svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-slate-900">${stats.balance.toFixed(2)}</p>
            <p className="text-xs text-emerald-600 mt-2">↑ 12.5% from last month</p>
          </div>

          {/* Income Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-500">Total Income</span>
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-emerald-600">${stats.income.toFixed(2)}</p>
            <p className="text-xs text-emerald-600 mt-2">↑ 8.3% from last month</p>
          </div>

          {/* Expenses Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-500">Total Expenses</span>
              <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-rose-600">${stats.expenses.toFixed(2)}</p>
            <p className="text-xs text-rose-600 mt-2">↑ 3.7% from last month</p>
          </div>

          {/* Savings Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-500">Total Savings</span>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-blue-600">${stats.savings.toFixed(2)}</p>
            <p className="text-xs text-blue-600 mt-2">↑ 15.2% from last month</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button className="bg-[#4F46E5] text-white rounded-xl p-4 hover:bg-[#4338CA] transition-all shadow-sm flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="font-medium">Add Income</span>
          </button>
          <button className="bg-rose-600 text-white rounded-xl p-4 hover:bg-rose-700 transition-all shadow-sm flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="font-medium">Add Expense</span>
          </button>
          <button className="bg-white text-slate-700 rounded-xl p-4 hover:bg-slate-50 transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">AI Insights</span>
          </button>
        </div>

        {/* Recent Transactions & AI Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transactions Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-slate-900">Recent Transactions</h2>
              <button className="text-sm text-[#4F46E5] hover:text-[#4338CA] font-medium">
                View All →
              </button>
            </div>

            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'income' ? 'bg-emerald-50' : 'bg-rose-50'
                    }`}>
                      {transaction.type === 'income' ? (
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{transaction.description}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-slate-500">{transaction.category}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="text-xs text-slate-500">{transaction.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`text-sm font-semibold ${
                    transaction.type === 'income' ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights Card */}
          <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-lg font-semibold">AI Insights</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm font-medium text-white/90">💡 Spending Pattern</p>
                <p className="text-xs text-white/70 mt-1">
                  Your food expenses are 15% higher than last month. Consider meal planning to save more.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm font-medium text-white/90">📊 Savings Goal</p>
                <p className="text-xs text-white/70 mt-1">
                  You're on track to save $5,300 this month. That's 78% of your target!
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm font-medium text-white/90">⚠️ Alert</p>
                <p className="text-xs text-white/70 mt-1">
                  Unusual spending detected in Entertainment category. Check your recent transactions.
                </p>
              </div>
            </div>

            <button className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white text-sm font-medium py-2 rounded-lg transition-all">
              Generate Full Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;