import React from 'react';
import Image from '../image';

export default () => (
  <React.Fragment>
    <article class="page__content__section flex">
      <figure class="section__image">
        <Image img="scrippsRanchHigh" alt="Scripps Ranch High" />
      </figure>
      <div>
      Scripps Ranch High 
      <div class="section__body">
      AP computer science - (A) - (5 *Ap score)
      </div>
      </div>
    </article>
    <article class="page__content__section flex">
      <figure class="section__image">
        <Image img="mesaCollege" alt="Mesa College" />
      </figure>
      <div>
      Mesa College
      <div class="section__body">
      Java 190 - (In Progress)
      </div>
      </div>
    </article>
  </React.Fragment> 
);
