/**
 * Contacts
 * 
 * @author Rithie Natan
 * @date 2023-01-19
 * Last update: 2023-01-24
 */
//---------- Imports ----------
//----- Components -----
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";

//----- Icons -----
import CakeIcon from '@mui/icons-material/Cake';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';


//---------- Custom Imports ----------
import style from "./Contacts.module.scss";


//---------- Exports ----------
/**
 * Contacts component
 * 
 * @returns {JSX.Element}
 */
export default function Contacts(): JSX.Element
{
    return (
        <div className={style.container__Contacts}>
            <h3>Contacts</h3>
            <Divider />
            <div className={style.description}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <TextField 
                                id="filled-read-only-input"
                                label="Phone"
                                defaultValue="+99 99 99999-9999"
                                InputProps={{ readOnly: true }}
                                variant="filled"
                            />
                        } />
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <TextField
                                id="filled-read-only-input"
                                label="email"
                                defaultValue="youremail@email.com"
                                InputProps={{ readOnly: true }}
                                variant="filled"
                            />
                        } />
                        <ListItemIcon>
                            <LinkedInIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Link href="Input link for your linkedin here!" underline="none">
                                Link name!
                            </Link>
                        } />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CakeIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="1995-12-25"
                                className={style.birthdayTextField}
                                InputLabelProps={{ shrink: true }}
                            />
                        } />
                        <ListItemIcon>
                            <PlaceIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <TextField
                                id="filled-read-only-input"
                                label="Place"
                                defaultValue="Insert your citie here!"
                                InputProps={{ readOnly: true }}
                                variant="filled"
                            />
                        } />
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary={ 
                            <Link href="Input link for your github here!" underline="none">
                                Link name!
                            </Link>
                        } />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end Contacts()