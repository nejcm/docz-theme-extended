import styled from '@emotion/styled';

const getBgColor = ({type = 'default', theme}) => theme.colors[type];
const getRadius = ({circle, radius}) =>
  circle ? '50%' : typeof radius === 'number' ? `${radius}px` : radius || '2em';

const small = (circle) => `
  ${
    circle
      ? 'width: 1.3rem; height: 1.3rem; line-height: 1.25rem;'
      : 'padding: 2px 8px;'
  }
  font-size: .8em;
`;
const def = (circle) => `
    ${
      circle
        ? 'width: 1.6rem; height: 1.6rem; line-height: 1.55rem;'
        : 'padding: 3px 12px;'
    }
  font-size: .9em;
`;
const medium = (circle) => `
  ${
    circle
      ? 'width: 2rem; height: 2rem; line-height: 1.95rem;'
      : 'padding: 6px 16px;'
  }
  font-size: .95em;
`;
const large = (circle) => `
  ${
    circle
      ? 'width: 2.5rem; height: 2.5rem; line-height: 2.45rem;'
      : 'padding: 8px 20px;'
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
  color: #f9f9f9;
  background-color: ${getBgColor};
  border-radius: ${getRadius};
  overflow: hidden;
`;
