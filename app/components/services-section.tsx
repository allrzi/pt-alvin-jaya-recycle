const services = [
  {
    number: "01",
    title: "Pembelian barang bekas",
    description: "Pembelian berbagai barang bekas dari individu maupun perusahaan.",
  },
  {
    number: "02",
    title: "Pembelian material scrap dan daur ulang",
    description: "Menerima material scrap dan material yang dapat didaur ulang.",
  },
  {
    number: "03",
    title: "Layanan pickup",
    description: "Pickup material di lokasi sesuai kebutuhan yang telah disepakati.",
  },
  {
    number: "04",
    title: "Penerimaan material di lokasi",
    description: "Material dapat dibawa dan diterima di lokasi kami.",
  },
  {
    number: "05",
    title: "Penanganan material dalam jumlah besar untuk perusahaan",
    description: "Koordinasi penanganan material dalam jumlah besar untuk kebutuhan perusahaan.",
  },
];

export function ServicesSection() {
  return (
    <section className="services-section" id="layanan" aria-labelledby="services-title">
      <div className="site-container section-container">
        <div className="section-heading section-heading-light">
          <p className="section-eyebrow">Layanan</p>
          <h2 id="services-title">Layanan Kami</h2>
          <p>
            Pilihan layanan yang mendukung kebutuhan pengumpulan dan penyerahan material secara praktis.
          </p>
        </div>
        <ol className="services-list">
          {services.map((service) => (
            <li className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
