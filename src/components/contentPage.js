import React from 'react';
import Loadable from 'react-loadable';

// Set up our routes
const About = Loadable({
  loader: () => import('../components/pages/about'),
  loading() {
      return <div>Loading...</div>
  }
});

const Education = Loadable({
  loader: () => import('../components/pages/education'),
  loading() {
      return <div>Loading...</div>
  }
});

const Works = Loadable({
  loader: () => import('../components/pages/works'),
  loading() {
      return <div>Loading...</div>
  }
});

const NotFound = () => (
  <React.Fragment>
    Page Not Found... 
  </React.Fragment>
)

/**
 * Proxy determines which page we need to load up
 * Proxy determines if the page exist or not
 */
const pages = (route, page) => ({
  about: <About class="main__grid__page__content" page={page}/>,
  works: <Works class="main__grid__page__content" page={page}/>,
  education: <Education class="main__grid__page__content" page={page}/>
}[route]);

const handler = {
  apply: (pages, context, args) => {
    const routePages = { about: 2, works: 1, education: 1 }[args[0]];
    const searchedPage = pages.apply(context, args);
    return searchedPage && args[1] <= routePages && args[1] > 0 ? searchedPage : <NotFound class="main__grid__page__content" />;
  }
}

const PageProxy = new Proxy(pages, handler);

export default (props) => (
  <React.Fragment>
    <div class="page__content__header" >
      <span>{props.route}</span>
      <span class="page__content__header__page">{props.page}/{props.pages}</span>
    </div>
    {PageProxy(props.route, props.page)}
  </React.Fragment>
)
