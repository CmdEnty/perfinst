import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Item from "./list_Item";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PaidIcon from '@mui/icons-material/Paid';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ArticleIcon from '@mui/icons-material/Article';
import OutboxIcon from '@mui/icons-material/Outbox';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";



const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-sidebar": {
          // position: "fixed !important",
          height: "auto !important",
          // overflowY: "scroll !important",
          // width: "15vw !important"
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#0ba2de !important",
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
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center" mt="-5px">
                <img
                  alt="profile-user"
                  width="150px"
                  height="100px"
                  src={`../../assets/user.png`}
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
                  Perfect Institute
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Of Technology
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
              Administration
            </Typography>
            <Item
              title="Staff"
              to="/staff"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Students"
              to="/students"
              icon={<GroupAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Designation"
              to="/designation"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Accounts
            </Typography>
            <Item
              title="Fees"
              to="/invoices"
              icon={<PaidIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Salary"
              to="/salary"
              icon={<MoneyOffIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Other Expenditures"
              to="/expenditure"
              icon={<AccountBalanceIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Academics
            </Typography>
            <Item
              title="Term"
              to="/term"
              icon={<CalendarMonthIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Course"
              to="/course"
              icon={<LocalLibraryIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Units"
              to="/unit"
              icon={<CollectionsBookmarkIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Examination"
              to="/examination"
              icon={<ArticleIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Emails/Sms
            </Typography>
             <Item
              title="Inbox"
              to="/geography"
              icon={<InboxOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sent"
              to="/pie"
              icon={<OutboxIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Drafts"
              to="/geography"
              icon={<DraftsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            

            {/* <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
