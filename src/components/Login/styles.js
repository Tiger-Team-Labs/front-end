//import make styles from styed component
import { makeStyles } from '@material-ui/core/styles';

//custom styles from the modal component and export it
export const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundImage: 'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);',
		border: '.2rem solid #000',
		boxShadow: theme.shadows[5],
		padding: '2rem 6rem',
		minWidth: '',
	},
	input: {
		fontSize: '2rem !important',
		margin: '1rem 0',
		color: 'white !important',
	},
	button: {
		marginTop: '1rem !important',
	},
}));
