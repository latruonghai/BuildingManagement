import axios from "axios";
import {
    ApartmentDataRequest
} from '../types/model/requestType';
import {
    HEADERS
} from './constant';

export const uploadImage = async (imageRequest: ApartmentDataRequest) => {
    const url = "http://localhost:8080/admin/api/apartment/add";
    try {
        const response = await axios({
                method: "POST",
                headers: HEADERS,
                url: url,
                data: imageRequest
            }

        );
        if (response.status === 200) {
            alert("Uploaded successfully");
        }
    } catch (error) {
        alert(error);
    }


}