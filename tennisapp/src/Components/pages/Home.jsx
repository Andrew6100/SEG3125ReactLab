import React from 'react'
// import tennisHome from './images/tennisHome.jpg';
// import homePage from './images/homePage.jpg';
import homeImage from './images/homeImage.jpg';
import homeImage1 from './images/homeImage1.jpg';
// import homeImg from './images/homeImg.jpg';
import FullButton from '../FullButton';
import largeTennis from './images/largeTennis.jpg';
import largeTennis1 from './images/largeTennis1.jpg';
import largeTennis2 from './images/largeTennis2.jpg';
import largeTennis3 from './images/largeTennis3.jpg';
import largeTennisfr from './images/largeTennisfr.jpg';
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import oneonone from './images/oneonone.jpg';
import doubleslesson from './images/doubleslesson.jpg';
import grouplessson from './images/grouplessson.jpg';

import barrhavenCourt from './images/barrhavenCourt.jpg';
import kanataCourt from './images/kanataCourt.jpg';
import orleansCourt from './images/orleansCourt.jpg';
import downtownCourt from './images/downtownCourt.jpg';

import { FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelopeSquare, 
    FaTableTennis, FaInfoCircle, FaCalendar, FaBook, FaLightbulb, FaAddressBook} from 'react-icons/fa';

import translate from "../../i18n/translate";



export default function Home() {
    return (
        <div>
            <div className="text-center">
                <img src={ largeTennis1 } alt="ref" className="w-100"></img>
            </div>
            <Container>
                <h1 className="display-4 text-center my-4"><strong>{translate('welcomeMessage')}</strong><hr/></h1>
                <p className="lead my-4 ">
                <strong>
                    {translate('welcomeintro')}
                </strong>
                </p>
                <FullButton buttonText={translate('aboutus')} link="/about"/>
            </Container>

            <Container>
                <h1 className="display-4 text-center my-4"><strong>{translate('reserveacourt')}</strong><hr/></h1>
                <CardDeck className="my-4">
                    <Card>
                        <Card.Img variant="top" src={ barrhavenCourt }/>
                        <Card.Body>
                        <Card.Title>Barrhaven</Card.Title>
                        <Card.Text> 
                            {translate('barhavenlocation')}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"> <FaMapMarkerAlt /> 123 Barrhaven Drive</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ kanataCourt }/>
                        <Card.Body>
                        <Card.Title>Kanata</Card.Title>
                        <Card.Text>
                            {translate('kanatalocation')}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><FaMapMarkerAlt /> 456 Kanata Street </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ orleansCourt } />
                        <Card.Body>
                        <Card.Title>Orleans</Card.Title>
                        <Card.Text>
                            {translate('orleansocation')}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><FaMapMarkerAlt /> 789 Orleans Street </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ downtownCourt } />
                        <Card.Body>
                        <Card.Title>{translate('downtown')}</Card.Title>
                        <Card.Text>
                            {translate('downtownlocation')}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><FaMapMarkerAlt /> 1738 Downtown Drive </small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <FullButton buttonText={translate('reserveacourt')} link="/reserveacourt"/>
            </Container>

            <Container>
                <h1 className="display-4 text-center my-4"><strong>{translate('bookalesson')}</strong><hr/></h1>
                <CardDeck className="my-4">
                    <Card>
                        <Card.Img variant="top" src={ oneonone }/>
                        <Card.Body>
                        <Card.Title>{translate('oneonone')}</Card.Title>
                        <Card.Text>
                            {translate('oneononedes')}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{translate('oneononeprice')}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ doubleslesson } />
                        <Card.Body>
                        <Card.Title>{translate('doubles')}</Card.Title>
                        <Card.Text>
                            {translate('doublesdes')}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{translate('doublesprice')}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ grouplessson } />
                        <Card.Body>
                        <Card.Title>{translate('group')}</Card.Title>
                        <Card.Text>
                            {translate('groupdes')}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{translate('groupprice')}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <FullButton buttonText={translate('bookalesson')} link="/Bookalesson"/>
            </Container>

            <Container>
                <h1 className="display-4 text-center my-4"><strong>{translate('explore')}</strong><hr/></h1>
                <p className="lead my-4">
                <strong>
                    {translate('explorehomedes')}
                </strong>
                </p>
                <FullButton buttonText={translate('explore')} link="/explore"/>
            </Container>

            <Container>
                <h1 className="display-4 text-center my-4"><strong>{translate('contactus')}</strong><hr/></h1>
                <p className="lead my-4 text-center"> 
                <strong>
                    {translate('contactushomedes')}
                    <br/> <br/>
                    <FaEnvelopeSquare /> Lestennis@academy.com <br/>
                    <FaPhone /> (613)804-1738 <br/>
                    <FaInstagram /> Lestennisacademy <br/>
                    <FaFacebook /> Lestennisacademy <br/>
                    <FaTwitter /> Lestennisacademy <br/>
                    <FaLinkedin /> Lestennisacademy <br/>
                </strong>
                </p>
                <FullButton buttonText={translate('contactus')} link="/contactus"/>
            </Container>
            
        </div>
        
    )
}
