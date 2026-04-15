import { Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-28 md:py-36">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mx-auto rounded-2xl bg-primary p-10 md:p-14">
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground text-center mb-2">
          Get In Touch
        </h2>
        <p className="text-primary-foreground/70 text-center text-sm mb-8">
          We'd love to hear from you
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full rounded-xl bg-primary-foreground px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full rounded-xl bg-primary-foreground px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-primary-foreground px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
          />
          <textarea
            rows={4}
            placeholder="Your message..."
            className="w-full rounded-xl bg-primary-foreground px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30 resize-none"
          />
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <input type="checkbox" className="rounded" />
            I confirm that I am over 13 years old
          </div>
          <p className="text-xs text-primary-foreground/60">
            By filling out this form and submitting, you are agreeing to our{" "}
            <a href="#" className="underline">privacy policy</a>.
          </p>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
