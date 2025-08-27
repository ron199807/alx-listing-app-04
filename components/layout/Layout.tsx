import { Header } from "./Header";
import { Footer } from "./Footer";
import { LayoutProps } from "@/interfaces"

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;