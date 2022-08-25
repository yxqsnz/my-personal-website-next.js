import { useTheme } from 'next-themes'
import { Prism } from "react-syntax-highlighter";
import { prism, vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useEffect, useState } from "react";

interface Props {
  code: string,
  lang?: string,
}

const Code = ({ code, lang }: Props, ...props: any) => {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <Prism
    style={theme == "dark" ? vscDarkPlus : prism}
    language={lang}
    PreTag="div"
    {...props}
  >
    {code.replace(/\n$/, "")}
  </Prism>
}

export default Code

