import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-background max-w-sm text-foreground flex flex-col gap-2 rounded-xl border border-muted/20 shadow-sm overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

type CardImageProps = React.ComponentProps<typeof Image>;

const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full aspect-video border-b-2 border-muted/20",
          className
        )}
      >
        <Image className={cn("object-cover")} fill {...props} />
      </div>
    );
  }
);
CardImage.displayName = "CardImage";

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full p-4 flex flex-col gap-4", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "font-semibold text-foreground font-headline text-3xl",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("font-body text-muted/60 text-xl", className)}
      {...props}
    />
  );
}

function CardLink({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link className={cn("text-primary text-xl", className)} {...props} />
  );
}

export { Card, CardImage, CardContent, CardTitle, CardDescription, CardLink };
