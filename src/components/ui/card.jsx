import { forwardRef } from "react";

import { cn } from "../../lib/Utils";

const Card = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl  border-2   ", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex  space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef(
  ({ className = "text-[#09090B]", ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef(({ className = "", ...props }, ref) => (
  <p ref={ref} className={cn("text-sm ", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0 text-[#71717B]", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
