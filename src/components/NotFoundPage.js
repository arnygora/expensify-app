import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
      <iframe width="1349" height="480"
              src="https://www.youtube.com/embed/Y69nZWqsCy0?list=PLDZwCtHEAIik_REpA_CxKAKK2zD-vERo6"
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
      >
      </iframe>
  </div>
);

export default NotFoundPage;
