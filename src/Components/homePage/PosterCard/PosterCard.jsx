import React, { Suspense } from 'react';
import { Headline5 } from '@material/react-typography';
import Card from '@material/react-card';
import './PosterCard.css';
import { Link } from 'react-router-dom';
import Loading from '../../common/Loading';
// import learn from './assets/learn.jpg';
// import work from './assets/work.jpg';
// import compete from './assets/compete.jpg';

const PosterCard = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Card
        className="center ma0 card"
        style={{ boxShadow: 'inset 0em -0.1em 0.3em 0.2em #eeeeee', borderRadius: '10px' }}
      >
        <div className="flex flex-column">
          <div
            className="card-container"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dh6iqxujx/image/upload/q_auto:eco,f_auto/v1590579030/Arena/learn_nyxmy3.jpg)`,
            }}
          >
            <Link to="/blogs/5b9ea5f17fa8aa001fe32e46" className="no-underline pointer">
              <Headline5 className="card-title">LEARN</Headline5>
            </Link>
          </div>
          <div
            className="card-container"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dh6iqxujx/image/upload/q_50/v1590323377/Arena/DSC_0379_t6pskg.jpg)`,
            }}
          >
            <Link to="/contests/" className="no-underline pointer">
              <Headline5 className="card-title">COMPETE</Headline5>
            </Link>
          </div>
          <div
            className="card-container"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dh6iqxujx/image/upload/q_50/v1590579047/Arena/work_f8gedk.jpg)`,
            }}
          >
            <a
              className="pointer no-underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://siesgstarena.github.io/"
            >
              <Headline5 className="card-title">WORK</Headline5>
            </a>
          </div>
        </div>
      </Card>
    </Suspense>
  );
};
export default PosterCard;
