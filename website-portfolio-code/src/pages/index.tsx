/**
 * Index main page
 * 
 * @author Rithie Natan
 * @date 2023-01-19
 * Last update: 2023-01-30
 */
//---------- Imports ----------
//----- Libs and Others -----
import React from "react";
import Head from "next/head";

//----- Components -----
import Container from "@mui/material/Container";


//---------- Custom Imports ----------
//----- Components -----
import AcademicHistoric from "../components/Academic-historic/AcademicHistoric";
import Contacts from "../components/Contacts/Contacts";
import HardSkills from "../components/Hard-skills/HardSkills";
import Hobbies from "../components/Hobbies/Hobbies";
import Language from "../components/Language/Language";
import NameAndRole from "../components/Name-and-role/NameAndRole";
import Objective from "../components/Objectives/Objective";
import ParticleBackground from "../components/Particle-background/ParticleBackground";
import PhotoAvatar from "../components/Photo-Avatar/PhotoAvatar";
import ProfissionalHistoric from "../components/Profissional-Historic/ProfessionalHistoric";
import SoftSkills from "../components/Soft-skills/SoftSkills";

//----- Style -----
import style from "../styles/index.module.scss"; 


//---------- Exports ----------
/**
 * Main page
 * 
 * @returns {JSX.Element}
 */
export default function Index(): JSX.Element
{
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app" />
                <link rel="manifest" href="/manifest.json" />

                <link rel="shortcut icon" type="image/png" href="curriculum-icon.png" />

                <title>Website Portfolio Code</title>
            </Head>
            <React.Fragment>
                <Container maxWidth="lg" fixed className={style.blurDiv}>
                    <div className={style.leftBox}>
                        <PhotoAvatar />
                        <SoftSkills />
                        <HardSkills />
                        <Language />
                        <Hobbies />
                    </div>
                    <div className={style.rightBox}>
                        <NameAndRole />
                        <Objective />
                        <AcademicHistoric />
                        <ProfissionalHistoric />
                        <Contacts />
                    </div>
                </Container>
                <ParticleBackground />
            </React.Fragment>
        </div>
    );
}//end Index()