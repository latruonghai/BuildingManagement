import React, { Fragment, MutableRefObject, useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import { CanvasMenuDispatch } from '../types/components/Canvas';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { canvasActions, redoUndoAction } from '../actions/index';
import { CanvasActionEnum, RedoUndoActionEnum } from '../types/index';
import { Dispatch } from 'react';
import { canvasDrawing } from '../utils/handleJsxElement';
import "../assets/style/components/_canvas.scss";
import { CanvasProps } from '../types/props/index';
import Button from './Button';
import { RedoUndoAction, CanvasAction } from '../types/actions/index';
// import { ImageSlideShowState } from '../types/states/imageState';
import { handleUpdateImageButton } from '../services/handleClickButton';
import { StateCanvas } from '../types/states/canvasState';


// TODO:  Handling the undo and redo action
/**
 * 
    [x] Solve the problem about the undo and redo action
BUG: Can't drawing image with canvas
BUG: Can't refresh the page after edit image
BUG: Image drawn with canvas is not be updated with the original width and height
BUG: Unknown the solving of the problem of the redo and undo action.
HACK: Try to redraw image with canvas 

 */
const Canvas = ({ isShowing, imgData, toggle }: CanvasProps): JSX.Element => {
    const canvasRef: MutableRefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null) as MutableRefObject<HTMLCanvasElement>;
    const imgSrc = imgData?.imSrc as string;

    const ctxRef: MutableRefObject<CanvasRenderingContext2D> = useRef<CanvasRenderingContext2D>(null) as MutableRefObject<CanvasRenderingContext2D>;
    const stateCanvas: StateCanvas = useSelector((state: RootState) => state.canvasReducer);
    const dispatch = useDispatch<Dispatch<CanvasAction | RedoUndoAction>>();

    try {
        useEffect(() => {
            // console
            if (isShowing === true) {
                // 
                const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
                const ctx: CanvasRenderingContext2D = canvas!.getContext('2d') as CanvasRenderingContext2D;
                ctx!.lineCap = 'round';
                ctx!.lineJoin = 'round';

                ctx!.globalAlpha = stateCanvas["lineOpacity"] as number;
                ctx!.strokeStyle = stateCanvas["lineColor"] as string;
                ctx!.lineWidth = stateCanvas["lineWidth"] as number;
                ctxRef.current = ctx;
            }

        }, [imgSrc, isShowing, stateCanvas]);
    }
    catch (e) {

    }

    const handleClick = () => {
        // 
        const canvas = canvasRef.current;

        const ctx = canvas!.getContext('2d') as CanvasRenderingContext2D;
        canvasDrawing(canvas, imgSrc as string);
        ctxRef.current = ctx as CanvasRenderingContext2D;
    }
    const startDrawing = (ev: any) => {
        // 
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(ev.nativeEvent.offsetX, ev.nativeEvent.offsetY);
        dispatch(canvasActions(CanvasActionEnum.SET_IS_DRAWING, true));
    };

    const endDrawing = (ev: any) => {
        ctxRef.current.closePath();
        // const canvas = canvasRef.current;
        // dispatch(redoUndoAction(RedoUndoActionEnum.CURRENT_STATE, canvas as HTMLCanvasElement));
        dispatch(canvasActions(CanvasActionEnum.SET_IS_DRAWING, false));
    };

    const draw = (ev: any) => {
        if (!stateCanvas["isDrawing"]) {
            return;
        }
        else {
            ctxRef.current.lineTo(ev.nativeEvent.offsetX, ev.nativeEvent.offsetY);
            ctxRef.current.stroke();
        }
    };

    return isShowing ? createPortal(
        <Fragment>
            <div className="canvas-section modal-overlay">
                <h1>Edit Image</h1>
                <div className="drawing-section overflow-auto">
                    <Menu
                        dispatch={dispatch}
                    />
                    <div className="w-full h-auto rounded-sm mt-3">
                        <canvas
                            className="fit-content"
                            ref={canvasRef}
                            width={window.innerWidth * 0.8}
                            height={window.innerHeight * 0.8}
                            onMouseDown={startDrawing}
                            onMouseUp={endDrawing}
                            onMouseMove={draw}
                            onLoad={handleClick}
                        >

                        </canvas>
                    </div>
                </div>
                <div className="button-area">
                    <Button classNameStyle="font-medium mb-2" contentButton="Add Image" onClickHandler={handleClick} />
                    <Button classNameStyle="font-medium mb-2" contentButton="Update Image"
                        onClickHandler={() => {
                            handleUpdateImageButton(canvasRef.current as HTMLCanvasElement, imgData as any);
                        }} />
                    <Button classNameStyle="font-medium mb-2 ml-2" contentButton="Exit"
                        onClickHandler={
                            () => dispatch(canvasActions(CanvasActionEnum.SET_IS_SHOWING, false))
                        } />
                </div>
            </div>
        </Fragment>
        , document.body) : <div></div>
}

const Menu = ({ dispatch }: CanvasMenuDispatch): JSX.Element => {

    return (
        <Fragment>
            <div className="menu">
                <label>Line Color</label>
                <input type="color" onChange={(ev) => dispatch!(canvasActions(CanvasActionEnum.SET_LINE_COLOR, ev.target.value))} />
                <label>Brush Width</label>
                <input type="range" min="3" max="20" onChange={(ev) => dispatch!(canvasActions(CanvasActionEnum.SET_LINE_WIDTH, ev.target.value))} />
                <label>Brush Opacity</label>
                <input type="range" min="0" max="100" step="1" onChange={(ev) => dispatch!(canvasActions(CanvasActionEnum.SET_OPACITY, Number(ev.target.value) / 100))} />

            </div>
        </Fragment>
    )
}
export default Canvas;