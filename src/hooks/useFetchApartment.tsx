import { useEffect } from "react"
import axios from 'axios';
import { BACKEND_URL, HEADERS } from '../services/constant';
import { getImageSlideShowApartmentData } from '../utils/handleArray';
import { useDispatch } from "react-redux";
import { slideShowImageHandleAction } from '../actions/index';
import { ImageHandleActionEnum } from '../types/index';
import { fetchData } from "../utils/requestHandle";

