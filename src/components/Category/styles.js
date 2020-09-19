import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	root: {
		margin: '1rem auto',
		width: '60%',
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
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '1rem',
		paddingBottom: '1rem',
	},
}));
