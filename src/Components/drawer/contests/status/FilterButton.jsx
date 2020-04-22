import React, { useState } from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
} from '@material/react-dialog';
import MaterialIcon from '@material/react-material-icon';
import Fab from '@material/react-fab';
import DynamicSelect from '../../../common/DynamicSelect';
// Select Component to display for different values like
// Problem,language and Type


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

  const onVariableChange = setVariable => ((_, item) =>(
    setVariable(item.getAttribute('data-value')))
  );
  // Functions to update State
  const onProblemChange = onVariableChange(setProblem);

  const onLangChange = onVariableChange(setLanguage);

  const onTypeChange = onVariableChange(setType);

  const toggleOpen = () => setOpen(!isOpen);
  // Return
  return (
    <div>
      <Fab
        autoFocus={false}
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
        autoFocus={false}
      >
        <DialogTitle>Filter</DialogTitle>
        <DialogContent className="" autoFocus={false}>
          <div className="flex-column">
            <DynamicSelect
              className=""
              label="Problem"
              isValRequired
              value={problem}
              valueList={problemList}
              onValueChange={onProblemChange}
            />
            <DynamicSelect
              isValRequired
              label="Language"
              value={language}
              valueList={langList}
              onValueChange={onLangChange}
            />
            <DynamicSelect
              isValRequired
              label="Type"
              value={type}
              valueList={typeList}
              onValueChange={onTypeChange}
            />
            <div className="pa2">
              <DialogButton
                raised
                className="pa2 w-100"
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
