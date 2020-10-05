import React, { useContext } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useStyles } from '../../Style/'
// import Context
import { Context } from '../../utils/Contex';

export default function CardPostComent(props) {
  const {data} = props
  const classes = useStyles();
  const {
    handleClickOpenRemovePost,
    user,
    handleClickOpenEditPost,
    setAuxiliarValues
  } = useContext(Context);


  return (
    <div className={classes.cardPost}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5'>{data.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.headingCardPost}>
          <Typography>
            {data.content}
          </Typography>
        </AccordionDetails>
        <AccordionDetails >
          <Typography variant='caption' >
            {data.createdAt}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {user !== undefined
        ? <>
          <IconButton onClick={() => handleClickOpenEditPost()} edge="end"  >
            <Link  to={`/posts/${data._id}/edit`} className={classes.cardPostButton}>
              <EditIcon color="primary" />
            </Link>
          </IconButton>
          <IconButton onClick={() => handleClickOpenRemovePost()}>
          <Link  to={`/posts/${data._id}/remove`} className={classes.cardPostButton}>
            <DeleteIcon color="secondary"  className={classes.cardPostButton} />
          </Link>
          </IconButton>
        </>
        : null}
    </div>
  );
}
