//import react and its hooks
import React, { useContext, useState, memo } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
//import drawer
import Drawer from '@material-ui/core/Drawer';
//import app bar
import AppBar from '@material-ui/core/AppBar';
//import toolbar
import Toolbar from '@material-ui/core/Toolbar';
//import list
import List from '@material-ui/core/List';
//import typo
import Typography from '@material-ui/core/Typography';
//import divider
import Divider from '@material-ui/core/Divider';
//import icon button
import IconButton from '@material-ui/core/IconButton';
//import container
import Container from '@material-ui/core/Container';
//import menu icon
import MenuIcon from '@material-ui/icons/Menu';
//import chevron left icon
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import list of items
import { MainListItems } from '../../components/ListItems';
//import styles
import { useStyles } from './styles';
//import create category component
import { CreateCategory } from '../../components/CreateCategory';
//import paper
import { Paper } from '@material-ui/core';
//import the context
import { Context } from '../../utils/Context';
//import response alert
import { ResponseAlert } from '../../components/ResponseAlert';
//import update category component
import { UpdateCategory } from '../../components/UpdateCategory';
//import delete category
import { DeleteCategory } from '../../components/DeleteCategory';
//import link
import { Link } from 'react-router-dom';
//import admin users
import { AdminUsers } from '../../components/AdminUsers';
//import show categories
import { ShowCategories } from '../../components/ShowCategories';
//import delete user
import { DeleteUser } from '../../components/DeleteUser';
//import update user
import { UpdateUser } from '../../components/UpdateUser';

export const Dashboard = memo(() => {
	//use styles
	const classes = useStyles();
	//use local style
	const [open, setOpen] = useState(true);
	//use context
	const { dashboardOption } = useContext(Context);

	//handle the open of the menu
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	//handle the close of the menu
	const handleDrawerClose = () => {
		setOpen(false);
	};

	//handle the switch
	/**
	 * @description this function allow to handle the component to display
	 * @param {number} option
	 */
	const handleSwitch = (option) => {
		switch (option) {
			case 1:
				return <CreateCategory />;
			case 2:
				return <DeleteCategory />;
			case 3:
				return <UpdateCategory />;
			case 4:
				return <AdminUsers />;
			default:
				return <></>;
		}
	};

	return (
		<div className={classes.root}>
			{/**base styles*/}
			<CssBaseline />
			{/** app bar*/}
			<AppBar
				position='absolute'
				className={clsx(classes.appBar, open && classes.appBarShift)}>
				{/**tool bar */}
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						className={clsx(
							classes.menuButton,
							open && classes.menuButtonHidden,
						)}>
						<MenuIcon />
					</IconButton>
					{/**typography */}
					<Typography
						aria-label='text of nav bar'
						component='h1'
						variant='h6'
						color='inherit'
						noWrap
						className={classes.title}>
						<Link
							aria-label='link to back to home'
							style={{ textDecoration: 'none', color: 'inherit' }}
							to='/'>
							Dashboard Foro App
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
			{/** drawer fot the menu*/}
			<Drawer
				variant='permanent'
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					<MainListItems />
				</List>
				<Divider />
			</Drawer>
			{/**main content*/}
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				{/**container */}
				<Container
					aria-label='Container'
					maxWidth='lg'
					className={classes.container}>
					<ResponseAlert />
					<Paper className={classes.paper}>
						<ShowCategories />
					</Paper>
					{/**switch to handle the component ti display it */}
					<Paper className={classes.paper}>
						{handleSwitch(dashboardOption)}
					</Paper>
					{dashboardOption === 4 && (
						<>
							<Paper className={classes.paper}>
								<UpdateUser />
							</Paper>
							<Paper className={classes.paper}>
								<DeleteUser />
							</Paper>
						</>
					)}
				</Container>
			</main>
		</div>
	);
});

export default Dashboard;
