import { DemoI } from '../components/styles/CssDemo.styled';

const CssDemoI = (): JSX.Element => {
  return (
    <div>
      <DemoI>
        <div className="header">CSS Demo I</div>
        <div className="aside"></div>
        <div className="footer"></div>
      </DemoI>
    </div>
  );
};

export default CssDemoI;
