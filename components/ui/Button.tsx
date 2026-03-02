import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "ghost" | "ghost-light";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    as?: "button" | "a";
    href?: string;
}

const styles: Record<Variant, string> = {
    primary:
        "bg-[#C3612C] text-white hover:bg-[#a44e22] border border-transparent",
    ghost:
        "bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
    "ghost-light":
        "bg-transparent text-white border border-white hover:bg-white hover:text-[#1A1A1A]",
};

export default function Button({
    variant = "primary",
    as: Tag = "button",
    href,
    className,
    children,
    ...rest
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center px-8 py-3.5 " +
        "text-label font-sans uppercase tracking-widest " +
        "transition-colors duration-200 cursor-pointer select-none " +
        "rounded-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta";

    if (Tag === "a") {
        return (
            <a
                href={href}
                className={clsx(base, styles[variant], className)}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={clsx(base, styles[variant], className)} {...rest}>
            {children}
        </button>
    );
}
