import React from 'react';
import './assets/css/index.css'
import HomeWorksGroup from "./Components/HomeWorksGroup/HomeWorksGroup";
import ResponsiveAppBar from "./Components/Header/Header";
import {Box, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createTheme} from "@mui/material/styles";
import RouterBreadcrumbs from "./Components/SideBar/SideBar";
import HomeWorkTask from "./Components/HomeWorksGroup/HomeWorkTask/HomeWorkTask";
import ChartsPie from "./Components/Charts/ChartsPie/ChartsPie";
import MainPage from "./Components/MainPage/MainPage";
import {userAPI} from "./api/api";

function App() {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 768,
                md: 992,
                lg: 1200,
                xl: 1536,
            },
        },
    });
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Box>
                    <ResponsiveAppBar/>
                </Box>

                <Box className="App" gap='20px' display='flex' justifyContent={'space-between'}>
                    <Box sx={{display: {xs: 'none', lg: 'flex'}}}>
                        <RouterBreadcrumbs/>
                    </Box>
                    <Box height='calc(100vh - 100px)' overflow='scroll' component="section"
                         display="flex"
                         alignItems="center"
                         flexDirection="column" gap="10px"
                         flex='1'
                         justifyContent='space-between'
                         sx={{
                             paddingTop: '20!important',
                             backgroundColor: '#e27c9038',
                             padding: {xs: '10px', md: '50px'},
                             borderRadius: '20px'
                         }}>
                        <Routes>
                            <Route path='/homeWorkGroup/:type' element={<HomeWorksGroup/>}/>
                            <Route path='/MainPage' element={<MainPage/>}/>
                            <Route path='/homeWorkTask/:type/:id' element={<HomeWorkTask/>}/>
                        </Routes>
                    </Box>
                </Box>
            </ThemeProvider>
        </BrowserRouter>

    )
        ;
}

export default App;
