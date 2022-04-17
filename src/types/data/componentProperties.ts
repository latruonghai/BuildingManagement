import { ImageSlideShowState } from './../states/imageState';
import { ReactComponentSelectionEnum } from './../index';
import { Dispatch } from 'react';
import { OptionView } from '../props/index';
import { reactComponentSelectionAction } from '../../actions/elementReactAction';
import { TableData } from '.';

export const optionViewPropertiesArray = (
    dispatch: Dispatch<any>
): OptionView[] => {
    const array: OptionView[] = [
        {
            class_name: 'fas fa-image',
            title: 'Change to slideshow view',
            onClickHandler: (ev: any) => {
                dispatch(
                    reactComponentSelectionAction(
                        ReactComponentSelectionEnum.SLIDE_SHOW
                    )
                );
            }
        },
        {
            class_name: 'fas fa-table',
            title: 'Change to table view',
            onClickHandler: (ev: any) => {
                dispatch(
                    reactComponentSelectionAction(
                        ReactComponentSelectionEnum.TABLE_VIEW
                    )
                );
            }
        }
    ];

    return array;
};

export const tableProperties = (
    dataArray: ImageSlideShowState[]
): TableData => {
    const tableDataArray: TableData = {
        headers: ['ID', 'Name', 'Image Display', 'Option'],
        body: dataArray
    };
    return tableDataArray;
};
