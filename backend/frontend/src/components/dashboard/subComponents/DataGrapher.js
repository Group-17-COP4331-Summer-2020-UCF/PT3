import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/DataGrapher.css';
import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import { Pie, Bar } from 'react-chartjs-2';
import Cookie from '../../general/Cookie'

const BASE_URL = 'https://large-project-2020.herokuapp.com/';

var passCount = 0, failCount = 0;
var barData = {
    labels: ['Run Goal(min)', 'Your Avg.', 'Pullup/Pushup', 'Your Avg.', 'Situp/Crunch', 'Your Avg.'],
    datasets: [
        {
            backgroundColor: ['#824ce6', '#824ce6', 'blue', 'blue', '#00ab66', '#00ab66'],
            borderColor: '#000000',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [Cookie.getCookie("runGoal"), Cookie.getCookie("runAvg"),
            Cookie.getCookie("pushupGoal"), Cookie.getCookie("pushupAvg"),
            Cookie.getCookie("situpGoal"), Cookie.getCookie("situpAvg")]
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
                <Col>
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
                    <button onClick={this.updateData}>Update Graphs</button>
                </Col>
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