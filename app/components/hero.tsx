import Image from "next/image";

export function Hero() {
  return (
    <section className="hero-section" id="beranda">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="site-container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">PT. ALVIN JAYA RECYCLE</p>
          <h1>Solusi Terpercaya untuk Material Bekas &amp; Daur Ulang</h1>
          <p className="hero-description">
            Melayani pembelian berbagai barang bekas dan material yang dapat didaur ulang, dengan layanan pickup untuk kebutuhan rumah tangga maupun perusahaan.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wa.me/6281385423643">
              Hubungi Kami <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button button-secondary" href="#material">
              Lihat Material <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-details" aria-label="Informasi layanan utama">
            <span><i aria-hidden="true" /> Pickup tersedia</span>
            <span><i aria-hidden="true" /> Melayani perusahaan</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/images/gallery/activity-01.jpeg"
              alt="Aktivitas pengangkutan material daur ulang"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
          <div className="hero-image-label">
            <span className="label-line" />
            <span>Moving Forward, Valuing the Past</span>
          </div>
        </div>
      </div>
    </section>
  );
}

