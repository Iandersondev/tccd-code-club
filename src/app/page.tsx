import PageHome from './components/PageHome';
import HomePageCardQuotes from './components/HomePageQuotes';
import { CardData } from './components/CardData';
import backgroundImage from './media/outer-space1.png';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <PageHome />
      <HomePageCardQuotes cards={CardData} />
    </div>
  );
}
