import { ChakraProvider } from "@chakra-ui/react";
import '@styles/global.scss';
import { AppProps } from "next/app";
import { FunctionComponent, ReactElement } from "react";

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
