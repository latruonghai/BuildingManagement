export interface StateCanvas {
    isDrawing?: boolean;
    lineColor?: string;
    lineWidth?: number;
    lineOpacity?: number;
    isShowing?: boolean;
}

export interface ImagePaintingState {
    presentCanvasElement: string;
    redoCurrentCanvas?: string[];
    undoCurrentCanvas?: string[];
}