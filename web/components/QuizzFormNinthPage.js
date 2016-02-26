import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['answer9'];
import { Button, Panel, Row, Col } from 'react-bootstrap';
import './quizz.less';

const validate = values => {
    const errors = {};
    if (!values.answer9) {
        errors.answer9 = 'Please submit an answer';
    }

    return errors;
};

class QuizzFormNinthPage extends Component {

    render() {
        const {
            fields: {answer9},
            handleSubmit,
            previousPage
            } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={7} md={5} sm={7} lg={4} smOffset={2} xsOffset={2} mdOffset={3} lgOffset={3}>
                        <Panel>
                            <div
                                className={answer9.touched && answer9.error ? "form-group has-error" : "form-group"}>
                                <label className="control-label">What is the capital of Croatia?</label>
                                <div>
                                    <input type="text" className="form-control"
                                           placeholder="Your answer" {...answer9}/>
                                    {answer9.touched && answer9.error &&
                                    <div className="isError">{answer9.error}</div>}
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

QuizzFormNinthPage.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'quizz',              // <------ same form name
    fields,                      // <------ only fields on this page
    destroyOnUnmount: false,     // <------ preserve form data
    validate                     // <------ only validates the fields on this page
})(QuizzFormNinthPage);