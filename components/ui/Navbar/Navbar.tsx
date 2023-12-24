"use client";

import { useEffect, useState } from "react";
import LinkItem from "../LinkItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Brand from "../Brand";
import Link from "next/link";
import NewsletterModal from "../NewsletterModal";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default () => {
  const [state, setState] = useState(false);
  const [isNewsletterModalActive, setNewsletterModalActive] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Components", path: "/components" },
    { title: "Templates", path: "/templates" },
    { title: "Demo", path: "/demo" },
    {
      title: "Github",
      path: "https://github.com/MarsX-dev/floatui",
      props: { target: "_blank" },
    },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as HTMLElement;
      if (target && !target.closest(".menu-btn")) setState(false);
    };
  }, []);

  function EditorWithAiButton() {
    return (
      <button
        className="w-full hidden md:flex font-medium text-sm text-zinc-400 hover:text-zinc-200  items-center gap-2 duration-200 group"
        onClick={() => setNewsletterModalActive(true)}
      >
        AI Editor
        <SparklesIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-125 duration-150" />
      </button>
    );
  }

  return (
    <>
      <header className="h-[5rem] relative z-20">
        <nav
          className={` ${
            state
              ? "absolute inset-x-0 shadow-lg rounded-xl bg-zinc-900 border border-zinc-800 mx-2 pb-5 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0 md:bg-transparent md:pb-0"
              : ""
          }`}
        >
          <div className="custom-screen-lg gap-x-14 items-center md:flex">
            <div className="flex items-center justify-between py-1 md:block ">
              <Link href="/">
                <Image
                  width={150}
                  height={150}
                  src="/logo-dark.svg"
                  alt={""}
                  className="-mt-8 hidden md:block"
                ></Image>
              </Link>
              <Link href="/">
                <Image
                  width={120}
                  height={120}
                  src="/logo-dark.svg"
                  alt={""}
                  className=" md:hidden  relative right-20 -top-2 z-0"
                ></Image>
              </Link>
              <div className="flex md:hidden">
                <div className="mr-3">
                  <EditorWithAiButton />
                </div>
                <button
                  aria-label="menu button"
                  className="menu-btn group"
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <XMarkIcon className="w-8 h-8 pointer-events-none text-zinc-500 group-hover:text-zinc-400" />
                  ) : (
                    <Bars3Icon className="w-8 h-8 pointer-events-none text-zinc-500 group-hover:text-zinc-400" />
                  )}
                </button>
              </div>
            </div>
            <div
              className={`flex-1 items-center -mt-10  md:flex ${
                state ? "block" : "hidden"
              } `}
            >
              <ul className="flex-1 justify-center   mt-10 lg:mt-0 items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="font-medium text-sm text-zinc-400 hover:text-zinc-200 duration-200"
                    >
                      <Link {...item.props} href={item.path} className="block">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <EditorWithAiButton />
                </li>
              </ul>
              <div className="mt-6 md:mt-0">
                <LinkItem
                  variant="shiny"
                  href="/components"
                  className="w-full block bg-zinc-800 hover:bg-zinc-700 md:bg-shiny"
                >
                  Get started
                </LinkItem>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <NewsletterModal
        isActive={isNewsletterModalActive}
        closeModal={setNewsletterModalActive}
      />
    </>
  );
};
