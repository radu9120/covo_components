import LinkItem from "../LinkItem";
import { IconGithub } from "components/icons";
import HeroBgGradientClient from "./HeroBgGradient.Client";

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
          <LinkItem
            href="/components"
            variant="shiny"
            className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
          >
            Get started
          </LinkItem>
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
