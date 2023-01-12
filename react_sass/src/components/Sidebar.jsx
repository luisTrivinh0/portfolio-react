import Avatar from '../img/mypic.jpeg';

import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';
import Networks from './Networks';

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Luís Trivinho"/>
      <p className='title'>Desenvolvedor Fullstack</p>
      <Networks />
      <InformationContainer/>
      <a href="CV.pdf" target="_blank" className="btn">Meu Currículo</a>
    </aside>
  )
}

export default Sidebar