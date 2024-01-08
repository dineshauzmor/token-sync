import { clsx } from "clsx";
import { forwardRef } from "react";
import PropTypes from "prop-types";

import classes from "./Button.module.css";

const Button = forwardRef(
  (
    { children, type = "button", className, as: Component = "button", ...rest },
    ref
  ) => (
    <Component
      {...rest}
      ref={ref}
      type={type}
      className={clsx(classes.button, className)}
    >
      {children}
    </Component>
  )
);

export default Button;

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.boolean,
  iconPlacement: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  as: PropTypes.string,
};

Button.defaultProps = {
  color: "first",
  variant: "primary",
  size: "medium",
  fullWidth: false,
  iconPlacement: "left",
  type: "button",
  className: "",
  as: "button",
};
