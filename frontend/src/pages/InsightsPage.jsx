// frontend/src/pages/InsightsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InsightsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data", error);
      }
    }
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#4F46E5] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-[#4F46E5] text-lg">Loading insights...</div>
        </div>
      </div>
    );
  }

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

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Dashboard
              </Link>
              <Link to="/transactions" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Transactions
              </Link>
              <Link to="/insights" className="text-sm font-medium text-[#4F46E5] border-b-2 border-[#4F46E5] pb-1">
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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Financial Insights</h1>
          <p className="text-slate-500 mt-1">AI-powered analysis of your spending patterns and financial health.</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-500">Total Income</span>
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-slate-900">$8,500.00</p>
            <p className="text-xs text-emerald-600 mt-1">↑ 8.3% from last month</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-500">Total Expenses</span>
              <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-slate-900">$3,240.50</p>
            <p className="text-xs text-rose-600 mt-1">↑ 3.7% from last month</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-500">Savings Rate</span>
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-slate-900">61.9%</p>
            <p className="text-xs text-emerald-600 mt-1">↑ 5.2% from last month</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-500">AI Confidence Score</span>
              <svg className="w-5 h-5 text-[#4F46E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-slate-900">94%</p>
            <p className="text-xs text-slate-500 mt-1">Based on 120+ transactions</p>
          </div>
        </div>

        {/* AI Insights Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Spending Pattern */}
          <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-lg font-semibold">AI Insight</h3>
            </div>
            <p className="text-sm text-white/90">Your food expenses are 15% higher than last month.</p>
            <p className="text-xs text-white/60 mt-2">Consider meal planning to save more.</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Actionable</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">High Priority</span>
            </div>
          </div>

          {/* Savings Goal */}
          <div className="bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0-1V5m0 1v1m0 1v1m0 1v1" />
              </svg>
              <h3 className="text-lg font-semibold">Savings Goal</h3>
            </div>
            <p className="text-sm text-white/90">You're on track to save $5,300 this month.</p>
            <p className="text-xs text-white/60 mt-2">That's 78% of your target!</p>
            <div className="mt-4 bg-white/20 rounded-full h-2 w-full">
              <div className="bg-white/40 rounded-full h-2 w-[78%]"></div>
            </div>
          </div>
        </div>

        {/* Spending by Category */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Spending by Category</h2>
            <span className="text-xs text-slate-500">Last 30 days</span>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Food & Dining', amount: 850, percentage: 26, color: 'bg-[#4F46E5]' },
              { name: 'Housing', amount: 1200, percentage: 37, color: 'bg-[#7C3AED]' },
              { name: 'Transportation', amount: 320, percentage: 10, color: 'bg-[#0EA5E9]' },
              { name: 'Entertainment', amount: 280, percentage: 9, color: 'bg-[#10B981]' },
              { name: 'Shopping', amount: 340, percentage: 11, color: 'bg-[#F59E0B]' },
              { name: 'Other', amount: 250.50, percentage: 7, color: 'bg-[#6B7280]' }
            ].map((category, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">{category.name}</span>
                  <span className="font-medium text-slate-900">${category.amount.toFixed(2)}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div 
                    className={`${category.color} rounded-full h-2 transition-all duration-500`} 
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent AI Alerts */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Recent AI Alerts</h2>
            <button className="text-sm text-[#4F46E5] hover:text-[#4338CA] font-medium">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {[
              { type: 'warning', message: 'Unusual spending detected in Entertainment category (+45% vs last month)', time: '2 hours ago' },
              { type: 'success', message: 'You\'ve saved 15% more this month compared to last month!', time: '1 day ago' },
              { type: 'info', message: 'Subscription renewals coming up: Netflix, Spotify, Cloud Storage', time: '3 days ago' }
            ].map((alert, index) => (
              <div key={index} className={`flex items-start gap-3 p-3 rounded-xl border ${
                alert.type === 'warning' ? 'border-amber-200 bg-amber-50' :
                alert.type === 'success' ? 'border-emerald-200 bg-emerald-50' :
                'border-blue-200 bg-blue-50'
              }`}>
                <div className={`mt-0.5 ${
                  alert.type === 'warning' ? 'text-amber-500' :
                  alert.type === 'success' ? 'text-emerald-500' :
                  'text-blue-500'
                }`}>
                  {alert.type === 'warning' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                  {alert.type === 'success' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {alert.type === 'info' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-700">{alert.message}</p>
                  <p className="text-xs text-slate-400 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InsightsPage;