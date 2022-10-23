import Home from "components/Home/Home";
import './content.css'

type T_Props = {}

const Content: React.FC<T_Props> = (props) => {
  return (
    <div className='content'>
        <Home />
    </div>
  );
};

export default Content;
