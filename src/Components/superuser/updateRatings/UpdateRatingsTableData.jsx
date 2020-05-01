import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField, { Input } from '@material/react-text-field';
import { userColor } from '../../../commonFunctions';

const UpdateRatingsTableData = ({ ratingData }) => {
  const [rating, setRating] = useState(ratingData.newRating);
  return (
    <tr style={{ fontSize: '.9em' }}>
      <td className="tc pa3">
        <Link className="no-underline dim pointer" style={{ color: userColor(ratingData.user.ratings, ratingData.user._id) }} to={`/profile/${ratingData.user._id}`}>
          {ratingData.user.username}
        </Link>
      </td>
      <td className="tc pa3">
        {ratingData.newRating}
      </td>
      <td className="tc pa3">
        <TextField
          label=""
          className=""
          outlined
        >
          <Input
            value={rating}
            id={ratingData.user._id}
            onChange={e => setRating(e.target.value)}
          />
        </TextField>
      </td>
    </tr>
  );
};

UpdateRatingsTableData.propTypes = {
  ratingData: PropTypes.object.isRequired,
};

export default UpdateRatingsTableData;
