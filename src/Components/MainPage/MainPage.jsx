import React from 'react';
import {Box, Grid, Link, Typography} from "@mui/material";
import {Pie} from "react-chartjs-2";
import ChartsPie from "../Charts/ChartsPie/ChartsPie";
import VerticalBarChar from "../Charts/VerticalBarChar/VerticalBarChar";
import HomeWork from "../HomeWorksGroup/HomeWorks/HomeWork";
import HomeworkQualityChart from "../Charts/ChartsPie/ChartsPie";
import {faFacebook, faInstagram, faLinkedin, faTelegram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LessonsTabs from "./LessonsTabs/LessonsTabs";

function MainPage(props) {
    return (
        <Box display='flex' width='100%' flexDirection='column' gap='20px'>
            <Box display='flex' justifyContent='space-between' padding='20px' backgroundColor='#fff' borderRadius='20px'
                 alignItems='center' flexWrap='wrap'>
                <Typography>Не забудь подписаться на наши соц. сети и следить за новостями!</Typography>
                <Box display='flex' gap='30px'>
                    <Link href="https://web.telegram.org/" underline="hover" target='_blank'>
                        <FontAwesomeIcon icon={faTelegram} size="2xl" style={{color: "#3cd5fb",}}/>
                    </Link>
                    <Link href="https://www.youtube.com/" underline="hover">
                        <FontAwesomeIcon icon={faYoutube} size="2xl" style={{color: "#e11414",}}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/evghenii-nalivayko-1bab01198/" underline="hover">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#457dde",}}/>
                    </Link>
                    <Link href="#" underline="hover">
                        <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#cd1d38",}}/>
                    </Link>
                    <Link href="#" underline="hover">
                        <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#4072c9",}}/>
                    </Link>
                </Box>
            </Box>
            <Grid justifyContent="space-between" container rowSpacing={2} columnSpacing={3}
                  columns={{xs: 2, sm: 4, md: 8, xl: 8}}>
                <Grid item xs={1} sm={2}>
                    <Box display='flex' flexDirection='column' alignItems='center' borderRadius='20px'
                         backgroundColor='#fff' height='100%' justifyContent='start' gap='40px' padding='5px'>
                        <Typography>Успех группы</Typography>
                        <HomeworkQualityChart/>
                    </Box>
                </Grid>
                <Grid item xs={2} sm={6}>
                    <Box display='flex' flex='1' flexDirection='column' alignItems='center' maxHeight='500px'
                         borderRadius='20px' maxWidth='100%'
                         backgroundColor='#fff' ma='5px'>
                        <Typography>Рейтинг по курсу</Typography>
                        <VerticalBarChar/>
                    </Box>
                </Grid>
            </Grid>
            <LessonsTabs type='js'/>
            <LessonsTabs type='react'/>
        </Box>


    );
}

export default MainPage;