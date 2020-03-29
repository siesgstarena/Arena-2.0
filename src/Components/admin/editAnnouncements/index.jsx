import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import AnnouncementEditor from './AnnouncementEditor';
import { GET_CONTEST_ANNOUNCEMENT } from '../../../graphql/queries';
import Spinner from '../../common/Spinner/index';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const EditAnnouncements = () => {
  const { contestId } = useParams();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_CONTEST_ANNOUNCEMENT, {
    variables: { code: contestId },
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.adminDashboard
    && data.adminDashboard.contest) {
    return <AnnouncementEditor announcement={data.adminDashboard.contest.announcement ? data.adminDashboard.contest.announcement : ''} />;
  }
  if (isSessionExpired(data.adminDashboard)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message={data.adminDashboard.message} />;
};

export default EditAnnouncements;
