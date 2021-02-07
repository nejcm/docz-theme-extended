import {Link, useConfig} from 'docz';
import {get} from 'lodash/fp';
import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-timeago';
import usePrevNext from '../../hooks/usePrevNext';
import {Container, Navigation, Updated} from './custom-styles';

const Footer = ({menus, updated}) => {
  const {
    menuDisplayName = {},
    themeConfig: {footer: {navigation = true} = {}},
  } = useConfig();
  const enabled = navigation || updated;
  const {prev, next} = usePrevNext(enabled ? menus : undefined);

  if (!enabled) {
    return null;
  }

  const buildPath = (path) => {
    if (!path || !path.length) return null;
    return path.map((i) => get(i, menuDisplayName) || i).join(' / ');
  };

  return (
    <Container>
      {navigation && (prev || next) ? (
        <Navigation className="footer-nav">
          <div className="row">
            {prev ? (
              <div>
                <Link
                  to={prev.item.route}
                  href={prev.item.route}
                  className="prev"
                >
                  <div className="icon">
                    <span>‹</span>
                  </div>
                  <div>
                    <div className="path">{buildPath(prev.path)}</div>
                    <div className="name">
                      {get(prev.item.name, menuDisplayName) || prev.item.name}
                    </div>
                  </div>
                </Link>
              </div>
            ) : null}
            {next ? (
              <div>
                <Link
                  to={next.item.route}
                  href={next.item.route}
                  className="next"
                >
                  <div>
                    <div className="path">{buildPath(next.path)}</div>
                    <div className="name">
                      {get(next.item.name, menuDisplayName) || next.item.name}
                    </div>
                  </div>
                  <div className="icon">
                    <span>›</span>
                  </div>
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
