import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery/activity-01.jpeg",
    alt: "Aktivitas pickup dan pengumpulan material",
    caption: "Aktivitas pickup dan pengumpulan material",
  },
  {
    src: "/images/gallery/activity-02.jpeg",
    alt: "Persediaan material di area kerja",
    caption: "Persediaan material di area kerja",
  },
  {
    src: "/images/gallery/activity-03.jpeg",
    alt: "Aktivitas pemilahan dan penanganan material",
    caption: "Aktivitas pemilahan dan penanganan material",
  },
  {
    src: "/images/gallery/activity-04.jpeg",
    alt: "Identitas usaha",
    caption: "Identitas usaha",
  },
];

export function GallerySection() {
  return (
    <section className="gallery-section" id="galeri" aria-labelledby="gallery-title">
      <div className="site-container section-container">
        <div className="section-heading">
          <p className="section-eyebrow">Aktivitas</p>
          <h2 id="gallery-title">Galeri Aktivitas</h2>
          <p>Dokumentasi aktivitas pengumpulan dan penanganan material.</p>
        </div>
        <ul className="gallery-grid">
          {galleryItems.map((item, index) => (
            <li className={`gallery-item gallery-item-${index + 1}`} key={item.src}>
              <figure>
                <div className="gallery-image-frame">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 920px) 50vw, 25vw" />
                </div>
                <figcaption>{item.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
