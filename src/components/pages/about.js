import React from 'react';
import Image from '../image';
import AngularLogo from'../icons/angular.svg';
import VueLogo from '../icons/vuejs.svg';
import SassLogo from '../icons/sass.svg';
import NodeJsLogo from '../icons/node-js.svg';
import ReactLogo from '../icons/react.svg';
import JavaLogo from '../icons/java.svg';
import MongoDbLogo from '../icons/mongodb.svg';
import MysqlLogo from '../icons/mysql.svg';
import RethinkDbLogo from '../icons/rethinkdb.svg';
import RustLogo from '../icons/rust.svg';

const pages = {
    1: <React.Fragment>
      <section class="page__content__section flex ex--pad">
        <figure class="section__image">
          <Image img="profile" alt="Profile" />
        </figure>
        <div>
          Austin Nguyen
          <div style={{marginTop: '1vh'}} class="section__body">
            Hello, my name is Austin Nguyen. I am a first year college student who enjoys programming, and therefore plans to majoring in computer science.<br/><br/>
            This portfolio serves as a showcase of my favorite projects as well as my progress on my track as a developer.
          </div>
        </div>
      </section>
      <section style={{paddingBottom: '3vmin'}} class="page__content__section ex--pad">
        Some Tools I've Used
        <div style={{marginTop: '1vh'}} class="section__grid">
          <figure>
            <img src={VueLogo} class = "icon" alt="VueJs"/>
            <figcaption>VueJs</figcaption>
          </figure>
          <figure>
            <img src={AngularLogo} class = "icon" alt="AngularJs"/>
            <figcaption>AngularJs</figcaption>
          </figure>
          <figure>
            <img src={SassLogo} class = "icon" alt="Sass"/>
            <figcaption>Sass</figcaption>
          </figure>
          <figure>
            <img src={ReactLogo} class = "icon" alt="ReactJs"/>
            <figcaption>ReactJs</figcaption>
          </figure>
          <figure>
            <img src={RustLogo} class = "icon" alt="Rust"/>
            <figcaption>Rust</figcaption>
          </figure>
          <figure>
            <img src={NodeJsLogo} class = "icon" alt="NodeJs"/>
            <figcaption>NodeJs</figcaption>
          </figure>
          <figure>
            <img src={JavaLogo} class = "icon" alt="Java"/>
            <figcaption>Java</figcaption>
          </figure>
          <figure>
            <img src={MongoDbLogo} class = "icon" alt="MongoDb"/>
            <figcaption>MongoDb</figcaption>
          </figure>
          <figure>
            <img src={MysqlLogo} class = "icon" alt="Mysql"/>
            <figcaption>Mysql</figcaption>
          </figure>
          <figure>
            <img src={RethinkDbLogo} class = "icon" alt="RethinkDb"/>
            <figcaption>RethinkDb</figcaption>
          </figure>
        </div>
      </section>
    </React.Fragment>,
    2: <React.Fragment>
      <section class="page__content__section">
        Objective
        <div style={{marginTop: '1vh'}} class="section__body">
          Regarding the topic of computer science, there is seemingly limitless amount of information online.<br/><br/>
          However just like how information can be a catalyst, it's abundance can also be a crux.
          Due to being self-taught (for the most part), there were many practices and tools I skipped over until I began doing group work (ex. git).
          Like being part of group projects has expanded my horizons, I also believe that industry experience would also be benefical for my growth as developer.<br/><br/>
        </div>
        I am current looking for an intership or entry level position.
      </section>
    </React.Fragment>
};

export default (props) => {
  return (
    <React.Fragment>
      {pages[props.page]}
    </React.Fragment>
  );
}
