import React from 'react';
import { Link } from 'react-router-dom';
import { Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';
import Pill from '../../common/Pill';
import {
  userColor, getDate, getMonth, getYear,
} from '../../../commonFunctions';

const tagsArray = tags => (tags.map(tag => (
  <Link key={tag} to={`/search?q=${tag}`} className="pointer dim mr2">
    <Pill content={tag} />
  </Link>
)));

const PostResults = ({ postArray }) => (
  <div className="mt3">
    <Headline6 className="bb b--purple purple" style={{ margin: '0em' }}>Posts</Headline6>
    {postArray.map(
      (post) => {
        const {
          _id: postId, title: postName, tags: postTags, userId: postAuthor,
          createdAt: postDate, timeToRead,
        } = post;
        const { name, ratings, _id: userId } = postAuthor;
        return (
          <div key={postName} className="mt3 ba b--light-gray shadow-3 br3 pa3">
            <Headline6 style={{ margin: '0em 0em 0.4em 0em' }}>
              <Link
                to={`/blogs/${postId}`}
                className="pointer dim no-underline mid-gray"
              >
                {postName}
              </Link>
            </Headline6>
            {tagsArray(postTags)}
            <div className="mt2">
              <Link
                style={{ color: userColor(ratings, userId) }}
                to={`/profile/${userId}`}
                className="pointer dim no-underline"
              >
                {name}
              </Link>
              <div className="flex mt2 justify-between">
                <span>{`${getDate(postDate)} ${getMonth(postDate)}, ${getYear(postDate)}` }</span>
                <span>{`${timeToRead} min read`}</span>
              </div>
            </div>
          </div>
        );
      },
    )}
  </div>
);

PostResults.propTypes = {
  postArray: PropTypes.array.isRequired,
};
export default PostResults;
