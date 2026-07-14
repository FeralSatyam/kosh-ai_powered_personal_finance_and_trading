
import api from "../api/axios.js";

export const getDashboardData = async (req, res) => {
    try{
        console.log("Fetched data")
        const responce = await api.get('/users/dashboard');
        console.log("response received")
        
        return responce.data
    } 
    catch (error){
        console.log("Error getting dashboard data", error);
        
    }
}