import Link from "next/link";

/* Link wrapper */
export default function Redirect({ to, text, as }: { to: string, text: string, as?: string }) {
  return (
    <div className="text-pink-400 hover:text-pink-200 transition duration-75">
      <Link href={to} as={as}>
        <a> {text} </a>
      </Link>
    </div>
  )
}
