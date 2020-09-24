// importar React
import React from 'react';
// importar Navbar
import TopNavBar from '../TopNavBar';

function Layout(props) {
    return(
        <React.Fragment>
            <TopNavBar/>
            {props.children}
        </React.Fragment>
    );
    
}

// not forget export
export default Layout;