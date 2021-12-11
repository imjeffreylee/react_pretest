import styled from 'styled-components';

const asideWidth = 'width: 60px';
const borderLine = '2px solid #000';
const textAlign = 'text-align: center';
const headerFooterHeight = 'height: 30px';
const bodyHeight = 'height: calc(100% - 64px)';
const fullDimension = 'width: 100%; height: 100vh';

export const DemoI = styled.div`
  ${fullDimension};
  border: ${borderLine};
  .header {
    ${headerFooterHeight};
    border-bottom: ${borderLine};
    ${textAlign};
  }
  .aside {
    ${asideWidth};
    ${bodyHeight};
    border-right: ${borderLine};
  }
  .footer {
    ${headerFooterHeight};
    border-top: ${borderLine};
  }
`;

export const DemoII = styled.div`
  ${fullDimension};
  border: ${borderLine};
  display: flex;
  flex-direction: column;
  .header {
    ${headerFooterHeight};
    border-bottom: ${borderLine};
    ${textAlign};
  }
  .body {
    ${bodyHeight};
    width: 100%;
    display: flex;
  }
  .aside {
    ${asideWidth};
    border-right: ${borderLine};
  }
  .main {
    width: calc(100% - 60px);
  }
  .footer {
    ${headerFooterHeight};
    border-top: ${borderLine};
  }
`;
