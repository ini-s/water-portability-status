import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { HeaderWrapper, Logo } from "../../styles/header.styles";

import ExportData from "../export-data/export-data";

// import { categoriesData } from "../../data/categories";

import { getLocationFromQuery } from "../../server-store/queries/queries";

interface IHeaderProps {
  exportData?: boolean;
  removeBtn?: boolean;
}

const Header = ({ exportData, removeBtn }: IHeaderProps) => {
  const router = useRouter();
  const { query } = router;

  const queryLocation = getLocationFromQuery(query.location);

  const showDataVisualization = () => {
    router.push({
      pathname: router.pathname,
      query: { ...query, dataVisualization: true },
    });
  };

  const goToNotifications = () => {
    router.push({
      pathname: "notifications",
      query: { ...query, location: queryLocation },
    });
  };

  return (
    <HeaderWrapper>
      {/* <Logo>
        <Image src="" alt="logo" fill sizes="100%" />
      </Logo> */}
      <ul>
        <li></li>
        <li>Home</li>
        <li>
          <button onClick={goToNotifications}>Notifications</button>
        </li>
        {!removeBtn && (
          <li>
            {!exportData ? (
              <button onClick={showDataVisualization}>
                Data Visualization
              </button>
            ) : (
              <ExportData
                // data={categoriesData}
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
