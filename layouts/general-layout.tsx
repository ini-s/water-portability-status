import { FC, ReactNode } from "react";
import Head from "next/head";

interface IGeneralLayoutProps {
  children: ReactNode;
  removeNav?: boolean;
  pageTitle: string;
}

const GeneralLayout: FC<IGeneralLayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{`Water Probability Status | ${pageTitle}`}</title>
        <link
          rel="shortcut icon"
          href="/gate-academy.png"
          type="image/x-icon"
        />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default GeneralLayout;
