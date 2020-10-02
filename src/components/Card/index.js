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
  const classes = useStyles();
  const {
    user,
  } = useContext(Context);

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent >
        <Typography variant="h3" component="h3">
          {props.data.name}
        </Typography>
      </CardContent>
      <CardActions>
        {/* is Login or Register */}
        {user !== undefined
          ? <>
            <Link to={"/posts"} color="primary" >
              <Button size="small">Learn More</Button>
            </Link>
            <Link to={"/admin"} color="primary" >
              <Button variant="contained" color="secondary" size="small">Go to Admin</Button>
            </Link>
          </>
          : null}
      </CardActions>
    </Card>
  );
}
