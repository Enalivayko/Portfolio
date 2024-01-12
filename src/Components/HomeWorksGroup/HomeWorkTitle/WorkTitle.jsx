import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import {Box, IconButton, Typography, Checkbox, CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme, responsiveFontSizes} from '@mui/material/styles';

function WorkTitle({type}) {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    let theme = createTheme();
    theme = responsiveFontSizes(theme, {
        breakpoints: ['md', 'lg'],
        factors: {
            md: 0.7,
            lg: 1.2,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box alignItems="center" display="flex" justifyContent='space-between'>
                <Box display="flex" alignItems="center">
                    <IconButton aria-label="Example">
                        {type === 'js'
                            ? <FontAwesomeIcon icon={faJs} size="xl" style={{color: "#df910c"}}/>
                            : <FontAwesomeIcon icon={faReact} spin
                                               style={{color: "#33bbd7", fontSize: '30px', animationDuration: "10s"}}/>}
                    </IconButton>
                    <Typography variant="h6">Course / Домашки</Typography>
                </Box>
                <Box>
                    <Checkbox checked={checked} onChange={handleChange} inputProps={{'aria-label': 'controlled'}}/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default WorkTitle;
