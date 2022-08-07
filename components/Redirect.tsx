import Link from "next/link";

/* Link wrapper */
export default function Redirect({ to, text, as }: { to: string, text: string, as?: string }) {
  return (
    <div className="text-pink-400 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-base-200 duration-300;">
      <Link href={to} as={as}>
        <a> {text} </a>
      </Link>
    </div>
  )
}
