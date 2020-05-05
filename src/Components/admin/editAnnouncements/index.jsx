import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as Sentry from '@sentry/browser';
import { useParams } from 'react-router-dom';
import AnnouncementEditor from './AnnouncementEditor';
import { GET_CONTEST_ANNOUNCEMENT } from '../../../graphql/queries';
import Spinner from '../../common/Spinner/index';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import AdminContainer from '../AdminContainer';

const EditAnnouncements = () => {
  const { contestId } = useParams();
  const { loading, error, data } = useQuery(GET_CONTEST_ANNOUNCEMENT, {
    variables: { code: contestId },
  });
  if (loading) return <Spinner />;
  if (error) {
    Sentry.captureException(new Error(error, data, 'adminDashboard'));
    return <SomethingWentWrong message="An error has been encountered." />;
  }
  if (data.adminDashboard
    && data.adminDashboard.contest) {
    return (
      <AdminContainer contestCode={contestId}>
        <AnnouncementEditor announcement={data.adminDashboard.contest.announcement ? data.adminDashboard.contest.announcement : ''} />
      </AdminContainer>
    );
  }

  // random errors not handled by graphql
  Sentry.captureException(new Error(error, data, 'adminDashboard'));
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default EditAnnouncements;
