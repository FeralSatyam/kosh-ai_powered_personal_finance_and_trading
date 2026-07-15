import api from "./axios";

export const createTransaction = async(transactionData) => {
    try{
        const response = await api.post('/users/transaction', transactionData);
        console.log("Transactions response", response)
        return response.data;
    }
    catch(e){
        console.error("Error fetching transaction on create", e);
    }
}

export const getTransaction = async() => {
    try{
        const response = await api.get('/users/transaction');
        // console.log("Get transaction response", response);
        return response.data;
    }
    catch(e){
        console.error("Error fetching transaction on get", e);
    }
}