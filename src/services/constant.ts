export const BACKEND_URL = "http://localhost:8080/api/";
export const BACKEND_ADMIN_URL = "http://localhost:8080/admin/api/";
export const BACKEND_LOGIN = "http://localhost:8080/login";
export const HEADERS = {
    'Content-Type': 'application/json',
    // "Authorization": `Bearer ${localStorage.getItem('token')}`,
    "Authorization": `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsYXRydW9uZ2hhaSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJpbWFnZTpyZWFkIn0seyJhdXRob3JpdHkiOiJpbWFnZTp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiaWF0IjoxNjQ5MTI2NDEyLCJleHAiOjE2NTAzMzYwMTJ9.-gThI9U1FYV2w8sWER7SRsd8P1T6tCgp0B6wN4TrBluNJe3OnXtFFpiZX_kpp1gh2VxzdZdnah5vDJrISY1zCQ`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
}
export const API_URL = "http://localhost:8080";
export const IMAGE_BUILDING_LINKS = "https://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg"