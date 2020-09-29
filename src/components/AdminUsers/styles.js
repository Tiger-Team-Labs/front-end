//import make styles
import { makeStyles } from '@material-ui/core/styles';

//create and export the styles
export const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 600,
		backgroundColor: theme.palette.background.paper,
	},
}));
