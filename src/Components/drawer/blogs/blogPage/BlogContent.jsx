import React from 'react';
import PropTypes from 'prop-types';
import Viewer from '../../../common/MarkdownEditor/Viewer';
import BlogFooter from './BlogFooter/BlogFooter';
import BlogHeader from './BlogHeader';

const BlogContent = ({ blog }) => {
  const {
    content, userId, createdAt: postedOn, updatedAt: lastEdited, title, tags, timeToRead,
  } = blog;
  const { name: author, _id: authorId, ratings: authorRating } = userId;
  return (
    <div className="pa2 ba b--transparent br4">
      <BlogHeader
        author={author}
        authorId={authorId}
        title={title}
        authorRating={authorRating}
        lastEdited={lastEdited}
        timeToRead={timeToRead}
        tags={tags}
        postedOn={postedOn}
      />
      <div className="">
        <Viewer value={content} />
      </div>
      <BlogFooter upvotes={blog.upvote} downvotes={blog.downvote} />
    </div>
  );
};

BlogContent.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogContent;
