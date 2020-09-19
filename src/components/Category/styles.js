import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		margin: '1rem auto',
		width: '60%',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 151,
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '1rem',
		paddingBottom: '1rem',
	},
}));
