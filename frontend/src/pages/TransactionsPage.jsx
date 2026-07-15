// frontend/src/pages/TransactionsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, resolvePath, useNavigate } from 'react-router-dom';
import { getTransaction } from '../api/transactions';


const TransactionsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([]);

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

    const getTransactionData = async () => {
      const response = await getTransaction();
      // console.log("Transaction page category: ", response)
      setTransactions(response.transactions);
      // console.log("GetTrannsactiondata response", response.transactions)
    }
    

    setLoading(false);

    getTransactionData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };


  const filteredTransactions = transactions.filter(t => {
    if (filter === 'income') return t.type === 'income';
    if (filter === 'expense') return t.type === 'expense';
    return true;
  }).filter(t => 
    t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#4F46E5] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-[#4F46E5] text-lg">Loading transactions...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-lg font-bold text-slate-900">Kosh</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Dashboard
              </Link>
              <Link to="/transactions" className="text-sm font-medium text-[#4F46E5] border-b-2 border-[#4F46E5] pb-1">
                Transactions
              </Link>
              <Link to="/insights" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Insights
              </Link>
              <Link to="/settings" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Settings
              </Link>
            </nav>

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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Transactions</h1>
            <p className="text-slate-500 mt-1">View and manage all your financial transactions.</p>
          </div>
          {/* <button className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-[#4338CA] transition-all shadow-sm flex items-center gap-2 whitespace-nowrap">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Transaction
          </button> */}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === 'all' 
                    ? 'bg-[#4F46E5] text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('income')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === 'income' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Income
              </button>
              <button
                onClick={() => setFilter('expense')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === 'expense' 
                    ? 'bg-rose-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Expense
              </button>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Category</th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Description</th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Date</th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.type === 'income' ? 'bg-emerald-50' : 'bg-rose-50'
                        }`}>
                          {transaction.type === 'income' ? (
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm font-medium text-slate-900">{transaction.category}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{transaction.description}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{new Date(transaction.date).toLocaleDateString()}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`text-sm font-semibold ${
                        transaction.type === 'income' ? 'text-emerald-600' : 'text-rose-600'
                      }`}>
                        {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 text-sm">No transactions found</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TransactionsPage;