import { ImageData } from '../data/index';
export interface StateCanvas {
    isDrawing?: boolean;
    lineColor?: string;
    lineWidth?: number;
    lineOpacity?: number;
}

export interface ImagePaintingState extends ImageData {
    redoImSrc?: string[];
    undoImSrc?: string[];
}