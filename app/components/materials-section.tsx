const materials = [
  "AC / Air Conditioner",
  "Komputer",
  "Peralatan jaringan",
  "Kulkas",
  "Tembaga",
  "Besi tua / scrap iron",
  "Aluminium",
  "Barang bekas dan material daur ulang lainnya",
];

export function MaterialsSection() {
  return (
    <section className="materials-section" id="material" aria-labelledby="materials-title">
      <div className="site-container section-container">
        <div className="section-heading">
          <p className="section-eyebrow">Material</p>
          <h2 id="materials-title">Material yang Kami Beli</h2>
          <p>
            Kami menerima beragam barang bekas dan material yang dapat diproses untuk kebutuhan daur ulang.
          </p>
        </div>
        <ul className="materials-grid">
          {materials.map((material, index) => (
            <li className="material-card" key={material}>
              <span className="material-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{material}</h3>
              <span className="card-arrow" aria-hidden="true">-&gt;</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
