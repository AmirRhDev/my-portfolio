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

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

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
    children: <div>1</div>
  },
  {
    id: 2,
    children: <div>2</div>
  },
];