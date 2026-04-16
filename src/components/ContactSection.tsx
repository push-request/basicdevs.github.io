import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";

const ContactSection = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [confirmAge, setConfirmAge] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmAge) {
      toast.error("Please confirm that you are over 13 years old.");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: form,
      });
      if (error) throw error;
      if ((data as { error?: string })?.error) throw new Error((data as { error: string }).error);
      toast.success("Message sent! We'll be in touch soon.");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setConfirmAge(false);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto rounded-2xl bg-primary p-10 md:p-14 reveal ${visible ? "is-visible" : ""}`}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground text-center mb-2">
            Get In Touch
          </h2>
          <p className="text-primary-foreground/70 text-center text-sm mb-8">
            We'd love to hear from you
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="First name"
                value={form.firstName}
                onChange={update("firstName")}
                className="w-full rounded-xl bg-primary-foreground px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
              />
              <input
                type="text"
                required
                placeholder="Last name"
                value={form.lastName}
                onChange={update("lastName")}
                className="w-full rounded-xl bg-primary-foreground px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
              />
            </div>
            <input
              type="email"
              required
              placeholder="Email"
              value={form.email}
              onChange={update("email")}
              className="w-full rounded-xl bg-primary-foreground px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
            />
            <textarea
              rows={4}
              required
              placeholder="Your message..."
              value={form.message}
              onChange={update("message")}
              className="w-full rounded-xl bg-primary-foreground px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30 resize-none"
            />
            <label className="flex items-center gap-2 text-sm text-primary-foreground/80 cursor-pointer">
              <input
                type="checkbox"
                checked={confirmAge}
                onChange={(e) => setConfirmAge(e.target.checked)}
                className="rounded"
              />
              I confirm that I am over 13 years old
            </label>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-background py-3 text-sm font-semibold text-foreground transition-all hover:brightness-125 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            <p className="text-xs text-primary-foreground/60">
              By filling out this form and submitting, you are agreeing to our{" "}
              <a href="#" className="underline">privacy policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
