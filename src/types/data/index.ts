export interface ImageDataResponse {
    imSrc: string;
}

export interface ImageDataDetail extends ImageDataResponse, IDData {
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
