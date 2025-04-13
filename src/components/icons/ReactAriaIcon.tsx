interface Props {
    className?: string
}

const ReactAriaIcon = ({ className = "size-10" }: Props) => {
    return (
<svg viewBox="0 0 30 26" fill="#E1251B" aria-label="Adobe" className={className}><path d="M19 0L30 0 30 26z"></path><path d="M11.1 0L0 0 0 26z"></path><path d="M15 9.6L22.1 26 17.5 26 15.4 20.8 10.2 20.8z"></path></svg>    )
}

export default ReactAriaIcon