// @ts-nocheck
'use client';
import Image from 'next/image';
import { JSX, useEffect, useRef } from 'react';
import { animate, scroll, spring } from 'motion';
import { ReactLenis } from 'lenis/react';
import { Cobe } from '../Cobe';
import ContactMeList from '../ContactMe/ContactMeList';
import InfinitMovingCards from '../ui/InfinitMovingCards';

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

const boxes = [
    {
        id: '12',
        title: "sadasdasdsa",
        chart: '/chart_motl5z.webp',
        className: 'grid xl:col-span-1 col-start-1 col-end-3',
    },
    {
        id: '52',

        chart: '/chart4_s7wsku.webp',
        className: 'grid xl:col-span-1 col-start-3 col-end-6',
    },

    {
        id: '42',

        chart: '/chart3_i9wdgb.webp',
        className: 'grid xl:col-span-1 col-start-1 col-end-3',
    },

    {
        id: '22',

        chart: '/star_tb9ivg.webp',
        className: 'grid xl:col-span-1 col-start-3 col-end-6',
    },
    {
        id: '32',
        // component: <Cobe />,
        className:
            'xl:col-span-2 row-span-2 bg-red-500 col-start-1 col-end-6',
    },
];

export default function HorizontalScroll(): JSX.Element {
    const ulRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        // const items = document.querySelectorAll('li');
        const items = ulRef.current?.querySelectorAll('.animatedListItem') || [];

        if (ulRef.current) {
            ulRef.current.style.width = `${items.length * 100}vw`;

            const controls = animate(
                ulRef.current,
                {
                    transform: ['none', `translateX(-${items.length - 1}00vw)`],
                    //   transform: ['none', `translateX(-${(items.length - 1) * 100}vw)`],
                },
                { easing: spring() }
            );
            scroll(controls, { target: document.querySelector('section') });
        }

        const segmentLength = 1 / items.length;
        items.forEach((item, i) => {
            const header = item.querySelector('.animatedHeader');
            console.log("header", header)
            // if (header) {
            scroll(animate([header], { x: [800, -800] }), {
                target: document.querySelector('section'),
                offset: [
                    [i * segmentLength, 1],
                    [(i + 1) * segmentLength, 0],
                ],
            });
            // }
        });
    }, []);

    return (
        <>
            <article>
                <header className='text-white relative  w-full bg-slate-950  grid place-content-center h-[80vh]'>
                    <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

                    <h1 className='text-6xl font-bold text-center tracking-tight'>
                        I know You Love to Scroll <br />
                        So Scroll
                    </h1>
                </header>

                <section className='h-[500vh] relative'>
                    <ul ref={ulRef} className='flex sticky top-0'>
                        <li className='animatedListItem h-screen w-screen border border-red-500 flex flex-col overflow-hidden items-center gap-8'>
                            <h2 className='animatedHeader text-[10vw] text-slate-50 font-bold'>
                                Who Am I
                            </h2>
                            <div className='w-3/4'>
                                <p className='text-2xl text-slate-200 leading-10'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem architecto iste commodi praesentium dolorem aliquid cumque eveniet optio illo voluptatibus quam, quia est maxime culpa minus autem? Ad, facilis!
                                    Soluta magni magnam tenetur iste dignissimos
                                </p>

                                <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden">
                                    <InfinitMovingCards />
                                </div>
                            </div>
                        </li>

                        <li className='animatedListItem h-screen w-screen border border-red-500 flex flex-col overflow-hidden items-center gap-8'>
                            <h2 className='animatedHeader text-[10vw] text-slate-50 font-bold border'>
                                About Me
                            </h2>
                            <div className='w-3/4 max-h-96 flex gap-5 items-center'>
                                <div className="h-full w-1/4 border border-slate-900 rounded-md flex flex-col gap-4 p-4">
                                    <div className='flex items-center gap-2 text-slate-100'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                        <h2>Contact me</h2>
                                    </div>
                                    <div className='pl-3'>
                                        <ContactMeList />
                                    </div>
                                </div>
                                <div className='w-1/4 h-full flex flex-col gap-5'>
                                    <div className="h-1/2 w-full border border-slate-900 rounded-md flex flex-col gap-4 p-4">
                                        <div className='flex items-center gap-2 text-slate-100'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                            </svg>
                                            <h2>Contact me</h2>
                                        </div>
                                        <div className='pl-3'>
                                            2222
                                        </div>
                                    </div>
                                    <div className="h-1/2 w-full border border-slate-900 rounded-md flex flex-col gap-4 p-4">
                                        333
                                    </div>
                                </div>
                                <div className="w-1/2 h-full  border border-slate-900 rounded-md flex flex-col gap-4 p-4 overflow-hidden">
                                    <Cobe />
                                </div>
                            </div>
                        </li>

                        <li className='animatedListItem h-screen w-screen border border-red-500 flex flex-col overflow-hidden items-center'>
                            <h2 className='animatedHeader text-[10vw] text-slate-50 font-bold border'>
                                Nemidonam
                            </h2>
                            <div>2</div>
                        </li>
                    </ul>
                </section>
            </article>
        </>
    );
}