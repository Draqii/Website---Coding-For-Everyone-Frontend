import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import { NavLink as ReactLink } from "react-router-dom";
import { Heading, Image, NavLink, Paragraph, Section } from "da-awesome-library/build";
import img_boyraisehand from "../../../public/images/boyraisehand.jpg"
import img_boythumbsup from "../../../public/images/boythumbsup.jpg"
import "./Home.scss";

const Home = ({ theme, className }: HomeProps) => {

    useEffect(() => {
        document.title = "Coding For Everyone"
    }, [])

    return (
        <div className={setClass("hw_home hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Coding For Everyone"} />
            <Section className="hw_home__teasersections" direction={"row"} wrap={"nowrap"} gap={"medium"}>
            <Section className="hw_home__teasersection" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                <Heading theme={theme} size="large" content={"Learn Coding The Easy Way!"} />
                <Image className="hw_home__teaserimg" source={img_boythumbsup} />
                <Paragraph theme={theme} content={"Coding only gets as complicated as the one teaching makes it! We teach the fundamentals of coding"} />
            </Section>
                <Section className="hw_home__teasersection" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                    <Heading theme={theme} size="large" content={"How You Can Join!"} />
                    <Image className="hw_home__teaserimg" source={img_boyraisehand} />
                    <Paragraph theme={theme} content={"Coding only gets as complicated as the one teaching makes it! We teach the fundamentals of coding"} />
                    <NavLink theme={theme} className="hw_button" ReactLink={ReactLink} to={"/register"} content={"Get Started Now!"} />
                </Section>
            </Section>
        </div>
    )
}

export default Home
