import Sidebar from "components/ui/Sidebar";
import { ReactNode } from "react";

const title = "Modern UI Components | Covo Components";

export const metadata = {
  metadataBase: new URL("https://www.covo-components.co.uk"),
  title,
  openGraph: {
    title,
    url: "https://www.covo-components.co.uk",
  },
  twitter: {
    title,
  },
};
//
type Props = {
  children: ReactNode;
};

export default (props: Props) => {
  const { children } = props;
  return (
    <main className="relative custom-screen-lg">
      <div className="lg:flex">
        <Sidebar />
        <div className="flex-1 overflow-hidden mt-20 mb-12 xl:px-8 xl:mt-10">
          {children}
        </div>
      </div>
    </main>
  );
};
