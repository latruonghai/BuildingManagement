import { Dispatch } from 'react';
import { BasicComponentProps } from './index';
import { RedoUndoAction, CanvasAction } from '../actions/index';
export interface CanvasMenuDispatch extends BasicComponentProps {
    setLineColor?: Dispatch<string>;
    setLineWidth?: Dispatch<number>;
    setLineOpacity?: Dispatch<number>;
    setIsDrawing?: Dispatch<boolean>;
    dispatch?: Dispatch<CanvasAction | RedoUndoAction>;
}


