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
			{/*item for create a category*/}
			<ListItem
				button
				onClick={() => setDashboardOption((number) => (number = 1))}>
				<ListItemIcon>
					<AddIcon />
				</ListItemIcon>
				<ListItemText primary='Create Category' />
			</ListItem>
			{/*item for delete category*/}
			<ListItem
				button
				onClick={() => setDashboardOption((number) => (number = 2))}>
				<ListItemIcon>
					<HighlightOffIcon />
				</ListItemIcon>
				<ListItemText primary='Delete Category' />
			</ListItem>
			{/*item for update category*/}
			<ListItem
				button
				onClick={() => setDashboardOption((number) => (number = 3))}>
				<ListItemIcon>
					<UpdateIcon />
				</ListItemIcon>
				<ListItemText primary='Update Category' />
			</ListItem>
		</>
	);
};
