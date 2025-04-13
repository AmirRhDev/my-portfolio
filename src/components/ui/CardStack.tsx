"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

import collab1 from "../../../public/images/collab1.jpeg";
import collab2 from "../../../public/images/collab2.jpeg";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  src?: StaticImageData
  content: React.ReactNode;
};

const CARDS = [
  {
    id: 0,
    name: "Alireza Sarkar",
    designation: "Co-Founder at ADKLAY",
    src: collab1,
    content: (
      <p>
        Amirhosein Rahimnezhad is one of the greatest among all people I've ever worked with. When you get to connect with him, you'll discover an incredible person with exceptional skills! Amirhosein Rahimnezhad provided outstanding results for our team. I certainly would recommend him as frontend developer.
      </p>
    ),
  },
  {
    id: 1,
    name: "Hamid Mousavi",
    designation: "Founder of Tarahan Shomal",
    src: collab2,
    content: (
      <p className="text-sm">
        AmirHosein Rahimnezhad is a talented and creative front-end developer at Tarahan Shomal. He delivers clean, efficient code and always looks for better solutions to improve performance. AmirHosein works well in a team, communicates effectively, and has a flexible, professional attitude. He’s a valuable asset to any development team.
      </p>
    ),
  },
  // {
  //   id: 2,
  //   name: "Tyler Durden",
  //   designation: "Manager Project Mayhem",
  //   content: (
  //     <p>
  //       The first rule of
  //       is that you do not talk about fight
  //       club. The second rule of
  //       is that you DO NOT TALK about fight
  //       club.
  //     </p>
  //   ),
  // },
];

// I’ve had the pleasure of working with AmirHosein Rahimnezhad at Tarahan Shomal, where he has been a valuable part of our front-end development team.

// AmirHosein is a highly skilled and creative developer who consistently brings fresh ideas and innovative solutions to our projects. He works efficiently and always strives to improve performance by exploring new technologies and better approaches. Writing clean, maintainable code is a priority for him, and it truly shows in his work.

// One of his standout qualities is his strong teamwork and communication skills. He collaborates seamlessly with others, contributes positively to team dynamics, and is always open to feedback. His flexibility and professional attitude make him a pleasure to work with.

// I confidently recommend AmirHosein to any team looking for a talented and reliable front-end developer. He would be a strong asset to any organization.

export const CardStack = ({
  items = CARDS,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; 
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 4000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card: Card, index: number) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-slate-900 h-60 w-60 md:h-72 md:w-[420px] rounded-3xl p-4 shadow-xl border border-slate-800 shadow-slate-800/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, 
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-slate-200">
              {card.content}
            </div>
            <div className="flex gap-3">
              <Image
                src={card.src || ''}
                width={45}
                height={45}
                alt="someone"
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-white">
                  {card.name}
                </p>
                <p className="font-normal text-slate-200">
                  {card.designation}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
