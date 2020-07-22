import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/DataGrapher.css';
import React, { Component } from 'react';
//import { Row } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2';
import Cookie from '../../general/Cookie'

const BASE_URL = 'https://large-project-2020.herokuapp.com/';

var passCount = 0, failCount = 0;
var state;
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

    updateData = () =>{
        this.state.data = [Cookie.getCookie("passCount"), Cookie.getCookie("failCount")];
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
            </div>

        );
    }
}

export default DataGrapher;