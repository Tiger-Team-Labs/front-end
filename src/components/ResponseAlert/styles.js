//import make styles tool
import { makeStyles } from '@material-ui/core/styles';

//create and export styles
export const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));
