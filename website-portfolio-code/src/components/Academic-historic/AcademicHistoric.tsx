/**
 * Academic Historic
 * 
 * @author Rithie Natan
 * @date 2023-01-19
 * Last update: 2023-01-23
 */
//---------- Imports ----------
//----- Components -----
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//----- Icons -----
import LocalLibrarySharp from "@mui/icons-material/LocalLibrarySharp";
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';


//---------- Custom Imports ----------
import style from "./AcademicHistoric.module.scss";


//---------- Exports ----------
/**
 * Academic Historic component
 * 
 * @returns {JSX.Element}
 */
export default function AcademicHistoric()
{
    return (
        <div className={style.container__AcademicHistoric}>
            <h2>Academic Historic</h2>
            <Divider />
            <div className={style.description}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <LocalLibrarySharp />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!" secondary="Input another text here!" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ScienceRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!" secondary="Input another text here!" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <StarBorderOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!" secondary="Input another text here!" />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end AcademicHistoric()