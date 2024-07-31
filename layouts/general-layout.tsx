import { FC, ReactNode } from "react";
import Head from "next/head";

import Header from "../components/header/Header";

interface IGeneralLayoutProps {
  children: ReactNode;
  exportData?: boolean;
  removeBtn?: boolean;
  pageTitle: string;
}

const GeneralLayout: FC<IGeneralLayoutProps> = ({
  children,
  removeBtn,
  pageTitle,
}) => {
  return (
    <>
      <Head>
        <title>{`Water Probability Status | ${pageTitle}`}</title>
        {/* <link
          rel="shortcut icon"
          href=""
          type=""
        /> */}
      </Head>

      <Header removeBtn={removeBtn} />

      <main>{children}</main>
    </>
  );
};

export default GeneralLayout;
