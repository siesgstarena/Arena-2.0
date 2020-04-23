import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogContent,
  DialogButton,
  DialogTitle,
} from '@material/react-dialog';
import Select from '@material/react-select';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material/react-button';
import 'tachyons';
import MaterialIcon from '@material/react-material-icon';
import Fab from '@material/react-fab';

const FilterButton = ({
  problems, problemCode = 'None', type: initialType = 'None', language: initialLanguage = 'None',
}) => {
  // State
  const [isOpen, setOpen] = useState(false);
  const [problem, setProblem] = useState(problemCode);
  const [language, setLanguage] = useState(initialLanguage);
  const [type, setType] = useState(initialType);

  // This effect is to set the states to the default values when all the filters are reset.
  // However this can cause different side-effects when the search query will change.
  // Need to find a better solution.
  useEffect(() => {
    setProblem(problemCode);
    setLanguage(initialLanguage);
    setType(initialType);
  }, [initialLanguage, initialType, problemCode]);

  let problemOptions = [{ value: 'None', label: 'Choose Problem' }];
  const incomingProblemOptions = problems.map(problemOption => ({
    value: problemOption.code,
    label: `${problemOption.name} (${problemOption.code})`,
  }));
  problemOptions = [...problemOptions, ...incomingProblemOptions];

  const languageOptions = [
    { value: 'None', label: 'Choose Language' },
    { value: 'C', label: 'C' },
    { value: 'C++', label: 'C++' },
    { value: 'Python', label: 'Python 2' },
    { value: 'Python3', label: 'Python 3' },
    { value: 'Go', label: 'Go' },
    { value: 'Java', label: 'Java' },
    { value: 'Javascript', label: 'Javascript' },
  ];
  const typeOptions = [
    { value: 'None', label: 'Choose Type' },
    { value: 'Accepted', label: 'Accepted' },
    { value: 'Wrong Answer', label: 'Wrong Answer' },
    { value: 'Runtime Error', label: 'Runtime Error' },
    { value: 'Compilation Error', label: 'Compilation Error' },
    { value: 'Time Limit Exceeded', label: 'Time Limit Exceeded' },
  ];
  const history = useHistory();
  const location = useLocation();

  const onVariableChange = setVariable => ((_, item) => (
    setVariable(item.getAttribute('data-value')))
  );
  // Functions to update State
  const onProblemChange = onVariableChange(setProblem);
  const onLanguageChange = onVariableChange(setLanguage);
  const onTypeChange = onVariableChange(setType);
  const toggleOpen = () => setOpen(!isOpen);

  // Return
  return (
    <div>
      <Fab
        textLabel="Filter"
        className="center"
        style={{
          backgroundColor: '#6200EE', position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 100,
        }}
        icon={(<MaterialIcon icon="filter_list" />)}
        onClick={toggleOpen}
      />
      <Dialog
        className=""
        open={isOpen}
        onClose={toggleOpen}
      >
        <DialogTitle style={{ height: '30px' }}>
          {
            /*
            Here we have placed a dummy button which
            solves wierd foucs issues with select boxes
            */
          }
          <Button
            style={{
              backgroundColor: 'white',
              color: 'Black',
              boxShadow: 'none',
              cursor: 'default',
            }}
            raised
          />
        </DialogTitle>
        <DialogContent className="">
          <div className="flex-column">
            <Select
              label="Choose Problem"
              className="w-100"
              notchedOutlineClassName="pa2"
              enhanced
              outlined
              value={problem}
              options={problemOptions}
              onEnhancedChange={onProblemChange}
            />
            <Select
              label="Choose Language"
              className="w-100"
              notchedOutlineClassName="pa2"
              enhanced
              outlined
              value={language}
              options={languageOptions}
              onEnhancedChange={onLanguageChange}
            />
            <Select
              label="Choose Type"
              className="w-100"
              notchedOutlineClassName="pa2"
              enhanced
              outlined
              value={type}
              options={typeOptions}
              onEnhancedChange={onTypeChange}
            />
            <div className="pa2">
              <DialogButton
                raised
                className="pa2 w-100"
                action="filter"
                onClick={() => {
                  let searchString = '';
                  if (problem !== 'None') {
                    // Appeding to searchquery if problem exists
                    searchString += `problemCode=${problem}`;
                  }
                  if (language !== 'None') {
                    // Appeding to searchquery if language exists
                    if (searchString !== '') {
                      // if searchString already has something then we append & before language
                      // to separate them
                      searchString += `&language=${language}`;
                    } else {
                      searchString += `language=${language}`;
                    }
                  }
                  if (type !== 'None') {
                    if (searchString !== '') {
                      searchString += `&type=${type}`;
                    } else {
                      searchString += `type=${type}`;
                    }
                  }
                  history.push({
                    pathname: location.pathname,
                    search: searchString,
                  });
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

FilterButton.propTypes = {
  problems: PropTypes.array.isRequired,
  language: PropTypes.string,
  type: PropTypes.string,
  problemCode: PropTypes.string,
};

export default FilterButton;
