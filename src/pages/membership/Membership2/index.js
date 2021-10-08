// general imports
import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

// global components import
import BarraNav from '../../../components/global/BarraNav'



class Membership2 extends React.Component {
    
    
    render(){
        return(

 

            <div className='position-fixed fixed-top'>
                <BarraNav/>
                <h1 className='text-center mt-5'>CoLive | CoFlex</h1>
                <p className='text-center mt-3'>Choose the package that best suits your needs:</p>
                <CardGroup className='mt-5'>
                    <Card className='mx-3'>
                        <CardImg top width="100%" src="https://media-cdn.tripadvisor.com/media/photo-s/1a/ad/49/bb/selina-aurora-sao-paulo.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle tag="h2" className="mb-4">CoLive</CardTitle>
                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                        <CardText>Continuous accomodation for 30 days.</CardText>
                        <CardText>Live in up to 3 different Habitart destinations per month</CardText>
                        <h6 className='text-center'>Starting from</h6>
                        <h4 className='text-center'>$400</h4>
                        <h6 className='text-center'>/ Per Month</h6>
                        <div className='text-center mt-3'>
                            <Button color="primary" size="lg">Book CoLive</Button>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className='mx-3'>
                        <CardImg top width="100%" src="https://selina-res.cloudinary.com/image/upload/if_iw_gt_1584,c_scale,w_1584/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/1CEgJmJb39MZ0a39wEiu19/b6ed0face58cbfe7d97b54b493c16aeb/Web_Banner-Selina_Cancun_Hotel_Zone_05-2019_10_Bed_Community_Room_Meero__1.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle tag="h2" className="mb-4">CoFlex</CardTitle>
                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                        <CardText>30 nights at Habitart - redeemable on your terms</CardText>
                        <CardText className='mb-5'>Stay a minimum of 3 nights at each destination</CardText>
                        <h6 className='text-center'>Starting from</h6>
                        <h4 className='text-center'>$500</h4>
                        <h6 className='text-center'>/ 30 Nights</h6>
                        <div className='text-center mt-3'>
                            <Button color="primary" size="lg">Book CoFlex</Button>
                        </div>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>

 

        );
}};


export default Membership2;

