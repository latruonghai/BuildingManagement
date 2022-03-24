import { useDispatch } from 'react-redux';
import { toggleModal } from '../actions/index';
import React, {useCallback} from 'react';



export const useToggleSlideShowModal = ()=> {
    const dispatch = useDispatch();

    const toggleSlideShowModal = useCallback(
    () => {
        dispatch(toggleModal());
    },[]);

    

    return {
        toggleSlideShowModal,
    };
}