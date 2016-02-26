import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Panel, Row, Col, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import { fetchPersons } from '../actions/index';
import { setPersons } from '../actions/index';
import './quizz.less';
import { Line } from 'react-chartjs';
import Griddle from 'griddle-react';

export default class Results extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.context.store.dispatch(fetchPersons);
    };
    averageCalculator(array) {
        let n = array.length;
        let sum = 0;
        for (let el in array){
            sum += parseInt(array[el]);
        }
        if (sum === 0) {
            return 0;
        }
        return sum / n;
    }
    personJsonToData(json) {
        console.log("THE JSON IS", json.toJS());
        let grouping = [];
        let finalAverage = [];
        for (let i = 0; i < 10; i++) {
            grouping[i] = [];
        }

        for (let person in json.toJS()) {
            grouping[parseInt(json.toJS()[person].age / 10)].push(parseInt(json.toJS()[person].age));
        }
        for (let i = 0; i < 10; i++) {
            finalAverage.push(this.averageCalculator(grouping[i]));
        }
        return finalAverage;
    }
    render() {
   //     this.myFunction("TEST");
       const { persons } = this.props;
    //    this.testFunction("la");
        let dataAverage = this.personJsonToData(persons);
        console.log("THE DATA AVERAGe", persons.toJS());
        const chartData = {
            labels: ["1-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-80", "81-90", "91-100"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: dataAverage
                }
            ]
        };
        const columnGMetaData = [
            {
                "columnName": "name",
                "locked": false,
                "visible": true,
                "displayName": "Name"
            },
            {
                "columnName": "age",
                "locked": false,
                "visible": true,
                "displayName": "Age"
            },
            {
                "columnName": "score",
                "locked": false,
                "visible": true,
                "displayName": "Score"
            }

        ];

        const chartOptions = {

            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines : true,

            //String - Colour of the grid lines
            scaleGridLineColor : "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth : 1,

            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,

            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,

            //Boolean - Whether the line is curved between points
            bezierCurve : true,

            //Number - Tension of the bezier curve between points
            bezierCurveTension : 0.4,

            //Boolean - Whether to show a dot for each point
            pointDot : true,

            //Number - Radius of each point dot in pixels
            pointDotRadius : 4,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth : 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius : 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke : true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth : 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill : true,
            responsive: true,
            //String - A legend template
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

        };
      //  console
        //.log("THE PERSONS ARE", persons);
        return (<div>
                <Row>
                    <Col smOffset={2} mdOffset={3} lgOffset={3} xs={10} sm={8} md={4} lg={4}>
                           <Line data={chartData} options={chartOptions} width="560" height="350"/>
                    </Col>
                </Row>
                <Row>
                    <Col id="griddleTable" xsOffset={2} smOffset={2} mdOffset={3} lgOffset={3} xs={7} sm={4} md={4} lg={4}>
                        <Griddle results={persons.toJS()} columnMetadata={columnGMetaData} showFilter={true}
                                 columns={["name", "age", "score"]}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

Results.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

Results.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps(state) {
    console.log('the state is', state);
    return {
        persons: state.results.get('persons')
    }
}

export default connect(mapStateToProps, {})(Results)
