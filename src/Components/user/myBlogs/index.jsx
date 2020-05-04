import React, { useState, useContext } from 'react';
import { Headline6 } from '@material/react-typography';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../common/Spinner/index';
import { GET_BLOGS_BY_USER } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import BlogCard from '../../drawer/blogs/BlogCard/BlogCard';
import useActivePageState from '../../../customHooks/useAcitvePageState';
import CustomSnackbar from '../../common/Snackbar/index';
import AuthContext from '../../../Contexts/AuthContext';
import NoBlogs from './NoBlogs';

const MyBlogsContainer = () => {
  const limit = 10;
  const { authState } = useContext(AuthContext);
  const activePageNumber = useActivePageState();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const {
    loading, error, data,
  } = useQuery(GET_BLOGS_BY_USER, {
    variables: { limit, skip: ((activePageNumber - 1) * limit), id: authState.user.userId },
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.blogByUser) {
    const { blogs } = data.blogByUser;

    return (
      <div className="mw7 center pa2 pt3">
        <Headline6 className="ma0 purple tc mt2 mb3">{`${authState.user.name.trim()}'s blogs`}</Headline6>
        {
          blogs.length !== 0
            ? (
              <div>
                {
                  blogs.map(blog => (
                    <BlogCard
                      key={blog._id}
                      tags={blog.tags}
                      id={blog._id}
                      author={authState.user.name}
                      authorId={authState.user.userId}
                      createdAt={blog.createdAt}
                      updatedAt={blog.updatedAt}
                      timeToRead={blog.timeToRead}
                      title={blog.title}
                      ratings={blog.userId.ratings}
                      setSnackbarMessage={setSnackbarMessage}
                    />
                  ))
                }
                <CustomSnackbar
                  setSnackbarMessage={setSnackbarMessage}
                  snackbarMessage={snackbarMessage}
                />
                <div className="pt3">
                  <PageCountDisplayer
                    pageCount={data.blogByUser.pages}
                    activePageNumber={activePageNumber}
                  />
                </div>
              </div>
            )
            : <NoBlogs showCreateButton />
        }

      </div>
    );
  }
  if (isSessionExpired(data.blogByUser)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default MyBlogsContainer;
