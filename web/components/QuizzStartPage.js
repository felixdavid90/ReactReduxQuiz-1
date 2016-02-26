import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Panel, Row, Col, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import { readQuizzStorage } from '../actions/quizzActions'
import './quizz.less';

export default class QuizzStartPage extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.context.store.dispatch(readQuizzStorage());
    }

    onClicked() {
        console.log("CLICKED++");
        browserHistory.push('/QuizzForm');
    }

    render() {
        console.log("THE PAGE VALUE is", parseInt(this.props.quizzPage));
        return (<div>
                <Row>
                    <Col xsOffset={2} smOffset={2} mdOffset={3} lgOffset={3} xs={5} sm={5} md={5} lg={4}>
                        <Panel id="quizzPanel">
                            <div id="quizzText">
                                <div>
                                    The following is sample quizz using the redux-form api.
                                </div>
                                <div>
                                    The quizz contains 10 simple questions.
                                </div>
                                <div>
                                    Following the completion of the quizz, your score will be saved.
                                </div>
                                <div>
                                    The analysis page will provide you feedback.
                                </div>
                            </div>
                            {parseInt(this.props.quizzPage) > 1 ?
                                <Button bsStyle="success" className="pull-right" onClick={this.onClicked}>
                                    Resume quizz <i/>
                                </Button> :
                                <Button bsStyle="primary" className="pull-right" onClick={this.onClicked}>
                                    Start quizz <i/>
                                </Button>
                            }
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

QuizzStartPage.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

QuizzStartPage.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps(state) {
    console.log('the state is', state);
    return {
        quizzForm: state.form.quizz,
        quizzPage: state.quizz.get('pageNo'),
        quizzAnswers: state.quizz.get('answers')
    }
}

export default connect(mapStateToProps, {})(QuizzStartPage)