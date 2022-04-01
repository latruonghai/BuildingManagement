import axios from "axios";
import { ApartmentDataRequest } from '../types/model/requestType';
import { HEADERS } from './constant';

export const uploadImage = async (imageRequest:  ApartmentDataRequest) => {
    const url = "http://localhost:8080/admin/api/apartment/add";
    const response = await axios(
        {
            method: "POST",
            headers: HEADERS,
            url: url,
            data: imageRequest
        }
    );
    if(response.status === 200){
        alert("Uploaded successfully");
    }
    else if(response.status===403){
        alert("You are not authorized to upload image");
    }
}