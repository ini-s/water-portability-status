import Link from "next/link";

import { ButtonsContainer, HomePageContainer } from "../styles/homepage.styles";

import routes from "../lib/routes";

const Homepage = () => {
  return (
    <HomePageContainer>
      <h1>water probability status</h1>
      <h2>select location</h2>

      <ButtonsContainer>
        <Link href={routes.location("iwaya")}>
          <button>Iwaya</button>
        </Link>
        <Link href={routes.location("bariga")}>
          <button>Bariga</button>
        </Link>
      </ButtonsContainer>
      
    </HomePageContainer>
  );
};

export default Homepage;
