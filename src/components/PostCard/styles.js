import { makeStyles } from '@material-ui/core/styles';
//export and create useStyles hook
export const useStyles = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '1rem',
		width: '15rem',
		background:
			' linear-gradient(to right, #ff6e7f, #bfe9ff)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
		textTransform: 'upperCase',
		color: 'darkSlateGray',
		textAlign: 'center',
	},
});
