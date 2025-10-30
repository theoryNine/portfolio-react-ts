import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import ShareSS from '../images/sharess.png';

const Seo = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={data.site.siteMetadata.title}
    >
      <title>{title}</title>
      <meta
        name='description'
        content={data.site.siteMetadata.description}
      />
      <meta property='og:title' content={data.site.siteMetadata.title} />
      <meta property='og:image' content={ShareSS} />
      <meta property='og:description' content='Senior Web Engineer'/>
      <meta property='og:url' content='https://www.anselcolvin.com' />
    </Helmet>
  );
};

export default Seo;