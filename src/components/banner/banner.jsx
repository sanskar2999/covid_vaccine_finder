import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col,ButtonGroup,UncontrolledDropdown,DropdownItem,DropdownToggle,DropdownMenu } from 'reactstrap';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">Covid Vaccine Slot Finder</h1>
                        {/* <h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4>
                        <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link> */}
                         <ButtonGroup>{' '}
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-secondary" caret>
                                    Search By Pin
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">Search By Pin</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Search By District</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ButtonGroup>  
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
