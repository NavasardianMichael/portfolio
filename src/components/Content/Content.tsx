import About from "components/About/About";
import Home from "components/Home/Home";
import Publications from "components/Publications/Publications";
import Resume from "components/Resume/Resume";
import Skills from "components/Skills/Skills";
import './content.css'
import Contributions from "components/Contributions/Contributions";

type T_Props = {}

const Content: React.FC<T_Props> = (props) => {
  return (
    <div className='content'>
      <Home />
      <About />
      <Skills />
      <Resume />
      <Publications />
      <Contributions />
    </div>
  );
};

export default Content;
