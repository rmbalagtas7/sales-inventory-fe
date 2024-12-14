import React from "react";
import {
  AccountBalance,
  AccountCircle,
  Book,
  Campaign,
  Description,
  DescriptionOutlined,
  Event,
  History,
  Home,
  ListAlt,
  PermIdentity,
  Person,
  Poll,
  Settings,
} from "@mui/icons-material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {
  Avatar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArchiveIcon from "@mui/icons-material/Archive";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import SummarizeIcon from "@mui/icons-material/Summarize";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ReceiptIcon from "@mui/icons-material/Receipt";

const drawerWidth = 300;

export const facultyMenu = [
  {
    name: "My Files",
    icon: <ListAlt />,
    link: "/faculty/myfiles",
  },
  {
    name: "Profile",
    icon: <PermIdentity />,
    link: "/faculty/profile",
  },
  {
    name: "Archive",
    icon: <ArchiveIcon />,
    link: "/faculty/archive",
  },
];

export const AdminMenu = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    name: "Sales",
    icon: <ListAlt />,
    link: "/sales",
  },
  {
    name: "Inventory",
    icon: <InventoryIcon />,
    link: "/inventory",
  },
  {
    name: "Customers",
    icon: <GroupIcon />,
    link: "/customers",
  },
  {
    name: "Suppliers",
    icon: <LocalShippingIcon />,
    link: "/suppliers",
  },
  {
    name: "Purchase",
    icon: <ShoppingBasketIcon />,
    link: "/purchase",
  },
  {
    name: "Sales Invoice",
    icon: <ReceiptIcon />,
    link: "/sales-invoice",
  },
  {
    name: "Delivery Receipt",
    icon: <ReceiptIcon />,
    link: "/delivery-receipt",
  },
  {
    name: "Acknowledgement Receipt",
    icon: <ReceiptIcon />,
    link: "/acknowledgement-receipt",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 0,
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <Divider />

        <List>
          {AdminMenu.slice(0, 6).map((item, index) => (
            <ListMenuItem
              item={item}
              callback={() => navigate(item.link)}
              key={index}
              currentRoute={pathname}
            />
          ))}
          <Divider />
          <Typography
            variant="caption"
            gutterBottom
            sx={{
              display: "block",
              marginLeft: 1,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 350,
              marginTop: 1,
            }}
          >
            Invoice Monitoring
          </Typography>

          {AdminMenu.slice(6).map((item, index) => (
            <ListMenuItem
              item={item}
              callback={() => navigate(item.link)}
              key={index}
              currentRoute={pathname}
            />
          ))}
          <div style={{ position: "fixed", bottom: 0, width: drawerWidth }}>
            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar src="/profile.png" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle2">Example Roland</Typography>
                }
                secondary={
                  <Typography variant="caption" color="textSecondary">
                    exampleemail@gmail.com
                  </Typography>
                }
              />
            </ListItem>
          </div>
        </List>
      </Box>
    </Drawer>
  );
};

const ListMenuItem = ({ item, callback, currentRoute }) => {
  return (
    <ListItem
      button
      onClick={callback}
      selected={currentRoute === item.link}
      sx={{
        backgroundColor: currentRoute === item.link ? "#e0e0e0" : "transparent", // Active background color
        "&:hover": {
          backgroundColor: currentRoute === item.link ? "#d5d5d5" : "#f5f5f5", // Hover effect
          cursor: "pointer", // Change pointer when hovering
        },
        cursor: "pointer", // Change pointer when not hovering as well
      }}
    >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText
        primary={<Typography variant="subtitle2">{item.name}</Typography>}
      />
    </ListItem>
  );
};

export default Sidebar;
