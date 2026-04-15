import { Mail, MessageSquare } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
        Let's <span className="text-primary">Talk</span>
      </h2>
      <p className="text-muted-foreground mb-10">
        Have a game you'd like us to acquire or develop? We'd love to hear from you.
      </p>

      <div className="gradient-card rounded-xl border border-border p-8 md:p-10">
        <form className="space-y-5 text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
            <input
              type="text"
              className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder="Tell us about your game or project..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:box-glow"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
        <a href="mailto:hello@basicdevs.com" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Mail size={16} /> hello@basicdevs.com
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
          <MessageSquare size={16} /> Discord
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
