import React, { useContext, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { Body1, Body2, Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { toDate, format, formatDistanceToNow } from 'date-fns';
import Card from '@material/react-card';
import Button from '@material/react-button';
import { Grid, Cell, Row } from '@material/react-layout-grid';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { DELETE_BLOG, CHANGE_BLOG_PIN_STATUS } from '../../../../graphql/mutations';
// import { GET_ALL_BLOGS } from '../../../../graphql/queries';
import AlertBox from '../../../common/AlertBox/index';
import Pill from '../../../common/Pill/index';
import { userColor } from '../../../../commonFunctions';
import AuthContext from '../../../../Contexts/AuthContext';
import './BlogCard.scss';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import useSentry from '../../../../customHooks/useSentry';
import { myBlogsLimit, allBlogsLimit } from '../../../../constants';
import { GET_BLOGS_BY_USER, GET_ALL_BLOGS } from '../../../../graphql/queries';

const BlogCard = ({
  isSuperuserRoute = false,
  tags,
  id,
  createdAt,
  title,
  timeToRead,
  authorId,
  author,
  updatedAt,
  ratings,
  setSnackbarMessage,
  showEditOptions = false,
  pinned,
}) => {
  const tagsArray = tags.map((tag) => (
    <Link key={tag} to={`/search?q=${tag}`} className="pointer">
      <Pill content={tag} />
    </Link>
  ));
  const { authState } = useContext(AuthContext);
  const client = useApolloClient();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertTitle = 'Delete Confirmation';
  const alertContent = `Are you sure you want to delete the blog - "${title}"`;
  const history = useHistory();
  const location = useLocation();
  const createdDateNTime = String(format(toDate(Number(createdAt)), 'eee LLL dd yyyy, hh:mm bb'));
  const recentActivity = String(formatDistanceToNow(Number(updatedAt), { addSuffix: true }));
  const { logError } = useSentry();
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();
  let { pageNumber } = queryString.parse(location.search);
  pageNumber = pageNumber || 1;

  const pinImageOptions = [
    'https://img.icons8.com/material-outlined/24/6200ee/pin.png',
    'https://img.icons8.com/material/24/6200ee/pin.png',
  ];
  const pinMessage = pinned ? 'Unpin' : 'Pin';
  const pinIcon = pinned ? pinImageOptions[1] : pinImageOptions[0];
  const onPinClick = async () => {
    const { data, error } = await client.mutate({
      mutation: CHANGE_BLOG_PIN_STATUS,
      variables: {
        postId: id,
      },
      refetchQueries: [
        {
          query: GET_ALL_BLOGS,
          variables: { limit: allBlogsLimit, skip: 0 },
        },
        {
          query: GET_ALL_BLOGS,
          variables: { limit: allBlogsLimit, skip: (pageNumber - 1) * allBlogsLimit },
        },
      ],
    });
    if (error) {
      logError('changeBlogPinStatus query', { ...data, ...error });
      setSnackbarMessage('An error has been encountered');
      return;
    }
    if (isSessionExpired(data.changeBlogPinStatus)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.changeBlogPinStatus.success) {
      setSnackbarMessage(`${pinMessage}ned Blog Successfully`);
    } else {
      setSnackbarMessage('An unexpected error has been encountered');
      logError('changeBlogPinStatus query', { ...data, ...error });
    }
  };
  const pinClassName = isSuperuserRoute ? 'flex justify-between items-center' : '';

  const handleEdit = () => {
    history.push({
      pathname: `/blogs/${id}/edit`,
      state: {
        from: location.pathname,
      },
    });
  };

  const handleDelete = () => {
    setIsAlertOpen(true);
  };

  const deleteBlog = async () => {
    setSnackbarMessage('Deleting Blog, Please wait');
    const { data, error } = await client.mutate({
      mutation: DELETE_BLOG,
      variables: {
        id,
      },
      refetchQueries: [
        {
          query: GET_BLOGS_BY_USER,
          variables: { limit: myBlogsLimit, skip: (pageNumber - 1) * myBlogsLimit, id: authorId },
        },
      ],
    });
    if (error) {
      setSnackbarMessage('Database error encountered');
      return;
    }
    if (data.deleteBlog.success) {
      setSnackbarMessage('Blog deleted successfully');
    } else {
      setSnackbarMessage(data.deleteBlog.message);
    }
  };

  return (
    <Card className="ma0 mb4" style={{ borderRadius: '5px' }} key={id}>
      <div
        className={`pa1 ${pinClassName}`}
        style={{
          background: '#F0E8FF',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
        }}
      >
        <Link to={`/blogs/${id}`} className="no-underline black">
          <Headline6 style={{ color: 'purple' }} className="ma0 tc ma2">
            {title}
          </Headline6>
        </Link>
        {isSuperuserRoute ? (
          <Button onClick={onPinClick}>
            <img alt="pin" src={pinIcon} />
          </Button>
        ) : (
          ''
        )}
      </div>
      <Grid className="" style={{ padding: 0, margin: '0px 20px 0px 20px' }}>
        <Row style={{ padding: '0px', margin: '0px' }}>
          <Cell
            className="ma0 pa0"
            style={{ padding: '0px', margin: '0px' }}
            desktopColumns={6}
            tabletColumns={4}
            phoneColumns={4}
          >
            <Link
              to={`/profile/${authorId}`}
              className="no-underline"
              style={{ color: userColor(ratings, authorId) }}
            >
              <Body1 className="mb1">{author}</Body1>
            </Link>
            <div className="">{tagsArray}</div>
          </Cell>
          <Cell
            className="ma0 pa0"
            style={{ padding: '0px', margin: '0px' }}
            desktopColumns={6}
            tabletColumns={4}
            phoneColumns={4}
          >
            <Body2 className="gray text-alignment">
              Posted on: &nbsp;
              {createdDateNTime}
              <br />
              <span className="">
                Recent Activity: &nbsp;
                {recentActivity}
              </span>
              <br />
              {timeToRead}
              &nbsp; min read
            </Body2>
          </Cell>
        </Row>
        {authState.user && authState.user.userId === authorId && showEditOptions ? (
          <Row>
            <Cell className="pa0">
              <Button style={{ color: '#555555' }} className="mb2" onClick={handleEdit}>
                edit blog
              </Button>
              <Button style={{ color: '#555555' }} className="mb2" onClick={handleDelete}>
                delete blog
              </Button>
            </Cell>
          </Row>
        ) : null}
        <Row>
          <AlertBox
            isOpen={isAlertOpen}
            setIsOpen={setIsAlertOpen}
            title={alertTitle}
            content={alertContent}
            onAccept={deleteBlog}
          />
        </Row>
      </Grid>
    </Card>
  );
};

BlogCard.propTypes = {
  isSuperuserRoute: PropTypes.bool,
  tags: PropTypes.array.isRequired,
  id: PropTypes.any.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
  pinned: PropTypes.bool,
  setSnackbarMessage: PropTypes.func.isRequired,
  showEditOptions: PropTypes.bool,
};

export default BlogCard;
