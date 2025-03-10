import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Card, { CardType } from "./Card/Card";
import Image from "next/image";
import createGlobe from "cobe";
import { useSpring } from 'react-spring';
import { Cobe } from "../Cobe";

const stacks = [
  false,
  {
    src: "/typescript.svg",
    label: "TypeScript"
  },
  false,
  {
    src: "/typescript.svg",
    label: "TypeScript"
  },
  false,
  {
    src: "/typescript.svg",
    label: "TypeScript"
  },
  false,
  {
    src: "/typescript.svg",
    label: "TypeScript"
  },
  false,
  {
    src: "/typescript.svg",
    label: "TypeScript"
  },
  false,
  false,
  false,
  {
    src: "/typescript.svg",
    label: "TypeScript"
  },
  false,
  {
    src: "/typescript.svg",
    label: "TypeScript"
  },
  false,
  {
    src: "/typescript.svg",
    label: "TypeScript"
  },
  false,
  false,
  false,
  {
    src: "/typescript.svg",
    label: "TypeScript"
  },
  false,
  false,
  {
    src: "/typescript.svg",
    label: "TypeScript"
  },
]

const SlideOne = () => {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-7 flex flex-col gap-10 justify-center">
        <h1 className="text-5xl text-white">Who Am I?</h1>
        <p className="text-lg text-slate-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident error hic iste molestias itaque corrupti aliquam, molestiae harum delectus, modi deserunt tenetur, magnam blanditiis repellendus ex dignissimos necessitatibus vel quod!
          Odio commodi reiciendis laborum dolor necessitatibus
        </p>
      </div>

      <div className="col-span-5 grid grid-cols-5 gap-y-14">
        {stacks.map((stack: any, index: number) => (
          index === 12 ?
            <h3 className="text-3xl w-10 flex justify-center">Stacks</h3>
            :
            <div className="w-10 h-10 cursor-pointer">
              {stack && <Image
                src="/typescript.svg"
                width={40}
                height={40}
                alt="Picture of the author"
              />}
            </div>
        )
        )}
      </div>
    </div>
  )
}

const SlideTwo = () => {

  // useEffect(() => {
  //   let phi = 0;

  //   const globe = createGlobe(canvasRef.current, {
  //     devicePixelRatio: 2,
  //     width: 450 * 2,
  //     height: 450 * 2,
  //     phi: 10,
  //     theta: 0,
  //     dark: 1,
  //     diffuse: 1.2,
  //     mapSamples: 16000,
  //     mapBrightness: 6,
  //     baseColor: [0.3, 0.3, 0.3],
  //     markerColor: [0.1, 0.8, 1],
  //     glowColor: [1, 1, 1],
  //     markers: [
  //       // longitude latitude
  //       { location: [35.7219, 51.3347], size: 0.05 },
  //       // { location: [40.7128, -74.006], size: 0.1 }
  //     ],
  //     onRender: (state) => {
  //       // // Called on every animation frame.
  //       // // `state` will be an empty object, return updated params.
  //       // state.phi = phi;
  //       // phi += 0.01;
  //       // console.log(state)
  //     }
  //   });

  //   return () => {
  //     globe.destroy();
  //   };
  // }, []);

  return (
    <div>
      <div className="flex flex-col gap-8 border border-white w-96">
        <p>hi</p>
        <Cobe />
      </div>
    </div>
  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[1000vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {cards.map((card) => {
            return <Card key={card.id} id={card.id}>
              {card.children}
            </Card>;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;

const cards: CardType[] = [
  {
    id: 1,
    children: <SlideOne />
  },
  {
    id: 2,
    children: <SlideTwo />
  },
  {
    id: 3,
    children: <div>details 3</div>
  },
];