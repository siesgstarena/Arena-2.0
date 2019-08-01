import React from 'react';
import { Body1, Body2 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './BlogCard.scss';

const BlogCard = ({
  tags, id, date, name, timeToRead, author, updated,
}) => {
  const tagsArray = tags.map(tag => (
    <Link key={tag} to={`/search?q=${tag}`} className="pointer">
      <span className="ba dib br4 pa1 f6 black-60 mr2">
        {tag}
      </span>
    </Link>
  ));

  return (
    <div key={id} className="ma0 br4 mb3 b--purple ba pa3 card">
      <Body2 className="fr gray">
        {date}
        &nbsp;&nbsp;.&nbsp;&nbsp;
        {timeToRead}
      </Body2>
      <Link to={`/blog/${id}`} className="no-underline black">
        <Body1 className="">
          {name}
        </Body1>
      </Link>
      <Body1 className="">
        {tagsArray}
      </Body1>
      <Body2 className="fr gray mt0">
        {updated}
      </Body2>
      <Link to={`/profile/${id}`} className="no-underline black">
        <Body2 className="black-80 mb1">
          {author}
        </Body2>
      </Link>
    </div>
  );
};

BlogCard.propTypes = {
  tags: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
};

export default BlogCard;
