import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useState } from 'react';

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5.5 },
};

function HomeSectionCarousel({ data, sectionName }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex((index) => index - 1);
  const slideNext = () => setActiveIndex((index) => index + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item, i) => <HomeSectionCard product={item} key={i} />);

  return (
    <div className="border">
      <h2 className="py-5 text-2xl font-extrabold text-gray-800">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          disableButtonsControls
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex < items.length - 5 && (
          <Button
            className="z-50 "
            variant="contained"
            onClick={slideNext}
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0',
              transform: 'translateX(50%) rotate(90deg)',
              backgroundColor: 'white',
              color: '#000',

              ':hover': {
                backgroundColor: 'white',
                color: '#000',
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            className="z-50"
            variant="contained"
            onClick={slidePrev}
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0',
              transform: 'translateX(-50%) rotate(-90deg)',
              backgroundColor: 'white',
              color: '#000',

              ':hover': {
                backgroundColor: 'white',
                color: '#000',
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
