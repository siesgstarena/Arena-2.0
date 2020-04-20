import React from 'react';
import { Body1, Body2, Headline5 } from '@material/react-typography';
import PropTypes from 'prop-types';
import Card from '@material/react-card';
import { Grid, Cell, Row } from '@material/react-layout-grid';
import { Link } from 'react-router-dom';
import Pill from '../../../common/Pill/index';
import {
  convertDate, convertTime, userColor, differenceInTwoDates,
} from '../../../../commonFunctions';
import './BlogCard.scss';

const BlogCard = ({
  tags, id, createdAt, title, timeToRead, authorId, author, updatedAt, ratings,
}) => {
  const tagsArray = tags.map(tag => (
    <Link key={tag} to={`/search?q=${tag}`} className="pointer">
      <Pill content={tag} />
    </Link>
  ));

  const createdAtDate = convertDate(createdAt);
  const createdAtTime = convertTime(createdAt);
  const currentDateObject = new Date();
  let currentDateInMilliseconds = currentDateObject.getTime();
  currentDateInMilliseconds += (330000 * 60);
  const [convertedUpdatedAt, convertedUpdatedAtType] = differenceInTwoDates(
    currentDateInMilliseconds, updatedAt,
  );

  return (
    <Card className="ma0 mb4" style={{ borderRadius: '20px' }} key={id}>
      <div
        className="pa1"
        style={{
          background: '#F0E8FF',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }}
      >
        <Link to={`/blogs/${id}`} className="no-underline black">
          <Headline5 style={{ color: 'purple' }} className="ma0 tc ma2">
            {title}
          </Headline5>
        </Link>
      </div>
      <Grid className="" style={{ padding: 0, margin: '0px 20px 0px 20px' }}>
        <Row style={{ padding: '0px', margin: '0px' }}>
          <Cell className="ma0 pa0" style={{ padding: '0px', margin: '0px' }} desktopColumns={6} tabletColumns={4} phoneColumns={4}>
            <Link to={`/profile/${authorId}`} className="no-underline" style={{ color: userColor(ratings, authorId) }}>
              <Body1 className="mb1">
                {author}
              </Body1>
            </Link>
            <Body2 className="">
              {tagsArray}
            </Body2>
          </Cell>
          <Cell className="ma0 pa0" style={{ padding: '0px', margin: '0px' }} desktopColumns={6} tabletColumns={4} phoneColumns={4}>
            <Body2 className="gray text-alignment">
              Posted on:
              &nbsp;
              {createdAtDate}
              ,
              &nbsp;
              {createdAtTime}
              <br />
              Recent Activity:
              &nbsp;
              {convertedUpdatedAt}
              &nbsp;
              {convertedUpdatedAtType}
              &nbsp;
              ago
              <br />
              {timeToRead}
              &nbsp;
              min read
            </Body2>
          </Cell>
        </Row>
      </Grid>
    </Card>
  );
};

BlogCard.propTypes = {
  tags: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
};

export default BlogCard;
