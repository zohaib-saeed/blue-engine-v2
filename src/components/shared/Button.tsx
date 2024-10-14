import React from "react";
import {
  Button as MantineBtn,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";
import { cn } from "../../utils";

interface ButtonProps extends MantineButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: any;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, onClick, type = "button", ...props }, ref) => (
    <MantineBtn
      onClick={onClick}
      type={type}
      ref={ref}
      size="md"
      {...props}
      className={cn("", className)}
    >
      {children}
    </MantineBtn>
  ),
);

Button.displayName = "Button";

export default Button;
