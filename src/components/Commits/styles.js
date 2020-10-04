import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
		marginTop: '1rem',
		background: 'transparent',
	},
	title: {
		padding: '1rem 0',
		color: 'white',
	},
	input: {
		padding: '.5rem',
		margin: '.5em',
		minWidth: '50vw',
		background: 'white',
		borderRadius: '.2rem',
	},
}));
