import React from "react";
import {setClass} from "../../modules/setClass";
import {SatisfactoryProps} from "./Satisfactory.types";
import "./Satisfactory.scss";
import { Heading } from "da-awesome-library/build";

const Satisfactory = ({theme, className}: SatisfactoryProps) => {

    return (
        <div className={setClass("satisfactory", [theme], className)}>
            <Heading theme={theme} content={"Satisfactory"} size={"teaser"} />
        </div>
    )
}

export default Satisfactory
