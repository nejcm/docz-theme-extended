import styled from '@emotion/styled';

import {
  defaultValue as originalDefaultValue,
  container as originalContainer,
  propName as originalPropName,
  propType as originalPropType,
  right as originalRight,
} from 'gatsby-theme-docz/src/components/Props/styles';

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

export const container = {...originalContainer, overflow: 'none'};

export const propName = {...originalPropName, minWidth: '150px'};

export const propType = {...originalPropType, minWidth: '150px'};

export const right = {...originalRight, minWidth: '150px'};

export const defaultValue = {
  ...originalDefaultValue,
  maxWidth: '50%',
  overflow: 'hidden',
  color: (theme) => `${theme.colors.props.descriptionText}`,
  '&[data-hovertext]': {
    cursor: 'help',
    whiteSpace: 'nowrap',
  },
  '&[data-hovertext] > em': {
    display: 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  '&[data-hovertext]:hover::before': {
    content: 'attr(data-hovertext)',
    position: 'absolute',
    padding: '10px 20px',
    background: (theme) => `${theme.colors.props.descriptionBg}`,
    color: (theme) => `${theme.colors.props.descriptionText}`,
    border: (theme) => `1px solid ${theme.colors.props.descriptionText}`,
    borderRadius: 10,
    whiteSpace: 'pre-wrap',
    fontStyle: 'italic',
    zIndex: 10,
  },
};
