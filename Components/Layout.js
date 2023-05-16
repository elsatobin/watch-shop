import Footer from "./Footer";
import Header from "./Header/Header";
import ScrollToTopBtn from "./ScrollToTopBtn";

export default function Layout({ children, toggleDark, settoggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} settoggleDark={settoggleDark} />
      <ScrollToTopBtn />
      {children}
      <Footer />
    </>
  );
}
