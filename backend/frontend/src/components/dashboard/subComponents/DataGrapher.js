import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/DataGrapher.css';
import React from 'react';
import { Row } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2';

const BASE_URL = 'https://large-project-2020.herokuapp.com/';

const state = {
    labels: ['pass', 'fail'],
    datasets: [
        {
            borderColor: 'black',
            backgroundColor: [
                '#00ab66',
                '#cf142b'
            ],
            data: [4, 1]
        }
    ]
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Pie
                    data={state}
                    options={{
                        layout: {
                            padding: {
                                top: 30,
                                bottom: 10
                            }
                        },
                        title: {
                            display: true,
                            text: 'Pass Percentage',
                            fontSize: 30,
                            fontColor: '#000000'
                        },
                        legend: {
                            position: 'bottom',
                            stokeStyle: 'black',
                            labels: {
                                fontColor: '#000000',
                                fontSize: 15
                            }
                        }
                    }}
                />
            </div>
        );
    }
}