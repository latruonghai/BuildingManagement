import { useEffect } from "react"
import axios from 'axios';
import { BACKEND_URL, HEADERS } from '../services/constant';
import { useDispatch } from "react-redux";
import { slideShowImageHandleAction } from '../actions/index';
import { ImageHandleActionEnum } from '../types/index';

