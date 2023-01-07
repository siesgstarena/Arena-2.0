import React from 'react';
import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';
import Table from '../../common/Table/index';
import { REMOVE_SUPERUSER } from '../../../graphql/mutations';
import { GET_ALL_SUPERUSERS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong';

const SuperuserList = ({ users }) => {
  const [removeSuperuser, { error }] = useMutation(REMOVE_SUPERUSER, {
    refetchQueries: [{ query: GET_ALL_SUPERUSERS }],
  });
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  const tableData = users.map((user) => (
    <tr key={user.username}>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td align="right">
        <Button
          outline="true"
          raised
          color="primary"
          onClick={() => removeSuperuser({ variables: { username: user.username } })}
        >
          Remove
        </Button>
      </td>
    </tr>
  ));

  const tableHeadings = ['Name', 'Username', 'Action'];
  return <Table tableHeadings={tableHeadings} tableData={tableData} />;
};
SuperuserList.propTypes = {
  users: PropTypes.array.isRequired,
};
export default SuperuserList;
