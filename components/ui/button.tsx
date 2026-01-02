import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer touch-manipulation select-none",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 focus-visible:ring-slate-900 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 dark:active:bg-slate-50 dark:focus-visible:ring-slate-100",
        primary:
          "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:active:bg-indigo-700",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 dark:active:bg-slate-600",
        outline:
          "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100 focus-visible:ring-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-slate-600 dark:active:bg-slate-600",
        ghost:
          "text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200 focus-visible:ring-slate-400 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:active:bg-slate-700",
        link: "text-indigo-600 underline-offset-4 hover:underline focus-visible:ring-indigo-600 dark:text-indigo-400",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-600 dark:bg-red-700 dark:hover:bg-red-800 dark:active:bg-red-900",
      },
      size: {
        // Minimum 44px height for mobile touch targets
        default: "h-11 px-4 py-2 sm:h-10",
        sm: "h-10 rounded-md px-3 text-xs sm:h-9",
        lg: "h-12 rounded-lg px-8 text-base sm:h-11",
        xl: "h-14 rounded-xl px-10 text-base sm:h-12",
        icon: "h-11 w-11 sm:h-10 sm:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
