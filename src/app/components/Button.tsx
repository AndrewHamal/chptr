import Link from "next/link"

interface IButton {
    text: string
    href: string
    size?: 'sm' | 'lg' | 'xl' | 'wide'
    preset: 'primary' | 'secondary' | 'white'
    color?: string
}

export default function Button({ href, preset, text, size = 'sm', color }: IButton) {
    return (<Link href={href}>
        <button className={`shadow-lg uppercase shadow-[#04784a]/[0.2] btn-${preset} color-${color} btn-${size}`}>
            {text}
        </button>
    </Link>)
}