import "../assets/style/components/_table.scss";
import React from "react";
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { RowProps } from '../types/props/index';
import { TableData } from '../types/data/index';
import { tableProperties } from "../types/data/componentProperties";
import Button from "./Button";
import { ImageSlideShowState } from '../types/states/imageState';
import { onDelTableDataClickHandler, onEditTableDataClickHandler } from '../utils/handleEvents';

const Table = (props: any) => {

    const imageSlideShowState = useSelector((state: RootState) => state.imageMethodReducer);
    const tableData: TableData = tableProperties(imageSlideShowState.imageDataArray);
    // 
    // const dispatch = useDispatch();

    // const onClickHandler = (ev: any) => {
    //     const id = ev.target.id;
    //     const index = getIndexFromIdName(id);
    //     // dispatch()
    //     dispatch(canvasActions(CanvasActionEnum.SET_IS_SHOWING, true));
    //     dispatch(slideShowOrder(index, imageSlideShowState.imageDataArray.length))
    // }
    return (
        <Fragment>
            <div className="table-view">
                <table className="table-container">
                    <thead className="table-container-header">
                        {
                            tableData.body ? tableData!.headers!.map(
                                (item: any, index: number) => {
                                    return <th className="header-item" key={index} scope="col">
                                        {item}
                                    </th>
                                }
                            ) :
                                <div></div>
                        }
                    </thead>
                    <tbody>
                        {
                            tableData!.body!.map(
                                (item: ImageSlideShowState, index: number) => {
                                    return <Row body={item} id_name={`row-${index}`} />
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}


const Row = ({ body, id_name, handleCallback }: RowProps) => {


    const imageSlideShowState = useSelector((state: RootState) => state.imageMethodReducer);
    // const tableData: TableData = tableProperties(imageSlideShowState.imageDataArray);
    const idSelector = useSelector((state: RootState) => state.toggleModalReducer.idSelector);
    // 
    const dispatch = useDispatch();

    return (
        <Fragment>
            <tr id={id_name} className="rows-section !border-2">
                <th className="cell header">
                    {body.id}
                </th>
                <td className="cell ">
                    {body.title}
                </td>
                <td className="cell">
                    <img className="h-4/5" alt="" src={body.imSrc} />
                </td>
                <td>
                    <Button classNameStyle="fas fa-edit edit" onClickHandler={onEditTableDataClickHandler(dispatch, imageSlideShowState)} id_name={`button-${id_name}`} contentButton={" Edit"} ></Button>
                    <Button onClickHandler={onDelTableDataClickHandler(dispatch, imageSlideShowState, idSelector as number)} classNameStyle="fas fa-trash-alt delete" id_name={`button-${id_name}`} contentButton={" Delete"} ></Button>
                </td>
            </tr>
        </Fragment>
    )
}
export default Table;