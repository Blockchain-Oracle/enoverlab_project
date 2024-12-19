import { WhyChooseUsProperties } from "@/app/(marketing)/_components/WhyChooseUs";
import WhyChooseUs from "@/app/(marketing)/_components/WhyChooseUs";

export default function Popular() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-green">
        Most popular recipe collections this week{" "}
      </h1>
      <ul className="mx-auto grid grid-cols-2 justify-center gap-4 overflow-x-auto md:grid-cols-2 lg:flex lg:flex-nowrap">
        {WhyChooseUsProperties.map((card) => (
          <WhyChooseUs key={card.image} {...card} />
        ))}
      </ul>
    </section>
  );
}
