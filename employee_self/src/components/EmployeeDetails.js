import React from "react";
import {Row, Col, Container} from 'react-bootstrap'



function EmployeeDetails(){



    return(
    <Container fluid style={{padding:0, overflow:'hidden'}}>  
    <Row style={{backgroundColor:'red'}}>
        <Col style={{height:"100vh", backgroundColor:'white'}} xl={2}>
            <Row>
                <Container>profile picture</Container>
            </Row>
        </Col>
        <Col>
        
        
        </Col>
    </Row>
    </Container>  
    )
}




export default EmployeeDetails;