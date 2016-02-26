import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';
import { push } from 'react-router-redux';

import QuizzFormFirstPage from './QuizzFormFirstPage';
import QuizzFormSecondPage from './QuizzFormSecondPage';
import QuizzFormThirdPage from './QuizzFormThirdPage';
import QuizzFormFourthPage from './QuizzFormFourthPage';
import QuizzFormFifthPage from './QuizzFormFifthPage';
import QuizzFormSixthPage from './QuizzFormSixthPage';
import QuizzFormSeventhPage from './QuizzFormSeventhPage';
import QuizzFormEighthPage from './QuizzFormEighthPage';
import QuizzFormNinthPage from './QuizzFormNinthPage';
import QuizzFormTenthPage from './QuizzFormTenthPage';
import QuizzFormFinalPage from './QuizzFormFinalPage';
import { browserHistory } from 'react-router'

import { setQuizzStorage, clearQuizzStorage, readQuizzStorage,
        setPreviousPage, saveNewPerson } from '../actions/quizzActions';

import './quizz.less';

const finalAnswers = ['lisbon', '366', 'jupiter', '360', '8',
                    'zagreb', 'zagreb', 'zagreb', 'zagreb', 'france'];

export default class QuizzForm extends Component {

    constructor(props) {
        super(props);
        this.state = { page: 1 };
        // Pro tip: The best place to bind your member functions is in the component constructor
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentWillMount() {
        this.context.store.dispatch(readQuizzStorage());
    }

    nextPage() {
        let answerValue = 'answer' + this.props.quizzPage;
        this.context.store.dispatch(setQuizzStorage(this.props.quizzForm[answerValue].value, this.props.quizzPage + 1));
        //updateQuizz ('blah', this.props.quizzPage + 1);
       // this.setState({page: this.state.page + 1});
    }

    calculateScore(answers) {
        let score = 0;
        for (let answer in answers) {
            let theNum = answer.replace( /^\D+/g, '');
            if (answers[answer].toLowerCase() === finalAnswers[theNum - 1]) {
                score += 10;
            }
        }
        return score;
    }

    onSave() {
        let score = this.calculateScore(this.props.quizzAnswers.toJS());
        let newPerson = {};
        newPerson['age'] = this.props.quizzForm.userAge.value;
        newPerson['name'] = this.props.quizzForm.userName.value;
        newPerson['score'] = score;
        saveNewPerson(newPerson);
  //      console.log("THE PROPS ARE", this.props.quizzForm.userAge.value, this.props.quizzForm.userName.value, score);
        this.context.store.dispatch(clearQuizzStorage());
        browserHistory.push('/results');
    }

    previousPage() {
        this.context.store.dispatch(setPreviousPage(this.props.quizzPage - 1));
    }

    render() {
        const {onSubmit, quizzPage, quizzAnswers} = this.props;
        console.log("THE PAGE IS", quizzPage, quizzAnswers);
        let progressLabel = (quizzPage - 1) * 10 + '%';
        return (<div>
                <ProgressBar now={(quizzPage - 1) * 10} label={progressLabel}/>
                {quizzPage === 1 && <QuizzFormFirstPage onSubmit={this.nextPage}/>}
                {quizzPage === 2 && <QuizzFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {quizzPage === 3 && <QuizzFormThirdPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {quizzPage === 4 && <QuizzFormFourthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {quizzPage === 5 && <QuizzFormFifthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {quizzPage === 6 && <QuizzFormSixthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {quizzPage === 7 && <QuizzFormSeventhPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {quizzPage === 8 && <QuizzFormEighthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {quizzPage === 9 && <QuizzFormNinthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {quizzPage === 10 && <QuizzFormTenthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {quizzPage === 11 && <QuizzFormFinalPage previousPage={this.previousPage} onSubmit={this.onSave}/>}
            </div>
        );
    }
}

QuizzForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

QuizzForm.contextTypes = {
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

export default connect(mapStateToProps, {
    push
})(QuizzForm)
