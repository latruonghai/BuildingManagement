import React, { Fragment } from "react";
import "../assets/style/components/_optionView.scss";
import { OptionViewProps, OptionView } from '../types/props/index';

const OptionButton = (props: OptionViewProps) => {
    return (
        <Fragment>
            <div className="option">
                {
                    props!.arrayOptionView.map((item: OptionView, index: number) => {
                        return <i title={item.title} key={index} className={`option-view ${item.class_name}`} onClick={item.onClickHandler}></i>
                    }
                    )
                }
            </div>

        </Fragment>
    )
}

export default OptionButton;