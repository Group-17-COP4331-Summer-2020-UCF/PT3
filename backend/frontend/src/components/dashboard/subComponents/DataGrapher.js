import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/DataGrapher.css';
import React, { Component } from 'react';
//import { Row } from 'react-bootstrap'
import { Pie, Bar } from 'react-chartjs-2';
import Cookie from '../../general/Cookie'

const BASE_URL = 'https://large-project-2020.herokuapp.com/';

var passCount = 0, failCount = 0;
var barData = {
    labels: ['Situp Goal', 'Situp Avg.', 'Pullup Goal', 'Pullup Avg.', 'Run Goal', 'Run Avg.'],
    datasets: [
        {
            backgroundColor: ['#824ce6', '#824ce6', 'blue', 'blue', '#00ab66', '#00ab66'],
            borderColor: '#000000',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [35, 20, 47, 60, 12.30, 15.30]
        }
    ]
};
class DataGrapher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ['pass', 'fail'],
            datasets: [
                {
                    borderColor: 'black',
                    backgroundColor: [
                        '#00ab66',
                        '#cf142b'
                    ],
                    data: [Cookie.getCookie("passCount"), Cookie.getCookie("failCount")]
                }
            ],
            isLoaded: true
        };
    }

    updateData = () => {
        window.location.reload();
    }

    componentDidUpdate(prevProps, prevState) {
        // check whether client has changed
        if (prevState.data !== this.state.data) {
            this.fetchData(this.state.data);
        }
    }

    render() {
        return (
            <div>
                <Pie
                    data={this.state}
                    options={{
                        layout: {
                            padding: {
                                top: 30,
                                bottom: 10
                            }
                        },
                        title: {
                            display: true,
                            text: 'Pass Rate',
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
                <button onClick={this.updateData}>Update Tests</button>
                <Bar
                    data={barData}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    fontColor: "black",
                                    fontSize: 18,
                                    stepSize: 1,
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: "black",
                                    fontSize: 14,
                                    stepSize: 1,
                                }
                            }]
                        }
                    }}
                />
            </div>

        );
    }
}

export default DataGrapher;