import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card, { CardType } from "./Card/Card";

// const Example = () => {
//   return (
//     <div className="bg-neutral-800">
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll down
//         </span>
//       </div>
//       <HorizontalScrollCarousel />
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll up
//         </span>
//       </div>
//     </div>
//   );
// };
const SlideOne = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7 flex flex-col gap-10">
          <h1 className="text-5xl text-white">Who Am I?</h1>
          <p className="text-lg text-slate-100">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident error hic iste molestias itaque corrupti aliquam, molestiae harum delectus, modi deserunt tenetur, magnam blanditiis repellendus ex dignissimos necessitatibus vel quod!
            Odio commodi reiciendis laborum dolor necessitatibus
          </p>
      </div>

      <div className="col-span-5">
        slm
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
        <motion.div style={{ x }} className="flex gap-4">
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
    children: <div>details 2</div>
  },
  {
    id: 3,
    children: <div>details 3</div>
  },
];