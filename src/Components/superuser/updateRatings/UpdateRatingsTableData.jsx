import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField, { Input } from '@material/react-text-field';

const UpdateRatingsTableData = ({ user }) => {
  const [rating, setRating] = useState(user.rating);
  return (
    <tr style={{ fontSize: '.9em' }}>
      <td className="tc pa3">
        <Link className="no-underline dim blue pointer" to={`/profile/${user.profileId}`}>
          {user.name}
        </Link>
      </td>
      <td className="tc pa3">
        {user.rating}
      </td>
      <td className="tc pa3">
        <TextField
          label=""
          className=""
          outlined
        >
          <Input
            value={rating}
            id={user.profileId}
            onChange={e => setRating(e.target.value)}
          />
        </TextField>
      </td>
    </tr>
  );
}

export default UpdateRatingsTableData;