import Link from "next/link";

import { ButtonsContainer, HomePageContainer, Button } from "../styles/homepage.styles";

import routes from "../lib/routes";

const Homepage = () => {
  return (
    <HomePageContainer>
      <h1>water potability status</h1>
      <h2>select location</h2>

      <ButtonsContainer>
        <Link href={routes.location("iwaya")}>
          <Button> Iwaya </Button>
        </Link>
        <Link href={routes.location("bariga")}>
          <Button>Bariga</Button>
        </Link>
      </ButtonsContainer>
    </HomePageContainer>
  );
};

export default Homepage;
