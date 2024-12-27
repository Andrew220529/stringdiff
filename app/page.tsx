"use client";

import { Button, Code, Input } from "@nextui-org/react";
import { useState } from "react";
const Diff = require('diff');

export default function Home() {
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")

  const [out, setOut] = useState("")
  function format(parts: any) {
    const listItems = parts.map((part: Diff.Change, index: number,) => {
      const color = part.added ? 'text-green-600' :
        part.removed ? 'text-red-500 text-decoration-line: line-through' : 'text-black';

      return <span key={index} className={color}>{part.value}</span>
    })
    return listItems;
  }


  function clickHangle(event: any): void {
    const diff = Diff.diffChars(input1, input2);
    setOut(format(diff))
  }

  return (
    <main className="bg-white w-full">
      <div className="mx-auto lg:max-w-4xl pt-4 md:pt-12 md:px-12 p-3 font-mono">
        <div className="flex flex-col gap-6 md:gap-3">
          <h1 className="text-xl font-extrabold pl-1 md:pl-0 leading-9 tracking-tight text-slate-800 sm:text-4xl">
            String Diff Tool
          </h1>
          <div><Input type="text" label="String 1" onValueChange={setInput1} /></div>
          <div><Input type="text" label="String 2" onValueChange={setInput2} /></div>
          <div><Button color="primary" onClick={clickHangle}>Compare</Button></div>
          <div><Code>{out ? out : 'hit the string'}</Code></div>
        </div>
      </div>
    </main>
  );
}
