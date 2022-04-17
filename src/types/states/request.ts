export interface ApartmentRequestState {
    id: number;
    name: string;
    image_byte_string: string;
    image_path: string;
    description?: string;
    id_building: number;
}

export interface BuildingRequestState {
    id: number;
    name: string;
    price: number;
    num_of_rooms: number;
}

export interface BuildingResponseState extends BuildingRequestState {}
