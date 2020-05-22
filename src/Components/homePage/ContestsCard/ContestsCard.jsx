import React from 'react';
import Card from '@material/react-card';
import { Link } from 'react-router-dom';

const ContestsCard = () => (
  <Link to="/contests/SRM16" className="no-underline pointer">
    <Card className="ma0 mb4 pa0" style={{ boxShadow: 'inset 0em -0.1em 0.3em 0.2em #eeeeee'}}>
      <img className="ba b--transparent br3" style={{ height: '41vh', width: 'auto' }} alt="icon" src="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-15/e35/90360094_100229638291851_4190043631945287152_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=fPWq1MdwHbwAX-QT85q&oh=dc0e8f235de8e9a8713f50fcd9b3b5af&oe=5EEBCB1F" />
      {/* <img className="center" style={{height: '33vh', width: '33vw' }} alt="icon" src="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/84867683_2782295012059555_1546362140160985343_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=hM8En4_0xLAAX9O6TTo&oh=1fb4ab72c9555712fda3ab38cbfd0a80&oe=5EECE1ED" /> */}
    </Card>
  </Link>
);

export default ContestsCard;
