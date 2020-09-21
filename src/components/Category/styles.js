import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	root: {
		margin: '1rem auto',
		width: '60%',
		backgroundImage:
			'linear-gradient(to right, #DAE2F8 0%, #D6A4A4 51%, #DAE2F8 100%)',
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
