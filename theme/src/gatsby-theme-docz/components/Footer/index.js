import {Link, useConfig} from 'docz';
import {get} from 'lodash/fp';
import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-timeago';
import {Flex} from 'theme-ui';
import usePrevNext from '../../hooks/usePrevNext';
import {Container, Navigation, Updated} from './custom-styles';

const Footer = ({menus, updated}) => {
  const {
    menuDisplayName = {},
    themeConfig: {footer: {navigation = true} = {}},
  } = useConfig();
  const {prev, next} = usePrevNext(menus);

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
                    sx={{justifyContent: 'space-between', alignItems: 'center'}}
                  >
                    <div className="icon">
                      <span>‹</span>
                    </div>
                    <div>
                      <div className="menu">
                        {get(prev.menu, menuDisplayName) || prev.menu}
                      </div>
                      <div className="name">
                        {get(prev.name, menuDisplayName) || prev.name}
                      </div>
                    </div>
                  </Flex>
                </Link>
              </div>
            ) : null}
            {next ? (
              <div>
                <Link to={next.route} href={next.route} className="next">
                  <Flex
                    sx={{justifyContent: 'space-between', alignItems: 'center'}}
                  >
                    <div>
                      <div className="menu">
                        {get(next.menu, menuDisplayName) || next.menu}
                      </div>
                      <div className="name">
                        {get(next.name, menuDisplayName) || next.name}
                      </div>
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
  menus: PropTypes.object,
  currentDoc: PropTypes.object,
  updated: PropTypes.string,
};

export default Footer;
