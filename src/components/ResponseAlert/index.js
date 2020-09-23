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

	const switchTheResponse = () => {
		switch (response) {
			case 200:
				return (
					<Alert aria-label='response' onClose={() => setResponse(0)}>
						Task completed!
					</Alert>
				);
			case 201:
				return (
					<Alert aria-label='response' onClose={() => setResponse(0)}>
						Created!
					</Alert>
				);
			case 204:
				return (
					<Alert aria-label='response' onClose={() => setResponse(0)}>
						Deleted!
					</Alert>
				);
			case 400:
				return (
					<Alert
						aria-label='response'
						severity='error'
						onClose={() => setResponse(0)}>
						Please check your inputs
					</Alert>
				);
			case 401:
				return (
					<Alert
						aria-label='response'
						severity='error'
						onClose={() => setResponse(0)}>
						Unauthorized
					</Alert>
				);
			default:
				return <> </>;
		}
	};

	return (
		<div aria-label='response' className={classes.root}>
			{switchTheResponse()}
		</div>
	);
};
