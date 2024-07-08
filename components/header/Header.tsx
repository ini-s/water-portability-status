import Image from "next/image";
import Link from "next/link";
import { FaBell } from 'react-icons/fa';

import { HeaderWrapper, Logo, Button } from "../../styles/header.styles";

import routes from "../../lib/routes";
interface IHeaderProps {
  exportData?: boolean;
}

const Header = ({ exportData }: IHeaderProps) => {
  return (
    <HeaderWrapper>
      {<Logo>
        <div>
          <Image 
            src="/locationpin.png" 
            alt="logo" 
            fill sizes="100%" 
          />
        </div>
      </Logo>}
      <ul>
        <li><FaBell/></li>
        <Link href="/" passHref>
          <li>Home</li>
        </Link>
        <li>
          {!exportData ? (
            <Link href={routes.dataVisualization("bariga")} passHref>
              <Button>Data Visualization</Button>
            </Link>
          ) : (
            <Button> export data</Button>
          )}
        </li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
