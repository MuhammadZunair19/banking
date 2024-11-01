"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React from 'react'
import { Doughnut } from 'react-chartjs-2';

//ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3200],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: [
            'Bank of America',
            'Chase Bank',
            'Wells Fargo'
        ]
    }

    return (
        <Doughnut data={data}
            options={{
                cutout: '60%',
                plugins:
                {
                    legend: {
                        display: false,

                    }
                }

            }} />
    );
}


export default DoughnutChart
