import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="columns bigger-footer">
      </div>
      <div className="columns is-mobile smaller-footer" >
        <div className="column content has-text-centered">
          <p>
            <span className="copyright">
              © {new Date().getFullYear()} - Super Movies
            </span>
            <br />
            <span className="desenvolvedor">
              Desenvolvido por <a className="desenvolvedor" href="https://www.linkedin.com/in/d%C3%A9cio-de-andrade-3481b91a2/" target="_blank" rel="noreferrer">Décio de Andrade</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
