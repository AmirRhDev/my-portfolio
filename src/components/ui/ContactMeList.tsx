import Link from "next/link";
import { ReactElement } from "react";

interface ContractItemType {
    name: string;
    url: string;
    icon: ReactElement
}

const DEFAULT_CONTACT_LIST: ContractItemType[] = [
    {
        name: "Github",
        url: "https://github.com/AmirRhDev",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-4"><path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"></path></svg>
    },
    {
        name: "Linkedin",
        url: "www.linkedin.com/in/amirrahimnezhad",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-4"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path><path d="M2 9H6V21H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
    },
    {
        name: "Dev.to",
        url: "https://dev.to/amirrhdev",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="size-4" viewBox="0 0 24 24"><path fill="currentColor" d="M7.73 11.93c0 1.72-.02 1.83-.23 2.07-.19.17-.38.23-.76.23l-.51.01-.03-2.27-.02-2.27h.52c.35 0 .6.07.77.21.24.21.26.25.26 2.02M22 7.5v9c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2v-9c0-1.11.89-2 2-2h16c1.11 0 2 .89 2 2M8.93 11.73c-.03-1.84-.05-1.99-.29-2.39-.4-.68-.85-.84-2.36-.84H5v7h1.21c1.33 0 1.89-.17 2.29-.71.41-.53.5-.98.43-3.06m4.19-3.23h-1.48c-1.49 0-1.5 0-1.71.28S9.7 9.21 9.7 12v2.96l.27.27c.25.27.31.27 1.71.27h1.44v-1.19l-1.09-.04-1.1-.03V12.6l.68-.03.66-.04v-1.19h-1.39V9.7h2.24zm5.88.06c0-.06-.3-.06-.66-.06l-.68.06-.59 2.35c-.38 1.48-.62 2.27-.67 2.13-.08-.27-1.14-4.44-1.14-4.49s-.31-.05-.68-.05h-.69l.41 1.55c.2.87.59 2.28.81 3.15.34 1.35.46 1.65.75 1.94.2.22.45.36.61.36.33 0 .76-.34.9-.73C17.5 14.5 19 8.69 19 8.56"></path></svg>
    },
    {
        name: "amir.rahimnezhad79@gmail.com",
        url: "",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
    }
]

interface Props {
    contactItems?: ContractItemType[]
}

const ContactMeList = ({ contactItems = DEFAULT_CONTACT_LIST }: Props) => {
    return (
        <ul className="flex flex-col gap-4">
            {contactItems.map((item: ContractItemType) => (
                <li className="text-slate-400 hover:text-slate-300 font-light text-sm">
                    {item.url ? <Link
                        className="flex items-center gap-3"
                        href={item.url}
                    >
                        {item.icon}
                        {item.name}
                    </Link> :
                        <div className="flex items-center gap-3">
                            {item.icon}
                            {item.name}
                        </div>
                    }
                </li>
            ))}
        </ul>
    )
}

export default ContactMeList