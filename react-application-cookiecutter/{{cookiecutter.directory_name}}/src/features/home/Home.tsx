import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import appPages from '../../appPages';

const Home: FunctionComponent = () => {
  const items = Array.from(Array(5).keys()).map(i => i + 1);
  return(
    <div>
      <h1>Home page</h1>
      <ul>
        {
          items
          .map(i => {
            return (
              <li key={i}>
                <Link to={`${appPages.person}/${i}`}>Person {i}</Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Home;
