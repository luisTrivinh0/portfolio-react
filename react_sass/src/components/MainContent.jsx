import '../styles/components/maincontent.sass';
import Works from './Works';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';


const MainContent = () => {
  return (
    <main id="main-content">
      <Works />
      <AboutContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent