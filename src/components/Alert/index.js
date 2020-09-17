//import react and its hook
import React, { useContext } from 'react';
//import alert
import { Alert as Alerts } from '@material-ui/lab';
//import context
import { Context } from '../../utils/Context';

//crete and export alert component
export const Alert = () => {
	//use context hook
	const { showError, showSuccess } = useContext(Context);

	return (
		<>
			{showError && (
				<Alerts severity='error'>This is an error alert — check it out!</Alerts>
			)}
			{showSuccess && (
				<Alerts severity='success'>
					This is an error alert — check it out!
				</Alerts>
			)}
		</>
	);
};
