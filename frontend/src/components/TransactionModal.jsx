import React, { useState } from "react";

const TransactionModal = ({isOpen, onClose, onSubmit, type}) => {
    const [formData, setFormData] = useState({
        amount: '',
        description: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        notes: ''
    });
    const [loading, setLoading] = useState(false);
    const categories = ['Food', 'Rent', 'Utilities', 'Entertainment', 
    'Transport', 'Shopping', 'Healthcare', 'Education', 'Income', 'Other'];

    const handleChange = async (e) => {
        e.preventDefault();
        // setLoading(true);    
            
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async(e) => {
        console.log("handle submit called");
        
        e.preventDefault();
        setLoading(true);
        // const transactionData = {
        //     ...formData,
        //     amount: parseFloat(formData.amount),
        //     type: type
        // };

        try{
            const data = {
                amount: parseFloat(formData.amount),
                description: formData.description,
                category: formData.category,
                date: formData.date,
                notes: formData.notes,
                type: type  
            }
            console.log("Transaction MOdal category: ", data.category);
            
            await onSubmit(data);
        }
        catch(e){
            console.error("Error submiting data", e);
            
        }
        finally{
            setLoading(false);
        }

        setFormData({
            amount: '',
            description: '',
            category: '',
            date: new Date().toISOString().split('T')[0],
            notes: ''
        });
        onClose();
    }

    if(!isOpen) return null;

    return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        {/* Container - White box with form */}
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-900">
            Add {type === 'income' ? 'Income' : 'Expense'}
        </h2>
        <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </div>
        {/* Form */}
        <div>
    <label className="block text-sm font-medium text-slate-700 mb-1">
        Amount ($)
    </label>
    <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="0.00"
        step="0.01"
        min="0.01"
        required
        className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
    />
    </div>

    <div>
    <label className="block text-sm font-medium text-slate-700 mb-1">
        Description
    </label>
    <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="e.g., Salary, Groceries, Rent"
        required
        className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
    />
    </div>
    <div>
    <label className="block text-sm font-medium text-slate-700 mb-1">
        Category
    </label>
    <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all bg-white"
    >
        {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
        ))}
    </select>
    </div>

    <div>
    <label className="block text-sm font-medium text-slate-700 mb-1">
        Notes (Optional)
    </label>
    <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Add any additional notes..."
        rows="2"
        className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all resize-none"
    />
    </div>

    <button
    onClick={handleSubmit}
    type="submit"
    disabled={loading}
    className={`w-full py-3 rounded-xl text-white font-semibold text-sm transition-all ${
        type === 'income' 
        ? 'bg-emerald-600 hover:bg-emerald-700' 
        : 'bg-rose-600 hover:bg-rose-700'
    } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
    {loading ? 'Adding...' : `Add ${type === 'income' ? 'Income' : 'Expense'}`}
    </button>
    </div>
  </div>
);
}



export default TransactionModal;