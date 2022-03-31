import { useEffect } from "react"
import axios from 'axios';
import { BACKEND_URL, HEADERS } from '../services/constant';
import { getImageSlideShowApartmentData } from '../utils/handleArray';
import { useDispatch } from "react-redux";
import { slideShowImageHandleAction } from '../actions/index';
import { ImageHandleActionEnum } from '../types/index';

export const useFetchApartments = (id: number) => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
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
                    dispatch(slideShowImageHandleAction(ImageHandleActionEnum.GET_ALL_IMAGES, {imageDataArray: dataImageApartment} ))
                } else {
                    console.log(response.status);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);
}