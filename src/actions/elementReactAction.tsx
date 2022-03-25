import { ReactComponentSelectionEnum, BasicActionEnum } from '../types/index';
import Slideshow from '../components/Slideshow';
import { ReactComponentSelectionAction } from '../types/actions/index';
import UploadSection from '../components/UploadSection';
import { Fragment } from 'react';
export const reactComponentSelectionAction = (type: string, state?: any): ReactComponentSelectionAction => {
    switch(type){
        case ReactComponentSelectionEnum.SLIDE_SHOW:
            return {
                type: ReactComponentSelectionEnum.SLIDE_SHOW,
                element: <Slideshow/>
            }
        case ReactComponentSelectionEnum.UPLOAD_VIEW:
            return {
                type: ReactComponentSelectionEnum.UPLOAD_VIEW,
                element: <UploadSection/>
            }
        default:
            return {
                type: BasicActionEnum.DO_NOTHING,
                element: <Fragment/>
            }   
    }
}