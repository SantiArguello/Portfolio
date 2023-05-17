import React from "react";
import "./educacion.css";
import henryLogo from "../../assets/Banner4.png";
import aluraLogo from "../../assets/2022-12-28_18-42_sharingMetadataImage.png";

const Educacion = () => {
  return (
    <div className="container-education">
      <div className="content-wrapper">
        <div className="education-item">
          <div className="education-card">
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={henryLogo}
                alt="Henry Logo"
                className="education-logo"
              />
            </a>
            <h1>Desarrollador Full Stack</h1>
            <h3>Egresado de SoyHenry</h3>
            <p>
              Como Desarrollador
              FullStack, he adquirido un sólido dominio de una amplia gama de
              tecnologías y habilidades necesarias en el desarrollo web.
              </p >
              <p>
                En el ámbito técnico, he aprendido a desarrollar aplicaciones
                web completas utilizando tecnologías como HTML, CSS y
                JavaScript. Además, he adquirido conocimientos en frameworks y
                bibliotecas populares como React.js, que me permiten crear
                interfaces de usuario atractivas y responsivas. También he
                desarrollado habilidades en la construcción y gestión de
                servidores web utilizando tecnologías como Node.js y Express.js,
                lo que me permite crear aplicaciones web completas con
                funcionalidades del lado del servidor. Además, tengo experiencia
                en el diseño, creación y gestión de bases de datos utilizando
                sistemas populares como MongoDB y PostgreSQL. Además, tengo
                experiencia en el uso de herramientas de control de versiones
                como Git y GitHub para colaborar de manera efectiva en proyectos
                de desarrollo.
              </p>
              <p>
                Además de mis habilidades técnicas, he desarrollado habilidades
                blandas que son esenciales en el entorno laboral. Soy un
                comunicador efectivo y puedo colaborar fácilmente en equipos
                multidisciplinarios. Tengo habilidades de resolución de
                problemas, lo que me permite enfrentar desafíos técnicos y
                encontrar soluciones eficientes. Además, tengo una mentalidad de
                aprendizaje continuo, siempre estoy dispuesto a adquirir nuevas
                habilidades y mantenerme actualizado en las últimas tendencias
                tecnológicas. También soy organizado, capaz de gestionar
                múltiples tareas y proyectos simultáneamente.
              </p>
              <p>
                Estas habilidades técnicas y blandas me han preparado para
                enfrentar desafíos en el mundo laboral y estoy emocionado por
                seguir creciendo y aportando mi experiencia en el campo del
                desarrollo web.
              </p>
          </div>
        </div>
        <div className="education-item">
          <div className="education-card">
          <a
            href="https://www.alura.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={aluraLogo} alt="Alura Logo" className="education-logo" />
          </a>
          <h1>Desarrollador Backend</h1>
            <h3>Estudiando en Alura</h3>
            <p>
            Actualmente, estoy cursando en Alura, un bootcamp de desarrollo enfocado en diversas tecnologías y herramientas utilizadas en el desarrollo backend. Durante mi tiempo en Alura, he tenido la oportunidad de adquirir habilidades sólidas en programación y especialmente en el dominio de Java y el framework Spring.
            </p>
            <p>
            En el bootcamp de Alura, hemos explorado en profundidad el lenguaje de programación Java y su amplio ecosistema. Además, hemos aprendido a utilizar el framework Spring para desarrollar aplicaciones web y aprovechar su poderosa funcionalidad, como la inversión de control, la inyección de dependencias y la creación de APIs RESTful.
            </p>
            <p>
            A través de proyectos prácticos y desafiantes, he aplicado mis conocimientos para crear aplicaciones web robustas y eficientes. También he tenido la oportunidad de trabajar en equipo, colaborando con otros estudiantes para resolver problemas y mejorar nuestras habilidades de desarrollo.
            </p>
            <p>
            Alura me ha brindado una sólida base en el desarrollo backend. Estoy emocionado por seguir aprendiendo y ampliando mis conocimientos en estas tecnologías, ya que sé que son altamente valoradas en la industria y me brindarán excelentes oportunidades profesionales en el futuro.
            </p>
            <p>
            El bootcamp me ha brindado una experiencia enriquecedora y me ha preparado para enfrentar los desafíos del desarrollo backend. Estoy ansioso por seguir creciendo como desarrollador y aplicar mis habilidades en proyectos innovadores y emocionantes."
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Educacion;
