import api from "./axios";

export const createTransaction = async(transactionData) => {
    try{
        response = await api.post('/users/transaction', transactionData);
        return response.data;
    }
    catch(e){
        console.error("Error fetching transaction on create", e);
    }
}

export const getTransaction = async() => {
    try{
        response = await api.get('/users/transaction');
        return response.data;
    }
    catch(e){
        console.error("Error fetching transaction on get", e);
    }
}