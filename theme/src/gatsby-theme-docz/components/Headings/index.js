/** @jsx jsx */
import PropTypes from 'prop-types';
import {jsx} from 'theme-ui';
import {Link} from './custom-styles';

const heading = (Tag) => {
  const Component = (props) => {
    return !!props.id ? (
      <Tag {...props}>
        <Link
          href={`#${props.id}`}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            ':hover': {
              textDecoration: 'underline',
            },
          }}
        >
          <span className="icon">
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              version="1.1"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  fillRule="evenodd"
                  d="M287.4,373.1H284c-18.7,0.1-37.3-3.5-54.6-10.6c-3.2-1.3-6.9-0.6-9.3,1.9l-64.4,64.5c-20,20-52.4,20-72.4,0
      c-20-20-20-52.4,0-72.4l109-108.9c20-20,52.4-20,72.4,0c13.5,12.7,34.5,12.7,48,0c5.8-5.8,9.3-13.5,9.9-21.7
      c0.6-9.8-3-19.3-9.9-26.3c-6.1-6.1-12.8-11.5-20.1-16.1c-19.2-12.3-41.6-18.9-64.4-18.9c-31.7-0.1-62.1,12.5-84.5,35L34.9,308.2
      C12.6,330.6,0.1,360.9,0,392.5c0,66,53.4,119.5,119.4,119.5c31.6,0.1,62-12.4,84.4-34.8l89.6-89.6c1.6-1.6,2.5-3.8,2.5-6.1
      C295.9,376.9,292.1,373.1,287.4,373.1z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M477.1,35c-46.7-46.7-122.3-46.7-169,0l-89.5,89.4c-2.5,2.5-3.2,6.2-1.8,9.4c1.4,3.2,4.5,5.3,8,5.2h3.2
      c18.7,0,37.2,3.6,54.5,10.7c3.2,1.3,6.9,0.6,9.3-1.9l64.3-64.2c20-20,52.4-20,72.4,0c20,20,20,52.4,0,72.4l-80,80l-0.7,0.8
      l-28,27.8c-20,20-52.4,20-72.4,0c-13.5-12.7-34.5-12.7-48,0c-5.8,5.8-9.3,13.6-9.9,21.8c-0.6,9.8,3,19.3,9.9,26.3
      c9.9,9.9,21.4,18,34.1,23.9c1.8,0.9,3.6,1.5,5.4,2.3c1.8,0.8,3.7,1.4,5.5,2c1.8,0.7,3.7,1.3,5.5,1.8l5,1.4
      c3.4,0.9,6.8,1.5,10.3,2.1c4.2,0.6,8.5,1,12.7,1.2h6h0.5l5.1-0.6c1.9-0.1,3.8-0.5,6.1-0.5h2.9l5.9-0.9l2.7-0.5l4.9-1h0.9
      c21-5.3,40.1-16.1,55.4-31.4L477.1,204C523.7,157.3,523.7,81.7,477.1,35z"
                ></path>
              </g>
            </svg>
          </span>
          {props.children}
        </Link>
      </Tag>
    ) : (
      <Tag {...props} />
    );
  };

  Component.displayName = Tag;
  Component.propTypes = {
    id: PropTypes.any,
    children: PropTypes.node,
  };
  return Component;
};

export const h2 = heading('h2');
export const h3 = heading('h3');
export const h4 = heading('h4');
export const h5 = heading('h5');
export const h6 = heading('h6');
