import styled from '@emotion/styled';

const getBgColor = ({type = 'default', theme}) => theme.colors[type];
const getRadius = ({circle}) => (circle ? '50%' : '3px');

const small = (circle) => `
  ${
    circle
      ? 'width: 1.25rem; height: 1.25rem; line-height: 1.2rem;'
      : 'padding: 2px 3px;'
  }
  font-size: .8em;
`;
const def = (circle) => `
    ${
      circle
        ? 'width: 1.5rem; height: 1.5rem; line-height: 1.45rem;'
        : 'padding: 3px 5px;'
    }
  font-size: .9em;
`;
const medium = (circle) => `
  ${
    circle
      ? 'width: 2rem; height: 2rem; line-height: 1.95rem;'
      : 'padding: 6px 12px;'
  }
  font-size: .95em;
`;
const large = (circle) => `
  ${
    circle
      ? 'width: 2.5rem; height: 2.5rem; line-height: 2.45rem;'
      : 'padding: 8px 16px;'
  }
  font-size: 1em;
`;

const getBySize = ({size, circle}) => {
  switch (size) {
    case 'small':
      return small(circle);
    case 'medium':
      return medium(circle);
    case 'large':
      return large(circle);
    default:
      return def(circle);
  }
};

export const TagContainer = styled.span`
  ${getBySize};
  display: inline-block;
  text-align: ${({circle}) => (circle ? 'center' : 'initial')};
  background-color: ${getBgColor};
  border-radius: ${getRadius};
  overflow: hidden;
`;
