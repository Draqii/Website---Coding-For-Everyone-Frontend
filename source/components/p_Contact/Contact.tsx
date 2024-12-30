import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { ContactProps } from "./Contact.types";
import { Heading, Image, Paragraph, Icon, Section } from "da-awesome-library/build";
import img_lay from "../../../public/images/lay.png"
import SVG_Phone from "../../../public/svgs/phone.svg"
import SVG_Mail from "../../../public/svgs/mail.svg"
import "./Contact.scss";

const Contact = ({theme, className}: ContactProps) => {

    useEffect(() => {
        document.title = "Contact - Coding For Everyone"
    }, [])

    return (
        <div className={setClass("hw_contact hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Contact Me!"} />

            <Heading theme={theme} size="large" content={"I Am Niklas, Owner Of DraqonDevelops.com "} />
            <Section className="hw_contact__imagesection" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                <Image className="hw_contact__imagelarge" source={img_lay} />
                <Section className="hw_contact__innerimagesection" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                    <Heading theme={theme} size="medium" content={"Contact Me Using The Options Below"} />
                    <ContactDetail theme={theme} Icon={SVG_Mail} detail="muellerniklas99@gmail.com" />
                    <ContactDetail theme={theme} Icon={SVG_Phone} detail="+49 175 3402872" />
                </Section>
            </Section>
        </div>
    )
}

const ContactDetail = ({Icon: SVGIcon, detail, theme, className}: any) => {

    return (
        <div className={setClass("hw_contact__detail", [theme], className)}>
            <Icon ReactSVG={SVGIcon} />
            <Paragraph theme={theme} content={detail} />
        </div>
    )
}

export default Contact
