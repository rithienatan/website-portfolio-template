/**
 * Soft Skills
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
import style from "./SoftSkills.module.scss";


//---------- Exports ----------
/**
 * Soft Skills component
 * 
 * @returns {JSX.Element}
 */
export default function SoftSkills(): JSX.Element
{
    return (
        <div className={style.container__SoftSkills}>
            <h3>Soft Skills - or set another name</h3>
            <Divider />
            <div className={style.description}>
                <List>
                    <ListItem className={style.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={4} readOnly />
                        } />
                    </ListItem>
                    <ListItem className={style.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={3} readOnly />
                        } />
                    </ListItem>
                    <ListItem className={style.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={1} readOnly />
                        } />
                    </ListItem>
                    <ListItem className={style.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={4} readOnly />
                        } />
                    </ListItem>
                    <ListItem className={style.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={5} readOnly />
                        } />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end HardSkills()