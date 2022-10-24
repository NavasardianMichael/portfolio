type T_Props = {
  id: string
  title: string
  children: JSX.Element|JSX.Element[]
}

const ContentSection = ({ children, id, title }: T_Props) => {
  return (
    <div id={id} className='content-section'>
      <h1 className='content-section-title'>
        {title}
      </h1>
      {children}
    </div>
  );
};

export default ContentSection;
