import React from 'react';
import Link from 'next/link';

import '../../scss/components/tours/_tours.scss';

const Tour = ({ name, imageCover, slug }) => {
  return (
    <Link href='/tour/[slug]' as={`/tour/${slug}`}>
      <a>
        <div className='Tour'>
          <img src={`/static/img/tours/${imageCover}`} alt={`${name}`} />
          <h2> {name} </h2>
        </div>
      </a>
    </Link>
  );
};

export default Tour;

{
  /* <div onClick={goTo} className='Tour'>


<img src={`/static/img/tours/${imageCover}`} alt={`${name}`} />
<h2>{name}</h2>
<p>{imageCover}</p>
</div> */
}
