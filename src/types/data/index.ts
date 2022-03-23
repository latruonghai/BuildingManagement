export interface ImageData {
    imSrc: string;
}

export interface ImageDataDetail extends ImageData, IDData {
    description?: string;
}
export interface IDData {
    index?: number;
}
export interface ApartmentDataResponse {
    id: string;
    name: string;
    description: string;
    imgDataDetail: ImageDataDetail[];
}
