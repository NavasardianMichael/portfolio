import About from "components/About/About";
import Home from "components/Home/Home";
import Resume from "components/Resume/Resume";
import Skills from "components/Skills/Skills";
import './content.css'

type T_Props = {}

const Content: React.FC<T_Props> = (props) => {
  return (
    <div className='content'>
      <Home />
      <About />
      <Skills />
      <Resume />
    </div>
  );
};

export default Content;
