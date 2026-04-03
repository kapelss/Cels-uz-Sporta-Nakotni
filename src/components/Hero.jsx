import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-eyebrow">
        <span className="hero-eyebrow-line" />
        Pētījuma projekts · 2025
      </div>

      <h1>
        Ceļš uz<br />
        Sporta <em>Nākotni</em>
      </h1>

      <div className="hero-sub">
        <p>
          Digitālās atkarības ietekme uz sportu un tā
          finansējumu jauniešu vidū.
        </p>
        <a href="#problem" className="hero-btn">
          Uzzināt vairāk
        </a>
      </div>

      <span className="hero-scroll-hint">Ritināt</span>
    </div>
  );
}

export default Hero;
