import { Link } from 'react-router-dom';
import { StyledSideMenu } from './styles/SideMenu.styled';

const SideMenu = (): JSX.Element => {
  return (
    <StyledSideMenu>
      <ul>
        <li>
          <Link to="/">CSS Demo I</Link>
        </li>
        <li>
          <Link to="/demoii">CSS Demo II</Link>
        </li>
        <li>
          <Link to="/checklist">Check List</Link>
        </li>
        <li>
          <Link to="/crud">CRUD</Link>
        </li>
      </ul>
    </StyledSideMenu>
  );
};

export default SideMenu;
