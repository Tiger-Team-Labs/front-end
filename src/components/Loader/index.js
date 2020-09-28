//import react
import React from 'react';
//import the loader
import ContentLoader from 'react-content-loader';

export const Loader = (props) => {
	return (
		<ContentLoader
			style={{
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'linear-gradient(135deg, #240b36 10%, #f05f57 100%)',
			}}
			viewBox='0 0 820 450'
			height={450}
			width={820}
			speed={2}
			{...props}>
			<rect x='10' y='10' rx='5' ry='5' width='260' height='140' />
			<rect x='280' y='10' rx='5' ry='5' width='260' height='280' />
			<rect x='550' y='10' rx='5' ry='5' width='260' height='140' />
			<rect x='10' y='160' rx='5' ry='5' width='260' height='280' />
			<rect x='280' y='300' rx='5' ry='5' width='260' height='140' />
			<rect x='550' y='160' rx='5' ry='5' width='260' height='280' />
		</ContentLoader>
	);
};
