//import react
import React from 'react';
//import materia ui components
import { Typography, Card, CardContent } from '@material-ui/core';
//import use styles
import { useStyles } from './styles';
//router elements
import { Link } from 'react-router-dom';
//import react spring
import { useSpring, animated } from 'react-spring';

//variables to calculate x and y position
const calc = (x, y) => [
	-(y - window.innerHeight / 2) / 20,
	(x - window.innerWidth / 2) / 20,
	1.1,
];
const trans = (x, y, s) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

//create list of post component and export it
export const Category = ({ title }) => {
	//custom hook from material ui
	const classes = useStyles();
	//custom hooks from use spring
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 350, friction: 40 },
	}));

	return (
		<Link style={{ textDecoration: 'none' }} to={title}>
			<animated.div
				onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
				onMouseLeave={() => set({ xys: [0, 0, 1] })}
				style={{ transform: props.xys.interpolate(trans) }}>
				<Card className={classes.root}>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<Typography className={classes.typo} component='h2' variant='h3'>
								{title}
							</Typography>
						</CardContent>
					</div>
				</Card>
			</animated.div>
		</Link>
	);
};
