/*----- Imports React and others -----*/
import React from 'react';
import Divider from '@material-ui/core/Divider';

/*----- Import css -----*/
import './Objective.scss';

/*----- Classes and Functions -----*/
function Objective()
{
    return(
        <div className="container__Objective">
            <h2>Objective</h2>
            <Divider />
            <div className="description">
                <p>Input text here!</p>
            </div>
        </div>
    );
}//end Objective()

export default Objective;