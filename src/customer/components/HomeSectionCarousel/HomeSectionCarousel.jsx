import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5.5 },
};

function HomeSectionCarousel() {
  const items = [1, 1, 1, 1, 1].map((item, i) => <HomeSectionCard key={i} />);

  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          disableButtonsControls
          items={items}
          responsive={responsive}
          infinite
          disableDotsControls
        />

        <Button
          className="z-50 "
          variant="contained"
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

        <Button
          className="z-50"
          variant="contained"
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
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
