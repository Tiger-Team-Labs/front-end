//import react and its hooks
import React, { useContext } from 'react';
//import context
import { Context } from '../../utils/Context';
//import materia ui components and icons
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import UpdateIcon from '@material-ui/icons/Update';

export const MainListItems = () => {
	const { setDashboardOption } = useContext(Context);

	return (
		<>
			<ListItem button>
				<ListItemIcon
					onClick={() => setDashboardOption((number) => (number = 1))}>
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
};
