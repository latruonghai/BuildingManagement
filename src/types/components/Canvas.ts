import { Dispatch } from 'react';
import { BasicComponentProps } from './index';
import { StateCanvas } from '../states/canvasState';
export interface CanvasMenuDispatch extends BasicComponentProps {
    setLineColor?: Dispatch<string>;
    setLineWidth?: Dispatch<number>;
    setLineOpacity?: Dispatch<number>;
    setIsDrawing?: Dispatch<boolean>;
    dispatch?: Dispatch<StateCanvas>;
}


