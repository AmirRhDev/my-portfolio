import Link from 'next/link';
import { ReactElement } from 'react';
import ReactIcon from '../icons/ReactIcon';
import TypescriptIcon from '../icons/TypescriptIcon';
import JwtIcon from '../icons/JwtIcon';
import TailwindIcon from '../icons/TailwindIcon';
import NextJsIcon from '../icons/NextJsIcon';
import ViteIcon from '../icons/ViteIcon';
import ReactAriaIcon from '../icons/ReactAriaIcon';
import JavascriptIcon from '../icons/JavascriptIcon';
import AlpineJsIcon from '../icons/AlpineJsIcon';
import SwaggerIcon from '../icons/SwaggerIcon';
import JiraIcon from '../icons/JiraIcon';
import ShadcnIcon from '../icons/ShadcnIcon';
import ReduxIcon from '../icons/ReduxIcon';
import ReactQueryIcon from '../icons/ReactQueryIcon';
import SassIcon from '../icons/SassIcon';
import VitestIcon from '../icons/VitestIcon';

interface StacksType {
  tooltip: string;
  icon: ReactElement;
  url: string
}

const DEFAULT_STACKS: StacksType[] = [
  {
    url: "https://react.dev",
    tooltip: "React",
    icon: <ReactIcon />
  },
  {
    url: "https://www.typescriptlang.org",
    tooltip: "Typescript",
    icon: <TypescriptIcon />
  },
  {
    url: "https://jwt.io",
    tooltip: "JWT",
    icon: <JwtIcon />
  },
  {
    url: "https://tailwindcss.com",
    tooltip: "Tailwind Css",
    icon: <TailwindIcon />
  },
  {
    url: "https://nextjs.org",
    tooltip: "Next.js",
    icon: <NextJsIcon />
  },
  {
    url: "https://vite.dev",
    tooltip: "Vite",
    icon: <ViteIcon />
  },
  {
    url: "https://react-spectrum.adobe.com/react-aria/index.html",
    tooltip: "React Aria",
    icon: <ReactAriaIcon />
  },
  {
    url: "https://www.javascript.com",
    tooltip: "Javascript",
    icon: <JavascriptIcon />
  },
  {
    url: "https://alpinejs.dev",
    tooltip: "Alpine.js",
    icon: <AlpineJsIcon />
  },
  {
    url: "https://swagger.io",
    tooltip: "Swagger",
    icon: <SwaggerIcon />
  },
  {
    url: "https://www.atlassian.com/software/jira",
    tooltip: "Jira",
    icon: <JiraIcon />
  },
  {
    url: "https://ui.shadcn.com",
    tooltip: "Shadcn",
    icon: <ShadcnIcon />
  },
  {
    url: "https://redux.js.org",
    tooltip: "Redux",
    icon: <ReduxIcon />
  },
  {
    url: "https://tanstack.com/query/latest",
    tooltip: "React Query",
    icon: <ReactQueryIcon />
  },
  {
    url: "https://sass-lang.com",
    tooltip: "Sass",
    icon: <SassIcon />
  },
  {
    url: "https://vitest.dev",
    tooltip: "Vitest",
    icon: <VitestIcon />
  },
]

interface Props {
  stacks?: StacksType[]
}

const InfinitMovingCards = ({ stacks = DEFAULT_STACKS }: Props) => {
  return (
    <div className='group w-full overflow-hidden'>
      <div className='w-full text-5xl py-8  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] '>
        <ul className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]'>
          {stacks.map((stack: StacksType) => (
            <li key={stack.tooltip} className='flex items-center justify-center'>
              <Link href={stack.url}>
                {stack.icon}
              </Link>
            </li>
          ))}
        </ul>
        
        <ul
          className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]'
          aria-hidden='true'
        >
          {stacks.map((stack: StacksType) => (
            <li key={stack.tooltip} className='flex items-center justify-center'>
              <Link href={stack.url}>
                {stack.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InfinitMovingCards;