import axios from "axios";

// const API_URL = "http://127.0.0.1:3002/users"
//https://nodejsreact1234.herokuapp.com/user/all
//https://nodejsreact1234.herokuapp.com/user/Create
//https://nodejsreact1234.herokuapp.com/user/62901e2cda45062f0cb0f5ca
//https://nodejsreact1234.herokuapp.com/user/update/6290095e1cdc0afbb304660e
//https://nodejsreact1234.herokuapp.com/user/delete/6290095e1cdc0afbb304660e


export const addUser = async (data) => {
    try{
       return await axios.post("https://nodejsreact1234.herokuapp.com/user/Create",data);
    }catch(error){
        console.log('something went wrong',error.message);
    }
}

export const getUsers = async ()=>{
    try{
         return await axios.get("https://nodejsreact1234.herokuapp.com/user/all");
    }catch(error){
        console.log("something went wrong",error.message);
    }
}

export const getUser = async (id)=>{
    console.log(id);
    const API_URL  = "https://nodejsreact1234.herokuapp.com/user"
    try{
         return await axios.get(`${API_URL}/${id}`);
    }catch(error){
        console.log("something went wrong",error.message);
    }
}


export const editUser = async (data,id)=>{
    console.log(id);
    console.log(data);
    const API_URL = "https://nodejsreact1234.herokuapp.com/user/update"
    try{
         return await axios.put(`${API_URL}/${id}`,data);
    }catch(error){
        console.log("something went wrong",error.message);
    }
}

export const deleteUser = async (id)=>{
    console.log(id);
    const API_URL = "https://nodejsreact1234.herokuapp.com/user/delete"
    try{
         return await axios.delete(`${API_URL}/${id}`);
    }catch(error){
        console.log("something went wrong",error.message);
    }
}
