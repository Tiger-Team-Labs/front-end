//import react
import React, { useState, useContext, useEffect } from 'react';
//import material ui components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import input
import TextField from '@material-ui/core/TextField';
//import icons
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
//import styles
import { useStyles } from './styles';
//import context
import { Context } from '../../utils/Context';

export const Commit = ({ content, author }) => {
	//use local state
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState('example');
	//use styles
	const classes = useStyles();
	//use context
	const { user } = useContext(Context);
	//use effect
	useEffect(() => {
		setMessage(content);
	}, []);

	return (
		<Card className={classes.root}>
			<div className={classes.details}>
				{isOpen ? (
					<TextField
						onChange={(e) => setMessage(e.target.value)}
						className={classes.input}
						value={message}
						multiline
						rowsMax={5}
					/>
				) : (
					<CardContent className={classes.content}>
						<Typography component='h5' variant='p'>
							{message}
						</Typography>
					</CardContent>
				)}
			</div>
			{isOpen ? (
				<IconButton onClick={() => setIsOpen((value) => (value = false))}>
					<HighlightOffIcon />
				</IconButton>
			) : (
				<>
					<IconButton onClick={() => setIsOpen((value) => (value = true))}>
						<CreateIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</>
			)}
		</Card>
	);
};
