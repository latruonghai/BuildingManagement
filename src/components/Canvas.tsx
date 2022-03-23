import React, { Fragment, MutableRefObject, useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import { CanvasMenuDispatch } from '../types/components/Canvas';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { canvasActions, redoUndoAction } from '../actions/index';
import { CanvasActionEnum, RedoUndoActionEnum } from '../types/index';
import { Dispatch } from 'react';
import { StateCanvas } from '../types/states/canvasState';
import { createElement, canvasDrawing } from '../utils/handleJsxElement';
import "../assets/style/components/_canvas.scss";
import { CanvasProps } from '../types/props/index';
import Button from './Button';

const Canvas = ({ isShowing, imgSrc, toggle }: CanvasProps): JSX.Element => {
    const canvasRef: MutableRefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null) as MutableRefObject<HTMLCanvasElement>;  
    // console.log("Rerender")
    const ctxRef: MutableRefObject<CanvasRenderingContext2D> = useRef<CanvasRenderingContext2D>(null) as MutableRefObject<CanvasRenderingContext2D>;
    const stateCanvas = useSelector((state: RootState) => state.canvasReducer);
    const dispatch = useDispatch<Dispatch<StateCanvas>>();
    canvasDrawing(canvasRef, ctxRef, imgSrc as string);
    try {
        useEffect(() => {
            // console
            console.log("New Img", imgSrc);
            const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
            const ctx: CanvasRenderingContext2D = canvas!.getContext('2d') as CanvasRenderingContext2D;
            ctx!.lineCap = 'round';
            ctx!.lineJoin = 'round';
            
            ctx!.globalAlpha = stateCanvas["lineOpacity"] as number;
            ctx!.strokeStyle = stateCanvas["lineColor"] as string;
            ctx!.lineWidth = stateCanvas["lineWidth"] as number;
            // let img = new Image();
            // img.crossOrigin = "*";
            // img.src = imSrc;
            // 
            ctxRef.current = ctx;

        }, [stateCanvas["lineColor"], stateCanvas["lineOpacity"], stateCanvas["lineWidth"], imgSrc]);
    }
    catch (e) {
        console.log(e);
    }

    const handleClick = () => {
        console.log("handleClick");
        const canvas = canvasRef.current;

        const ctx = canvas!.getContext('2d');
        ctx!.drawImage(createElement(imgSrc as string), 0, 0, canvas!.width, canvas!.height);
        ctxRef.current = ctx as CanvasRenderingContext2D;
    }
    const startDrawing = (ev: any) => {
        // console.log(ev.which);
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(ev.nativeEvent.offsetX, ev.nativeEvent.offsetY);
        dispatch(canvasActions(CanvasActionEnum.SET_IS_DRAWING, true));
    };

    const endDrawing = (ev: any) => {
        ctxRef.current.closePath();
        const canvas = canvasRef.current;
        const ctx = canvas!.getContext('2d');
        let image: string;
        try{
            image = canvas?.toDataURL!("image/png") as string;
        }
        catch(e){
            console.log(e);
        }
        // console.log(image);  // here is the most important part because if you dont replace you will get a DOM 18 exception.
        ctx!.drawImage(createElement(imgSrc as string), 0, 0, canvas!.width, canvas!.height);
        ctxRef.current = ctx as CanvasRenderingContext2D;
        // console.log(stateCanvas.)
        // window.location.href = image as string;
        setTimeout(() => {dispatch(redoUndoAction(RedoUndoActionEnum.CURRENT_STATE, image as string));
        }
            , 10);
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
                <h1>Paint App</h1>
                <div className="drawing-section overflow-auto">
                    <Menu
                        dispatch={dispatch}
                    />
                    <canvas
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
                <div className="button-area">
                    <Button classNameStyle="font-medium mb-2" contentButton="Add Image" onClickHandler={handleClick} />
                </div>
            </div>
        </Fragment>
        , document.body) : <div></div>
}

const Menu = ({ dispatch }: CanvasMenuDispatch): JSX.Element => {
    // const dispatch = useDispatch();
    const stateImsrc = useSelector((state: RootState) => state.redoUndoReducer.imSrc);
    return (
        <Fragment>
            <div className="menu">
                <label>Line Color</label>
                <input type="color" onChange={(ev) => dispatch!(canvasActions(CanvasActionEnum.SET_LINE_COLOR, ev.target.value))} />
                <label>Brush Width</label>
                <input type="range" min="3" max="20" onChange={(ev) => dispatch!(canvasActions(CanvasActionEnum.SET_LINE_WIDTH, ev.target.value))} />
                <label>Brush Opacity</label>
                <input type="range" min="0" max="100" step="1" onChange={(ev) => dispatch!(canvasActions(CanvasActionEnum.SET_OPACITY, Number(ev.target.value) / 100))} />
                <Button classNameStyle="fas fa-undo" contentButton="" onClickHandler={
                    () => dispatch!(redoUndoAction(RedoUndoActionEnum.UNDO, stateImsrc))} />
                <Button classNameStyle="fas fa-redo" contentButton="" />
            </div>
        </Fragment>
    )
}
export default Canvas;