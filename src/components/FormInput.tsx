import React, { Fragment } from "react";
import Input from "./Input";
import { InputArrayProps, InputProps, FormInputProps } from '../types/props/index';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeInputField, toggleFormAction } from '../actions/index';
import { InputFormActionEnum, ToggleFormActionEnum } from '../types/index';
import Form from './Form';
import Button from "./Button";
import { RootState } from '../reducers/index';
import { addBuildingRequest, FetchAllBuilding } from '../utils/requestHandle';


const FormInput = (props: FormInputProps) => {
    const { inputArray } = props;
    const dispatch = useDispatch();
    const inputState = useSelector((state: RootState) => state.onChangeInputReducer);
    const onChangeHandler = (ev: any) => {
        const value = ev.target.value;
        const name = ev.target.name;
        console.log("name", name);
        console.log("value", value);
        dispatch(onChangeInputField(InputFormActionEnum.ON_CHANGE, {
            value: value,
            name: name
        }));

    }

    const button = <Fragment>
        <Button contentButton={"Close"} classNameStyle="close" onClickHandler={
        () => {
            dispatch(toggleFormAction(ToggleFormActionEnum.UNTOGGLE_FORM));
            // fetch
            FetchAllBuilding(dispatch);
        }
    } />
    <Button contentButton=" Save" classNameStyle="fas fa-save" onClickHandler={
        () => {
            console.log("Input", inputState);
            addBuildingRequest(inputState);
            
        }
    }></Button>
    </Fragment>
    return (
        <Fragment>
            <Form title={props.title} isFormShowing={props.isFormShowing} footerSectionComponent={button}>
                <InputSection inputArray={inputArray} onChangeCallBack={onChangeHandler} />
                {/* <Input type="submit"/> */}
            </Form>
        </Fragment>
    )
}

const InputSection = (props: InputArrayProps) => {
    return (
        <Fragment>
            <form>
                {props.inputArray.map((item: InputProps, index: number) => {
                return (
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor={item.name} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            {item.label}
                            <Input class_name="rounded-md" {...item} type={item.type} name={item.name} handleCallback={props.onChangeCallBack} />
                        </label>
                    </div>
                )
            }
            )}
            
            </form>
        </Fragment>
    )
}
export default FormInput;