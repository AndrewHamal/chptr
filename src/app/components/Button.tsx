import Link from "next/link"

interface IButton {
    text: string
    href: string
    size?: 'sm' | 'lg' | 'xl' | 'wide'
    preset: 'primary' | 'secondary'
    color?: string
}

export default function Button({ href, preset, text, size = 'sm', color }: IButton) {
    return (<Link href={href}>
        <button className={`shadow-lg uppercase shadow-[#5856d6]/[0.5] btn-${preset} color-${color} btn-${size}`}>
            {text}
        </button>
    </Link>)
}