import React, { useState, useEffect } from 'react';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';
import { Button } from '@material/react-button';
import Dialog, {
  DialogContent,
  DialogButton,
} from '@material/react-dialog';
import { Headline5, Headline6 } from '@material/react-typography';
import TextField, { Input, HelperText } from '@material/react-text-field';
import PropTypes from 'prop-types';
import { Fab } from '@material/react-fab';
import Comment from '../Comment';
import './BlogFooter.css';


const NoComments = () => (
  <div style={{ textAlign: 'center' }}>
    <img alt="nocomments" className="" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/arena_assets_comment_actions.webp" width="200px" />
    <Headline6 className="" style={{ margin: '2px 0px' }}>No Comments</Headline6>
  </div>
);

const CommentSection = ({ comments }) => (
  (comments.length === 0) ? (
    <NoComments />
  ) : (
    comments.map((newComment, index) => (
      <Comment newComment={newComment} key={index.toString()} />
    ))
  )
);

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
};

/*
  commentList = [
    {
      id: '',
      user:'',
      icon:'',
      commentValue: '',
      time: '',
      likes: ''
      dislikes: ''
    },
    {
      id: '',
      user:'',
      icon:'',
      commentValue: '',
      time: '',
      likes: ''
      dislikes: ''
    },
  ]
*/

const IconToggle = ({ isIconClicked, alt, iconLinks }) => (
  isIconClicked ? (
    <img alt={alt} src={iconLinks[0]} />
  )
    : (
      <img alt={alt} src={iconLinks[1]} />
    )
);

IconToggle.propTypes = {
  isIconClicked: PropTypes.bool.isRequired,
  alt: PropTypes.string.isRequired,
  iconLinks: PropTypes.arrayOf(PropTypes.string),
};


const BlogFooter = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [comment, setComment] = useState('');
  const [addComment, setAddComment] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [isUpvote, setUpvote] = useState(false);
  const [isDownvote, setDownvote] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const modularComment = (width < 770);

  const UpvoteOptions = ['https://img.icons8.com/material/24/28a745/facebook-like--v1.png', 'https://img.icons8.com/material-outlined/24/28a745/facebook-like.png'];
  const DownvoteOptions = ['https://img.icons8.com/material-rounded/24/dc3545/thumbs-down.png', 'https://img.icons8.com/material-outlined/24/dc3545/thumbs-down.png'];

  const toggleOpen = () => setOpen(!isOpen);

  const onCommentChange = newComment => (setComment(newComment));
  const addValue = (value, setValue, setVote) => {
    const newValue = value + 1;
    setValue(newValue);
    setVote(true);
  };

  useEffect(() => {
    const updateWidthOnResize = () => { setWidth(window.innerWidth); };
    window.addEventListener('resize', updateWidthOnResize);

    return (() => {
      window.removeEventListener('resize', updateWidthOnResize);
    });
  }, []);
  //   const decreaseValue = (value, setValue) => {
  //     const newValue = value - 1;
  //     setValue(newValue);
  //   };

  const pushComment = (newComment) => {
    const commentObject = {
      userId: '5b5ca6857cf0b100209fe499',
      user: 'Rahul Sawantdesai',
      userRatings: 0,
      commentValue: newComment,
      time: 'May 1, 2020 11:21 PM',
      likes: 0,
      dislikes: 0,
    };
    setCommentList([...commentList, commentObject]);
  };


  return (
    <div className="">
      <Button
        className="mt2 btn"
        style={{ color: '#28a745' }}
        icon={<IconToggle isIconClicked={isUpvote} alt="like" color="#28a745" iconLinks={UpvoteOptions} />}
        onClick={() => { addValue(like, setLike, setUpvote); }}
      >
        <span style={{ fontSize: '20px', marginLeft: '5px' }}>
          {
            like > 0 ? (like) : ''
          }
        </span>
      </Button>
      <Button
        className="mt2 ml2 btn"
        style={{ color: '#dc3545', minWidth: '32px' }}
        onClick={() => addValue(dislike, setDislike, setDownvote)}
        icon={<IconToggle isIconClicked={isDownvote} alt="dislike" iconLinks={DownvoteOptions} />}
      >
        <span style={{ fontSize: '20px', marginLeft: '5px' }}>
          {
          dislike > 0 ? (dislike) : ''
          }
        </span>
      </Button>
      {
          modularComment ? (
            <div>
              <Fab
                textLabel="Comment"
                className="center"
                style={{
                  backgroundColor: '#6200EE', position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 100,
                }}
                icon={(<MaterialIcon icon="add_comment" />)}
                onClick={toggleOpen}
              />
              <Dialog
                className=""
                open={isOpen}
                onClose={toggleOpen}
              >
                <DialogContent>
                  <TextField
                    label="Comment"
                    notchedOutlineClassName=""
                    className=""
                    style={{ width: '100%' }}
                    textarea
                    outlined
                    helperText={<HelperText>There is a limit of 2048 characters. Ensure comments are friendly, informative and relevant.</HelperText>}
                  >
                    <Input
                      className="w-100"
                      value={comment}
                      onChange={(e) => { onCommentChange(e.target.value); }}
                    />
                  </TextField>
                </DialogContent>
                <div className="pa2">
                  <DialogButton
                    action="comment"
                    className="pa2 w-100"
                    onClick={() => {
                      pushComment(comment);
                      setComment('');
                      setAddComment(false);
                    }}
                    raised
                  >
                    Submit
                  </DialogButton>
                </div>
              </Dialog>
            </div>
          )
            : (
              <Button
                className="mt2"
                style={{ float: 'right' }}
                onClick={() => { setAddComment(true); }}
                trailingIcon={<MaterialIcon icon="insert_comment" />}
              >
                Comment
              </Button>
            )
      }


      <Headline5 style={{ margin: '15px 0px 10px 0px' }}>
        Comments
      </Headline5>
      <hr className="ba" style={{ borderColor: '#6200ee' }} />
      <CommentSection comments={commentList} />
      {
        (addComment)
          ? (
            <div className="">
              <TextField
                label="Comment"
                notchedOutlineClassName=""
                className=""
                style={{ width: '100%' }}
                textarea
                outlined
                helperText={<HelperText>There is a limit of 2048 characters. Ensure comments are friendly, informative and relevant.</HelperText>}
              >
                <Input
                  className="w-100"
                  value={comment}
                  onChange={(e) => { onCommentChange(e.target.value); }}
                />
              </TextField>
              <Button
                className=""
                onClick={() => {
                  pushComment(comment);
                  setComment('');
                  setAddComment(false);
                }}
                raised
              >
                Submit
              </Button>
            </div>
          )
          : ('')
      }

    </div>
  );
};

export default BlogFooter;
// pushComment(comment)
// red : #dc3545
