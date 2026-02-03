import BorderedSection from "../marketing-general/bordered-section";
import DiagonalPattern from "../marketing-general/diagonal-pattern";

function Hero() {
  return (
    <section className="pb-16 text-center lg:pb-0">
      <div className="flex">
        <BorderedSection>
          <DiagonalPattern />
        </BorderedSection>
      </div>
    </section>
  );
}

export default Hero;
