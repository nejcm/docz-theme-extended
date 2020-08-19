import styled from '@emotion/styled';

import { defaultValue as originalDefaultValue } from "gatsby-theme-docz/src/components/Props/styles";

export const Container = styled.div`
  width: 100%;
  overflow: auto;
  margin-bottom: 2rem;

  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    vertical-align: middle;
    font-size: 0.9em;

    th,
    td {
      border-bottom: solid 1px ${({theme}) => theme.colors.border};
      padding: 12px 8px;
      min-height: 68px;
    }

    th {
      color: ${({theme}) => theme.colors.gray};
    }
    td {
      p {
        margin: 0;
      }
    }
  }
`;

export const defaultValue = { ...originalDefaultValue,
  textOverflow: 'ellipsis',
  maxWidth: '65%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  '&[data-hovertext]': {
    position: 'relative',
    cursor: 'help'
  },
  '&[data-hovertext]:hover::before': {
    position: 'absolute',
    bottom: -46,
    padding: '10px 20px',
    background: '#333',
    color: '#FFF',
    borderRadius: 10
  }}
