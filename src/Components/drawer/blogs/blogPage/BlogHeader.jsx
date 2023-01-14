import React from 'react';
import { toDate, format } from 'date-fns/esm';
import { Link } from 'react-router-dom';
import { Headline4, Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';
import Pill from '../../../common/Pill/index';
import { userColor } from '../../../../utils/commonFunctions';

const tagsArray = (tags) =>
  tags.map((tag) => (
    <Link key={tag} to={`/search?q=${tag}`} className="pointer dim mr2">
      <Pill content={tag} />
    </Link>
  ));

const BlogHeader = ({
  author,
  authorId,
  title,
  lastEdited,
  tags,
  postedOn,
  timeToRead,
  authorRating,
}) => {
  const createdDate = format(toDate(Number(postedOn)), 'd MMM yyyy, h:mm aa');
  const editedDate = format(toDate(Number(lastEdited)), 'd MMM yyyy, h:mm aa');
  return (
    <div
      className="flex flex-column ba b--transparent br--top br4"
      style={{ alignItems: 'center' }}
    >
      <Headline4
        className="pa1 purple ma0 mt2"
        style={{ textAlign: 'center', fontWeight: 'bolder' }}
      >
        {title}
      </Headline4>
      <div className="flex pa3 items-center ba b--transparent br4 mb3">
        <img
          src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp"
          alt="profile"
          style={{ height: '60px', width: '60px', borderColor: userColor(authorRating, authorId) }}
          className="ba br-100 bw1 pa1"
        />
        <div className="flex flex-column ml2">
          <Headline6 style={{ margin: '0px 10px 0px 10px', fontSize: '1em' }}>
            <Link
              className="no-underline dim pointer"
              to={`/profile/${authorId}`}
              style={{ color: userColor(authorRating, authorId) }}
            >
              {author}
            </Link>
          </Headline6>
          <span className="" style={{ margin: '0px 10px 4px 10px' }}>
            {`Created: ${createdDate}`}
            {/* ${getDate(postedOn)} ${getMonth(postedOn)} ${getYear(
              postedOn
            )}, ${convertTime(postedOn)}`} */}
          </span>
          <span className="" style={{ margin: '0px 10px 4px 10px' }}>
            {`Edited: ${editedDate}`}
            {/* ${getDate(lastEdited)} ${getMonth(lastEdited)} ${getYear(
              lastEdited
            )}, ${convertTime(lastEdited)} */}
          </span>
          <span style={{ margin: '2px 10px' }}>{`${timeToRead} min read`}</span>
        </div>
      </div>
      <span className="mb3">{tagsArray(tags)}</span>
    </div>
  );
};

BlogHeader.propTypes = {
  author: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lastEdited: PropTypes.string.isRequired,
  authorRating: PropTypes.number.isRequired,
  timeToRead: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  postedOn: PropTypes.string.isRequired,
};

export default BlogHeader;
