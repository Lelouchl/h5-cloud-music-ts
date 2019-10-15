import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  bottom: ${(props: any) => (props.play > 0 ? '60px' : 0)};
  width: 100%;
`;
