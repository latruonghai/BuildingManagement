import { StateCanvas, ImagePaintingState } from '../types/states/canvasState';
import { ImageDataState, ImageUploadState } from '../types/states/imageState';
import { ApartmentDataRequest } from '../types/model/requestType';
export const InitialState: StateCanvas = {
    isDrawing: false,
    lineColor: 'black',
    lineWidth: 5,
    lineOpacity: 100,
    isShowing: false
};
export const InitialImagePaintingData: ImagePaintingState = {
    presentCanvasElement:
        'data:image/png;base64,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MgHFzDIvrQkQIECAAAECBAgQIECAAAECBAgQGCSgmDkI3rAECBAgQIAAAQIECBAgQIAAAQIECJQJKGaWeWlNgAABAgQIECBAgAABAgQIECBAgMAgAcXMQfCGJUCAAAECBAgQIECAAAECBAgQIECgTEAxs8xLawIECBAgQIAAAQIECBAgQIAAAQIEBgkoZg6CNywBAgQIECBAgAABAgQIECBAgAABAmUCipllXloTIECAAAECBAgQIECAAAECBAgQIDBIQDFzELxhCRAgQIAAAQIECBAgQIAAAQIECBAoE1DMLPPSmgABAgQIECBAgAABAgQIECBAgACBQQKKmYPgDUuAAAECBAgQIECAAAECBAgQIECAQJmAYmaZl9YECBAgQIAAAQIECBAgQIAAAQIECAwSUMwcBG9YAgQIECBAgAABAgQIECBAgAABAgTKBBQzy7y0JkCAAAECBAgQIECAAAECBAgQIEBgkIBi5iB4wxIgQIAAAQIECBAgQIAAAQIECBAgUCagmFnmpTUBAgQIECBAgAABAgQIECBAgAABAoMEFDMHwRuWAAECBAgQIECAAAECBAgQIECAAIEyAcXMMi+tCRAgQIAAAQIECBAgQIAAAQIECBAYJKCYOQjesAQIECBAgAABAgQIECBAgAABAgQIlAkoZpZ5aU2AAAECBAgQIECAAAECBAgQIECAwCABxcxB8IYlQIAAAQIECBAgQIAAAQIECBAgQKBMQDGzzEtrAgQIECBAgAABAgQIECBAgAABAgQGCShmDoI3LAECBAgQIECAAAECBAgQIECAAAECZQKKmWVeWhMgQIAAAQIECBAgQIAAAQIECBAgMEhAMXMQvGEJECBAgAABAgQIECBAgAABAgQIECgTUMws89KaAAECBAgQIECAAAECBAgQIECAAIFBAoqZg+ANS4AAAQIECBAgQIAAAQIECBAgQIBAmYBiZpmX1gQIECBAgAABAgQIECBAgAABAgQIDBJQzBwEb1gCBAgQIECAAAECBAgQIECAAAECBMoEFDPLvLQmQIAAAQIECBAgQIAAAQIECBAgQGCQgGLmIHjDEiBAgAABAgQIECBAgAABAgQIECBQJqCYWealNQECBAgQIECAAAECBAgQIECAAAECgwQUMwfBG5YAAQIECBAgQIAAAQIECBAgQIAAgTIBxcwyL60JECBAgAABAgQIECBAgAABAgQIEBgkoJg5CN6wBAgQIECAAAECBAgQIECAAAECBAiUCShmlnlpTYAAAQIECBAgQIAAAQIECBAgQIDAIAHFzEHwhiVAgAABAgQIECBAgAABAgQIECBAoExAMbPMS2sCBAgQIECAAAECBAgQIECAAAECBAYJKGYOgjcsAQIECBAgQIAAAQIECBAgQIAAAQJlAoqZZV5aEyBAgAABAgQIECBAgAABAgQIECAwSEAxcxC8YQkQIECAAAECBAgQIECAAAECBAgQKBNQzCzz0poAAQIECBAgQIAAAQIECBAgQIAAgUECipmD4A1LgAABAgQIECBAgAABAgQIECBAgECZgGJmmZfWBAgQIECAAAECBAgQIECAAAECBAgMElDMHARvWAIECBAgQIAAAQIECBAgQIAAAQIEygQUM8u8tCZAgAABAgQIECBAgAABAgQIECBAYJCAYuYgeMMSIECAAAECBAgQIECAAAECBAgQIFAmoJhZ5qU1AQIECBAgQIAAAQIECBAgQIAAAQKDBBQzB8EblgABAgQIECBAgAABAgQIECBAgACBMgHFzDIvrQkQIECAAAECBAgQIECAAAECBAgQGCSgmDkI3rAECBAgQIAAAQIECBAgQIAAAQIECJQJKGaWeWlNgAABAgQIECBAgAABAgQIECBAgMAgAcXMQfCGJUCAAAECBAgQIECAAAECBAgQIECgTEAxs8xLawIECBAgQIAAAQIECBAgQIAAAQIEBgkoZg6CNywBAgQIECBAgAABAgQIECBAgAABAmUCipllXloTIECAAAECBAgQIECAAAECBAgQIDBIQDFzELxhCRAgQIAAAQIECBAgQIAAAQIECBAoE1DMLPPSmgABAgQIECBAgAABAgQIECBAgACBQQKKmYPgDUuAAAECBAgQIECAAAECBAgQIECAQJmAYmaZl9YECBAgQIAAAQIECBAgQIAAAQIECAwSUMwcBG9YAgQIECBAgAABAgQIECBAgAABAgTKBBQzy7y0JkCAAAECBAgQIECAAAECBAgQIEBgkIBi5iB4wxIgQIAAAQIECBAgQIAAAQIECBAgUCagmFnmpTUBAgQIECBAgAABAgQIECBAgAABAoMEFDMHwRuWAAECBAgQIECAAAECBAgQIECAAIEyAcXMMi+tCRAgQIAAAQIECBAgQIAAAQIECBAYJKCYOQjesAQIECBAgAABAgQIECBAgAABAgQIlAkoZpZ5aU2AAAECBAgQIECAAAECBAgQIECAwCABxcxB8IYlQIAAAQIECBAgQIAAAQIECBAgQKBMQDGzzEtrAgQIECBAgAABAgQIECBAgAABAgQGCShmDoI3LAECBAgQIECAAAECBAgQIECAAAECZQKKmWVeWhMgQIAAAQIECBAgQIAAAQIECBAgMEhAMXMQvGEJECBAgAABAgQIECBAgAABAgQIECgTUMws89KaAAECBAgQIECAAAECBAgQIECAAIFBAoqZg+ANS4AAAQIECBAgQIAAAQIECBAgQIBAmYBiZpmX1gQIECBAgAABAgQIECBAgAABAgQIDBJQzBwEb1gCBAgQIECAAAECBAgQIECAAAECBMoEFDPLvLQmQIAAAQIECBAgQIAAAQIECBAgQGCQgGLmIHjDEiBAgAABAgQIECBAgAABAgQIECBQJqCYWealNQECBAgQIECAAAECBAgQIECAAAECgwQUMwfBG5YAAQIECBAgQIAAAQIECBAgQIAAgTIBxcwyL60JECBAgAABAgQIECBAgAABAgQIEBgkoJg5CN6wBAgQIECAAAECBAgQIECAAAECBAiUCShmlnlpTYAAAQIECBAgQIAAAQIECBAgQIDAIAHFzEHwhiVAgAABAgQIECBAgAABAgQIECBAoExAMbPMS2sCBAgQIECAAAECBAgQIECAAAECBAYJKGYOgjcsAQIECBAgQIAAAQIECBAgQIAAAQJlAoqZZV5aEyBAgAABAgQIECBAgAABAgQIECAwSEAxcxC8YQkQIECAAAECBAgQIECAAAECBAgQKBNQzCzz0poAAQIECBAgQIAAAQIECBAgQIAAgUECipmD4A1LgAABAgQIECBAgAABAgQIECBAgECZgGJmmZfWBAgQIECAAAECBAgQIECAAAECBAgMElDMHARvWAIECBAgQIAAAQIECBAgQIAAAQIEygQUM8u8tCZAgAABAgQIECBAgAABAgQIECBAYJCAYuYgeMMSIECAAAECBAgQIECAAAECBAgQIFAmoJhZ5qU1AQIECBAgQIAAAQIECBAgQIAAAQKDBBQzB8EblgABAgQIECBAgAABAgQIECBAgACBMgHFzDIvrQkQIECAAAECBAgQIECAAAECBAgQGCSgmDkI3rAECBAgQIAAAQIECBAgQIAAAQIECJQJKGaWeWlNgAABAgQIECBAgAABAgQIECBAgMAgAcXMQfCGJUCAAAECBAgQIECAAAECBAgQIECgTEAxs8xLawIECBAgQIAAAQIECBAgQIAAAQIEBgkoZg6CNywBAgQIECBAgAABAgQIECBAgAABAmUCipllXloTIECAAAECBAgQIECAAAECBAgQIDBIQDFzELxhCRAgQIAAAQIECBAgQIAAAQIECBAoE1DMLPPSmgABAgQIECBAgAABAgQIECBAgACBQQKKmYPgDUuAAAECBAgQIECAAAECBAgQIECAQJmAYmaZl9YECBAgQIAAAQIECBAgQIAAAQIECAwSUMwcBG9YAgQIECBAgAABAgQIECBAgAABAgTKBBQzy7y0JkCAAAECBAgQIECAAAECBAgQIEBgkIBi5iB4wxIgQIAAAQIECBAgQIAAAQIECBAgUCagmFnmpTUBe7aJzwAAA5FJREFUAgQIECBAgAABAgQIECBAgAABAoMEFDMHwRuWAAECBAgQIECAAAECBAgQIECAAIEyAcXMMi+tCRAgQIAAAQIECBAgQIAAAQIECBAYJKCYOQjesAQIECBAgAABAgQIECBAgAABAgQIlAkoZpZ5aU2AAAECBAgQIECAAAECBAgQIECAwCABxcxB8IYlQIAAAQIECBAgQIAAAQIECBAgQKBMQDGzzEtrAgQIECBAgAABAgQIECBAgAABAgQGCShmDoI3LAECBAgQIECAAAECBAgQIECAAAECZQKKmWVeWhMgQIAAAQIECBAgQIAAAQIECBAgMEhAMXMQvGEJECBAgAABAgQIECBAgAABAgQIECgTUMws89KaAAECBAgQIECAAAECBAgQIECAAIFBAoqZg+ANS4AAAQIECBAgQIAAAQIECBAgQIBAmYBiZpmX1gQIECBAgAABAgQIECBAgAABAgQIDBJQzBwEb1gCBAgQIECAAAECBAgQIECAAAECBMoEFDPLvLQmQIAAAQIECBAgQIAAAQIECBAgQGCQgGLmIHjDEiBAgAABAgQIECBAgAABAgQIECBQJqCYWealNQECBAgQIECAAAECBAgQIECAAAECgwQUMwfBG5YAAQIECBAgQIAAAQIECBAgQIAAgTIBxcwyL60JECBAgAABAgQIECBAgAABAgQIEBgkoJg5CN6wBAgQIECAAAECBAgQIECAAAECBAiUCShmlnlpTYAAAQIECBAgQIAAAQIECBAgQIDAIAHFzEHwhiVAgAABAgQIECBAgAABAgQIECBAoExAMbPMS2sCBAgQIECAAAECBAgQIECAAAECBAYJKGYOgjcsAQIECBAgQIAAAQIECBAgQIAAAQJlAoqZZV5aEyBAgAABAgQIECBAgAABAgQIECAwSEAxcxC8YQkQIECAAAECBAgQIECAAAECBAgQKBNQzCzz0poAAQIECBAgQIAAAQIECBAgQIAAgUECipmD4A1LgAABAgQIECBAgAABAgQIECBAgECZgGJmmZfWBAgQIECAAAECBAgQIECAAAECBAgMElDMHARvWAIECBAgQIAAAQIECBAgQIAAAQIEygQUM8u8tCZAgAABAgQIECBAgAABAgQIECBAYJCAYuYgeMMSIECAAAECBAgQIECAAAECBAgQIFAmoJhZ5qU1AQIECBAgQIAAAQIECBAgQIAAAQKDBP5/ZP0uMGo/8IAAAAAASUVORK5CYII=',
    redoCurrentCanvas: [],
    undoCurrentCanvas: []
};

export const initialStateForImage: ImageDataState = {
    imageDataArray: [{ imSrc: '', orderInImage: 0 }]
};

export const initialApartmentRequest: ApartmentDataRequest = {
    name: '',
    image_path: '',
    description: '',
    id_building: 0,
    image_bye_string: ''
};

export const initialUploadState: ImageUploadState = {
    imgSrc: '',
    name: '',
    imageNameFile: ''
};
