"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

import collab1 from "../../../public/images/collab1.jpeg";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  src: StaticImageData
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
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        because yolo. Instead, I
        would like to call it X.com so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        is that you do not talk about fight
        club. The second rule of
        is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];

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
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 500000);
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
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-slate-200">
              {card.content}
            </div>
            <div className="flex gap-3">
              <Image
                src={card.src}
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
