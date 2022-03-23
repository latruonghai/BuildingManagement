import { StateCanvas, ImagePaintingState } from '../types/states/canvasState';
export const InitialState: StateCanvas = {
    isDrawing: false,
    lineColor: 'black',
    lineWidth: 5,
    lineOpacity: 100,
}
export const InitialImagePaintingData: ImagePaintingState = {
    imSrc: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60",
    redoImSrc: [],
    undoImSrc: [],
}