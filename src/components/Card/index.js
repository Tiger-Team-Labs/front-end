import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// Styles
import { useStyles } from '../../Style/'
// import Context
import { Context } from '../../utils/Contex';



export default function Cards(props) {
  const {data} = props
  const classes = useStyles();
  const {
    user,
    setAuxiliarValues
  } = useContext(Context);

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent >
        <Typography variant="h3" component="h3">
          {data.name}
        </Typography>
      </CardContent>
      <CardActions>
        <>
        {user !== undefined
          ? 
            <Link to={"/posts"} color="primary" >
              <Button size="small">Learn More</Button>
            </Link>
          
          : null}
          </>
      </CardActions>
    </Card>
  );
}
