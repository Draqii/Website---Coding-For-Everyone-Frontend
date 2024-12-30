import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { ForumProps } from "./Forum.types";
import { Heading } from "da-awesome-library/build";
import "./Forum.scss";

const Forum = ({theme, className}: ForumProps) => {

    useEffect(() => {
        document.title = "Forum - Coding For Everyone"
    }, [])

    return (
        <div className={setClass("hw_forum", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Our Forum!"} />
        </div>
    )
}

export default Forum
