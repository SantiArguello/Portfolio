import React from "react";
import "./proyects.css";
import PetsAmerica from "../../assets/PetsAmerica.png";
import RickMorty from "../../assets/RicknMorty.png";
import PiFood from "../../assets/PiFood.png";

const Proyects = () => {
  const projects = [
    {
      title: "PetsAmerica",
      description:
        "Pets America es un ecommerce ficticio en desarrollo, dedicado a la venta de productos para mascotas, donde el usuario puede no solo comprar productos y servicios, sino que además puede cargar sus mascotas y guardar un historial con el seguimiento de las visitas al veterinario, calendario de vacunación y demás.El proyecto es una aplicación desarrollada con React y Zustand en el front, y Hapi y MongoDb en el back, en formato de API REST.",
      deployUrl: "https://pf-henry-one.vercel.app/",
      githubUrl: "https://github.com/erikfille/PF-Henry",
      image: PetsAmerica,
    },
    {
      title: "Rick & Morty",
      description:
        "Es una aplicación web que consume la API pública de Rick and Morty para mostrar información sobre los personajes, episodios y ubicaciones de la serie animada.La aplicación está desarrollada en JavaScript utilizando el framework React, y se utiliza la librería axios para hacer las peticiones a la API.",
      deployUrl: "https://rick-morty-rho.vercel.app/",
      githubUrl: "https://github.com/SantiArguello/Rick-Morty",
      image: RickMorty,
    },
    {
      title: "Pi Food SoyHenry",
      description:
        "Desarrollado como parte de mi proyecto individual en Henry, muestra una lista de todas la recetas y tipos de dietas disponibles, con una interfaz amigable y fácil de usar. Los usuarios pueden aplicar filtros combinados para encontrar rápidamente las comidas que buscan, y la búsqueda inteligente les permite obtener resultados precisos y relevantes. Además, cada receta cuenta con su propia página de detalles, donde se muestra información detallada, como su tipo, habilidades, estadísticas, hp, etc..Tecnologías utilizadas: Javascript, React, Redux, Sql, Node.js,express",

      githubUrl: "https://github.com/SantiArguello/PI-Food-Henry",
      image: PiFood,
    },
    // Agrega más objetos para tus proyectos restantes
  ];

  return (
    <div className="container-proyects">
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="cardP" key={index}>
            <h2>{project.title}</h2>
            <img src={project.image} alt="" />
            <div className="description-container">
              <p>{project.description}</p>
            </div>
            <div className="button-container">
              {project.deployUrl ? (
                <a
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy
                </a>
              ) : (
                <a
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled
                >
                  Deploy
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositorio
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
