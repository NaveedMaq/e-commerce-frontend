import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import mainCarouselData from './MainCarouselData';

const CAROUSEL_SLIDE_TIME_SECONDS = 1;

function MainCarousel() {
  const items = mainCarouselData.map((item, i) => (
    <img
      className='cursor-pointer'
      key={i}
      src={item.image}
      alt=''
      role='presentation'
    />
  ));

  return (
    <AliceCarousel
      disableButtonsControls
      items={items}
      autoPlay
      autoPlayInterval={CAROUSEL_SLIDE_TIME_SECONDS * 1000}
      infinite
    />
  );
}

export default MainCarousel;
