import { clsx } from "clsx";
import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import classes from "./Button.module.css";

export const Button = forwardRef(
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

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.boolean,
  iconPlacement: PropTypes.string,
  icon: React.ReactNode,
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
