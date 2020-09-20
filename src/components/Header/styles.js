//import styled component
import styled from 'styled-components';

//create and export header component
export const Header = styled.header`
	width: 100%;
	font-size: 2rem !important;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #f05f57; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to right,
		#240b36,
		#f05f57
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#240b36,
		#f05f57
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

//created buttons component
export const Buttons = styled.div`
	margin-right: 2rem;

	@media only screen and (max-width: 350px) {
		width: 5rem;
	}
`;

//Avatar container
export const AvatarContainer = styled.div`
	margin-right: 2rem;
	padding: 1rem;
`;

//LogOut
export const LogOut = styled.div`
	display: flex;
	padding: 0.5rem;

	@media only screen and (max-width: 350px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
