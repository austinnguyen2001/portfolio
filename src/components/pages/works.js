import React from 'react';
import githubLogo from '../../images/github.svg';

export default () => (
  <React.Fragment>
    <article class="page__content__section">
      <div class="section__header">
        <span class="section__header__title">Portfolio</span> 
        <ul>
          <li>ReactJs</li> 
          <li>Graphql</li>
          <li>Javascript</li>
        </ul>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/austinnguyen2001/portfolio">
          <img class="section__header__github" src={githubLogo} alt="github" />
        </a>
      </div>
      <div class="section__body">
      My portfolio website which was created to showcase my work. 
      </div>
    </article>
    <article class="page__content__section">
      <div class="section__header">
        <span class="section__header__title">Csgo p2p</span> 
        <ul>
          <li>VueJs</li> 
          <li>NodeJs</li> 
          <li>Graphql</li>
        </ul>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/austinnguyen2001/csgop2p">
          <img class="section__header__github" src={githubLogo} alt="github" />
        </a>
      </div>
      <div class="section__body">
      Steam's escrow (or trade holds) has caused many cs:go related operations to downsize or even shutdown.
      In this project, I addressed this problem by creating a marketplace in which player to player transactions allowed for the bypass of the typical 14 day escrow hold.
      </div>
    </article>
    <article class="page__content__section">
      <div class="section__header">
        <span class="section__header__title">Sprockit.io</span> 
        <ul>
          <li>Rust</li> 
          <li>Wasm</li> 
          <li>VueJs</li>
        </ul>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mdaffin/sprockit.io">
          <img class="section__header__github" src={githubLogo} alt="github" />
        </a>
      </div>
      <div class="section__body">
      A Discord group project in which my teammates and I created a game for programmers. 
      It's played by solving mazes via programming in javascript—although wasm would allow for more.
      In this project, I did both the front-end and the back-end (although much of my Rust was peer programming).
      </div>
    </article>
    <article class="page__content__section">
      <div class="section__header">
        <span class="section__header__title">Discord</span> 
        <ul>
          <li>NodeJs</li> 
          <li>RethinkDb</li> 
          <li>Javascript</li>
        </ul>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/austinnguyen2001/DiscordBot">
          <img class="section__header__github" src={githubLogo} alt="github" />
        </a>
      </div>
        <div class="section__body">
        Discord has excelled in providing the right connections for its clientele—especially when it comes to Twitch.
        However, many users want to keep their information private. 
        In this project, I addressed this problem by creating a bot for streamers that allows their fans to privately connect their accounts (as well as other features such as giveaways).
        </div>
    </article>
  </React.Fragment> 
);
