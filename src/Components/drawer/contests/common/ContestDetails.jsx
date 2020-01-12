import React from 'react';
import Card from '@material/react-card';
import {
  Body1,
  Body2,
} from '@material/react-typography';
import 'tachyons';

// const [timeStamp, setTimeStamp] = useState(new Date());
// const [extractedDate, setExtractedDate] = useState(timeStamp.toLocaleTimeString());

// useEffect(() => {
//   setTimeStamp(new Date());
//   setExtractedDate(timeStamp.toLocaleTimeString());
// }, [timeStamp]);

const ContestDetails = () => (
  <Card className="pa2 tc">
    <Body1 className="mb0">
      Universe
    </Body1>
    <Body2 className="mid-gray">
    Contest open for 1 year with playlists problems
    </Body2>
    <hr className="ml3 mr3" />
    {/* <Headline3 className="ma0">
      {extractedDate}
    </Headline3> */}
  </Card>
);


export default ContestDetails;
