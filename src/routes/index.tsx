import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Background } from "~/components/background/background";
import { Hero } from "~/components/hero/hero";
import { Poruka } from "~/components/poruka/poruka";

export default component$(() => {
  return (
    <>
      <Hero />
      <Poruka />
      <Background />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
