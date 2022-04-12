// import { updateRequest } from './requestHandle';
import {
    BACKEND_URL,
    BACKEND_ADMIN_URL,
    BACKEND_LOGIN
} from './../services/constant';
import axios from 'axios';
import { HEADERS } from '../services/constant';
import {
    slideShowImageHandleAction
} from '../actions';
import {
    ImageHandleActionEnum
} from '../types';
import { getImageSlideShowApartmentData, updateArrayImageView } from './handleArray';
import { BuildingDataRequest } from '../types/model/requestType';
import { getImageFromApiForImageView } from '../actions/index';
import { ImageViewHandleActionEnum } from '../types/index';
import { Dispatch } from 'react';
import { getFullAuthorizationString } from './handleString';



export const requestBuilding = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${BACKEND_URL}buildings/`,
            headers: HEADERS,
        });

        if (response.status === 200) {


            return response.data.body;
        } else {


        }
        return response;
    } catch (error) {

    }
}

export const loginHandle = () => {
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

            if (response.ok) {

                return response;
            }
            throw Error(response.statusText);
        })
        .then(result => {
            alert("Success");
        })
        .catch(error => alert("Error"));

}

export const updateRequestUser = async (data: any) => {
    try {
        const response = await axios({
            method: 'PUT',
            url: `${BACKEND_ADMIN_URL}apartment/`,
            headers: {
                ...HEADERS,
                "Authorization": getFullAuthorizationString()
            },
            data: data

        });
        if (response.status === 200) {
            alert("Success Update");

        } else if (response.status === 403) {
            alert("You are not authorized to update");
        }
    } catch (error) {

    }
}



export const updateRequestAdmin = (data: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsYXRydW9uZ2hhaSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJpbWFnZTpyZWFkIn0seyJhdXRob3JpdHkiOiJpbWFnZTp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiaWF0IjoxNjQ4NTY0MzkwLCJleHAiOjE2NDk3NzM5OTB9.rDvNPRN8I8OoTjqrC0e-I-g4TRDV1U6obm8KAVRXgP7c8QDhVb9-coJffVSfyVDhejkho7mwRja5QmsIGUC9XA");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
        method: 'post',
        headers: {
            ...HEADERS,
            "Authorization": getFullAuthorizationString()
        },
        body: raw,
        //   mode: "no-cors",
        redirect: 'follow'
    };

    fetch("http://localhost:8080/admin/api/apartment/update", requestOptions as RequestInit)
        .then(response => response.text())
        .then(result => alert("Success"))
        .catch(error => alert("Error"));
}
export async function fetchDataApartment(id: number, callback: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    try {
        const response = await axios({
            method: "get",
            url: `${BACKEND_URL}getApartmentWithBuildingId/${id}`,
            headers: {
                ...HEADERS,
                "Authorization": getFullAuthorizationString()
            },

        });
        if (response.status === 200) {


            const dataImageApartment = getImageSlideShowApartmentData(response.data.body);
            // 
            callback(slideShowImageHandleAction(ImageHandleActionEnum.GET_ALL_IMAGES, {
                imageDataArray: dataImageApartment
            }))
            // dispatch(slideShowImageHandleAction(ImageHandleActionEnum.GET_ALL_IMAGES, imageDataSlideShow ))
        } else {

        }
    } catch (error) {

    }
}

export const delApartmentImageRequest = async (id: number) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${BACKEND_ADMIN_URL}apartment/${id}`,
            headers: {
                ...HEADERS,
                "Authorization": getFullAuthorizationString()
            },
        });
        if (response.status === 200) {
            alert("Success Delete");

        } else if (response.status === 403) {
            alert("You are not authorized to delete");
        }
    } catch (error) {

    }
}

export const addBuildingRequest = async (data: BuildingDataRequest) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `${BACKEND_ADMIN_URL}building/`,
            headers: {
                ...HEADERS,
                "Authorization": getFullAuthorizationString()
            },
            data: data

        });
        if (response.status === 200) {

            alert("Success Add");

        } else if (response.status === 403) {
            alert("You are not authorized to add");
        }
    } catch (error) {
        // console.log(error);
        alert(error);
    }
}

export const FetchAllBuilding = async (callback: Dispatch<any>) => {

    try {
        const response = await axios(
            {
                method: 'get',
                url: `${BACKEND_URL}buildings/`,
                headers: {
                    ...HEADERS,
                    "Authorization": getFullAuthorizationString()
                },
            }
        );

        if (response.status === 200) {
            // alert("Success");
            // 
            const dataImageVIew = updateArrayImageView(response.data.body);
            callback(getImageFromApiForImageView(ImageViewHandleActionEnum.FETCH_IMAGE_VIEW_DATA,
                dataImageVIew))
        }
        else {


        }
    }
    catch (error) {

    }
}

// export const deleteApartmentData = async (id: number) => {
//     try{
//         const response = 
//     }
// }
export const login = async (username: string, password: string) => {
    return await axios({
        method: 'post',
        url: BACKEND_LOGIN,
        headers: HEADERS,
        data: {
            username: username,
            password: password
        }

    });
}

export const deleteBuilding = async (id: number) => {
    return await axios(
        {
            method: 'DELETE',
            url: `${BACKEND_ADMIN_URL}building/${id}`,
            headers: HEADERS,
        }
    )
}

export const loginRequest = async (username: string, password: string) => {
    return await axios({
        method: 'post',
        url: BACKEND_LOGIN,
        headers: HEADERS,
        data: {
            username: username,
            password: password
        }
    });

}