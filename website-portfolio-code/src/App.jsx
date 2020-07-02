/*----- Imports React and others -----*/
import React from 'react';

/*----- Import css -----*/
import './App.scss';

/*----- Components imports -----*/
import Container from '@material-ui/core/Container';
import BackgroundParticle from './Components/Particle-background/BackgroundParticle.jsx';

/*----- leftBox components ------*/
import PhotoAvatar from './Components/Photo-Avatar/PhotoAvatar.jsx';
import SoftSkills from './Components/Soft-skills/SoftSkills.jsx';
import HardSkills from './Components/Hard-skills/HardSkills.jsx';
import Language from './Components/Language/Language.jsx';
import Hobbies from './Components/Hobbies/Hobbies.jsx';

/*----- rightBox components -----*/
import NameAndRole from './Components/Name-and-role/NameAndRole.jsx';
import AcademicHistoric from './Components/Academic-historic/AcademicHistoric.jsx';
import ProfessionalHistoric from './Components/Profissional-Historic/ProfessionalHistoric.jsx';
import Objective from './Components/Objectives/Objective.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';

/*----- Classes and Functions -----*/
function App()
{
  return(
    <div>
      <React.Fragment>
        <Container maxWidth="lg" fixed className="blurDiv">
          <div className="leftBox">
            <PhotoAvatar />
            <SoftSkills />
            <HardSkills />
            <Language />
            <Hobbies />
          </div>
          <div className="rightBox">
            <NameAndRole />
            <Objective />
            <AcademicHistoric />
            <ProfessionalHistoric />
            <Contacts />
          </div>
        </Container>
        <BackgroundParticle />
      </React.Fragment>
    </div>
  );
}//end App()

export default App;
