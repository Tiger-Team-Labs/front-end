import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		background: 'rgba(0,0,0,.5)',
		color: 'white',
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
		background: 'white',
		borderRadius: '.2rem',
	},
}));
