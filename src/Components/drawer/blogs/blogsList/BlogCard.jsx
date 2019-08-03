import React from 'react';
import { Body1, Body2, Headline5 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './BlogCard.scss';
import { Grid, Cell, Row } from '@material/react-layout-grid';

const BlogCard = ({
  tags, id, date, name, timeToRead, author, updated,
}) => {
  const tagsArray = tags.map(tag => (
    <Link key={tag} to={`/search?q=${tag}`} className="pointer">
      <span className="ba dib br4 f6 black-60 mr2 mb1" style={{ padding: '3px' }}>
        {tag}
      </span>
    </Link>
  ));

  return (
    <div className="ma0 mb4" style={{ border: '1px solid purple', borderRadius: '20px' }} key={id}>
      <div
        className="pa1"
        style={{
          borderBottom: '1px solid #D3D3D3',
        }}
      >
        <Link to={`/blog/${id}`} className="no-underline black">
          <Headline5 style={{ color: 'purple' }} className="ma0 tc ma2">
            {name}
          </Headline5>
        </Link>
      </div>
      <Grid className="" style={{ padding: 0, margin: '0px 20px 0px 20px' }}>
        <Row>
          <Cell className="ma0 pa0" desktopColumns={6} tabletColumns={4} phoneColumns={2}>
            <Link to={`/profile/${id}`} className="no-underline black">
              <Body1 className="black mb1">
                {author}
              </Body1>
            </Link>
            <Body1 className="">
              {tagsArray}
            </Body1>
          </Cell>
          <Cell className="ma0 pa0" desktopColumns={6} tabletColumns={4} phoneColumns={2}>
            <Body2 className="gray text-alignment">
              Posted on:
              &nbsp;
              {date}
              <br />
              {updated}
              <br />
              {timeToRead}
            </Body2>
          </Cell>
        </Row>
      </Grid>
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
  updated: PropTypes.string,
};

BlogCard.defaultProps = {
  updated: '',
};

export default BlogCard;
