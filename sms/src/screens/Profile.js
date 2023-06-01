import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {

    const { value } = this.state;
    // const theme = useTheme();

    function TabPanel(props) {
      const { children, value, index, ...other } = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
      return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
      };
    }

    return (
      <div className='flex  '>

        {/* Left Side */}
        <Sidebar />

        {/* Right Side */}
        <div className='grow'>
          <div className='headerBg text-center p-28 text-4xl font-bold '>
            Profile
          </div>
          <div className=''>
            <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={this.handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                //   axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={this.handleChangeIndex}
              >
                <TabPanel value={value} index={0} >
                  Item One
                </TabPanel>
                <TabPanel value={value} index={1} >
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2} >
                  Item Three
                </TabPanel>
              </SwipeableViews>
            </Box>
          </div>

        </div>
      </div>
    )
  }
}

export default Profile