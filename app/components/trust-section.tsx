const trustPoints = [
  "Melayani pembelian barang bekas dan material yang dapat didaur ulang",
  "Melayani kebutuhan rumah tangga maupun perusahaan",
  "Tersedia layanan pickup",
  "Menerima material dalam jumlah besar",
  "Komunikasi langsung untuk kebutuhan pembelian dan pickup",
];

export function TrustSection() {
  return (
    <section className="trust-section" id="tentang-kami" aria-labelledby="trust-title">
      <div className="site-container section-container trust-layout">
        <div className="section-heading">
          <p className="section-eyebrow">Tentang / Kepercayaan</p>
          <h2 id="trust-title">Ruang untuk Kebutuhan Material Anda</h2>
          <p>
            PT. ALVIN JAYA RECYCLE melayani pembelian barang bekas dan material yang dapat didaur ulang dengan komunikasi langsung.
          </p>
        </div>
        <ul className="trust-points">
          {trustPoints.map((point) => (
            <li key={point}>
              <span className="trust-check" aria-hidden="true">+</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
