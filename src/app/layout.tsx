import type { Metadata } from "next";

import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: "Main",
  description: "Social network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Provider store={store}> */}
        {/* </Provider> */}
      </body>
    </html>
  );
}
