import React from 'react';
import { Headline5, Body1, Headline6 } from '@material/react-typography';
import coding from './assets/images/coding.png';
import git from './assets/icons/git.png';
import mail from './assets/icons/mail.png';
import insta from './assets/icons/instagram.png';
import './style.scss';

const ExpandPill = () => (
  <div>
    <Headline6 className="ma0 work-content-reach">Where to Reach ?</Headline6>
    <div className="work-content-pill">
      <div className="expand-pill">
        <Headline6 className="expand-pill-title">
          For setting problems, holding contests, write blogs!
        </Headline6>
        <div>
          <a rel="noopener noreferrer" target="_blank" href="mailto:codechef@siesgst.ac.in">
            <img alt="icon" src={mail} width="32" height="32" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/siesgstarena/"
          >
            <img alt="icon" width="32" height="32" src={insta} />
          </a>
        </div>
      </div>
      <div className="expand-pill">
        <Headline6 className="expand-pill-title">
          Wanna contribute to our site / projects ?
        </Headline6>
        <div>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/siesgstarena">
            <img alt="icon" src={git} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const WorkPageContainer = () => (
  <div className="work">
    <div className="work-header">
      <Headline5 className="work-header-title">Work with us</Headline5>
      <div>
        <img
          alt="work"
          loading="lazy"
          className="work-header-image"
          src={coding}
          // src="https://res.cloudinary.com/dh6iqxujx/image/upload/v1590579047/Arena/work_f8gedk.jpg"
        />
      </div>
    </div>
    <div className="work-content">
      <Body1>
        SIESGSTarena is a platform that believes in bringing up the best of everyone. Anyone from
        the GST family is welcome to try their hand in SIESGSTarena, by Problem Setting, Content
        Writing, and much more.
      </Body1>
      <Body1>
        We at SIESGSTarena allow individuals/groups of students, to try problem setting and held a
        contest. They will be guided by our team of Problem Setters and Testers and these inspired
        people are awarded certificates by SIESGSTarena itself!
      </Body1>
      <div className="work-content-divider center" />
      <ExpandPill />
    </div>
  </div>
);
export default WorkPageContainer;
