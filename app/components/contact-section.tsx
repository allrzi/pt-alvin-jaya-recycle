export function ContactSection() {
  return (
    <section className="contact-section" id="kontak" aria-labelledby="contact-title">
      <div className="site-container contact-layout">
        <div className="contact-copy">
          <p className="section-eyebrow">Kontak</p>
          <h2 id="contact-title">Hubungi Kami</h2>
          <p>Hubungi kami untuk informasi material, pembelian barang bekas, atau kebutuhan pickup.</p>
        </div>

        <div className="contact-panel">
          <dl className="contact-details">
            <div>
              <dt>WhatsApp</dt>
              <dd><a href="https://wa.me/6281385423643">0813-8542-3643</a></dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href="mailto:pt.alvin.jaya.recycle@gmail.com">pt.alvin.jaya.recycle@gmail.com</a></dd>
            </div>
            <div>
              <dt>Alamat</dt>
              <dd>
                Jl. H. Toran No. 76, RT.5/RW.001,
                <br />
                Rengas, Kec. Ciputat Timur,
                <br />
                Kota Tangerang Selatan, Banten 15444
              </dd>
            </div>
            <div>
              <dt>Jam layanan</dt>
              <dd>Setiap hari, 08:00–20:00</dd>
            </div>
          </dl>
          <a className="button button-primary contact-button" href="https://wa.me/6281385423643">
            Hubungi via WhatsApp <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
