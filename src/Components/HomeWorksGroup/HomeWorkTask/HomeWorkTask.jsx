import React, {useEffect, useState} from "react";
import MDEditor from "@uiw/react-md-editor";
import {Box, Button, Typography} from "@mui/material";
import {AiOutlineCalendar} from "react-icons/ai";
import {getCurrentDateTime} from "../../../utils/getCurrentDate";
import {userAPI} from "../../../api/api";
import {useParams} from "react-router-dom";

function HomeWorkTask() {
    const [value, setValue] = useState('')
    const [homeWork, setHomeWork] = useState('')
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());
    const {type, id} = useParams()

    const handleComment = async () => {
        if (type === 'js') await userAPI.addComment(id, value, currentDateTime)
        else await userAPI.addCommentReact(id, value, currentDateTime)
    }

    useEffect(() => {
        const getList = async () => {
            let homeWork;
            try {
                if (type === 'js') homeWork = await userAPI.getHomeWork(id)
                else homeWork = await userAPI.getReactHW(id)
                setHomeWork(homeWork)
            } catch (e) {
                console.log(e)
            }
        }
        const getComments = async () => {
            let comments = [];
            try {
                if (type === 'js') comments = await userAPI.getComment(id)
                else comments = await userAPI.getCommentReact(id)
                setComments(comments)
                console.log(comments);
            } catch (e) {
                console.log(e)
            }
        }

        if (!homeWork) getList()
        getComments && getComments()
    }, [comment, type]);


    return (
        <Box display='flex' flexDirection='column' gap='30px' flexGrow={1} width='100%'>
            <Typography textAlign='center' variant='h3'>{homeWork.title}</Typography>
            <Typography variant='span'><AiOutlineCalendar/>Сдать до:{homeWork.createdAt}
            </Typography>
            <Typography>{homeWork.description}</Typography>
            <Box>
                {comments.map(comment => (
                    <Box>
                        <Box key={comment.id} display='flex' justifyContent='space-between'>
                            <Typography variant='h6' color='#1bcfb4'>{comment.name}</Typography>
                            <Box>{comment.time}</Box>
                        </Box>
                        <Box padding='30px' border='1px solid #000' marginBottom='10px' backgroundColor='#fff'
                             borderRadius='20px'>{comment.comment}</Box>
                    </Box>
                ))}
            </Box>
            <Box data-color-mode="light">
                <MDEditor height={200} value={value} onChange={(value) => {
                    setValue(value)
                }}/>
                <Button onClick={async () => {
                    setCurrentDateTime(getCurrentDateTime())
                    await handleComment()
                    setComment(value)
                }} variant="contained">Отправить</Button>
            </Box>
        </Box>
    );
}

export default HomeWorkTask;