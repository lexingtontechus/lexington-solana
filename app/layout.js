import "/styles/index.css";
import "/styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: {
    default: "Lexington Moralis WEB3 Demo",
    template: "%s | Lexington Demo",
  },
  description: "A Lexington Moralis WEB3 Demo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
