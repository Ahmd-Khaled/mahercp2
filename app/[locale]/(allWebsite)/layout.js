import Footer from "@/Components/utils/Footer/Footer";
import Header from "@/Components/utils/Header/Header";
import pick from "lodash/pick";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function RootLayout({ children }) {
  const messages = useMessages();

  return (
    <>
      <NextIntlClientProvider messages={pick(messages, "HomePage")}>
        <Header />
      </NextIntlClientProvider>
      {children}
      <NextIntlClientProvider messages={pick(messages, "HomePage")}>
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}
