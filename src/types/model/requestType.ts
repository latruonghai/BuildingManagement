export interface ApartmentDataRequest {
    id?: number;
    image_path: string;
    description: string;
    id_building: number;
    name: string;
    image_bye_string: string;
}

export interface BuildingDataRequest {
    id?: number;
    name?: string;
    price?: number;
    num_of_rooms?: number;
}
