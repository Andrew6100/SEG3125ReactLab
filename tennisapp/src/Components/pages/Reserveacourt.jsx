import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import barrhavenCourt from './images/barrhavenCourt.jpg';
import kanataCourt from './images/kanataCourt.jpg';
import orleansCourt from './images/orleansCourt.jpg';
import downtownCourt from './images/downtownCourt.jpg';
import { FaMapMarkerAlt} from 'react-icons/fa';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Fragment, useState, useEffect } from 'react';
import '../reservecourt.css';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import translate from "../../i18n/translate";

export default function Reserveacourt() {
    
    const notify = () => toast("Success!");

    const [startDate, setStartDate] = useState(new Date());

    let handleColor = time => {
    return time.getHours() > 12 ? "text-success" : "text-error";
    };

    return (
        <div>
            <ToastContainer timeOut="5000"/>
            <Container>
                <h1 className="text-success text-decoration-none display-4 text-center my-4"><strong>{translate('reserveacourt')}</strong><hr/></h1>
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
            </Container>

            <Container>
                <h1 className="text-success text-decoration-none display-4 text-center my-4">{translate('reservenow')}</h1>    

                <Form onSubmit={notify}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="FullName">
                        <Form.Label><strong>{translate('fullname')}</strong></Form.Label>
                        <Form.Control type="text" placeholder="John Doe" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label><strong>{translate('email')}</strong></Form.Label>
                        <Form.Control type="email" placeholder="johndoe@gmail.com" required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="Comments">
                        <Form.Label><strong>{translate('comment')}</strong></Form.Label>
                        <Form.Control type="text" placeholder="..."/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="Location">
                            <Form.Label><strong>{translate('selectlocation')}</strong></Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Barrhaven (123 Barhaven Drive)</option>
                                <option>Kanata (456 Kanata Street)</option>
                                <option>Orleans (789 Orleans Street)</option>
                                <option>Downtown (1738 Downtown Drive)</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="Location">
                            <Form.Label><strong>{translate('selectdatetime')}</strong></Form.Label><br/>
                            <DatePicker className="datepicker"
                                showTimeSelect
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                timeClassName={handleColor}
                            required
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="CreditCard">
                        <Form.Label><strong>{translate('creditcard')}</strong></Form.Label>
                        {['top'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${placement}`}>
                                {translate('pleasenotepayment')}
                                </Tooltip>
                            }
                            >
                            <Form.Control type="text" placeholder="XXXX XXXX XXXX XXXX" maxLength="19" required/>
                            </OverlayTrigger>
                        ))}
                        </Form.Group>

                        <Form.Group as={Col} controlId="ExpirationDate">
                        <Form.Label><strong>{translate('expirationdate')}</strong></Form.Label>
                        <Form.Control type="text" placeholder="XX/XX" maxLength="5" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="CCV">
                        <Form.Label><strong>CCV*</strong></Form.Label>
                        <Form.Control type="text" placeholder="XXX" maxLength="3" required/>

                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label={translate('iconsent')} required/>
                        </Form.Group>
                    </Form.Row>

                    <Button className="btn btn-lg btn-success w-100 py-1 my-1" type="submit">
                        {translate('submit')}
                    </Button>
                    
                </Form>


            </Container>
        </div>
    )
}

