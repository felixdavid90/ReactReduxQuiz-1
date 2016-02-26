import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['answer3'];
import { Button, Panel, Row, Col } from 'react-bootstrap';
import './quizz.less';

const validate = values => {
    const errors = {};
    if (!values.answer3) {
        errors.answer3 = 'Please submit an answer';
    }

    return errors;
};

class QuizzFormThirdPage extends Component {

    render() {
        const {
            fields: {answer3},
            handleSubmit,
            previousPage
            } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={7} md={5} sm={7} lg={4} smOffset={2} xsOffset={2} mdOffset={3} lgOffset={3}>
                        <Panel>
                            <div
                                className={answer3.touched && answer3.error ? "form-group has-error" : "form-group"}>
                                <label className="control-label">What is the name of the biggest planet of the Solar System?</label>
                                <div>
                                    <input type="text" className="form-control"
                                           placeholder="Your answer please" {...answer3}/>
                                    {answer3.touched && answer3.error &&
                                    <div className="isError">{answer3.error}</div>}
                                </div>
                            </div>
                            <div >
                                <Button bsStyle="success" className="pull-right" type="submit">
                                    Next <i/>
                                </Button>
                                <Button bsStyle="primary" className="pull-right" onClick={previousPage}>
                                    Previous <i/>
                                </Button>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </form>
        );
    }
}

QuizzFormThirdPage.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'quizz',              // <------ same form name
    fields,                      // <------ only fields on this page
    destroyOnUnmount: false,     // <------ preserve form data
    validate                     // <------ only validates the fields on this page
})(QuizzFormThirdPage);