// import { updateRequest } from './requestHandle';
import { BACKEND_URL, BACKEND_LOGIN, BACKEND_ADMIN_URL } from './../services/constant';
import axios from 'axios';
import { HEADERS } from '../services/constant';
import { useDispatch } from 'react-redux';
import { slideShowImageHandleAction } from '../actions';
import { ImageHandleActionEnum } from '../types';
import { getImageSlideShowApartmentData } from './handleArray';


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

export const updateRequestUser = async (data: any) => {
    try{
        const response = await axios(
        {
            method: 'POST',
            url: `${BACKEND_ADMIN_URL}apartment/update`,
            headers: HEADERS,
            data: data
            
        });
        if(response.status === 200){
            alert("Success Update");
            
        }
        else if(response.status === 403){
            alert("You are not authorized to update");
        }
    }
    catch(error){
        console.log(error);
    }
}



export const updateRequestAdmin = (data: any) => {
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsYXRydW9uZ2hhaSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJpbWFnZTpyZWFkIn0seyJhdXRob3JpdHkiOiJpbWFnZTp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiaWF0IjoxNjQ4NTY0MzkwLCJleHAiOjE2NDk3NzM5OTB9.rDvNPRN8I8OoTjqrC0e-I-g4TRDV1U6obm8KAVRXgP7c8QDhVb9-coJffVSfyVDhejkho7mwRja5QmsIGUC9XA");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(data);

var requestOptions = {
  method: 'post',
  headers: HEADERS,
  body: raw,
//   mode: "no-cors",
  redirect: 'follow'
};

fetch("http://localhost:8080/admin/api/apartment/update", requestOptions as RequestInit)
  .then(response => response.text())
  .then(result => alert("Success"))
  .catch(error => console.log('error', error));
}
export async function fetchData(id: number, callback: any) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        console.log("Fetch Data");
            try {
                const response = await axios(
                    {
                        method: "get",
                        url: `${BACKEND_URL}getApartmentWithBuildingId/${id}`,
                        headers: HEADERS,

                    }
                );
                if (response.status === 200) {
                    console.log("Success");
                    console.log("Response", response.data);
                    const dataImageApartment = getImageSlideShowApartmentData(response.data.body);
                    // console.log("Data image", dataImageApartment);
                    callback(slideShowImageHandleAction(ImageHandleActionEnum.GET_ALL_IMAGES, {imageDataArray: dataImageApartment} ))
                    // dispatch(slideShowImageHandleAction(ImageHandleActionEnum.GET_ALL_IMAGES, imageDataSlideShow ))
                } else {
                    console.log(response.status);
                }
            } catch (error) {
                console.log(error);
            }
        }