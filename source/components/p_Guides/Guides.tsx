import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { GuidesProps } from "./Guides.types";
import { Image } from "da-awesome-library/build"
import { Heading, Section } from "da-awesome-library/build";
import image_discord from "../../../public/images/discord.png"
import image_twitch from "../../../public/images/twitch.png"
import image_youtube from "../../../public/images/youtube.png"
import "./Guides.scss";

const Guides = ({theme, className}: GuidesProps) => {

    useEffect(() => {
        document.title = "Guides - Coding For Everyone"
    }, [])

    return (
        <div className={setClass("hw_guides", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"You Can ..."} />
            <Section id="code" className="hw_guides__guide" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                <Image source={image_discord} />
                <Heading theme={theme} size="large" content={"Learn The Basics Of Coding!"} />
            </Section>
            <Section id="discord" className="hw_guides__guide" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                <Image source={image_discord} />
                <Heading theme={theme} size="large" content={"Learn To Make A Discord Bot!"} />
            </Section>
            <Section id="twitch" className="hw_guides__guide" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                <Image source={image_twitch} />
                <Heading theme={theme} size="large" content={"Learn To Make A Twitch Bot!"} />
            </Section>
            <Section id="youtube" className="hw_guides__guide" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                <Image source={image_youtube} />
                <Heading theme={theme} size="large" content={"Learn To Make A Youtube Bot!"} />
            </Section>
            <Section id="website" className="hw_guides__guide" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                <Image source={image_youtube} />
                <Heading theme={theme} size="large" content={"Learn To Make A Linktree!"} />
            </Section>
        </div>
    )
}

export default Guides
