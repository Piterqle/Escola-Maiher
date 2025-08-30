import { useEffect, useState } from 'react'
import logo from '../../pictures/Logo.png'
import './style.css'
import imagem from '../../pictures/turma1.jpg'

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 160) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="home-container">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
          <div className="container d-flex justify-content-between align-items-center">

            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo" width="180" className="hoverImg" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              style={{ width: "100px" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre</a>
              </li>
            </ul>
          </div>
        </div>

        <section className="hero-section">
          <img src={imagem} className='img' alt="" />
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="section-title text-center">Sobre Nós</h2>
            <p className="text-center">
              A Escola Exemplo é uma instituição comprometida com a excelência educacional, oferecendo um ambiente de
              aprendizado acolhedor e inovador.
            </p>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="section-title text-center">Nossos Cursos</h2>
            <div className="row">
              {["Curso 1", "Curso 2", "Curso 3"].map((curso, i) => (
                <div className="col-md-4" key={i}>
                  <div className="card">
                    <img src="https://via.placeholder.com/350x200" className="card-img-top" alt={curso} />
                    <div className="card-body">
                      <h5 className="card-title">{curso}</h5>
                      <p className="card-text">Descrição do {curso.toLowerCase()}.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="section-title text-center">Entre em Contato</h2>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Nome</label>
                  <input type="text" className="form-control" id="name" placeholder="Seu Nome" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Seu Email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Sua mensagem"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2025 Escola Exemplo - Todos os direitos reservados</p>
        </footer>
      </div>
    </>
  )
}

export default Home
