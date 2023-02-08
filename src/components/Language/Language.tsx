/**
 * Language
 * 
 * @author Rithie Natan
 * @date 2023-01-30
 * Last update: 2023-01-30
 */
//---------- Imports ----------
//----- Components -----
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Rating from "@mui/material/Rating";


//---------- Custom Imports ----------
import style from "./Language.module.scss";


//---------- Exports ----------
/**
 * Language component
 * 
 * @returns {JSX.Element}
 */
export default function Language(): JSX.Element
{
    return (
        <div className={style.container__Language}>
            <h3>Language</h3>
            <Divider />
            <div className={style.description}>
                <List>
                    <ListItem className={style.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={3} readOnly />
                        } />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end Hobbies()