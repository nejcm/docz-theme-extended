/** @jsx jsx */
import { Link, useConfig } from 'docz';
import * as styles from 'gatsby-theme-docz/src/components/Logo/styles';
import { Flex, jsx } from 'theme-ui';
import { Image } from './custom-styles';

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

export const Logo = () => {
  const config = useConfig();
  const { width = '100%', src } = config.themeConfig.logo || {};
  const base = (config.base || '').replace(/^\/|\/$/g, '');
  const imageSrc = activeEnv !== 'development' ? `/${base}/${src}` : src;

  return (
    <div sx={{ ...styles.logo, flex: '1 1 auto' }} data-testid="logo">
      <Link to="/" sx={styles.link}>
        <Flex
          sx={{ alignItems: 'center', flexDirection: 'row', lineHeight: 1.2 }}
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
          <span>{config.title}</span>
        </Flex>
      </Link>
    </div>
  );
};
