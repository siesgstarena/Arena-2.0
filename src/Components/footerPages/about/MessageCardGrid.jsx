import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import messages from './messages';
import MessageCard from './MessageCard';
import 'tachyons';

// In this component we combine all the messages in a proper grid layout.
const MessageCardGrid = () => {
  // MessagesArray is basically mapping all the messages to the MessageCard
  // We can then render the individual members of this array.
  const MessagesArray = messages.map(member => (
    <MessageCard
      message={member.message}
      name={member.name}
      color={member.color}
      key={member.id}
    />
  ));

  // color is the the border color for the member

  return (
    <Grid className="mt5 mb3 center mw8">
      {
        /*
          mt5 -> MarginTop5
          mb3 -> MarginBottom3
          mw8 -> MaxWidth8
        */
      }
      {
        /*
          In the Grid we have 1 row.
          On desktops, all three cells will be displayed side-by-side (4+4+4=12)
          On Tablets, two cells will be displayed side-by-side (4+4=8).
          The third cell will be moved down.
          On Phones, all the cards will be stacked.
        */
      }
      <Row>
        <Cell className="" desktopColumns={4} phoneColumns={4} tabletColumns={4}>
          <Cell>
            {MessagesArray[0]}
          </Cell>
          <Cell>
            {MessagesArray[1]}
          </Cell>
        </Cell>
        <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}>
          <Cell>
            {MessagesArray[2]}
          </Cell>
          <Cell>
            {MessagesArray[3]}
          </Cell>
        </Cell>
        <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}>
          <Cell>
            {MessagesArray[4]}
          </Cell>
          <Cell>
            {MessagesArray[5]}
          </Cell>
        </Cell>
      </Row>
    </Grid>
  );
};

export default MessageCardGrid;
