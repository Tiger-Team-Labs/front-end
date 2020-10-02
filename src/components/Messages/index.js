//import react
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import input
import Input from '@material-ui/core/Input';
//import icons
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	input: {
		padding: '.5rem',
		margin: '.5em',
	},
}));

export const Message = () => {
	//use local state
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState('example');
	//use styles
	const classes = useStyles();

	const EditMessage = () => <Input className={classes.input} value={message} />;

	return (
		<Card className={classes.root}>
			<div className={classes.details}>
				{isOpen ? (
					<EditMessage />
				) : (
					<CardContent className={classes.content}>
						<Typography component='h5' variant='h5'>
							Comment
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
