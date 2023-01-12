import { FaPython, FaLaravel, FaPhp, FaAngular, FaGithub } from 'react-icons/fa'
import "../styles/components/projectscontainer.sass"

const projects = [
  { id: "luisTrivinh0", name: "Portfólio", icon: <FaGithub />, title: "Meu Portfólio no Github com alguns projetos desenvolvidos", link:"https://github.com/luisTrivinh0" },
  { id: "sys_upd8", name: "CRUD Laravel", icon: <FaLaravel />, title: "Micro-Sistema para Cadastro de Clientes em Laravel", link: "https://github.com/luisTrivinh0/sys_upd8" },
  { id: "api_laravel", name: "API Laravel", icon: <FaLaravel />, title: "API em Laravel simulando um App de Músicas", link: "https://github.com/luisTrivinh0/api_laravel" },
  { id: "python-estudos", name: "Exemplos Python", icon: <FaPython />, title: "Exercícios feitos em Python", link: "https://github.com/luisTrivinh0/python-estudos" },
  { id: "projeto-angular", name: "CRUD Angular", icon: <FaAngular />, title: "Micro-Sistema para Cadastro de Cursos em Angular", link: "https://github.com/luisTrivinh0/projeto-angular" },
  { id: "utility", name: "Utility", icon: <FaPhp />, title: "Utilitários que fiz por estudo.", link: "https://github.com/luisTrivinh0/Utility" },
]

function ProjectsContainer() {
  return (
    <section className='projects-container'>
      <div className='section'>
        <h2>Projetos</h2>
        <div className='projects-grid'>
          {projects.map((proj) => (
            <a className='projects-card' id={proj.id} key={proj.id} href={proj.link} target="_blank">
              {proj.icon}
              <h3>{proj.name}</h3>
              <p>{proj.title}</p>
            </a>
          )
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectsContainer