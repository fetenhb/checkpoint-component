import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonIcon from '@material-ui/icons/Person';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfilPhoto from './ProfilPhoto';
import Welcome from './Welcome';
import FullName from './FullName';
import Adress from './Adress';
import Hobbies from './Hobbies';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          className="tab-align"
        >
          <Tab label="Welcome" icon={<AssignmentIndIcon />} {...a11yProps(0)} />
          <Tab label="Profil photo" icon={<PersonPinIcon />} {...a11yProps(1)} />
          <Tab label="Full name" icon={<PersonIcon />} {...a11yProps(2)} />
          <Tab label="Adress" icon={<AddLocationIcon />} {...a11yProps(3)} />
          <Tab label="Hobbies" icon={<SportsHandballIcon />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Welcome />

      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfilPhoto /> 
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FullName />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Adress />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Hobbies />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>

    
  );
}
