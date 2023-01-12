import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_PINNED_BLOGS } from '../graphql/queries';

const usePinnedBlogs = () => {
  const [blogData, setBlogData] = React.useState([]);
  const { loading, error, data } = useQuery(GET_PINNED_BLOGS, {
    variables: {
      limit: 6,
    },
  });
  React.useEffect(() => {
    if (data && data.pinnedBlogs) {
      const pinnedBlogsData = data.pinnedBlogs.map((blog) => ({
        author: blog.author.name,
        title: blog.title,
        date: new Date(blog.createdAt * 1).toLocaleString().split(',')[0],
        link: `/blogs/${blog._id}`,
      }));
      setBlogData(pinnedBlogsData);
    }
  }, [data]);
  return { loading, error, blogData };
};

export default usePinnedBlogs;
