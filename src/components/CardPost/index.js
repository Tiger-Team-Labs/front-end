import React, { useContext } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom';
import { useStyles } from '../../Style/'
// import Context
import { Context } from '../../utils/Contex';

export default function CardPost(props) {
  const classes = useStyles();
  const {
    handleClickOpenRemovePost,
    user,
    handleClickOpenEditPost
  } = useContext(Context);


  return (
    <div className={classes.cardPost}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5'>{props.data.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.headingCardPost}>
          <Typography>
            {props.data.content}
          </Typography>
        </AccordionDetails>
        <AccordionDetails >
          <Typography variant='caption' >
            {props.data.createdAt}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {user !== undefined
        ? <>
          <IconButton onClick={() => handleClickOpenEditPost()} edge="end"  >
            <Link  to={`/posts/${props.data._id}/edit`} className={classes.cardPostButton}>
              <EditIcon color="primary" />
            </Link>
          </IconButton>
          <IconButton onClick={() => handleClickOpenRemovePost()}>
          <Link  to={`/posts/${props.data._id}/remove`} className={classes.cardPostButton}>
            <DeleteIcon color="secondary"  className={classes.cardPostButton} />
          </Link>
          </IconButton>
        </>
        : null}
    </div>
  );
}
