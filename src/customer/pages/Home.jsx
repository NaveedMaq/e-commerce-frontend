import MainCarousel from '../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel';

function Home() {
  return (
    <div>
      <MainCarousel />

      <div className="flex flex-col justify-center space-y-10 px-5 py-20 lg:px-10">
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>
    </div>
  );
}

export default Home;
