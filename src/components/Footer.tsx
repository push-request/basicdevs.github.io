const footerLinks = {
  Company: [
    { label: "About us", href: "#about" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "#" },
  ],
};

const Footer = () => (
  <footer>
    <div className="border-t border-border">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <span className="text-lg font-bold text-foreground">Basic Devs</span>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>Basic Devs, Copyright {new Date().getFullYear()}</span>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <span>|</span>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
