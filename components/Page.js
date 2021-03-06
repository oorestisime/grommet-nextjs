import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Grommet, Box } from 'grommet';
import { ResponsiveContext } from 'grommet/contexts';
import Header from './Header';
import Footer from './Footer';
import connect from '../redux';

import { initGA, logPageView } from './utils/analytics';

class Page extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    const {
      children, title: pageTitle, description, nav, footer, themes: { themes, selected: theme },
    } = this.props;
    const keywords = ['grommet', 'grommet 2', 'react', 'next-js', 'next.js', 'ui library'];
    if (pageTitle) {
      keywords.push(pageTitle);
    }
    return (
      <React.Fragment>
        <Head>
          {pageTitle && (
            <title>{`Grommet - ${pageTitle}`}</title>
            )
          }
          {typeof description === 'string' && (
            <meta name='description' content={description} />
            )
          }
          <meta name='keywords' content={keywords.join(',')} />
        </Head>
        <Grommet theme={themes[theme] || {}} style={{ height: 'auto', minHeight: '100vh' }}>
          <ResponsiveContext.Consumer >
            {size => (
              <Box style={{ height: 'auto', minHeight: '100vh' }}>
                {nav && <Header title={pageTitle} size={size} />}
                <Box flex={true}>
                  {children}
                </Box>
                {footer && <Footer /> }
              </Box>
              )}
          </ResponsiveContext.Consumer>
        </Grommet>
      </React.Fragment>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  nav: PropTypes.bool,
  footer: PropTypes.bool,
};

Page.defaultProps = {
  description: undefined,
  nav: true,
  footer: true,
};


const mapStateToProps = state => ({
  themes: state.themes,
});


export default withRouter(connect(mapStateToProps)(Page));

