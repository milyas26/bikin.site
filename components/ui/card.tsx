import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-sm border border-border bg-card text-card-foreground ${className}`}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col space-y-1 p-4 ${className}`}
        {...props}
      />
    );
  }
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={`font-display text-base font-semibold leading-snug tracking-tight ${className}`}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`text-sm text-muted-foreground leading-relaxed ${className}`}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={`p-0 ${className}`} {...props} />
    );
  }
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex items-center gap-2 border-t border-border p-4 ${className}`}
        {...props}
      />
    );
  }
);
CardFooter.displayName = "CardFooter";
