import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/DataGrapher.css';
import React from 'react';
import { Row } from 'react-bootstrap'

// const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function DataGrapher() {
    // this is currently a prototype page of the layout of the data.
    return (
        <Row id="data-grapher-wrapper" fluid>
            <h1>
                Data Grapher!
            </h1>
            <p1>
                <!DOCTYPE HTML>
                <html>
                <head>
                <script>
                window.onload = function() {

                var chart = new CanvasJS.Chart("chartContainer", {
	                animationEnabled: true,
                    title: {
			            text: "Pass Percentage"
		            },
	                data: [{
		                type: "pie",
		                indexLabel: "{label} #percent%",
                        percentFormatString: "#0.##",
		                dataPoints: [
			                {y: 4, label: "Pass", color: "green"},
			                {y: 1, label: "Fail", color: "red"},
		                ]
	                }]
                });
                chart.render();

                }
                </script>
                </head>
                <body>
                <div id="chartContainer" style="height: 370px; width: 100%;"></div>
                </body>
                </html>
            </p1>

        </Row>
    );
};

export default DataGrapher;
