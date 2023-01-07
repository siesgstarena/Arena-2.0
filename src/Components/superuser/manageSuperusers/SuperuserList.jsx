import React from 'react';
import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { REMOVE_SUPERUSER } from '../../../graphql/mutations';
import { GET_ALL_SUPERUSERS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong';

const SuperuserList = ({ users }) => {
  const [removeSuperuser, { error }] = useMutation(REMOVE_SUPERUSER, {
    refetchQueries: [{ query: GET_ALL_SUPERUSERS }],
  });
  if (error) return <SomethingWentWrong message="An error has been encountered." />;

  return (
    <div className="superuser-list">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Superusers</TableCell>
              <TableCell>Username</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow
                  key={user.username}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.username}
                  </TableCell>
                  <TableCell align="right">
                    <button
                      type="button"
                      onClick={() => removeSuperuser({ variables: { username: user.username } })}
                    >
                      Remove
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
SuperuserList.propTypes = {
  users: PropTypes.array.isRequired,
};
export default SuperuserList;
