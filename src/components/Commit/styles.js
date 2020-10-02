import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	input: {
		padding: '.5rem',
		margin: '.5em',
		minWidth: '50vw',
	},
}));
