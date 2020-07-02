/*----- Imports React and others -----*/
import React from 'react';
import Divider from '@material-ui/core/Divider';

/*----- Import css -----*/
import './NameAndRole.scss';

/*----- Classes and Functions -----*/
function NameAndRole()
{
    return(
        <div className="container__NameAndRole">
            <h1>Your name</h1>
            <Divider />
            <h3>Your role</h3>
        </div>
    );
}//end NameAndRole()

export default NameAndRole;