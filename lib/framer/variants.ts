/** Shared Framer Motion animation variants for the Heena site.
 *  Import from this file only — avoids duplicating timing decisions across components.
 */

export const fadeInUp = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const scaleIn = {
    hidden: { scale: 0.92, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

/** Wrap a list of children with this to stagger their entrance. */
export const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/** Standard viewport trigger config — fire once, slightly before entry. */
export const viewportOnce = { once: true, margin: "-50px" };
