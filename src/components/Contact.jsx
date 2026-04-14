function Contact() {
  return (
    <div className="section-wrapper reveal">
      <span className="section-number">04</span>

      <div className="section-content">
        <h2 className="section-title">Kontakti</h2>
        <p className="section-text">
          Interesē sadarboties vai uzzināt vairāk par projektu?
          Sazinies ar mums!
        </p>

        <div className="contact-grid">
          <a href="mailto:celsuzsportanakotni@gmail.com" className="contact-item">
            <div className="contact-label">E-pasts</div>
            <div className="contact-value">celsuzsportanakotni@gmail.com</div>
          </a>
          <a href="https://instagram.com/CelsUzSportaNakotni" className="contact-item" target="_blank" rel="noreferrer">
            <div className="contact-label">Instagram</div>
            <div className="contact-value">@CelsUzSportaNakotni</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
