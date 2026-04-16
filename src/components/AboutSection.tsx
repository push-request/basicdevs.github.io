import { useReveal } from "@/hooks/use-reveal";

const AboutSection = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold blue-underline mb-14">
          About Us
        </h2>

        <div
          ref={ref}
          className={`glass-card max-w-3xl mx-auto p-10 md:p-14 reveal ${visible ? "is-visible" : ""}`}
        >
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            We are currently working on multiple games with a large amount of
            funding. The estimated time of release for these games is the 20
            <sup>th</sup> of April, 2026. Our only developer at the moment is
            scriptedraf. He is the leader of all operations here at Basic Devs,
            also providing the funding.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-block rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:brightness-110 hover:-translate-y-0.5"
            >
              Join our team
            </a>
            <a
              href="https://www.roblox.com/communities/35985418/Basic-Devs#!/about"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Roblox community"
              className="inline-flex items-center justify-center h-12 w-12 rounded-xl border border-border bg-card text-foreground hover:bg-muted hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M3.49 1.27 1.27 22.51 22.51 24.73 24.73 3.49 3.49 1.27Zm10.36 14.46-5.5-1.51 1.51-5.5 5.5 1.51-1.51 5.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
