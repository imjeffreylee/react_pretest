import styled from 'styled-components';

const borderLine = '2px solid #000';
const textAlign = 'text-align: center';

export const DemoI = styled.div`
  width: 100%;
  height: 100vh;
  border: ${borderLine};
  .header {
    height: 30px;
    border-bottom: ${borderLine};
    ${textAlign}
  }
  .aside {
    width: 60px;
    height: calc(100% - 64px);
    border-right: ${borderLine};
  }
  .footer {
    height: 30px;
    border-top: ${borderLine};
  }
`;

export const DemoII = styled.div`
  width: 100%;
  height: 100vh;
  border: ${borderLine};
  display: flex;
  flex-direction: column;
  .header {
    height: 30px;
    border-bottom: ${borderLine};
    ${textAlign}
  }
  .body {
    height: calc(100% - 64px);
    width: 100%;
    display: flex;
  }
  .aside {
    width: 60px;
    border-right: ${borderLine};
  }
  .main {
    width: calc(100% - 60px);
  }
  .footer {
    height: 30px;
    border-top: ${borderLine};
  }
`;
