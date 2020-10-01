//import react
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
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
}));

export const Message = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.root}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component='h5' variant='h5'>
						Comment
					</Typography>
				</CardContent>
			</div>
		</Card>
	);
};
