import { ImageHandleAction } from "../types"

const imageView = (state: any, action: any) => {
    switch (action.type) {
        case ImageHandleAction.UPLOAD:
            return {
                ...state,
                imageSections: [...state.imageSections, action.payload]
            }
        case ImageHandleAction.DELETE:
            return {
                ...state,
                imageSections: [...state.imageSections.slice(0, action.payload), ...state.imageSections.slice(action.payload + 1)]
            }
        case ImageHandleAction.UPDATE:
            return {
                ...state,
                imageSections: [...state.imageSections.slice(0, action.payload.index), action.payload.imageSection, ...state.imageSections.slice(action.payload.index + 1)]
            }
        default:
            return state
    }
}


export default imageView;