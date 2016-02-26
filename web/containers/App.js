import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from '../components/Header';
import { Row, Col, Carousel, CarouselItem } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
  //  this.handleChange = this.handleChange.bind(this);
   // this.handleDismissClick = this.handleDismissClick.bind(this)
  }
  componentDidMount() {
    console.log("the props are" , this.props);
    //fetchPersons();
  }

  render() {

    const { children } = this.props;
    //let date = Date.now();
   // this.checkJson(json);
    return (
      <div>
        <Header/>
        {!children ?  <Row>
          <Col xsOffset={1} smOffset={1} mdOffset={2} lgOffset={2} xs={10} sm={10} md={10} lg={8}>
            <Carousel>
              <CarouselItem>
                <img width={1920} height={1080} alt="1920x1080" src="http://www.extremetech.com/wp-content/uploads/2016/02/Gravitational-Waves.jpg"/>
                <div className="carousel-caption">
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img width={1920} height={1080} alt="1920x1080" src="http://www.extremetech.com/wp-content/uploads/2016/02/Gravitational-Waves.jpg"/>
                <div className="carousel-caption">
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img width={1920} height={1080} alt="1920x1080" src="http://www.extremetech.com/wp-content/uploads/2016/02/Gravitational-Waves.jpg"/>
                <div className="carousel-caption">
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </CarouselItem>
            </Carousel>
          </Col>
        </Row> : children}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  push: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {
  push
})(App)
