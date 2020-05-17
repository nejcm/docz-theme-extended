/** @jsx jsx */
import styled from '@emotion/styled';
import { Link, useConfig } from 'docz';
import * as styles from 'gatsby-theme-docz/src/components/Logo/styles';
import { Flex, jsx } from 'theme-ui';

const Image = styled.img`
  width: auto;
  height: auto;
  max-width: ${({ width }) => width};
  max-height: 50px;
  margin-right: 1rem;

  ~ span {
    word-break: break-word;
    margin-right: 1.25rem;
  }

  @media screen and (max-width: 600px) {
    ~ span {
      font-size: .85em;
    }
  }
  @media screen and (max-width: 400px) {
    margin-right: .75rem;
    ~ span {
      font-size: .75em;
      margin-right: 0.75rem;
    }
  }
`;

export const Logo = () => {
  const config = useConfig();
  const { width = '100%', src } = config.themeConfig.logo || {};

  return (
    <div sx={{ ...styles.logo, flex: '1 1 auto' }} data-testid="logo">
      <Link to="/" sx={styles.link}>
        <Flex sx={{ alignItems: "center", flexDirection: "row", lineHeight: 1.2 }}>
          {src ? <Image className="logo" src={src} width={width} height="auto" alt={config.title} /> : null}
          <span>{config.title}</span>
        </Flex>
      </Link>
    </div>
  )
}