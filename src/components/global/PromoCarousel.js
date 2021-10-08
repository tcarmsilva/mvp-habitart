import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
// import banner1 from 'https://selina-res.cloudinary.com/image/upload/if_iw_gt_2560,c_scale,w_2560/ar_3:2,c_crop/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/2CidKRb6ESBYPBFoVJWIKH/83f1ee7a13c641ddf7dc890ee5e46ee8/MAIN_HERO__1_.jpg';
// import banner2 from 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/58/22/5822402_v1.jpeg';
// import banner3 from 'https://selina-res.cloudinary.com/image/upload/if_iw_gt_2560,c_scale,w_2560/ar_3:2,c_crop/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/2CidKRb6ESBYPBFoVJWIKH/83f1ee7a13c641ddf7dc890ee5e46ee8/MAIN_HERO__1_.jpg';
// ou coloca em src abaixo o nome banner e bota aqui o caminho da pasta com a imagem, ou bota a url da imagem direto no src

const items = [
    {
      src: 'https://selina-res.cloudinary.com/image/upload/if_iw_gt_2560,c_scale,w_2560/ar_3:2,c_crop/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/2CidKRb6ESBYPBFoVJWIKH/83f1ee7a13c641ddf7dc890ee5e46ee8/MAIN_HERO__1_.jpg',
      altText: 'BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats',
      caption: 'BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats'
    },
    {
      src: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/58/22/5822402_v1.jpeg',
      altText: 'Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket',
      caption: 'Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket'
    },
    {
      src: 'https://catracalivre.com.br/wp-content/uploads/2019/09/selina-vila-madalena-hotel.jpg',
      altText: 'Opna Womens Short Sleeve Moisture',
      caption: 'Opna Womens Short Sleeve Moisture'
    }
  ];

const PromoCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem 
          className='bg-secondary'
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className='h-65 w-100 p-3 mx-auto d-block bg-secondary'/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }

export default PromoCarousel;