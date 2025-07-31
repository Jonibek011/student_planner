import { forwardRef, memo } from "react";
import { cn } from "../../lib/Utils";
const DropDown = memo(
  forwardRef(function DropDown({ className, children, ...rest }, ref) {
    return (
      <div ref={ref} className={cn(className)} {...rest}>
        {children || "Dropdown"}
      </div>
    );
  })
);

export default DropDown;
