import { FC } from "react";
import About from "components/About/About";
import Home from "components/Home/Home";
import Publications from "components/Publications/Publications";
import Resume from "components/Resume/Resume";
import Skills from "components/Skills/Skills";
import Contributions from "components/Contributions/Contributions";
import './content.css'

const Content: FC = () => {
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
