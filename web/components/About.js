import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Panel, Button, Collapse, Well, Row, Col } from 'react-bootstrap';
import './CV.less';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        //   this.handle, NaeyUp = this.handleKeyUp.bind(this)
        //  this.handleGoClick = this.handleGoClick.bind(this)
    }

    render() {

        return (
            <div id='buttonGroup'>
                <Row>
                    <Col xs={10} sm={10} md={10} lg={10}>

                    <Panel>
                <Row>
                    <Col>
                    <div>
                    <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                        Sample 1
                    </Button>
                    <Collapse in={this.state.open}>
                        <div>
                            <Well>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                proident.
                            </Well>
                        </div>
                    </Collapse>
                    </div>
                        </Col>
                </Row>

                <Row>
                    <Col>
                    <div className='cvButton'>
                    <Button onClick={ ()=> this.setState({ open1: !this.state.open1 })}>
                        Sample 2
                    </Button>
                    <Collapse in={this.state.open1}>
                        <div>
                            <Well>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                proident.
                            </Well>
                        </div>
                    </Collapse>
                    </div>
                        </Col>
                </Row>
                <Row>
                    <Col>
                    <div className='cvButton'>
                    <Button onClick={ ()=> this.setState({ open2: !this.state.open2 })}>
                        Sample 3
                    </Button>
                    <Collapse in={this.state.open2}>
                        <div>
                            <Well>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                proident.
                            </Well>
                        </div>
                    </Collapse>
                        </div>
                        </Col>
                </Row>
                <Row>
                    <Col>
                    <div className='cvButton'>
                    <Button onClick={ ()=> this.setState({ open3: !this.state.open3 })}>
                        Sample 4
                    </Button>
                    <Collapse in={this.state.open3}>
                        <div>
                            <Well>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                proident.
                            </Well>
                        </div>
                    </Collapse>
                    </div>
                        </Col>
                </Row>
                <Row>
                    <Col>
                    <div className='cvButton'>
                    <Button onClick={ ()=> this.setState({ open4: !this.state.open4 })}>
                        Sample 5
                    </Button>
                    <Collapse in={this.state.open4}>
                        <div>
                            <Well>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                proident.
                            </Well>
                        </div>
                    </Collapse>
                    </div>
                        </Col>
                </Row>
                </Panel>
                        </Col>
                    </Row>
            </div>
        )
    }
}

About.propTypes = {};
