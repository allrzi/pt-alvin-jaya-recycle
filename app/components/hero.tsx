import Image from "next/image";

export function Hero() {
  return (
    <section className="hero-section" id="beranda">
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="site-container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">PT. ALVIN JAYA RECYCLE</p>

          <h1>
            Jual Beli Barang Bekas &amp; Material Daur Ulang
          </h1>

          <p className="hero-description">
            PT. ALVIN JAYA RECYCLE melayani pembelian berbagai barang bekas
            dan material daur ulang dengan layanan pickup untuk rumah tangga,
            perusahaan, dan industri di wilayah Jabodetabek.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://wa.me/6281385423643"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami <span aria-hidden="true">-&gt;</span>
            </a>

            <a className="button button-secondary" href="#material">
              Lihat Material <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div
            className="hero-details"
            aria-label="Informasi layanan utama"
          >
            <span>
              <i aria-hidden="true" /> Pickup tersedia di Jabodetabek
            </span>

            <span>
              <i aria-hidden="true" /> Melayani perusahaan &amp; industri
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/images/gallery/activity-01.jpeg"
              alt="Aktivitas pengangkutan barang bekas dan material daur ulang PT Alvin Jaya Recycle"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>

          <div className="hero-image-label">
            <span className="label-line" />
            <span>Pickup • Jabodetabek • Luar Daerah untuk Kuantitas Besar</span>
          </div>
        </div>
      </div>
    </section>
  );
}