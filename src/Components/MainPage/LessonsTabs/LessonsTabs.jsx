import React, {useEffect, useMemo, useState} from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {userAPI} from "../../../api/api";
import TabsItem from "./TabsItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJs, faReact} from "@fortawesome/free-brands-svg-icons";

function LessonsTabs({type}) {
    const [lesson, setLesson] = useState([])


    useEffect(() => {
        const getList = async () => {
            let data;
            try {
                if (type === 'js') data = await userAPI.getAll(3);
                else data = await userAPI.getHomeWorkReact(2);
                setLesson(data)
            } catch (e) {
                console.log(e)
            }
        }
        getList()
    }, [type])

    return (
        <Box>
            <Box>
                {type === 'js'
                    ?
                    <Box display='flex' gap='10px' alignItems='center' padding='20px 10px 20px 0'>
                        <FontAwesomeIcon icon={faJs} size="2xl" style={{color: "#d13dc5",}}/>
                        <Typography>JS Course</Typography>
                    </Box>
                    :
                    <Box display='flex' gap='10px' alignItems='center' padding='20px 10px 20px 0'>
                        <FontAwesomeIcon size="2xl" icon={faReact}/>
                        <Typography>React Course</Typography>
                    </Box>}
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell align="right">Дата</TableCell>
                            <TableCell align="right">Сложность</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lesson.map((lesson) => (
                            <TabsItem type={type} key={lesson.id} lesson={lesson}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default LessonsTabs;