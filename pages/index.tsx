import { useRouter } from "next/router";

import { ButtonsContainer, HomePageContainer } from "../styles/homepage.styles";

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
      <h1>water probability status</h1>
      <h2>select location</h2>

      <ButtonsContainer>
        <button onClick={() => handleLocationSelect("iwaya")}>Iwaya</button>
        <button onClick={() => handleLocationSelect("bariga")}>Bariga</button>
      </ButtonsContainer>
    </HomePageContainer>
  );
};

export default Homepage;
