//import react
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import material ui components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';
//import icons
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
//import context

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

export const AdminUsers = () => {
	const classes = useStyles();
	const [checked, setChecked] = React.useState([1]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<List dense className={classes.root}>
			{[0, 1, 2, 3].map((value) => {
				const labelId = `checkbox-list-secondary-label-${value}`;
				return (
					<ListItem key={value} button>
						<ListItemText id={labelId} primary={`Line item ${value + 1}`} />
						<ListItemSecondaryAction>
							<IconButton>
								<DeleteIcon />
							</IconButton>
							<IconButton>
								<UpdateIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
	);
};
