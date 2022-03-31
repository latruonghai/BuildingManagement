import { BACKEND_URL, BACKEND_LOGIN } from './../services/constant';
import axios from 'axios';
import { callbackify } from 'util';
import { responseInterceptor } from 'http-proxy-middleware';
import { HEADERS } from '../services/constant';

export const requestBuilding = async () => {
    try{
            const response = await axios(
            {
                method: 'get',
                url: `${BACKEND_URL}building/getAll`,
                headers: HEADERS,
            }
        );

        if(response.status === 200){
            console.log("Success");
            console.log("Response", response.data);
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

export const loginHandle = () =>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");

    const raw = JSON.stringify({
    "username": "laminhhieu",
    "password": "tma@2022"
    });

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:8080/login", requestOptions as RequestInit)
    .then(response => {
        console.log(response);
        if(response.ok){
           
            return response;
        }
        throw Error(response.statusText);
    })
    .then(result => {
         for(let header of result.headers){
                console.log(header);
            }
    })
    .catch(error => console.log('error', error));

}



