import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router'
import { MenuList, ListItemIcon, Divider } from '@mui/material';
import { AccountCircle, Logout, Notifications, Settings, SupervisedUserCircle } from '@mui/icons-material'
import Logo from "../assets/logo.png";
export function CustomAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const push = useNavigate();
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOut = () => {
        sessionStorage.clear()
        push('/')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="fixed" style={{ background: '#fcfafa', display: 'flex', justifyContent: "center" }} >
                <Toolbar>
                     <img src={Logo} alt="MPrez Scrap Trading Logo" style={{ maxWidth: '100%', marginTop: '5px', height: '3em' }} /> 
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuList dense sx={{ width: 200 }}>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <AccountCircle fontSize="small" />
                                        </ListItemIcon>
                                        Profile
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={logOut}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default CustomAppBar