import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from '../me123-modified.png';
import logo2 from '../hmpg.png';
import { Button, IconButton } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        style: {
            backgroundColor: trigger ? "rgba(52, 58, 64, 0.5)" : '#282c34',
        },
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function ElevateAppBar(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'start' }}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                  <div class="avatar" data-tooltip="Home"></div>

                                
                            </IconButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >

                            <div class="avatar2" data-tooltip="About Me"></div>
                            </IconButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >

                            <div class="avatar3" data-tooltip="Contact Me"></div>
                            </IconButton>
                        </div>
                        <Button target={'_blank'} color="inherit" href="https://github.com/orestropi">GitHub</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
}