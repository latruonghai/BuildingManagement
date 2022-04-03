import { useDispatch } from 'react-redux';
import { toggleModal } from '../actions/index';
import {useCallback} from 'react';



export const useToggleSlideShowModal = (id: number = 0)=> {
    const dispatch = useDispatch();

    const toggleSlideShowModal = useCallback(
    () => {
        dispatch(toggleModal(id));
    },[id]);

    

    return {
        toggleSlideShowModal,
    };
}