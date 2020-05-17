import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 4rem;
`;

export const Navigation = styled.div`
  border-top: solid 1px ${({ theme }) => theme.colors.border};
  padding: 2rem 0;

  .row {
    margin: 0 -1rem;
    display: flex;
    justify-content: space-between;

    > div {
      width: 100%;
      padding: 0 1rem;
    }
  }


  .prev, .next {
    display: block;
    padding: 1rem;
    text-decoration: none;
    border: solid 1px ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 3px;
    transition: all .15s ease;
    color: ${({ theme }) => theme.colors.grayLight};

    &:hover {
      &, .name {
        color: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }

    .menu {
      color: ${({ theme }) => theme.colors.grayLight};
    }
    .name {
      font-size: 1.1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.text};
      transition: all .15s ease;
    }
  }

  .prev {
    text-align: right;
  }
  .next {
  }
  .icon {
    padding: 0 2px;
    font-size: 3.25rem;
    line-height: .85;
  }
`;

export const Updated = styled.div`
  padding: 1.25rem 0;
  color: ${({ theme }) => theme.colors.grayLighter};
  font-weight: 500;
  font-size: .9rem;
  border-top: solid 1px ${({ theme }) => theme.colors.border};
`;