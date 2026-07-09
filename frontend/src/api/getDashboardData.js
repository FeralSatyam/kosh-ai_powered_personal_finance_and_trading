


const fetchData = async (req, res) => {
    try{
        const responce = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/dashboard`);
        return responce.data;
    } 
    catch (error){
        console.log("Error getting dashboard data", error);
        
    }
}