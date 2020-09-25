import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import UpdateIcon from '@material-ui/icons/Update';

export const mainListItems = (
	<>
		<ListItem button>
			<ListItemIcon>
				<AddIcon />
			</ListItemIcon>
			<ListItemText primary='Create Category' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<HighlightOffIcon />
			</ListItemIcon>
			<ListItemText primary='Delete Category' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<UpdateIcon />
			</ListItemIcon>
			<ListItemText primary='Update Category' />
		</ListItem>
	</>
);
