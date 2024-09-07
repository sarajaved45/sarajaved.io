import { Header } from "./Header";
import { Footer } from "./Footer";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};
