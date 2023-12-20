import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
// import 'tw-elements-react/dist/css/tw-elements-react.min.css';

const font = Montserrat({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Stimulsport Hotel',
  description: 'Sport events and yoga camps.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="page-wrapper l-0 t-0 r-auto b-auto block">
          {children}
        </div>
      </body>
    </html>
  );
};