/* eslint-disable no-param-reassign */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_PROBLEM_DETAILS } from '../../../graphql/queries';
import Spinner from '../../common/Spinner/index';
import EditProblemForm from './EditProblemForm';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const EditProblem = () => {
  const { problemId } = useParams();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_PROBLEM_DETAILS, {
    variables: { code: problemId },
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data && data.problemByCode && data.problemByCode._id) {
    const intialFormDetails = {
      code: problemId,
      points: data.problemByCode.points,
      name: data.problemByCode.name,
      description: data.problemByCode.description,
      input: data.problemByCode.explainInput,
      output: data.problemByCode.explainOutput,
      constraints: data.problemByCode.constraints,
      examples: data.problemByCode.example,
      explanation: data.problemByCode.explanation,
      inputFile: { name: <a className="gray no-underline" href={data.problemByCode.inputFile}>Click to download input file</a> },
      outputFile: { name: <a className="gray no-underline" href={data.problemByCode.outputFile}>Click to download output file</a> },
      tags: data.problemByCode.tags,
    };
    return (
      <EditProblemForm intialFormDetails={intialFormDetails} />
    );
  }
  if (isSessionExpired(data.problemByCode)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message={data.problemByCode.message} />;
};

export default EditProblem;
