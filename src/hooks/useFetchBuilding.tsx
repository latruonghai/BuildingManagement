import { useEffect } from "react";
import axios from 'axios';
import { BACKEND_URL, HEADERS } from '../services/constant';
import { updateArrayImageView } from '../utils/handleArray';
import { useDispatch } from 'react-redux';
import { getImageFromApiForImageView } from '../actions/index';
import { ImageViewHandleActionEnum } from '../types/index';


export const useFetchBuilding = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
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
            const dataImageVIew = updateArrayImageView(response.data.body);
            dispatch(getImageFromApiForImageView(ImageViewHandleActionEnum.FETCH_IMAGE_VIEW_DATA,
                        dataImageVIew))
        }
        else{
            console.log(response.status);
            
        }
    }
    catch(error){
        console.log(error);
    }
}
fetchData();
    }, []);}
export default useFetchBuilding;