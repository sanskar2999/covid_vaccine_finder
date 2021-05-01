import React ,{Component}from "react";
import PropTypes from "prop-types";



// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import {  Button, CardTitle, CardText, Row, Col, Container,UncontrolledDropdown, 
    Label,FormGroup,Input,Form,FormText,CardBody,
    DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup} from 'reactstrap';
import{Card,CardContent,MenuItem} from "@material-ui/core";

// sections for this page
import Buttons from "./sections/buttons.jsx";
import Labels from "./sections/labels.jsx";
import PagePagination from "./sections/pagination.jsx";
import Images from "./sections/images.jsx";
import Breadcrumbs from "./sections/breadcrumbs.jsx";
import Cards from "./sections/cards.jsx";
import Dropdowns from "./sections/dropdowns.jsx";
import PageForm from "./sections/form.jsx";
import PageTable from "./sections/table.jsx";
import Notification from "./sections/notification.jsx";
import TooltipPopover from "./sections/tooltip-popover.jsx";
import Typography from "./sections/typography.jsx";
import JsComponents from "./sections/js-components.jsx";
import CallToAction from "../../components/call-to-action/CallToAction"


export default class Components extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pincode:0,
        age:"18+",
        state:"",
        district:"",
        drop:"0",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit= ()=>{

    }
    render(){
        return(
            <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
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
                                            <DropdownMenu value={this.state.drop} onChange={e =>{this.setState({drop: e.target.value})}}>
                                               <div key={"0"}>
                                                            <MenuItem
                                                                label="Select a description"
                                                                value="0"
                                                                primaryText="Search By Pin" />
                                                              </div>
                                                <div key={"1"}>
                                                             <MenuItem
                                                                label="Select a description"
                                                                value="1"
                                                                primaryText="Search By District" />
                                                            </div>            
                                                {/* <DropdownItem value="0">Search By Pin</DropdownItem>
                                                <DropdownItem value="1">Search By District</DropdownItem> */}
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </ButtonGroup>  
                                </Col>
                            </Row>
                        </Container>
               </div>
                    
                <div >
                <Card style={{marginLeft:200+"px",marginRight:200+"px",marginTop:-100+"px"}}>
                <CardBody>
                
                 <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="pin">Pincode</Label>
                    <Input type="number" placeholder="Enter the Pincode"
                     value={this.state.pincode} onChange={e =>{this.setState({pincode: e.target.value})}}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select Age</Label>
                    <Input type="select" name="select" id="exampleSelect"
                    value={this.state.age} onChange={e =>{this.setState({age: e.target.value})}}>
                    <option>18+</option>
                    <option>45+</option>
                    </Input>
                </FormGroup>
                <Button>Submit</Button>
                </Form>
                </CardBody>
                </Card >
                </div>
                    </div>
                    {/* <Buttons />
                    <Labels />
                    <PagePagination />
                    <Images />
                    <Breadcrumbs />
                    <Cards />
                    <Dropdowns />
                    <PageForm />
                    <PageTable />
                    <Notification />
                    <TooltipPopover />
                    <Typography />
                    <JsComponents />
                    <CallToAction /> */}
                </div>
            <Footer />
        </div>
        )
    }
}
Components.propTypes = {
    classes: PropTypes.object
};

// export default Components;
