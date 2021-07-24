import '@styles/global.scss';
import { AppProps } from "next/app";
import { FunctionComponent, ReactElement } from "react";

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
