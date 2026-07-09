
import api from "../api/axios.js";

export const getDashboardData = async (req, res) => {
    try{
        const responce = await api.get('/dashboard');
        return responce.data;
    } 
    catch (error){
        console.log("Error getting dashboard data", error);
        
    }
}