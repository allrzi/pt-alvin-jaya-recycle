const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Material", href: "#material" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-intro">
          <p className="footer-kicker">PT. ALVIN JAYA RECYCLE</p>
          <p className="footer-tagline">Moving Forward, Valuing the Past</p>
          <p className="footer-note">
            Pembelian barang bekas dan material daur ulang untuk kebutuhan rumah tangga maupun perusahaan.
          </p>
        </div>

        <div className="footer-column">
          <h2>Hubungi Kami</h2>
          <address>
            Jl. H. Toran No. 76, RT.5/RW.001,
            <br />
            Rengas, Kec. Ciputat Timur,
            <br />
            Kota Tangerang Selatan, Banten 15444
          </address>
          <a href="https://wa.me/6281385423643">0813-8542-3643</a>
          <a href="mailto:pt.alvin.jaya.recycle@gmail.com">pt.alvin.jaya.recycle@gmail.com</a>
          <p>Setiap hari, 08:00–20:00</p>
        </div>

        <div className="footer-column footer-navigation">
          <h2>Navigasi</h2>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="site-container footer-bottom">
        <p>© {new Date().getFullYear()} PT. ALVIN JAYA RECYCLE</p>
        <p>Pickup tersedia untuk individu dan perusahaan.</p>
      </div>
    </footer>
  );
}
