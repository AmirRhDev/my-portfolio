import { stagger, useAnimate } from "framer-motion";
import Details from "./components/Details";
import FeatureCard from "./components/Card";
import useFeatureStore from "./store/store";
import { useEscapePress } from "@/utils/use-escape-press";
import { useHidePageOverflow } from "@/utils/toggle-page-overflow";
import { useEffect } from "react";
import ReactIcon from "../icons/ReactIcon";
import JavascriptIcon from "../icons/JavascriptIcon";

const DEFAULT_FEATURES = [
    {
        id: "fanagin",
        title: "FRONTEND TEAM LEAD",
        stacks: [ReactIcon, JavascriptIcon],
        compName: "Fanagin",
        duration: "Jun 2023 - Present",
        description: "Led the front-end development team- Collaborated with product managers to define project scope and Mentored junior developers, providing guidance on best practices and fostering a collaborative learning environment",
        location: "Tehran Province, Iran"
    },
    {
        id: "tarahanshomal",
        title: "WEB DEVELOPER & ANALYSTE",
        stacks: [ReactIcon, JavascriptIcon],
        compName: "Tarahan Shomal",
        duration: "May 2020 - Jun 2023",
        description: "Developed secure local management projects aligned with industry standards.Led business analysis and designed responsive, mobile-like views to enhance user experience and meet client goals.",
        location: "Mazandaran Province, Iran"
    },
    {
        id: "satrika",
        title: "FRONT DEVELOPER & DESIGNER",
        stacks: [ReactIcon, JavascriptIcon],
        compName: "Satrika",
        duration: "Aug 2021 - Oct 2022",
        description: "Designed web pages in Adobe XD, ensuring smooth handoff to development. Applied responsive design to optimize user experience on all devices. Used Tailwind and SASS for clean, scalable styling.",
        location: "Mazandaran Province, Iran"
    },
    {
        id: "oritco",
        title: "FRONT DEVELOPER",
        stacks: [ReactIcon, JavascriptIcon],
        compName: "Oritco",
        duration: "Mar 2020 - Jul 2021",
        description: "Streamlined front- and back-end integration for efficient development. Built responsive websites with CSS, Bootstrap, and JavaScript. Collaborated on project planning and business analysis.",
        location: "Mazandaran Province, Iran"
    },
    // {
    //     title: "FRONT DEVELOPER",
    //     description: "Led the front-end development team- Collaborated with product managers to define project scope and Mentored junior developers, providing guidance on best practices and fostering a collaborative learning environment",
    //     id: "team",
    //     card: Team,
    // },
];

interface Props {
    features?: any //TODO: change type
}

const VerticalScrollSlider = ({ features = DEFAULT_FEATURES }: Props) => {
    const [scope, animate] = useAnimate();
    const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
    const lastFullscreenFeature = useFeatureStore(
        (state) => state.lastFullscreenFeature
    );
    const setFullscreenFeature = useFeatureStore(
        (state) => state.setFullscreenFeature
    );

    const onEscapePress = () => {
        if (fullscreenFeature) setFullscreenFeature(null);
    };

    useEscapePress(onEscapePress);
    useHidePageOverflow(!!fullscreenFeature);

    useEffect(() => {
        if (fullscreenFeature) {
            animate([
                [
                    ".feature-title",
                    { opacity: 0, x: "-200px" },
                    { duration: 0.3, delay: stagger(0.05) },
                ],
                [
                    { opacity: 1, scale: 1, pointerEvents: "auto" },
                    { at: "<" },
                ],
                [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
                [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
                [
                    ".back-to-site-btn",
                    { opacity: 1, y: "0px" },
                    { at: "<", duration: 0.3 },
                ],
            ]);
        } else {
            animate([
                [
                    ".feature-title",
                    { opacity: 1, x: "0px" },
                    { duration: 0.3, delay: stagger(0.05) },
                ],
                [
                    { opacity: 0, scale: 0.75, pointerEvents: "none" },
                    { at: "<" },
                ],
                [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
                [".active-card .show-me-btn", { opacity: 1 }],
            ]);
        }
    }, [animate, fullscreenFeature, lastFullscreenFeature]);

    return (
        <div ref={scope}>
            <div className="flex w-full items-start gap-20">
                <div className="w-full py-[50vh]">
                    <ul>
                        {features.map((feature: any) => ( //TODO: change type
                            <li key={feature.id}>
                                <Details
                                    id={feature.id}
                                    title={feature.title}
                                    // description={feature.description}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sticky top-0 flex h-screen w-full items-center">
                    <div className="relative aspect-square w-full rounded-2xl bg-zinc-800 [&:has(>_.active-card)]:bg-transparent">
                        {features.map((feature: any) => ( //TODO: change type
                            <FeatureCard feature={feature} key={feature.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerticalScrollSlider