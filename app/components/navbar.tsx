import Image from "next/image";

const navigationLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Material", href: "#material" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="site-container navbar">
        <a className="brand-mark" href="#beranda" aria-label="PT. Alvin Jaya Recycle, beranda">
          <Image
            src="/images/brand/logo-original.jpeg"
            alt="Logo PT. Alvin Jaya Recycle"
            width={184}
            height={70}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="button button-small button-whatsapp navbar-cta" href="https://wa.me/6281385423643">
          WhatsApp
        </a>

        <details className="mobile-menu">
          <summary aria-label="Buka menu navigasi">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Navigasi mobile">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a className="button button-whatsapp" href="https://wa.me/6281385423643">
              WhatsApp
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
