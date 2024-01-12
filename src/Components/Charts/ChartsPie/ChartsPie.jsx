import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import {userAPI} from '../../../api/api';
import {Box} from '@mui/material';
import {useSelector} from "react-redux";
import {useActions} from "../../../hooks/useActions";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartsPie() {
    const [data, setData] = useState({
        labels: ['0-50 - плохо', '50-75 - постарайся лучше', '75-100 - хорошо'],
        datasets: [
            {
                label: 'всего',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    });
    const {dataPieCharts} = useSelector(state => state.homework)
    const {getDataChartsPie} = useActions()


    useEffect(() => {
        const getList = async () => {
            try {
                const data = await userAPI.getAllHomeWork();
                getDataChartsPie(data)

            } catch (e) {
                console.error('Error fetching data:', e);
            }
        }

        if (!dataPieCharts.length)  getList()
        let counts = [0, 0, 0];
        dataPieCharts.forEach((hw) => {
            if (hw.hard >= 0 && hw.hard < 50) {
                counts[0]++;
            } else if (hw.hard >= 50 && hw.hard < 75) {
                counts[1]++;
            } else if (hw.hard >= 75 && hw.hard <= 100) {
                counts[2]++;
            }
            //Настройка data для  Pie
            setData((prevData) => ({
                ...prevData,
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: counts,
                    },
                ],
            }));
        })
    }, [dataPieCharts]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {

            legend: {
                position: 'top',
                labels: {
                    generateLabels: function (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map((label, i) => {
                                const dataset = data.datasets[0];
                                const value = dataset.data[i];
                                const total = dataset.data.reduce((acc, val) => acc + val, 0);
                                const percentage = Math.round((value / total) * 100);
                                return {
                                    text: `${label} (${percentage}%)`,
                                    fillStyle: dataset.backgroundColor[i],
                                };
                            });
                        }
                        return [];
                    },
                },
            },
        },
    };
    const chartStyle = {
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
    };


    return (
        <Box>
            <Pie data={data} options={options} height={300} style={chartStyle}/>
        </Box>
    );
}
