//import styled component
import styled from 'styled-components';

//create and export body background
export const BodyBackground = styled.div`
	background-image: linear-gradient(135deg, #240b36 10%, #f05f57 100%);
	padding: 5rem;
	min-height: 100vh;

	@media only screen and (max-width: 600px) {
		padding: 0.5rem;
	}
`;
