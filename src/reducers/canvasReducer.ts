
// import { CanvasMenuDispatch } from '../types/components/Canvas';
import { StateCanvas } from '../types/states/canvasState';
import { CanvasAction } from '../types/actions/index';
import { CanvasActionEnum } from '../types/index';
import { InitialState } from '../services/initialStateCanvas';
export const canvasReducer = (state: StateCanvas = InitialState, action: CanvasAction): StateCanvas => {
    switch (action.type) {
        case CanvasActionEnum.SET_IS_DRAWING:
            return {
                ...state,
                isDrawing: action.isDrawing
            }
        case CanvasActionEnum.SET_LINE_WIDTH:
            return {
                ...state,
                lineWidth: action.lineWidth
            }
        case CanvasActionEnum.SET_LINE_COLOR:
            return {
                ...state,
                lineColor: action.lineColor
            }
        case CanvasActionEnum.SET_OPACITY:
            return {
                ...state,
                lineOpacity: action.lineOpacity
            }
        default:
            return state;
    }
}