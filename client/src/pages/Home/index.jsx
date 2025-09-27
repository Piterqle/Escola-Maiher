import { useEffect, useState } from 'react'
import './style.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import logo from '../../assets/pictures/Logo.png'

// Importar imagens das aulas
import imagem1 from '../../assets/pictures/turma1.jpg'
import imagem2 from '../../assets/pictures/turma2.jpg'
import imagem3 from '../../assets/pictures/turma3.jpg'



import dançaVentre from '../../assets/pictures/escmaihermenezes_527603948_18522190966012309_7653454382418711804_n.jpg'
import dançaSalão from '../../assets/pictures/escmaihermenezes_528507422_18522529801012309_5826010379886604656_n.jpg'
import dançaUrbana from '../../assets/pictures/escmaihermenezes_549211922_18529982956012309_8887021348960150054_n.jpg'

function Home() {
  const listImagens = [imagem1, imagem2, imagem3]
  const listCursos = [
    { id: 1, title: "Dança do Ventre", image: dançaVentre, count: '10/10',description:"Dança do Ventre: muito além da técnica, é expressão, leveza e conexão com o próprio corpo! ✨" },
    { id: 2, title: "Dança de Salão", image: dançaSalão, count: '8/10', description: "Dança de salão é conexão, diversão, autoestima. É um espaço onde você pode ser quem é, se expressar e descobrir uma nova forma de cuidar de si do corpo, da mente e do coração." },
    { id: 3, title: "Dança Urbana", image: dançaUrbana, count: '9/10', description: "Dança urbana é liberdade, criatividade e expressão. É um convite para se mover e se conectar com a música e a cultura de rua." },
  ]
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const collapse = document.querySelectorAll('#navbarSupportedContent');
      if (window.scrollY > 160) {
        navbar.classList.add('navbar-scrolled');
        collapse.forEach(item => item.classList.add('text-dark'));
      } else {
        navbar.classList.remove('navbar-scrolled');
        collapse.forEach(item => item.classList.remove('text-dark'));
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="home-container">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
          <div className="container d-flex align-items-center">

            <a className="navbar-brand justify-self-start" href="#">
              <img src={logo} alt="Logo" width="180" className="hoverImg" />
            </a>


          </div>
          <div className='collapse navbar-collapse'>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <a className="nav-link active" id='navbarSupportedContent' aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id='navbarSupportedContent' href="#about">Sobre Nós</a>
              </li>
              
            </ul>
          </div>
        </nav>

        
          
     
        <a id="home"></a>
        <section className="hero-section" style={{backgroundColor: '#000'}}>
          <Swiper 
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            effect={'fade'}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }} 
          >
            {listImagens.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className="img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <a id='about'></a>
        <section className="py-5">
          <div className="container card shadow p-4" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="section-title text-center">Sobre Nós</h2>
            <p className="text-justify">
              Localizada em Divinópolis, a Escola Maiher Menezes se destaca como uma das melhores instituições de ensino artístico e cultural da região. Nossa missão é oferecer uma educação diversificada, promovendo o desenvolvimento integral dos alunos por meio de uma abordagem moderna e acolhedora.
            </p>
            <p className="text-justify">
              Com infraestrutura completa e professores qualificados, proporcionamos aos nossos alunos experiências únicas em dança, música, teatro e outras expressões artísticas. Acreditamos que a prática da dança transforma vidas e fortalece a autoestima, seguindo nosso lema: “<strong>Quem dança é Mais Feliz</strong>”.
            </p>
            <p className="text-justify">
              Nosso compromisso é ser a maior referência em educação artística em Divinópolis, combinando tradição e inovação para atender alunos de todas as idades. Valorizamos a diversidade e incentivamos cada estudante a explorar seu potencial, garantindo que cada aula seja uma oportunidade de crescimento, aprendizado e alegria.
            </p>
          </div>
        </section>

        <section className="py-5">
          <div className="container card shadow mb-3 p-4"  data-aos="fade-up" data-aos-duration="1000">
            <h2 className="section-title text-center">Nossas Aulas</h2>
            <div className="row">
              {listCursos.map((curso, i) => (
                console.log(curso, i),
                <div className="col-md-4" key={i}>
                  <div className="card cardDance shadow mb-3" style={{ height: '670px' }}>
                    <img src={curso.image}  className="card-img-top" alt={curso.title} />
                    <div className="card-body card-overlay p-3">
                      <h5 className="card-title">{curso.title}</h5>
                      <p className="card-text">{curso.description}</p>
                      <p className='card-text mt-5'><i className='bi bi-person-fill'></i>{curso.count}</p>
                      <a href="#contact" className="link-text">Quero me inscrever!</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container card shadow p-4" data-aos="fade-up" data-aos-duration="1000">
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
        <hr />
        <footer>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h5>Escola Maiher Menezes</h5>
                  <p><i className='bi bi-house'></i> Endereço: R. Mato Grosso, 928 - Centro, Divinópolis - MG, 35500-000</p>
                  <p><i className='bi bi-whatsapp'></i> WhatsApp: <a href="https://bit.ly/2T6K13u?fbclid=PAZXh0bgNhZW0CMTEAAafktBkdyKgqEkbcFEXWmrGA3tGSf2jD9J_7tmLRfjfjmEai6KOyRxGuz_6vYA_aem_t0XZjXUX5JN7Q_0rI46cIQ&e=AT2vzyxKGh-n0wq-_ITirCSIf-rgOEmjD1mbor4vLatWm6ORf6nkLckhk8UoDiVCjY62h0NRlK6cV4je0Gu3IsMaRlrd09T_zwfoat7-Ix0iNFtUY2grVGL6Ng">+55 (37)   98811-8998</a></p>
                  <p><i className='bi bi-telephone'></i> Telefone: <a href="tel:+553732125944">+55 (37) 3212-5944</a></p>
                  <p><i className='bi bi-envelope'></i> Email: contato@escolamaiher.com.br</p>
                </div>
                
                <div className="col-md-4">
                  <h5>Redes Sociais</h5>
                  <p><i className='bi bi-threads'></i> Threads: <a href="https://www.threads.net/@escmaihermenezes" target='_blank'>@escmaihermenezes</a></p>
                  <p><i className='bi bi-instagram'></i> Instagram: <a href="https://www.instagram.com/escmaihermenezes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>@escmaihermenezes</a></p>
                  <p><i className='bi bi-facebook'></i> Facebook: <a href="https://www.facebook.com/maiher.menezes" target='_blank'> /maiher.menezes</a></p>
                  <p><i className='bi bi-youtube'></i> YouTube: <a href="https://www.youtube.com/@maiher1" target='_blank'> @mahier1</a></p>
                </div>
              </div>
            </div>
           
          </div>
        </footer>
        <footer className="footer">
          <p>&copy; 2025 Escola Maiher Menezes - Todos os direitos reservados</p>
        </footer>
      </div>
    </>
  )
}

export default Home
