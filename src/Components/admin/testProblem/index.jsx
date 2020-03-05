import React, { useState } from 'react';
import Select, { Option } from '@material/react-select';
import { Headline4 } from '@material/react-typography';
import Button from '@material/react-button';
import FileUpload from '../../common/FileUpload/index';
import AdminContainer from '../AdminContainer';

const TestProblem = () => {
  const [language, setLanguage] = useState('C');
  const [solutionFile, setSolutionFile] = useState({});
  const onLanguageChange = (index, item) => (
    setLanguage(item.getAttribute('data-value'))
  );
  const onFileChange = (event) => {
    setSolutionFile(event.target.files[0]);
  };
  return (
    <AdminContainer>
      <div className="mw7 center">
        <Headline4 className="purple mt4 mb4"> Test Problem</Headline4>
        <Select
          className="w-100"
          notchedOutlineClassName="pa1"
          enhanced
          outlined
          label="Select Language"
          value={language}
          onEnhancedChange={onLanguageChange}
        >
          <Option value="C">C</Option>
          <Option value="C++">C++</Option>
          <Option value="C++ 14">C++ 14</Option>
          <Option value="java">Java</Option>
          <Option value="javascript">Javascript</Option>
          <Option value="python2">Python 2</Option>
          <Option value="python3">Python 3</Option>
        </Select>
        <div className="ma1 mt3">
          <FileUpload
            id="solution-file-upload"
            label="Upload solution file"
            onChangeFunction={onFileChange}
            file={solutionFile}
          />
        </div>
        <Button className="ma1 mb5" raised>
          Test Problem
        </Button>
      </div>
    </AdminContainer>
  );
};

export default TestProblem;
