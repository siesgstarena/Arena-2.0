import React from 'react';
import { Headline3, Body1, Headline6 } from '@material/react-typography';
import SideBar from './SideBar';

const UNI05 = () => {
  const gettingStartedContent = (
    <div>
      <Headline3 className="purple">Getting Started</Headline3>
      <Body1 className="ma1">
        So here we are! If you&apos;re ready to start the playlist let&apos;s get
        started!
      </Body1>
      <Body1 className="ma1">
        If you are a beginner and this is your first playlist, don&apos;t worry
        you are at the right place!
      </Body1>
      <Body1 className="ma1">
        We are going to use a problem from the Universe of arena, where all the
        problems are kept open for submission for a long span of time.
      </Body1>
      <Body1 className="ml1">
        We are going to choose the fifth problem Distance Finder.
      </Body1>
    </div>
  );

  const dissectingProblemContent = (
    <div>
      <Headline3 className="purple">Dissecting the Problem</Headline3>
      <Body1>
        There is a very straightforward description for this problem.
      </Body1>
      <Body1>Understand the input output and the pattern for it.</Body1>
      <Body1>
        The input for this problem isn’t as straightforward as the description though!
      </Body1>
    </div>
  );

  const pseudoCodeContent = (
    <div>
      <Headline3 className="purple">Creating a Pseudo Code</Headline3>
      <Body1 className="ma0">
        We know how to create a pseudo code! It&apos;s just a bunch of arrows
        and block which do the processing. To know more about pseudo code visit <a href="https://en.wikipedia.org/wiki/Pseudocode" target="_blank" rel="noopener noreferrer">here</a>.
      </Body1>
      <Headline6 className="mt3 ma0">Let’s write our pseudo code!</Headline6>
      <Body1>This is a simple set of steps written for our understanding.</Body1>
      <Body1>
        Now you need to think about it and maybe even write it down, with enough
        practice you will be able to map all these instructions at once and
        follow the flow of the program.
      </Body1>
      <Headline6 className="mt3 ma0">Let’s start!</Headline6>
      <Body1>First we need to take out the numbers from the input.</Body1>
      <Body1>
        There are various ways one can go about this, but I like to use
        temporary variables for unwanted input characters.
      </Body1>
      <Body1>
        Another way could be the efficient use of scanf(), but we will see how
        it is done with cin, or rather any other input object.
      </Body1>
      <Body1>
        We will be using the Euclidean distance formula More info here.
      </Body1>
    </div>
  );

  const writingCodeContent = (
    <div>
      <Headline3 className="purple">Writing Code </Headline3>
      <code>
        <div className="ba br4 bw2 b--gray bg-gray w-90-l">
          <div className="pa3 br4" style={{ backgroundColor: 'aliceblue' }}>
            <div className="dark-blue mb4">
              #include
              <span className="blue">&lt;bits/stdc++.h&gt;</span>
              <br />
              <span className="black">using namespace </span>
              <span className="green">std</span>
;
            </div>
            <div className="dark-blue mb4">int main() &#123;</div>
            <div className="ml3">
              <div>int T;</div>
              <div className="mb4">
                <span className="green">cin</span>
                {'>> T;'}
                <br />
                char temp;
                <br />
                int x1,x2,y1,y2;
                <span className="gray">
                  &nbsp; &nbsp; &nbsp;// Our coordinates are integers
                </span>
                <br />
                double x, y, dist;
                <span className="gray">
                  &nbsp; &nbsp; // Though the distance may not be an integer
                </span>
              </div>
              <div className="mb4">
                while (T--) &#123;
                <span className="gray">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // Peform the
                  same task T times
                </span>
              </div>
              <div className="ml3">
                <div className="mb4 gray">
                  &nbsp;// Notice the input and set up the cin to take input for coordinates
                </div>
                <div className="mb4">
                  <span className="green">cin </span>
                  {'>> temp >> x1 >> temp >> y1 >> temp >> temp >> x2 >> temp >> y2 >> temp;'}
                </div>
                <div className="mb4">
                  int tot=
                  <span className="red">0</span>
;
                  <span className="gray">
                    &nbsp; &nbsp; // intializing tot as 0
                  </span>
                </div>
                <div>
                  x = (x1-x2)*(x1-x2);
                  <span className="gray">
                    &nbsp; &nbsp; &nbsp; &nbsp;// square of (x1-x2)
                  </span>
                  <br />
                  y = (y1 - y2)*(y1 - y2);
                  <span className="gray">
                    &nbsp; &nbsp; // square of (y1-y2)
                  </span>
                  <br />
                  dist =
                  <span className="green">sqrt</span>
(x + y);
                  <span className="gray">
                    &nbsp; &nbsp; &nbsp; &nbsp; // Taking square root
                  </span>
                  <br />
                  <span className="green">cout</span>
                  {'<< fixed << setprecision('}
                  <span className="red">2</span>
                  {') << dist <<'}
                  <span className="red">&quot;/n&quot;</span>
                  ;
                  <span className="gray">
                  &nbsp;  // Printing the distance upto 2 digits after decimal
                  </span>
                </div>
              </div>
              <div className="mb3">&#125;</div>
              <div className="red mb3">return 0;</div>
            </div>
            &#125;
          </div>
        </div>
      </code>
    </div>
  );

  return (
    <div>
      <SideBar
        topic="Geometry"
        gettingStartedContent={gettingStartedContent}
        dissectingProblemContent={dissectingProblemContent}
        pseudoCodeContent={pseudoCodeContent}
        writingCodeContent={writingCodeContent}
      />
    </div>
  );
};

export default UNI05;
