import styled from '@emotion/styled';

export const Link = styled.a`
  position: relative;
  font-size: 1em;

  .icon {
    position: absolute;
    font-size: 0.85em;
    top: 0.125em;
    left: 0;
    transform: translateX(-100%);
    padding-right: 6px;
    opacity: 0;
    transition: opacity 0.1s ease-in;

    svg {
      width: 1em;
      height: 1em;
      path {
        fill: ${({ theme }) => theme.colors.grayLight};
      }
    }
  }

  &:hover .icon {
    opacity: 1;
  }
`;