import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation Signup($name: String!, $username: String!, $email: String!, $password: String!) {
    signup(email: $email, username: $username, name: $name, password: $password) {
      code
      success
      message
      userId
    }
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($userId: ID!, $otp: String!) {
    verifyUser(userId: $userId, otp: $otp) {
      code
      success
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ForgotPassword($newPassword: String!, $newRePassword: String!, $key: String!) {
    forgotPassword(newPassword: $newPassword, newRePassword: $newRePassword, key: $key) {
      code
      success
      message
    }
  }
`;

export const UPDATE_ANNOUNCEMENT = gql`
  mutation UpdateAnnouncement($code: String!, $announcement: String!) {
    updateAnnouncement(code: $code, announcement: $announcement) {
      code
      success
      message
      contest {
        _id
        announcement
      }
    }
  }
`;

export const RESET_SUBMISSION = gql`
  mutation ResetSubmission($id: String!, $status: String!) {
    resetSubmission(_id: $id, status: $status) {
      code
      success
      message
      submission {
        _id
        status
      }
    }
  }
`;

export const CREATE_BLOG = gql`
  mutation CreateBlog($title: String!, $content: String!, $tags: String!) {
    createBlog(title: $title, content: $content, tags: $tags) {
      code
      success
      message
    }
  }
`;

export const EDIT_BLOG = gql`
  mutation EditBlog($id: ID!, $title: String!, $content: String!, $tags: String!) {
    editBlog(_id: $id, title: $title, content: $content, tags: $tags) {
      code
      success
      message
      blog {
        content
        _id
        content
        updatedAt
        tags
        title
        timeToRead
      }
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation DeleteBlog($id: ID!) {
    deleteBlog(_id: $id) {
      code
      success
      message
    }
  }
`;

export const CREATE_CONTEST = gql`
  mutation CreateContest(
    $code: String!
    $type: ContestType!
    $name: String!
    $description: String!
    $startsAt: String!
    $endsAt: String!
    $contestAdmin: [String]!
    $solutionVisibility: SolutionVisibility!
  ) {
    createContest(
      code: $code
      type: $type
      name: $name
      description: $description
      startsAt: $startsAt
      endsAt: $endsAt
      contestAdmin: $contestAdmin
      solutionVisibility: $solutionVisibility
    ) {
      code
      success
      message
      contest {
        name
        code
        _id
        startsAt
        endsAt
      }
    }
  }
`;

export const EDIT_CONTEST = gql`
  mutation EditContest(
    $oldCode: String!
    $code: String!
    $type: ContestType!
    $name: String!
    $description: String!
    $startsAt: String!
    $endsAt: String!
    $contestAdmin: [String]!
    $solutionVisibility: SolutionVisibility!
  ) {
    editContest(
      oldCode: $oldCode
      code: $code
      type: $type
      name: $name
      description: $description
      startsAt: $startsAt
      endsAt: $endsAt
      contestAdmin: $contestAdmin
      solutionVisibility: $solutionVisibility
    ) {
      code
      success
      message
      contest {
        _id
        code
        type
        name
        description
        startsAt
        endsAt
        solutionVisibility
        contestAdmin {
          name
          _id
          username
        }
      }
    }
  }
`;

export const DELETE_CONTEST = gql`
  mutation DeleteContest($code: String!) {
    deleteContest(code: $code) {
      code
      success
      message
    }
  }
`;

export const UPDATE_RATINGS = gql`
  mutation UpdateNewRatings($updateChange: [updateRatings]!) {
    updateNewRatings(updateChange: $updateChange) {
      code
      success
      message
    }
  }
`;

export const UPDATE_ABOUT = gql`
  mutation UpdatedBio($about: String!) {
    updateBio(about: $about) {
      code
      success
      message
      user {
        _id
        about
      }
    }
  }
`;

export const FOLLOW = gql`
  mutation Follow($followId: String!) {
    follow(followId: $followId) {
      code
      success
      message
      user1 {
        _id
        following
        followers
      }
      user2 {
        _id
        following
        followers
      }
    }
  }
`;

export const UNFOLLOW = gql`
  mutation Unfollow($unfollowId: String!) {
    unfollow(unfollowId: $unfollowId) {
      code
      success
      message
      user1 {
        _id
        following
        followers
      }
      user2 {
        _id
        following
        followers
      }
    }
  }
`;

export const SUBMIT_FEEDBACK = gql`
  mutation submitFeedback($name: String!, $email: String!, $message: String!) {
    submitFeedback(name: $name, anyEmail: $email, message: $message) {
      code
      message
      success
    }
  }
`;

export const UPDATE_NOTIFICATION = gql`
  mutation UpdateNotification($type: notificationType!, $set: Boolean!) {
    updateNotification(type: $type, set: $set) {
      code
      success
      message
      user {
        _id
        activities
        updates
      }
    }
  }
`;

export const UPDATE_SOCIAL = gql`
  mutation UpdateSocialLinks($github: String!, $codechef: String!, $codeforces: String!) {
    updateSocialLinks(github: $github, codechef: $codechef, codeforces: $codeforces) {
      code
      success
      message
      user {
        _id
        github
        codechef
        codeforces
      }
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($oldPassword: String!, $password: String!) {
    updatePassword(oldPassword: $oldPassword, password: $password) {
      code
      success
      message
    }
  }
`;

export const UPVOTE_BLOG = gql`
  mutation UpvoteBlog($id: ID!) {
    upvoteBlog(postId: $id) {
      code
      success
      message
      blog {
        upvote
        downvote
        _id
      }
    }
  }
`;

export const DOWNVOTE_BLOG = gql`
  mutation DownvoteBlog($id: ID!) {
    downvoteBlog(postId: $id) {
      code
      success
      message
      blog {
        upvote
        downvote
        _id
      }
    }
  }
`;

export const DOWNVOTE_COMMENT = gql`
  mutation DownvoteComment($id: String!) {
    downvoteComment(_id: $id) {
      code
      success
      message
      comment {
        _id
        upvote
        downvote
      }
    }
  }
`;

export const UPVOTE_COMMENT = gql`
  mutation UpvoteComment($id: String!) {
    upvoteComment(_id: $id) {
      code
      success
      message
      comment {
        _id
        upvote
        downvote
      }
    }
  }
`;

export const EDIT_COMMENT = gql`
  mutation editComment($id: String!, $content: String!) {
    editComment(_id: $id, content: $content) {
      code
      success
      message
      comment {
        _id
        content
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DeleteComment($id: String!) {
    deleteComment(_id: $id) {
      code
      success
      message
    }
  }
`;

export const WRITE_COMMENT = gql`
  mutation WriteComment($id: String!, $content: String!) {
    writeComment(postId: $id, content: $content) {
      code
      success
      message
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout($id: ID!) {
    logout(userId: $id) {
      success
      message
      code
    }
  }
`;

export const CHANGE_BLOG_PIN_STATUS = gql`
  mutation ChangeBlogPinStatus($postId: ID!) {
    changeBlogPinStatus(postId: $postId) {
      code
      success
      message
      blog {
        _id
        pinned
      }
    }
  }
`;

export const CHANGE_PLAGIARISM_STATUS = gql`
  mutation ChangePlagiarismStatus($id: String!) {
    changePlagiarismStatus(_id: $id) {
      code
      success
      message
      submission {
        _id
        plagiarism
      }
    }
  }
`;

export const REPLY_TO_FEEDBACK = gql`
  mutation ReplyToFeedback($id: ID!, $response: String!) {
    replyToFeedback(_id: $id, response: $response) {
      code
      success
      message
      feedback {
        _id
        replied
      }
    }
  }
`;

export const SAVE_CODE = gql`
  mutation saveCode($code: String!, $language: String!, $input: String!) {
    saveCode(code: $code, language: $language, input: $input) {
      success
      message
      editor {
        sharecode
      }
    }
  }
`;
