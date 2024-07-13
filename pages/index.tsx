// import Link from "next/link";
import { useRouter } from "next/router";

import { ButtonsContainer, HomePageContainer } from "../styles/homepage.styles";

// import routes from "../lib/routes";

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
        {/* <Link href={routes.location("iwaya")}>
          <button>Iwaya</button>
        </Link>
        <Link href={routes.location("bariga")}>
          <button>Bariga</button>
        </Link> */}
        <button onClick={() => handleLocationSelect("iwaya")}>Iwaya</button>
        <button onClick={() => handleLocationSelect("bariga")}>Bariga</button>
      </ButtonsContainer>
    </HomePageContainer>
  );
};

export default Homepage;
