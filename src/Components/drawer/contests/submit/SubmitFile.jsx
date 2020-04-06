import React, { useState } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Select, { Option } from '@material/react-select';
import TextField, { Input } from '@material/react-text-field';
import contestDetails from './contestDetails';
import '@material/react-menu-surface/dist/menu-surface.css';
import '@material/react-menu/dist/menu.css';
import '@material/react-select/dist/select.css';
// import Alert from './Alert/Alert';
import FileUpload from '../../../common/FileUpload/index';
import MessageCard from '../../../common/MessageCard';
import Spinner from '../../../common/Spinner';
// array to fetch the list of languages
const languages = ['C', 'C++', 'Python 2', 'Python 3', 'Java', 'Go', 'Javascript'];


export default function SubmitFile() {
// initial State declaration
  const [value, setValue] = useState('default');
  const [uploadMethod, setMethod] = useState('file');
  const [lang, setLang] = useState('default');
  const [file, setFile] = useState({});
  const [code, setCode] = useState('');
  const [isUploading, setUpload] = useState(false);
  const [hasError, handleErrors] = useState(false);

  // const fileDetails = {
  //   'problem name': value,
  //   'upload method': uploadMethod,
  //   'language chosen': lang,
  //   'file chosen': file,
  //   'code text': code,
  // };

  // functions to update state
  const onSubmitTrigger = (loadValue) => { setUpload(loadValue); };

  const onEnhancedChange = (_, item) => (setValue(item.getAttribute('data-value')));

  const onLangChange = (_, item) => (setLang(item.getAttribute('data-value')));

  const onMethodChange = (_, item) => (setMethod(item.getAttribute('data-value')));
  // function to check validation
  const validationCheck = () => {
    if (value !== 'default' && lang !== 'default' && (file.length !== 0 || code.length !== 0)) {
      onSubmitTrigger(true);
      // console.log(fileDetails);
    } else {
      handleErrors(true);
    }
  };

  // function to render loading page / the submit page
  if (isUploading) {
    return (
      <div className="container">
        <h3>Hang in there, this may take some time... do not reload or close this page!</h3>
        <Spinner />
      </div>
    );
  }
  return (
    <div className="">
      {/* hasError value being checked to bring alert when it is true */}
      {/* Alert is a mini component used here ,
      we pass message and type of alert
      and it sets it accordingly */}
      {hasError
        ? <MessageCard message="Select appropriate Problem/Language/Upload Method" messageType="error" />
        // <Alert message="Select appropriate Problem/Language/Upload Method" type="error" />
        : null }
      {/* form to get details of problem id, language, upload option and answer */}
      <Grid>
        <Row>
          <Cell>
            <div className="">
              <Select
                required
                notchedOutlineClassName="pa2"
                enhanced
                outlined
                label="Problem"
                className="sel w-100"
                value={value}
                onEnhancedChange={onEnhancedChange}
              >
                <Option className="opt" value="default">Choose Problem</Option>
                {
                  contestDetails[0].Problem.map(prob => (
                    <Option key={prob.id} className="opt" value={prob.title}>{`${prob.title} - ${prob.name}`}</Option>
                  ))
                }
              </Select>
            </div>
          </Cell>
          <Cell>
            <div className="">
              <Select
                notchedOutlineClassName="pa2"
                required
                label="Language"
                enhanced
                outlined
                className="w-100"
                value={lang}
                onEnhancedChange={onLangChange}
              >
                <Option className="opt" value="default"> Choose Language</Option>
                {
                  languages.map(langu => (
                    <Option key={langu} className="opt" value={langu}>{`${langu}`}</Option>
                  ))
                }
              </Select>
            </div>
          </Cell>
          <Cell>
            <div className="">
              <Select
                required
                notchedOutlineClassName="pa2"
                label="Upload Type"
                enhanced
                outlined
                className="w-100"
                value={uploadMethod}
                onEnhancedChange={onMethodChange}
              >
                <Option value="file">Upload Source File</Option>
                <Option value="code">Insert Source Code</Option>
              </Select>
            </div>
          </Cell>
        </Row>
        <Row>
          {/* </Row>
        <Row> */}
          <Cell>
            {
            (uploadMethod === 'file')
              ? (
                <div className="pa2 mt1 w-100">
                  <FileUpload id="file" label="Upload Solution" file={file} onChangeFunction={e => setFile(e.currentTarget.files[0])} />
                </div>
              )
              : (
                <div className="codebox w-100 pt2 pl1 br2 ma2 w-100">
                  <TextField
                    label="Enter your code here"
                    className="text-area-width-100"
                    textarea
                    required
                  >
                    <Input
                      className=""
                      rows="10"
                      value={code}
                      onChange={e => setCode(e.currentTarget.value)}
                    />
                  </TextField>
                </div>
              )
          }
          </Cell>
        </Row>
        <Row>
          <Cell>
            <button
              className=" ml2 mdc-button btn mdc-ripple-upgraded mdc-button--raised"
              type="submit"
              onClick={() => { validationCheck(); }}
            >
              Submit
            </button>
          </Cell>
        </Row>
      </Grid>

      {/* This Select option is to select between
          different methods of uploading solution
           */}


      {/* submit button , on clicked
          goes to ValidationCheck function
          then based on that it leads to onSubmitTrigger if it is true
          or leads to handleError if it is false */}

    </div>
  );
}
