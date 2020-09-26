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
  cardPostButton: {
    color: "black" ,
    textDecoration: "none",
  },
  card: {
    minWidth: 270,
    margin: theme.spacing(1),
  },
  cardPost: {
    margin:theme.spacing(2),
  },
  headingCardPost: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));