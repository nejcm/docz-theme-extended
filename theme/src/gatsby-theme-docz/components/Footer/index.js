import { Link, useCurrentDoc, useMenus } from 'docz';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import TimeAgo from 'react-timeago';
import { Flex } from 'theme-ui';
import { Container, Navigation, Updated } from './custom-styles';

const Footer = ({ navigation, updated }) => {
  const menus = useMenus();
  const currentDoc = useCurrentDoc();
  const { prev, next } = useMemo(() => {
    // flatten menus
    const flattened = menus.reduce((acc, obj) => obj.menu
      ? [...acc, ...obj.menu.map((item) => ({ ...item, menu: obj.name }))]
      : [...acc, obj], []);
    const currentIndex = flattened.findIndex((item) => item.slug === currentDoc.slug);
    const p = currentIndex > 0 ? flattened[currentIndex - 1] : null;
    const n = currentIndex < (flattened.length - 1) ? flattened[currentIndex + 1] : null;
    return { prev: p, next: n };
  }, [currentDoc.slug, menus]);

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
  menus: PropTypes.arrayOf(PropTypes.object),
  currentDoc: PropTypes.object,
  navigation: PropTypes.bool,
  updated: PropTypes.string,
};

export default Footer;
