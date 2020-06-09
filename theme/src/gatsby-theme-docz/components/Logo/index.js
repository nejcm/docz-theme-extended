/** @jsx jsx */
import {Link, useConfig} from 'docz';
import * as styles from 'gatsby-theme-docz/src/components/Logo/styles';
import {Flex, jsx} from 'theme-ui';
import {isUrl} from '../../../helpers';
import {Image} from './custom-styles';

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

export const Logo = () => {
  const config = useConfig();
  const {width = '100%', src} = config.themeConfig.logo || {};
  const base = (config.base || '').replace(/^\/|\/$/g, '');
  const imageSrc =
    activeEnv !== 'development' && !isUrl(src) ? `/${base}/${src}` : src;
  const len = (config.title || '').length;

  return (
    <div sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        <Flex
          sx={{alignItems: 'center', flexDirection: 'row', lineHeight: 1.2}}
        >
          {src ? (
            <Image
              className="logo"
              src={imageSrc}
              width={width}
              height="auto"
              alt={config.title}
            />
          ) : null}
          <span className={len > 12 && src ? 'h-sm' : ''}>{config.title}</span>
        </Flex>
      </Link>
    </div>
  );
};
