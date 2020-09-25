//import make styles from styed component
import { makeStyles } from '@material-ui/core/styles';

//custom styles from the modal component and export it
export const useStyles = makeStyles((theme) => ({
	input: {
		fontSize: '2rem !important',
		margin: '1rem 0',
	},
	button: {
		marginTop: '1rem !important',
	},
}));
