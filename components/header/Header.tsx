import Image from "next/image";
import Link from "next/link";
import { FaBell } from 'react-icons/fa';
import { useRouter } from 'next/router';


import { HeaderWrapper, Logo, Button, Navbar } from "../../styles/header.styles";

import routes from "../../lib/routes";
interface IHeaderProps {
  exportData?: boolean;
}

const Header = ({ exportData }: IHeaderProps) => {
  const router = useRouter();
  const {asPath} = router;
  return (
    <HeaderWrapper>
       <Navbar>
        <div>
          <h3>{
              asPath === '/iwaya' && ('iwaya')
          }</h3>
          <h3>{
              asPath === '/bariga' && ('bariga')
          }</h3>
            <h5>water status</h5>
        </div>
        {<Logo>
            <Image 
              src="/locationpin.png" 
              alt="logo" 
              fill sizes="100%" 
            />
        </Logo>}
      </Navbar>
      <ul>
        <Link href="/" passHref>
        <li><FaBell/></li>
        </Link>
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
