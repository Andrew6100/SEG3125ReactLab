// import React from 'react'
import FullButton from '../FullButton';
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import oneonone from './images/oneonone.jpg';
import doubleslesson from './images/doubleslesson.jpg';
import grouplessson from './images/grouplessson.jpg';
import { FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelopeSquare } from 'react-icons/fa';
import StepWizard from 'react-step-wizard';
import Form from 'react-bootstrap/Form'
import React, { Fragment, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
// import StepWizard from '../../dist/react-step-wizard.min';

import Nav from '../nav';
import Plugs from '../Plugs';

import styles from '../wizard.less';
import transitions from '../transitions.less';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import translate from "../../i18n/translate";

export default function Bookalesson() {
    const [state, updateState] = useState({
        form: {},
        transitions: {
            enterRight: `${transitions.animated} ${transitions.enterRight}`,
            enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
            exitRight: `${transitions.animated} ${transitions.exitRight}`,
            exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
            intro: `${transitions.animated} ${transitions.intro}`,
        },
        // demo: true, // uncomment to see more
    });

    const updateForm = (key, value) => {
        const { form } = state;

        form[key] = value;
        updateState({
            ...state,
            form,
        });
    };

    // Do something on step change
    const onStepChange = (stats) => {
        // console.log(stats);
    };

    const setInstance = SW => updateState({
        ...state,
        SW,
    });

    const { SW, demo } = state;

    return (
        <div>
            <Container>
                <h1 className="text-success text-decoration-none display-4 text-center my-4"><strong>{translate('bookalesson')}</strong><hr/></h1>
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
            </Container>
            <br/>

            <Container>
            <h1 className="text-success text-decoration-none display-4 text-center">{translate('booknow')}</h1> 
            <div className={'jumbotron'}>
                <div className='row'>
                    <div className={`col-12 col-sm-6 offset-sm-3 ${styles['rsw-wrapper']}`}>
                        <StepWizard
                            onStepChange={onStepChange}
                            isHashEnabled
                            transitions={state.transitions} // comment out for default transitions
                            nav={<Nav />}
                            instance={setInstance}
                        >
                            <First hashKey={'FirstStep'} update={updateForm} />
                            <Second form={state.form} />
                            <Third form={state.form} />
                            <Last hashKey={'TheEnd!'} />
                        </StepWizard>
                    </div>
                </div>
            </div>
            { (demo && SW) && <InstanceDemo SW={SW} /> }
            </Container>
        </div>
    )
}




/** Demo of using instance */
const InstanceDemo = ({ SW }) => (
<Fragment>
    <h4>Control from outside component</h4>
    <button className={'btn btn-secondary'} onClick={SW.previousStep}>Previous Step</button>
    &nbsp;
    <button className={'btn btn-secondary'} onClick={SW.nextStep}>Next Step</button>
</Fragment>
);

/**
* Stats Component - to illustrate the possible functions
* Could be used for nav buttons or overview
*/
const Stats = ({
currentStep,
firstStep,
goToStep,
lastStep,
nextStep,
previousStep,
totalSteps,
step,
}) => (
<div>
    <hr />
    { step > 1 && step < 4 &&
        <button className='btn btn-default btn-block' onClick={previousStep}>{translate('goback')}</button>
    }
    { step == 3 &&
        <button className='btn btn-primary btn-block btn-success' onClick={nextStep}>{translate('paynow')}</button>
    }
    { step < 3 &&
        <button className='btn btn-primary btn-block btn-success' onClick={nextStep}>{translate('continue')}</button>
    }
    { step == totalSteps &&
        <FullButton buttonText={translate('finish')} link="/"/> 
    }
    <hr />
    <div className="text-center" style={{ fontSize: '21px', fontWeight: '200' }}>
        <h4>{translate('step')} {currentStep} {translate('of')} {totalSteps}</h4>
    </div>
</div>
);

/** Steps */

const First = props => {
const update = (e) => {
    props.update(e.target.name, e.target.value);
};

const [startDate, setStartDate] = useState(new Date());

let handleColor = time => {
return time.getHours() > 12 ? "text-success" : "text-error";
};

return (
    <div>
        <h3 className='text-center'>{translate('typeoflesson')}</h3>
        <select className='form-control' name='lessonType' defaultValue="One-on-one Lesson" onChange={update} >
            <option>One-on-one Lesson</option>
            <option>Doubles Lesson</option>
            <option>Group Lesson</option>
        </select>
        <br/>
        <h3 className='text-center'>{translate('selectdatetime')}</h3>
        <div className="text-center">
            <DatePicker
                showTimeSelect
                selected={startDate}
                onChange={date => setStartDate(date)}
                timeClassName={handleColor}
            />
        </div>
        <Stats step={1} {...props} />
    </div>
);
};

const Second = props => {
const validate = () => {
    if (confirm('Are you sure you want to go back?')) { // eslint-disable-line
        props.previousStep();
    }
};

return (
    <div>
        <h3 className='text-center'>{translate('yourinfo')}</h3>
        <Form >
            <Form.Group as={Row} controlId="Full Name">
                <Form.Label column sm={2}>
                {translate('fullname')}*
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="John Doe" required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                {translate('email')}*
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="johndoe@gmail.com" required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                {translate('comment')}
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="..."/>
                </Col>
            </Form.Group>
        </Form>


        <Stats step={2} {...props} previousStep={validate} />

    </div>
);
};

const Third = props => {
    const validate = () => {
        if (confirm('Are you sure you want to go back?')) { // eslint-disable-line
            props.previousStep();
        }
    };
    return(
        <div>
            <h3 className='text-center'>{translate('payment')}</h3>

            <Form >
            <Form.Group as={Row} controlId="CreditCard">
                <Form.Label column sm={2}>
                {translate('creditcard')}
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="XXXX XXXX XXXX XXXX" maxLength="19" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="ExpirationDate">
                <Form.Label column sm={2}>
                {translate('expirationdate')}
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="XX/XX" maxLength="5"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="CCV">
                <Form.Label column sm={2}>
                CCV*
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="XXX" maxLength="3"/>
                </Col>
            </Form.Group>

        </Form>

            <Stats step={3} {...props} previousStep={validate} />
        </div>
    );
};

const Last = (props) => {
const submit = () => {
    alert('You did it! Yay!') // eslint-disable-line
};

return (
    <div>
        <div className={'text-center'}>
            <h3 className='text-center'>{translate('payment')}</h3>
            <hr />
            <p>{translate('thankyoubook')}</p>
        </div>
        <Stats step={4} {...props} nextStep={submit} />
    </div>
);
};