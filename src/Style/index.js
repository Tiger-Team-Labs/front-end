import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white" ,
    textDecoration: "none",
  },
  card: {
    minWidth: 270,
    margin: theme.spacing(1),
  }
  
}));