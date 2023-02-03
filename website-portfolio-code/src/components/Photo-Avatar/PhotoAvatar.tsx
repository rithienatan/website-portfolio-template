/**
 * Photo Avatar
 * 
 * @author Rithie Natan
 * @date 2023-01-30
 * Last update: 2023-01-30
 */
//---------- Imports ----------
//----- Components -----
import Avatar from '@mui/material/Avatar';


//---------- Custom Imports ----------
import style from "./PhotoAvatar.module.scss";


//---------- Exports ----------
/**
 * Photo Avatar component
 * 
 * @returns {JSX.Element}
 */
export default function Hobbies(): JSX.Element
{
    return (
        <div className={style.container__PhotoAvatar}>
            <Avatar src="image path from public directory" alt="Description of your photo!" sx={{ width: "15.5vh", height: "15.5vh" }} />
        </div>
    );
}//end Hobbies()