import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { JoinProps } from "./Join.types";
import { Heading } from "da-awesome-library/build";
import "./Join.scss";

const Join = ({theme, className}: JoinProps) => {

    useEffect(() => {
        document.title = "Join Us - Coding For Everyone"
    }, [])

    return (
        <div className={setClass("hw_join hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Join Us!"} />
        </div>
    )
}

export default Join
