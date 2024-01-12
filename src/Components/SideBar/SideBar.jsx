import * as React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    ListItemButton,
    ListItemIcon,
    Box, List, ListItemText, styled
} from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import {faReact, faJs} from '@fortawesome/free-brands-svg-icons';
import {faPersonPraying, faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";


export default function SideBar() {
    const [expanded, setExpanded] = React.useState('');
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
            {...props}
        />
    ))(({theme}) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row',
        border: '1px solid',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',

        },
        '& .MuiAccordionSummary-content': {
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0',
            marginLeft: theme.spacing(0),

        },
        width: '100%',

    }));
    return (
        <Box sx={{backgroundColor: '#f8bbd0', left: {md: '15px', xl: '50px'}, width: {md: '180px', lg: '220px'}}}
             component="div" borderRadius='20px'>
            <NavLink to={'/MainPage'}>
                <ListItemButton onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon>
                        <HomeIcon color="success"/>
                    </ListItemIcon>
                    <ListItemText primary="Дашборд"/>
                </ListItemButton>
            </NavLink>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel1 ">
                    <Typography alignSelf='center'>JS Course</Typography>
                    <FontAwesomeIcon icon={faJs} style={{color: "#dd7622", fontSize: '30px'}}/>
                </AccordionSummary>
                <AccordionDetails sx={{padding: '0 10px!important;'}}>
                    <Box sx={{width: '100%', maxWidth: 360}}>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemButton selected={selectedIndex === 0}
                                            onClick={(event) => handleListItemClick(event, 0)}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faGraduationCap} style={{color: "#0b6209",}}/>
                                </ListItemIcon>
                                <ListItemText primary="УрокиJS"/>
                            </ListItemButton>
                            <NavLink to={'/homeWorkGroup/js'}>
                                <ListItemButton
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                                >
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faPersonPraying}
                                                         style={{color: "#360707", fontSize: "20px"}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="ДомашкиJS"/>
                                </ListItemButton>
                            </NavLink>
                        </List>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>React</Typography>
                    <FontAwesomeIcon icon={faReact} spin
                                     style={{color: "#33bbd7", fontSize: '30px', animationDuration: "10s"}}/>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{width: '100%', maxWidth: 360}}>
                        <List component="nav" aria-label="main mailbox folders">

                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={(event) => handleListItemClick(event, 0)}
                            >
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faGraduationCap} style={{color: "#0b6209",}}/>
                                </ListItemIcon>
                                <ListItemText primary="Уроки React"/>
                            </ListItemButton>
                            <NavLink to={'/homeWorkGroup/react'}>
                                <ListItemButton
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                                >
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faPersonPraying}
                                                         style={{color: "#360707", fontSize: "20px"}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Домашки React"/>
                                </ListItemButton>
                            </NavLink>
                        </List>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}