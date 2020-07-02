/*----- Imports React and others -----*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

/*----- Import css -----*/
import './PhotoAvatar.scss';

/*----- Begin class and functions -----*/
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

function PhotoAvatar()
{
  const classes = useStyles();

  return(
    <div className="container__PhotoAvatar">
      <Avatar src="Input path to your photo here!" alt="Description of your photo!" className={classes.large} />
    </div>
  );
}//end PhotoAvatar()

export default PhotoAvatar;