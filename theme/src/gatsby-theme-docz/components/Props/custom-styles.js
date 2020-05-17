import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  overflow: auto;
  margin-bottom: 2rem;

  table {
    width: 100%;
    min-width: 600px;
    text-align: left;
    border-collapse: collapse;
    vertical-align: middle;
    font-size: .9em;

    th,
    td {
      border-bottom: solid 1px ${({ theme }) => theme.colors.border};
      padding: 12px 8px; 
      min-height: 68px;
    }

    th {
      color: ${({ theme }) => theme.colors.gray};
    }
    td {
      p {
        margin: 0;
      }
    }
  }
`;