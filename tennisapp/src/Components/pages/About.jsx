import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import aboutHeaderImg from './images/aboutHeaderImg.jpg';
import andrewle from './images/andrewle.jpg';
import roger from './images/roger.jpg';
import serena from './images/serena.jpg';
import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import { FaEnvelopeSquare } from 'react-icons/fa';
import Mailto from 'react-protected-mailto'
import translate from "../../i18n/translate";
 

export default function About() {
    return (
        <div>
            {/* History */}
            <Container>
                <h1 className="text-success text-decoration-none display-4 text-center my-4"><strong>{translate('aboutus')}</strong><hr/></h1>
                <Card>
                    <Card.Img variant="top" src={ aboutHeaderImg } />
                    <Card.Body>
                    <Card.Text>
                        {translate('aboutdesc')}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

            {/* Our Difference */}
            <Container>
                <h1 className="text-success text-decoration-none display-4 text-center my-4">{translate('ourdif')}</h1> 

                <h3 className="text-success text-decoration-none my-4">{translate('creatTennis')}</h3>
                <p>{translate('creatTennisdesc')}</p>
               
                <h3 className="text-success text-decoration-none my-4">{translate('inclusive')}</h3> 
                <p>{translate('inclusivedesc')}</p>
               
                <h3 className="text-success text-decoration-none my-4">{translate('elimbarr')}</h3> 
                <p>{translate('elimbarrdesc')}</p>
            </Container>

             {/* Our Team */}
             <Container>
             
                <h2 className="text-success text-decoration-none display-4 text-center my-4">{translate('ourteam')}</h2>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={ andrewle } />
                        <Card.Body>
                        <Card.Title>Andrew Le</Card.Title>
                        <Card.Text>
                            {translate('andrewdes')}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">
                            <FaEnvelopeSquare />
                            <Mailto email='andrew@lestennisacademy.com' headers={{subject:'Question from the website'}}/>
                        </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ serena } />
                        <Card.Body>
                        <Card.Title>Naana Williams</Card.Title>
                        <Card.Text>
                            {translate('naanades')}
                           
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">
                            <FaEnvelopeSquare />
                            <Mailto email='naana@lestennisacademy.com' headers={{subject:'Question from the website'}}/>
                        </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ roger } />
                        <Card.Body>
                        <Card.Title>Julio Federer</Card.Title>
                        <Card.Text>
                            {translate('juliodes')}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">
                            <FaEnvelopeSquare />
                            <Mailto email='julio@lestennisacademy.com' headers={{subject:'Question from the website'}}/>
                        </small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>

             {/* Customer Testimonials */}
             <Container>
                <h2 className="text-success text-decoration-none display-4 text-center my-4">{translate('customertest')}</h2>
                <h4>John Nanolo</h4>
                <p> {translate('testim1')} </p>
                <h4>Brandon Smoove</h4>
                <p>{translate('testim2')}</p>
                <h4>Sweezy Fernado</h4>
                <p>{translate('testim3')}</p>
            </Container>

            <br/>
            <br/>

            {/* Contact Us */}
            <Container>
            <div className="text-center">
                <h5>{translate('havequestion')}</h5>
                <Link to="/contactus" className="btn btn-lg btn-success w-20 py-1 my-1">{translate('contactus')}</Link> 
            </div>
            </Container>
        </div>
    )
}
