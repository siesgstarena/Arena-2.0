import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Headline6 } from '@material/react-typography';
import { userColor } from '../../../commonFunctions';

const UserResults = ({ userArray }) => (
  <div className="">
    <Headline6 className="bb b--purple" style={{ margin: '0em' }}>Users</Headline6>
    {userArray.map(
      (obj) => {
        const {
          user, userBio, userId, userRating, followers, following, memberSince,
        } = obj;
        return (
          <Link
            key={userId}
            to={`/profile/${userId}`}
            style={{ color: userColor(userRating, userId), margin: '0em' }}
            className="no-underline dim pointer mid-gray"
          >
            <div className="mt3 bl bw1 shadow-3 pa2 pl2 br2" style={{ borderColor: userColor(userRating, userId) }}>
              <div className="flex items-center mb2">
                <img
                  src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp"
                  alt="profile"
                  style={{ height: '50px', width: '50px' }}
                  className="ba bw1 pa1 b--light-gray br-100"
                />
                <div className="flex ml3 flex-column">
                  <Headline6 style={{ margin: '0em' }}>
                    {user}
                  </Headline6>
                  <span className="mid-gray">{userBio}</span>
                  <span className="mid-gray mt1">{`member since ${memberSince}`}</span>
                </div>
              </div>
              <span className="mt1 mr2 mid-gray" style={{ marginLeft: '4.9em' }}>
                <b className="mr1">{followers}</b>
                followers
              </span>
              <span>•</span>
              <span className="mid-gray">
                <b className="ml2 mr1">{following}</b>
                following
              </span>
            </div>
          </Link>
        );
      },
    )}
  </div>
);

UserResults.propTypes = {
  userArray: PropTypes.array.isRequired,
};
export default UserResults;
