import { makeStyles } from '@material-ui/core/styles';
//export and create useStyles hook
export const useStyles = makeStyles({
	root: {
		width: '15rem',
		background:
			' linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});
