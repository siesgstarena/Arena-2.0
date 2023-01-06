import React, { useState, useContext } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Popover,
  Switch,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material/react-button';
import { Grid } from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';
import * as ace from 'ace-builds/src-noconflict/ace';
import { useApolloClient } from '@apollo/client';
import themes from '../defaults/themes';
import AceEditorContext from '../../../Contexts/AceEditorContext';
import { SAVE_CODE } from '../../../graphql/mutations';
import MessageCard from '../../common/MessageCard';
import '../Style.css';

ace.config.set('basePath', '/assets/ui/');
ace.config.set('modePath', '');
ace.config.set('themePath', '');
const Menu = ({ input, lang }) => {
  const client = useApolloClient();
  const [anchorEl, setAnchorEl] = useState(null);
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');

  const { editorConfig, setEditorConfig } = useContext(AceEditorContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const ShareCode = async () => {
    setMessageType('loading');
    setMessage('Creating link, Please Wait');
    const { data, error } = await client.mutate({
      mutation: SAVE_CODE,
      variables: {
        code: editorConfig.code,
        input,
        language: lang,
      },
    });
    JSON.stringify(error, null, 2);
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    setMessageType('success');
    const url = window.location.origin;
    setMessage(`${url}/code?share=${data.saveCode.editor.sharecode}`);
  };
  return (
    <>
      {/* <FormGroup> */}

      {/* </FormGroup> */}
      <Button raised aria-describedby={id} onClick={handleClick} style={{ marginTop: '0.5rem' }}>
        <MaterialIcon icon="settings" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Grid cellSpacing={2} className="p-10">
          <Grid xs={6} md={8} className="p-10">
            <InputLabel id="select-theme-label">Select Theme</InputLabel>
            <Select
              id="select-theme"
              labelId="select-theme-label"
              fullWidth
              value={editorConfig.theme}
              onChange={(e) => {
                setEditorConfig({
                  ...editorConfig,
                  theme: e.target.value,
                });
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              }}
            >
              {themes.available.map((singleTheme) => {
                // eslint-disable-next-line import/no-dynamic-require, global-require
                require(`ace-builds/src-noconflict/theme-${singleTheme.value}`);
                return (
                  <MenuItem key={singleTheme.value} value={singleTheme.value}>
                    {singleTheme.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid xs={6} md={8} className="p-10">
            <TextField
              value={editorConfig.fontSize}
              type="number"
              label="Font Size"
              variant="outlined"
              InputProps={{
                style: {
                  height: '3rem',
                },
              }}
              onChange={(e) => {
                setEditorConfig({
                  ...editorConfig,
                  fontSize: parseInt(e.target.value, 10),
                });
              }}
              required
            />
          </Grid>
          <Grid xs={6} md={8} className="p-10">
            <TextField
              type="number"
              label="Tab Size"
              variant="outlined"
              InputProps={{
                style: {
                  height: '3rem',
                },
              }}
              required
              value={editorConfig.tabSize}
              onChange={(e) => {
                setEditorConfig({
                  ...editorConfig,
                  tabSize: parseInt(e.target.value, 10),
                });
              }}
            />
          </Grid>
          <Grid xs={6} md={8} className="p-10">
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Intellisense"
              checked={editorConfig.enableLiveAutocompletion}
              onChange={(e) =>
                setEditorConfig({
                  ...editorConfig,
                  enableLiveAutocompletion: e.target.checked,
                })
              }
            />
          </Grid>
          <Grid xs={6} md={8} className="p-10">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={editorConfig.wrapEnabled} color="primary" />}
                label="Soft Wrap"
                onChange={(e) => {
                  setEditorConfig({
                    ...editorConfig,
                    wrapEnabled: e.target.checked,
                  });
                }}
              />
            </FormGroup>
          </Grid>
          <Grid xs={6} md={8} className="p-10">
            <MessageCard
              message={message}
              messageType={messageType}
              setMessageType={setMessageType}
            />

            <Button raised onClick={ShareCode}>
              Share
            </Button>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
};
Menu.propTypes = {
  input: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Menu;
