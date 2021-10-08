// general imports
import React from 'react';

// global components import
import BarraNav from '../../../components/global/BarraNav';
import PromoCarousel from '../../../components/global/PromoCarousel';
import BookNowButton from '../../../components/global/BookNowButton';


class Membership1 extends React.Component {
    
    
    render(){
        return(

 

                <div className='position-fixed fixed-top'>
                    <BarraNav/>
                    <PromoCarousel/>
                    <h1 className='text-center m-5'>Book us now</h1>
                    <BookNowButton/>
                    

                </div>

 

        );
}};


export default Membership1;