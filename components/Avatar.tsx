import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react'
import { Router } from "next/router";
import Bag from "../lib/bag";

export default function Avatar() {
  const [classNames, setClassNames] = useState("");
  const animation = useRef(new Bag<NodeJS.Timeout>());

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      if (!animation.current.valid()) {
        animation.current.replace(setTimeout(() => {
          setClassNames('animate-pulse')
        }, 100));
      }
    });
  });

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      if (animation.current.valid()) {
        clearTimeout(animation.current.get());
        setClassNames('')
        animation.current.clear();
      }
    });
  });

  return (<Link href="https://github.com/yxqsnz">
    <Image
      style={{ cursor: "pointer" }}
      alt="Avatar image"
      src="https://github.com/yxqsnz.png"
      className={`rounded-full h-12 w-12 ${classNames}`}
      width={38}
      height={38}
      loading="lazy"
      decoding="async"
    />
  </Link>
  )
}
