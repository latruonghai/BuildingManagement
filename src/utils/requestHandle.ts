import { BACKEND_URL, BACKEND_LOGIN } from './../services/constant';
import axios from 'axios';

export const requestBuilding = async () => {
    try{
            const response = await axios(
            {
                method: 'get',
                url: `${BACKEND_URL}building/getAll`,
                headers: {
                    'Content-Type': 'application/json',
                    // "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "Access-Control-Allow-Origin": "*",

                },
            }
        );

        if(response.status === 200){
            console.log("Success");
            return response.data.body;
        }
        else{
            console.log(response.status);
            
        }
        return response;
    }
    catch(error){
        console.log(error);
    }
}

export const loginHandle = async (username: string, password: string) => {
    console.log(username, password);
    const response = await axios(
        {
            method: 'post',
            url: `${BACKEND_LOGIN}`,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
            data: {
                username: username,
                password: password
            },
        });
        if(response.status === 200){
            return response.data;
        }
}




