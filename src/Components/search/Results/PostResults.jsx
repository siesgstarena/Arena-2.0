import React from 'react';
import { Link } from 'react-router-dom';
import { Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';
import Pill from '../../common/Pill';

const tagsArray = tags => (tags.map(tag => (
  <Link key={tag} to={`/search?q=${tag}`} className="pointer dim mr2">
    <Pill content={tag} />
  </Link>
)));

const PostResults = ({ postArray }) => (
  <div className="mt3">
    <Headline6 className="bb b--purple " style={{ margin: '0em' }}>Posts</Headline6>
    {postArray.map(
      (post) => {
        const {
          postId, postName, postTags, postAuthor, postDate, timeToRead,
        } = post;
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
              <span className="mb1">{postAuthor}</span>
              <div className="flex mt2 justify-between">
                <span>{postDate}</span>
                <span>{`${timeToRead} read`}</span>
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
