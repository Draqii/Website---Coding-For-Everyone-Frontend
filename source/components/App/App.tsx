import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import useCookie, { setItem } from "../../modules/hooks/useCookie"
import { Header, Footer, Icon, Main, Paragraph, Heading } from "da-awesome-library/build"
import { NiteSwitch } from "niteswitch"
import pageicon from "../../../public/favicon/page_icon.png"
import HomeIcon from "../../../public/svgs/home.svg"
import Home from "../p_Home/Home";
import Contact from "../p_Contact/Contact";
import PrivacyPolicy from "../p_PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../p_TermsAndConditions/TermsAndConditions";
import Guides from "../p_Guides/Guides";
import Forum from "../p_Forum/Forum";
import Join from "../p_Join/Join";
import "./App.scss";
import Satisfactory from "../Satisfactory/Satisfactory";

const App = () => {

    const [theme, setTheme]: any = useState(useCookie("hw_lightmode", "light")[0] === "light")
    const [language, setLanguage]: any = useState(useCookie("hw_language", "english")[0])
    
    const updateTheme = (isLight) => {
        setItem("hw_lightmode", isLight ? "light" : "dark", 360)
        setTheme(isLight)
    }
    
    const updateLanguage = (language) => {
        setItem("hw_language", language, 360)
        setLanguage(language)
    }

    const getTheme = () => theme ? "light" : "dark"

    return (
        <div className={setClass("hw_page", [getTheme()])}>
            <NiteSwitch 
                enabled={theme ? true : false} 
                _setEnabled={setTheme}
                onEnable={() => updateTheme(true)} 
                onDisable={() => updateTheme(false)}
            />
            <Header 
                theme={getTheme()}
                ReactLink={NavLink}
                navigation_links={[
                {to: "/", content: <Icon ReactSVG={HomeIcon} />},
                {to: "/get-started", content: "Join Us"},
                {to: "/guides", content: "Our Guides"},
                {to: "/forum", content: "Forum"},
            ]} logo_text={
                <span><span>Coding For</span><br/>
                <span className="hw_logo__secondary">Everyone</span></span>
            } logo_image={pageicon} />
            <Main>
                <Routes>
                    <Route path="/" Component={() => <Home theme={getTheme()} />} />
                    <Route path="/get-started" Component={() => <Join theme={getTheme()} />} />
                    <Route path="/satisfactory" Component={() => <Satisfactory theme={getTheme()} />} />
                    <Route path="/guides" Component={() => <Guides theme={getTheme()} />} />
                    <Route path="/forum" Component={() => <Forum theme={getTheme()} />} />
                    <Route path="/terms-and-conditions" Component={() => <TermsAndConditions theme={getTheme()} />} />
                    <Route path="/privacy-policy" Component={() => <PrivacyPolicy theme={getTheme()} />} />
                    <Route path="/contact-us" Component={() => <Contact theme={getTheme()} />} />
                </Routes>
            </Main>
            <Footer theme={getTheme()} content={<div className="hw_footer__content">
                <Heading size="large" content="Our Mission" />
                <Paragraph content="Our Mission" />
            </div>} copyrightHolder={"Coding For Everyone"} copyrightYear={"2024"} ReactLink={NavLink} navigation_links={[
                {to: "/terms-and-conditions", content: "Terms & Conditions"},
                {to: "/privacy-policy", content: "Privacy Policy"},
                {to: "/contact-us", content: "Contact Me"},
            ]} />
        </div>
    )
}

export default App