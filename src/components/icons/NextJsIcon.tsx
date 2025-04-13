interface Props {
    className?: string
}

const NextJsIcon = ({ className = "size-10" }: Props) => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}><circle cx="64" cy="64" r="64"></circle><path fill="url(#next_gradient)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 006.763-5.209"></path><path fill="url(#next_gradient2)" d="M81.778 38.4h8.533v51.2h-8.533z"></path><defs><linearGradient id="next_gradient" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient><linearGradient id="next_gradient2" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient></defs></svg>    )
}

export default NextJsIcon