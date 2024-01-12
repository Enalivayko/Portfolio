import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {userAPI} from "../../../api/api";
import {generateRandomColors} from "../../../utils/getRandomColors";
import {useActions} from "../../../hooks/useActions";
import {useSelector} from "react-redux";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function VerticalBarChar(props) {
    const [options, setOptions] = useState({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'JavaScript HW',
            },
        },
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        scales: {
            x: {
                ticks: {
                    beginAtZero: true,
                },
            },
            y: {
                ticks: {
                    maxRotation: 0,
                    autoSkip: true,
                    maxTicksLimit: 10,
                },
            },
        },
    });
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'JavaScript HW',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    });

    const {getUsers} = useActions()
    const {user} = useSelector(state => state.homework)
    useEffect(() => {
        const getUserList = async () => {
            try {
                const users = await userAPI.getUsers();
                getUsers(users)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        const marks = user.map(user => user.mark);
        const names = user.map(user => user.name);
        const colors = generateRandomColors(marks.length);

        setData({
            labels: names,
            datasets: [
                {
                    ...data.datasets[0],
                    data: marks,
                    backgroundColor: colors
                },
            ],
        });


        if (!user.length) getUserList()
    }, [user]);

    return <Bar options={options} data={data}/>;
}

export default VerticalBarChar;
