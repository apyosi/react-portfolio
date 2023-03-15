const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer text-center bg-dark text-light container-fluid flex-column pt-3">
      <div className="container-fluid p-3 gap-2 d-grid d-md-flex flex-row flex-wrap justify-content-around">
        <a href="tel:+447440708094" className="btn btn-primary">
          <i className="fa fa-phone-square" aria-hidden="true"></i> +447440708094
        </a>
        <a href="mailto:anton.yosifov@outlook.com" className="btn btn-primary">
          <i className="fa fa-envelope-square" aria-hidden="true"></i> anton.yosifov@outlook.com
        </a>
        <a
          href="https://www.linkedin.com/in/anton-yosifov-9b38b85b/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn
        </a>
        <a
          href="https://github.com/apyosi/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <i className="fa fa-github-square" aria-hidden="true"></i> GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1H0wjoraf9qZPL-hp5b9CCeeQrGIY18r2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <i className="fa-solid fa-file" aria-hidden="true"></i> CV/Resume
        </a>
      </div>
      <div className="text-center d-block bg-dark text-light container-fluid pt-3"><ul>Copyright &copy; {today.getFullYear()}</ul></div>
    </footer>
  );
};

export default Footer;
