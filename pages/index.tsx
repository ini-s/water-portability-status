import { useRouter } from "next/router";

import {
  Button,
  ButtonsContainer,
  HomePageContainer,
} from "../styles/homepage.styles";

const Homepage = () => {
  const router = useRouter();

  const handleLocationSelect = (location: string) => {
    router.push({
      pathname: `water-quality-data`,
      query: { location: location },
    });
  };

  return (
    <HomePageContainer>
      <h1>water potability status</h1>
      <h2>select location</h2>

      <ButtonsContainer>
        <Button onClick={() => handleLocationSelect("iwaya")}>Iwaya</Button>
        <Button onClick={() => handleLocationSelect("bariga")}>Bariga</Button>
      </ButtonsContainer>
      
    </HomePageContainer>
  );
};

export default Homepage;
