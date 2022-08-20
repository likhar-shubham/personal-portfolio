import React from 'react'
import PropTypes from 'prop-types'

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale
);

function RadarChart(props) {
    const options = {
        scales: {
            r:
            {
                min: 0,
                max: 100,
                ticks: {
                    display: false,
                    maxTicksLimit: 1
                }

            }
        }
    }

    return <Radar data={props.data} options={options} />;
}

RadarChart.propTypes = {}

export default RadarChart
