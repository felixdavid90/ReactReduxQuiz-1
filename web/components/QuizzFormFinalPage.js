import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { Row, Col, Button, Panel } from 'react-bootstrap';
import './quizz.less';
import { connect } from 'react-redux';

export const fields = ['userName', 'userAge'];
// ^^ All fields on last form

const validate = values => {
    console.log("THE VALUES ARE, ", values);
    const errors = {};
    if (!values.userName) {
        errors.userName = 'Required';
    }
    if (!values.userAge) {
        errors.userAge = 'Required';
    }
    return errors;
};

class QuizzFormFinalPage extends Component {
    render() {
        const {
            fields: {userName, userAge},
            handleSubmit,
            previousPage,
            submitting
            } = this.props;
        return (<form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={7} md={5} sm={7} lg={4} smOffset={2} xsOffset={2} mdOffset={3} lgOffset={3}>
                        <Panel>
                            <Panel>
                            <div> <p> You have reached the end of the Quizz </p>
                                <p> Fill in your details and check the results page for feedback </p> </div>
                                </Panel>
                            <div className={userName.touched && userName.error ? "form-group has-error" : "form-group"}>
                                <label className="control-label">Name</label>
                                <div>
                                    <input type="text" className="form-control" placeholder="Your name please" {...userName}/>
                                    {userName.touched && userName.error && <div className="isError">{userName.error}</div>}
                                </div>
                            </div>
                            <div className={userAge.touched && userAge.error ? "form-group has-error" : "form-group"}>
                                <label className="control-label">Age</label>
                                <div>
                                    <input type="text" className="form-control" placeholder="Your age please" {...userAge}/>
                                    {userAge.touched && userAge.error && <div className="isError">{userAge.error}</div>}
                                </div>
                            </div>
                            <div>
                                <Button bsStyle="success" type="submit" className="pull-right">
                                    Submit
                                </Button>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </form>
        );
    }
}

QuizzFormFinalPage.propTypes = {
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
})(QuizzFormFinalPage);