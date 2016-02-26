import React, { Component, PropTypes } from 'react'
import { Button, Col, Row, Navbar, Nav, NavItem, NavDropdown,
        MenuItem } from 'react-bootstrap';
import './header.less';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router'
import { activateHeader } from '../actions/index';
import { push } from 'react-router-redux';

export default class Header extends Component {
    constructor(props) {
        super(props);
     //   this.handle, NaeyUp = this.handleKeyUp.bind(this)
      //  this.handleGoClick = this.handleGoClick.bind(this)
    }

    handleClick(e) {
        browserHistory.push(e);
        this.context.store.dispatch(activateHeader(e));
        console.log('I have clicked from', e);
    }

    render() {
        const { tab } = this.props;
        return (
            <div>
                <Navbar inverse id="header">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className={tab === '/' ? "activate" : ''}
                               onClick={this.handleClick.bind(this, '/')} id="name">codingRocks</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem className={tab === '/About' ? "activate" : ''} eventKey={1}
                                     onClick={this.handleClick.bind(this, '/About')}>About</NavItem>
                            <NavDropdown className={tab === '/Quizz' || tab === '/Results' ? "activate" : ''}
                                         eventKey={3} title="Apps" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} onClick={this.handleClick.bind(this, '/Quizz')}>Quizz</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.2} onClick={this.handleClick.bind(this, '/Results')}>Results</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem className="" eventKey={1} href="#">Downloads</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>
        )
    }
}

Header.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

Header.contextTypes = {
    store: React.PropTypes.object
};

function mapStateToProps(state) {
    return {
        tab: state.header.get('tab')
    }
}

export default connect(mapStateToProps, {
    push
})(Header)