// importar React
import React from 'react';
// importar Navbar
import TopNavBar from '../TopNavBar';
// bring Form
import FormDialog from '../FormDialog'
// import CustomizedSnackbars
import CustomizedSnackbars from '../SeccessAlarm'


function Layout(props) {
    return(
        <React.Fragment>
            <TopNavBar/>
            <FormDialog />
            <CustomizedSnackbars />
            {props.children}
        </React.Fragment>
    );
    
}

// not forget export
export default Layout;