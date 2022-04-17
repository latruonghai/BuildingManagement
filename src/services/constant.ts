import { getAuthorizationFromCookies } from '../utils/handleString';
export const BACKEND_URL = 'http://localhost:8080/api/';
export const BACKEND_ADMIN_URL = 'http://localhost:8080/admin/api/';
export const BACKEND_LOGIN = 'http://localhost:8080/login';
export const HEADERS = {
    'Content-Type': 'application/json',
    // "Authorization": `Bearer ${localStorage.getItem('token')}`,
    Authorization:
        document.cookie !== ''
            ? getAuthorizationFromCookies(document.cookie)
            : 'Bearer ',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
};
export const API_URL = 'http://localhost:8080';
export const IMAGE_BUILDING_LINKS =
    'https://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg';
