import Image from "next/image";
import Hero from "@/components/hero";
import Content from "@/components/content";
import Testimonial from "@/components/testimonial";
import Gallery from "@/components/gallery";
export default function Home() {
  return (
    <main>
      <Hero />
      <Content />
      <Gallery />
      <Testimonial />
    </main>
  );
}
