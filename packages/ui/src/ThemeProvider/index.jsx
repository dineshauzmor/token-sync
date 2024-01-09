import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function ThemeProvider({ children, primaryColor }) {
  const node = useRef();

  useEffect(() => {
    if (primaryColor) {
      node.current.style.setProperty("--colorsPrimary950", primaryColor);
    }
  }, [primaryColor]);
  return <div ref={node}>{children}</div>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  primaryColor: PropTypes.string,
};

ThemeProvider.defaultProps = {
  primaryColor: "",
};
