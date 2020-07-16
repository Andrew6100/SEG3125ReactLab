import React from 'react'
import { Container } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelopeSquare } from 'react-icons/fa';
import translate from "../../i18n/translate";

export default function ContactUs() {
    const notify = () => toast("Success!");

    return (
        <div>
        <ToastContainer timeOut="5000"/>
        <Container className="w-75">
            <h1 className="text-success text-decoration-none display-4 text-center my-4"><strong>{translate('contactus')}</strong><hr/></h1>
            <form id="contact-form" onSubmit={notify}>
                <div className="form-groupS">
                    <label htmlFor="name"><strong>{translate('fullname')}</strong></label>
                    <input type="text" className="form-control" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><strong>{translate('email')}</strong></label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message"><strong>{translate('message')}</strong></label>
                    <textarea className="form-control" rows="5" required></textarea>
                </div>
                <div style={{ display: "flex" }}>
                    <button style={{ marginLeft: "auto", marginRight: "auto" }} type="submit" className="btn btn-primary btn-success w-100 py-3"><strong>Submit</strong></button>
                </div>
            </form>
        </Container>
        <Container>
                <p className="lead my-4 text-center"> 
                <strong>
                {translate('wecanreach')} <br/>
                </strong>
                    <FaEnvelopeSquare /> Lestennis@academy.com <br/>
                    <FaPhone /> (613)804-1738 <br/>
                    <FaInstagram /> Lestennisacademy <br/>
                    <FaFacebook /> Lestennisacademy <br/>
                    <FaTwitter /> Lestennisacademy <br/>
                    <FaLinkedin /> Lestennisacademy <br/>
                </p>
        </Container>
        </div>
    )
}
