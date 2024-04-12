import '@mantine/core/styles.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Main',
  description: 'Social network',
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
        {children}
      </body>
    </html>
  );
}
