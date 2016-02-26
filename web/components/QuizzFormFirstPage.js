import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['answer1'];
import { Button, Panel, Row, Col } from 'react-bootstrap';
import './quizz.less';

const validate = values => {
    const errors = {};
    if (!values.answer1) {
        errors.answer1 = 'Please submit an answer';
    }

    return errors;
};

class QuizzFormFirstPage extends Component {

    render() {
        const {
            fields: {answer1},
            handleSubmit
            } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={7} md={5} sm={7} lg={4} smOffset={2} xsOffset={2} mdOffset={3} lgOffset={3}>
                <Panel className="quizzes">
                            <div className={answer1.touched && answer1.error ? "form-group has-error" : "form-group"}>
                                <label className="control-label">What is the capital city of Portugal?</label>
                                <div>
                                    <input type="text" className="form-control"
                                           placeholder="Your answer please" {...answer1}/>
                                    {answer1.touched && answer1.error &&
                                    <div className="isError">{answer1.error}</div>}
                                </div>
                            </div>
                            <div >
                                <Button bsStyle="success" className="pull-right" type="submit">
                                    Next <i/>
                                </Button>
                            </div>
                </Panel>
                    </Col>
                </Row>
            </form>
        );
    }
}

QuizzFormFirstPage.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'quizz',              // <------ same form name
    fields,                      // <------ only fields on this page
    destroyOnUnmount: false,     // <------ preserve form data
    validate                     // <------ only validates the fields on this page
})(QuizzFormFirstPage);