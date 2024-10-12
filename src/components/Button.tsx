import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(["font-semibold", "transition-colors"], {
	variants: {
    variant: {
      default: [
        "bg-kummelnas-secondary",
        "text-white",
        "border-transparent",
        "hover:bg-kummelnas-secondary-dark",
      ],
      transparent: [
				"text-kummelnas",
				"hover:text-kummelnas-primary-hover",
      ],
			dark: [
				"bg-kummelnas-dark",
				"text-white",
				"hover:bg-kummenlas-dark-hover"
			]
    },
    size: {
			default: ["rounded", "py-1", "px-6", "text-base", "tracking-wide", "font-medium", "normal-case", "text-nowrap"],
      small: ["rounded", "py-1", "px-4", "text-base", "tracking-wide", "font-medium", "normal-case", "text-nowrap"],
      large: ["rounded", "py-1.5", "px-8", "text-base", "tracking-wide", "font-medium", "uppercase", "text-nowrap"],
			// className="text-xl font-semibold tracking-wide"

			icon: [
				"rounded-full",
				"w-10",
				"h-10",
				"flex",
				"items-center",
				"justify-center",
				"p-2",
			]
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({ variant, size, className, ...props}: ButtonProps) {
	return (
		<button 
			title={props.title}
			type="button"
			{...props}
			className={twMerge(buttonStyles({ variant, size}), className)}
		/>
	)
}