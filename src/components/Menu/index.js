import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
// import Context
import { Context } from '../../utils/Contex';
// Styles
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';




export function LongMenu() {
  const {
    setUser
  } = React.useContext(Context);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          menu
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profilelegr</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={()=>{handleClose(); setUser(undefined)}}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );




  // const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // return (
  //   <div>
  //     <IconButton
  //       aria-label="more"
  //       aria-controls="long-menu"
  //       aria-haspopup="true"
  //       onClick={handleClick}
  //     >
  //       <AccountCircleIcon />
  //     </IconButton>
  //     <Menu
  //       id="long-menu"
  //       anchorEl={anchorEl}
  //       keepMounted
  //       open={open}
  //       onClose={handleClose}
  //       PaperProps={{
  //         style: {
  //           maxHeight: ITEM_HEIGHT * 4.5,
  //           width: "15ch"
  //         }
  //       }}
  //     >
  //       <MenuItem
  //         selected={true}
  //         onClick={() => {
  //           setUser(undefined);
  //           handleClose()
  //         }}>
  //         <Link to={"/"} className={classes.cardPostButton}>
  //           Log-uot
  //         </Link>
  //       </MenuItem>

  //     </Menu>

  //   </div>
  // );
}
