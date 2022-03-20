import { BasicAction } from '../index';


export type FormComponentBasicProps = {
    type: string;
}

export interface ButtonProps{
    title: string;
    buttonConfig: BasicAction;
}