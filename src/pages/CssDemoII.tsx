import { DemoII } from '../components/styles/CssDemo.styled';

const CssDemoII = (): JSX.Element => {
  return (
    <div>
      <DemoII>
        <div className="header">CSS Demo II</div>
        <div className="body">
          <div className="aside"></div>
          <div className="main"></div>
        </div>
        <div className="footer"></div>
      </DemoII>
    </div>
  );
};

export default CssDemoII;
