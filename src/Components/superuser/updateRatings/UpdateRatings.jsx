import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Headline5 } from '@material/react-typography';
import { useApolloClient } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import Button from '@material/react-button';
import MessageCard from '../../common/MessageCard/index';
import UpdateRatingsTable from './UpdateRatingsTable';
import AlertBox from '../../common/AlertBox/index';
import { UPDATE_RATINGS } from '../../../graphql/mutations';

const UpdateRatings = ({ ratingsData: incomingRatingsData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { contestId } = useParams();
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  // Added ratingsData as a state in order to cause a re-render once the ratings are updated
  const [ratingsData, setRatingsData] = useState(JSON.parse(JSON.stringify(incomingRatingsData)));
  // updatedRatings state holds all the updated values of the ratings.
  const [updatedRatings, setUpdatedRatings] = useState(JSON.parse(JSON.stringify(ratingsData)));
  const client = useApolloClient();

  const updateDB = async () => {
    setMessageType('loading');
    setMessage('Updating ratings, Please wait');
    // converting the updatedRatings in the form desired by the query
    const updateChange = updatedRatings.map((updatedRating) => ({
      contestId: updatedRating.contestId,
      userId: updatedRating.user._id,
      newRating: updatedRating.newRating,
    }));

    const { data, error } = await client.mutate({
      mutation: UPDATE_RATINGS,
      variables: {
        updateChange,
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.updateNewRatings.success) {
      // updating the ratingsData with the latest data once the db is updated
      setRatingsData(JSON.parse(JSON.stringify(updatedRatings)));
      setMessageType('success');
      setMessage('Ratings updated successfully');
    } else {
      setMessageType('error');
      setMessage(data.updateNewRatings.message);
    }
  };

  return (
    <div className="mw7 center ma1 pa2">
      <Headline5 className="purple mt2 mb2 ml1">
        Update Ratings for &nbsp;
        {contestId}
      </Headline5>
      <UpdateRatingsTable ratingsData={ratingsData} setUpdatedRatings={setUpdatedRatings} />
      <MessageCard messageType={messageType} message={message} setMessageType={setMessageType} />
      <Button
        className="ma1 mt3"
        style={{ marginLeft: 'auto', marginRight: 0, display: 'block' }}
        raised
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Update
      </Button>
      <AlertBox
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Update Confirmation"
        content={`Are you sure you want to update the ratings for ${contestId}?`}
        onAccept={updateDB}
      />
    </div>
  );
};

UpdateRatings.propTypes = {
  ratingsData: PropTypes.array.isRequired,
};

export default UpdateRatings;
