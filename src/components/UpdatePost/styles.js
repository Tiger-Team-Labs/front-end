//import make styles
import { makeStyles } from '@material-ui/core/styles';

//create uses styles and export it
export const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		color: 'black',
		background: 'linear-gradient(to right, #c9d6ff, #e2e2e2)',
	},
	icon: {
		color: 'white',
	},
	title: {
		'@media (max-width:600px)': {
			fontSize: '2.5rem',
		},
	},
	button: {
		margin: '1rem 0',
	},
}));
