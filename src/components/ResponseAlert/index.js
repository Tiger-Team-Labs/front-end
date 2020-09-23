//import react
import React, { useContext } from 'react';
//import styles
import { useStyles } from './styles';
//import alert component
import { Alert } from '@material-ui/lab';
//import context
import { Context } from '../../utils/Context';

//create and export response alert component
export const ResponseAlert = () => {
	//use styles
	const classes = useStyles();
	//use context
	const { response, setResponse } = useContext(Context);

	return (
		<div className={classes.root}>
			{/*good alert*/}
			{response >= 200 && response < 300 ? (
				<Alert onClose={() => setResponse(0)}>Task completed!</Alert>
			) : (
				<></>
			)}
			{/*bad alert*/}
			{response >= 400 ? (
				<Alert severity='error' onClose={() => setResponse(0)}>
					Error, the server file!
				</Alert>
			) : (
				<></>
			)}
		</div>
	);
};
