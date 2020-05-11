import React, { useContext, useState } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { Body1, Body2, Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';
import Card from '@material/react-card';
import Button from '@material/react-button';
import { Grid, Cell, Row } from '@material/react-layout-grid';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { DELETE_BLOG } from '../../../../graphql/mutations';
import AlertBox from '../../../common/AlertBox/index';
import Pill from '../../../common/Pill/index';
import {
  convertDate, convertTime, userColor, differenceInTwoDates, adding330Minutes,
} from '../../../../commonFunctions';
import AuthContext from '../../../../Contexts/AuthContext';
import './BlogCard.scss';

const BlogCard = ({
  isSuperuserRoute, tags, id, createdAt, title, timeToRead, authorId, author, updatedAt, ratings, setSnackbarMessage,
}) => {
  const tagsArray = tags.map(tag => (
    <Link key={tag} to={`/search?q=${tag}`} className="pointer">
      <Pill content={tag} />
    </Link>
  ));
  const { authState } = useContext(AuthContext);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertTitle = 'Delete Confirmation';
  const alertContent = `Are you sure you want to delete the blog - "${title}"`;
  const history = useHistory();
  const location = useLocation();
  const createdAtDate = convertDate(adding330Minutes(Number(createdAt)));
  const createdAtTime = convertTime(adding330Minutes(Number(createdAt)));
  const currentDateObject = new Date();
  const currentDateInMilliseconds = currentDateObject.getTime();
  // currentDateInMilliseconds = adding330Minutes(currentDateInMilliseconds);
  const [convertedUpdatedAt, convertedUpdatedAtType] = differenceInTwoDates(
    currentDateInMilliseconds, updatedAt,
  );

  // Pin Blog Feature ( only for superuser )
  const [isPinned, setPinned] = useState(false);
  const pinImageOptions = ['https://img.icons8.com/material-outlined/24/6200ee/pin.png', 'https://img.icons8.com/material/24/6200ee/pin.png'];
  const pinMessage = (isPinned) ? 'Unpin' : 'Pin';
  const pinIcon = (isPinned) ? pinImageOptions[1] : pinImageOptions[0];
  const onPinClick = () => {
    setPinned(!isPinned);
    setSnackbarMessage(`${pinMessage}ned Blog Successfully`);
  };
  // end Pin

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

  const client = useApolloClient();
  const deleteBlog = async () => {
    setSnackbarMessage('Deleting Blog, Please wait');
    const { data, error } = await client.mutate({
      mutation: DELETE_BLOG,
      variables: {
        id,
      },
      // refetchQueries: [
      //   {
      //     query: GET_ALL_BLOG_DETAILS,
      //   },
      //   {
      //     query: GET_PROFILE_PAGE_DETAILS,
      //     variables: { id: authorId, userId: authorId },
      //   },
      // ],
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
      {
        (isSuperuserRoute) ? (
          <div
            className="pa1 flex justify-between items-center"
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
            <Button
              onClick={onPinClick}
            >
              <img alt="pin" src={pinIcon} />
              {/* {`${pinMessage} blog`} */}
            </Button>
          </div>
        ) : (
          <div
            className="pa1"
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
          </div>
        )
      }
      <Grid className="" style={{ padding: 0, margin: '0px 20px 0px 20px' }}>
        <Row style={{ padding: '0px', margin: '0px' }}>
          <Cell className="ma0 pa0" style={{ padding: '0px', margin: '0px' }} desktopColumns={6} tabletColumns={4} phoneColumns={4}>
            <Link to={`/profile/${authorId}`} className="no-underline" style={{ color: userColor(ratings, authorId) }}>
              <Body1 className="mb1">
                {author}
              </Body1>
            </Link>
            <div className="">
              {tagsArray}
            </div>
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
              <span className="">
                Recent Activity:
                &nbsp;
                {convertedUpdatedAt}
                &nbsp;
                {convertedUpdatedAtType}
                &nbsp;
                ago
              </span>
              <br />
              {timeToRead}
              &nbsp;
              min read
            </Body2>
          </Cell>
        </Row>
        {
          authState.user && authState.user.userId === authorId
            ? (
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
            ) : null
        }
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
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default BlogCard;
