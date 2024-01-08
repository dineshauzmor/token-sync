import { clsx } from "clsx";
import { forwardRef } from "react";
import PropTypes from "prop-types";

import classes from "./Input.module.css";

const Input = forwardRef(
  (
    { type = "text", className, as: Component = "input", ...rest },
    ref
  ) => (
    <Component
      {...rest}
      ref={ref}
      type={type}
      className={clsx(classes.input, className)}
     />
  )
);


export default Input
Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  as: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  className: "",
  as: "input",
};
