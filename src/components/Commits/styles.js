import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
		marginTop: '1rem',
	},
}));
