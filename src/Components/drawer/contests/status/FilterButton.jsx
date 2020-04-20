import React, { useState } from 'react';
import Select, { Option } from '@material/react-select';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
} from '@material/react-dialog';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';
import Fab from '@material/react-fab';


const DynamicSelect = ({ label, value, onValueChange, valueList, }) =>
  (
    <Select
      required
      className="w-100"
      notchedOutlineClassName="pa2"
      enhanced
      outlined
      label={label}
      value={value}
      onEnhancedChange={onValueChange}
    >
      <Option value="None">{`Choose ${label}`}</Option>
      {valueList.map(val => (
        <Option key={val} value={val}>{val}</Option>
      ))}
    </Select>
  );
DynamicSelect.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  valueList: PropTypes.array.isRequired,
};


const FilterButton = () => {
  // State
  const [isOpen, setOpen] = useState(false);
  const [problem, setProblem] = useState('None');
  const [language, setLanguage] = useState('None');
  const [type, setType] = useState('None');

  // Arrays to display options from ..
  const problemList = ['Odd or Even', 'Swedish Mafia', 'New Mafia'];
  const langList = ['C', 'C++', 'Python 2', 'Python 3', 'Java', 'JavaScript', 'Go'];
  const typeList = ['Accepted', 'Wrong Answer', 'Runtime Error', 'Time Limit Exceeded', 'Compilation Error'];

  // Array to be displayed
  const selectedValues = [problem, language, type];

  // Functions to update State
  const onProblemChange = (_, item) => {
    let newProb = { ...problem };
    newProb = item.getAttribute('data-value');
    setProblem(newProb);
  };

  const onLangChange = (_, item) => {
    let newLang = { ...language };
    newLang = item.getAttribute('data-value');
    setLanguage(newLang);
  };

  const onTypeChange = (_, item) => {
    let newType = { ...type };
    newType = item.getAttribute('data-value');
    setType(newType);
  };

  const toggleOpen = () => setOpen(isOpen => !isOpen);

  // Return
  return (
    <div>
      <Fab
        textLabel="Filter"
        style={{
          backgroundColor: '#6200EE', position: 'fixed', right: '2rem', bottom: '2rem',
        }}
        icon={(<MaterialIcon icon="filter_list" />)}
        onClick={toggleOpen}
      />
      <Dialog
        open={isOpen}
        onClose={toggleOpen}
      >
        <DialogTitle>Filter</DialogTitle>
        <DialogContent className="">
          <div className="flex-column">
            <DynamicSelect
              label="Problem"
              value={problem}
              valueList={problemList}
              onValueChange={onProblemChange}
            />
            <DynamicSelect
              label="Language"
              value={language}
              valueList={langList}
              onValueChange={onLangChange}
            />
            <DynamicSelect
              label="Type"
              value={type}
              valueList={typeList}
              onValueChange={onTypeChange}
            />
            <div className="pa2">
              <DialogButton
                className="pa2 w-100"
                raised
                action="filter"
                onClick={() => {
                  console.log(selectedValues);
                }}
              >
                Filter
              </DialogButton>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};


export default FilterButton;
