//import make styles hook
import { makeStyles } from '@material-ui/core/styles';

//create the styles and export it
export const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(to right, #c9d6ff, #e2e2e2)',
		padding: '1.5rem',
	},
	title: {
		textTransform: 'capitalize',
		['@media (max-width:600px)']: {
			fontSize: '2.5rem',
		},
	},
	post: { fontSize: '1.5rem', margin: '1rem 0' },
	lastUpdate: {
		background: 'rgba(0,0,0,.5)',
		color: 'white',
		padding: '.2rem',
		paddingRight: '.5rem',
	},
});
