import React from "react";
import {Row, Col, Container} from 'react-bootstrap'
import profLogo from '../assets/pro_pic_avatar.jpg'
import './styles/employee-styles.css'
import Card from 'react-bootstrap/Card';



const EmployeeDetails = (props) =>{



    return(
    <Container 
        className="employee-container"
        fluid>

    <Row className="parent-container-row" >

        <Col 
            className="sidebar-column" 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3}>

            <Row className="text-center sidebar-maincontent-row">
                <Container className="text-center overflow-hidden pro-pic">

                    <img 
                        src={profLogo}
                        alt="profile"
                        style={{
                            maxWidth:'100%'
                        }}
                        className="img-fluid"
                        />
                </Container>
                <Container className="text-center main-profile-info">
                        <h2 >{props.details.legal_first_name +" "+ props.details.legal_last_name}</h2><br/>
                        <h4>{props.details.email}</h4>
                </Container>
                
            </Row>
        </Col>
        <Col className="px-sm-2 px-md-4 pt-3 main-content-profile-col">
            <Row>
                <Card style={{ width: '30rem', backgroundColor:'#ffffff' }}>
                    <Card.Body style={{width:'30rem'}}>
                        <Card.Title className="pt-4" style={{fontSize:'2rem'}}>EMPLOYEE INFO</Card.Title>
                        <Card.Text className="pt-5">
                        <h6>First Name(legal)</h6><p style={{color:'grey'}}>{props.details.legal_first_name}</p><br/>
                        <h6>Last Name(legal)</h6><p style={{color:'grey'}}>{props.details.legal_last_name}</p><br/>
                        <h6>First Name(prefered)</h6><p style={{color:'grey'}}>{props.details.pref_first_name}</p><br/>
                        <h6>Last Name(prefered)</h6><p style={{color:'grey'}}>{props.details.pref_last_name}</p><br/>
                        <h6>NIC</h6><p style={{color:'grey'}}>{props.details.NIC}</p><br/>
                        <h6>Age</h6><p style={{color:'grey'}}>{props.details.age}</p><br/>
                        <h6>Gender</h6><p style={{color:'grey'}}>{props.details.gender}</p><br/>
                        <h6>Marital Status</h6><p style={{color:'grey'}}>{props.details.marital_status}</p><br/>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Col>
                    <Card style={{ width: '30rem' , backgroundColor:'#ffffff' }}>
                        <Card.Body style={{width:'30rem'}}>
                            <Card.Title className="pt-4" style={{fontSize:'2rem'}}>CONTACT INFO</Card.Title>
                            <Card.Text className="pt-5">
                            <h6>Email</h6><p style={{color:'grey'}}>{props.details.email}</p><br/>
                            <h6>Address</h6><p style={{color:'grey'}}>{props.details.address}</p><br/>
                            <h6>Phone Number</h6><p style={{color:'grey'}}>{props.details.phone}</p><br/>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card className="mt-2" style={{ width: '30rem' , backgroundColor:'#ffffff' }}>
                        <Card.Body style={{width:'30rem'}}>
                            <Card.Title className="pt-4" style={{fontSize:'2rem'}}>NATIONALITY</Card.Title>
                            <Card.Text className="pt-5">
                            <h6>Coubtry of Birth</h6><p style={{color:'grey'}}>{props.details.country_of_birth}</p><br/>
                            <h6>Nationality</h6><p style={{color:'grey'}}>{props.details.nationality}</p><br/>
                            <h6>Ethnicity</h6><p style={{color:'grey'}}>{props.details.ethnicity}</p><br/>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                
                </Col>
            </Row>
        </Col>
    </Row>
    </Container>  
    )
}




export default EmployeeDetails;