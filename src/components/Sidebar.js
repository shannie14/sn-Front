import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LiquorIcon from '@mui/icons-material/Liquor';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import "react-pro-sidebar/dist/css/styles.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#1e6488 !important",
        },
        "& .pro-menu-item.active": {
          color: "#ab966d !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  WELCOME
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/bitmoji.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  NBTV
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Clubs
            </Typography>
            <Item
              title="Bottle of the Month"
              to="/BOTM"
              icon={<LiquorIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Whiskey Wash"
              to="/Washs"
              icon={<LiquorIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Brands
            </Typography>
            <Item
              title="Bacardi"
              to="/Bacardi"
              icon={<ArrowDropUpIcon fontSize="small" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Campari"
              to="/Campari"
              icon={<ArrowDropUpIcon fontSize="small" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Diageo"
              to="/Diageo"
              icon={<ArrowDropUpIcon fontSize="small" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Goslings"
              to="/Goslings"
              icon={<ArrowDropUpIcon fontSize="small" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Jeffersons"
              to="/Jeffersons"
              icon={<ArrowDropUpIcon fontSize="small" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Maestro Dobel"
              to="/Dobel"
              icon={<ArrowDropUpIcon fontSize="small" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Royal Salute"
              to="/Royalsalute"
              icon={<ArrowDropUpIcon fontSize="small" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Waterford"
              to="/Waterford"
              icon={<ArrowDropUpIcon fontSize="small" />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
