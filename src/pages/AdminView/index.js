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

export const Dashboard = memo(() => {
	//use styles
	const classes = useStyles();
	//use local style
	const [open, setOpen] = useState(true);
	//handle the open of the menu
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	//handle the close of the menu
	const handleDrawerClose = () => {
		setOpen(false);
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
						Dashboard Foro App
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
					<Paper className={classes.paper}></Paper>
					<Paper className={classes.paper}>
						<CreateCategory />
					</Paper>
				</Container>
			</main>
		</div>
	);
});

export default Dashboard;
