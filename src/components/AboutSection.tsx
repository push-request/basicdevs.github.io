const AboutSection = () => (
  <section id="about" className="py-28 md:py-36">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold blue-underline mb-14">
        About Us
      </h2>

      <div className="glass-card max-w-3xl mx-auto p-10 md:p-14">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Our games have been played millions of times, attracting hundreds of
          thousands of monthly active users across our portfolio. We've had the
          privilege of working on some of the top ROBLOX games, gaining
          invaluable insights along the way.
        </p>
        <a
          href="#careers"
          className="inline-block mt-8 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          Join our team
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;
