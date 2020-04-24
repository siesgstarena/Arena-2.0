import React from 'react';
import { Headline6 } from '@material/react-typography';
import ProblemStatusTable from '../status/ProblemStatusTable';
import Viewer from '../../../common/MarkdownEditor/Viewer';

const SubmissionPageContainer = () => {
  // const language = 'C';
  let code = 'System.out.println("Sum of these numbers: "+sum);';
  // if (language === 'C') {
  code = `\`\`\`c++\n${code}`;
  // code = `\`\`\`c\n${code}`;
  // code = `\`\`\`py\n${code}`;
  // code = `\`\`\`js\n${code}`;
  // code = `\`\`\`go\n${code}`;
  // code = `\`\`\`java\n${code}`;
  // console.log(code);
  // }
  return (
    <div>
      <ProblemStatusTable submissions={[]} />
      <Headline6 className="mt2 mb1 purple">CODE:</Headline6>
      <Viewer value={code} />
    </div>
  );
};

export default SubmissionPageContainer;
