import React, {useEffect, useState} from "react";
import {Line} from 'rc-progress';
import './homeWork.module.scss.css'
import {Button, ButtonGroup, CardContent, CardActions, Card, Typography, Slider} from "@mui/material";
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import {userAPI} from "../../../api/api";
import {useActions} from "../../../hooks/useActions";
import {maxTextLength} from "../../../utils/maxTextLength";
import {NavLink, useLocation, useParams} from "react-router-dom";


function HomeWork({hw, index}) {
    const [color, setColor] = useState('#3fcbfb');
    const {togglePassed, changeHomeWork, togglePassedReact} = useActions();
    const {type} = useParams()
    const changed = async () => {
        togglePassed(index)
        try {
            if (type === 'js') {
                togglePassed(index)
                await userAPI.updateHomeWork(hw.id, hw.complete)
            } else {
                togglePassedReact(index)
                await userAPI.updateHomeWorkReact(hw.id, hw.complete)
            }

        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        if (hw.hard > 50 && hw.hard < 75) setColor('#e3e819')
        if (hw.hard > 75) setColor('#d21515')
    }, [hw.hard,type])

    return (
        <Card sx={{padding: '20px'}}>
            <CardContent>
                <Typography sx={{fontSize: 20}} variant="h3" color="text.secondary" gutterBottom>
                    {hw.title}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {hw.createdAt}
                    <Line percent={+hw.hard} strokeWidth={3} strokeColor={color}/>
                </Typography>
                <Typography variant="body2">
                    {maxTextLength(100, hw.description)}
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonGroup sx={{}} size="xs" color="success" aria-label="primary button group">
                    <NavLink to={`/homeWorkTask/${type}/${hw.id}`} state={{ type: type }}>
                        <Button onClick={() => changeHomeWork(hw)} variant="contained" sx={{ ml: 0 }}>
                            К домашке <KeyboardTabIcon />
                        </Button>
                    </NavLink>
                    <Button onClick={changed} variant="contained"
                            color={hw.complete ? 'error' : 'success'}>{hw.complete ? 'Remove' : 'Passed'}</Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    )
}

export default HomeWork