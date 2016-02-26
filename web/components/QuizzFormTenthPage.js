import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { Row, Col, Button, Panel } from 'react-bootstrap';
import './quizz.less';

export const fields = ['answer1', 'answer2', 'answer10'];
// ^^ All fields on last form

const validate = values => {
    console.log("THE VALUES ARE, ", values);
    const errors = {};
    if (!values.answer10) {
        errors.answer10 = 'Required';
    }
    return errors;
};

class QuizzFormTenthPage extends Component {

    render() {
        const {
            fields: {answer10},
            handleSubmit,
            previousPage,
            submitting
            } = this.props;
        console.log("THE PROPS ARE++", this.props);
        return (<form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={7} md={5} sm={7} lg={4} smOffset={2} xsOffset={2} mdOffset={3} lgOffset={3}>
                        <Panel>
                            <div className={answer10.touched && answer10.error ? "form-group has-error" : "form-group"}>
                                <label className="control-label">The biggest country in EU?</label>
                                <div>
                                    <input type="text" className="form-control" placeholder="Your answer" {...answer10}/>
                                    {answer10.touched && answer10.error && <div className="isError">{answer10.error}</div>}
                                </div>
                            </div>
                            <div>
                                <Button bsStyle="success" className="pull-right" type="submit">
                                    Finish
                                </Button>
                                <Button bsStyle="primary" type="button" className="pull-right" disabled={submitting} onClick={previousPage}>
                                    <i/> Previous
                                </Button>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </form>
        );
    }
}

QuizzFormTenthPage.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default reduxForm({
    form: 'quizz',              // <------ same form name
    fields,                      // <------ all fields on last wizard page
    destroyOnUnmount: false,     // <------ preserve form data
    validate                     // <------ only validates the fields on this page
})(QuizzFormTenthPage);