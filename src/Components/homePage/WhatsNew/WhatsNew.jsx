import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Headline5, Headline6, Body2, Body1 } from '@material/react-typography';
import Card from '@material/react-card';
import MaterialIcon from '@material/react-material-icon';
import PropTypes from 'prop-types';
import './WhatsNew.scss';
import SomethingWentWrong from '../../common/SomethingWentWrong';
import HomePage from '../../../Contexts/HomePage';

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6200ee"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-external-link"
    {...props}
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path d="M15 3L21 3 21 9" />
    <path d="M10 14L21 3" />
  </svg>
);

const TitleHeader = ({ title, children, where }) => (
  <div className="title">
    <Headline5 className="title-header">
      {title}
      {children}
    </Headline5>
    <Link to={`/${where}/`}>
      <SvgComponent />
    </Link>
  </div>
);

TitleHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  where: PropTypes.string,
};

const WhatsNew = () => {
  const {
    TrendingError: error,
    TrendingLatestInfo: latestInfo,
    TrendingTrendingInfo: trendingInfo,
  } = useContext(HomePage);
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  return (
    <Card className="card">
      <div className="WnContainer">
        <div className="WnContainer-each">
          <TitleHeader title="Latest" where="contests">
            <MaterialIcon icon="fiber_new" className="blink ml2" style={{ color: '#6200ee' }} />
          </TitleHeader>
          {latestInfo && latestInfo.current && (
            <>
              {latestInfo.current.map((latest) => (
                <div className="WnContainer-each-content" key={latest.name}>
                  <Link className="WnContainer-each-content-link" to={latest.contestLink}>
                    <Headline6 className="WnContainer-each-content-header">{latest.name}</Headline6>
                  </Link>
                  <Body2 className="WnContainer-each-content-body">{`Ends in ${latest.endsIn}`}</Body2>
                </div>
              ))}
            </>
          )}
          {latestInfo && latestInfo.upcoming && (
            <>
              {latestInfo.upcoming.map((latest) => (
                <div className="WnContainer-each-content" key={latest.name}>
                  <Link className="WnContainer-each-content-link" to={latest.contestLink}>
                    <Headline6 className="WnContainer-each-content-header">{latest.name}</Headline6>
                  </Link>
                  <Body2 className="WnContainer-each-content-body">{`Starts in ${latest.endsIn}`}</Body2>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="divider" />
        <div className="WnContainer-each">
          {trendingInfo ? (
            <>
              <TitleHeader title="Trendings" where="blogs">
                <img
                  alt="fire"
                  className="blink ml2"
                  src="https://img.icons8.com/emoji/24/000000/fire.png"
                />
              </TitleHeader>
              {trendingInfo.map((trend) => (
                <div key={trend.name} className="WnContainer-each-content">
                  <Link to={trend.contestLink} className="WnContainer-each-content-link">
                    <Headline6 className="WnContainer-each-content-header">{trend.name}</Headline6>
                  </Link>
                  <Body1 className="WnContainer-each-content-body">{trend.endsIn}</Body1>
                  <div className="divider-small" />
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

export default WhatsNew;
