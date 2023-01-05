import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import AnnouncementEditor from './AnnouncementEditor';
import { GET_CONTEST_ANNOUNCEMENT } from '../../../graphql/queries';
import Spinner from '../../common/Spinner/index';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSentry from '../../../customHooks/useSentry';

const EditAnnouncements = () => {
  const { contestId } = useParams();
  const { logError } = useSentry();
  const { loading, error, data } = useQuery(GET_CONTEST_ANNOUNCEMENT, {
    variables: { code: contestId },
  });
  if (loading) return <Spinner />;
  if (error) {
    logError('adminDashboad query in EditAnnoucements', { ...data, ...error });
    return <SomethingWentWrong message="An error has been encountered." />;
  }
  if (data.adminDashboard && data.adminDashboard.contest) {
    return (
      <AnnouncementEditor
        announcement={
          data.adminDashboard.contest.announcement ? data.adminDashboard.contest.announcement : ''
        }
      />
    );
  }

  // random errors not handled by graphql
  logError('adminDashboad query in EditAnnoucements', { ...data, ...error });
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default EditAnnouncements;
