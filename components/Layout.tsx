import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div>{children}</div>
      {/* <Footer /> */}
    </>
  );
}
