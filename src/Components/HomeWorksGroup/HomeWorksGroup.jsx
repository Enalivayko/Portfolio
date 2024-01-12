import {useEffect, useState} from "react";
import {userAPI} from "../../api/api";
import HomeWork from "./HomeWorks/HomeWork";
import {Grid, Pagination, Stack, Box} from "@mui/material";
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";
import ReactLoading from "react-loading";
import classes from './HomeWorksGroup.module.scss'
import WorkTitle from "./HomeWorkTitle/WorkTitle";
import {useParams, useSearchParams} from "react-router-dom";

function HomeworkList() {
    const [error, setError] = useState(null)
    const {getHomeWork, setIsLoading} = useActions()
    const {isLoading, homeWorkList} = useSelector(state => state.homework)
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const handleChange = (event, value) => {
        setPage(value);
        setSearchParams({page: value})
    };
    const {type} = useParams()

    useEffect(() => {
        if (page !== +searchParams.get("page") && searchParams.get("page")) {
            setPage(+searchParams.get("page"))
        }
        const getList = async () => {
            setIsLoading(true)
            try {
                let data = [];
                if (type === 'js') {
                    data = await userAPI.getAll(page);
                } else data = await userAPI.getHomeWorkReact(page);
                getHomeWork(data)
            } catch (e) {
                console.log(e)
            }
            setIsLoading(false)
        }
        getList()
    }, [page, type])

    return (
        <>
            <Box component="div">
                <WorkTitle type={type}/>
            </Box>

            {error && <h1>Error</h1>}

            {isLoading

                ? <Grid justifyContent="center" container width='100vw'>
                    <ReactLoading className={classes.loading} type={'spokes'} color={'#3fcbfb'} height={'20%'}
                                  width={'10%'}/>
                </Grid>
                :
                <Grid justifyContent="center" container rowSpacing={3} columnSpacing={3}
                      columns={{xs: 2, sm: 4, md: 8, xl: 12}}>
                    {homeWorkList.map((hw, index) => (
                        <Grid item xs={2} sm={4} key={hw.id}>
                            <HomeWork index={index} hw={hw} key={hw.id} type={type}/>
                        </Grid>))}
                </Grid>}
            <Stack spacing={2} direction="column" display="flex" alignItems="center" flexWrap="wrap">
                <Pagination count={8} page={page} onChange={handleChange}/>
            </Stack>
        </>
    );
}

export default HomeworkList;
