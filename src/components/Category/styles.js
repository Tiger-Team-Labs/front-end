import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	root: {
		margin: '1rem auto',
		width: '60%',
		backgroundImage: 'white',
		textTransform: 'capitalize',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	content: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
}));
