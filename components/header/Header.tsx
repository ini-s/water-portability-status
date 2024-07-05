import Image from "next/image";
import Link from "next/link";

import { HeaderWrapper, Logo } from "../../styles/header.styles";

import routes from "../../lib/routes";

interface IHeaderProps {
  exportData?: boolean;
}

const Header = ({ exportData }: IHeaderProps) => {
  return (
    <HeaderWrapper>
      {/* <Logo>
        <Image src="" alt="logo" fill sizes="100%" />
      </Logo> */}
      <ul>
        <li></li>
        <li>Home</li>
        <li>
          {!exportData ? (
            <Link href={routes.dataVisualization("bariga")} passHref>
              <button>Data Visualization</button>
            </Link>
          ) : (
            <button> export data</button>
          )}
        </li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
