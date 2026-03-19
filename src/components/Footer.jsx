function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Ceļš uz Sporta Nākotni</p>
    </footer>
  );
}

export default Footer;
