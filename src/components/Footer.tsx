const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-heading font-semibold text-foreground">
        Basic<span className="text-primary">Devs</span>
      </span>
      <span>© {new Date().getFullYear()} Basic Devs. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
