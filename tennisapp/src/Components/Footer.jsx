import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import translate from "../i18n/translate";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-3">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {translate('footer')}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;