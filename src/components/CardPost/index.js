import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
      </Accordion>
    </div>
  );
}
