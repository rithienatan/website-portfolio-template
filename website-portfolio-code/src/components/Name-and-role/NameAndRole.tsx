/**
 * Name and Role
 * 
 * @author Rithie Natan
 * @date 2023-01-30
 * Last update: 2023-01-30
 */
//---------- Imports ----------
//----- Components -----
import Divider from "@mui/material/Divider";


//---------- Custom Imports ----------
import style from "./NameAndRole.module.scss";


//---------- Exports ----------
/**
 * Name and Role component
 * 
 * @returns {JSX.Element}
 */
export default function Hobbies(): JSX.Element
{
    return (
        <div className={style.container__NameAndRole}>
            <h1>Your name</h1>
            <Divider />
            <h3>Your role</h3>
        </div>
    );
}//end Hobbies()