import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Headline6, Headline5 } from '@material/react-typography';
import { Link } from 'react-router-dom';
import MaterialIcon from '@material/react-material-icon';
import './styles.scss';

const LearnCard = ({ each }) => {
  const [isOpen, setOpen] = useState(false);
  const displayClass = isOpen ? 'db' : 'dn';
  const toggleOpen = () => setOpen(!isOpen);
  return (
    <div className="learn-card">
      <div className="learn-card-header">
        <Headline5 className="ma0">{each.category}</Headline5>
        <MaterialIcon icon="keyboard_arrow_down" className="pointer" onClick={toggleOpen} />
      </div>
      <div className={displayClass}>
        <div className="learn-card-content">
          <div className="learn-card-content-each">
            <Headline6 className="ma0">Blogs</Headline6>
            {each.blogs.map((blog) => (
              <div className="" key={blog.title}>
                <Link to={blog.link} className="learn-card-content-each-link no-underline black">
                  <Headline6 className="ma0">{blog.title}</Headline6>
                  <span>{blog.author}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="learn-card-content-each">
            <Headline6 className="ma0">Problems</Headline6>
            {each.problems.map((problem) => (
              <div className="" key={problem.title}>
                <Link to={problem.link} className="learn-card-content-each-link no-underline black">
                  <Headline6 className="ma0">{problem.title}</Headline6>
                  <span>{problem.contest}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

LearnCard.propTypes = {
  each: PropTypes.object.isRequired,
};

export default LearnCard;
