import { HomeContainer, HomeTitle, HomeLogo } from './Home.styled';
import mainLogo from '../../img/logo.jpg';

export const Home = () => {
  return (
    <HomeContainer>
      <div>
        <HomeTitle>CAR RENT</HomeTitle>
        <p>Rent your car as easily as we change words :)</p>
        <HomeLogo src={mainLogo} alt="mainLogo" />
      </div>
    </HomeContainer>
  );
};
