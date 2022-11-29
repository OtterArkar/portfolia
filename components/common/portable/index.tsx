"use client";
import { PortableText } from "@portabletext/react";
import { useEffect } from "react";
import Prism from "prismjs";
import components from "./components";
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");

type Props = {
  value: any;
};

export default function PortableBody({ value }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <PortableText value={value} components={components} />
    </div>
  );
}