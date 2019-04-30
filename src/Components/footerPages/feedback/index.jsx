import React from 'react';
import './index.scss';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body1 } from '@material/react-typography';
import Button from '@material/react-button';
import 'tachyons';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <Grid className="mw8 center">
        <Row className="">
          <Cell desktopColumns={5}>
            <Headline4 className="purple">
              Feedback time
            </Headline4>
            <Body1 className="mid-gray">
              Your Valuable feedback matters us a lot.
              It helps us to constantly improve our platform
              to make it a better place for the community.
            </Body1>
          </Cell>
          <Cell desktopColumns={5}>
            <div className="pa3">
              <TextField
                label="Full Name"
                className="pa2 mb4 w-100"
                outlined
              >
                <Input
                  value={name}
                  onChange={e => this.setState({ name: e.currentTarget.value })}
                />
              </TextField>
              <TextField
                label="Email address"
                className="pa2 mb4 w-100"
                outlined
              >
                <Input
                  value={email}
                  onChange={e => this.setState({ email: e.currentTarget.value })}
                />
              </TextField>
              <TextField
                label="Message"
                className="mb4 text-area-border"
                textarea
              >
                <Input
                  value={message}
                  onChange={e => this.setState({ message: e.currentTarget.value })}
                />
              </TextField>
              <Button raised>
                Submit
              </Button>
            </div>
          </Cell>
        </Row>
      </Grid>
    );
  }
}

export default Feedback;
