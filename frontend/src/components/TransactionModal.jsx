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
    'Transport', 'Shopping', 'Healthcare', 'Education', 
    'Income', 'Other'];

    const handleChange = (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            await onSubmit({
                ...formData, 
                amount: parseFloat(formData.amount),
                type: type
            });
            setFormData({
                
            })
        }
    }
} 