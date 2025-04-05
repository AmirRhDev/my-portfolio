import { cn } from "@/lib/utils";
import classNames from "classnames";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const DEFAULT_ITEMS = [
    {
        title: "Narona",
        description: "A platform to manage coffee shop's and restaurant's",
        cardClass: "col-span-2",
        demoUrl: "https://narona.pw/"
    },
    {
        title: "Maham gostar",
        description: "An IT company that provides services such as website design and various systems",
        demoUrl: "https://mahamgostar.com/"
    },
    {
        title: "Enterprise Resource Planning",
        description: "An ERP system to streamline business operations across various departments",
    },
    {
        title: "Real estate union",
        description: "A web platform for managing real estate union operations",
        demoUrl: "https://etehadiye.tarahanco.com"
    },
    {
        title: "Clinic management system",
        description: "A web system for managing patient care processes.",
        demoUrl: "https://clinic.tarahanco.com"
    },
    {
        title: "Fan Agin",
        description: "A three-day static website for Fan Agin company :D",
        demoUrl: "https://fanagin.ir"
    },
    {
        title: "Shora yar (Official Automation)",
        description: "Official Automation is a web-based solution designed to streamline administrative processes for councils and governmental organizations",
        cardClass: "col-span-2",
        demoUrl: "https://automation.tarahanco.com"
    },
    {
        title: "Customer Relationship Management",
        description: "A CRM system to enhance customer engagement and streamline communication",
        cardClass: "col-span-3",
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
                                className="border-none outline-none ring-0 rounded-3xl inline-flex items-center justify-center gap-1.5 bg-cyan-600 hover:bg-cyan-700 cursor-pointer text-white text-xs font-semibold px-3 py-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                Preview
                            </Link>
                        </div> :
                            <p className="text-xs text-orange-400">unavailable for privacy reason</p>
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