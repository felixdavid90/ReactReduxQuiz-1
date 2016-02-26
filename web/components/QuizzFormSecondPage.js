import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { Row, Col, Button, Panel } from 'react-bootstrap';
import './quizz.less';

export const fields = ['answer2'];

const validate = values => {
    const errors = {};
    console.log("IS IT NAN", isNaN(values.answer2));
    if (!values.answer2) {
        errors.answer2 = 'Please submit an answer';
    } else if (isNaN(values.answer2)) {
        errors.answer2 = 'Value must be a number';
    }

    return errors;
};

class QuizzFormSecondPage extends Component {

    render() {
        const {
            fields: {answer2},
            handleSubmit,
            previousPage
            } = this.props;
        return (<form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={7} md={5} sm={7} lg={4} smOffset={2} xsOffset={2} mdOffset={3} lgOffset={3}>
                        <Panel>
                            <div className={answer2.touched && answer2.error ? "form-group has-error" : "form-group"}>
                                <label className="control-label">How many days are in a leap year?</label>
                                <div>
                                    <input type="text" className="form-control"
                                           placeholder="Your answer please" {...answer2}/>
                                    {answer2.touched && answer2.error &&
                                    <div className="isError">{answer2.error}</div>}
                                </div>
                            </div>
                        <div>
                            <Button bsStyle="success" className="pull-right" type="submit">
                                Next <i/>
                            </Button>
                            <Button bsStyle="primary" className="pull-right" type="button" onClick={previousPage}>
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

QuizzFormSecondPage.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'quizz',              // <------ same form name
    fields,                      // <------ only fields on this page
    destroyOnUnmount: false,     // <------ preserve form data
    validate                     // <------ only validates the fields on this page
})(QuizzFormSecondPage);