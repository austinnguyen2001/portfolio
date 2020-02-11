import React, { createRef, useEffect, useState } from 'react';
import { Link, Router } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../components/layout.css';
import SEO from '../components/seo';
import ContentPage from '../components/contentPage';
import Swipe from 'react-easy-swipe';

const App = (props) => {
  // Set route, page, and pages variables
  let [page, route] = ['0', 'Not Found'];

  if (props.location.pathname === '/') 
    [page, route] = ['1', 'about'];
  else if (props.location.pathname.split(/[/]+/).length === 3) 
    [page, route] = props.location.pathname.split(/[/]+/).reverse();

  // For swipe
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // Get total pages based on route
  const pages = { about: 2, works: 1, education: 1 }[route];
  
  // References to animated elements
  const pageAnimation = createRef();

  // Animation to change page
  const changePage = () => {
    pageAnimation.current.animate(
      [
        { transform: 'rotate(0.65deg) translateY(0) translateX(0)' },
        { transform: 'rotate(30deg) translateY(150vh) translateX(10vw)' },
        { transform: 'rotate(0.65deg) translateY(0) translateX(0)' }
      ], 400
    );
  }

  // Upgraded link for page change animation + selected
  const NavLink = props => (
    <Link
      {...props}
      getProps={({ href }) => href.includes(route) ? { className: "selected" } : null}
      onClick={()=>changePage()}
    />
  );

  // Scroll Functions
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  });

  const handleScroll = (e) =>{
    if (e.deltaY > 0) editPage('inc');
    else editPage('dec');
  }

  const editPage = (arg) => {
    const abbr = { inc: 1, dec: -1 };

    const handler = {
      get: (obj, prop) => {
        return prop in obj ? obj[prop] + parseInt(page) : prop
      }
    };

    const getPageNumber = new Proxy(abbr, handler);

    if(1<=getPageNumber[arg]&getPageNumber[arg]<=pages) {
      props.navigate(`${route}/${getPageNumber[arg]}`);
      changePage();
    }
  }
  
  /*eslint-disable */
  const getNav = () => {
    return(
      <nav id="main__navigation">
        <div onClick={() => editPage('dec')} id="main__navigation__dec">^</div>
        {
          Array.from({ length: pages }, (v, i) => i + 1).map(index => {
            return(<span onClick={()=>editPage(index)} style = {index === Number(page) ? {'backgroundColor': 'white'} : {}} class="main__navigation__item" for={"page" + index}/>)
          })
        }
        <div onClick={() => editPage('inc')} id="main__navigation__inc">^</div>
      </nav>
    );
  }
  /*eslint-enable */

  const onSwipeMove = (position) => {
    setX(position.x);
    setY(position.y);
  }

  const checkSwipe = () => {
    const swipeVectors = [x, y]
    const biggerSwipe = swipeVectors.reduce((maxI, val, i, arr) => Math.abs(val) > Math.abs(arr[maxI]) ? i : maxI, 0);

    // Make sure its a swipe first
    if (Math.abs(swipeVectors[biggerSwipe]) > 40) {
      if (swipeVectors[biggerSwipe] < 0) editPage('inc');
      if (swipeVectors[biggerSwipe] > 0) editPage('dec');
    }
  }

  return (
    <Swipe id="app" onSwipeMove={onSwipeMove} onSwipeEnd={checkSwipe}>
        <SEO title={`${route.charAt(0).toUpperCase()}${route.slice(1)} ${page}/${pages}`} />
        <header id="header">
          <div>
            <aside id="note">
              <strong>Welcome to my portfolio</strong>
              <div style={{marginTop: '1vmin'}}>Email: austinnguyen01@gmail.com</div>
              <div>Phone: 714-497-5765</div>
            </aside>
            <section id="header__title">
              <div id="header__title__first">Austin</div>
              <div>
                <div id="header__title__last">Nguyen</div>
                <div id="header__title__number">01</div>
              </div>
            </section>
            <nav id="header__navigation">
              <NavLink to="about/1">About</NavLink>
              <NavLink to="works/1">Works</NavLink>
              <NavLink to="education/1">Education</NavLink>
            </nav>
          </div>
        </header>
        {getNav()}
        <section id="main__grid">
          <svg id="main__grid__folder--top" viewBox="0 0 985 25">
            <path fill="#f2d187" d="M0,0 L0,25 L 985,25 L 985,0 L0,25 Z"></path>
          </svg>
          <div id="main__grid__page--back">
            <section id="main__grid__page" ref={pageAnimation}>
              <TransitionGroup class="full">
                <CSSTransition
                  key={props.location.key}
                  classNames="delay"
                  timeout={200}
                  class="full"
                >
                  <Router>
                    {/* using * instead of path names for the animation*/}
                    <ContentPage path="*/*" page={page} route={route} pages={pages} />
                  </Router>
                </CSSTransition>
              </TransitionGroup>
            </section>
          </div>
          <svg id="main__grid__folder--right" viewBox="0 0 100 2000">
            <path fill="#F0C870" d="M0,0 L100,100 L 100,2000 L 0,2000 Z"></path>
          </svg>
        </section>
    </Swipe>
  );
}

export default App;
