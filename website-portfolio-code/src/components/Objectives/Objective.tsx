/**
 * Objective
 * 
 * @author Rithie Natan
 * @date 2023-01-30
 * Last update: 2023-01-30
 */
//---------- Imports ----------
//----- Components -----
import Divider from "@mui/material/Divider";


//---------- Custom Imports ----------
import style from "./Objective.module.scss";


//---------- Exports ----------
/**
 * Objective component
 * 
 * @returns {JSX.Element}
 */
export default function Hobbies(): JSX.Element
{
    return (
        <div className={style.container__Objective}>
            <h2>Objective</h2>
            <Divider />
            <div className={style.description}>
                <p>Input text here!</p>
            </div>
        </div>
    );
}//end Hobbies()