import { FaPhp, FaReact, FaLaravel, FaJs, FaHtml5, FaJava, FaNode, FaAngular, FaPython} from 'react-icons/fa'
import { DiMysql } from 'react-icons/di'

import "../styles/components/networks.sass"

const portfolioWorks = [
  { name: "php", icon: <FaPhp />, title: "PHP"},
  { name: "laravel", icon: <FaLaravel />, title: "Laravel" },
  { name: "react", icon: <FaReact />, title: "React" },
  { name: "js", icon: <FaJs />, title: "Javascript" },
  { name: "html5", icon: <FaHtml5 />, title: "HTML5" },
  { name: "java", icon: <FaJava />, title: "Java" },
  { name: "angular", icon: <FaAngular />, title: "Angular" },
  { name: "node", icon: <FaNode />, title: "NodeJs" },
  { name: "mysql", icon: <DiMysql />, title: "MySQL" },
  { name: "python", icon: <FaPython />, title: "Python" },
]

function Works() {
  return (
    <section id="portfolioWorks">
      {(portfolioWorks.map((network) => (
        <a className='work-btn' id={network.name} key={network.name} title={network.title} disabled>
          {network.icon}
        </a>
      )
      ))}
    </section>
  )
}

export default Works