//import make styles from styed component
import { makeStyles } from '@material-ui/core/styles';
//import styled component
import styled from 'styled-components';

//create and export Form component
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	font-size: 2rem;
`;

//create and export input label
export const Label = styled.label``;

//custom styles from the modal component and export it
export const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '.2rem solid #000',
		boxShadow: theme.shadows[5],
		padding: '2rem',
	},
	input: {
		fontSize: '2rem !important',
		margin: '1rem 0',
	},
}));
