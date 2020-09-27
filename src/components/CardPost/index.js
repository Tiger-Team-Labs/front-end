import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import {useStyles} from '../../Style/'


export default function CardPost(props) {
  const classes = useStyles();

  return (
    <div className={classes.cardPost}>
      <Accordion>
      
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  variant='h5'>{props.data.title}</Typography>
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
          
              <>
            <IconButton edge="end"  >
              <Link to={`/${props.data._id}`} className={classes.cardPostButton}>
                <EditIcon color="primary"/>
              </Link>
            </IconButton>
            <IconButton>
              <Link  className={classes.cardPostButton}>
                <DeleteIcon color="secondary"/>
              </Link>
            </IconButton>
          </>
      </Accordion>
    </div>
  );
}
