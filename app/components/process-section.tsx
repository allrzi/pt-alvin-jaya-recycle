const processSteps = [
  {
    number: "01",
    title: "Hubungi Kami",
    description: "Pelanggan menghubungi kami dan menjelaskan material yang dimiliki.",
  },
  {
    number: "02",
    title: "Informasi Material",
    description: "Pelanggan memberikan informasi dasar tentang material dan jumlahnya.",
  },
  {
    number: "03",
    title: "Pickup atau Antar",
    description: "Mengatur pickup atau pelanggan membawa material ke lokasi kami.",
  },
  {
    number: "04",
    title: "Pemeriksaan & Transaksi",
    description: "Material diperiksa dan transaksi diselesaikan.",
  },
];

export function ProcessSection() {
  return (
    <section className="process-section" id="proses" aria-labelledby="process-title">
      <div className="site-container section-container">
        <div className="section-heading">
          <p className="section-eyebrow">Alur Layanan</p>
          <h2 id="process-title">Proses Kerja</h2>
          <p>Langkah sederhana untuk mengatur pembelian atau pickup material.</p>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
