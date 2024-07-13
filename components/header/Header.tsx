import Image from "next/image";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { useRouter } from "next/router";

import {
  HeaderWrapper,
  Logo,
  Button,
  Navbar,
} from "../../styles/header.styles";

import routes from "../../lib/routes";

import ExportData from "../export-data/export-data";

import { categoriesData } from "../../data/categories";

import { getLocationFromQuery } from "../../server-store/queries/queries";

interface IHeaderProps {
  exportData?: boolean;
  removeBtn?: boolean;
}

const Header = ({ exportData, removeBtn }: IHeaderProps) => {
  const router = useRouter();
  const { query } = router;
  const { asPath } = router;
  const queryLocation = getLocationFromQuery(query.location);

  const goToNotifications = () => {
    router.push({
      pathname: "notifications",
      query: { ...query, location: queryLocation },
    });
  };
  return (
    <HeaderWrapper>
      <Navbar>
        <div>
          <h3>{asPath === "/iwaya" && "iwaya"}</h3>
          <h3>{asPath === "/bariga" && "bariga"}</h3>
          <h3>
            {asPath === "/iwaya" ||
              (asPath === "/iwaya/data-visualization" && "Iwaya")}
          </h3>

          <h3>
            {asPath === "/bariga" ||
              (asPath === "/bariga/data-visualization" && "Bariga")}
          </h3>
          <h5>water status</h5>
        </div>
        {
          <Logo>
            <Image src="/locationpin.png" alt="logo" fill sizes="100%" />
          </Logo>
        }
      </Navbar>
      <ul>
        <Link href="/" passHref>
          <li>
            <FaBell />
          </li>
        </Link>
        <Link href="/" passHref>
          <li>Home</li>
        </Link>
        <li>
          <button onClick={goToNotifications}>Notifications</button>
        </li>
        {!removeBtn && (
          <li>
            {!exportData ? (
              <Link href={routes.dataVisualization("iwaya")} passHref>
                <button>Data Visualization</button>
              </Link>
            ) : (
              <ExportData
                data={categoriesData}
                fileName="water-probability-status"
              />
            )}
          </li>
        )}
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
