import React from 'react'
import homeImage from './images/homeImage.jpg';
import homeImage1 from './images/homeImage1.jpg';
import Linkify from 'react-linkify';
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Button} from 'react-bootstrap';

import { FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelopeSquare } from 'react-icons/fa';
import translate from "../../i18n/translate";

export default function Explore() {

    const componentDecorator = (href, text, key) => (
        <a href={href} key={key} target="_blank">
          {text}
        </a>
     );

    return (
        <div>
             <Container>
                <h1 className="text-success text-decoration-none display-4 text-center my-4"><strong>{translate('explore')}</strong><hr/></h1>
                <p className="lead my-4">
                <strong>
                    {translate('exploredesc')}
                </strong>
                </p>
                <hr/>
            </Container>
            <br/>

            {/* Beginner Container */}
            <Container>
                <h1 className="text-success text-decoration-none display-4 text-center my-4">{translate('beginerlevel')}</h1> 
                
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>{translate('begvid1title')}</Card.Title>
                        <Card.Text>
                        {translate('begvid1des')}
                        </Card.Text>
                        </Card.Body>
                        <div className="text-center">
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/jrhM3k84YJU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>{translate('begvid2title')}</Card.Title>
                        <Card.Text>
                        {translate('begvid2des')}
                        </Card.Text>
                        </Card.Body>
                        <div className="text-center">
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/9sBL1WsREyE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>{translate('begvid3title')}</Card.Title>
                        <Card.Text>
                        {translate('begvid3des')}
                        </Card.Text>
                        </Card.Body>
                        <div className="text-center">
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/FKtqaKjZVPs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>{translate('begarticledes')}</Card.Title>
                            <Linkify componentDecorator={componentDecorator}>
                            Tennis 101: https://www.tenniscanada.com/play/tennis-101/ <br/>
                            {translate('begarticle2')}: https://www.thetennismom.com/how-to-play-tennis/ <br/>
                            {translate('begarticle3')}: https://www.active.com/tennis/articles/how-to-play-tennis-tips-for-beginners
                            </Linkify>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
            <br/>

            {/* Intermediate Container */}
            <Container>
                <h1 className="text-success text-decoration-none display-4 text-center my-4">{translate('intermediatelevel')}</h1> 

                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>{translate('intvid1title')}</Card.Title>
                        <Card.Text>
                        {translate('intvid1des')}
                        </Card.Text>
                        </Card.Body>
                        <div className="text-center">
                        <iframe width="780" height="439" src="https://www.youtube.com/embed/3E6N2qtkYrk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>{translate('intvid2title')}</Card.Title>
                        <Card.Text>
                        {translate('intvid2des')}
                        </Card.Text>
                        </Card.Body>
                        <div className="text-center">
                        <iframe width="780" height="439" src="https://www.youtube.com/embed/hQ2ETdwn4-w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>{translate('intvid3title')}</Card.Title>
                        <Card.Text>
                        {translate('intvid3des')}
                        </Card.Text>
                        </Card.Body>
                        <div className="text-center">
                        <iframe width="780" height="439" src="https://www.youtube.com/embed/jpAao37qeac" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>{translate('intarticledes')}</Card.Title>
                            <Linkify componentDecorator={componentDecorator}>
                            {translate('intarticle1')}: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3761830/ <br/>
                            {translate('intarticle2')}: https://tenniscompanion.org/types-of-tennis-racquets/ <br/>
                            {translate('intarticle3')}: https://journals.humankinetics.com/view/journals/tsp/8/3/article-p305.xml
                            </Linkify>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>

            {/* Advanced Container */}
            <Container>
                <h1 className="text-success text-decoration-none display-4 text-center my-4">{translate('advancedlevel')}</h1> 

                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>{translate('advvid1title')}</Card.Title>
                        <Card.Text>
                        {translate('advvid1des')}
                        </Card.Text>
                        </Card.Body>
                        <div className="text-center">
                        <iframe width="780" height="439" src="https://www.youtube.com/embed/jmvMHpM6rw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>{translate('advvid2title')}</Card.Title>
                        <Card.Text>
                        {translate('advvid2des')}
                        </Card.Text>
                        </Card.Body>
                        <div className="text-center">
                        <iframe width="780" height="439" src="https://www.youtube.com/embed/WYeppLXm4bA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>{translate('advvid3title')} </Card.Title>
                        <Card.Text>
                        {translate('advvid3des')}
                        </Card.Text>
                        </Card.Body>
                        <div className="text-center">
                        <iframe width="780" height="439" src="https://www.youtube.com/embed/UssXqzq6Js8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>{translate('advarticledes')}</Card.Title>
                            <Linkify componentDecorator={componentDecorator}>
                            {translate('advarticle1')}: https://www.active.com/tennis/articles/6-tips-for-advanced-tennis?page=1 <br/>
                            {translate('advarticle2')}: https://tennisracket.me/consistency-tips-for-advanced-players/ <br/>
                            {translate('advarticle3')}: https://www.thetennistribe.com/best-tennis-racquet-advanced-players/
                            </Linkify>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{translate('lastupdate')} July 14 2020</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    )
}
