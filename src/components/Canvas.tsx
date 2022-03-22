import React, { Fragment, MutableRefObject, useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import { CanvasMenuDispatch } from '../types/components/Canvas';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { canvasActions } from '../actions/index';
import { CanvasActionEnum } from '../types/index';
import { Dispatch } from 'react';
import { StateCanvas } from '../types/states/canvasState';
import { createElement } from '../utils/handleJsxElement';
import "../assets/style/components/_canvas.scss";
import { CanvasProps } from '../types/props/index';

const Canvas = ({ isShowing, imgSrc, toggle }: CanvasProps): JSX.Element => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef: MutableRefObject<any> = useRef<CanvasRenderingContext2D>(null);
    const stateCanvas = useSelector((state: RootState) => state.canvasReducer);
    const dispatch = useDispatch<Dispatch<StateCanvas>>();
    try {
        useEffect(() => {
            const canvas = canvasRef.current;
            const ctx = canvas!.getContext('2d');
            ctx!.lineCap = 'round';
            ctx!.lineJoin = 'round';
            ctx!.globalAlpha = stateCanvas["lineOpacity"] as number;
            ctx!.strokeStyle = stateCanvas["lineColor"] as string;
            ctx!.lineWidth = stateCanvas["lineWidth"] as number;
            ctx!.drawImage(createElement(imgSrc as string), 0, 0, canvas!.width, canvas!.height);
            ctxRef.current = ctx;

        }, [stateCanvas, imgSrc]);
    }
    catch (e) {
        console.log(e);
    }

    const startDrawing = (ev: any) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(ev.nativeEvent.offsetX, ev.nativeEvent.offsetY);
        dispatch(canvasActions(CanvasActionEnum.SET_IS_DRAWING, true));
    };

    const endDrawing = (ev: any) => {
        ctxRef.current.closePath();
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
                <div className="drawing-section">
                    <Menu
                        dispatch={dispatch}
                    />
                    <canvas
                        ref={canvasRef}
                        width={`1280px`}
                        height={`720px`}
                        onMouseDown={startDrawing}
                        onMouseUp={endDrawing}
                        onMouseMove={draw}
                    >

                    </canvas>
                </div>
            </div>
        </Fragment>
        , document.body) : <div></div>
}

const Menu = ({ dispatch }: CanvasMenuDispatch): JSX.Element => {
    // const dispatch = useDispatch();
    return (
        <Fragment>
            <div className="menu">
                <label>Line Color</label>
                <input type="color" onChange={(ev) => dispatch!(canvasActions(CanvasActionEnum.SET_LINE_COLOR, ev.target.value))} />
                <label>Brush Width</label>
                <input type="range" min="3" max="20" onChange={(ev) => dispatch!(canvasActions(CanvasActionEnum.SET_LINE_WIDTH, ev.target.value))} />
                <label>Brush Opacity</label>
                <input type="range" min="0" max="1" step="0.1" onChange={(ev) => dispatch!(canvasActions(CanvasActionEnum.SET_OPACITY, Number(ev.target.value) / 100))} />
            </div>
        </Fragment>
    )
}
export default Canvas;