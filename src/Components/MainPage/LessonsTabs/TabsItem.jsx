import React, {useEffect, useState} from 'react';
import {Button, TableCell, TableRow} from "@mui/material";
import {Line} from "rc-progress";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

function TabsItem({lesson, type}) {
    const [color, setColor] = useState('#3fcbfb');
    useEffect(() => {
        if (lesson.hard > 50 && lesson.hard < 75) setColor('#e3e819')
        if (lesson.hard > 75) setColor('#d21515')
    }, [color, type])
    return (
        <TableRow
            key={lesson.id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell component="th" scope="row">
                {lesson.title}
            </TableCell>
            <TableCell align="right">{lesson.createdAt}</TableCell>
            <TableCell width='35%' align="right">
                {<Line percent={+lesson.hard} strokeWidth={2} strokeColor={color}/>}
            </TableCell>
            <TableCell align="right">
                <NavLink to={`/homeWorkTask/${type}/${lesson.id}`}>
                    {<Button variant="contained"><FontAwesomeIcon icon={faRightToBracket}/></Button>}
                </NavLink>
            </TableCell>


        </TableRow>
    );
}

export default TabsItem;