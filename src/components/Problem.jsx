function Problem() {
  return (
    <div className="section-wrapper reveal">
      <span className="section-number">01</span>

      <div className="section-content">
        <h2 className="section-title">Problēma</h2>
        <p className="section-text">
          Digitālā atkarība samazina jauniešu fizisko aktivitāti,
          kas tieši ietekmē sporta klubu finansējumu un attīstību.
          Pie ekrāniem pavadītais laiks aizvien vairāk konkurē ar laiku,
          ko jaunieši varētu veltīt sportam.
        </p>

        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-value">4<span>h+</span></div>
            <div className="stat-desc">vidēji pavadīts pie ekrāna dienā</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">48<span>%</span></div>
            <div className="stat-desc">jaunieši nav pietiekami fiziski aktīvi</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">3<span>×</span></div>
            <div className="stat-desc">lielāks risks veselības problēmām</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problem;
