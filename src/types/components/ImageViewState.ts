import { BasicImageProperties } from '../basicType';
export interface ImageViewState extends BasicImageProperties{
    description?: string;
    price?: number;
    idData: number;
    num_of_rooms?: number;
}