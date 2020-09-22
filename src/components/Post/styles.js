//import make styles hook
import { makeStyles } from '@material-ui/core/styles';

//create the styles and export it
export const useStyles = makeStyles({
	root: {
		minWidth: 275,
		background: 'linear-gradient(to right, #c9d6ff, #e2e2e2)',
		padding: '1.5rem',
	},
	post: { fontSize: '1.5rem', margin: '1rem 0' },
	lastUpdate: {},
});
