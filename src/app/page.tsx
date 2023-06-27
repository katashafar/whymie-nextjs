import Image from "next/image";
import Hero from "@/components/hero";
import Content from "@/components/content";
import Testimonial from "@/components/testimonial";
export default function Home() {
  return (
    <main>
      <Hero />
      <Content />
      <Testimonial />
    </main>
  );
}
