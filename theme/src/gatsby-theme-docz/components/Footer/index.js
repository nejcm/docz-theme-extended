import { Link } from 'docz';
import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-timeago';
import { Flex } from 'theme-ui';
import { Container, Navigation, Updated } from './custom-styles';

const Footer = ({ navigation, updated, next, prev }) => {
  if (!navigation && !updated) {
    return null;
  }

  return (
    <Container>
      {navigation && (prev || next) ? (
        <Navigation className="footer-nav">
          <div className="row">
            {prev ? (
              <div>
                <Link to={prev.route} href={prev.route} className="prev">
                  <Flex
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <div className="icon">
                      <span>‹</span>
                    </div>
                    <div>
                      <div className="menu">{prev.menu}</div>
                      <div className="name">{prev.name}</div>
                    </div>
                  </Flex>
                </Link>
              </div>
            ) : null}
            {next ? (
              <div>
                <Link to={next.route} href={next.route} className="next">
                  <Flex
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <div>
                      <div className="menu">{next.menu}</div>
                      <div className="name">{next.name}</div>
                    </div>
                    <div className="icon">
                      <span>›</span>
                    </div>
                  </Flex>
                </Link>
              </div>
            ) : null}
          </div>
        </Navigation>
      ) : null}
      {updated ? (
        <Updated>
          Last updated <TimeAgo date={updated} />
        </Updated>
      ) : null}
    </Container>
  );
};

Footer.propTypes = {
  navigation: PropTypes.bool,
  updated: PropTypes.string,
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default Footer;
