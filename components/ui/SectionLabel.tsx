import clsx from "clsx";

interface SectionLabelProps {
    children: React.ReactNode;
    theme?: "light" | "dark";
    className?: string;
}

/** Uppercase terracotta eyebrow label used above every section headline. */
export default function SectionLabel({
    children,
    theme = "light",
    className,
}: SectionLabelProps) {
    return (
        <p
            className={clsx(
                "font-sans text-label uppercase tracking-widest",
                theme === "light" ? "text-terracotta" : "text-terracotta",
                className
            )}
        >
            {children}
        </p>
    );
}
