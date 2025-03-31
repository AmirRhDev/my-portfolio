import { cn } from "@/lib/utils";
import classNames from "classnames";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const DEFAULT_ITEMS = [
    {
        title: "Narona",
        description: "A platform to manage coffee shop's and restaurant's ",
        cardClass: "col-span-2",
        demoUrl: "https://narona.pw/"
    },
    {
        title: "Netflix",
        description:
            "asdasd.",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    },
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        cardClass: "col-span-2"
    },
];

export const CardBackHover = ({
    items = DEFAULT_ITEMS,
    className,
}: {
    items?: {
        title: string;
        description: string;
        cardClass?: string;
        demoUrl?: string
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    className={classNames("relative group block p-2 h-52 w-full", item.cardClass)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-800 block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                        {item.demoUrl ? <div className="">
                            <Link
                                target="_blank"
                                href={item.demoUrl}
                                className="border-none outline-none ring-0 rounded-xl inline-flex items-center justify-center gap-3 bg-cyan-600 hover:bg-cyan-700 cursor-pointer text-white text-sm px-3 py-1"
                            >
                                Preview
                            </Link>
                        </div> :
                            <p>unavaiable</p>
                        }
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-5 overflow-hidden bg-slate-950 border border-slate-900 group-hover:border-slate-800 relative z-20",
                className
            )}
        >
            <div className="h-full flex flex-col justify-between">{children}</div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-slate-50 font-bold tracking-wide", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "text-slate-300 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};