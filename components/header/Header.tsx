import Image from "next/image";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

import {
  HeaderWrapper,
  Logo,
  Button,
  Navbar,
  LogoContainer,
  NavLink,
  NotificationButton,
} from "../../styles/header.styles";

import ExportData from "../export-data/export-data";

import { getLocationFromQuery } from "../../server-store/queries/queries";
import useGetRealTimeData from "../../server-store/queries/useGetRealTimeData";

interface IHeaderProps {
  removeBtn?: boolean;
}

const Header = ({ removeBtn }: IHeaderProps) => {
  const [locationText, setLocationText] = useState("");
  const [exportData, setExportData] = useState(false);

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

  useEffect(() => {
    if (query && queryLocation === "iwaya") {
      setLocationText("iwaya");
    } else {
      setLocationText("bariga");
    }
    if (query.dataVisualization) setExportData(true);
    else {
      setExportData(false);
    }
  }, [query, queryLocation, query.dataVisualization]);

  return (
    <HeaderWrapper>
      <Navbar>
        <LogoContainer>
          <div>
            <h3>{locationText ?? ""}</h3>
            {
              <Logo>
                <Image src="/locationpin.png" alt="logo" fill sizes="100%" />
              </Logo>
            }
          </div>
          <p>water status</p>
        </LogoContainer>

        <NavLink>
          <ul>
            <li>
              <NotificationButton>
                <button onClick={goToNotifications}>
                  <FaBell />
                </button>
              </NotificationButton>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            {!removeBtn && (
              <li>
                {!exportData ? (
                  <Button onClick={showDataVisualization}>
                    Data Visualization
                  </Button>
                ) : (
                  <ExportData
                    fileName="water-probability-status"
                  />
                )}
              </li>
            )}
          </ul>
        </NavLink>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
