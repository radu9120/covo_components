import LinkItem from "../LinkItem";
import { IconGithub } from "components/icons";
import HeroBgGradientClient from "./HeroBgGradient.Client";
import Link from "next/link";

export default () => {
  return (
    <section className="custom-screen mt-20">
      <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center">
        <h1 className="text-5xl heading">
          Rapidly develop and deploy using Tailwind CSS UI components
        </h1>
        <p className="text-zinc-400">
          Accelerate your workflow with attractive, responsive UI components and
          contemporary website templates, all completely free and open-source.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="mt-6 md:mt-0">
            <Link href="/components">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
                  <span>Get started</span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-teal-400/0 via-teal-400/90 to-teal-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </Link>
          </div>
          <LinkItem
            href="https://github.com/radu9120/covo_components"
            variant="shiny"
            className="inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto"
            target="_blank"
          >
            <IconGithub className="w-5 h-5" />
            Star on GitHub
          </LinkItem>
        </div>
      </div>
      <HeroBgGradientClient />
    </section>
  );
};
