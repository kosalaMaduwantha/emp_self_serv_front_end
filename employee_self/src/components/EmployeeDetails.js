import React from "react";
import {Row, Col, Container} from 'react-bootstrap'
import profLogo from '../assets/pro_pic_avatar.jpg'



function EmployeeDetails(){



    return(
    <Container 
        fluid 
        style={{
            padding:0, 
            overflow:'hidden'
            }}>

    <Row 
        style={{
            backgroundColor:'red'
            }}>

        <Col 
            style={{
                height:"100vh", 
                backgroundColor:'white'
                }} 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3}>

            <Row 
            className="text-center"
            style={{
                paddingLeft:'60px',
                paddingRight:'60px',
                paddingTop:'60px'
            }}>
                <Container 
                    className="text-center overflow-hidden"
                    style={{
                        borderStyle:'solid',
                        borderColor:'black',
                        borderWidth:'2px',
                        
                    }}>

                    <img 
                        src={profLogo}
                        alt="profile"
                        style={{
                            maxWidth:'100%'
                        }}
                        className="img-fluid"
                        />

                </Container>
                <h2>Kosala Maduwantha</h2>
            </Row>
        </Col>
        <Col>
        
        
        </Col>
    </Row>
    </Container>  
    )
}




export default EmployeeDetails;