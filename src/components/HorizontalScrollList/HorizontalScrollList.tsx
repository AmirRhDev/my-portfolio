// @ts-nocheck
'use client';
import Image from 'next/image';
import { JSX, useEffect, useRef } from 'react';
import { animate, scroll, spring } from 'motion';
import { ReactLenis } from 'lenis/react';

export default function HorizontalScroll(): JSX.Element {
    const ulRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        // const items = document.querySelectorAll('li');
        const items = ulRef.current?.querySelectorAll('li') || [];

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
            const header = item.querySelector('h2');

            //   if (header) {
            scroll(animate([header], { x: [800, -800] }), {
                target: document.querySelector('section'),
                offset: [
                    [i * segmentLength, 1],
                    [(i + 1) * segmentLength, 0],
                ],
            });
            //   }
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
                        <li className='h-screen w-screen border border-red-500 flex flex-col overflow-hidden items-center'>
                            <h2 className='text-[10vw] text-slate-50 font-semibold border'>
                                Who Am I
                            </h2>
                            <div>1</div>
                        </li>
                        <li className='h-screen w-screen border border-red-500 flex flex-col overflow-hidden items-center'>
                            <h2 className='text-[10vw] text-slate-50 font-semibold border'>
                                About Me
                            </h2>
                            <div>2</div>
                        </li>
                        <li className='h-screen w-screen border border-red-500 flex flex-col overflow-hidden items-center'>
                            <h2 className='text-[10vw] text-slate-50 font-semibold border'>
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