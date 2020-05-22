import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_USERS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import LoadingCardArray from '../../common/LoadingCardArray';
import MultiSelect from '../../common/MultiSelect/index';

const UsersSelect = ({ selectedOptions, updateSelectedOptions }) => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <LoadingCardArray count={1} />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.users) {
    const { users } = data;
    // converting the data in the format supported by the MultiSelect component
    const mappedUsers = users.map((admin) => ({
      label: `${admin.name} (${admin.username})`,
      value: admin._id,
    }));
    return (
      <MultiSelect
        options={mappedUsers}
        selectedOptions={selectedOptions}
        updateSelectedOptions={updateSelectedOptions}
      />
    );
  }

  // case for random errors which are not handled by graphql
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

UsersSelect.propTypes = {
  selectedOptions: PropTypes.array.isRequired,
  updateSelectedOptions: PropTypes.func.isRequired,
};

export default UsersSelect;
