import React from 'react';
import { Headline3, Body1, Headline6 } from '@material/react-typography';
import SideBar from './SideBar';

const UNI06 = () => {
  const gettingStartedContent = (
    <div>
      <Headline3 className="purple">Getting Started</Headline3>
      <Body1 className="ma1">So here we are! If you&apos;re ready to start the playlist let&apos;s get started!</Body1>
      <Body1 className="ma1">
                If you are a beginner and this is your first playlist,
                don&apos;t worry you are at the right place!
      </Body1>
      <Body1 className="ma1">
                We are going to use a problem from the Universe of arena,
                where all the problems are kept open for submission for a long span of time.
      </Body1>
      <Body1 className="ml1">
                We are going to choose the sixth problem Time Never Stops
      </Body1>
    </div>
  );

  const dissectingProblemContent = (
    <div>
      <Headline3 className="purple">Dissecting the Problem</Headline3>
      <Body1 className="ml1">
                There is a very straightforward description for this problem.
      </Body1>
      <Body1 className="ml1">Understand the input output and the pattern for it.</Body1>
      <Body1 className="ml1">We have to extract the values for the hours and minutes first before processing them.</Body1>
    </div>
  );

  const pseudoCodeContent = (
    <div>
      <Headline3 className="purple">Creating a Pseudo Code</Headline3>
      <Body1 className="ma0">
                We know how to create a pseudo code!
          It&apos;s just a bunch of arrows and block which do the processing.
          To know more about pseudo code visit <a href="https://en.wikipedia.org/wiki/Pseudocode" target="_blank" rel="noopener noreferrer">here</a>.
      </Body1>
      <Headline6 className="mt3 ma0">Let&apos;s write our pseudo code!</Headline6>
      <Body1 className="ma0">
                This is a simple set of steps written for our understanding.
      </Body1>
      <Body1>
Now you need to think about it and maybe even write it down,
          with enough practice you will be able to map all
          these instructions at once and follow the flow of the program.
      </Body1>
      <Headline6 className="mt3 ma0">Let&apos;s start!</Headline6>
      <Body1 className="ma0">We take input for time as hr:min and store the respective values in respective variables.</Body1>
      <Body1>
This is easily achievable using scanf or cin creating
          a temporary variable, or using getchar(), or even using string delimiter!
      </Body1>
      <Body1>
There are various ways to go ahead with this.
          We will keep things simple and use scanf here.
      </Body1>
      <Body1>
We&apos;ll convert the hours to minutes, and minutes to
          seconds such that we have the amount of time in
          seconds starting from 00:00 that is 12 a.m.
      </Body1>
      <Body1>Subtracting the given times (in seconds) will give us the result!</Body1>
    </div>
  );

  const writingCodeContent = (
    <div>
      <Headline3 className="purple">Writing Code </Headline3>
      <code>
        <div className="ba br4 bw2 b--gray bg-gray w-90-l">
          <div className="pa3 br4" style={{ backgroundColor: 'aliceblue' }}>
            <div className="dark-blue">
                            #include
              <span className="blue"> &lt;bits/stdc++.h&gt;</span>
            </div>
            <div className="mb4">

using namespace
              {' '}
              <span className="green"> std</span>
;
            </div>
            <div className="dark-blue mb4">int main() &#123;</div>
            <div className="ml3">
              <div>int T;</div>
              <div>
                <span className="green">cin </span>
                <span>&gt;&gt; T;</span>
              </div>
              <div className="mt3 mb3">
                <div>
                                    while (T--) &#123;
                  <span className="gray">&#47;&#47; Peform the same task T times</span>
                </div>
              </div>
              <div className="ml4">
                <div className="mb3">int hrs1, min1, hrs2, min2;</div>
                <div>
                  <span className="green">scanf</span>
                                    (
                  <span className="red">&quot;%d:%d&quot;</span>
                                    , &hrs1, &min1);
                </div>
                <div className="mb3">
                  <span className="green">scanf</span>
                                    (
                  <span className="red">&quot;%d:%d&quot;</span>
                                    , &hrs2, &min2);
                </div>
                <div className="mb3">int second;</div>
                <div className="gray">&#47;&#47; Converting time to seconds and calculating difference in one step</div>
                <div>
second = (((hrs2 - hrs1) *
                  {' '}
                  <span className="red">60</span>
) + (min2 - min1)) *
                  {' '}
                  <span className="red">60</span>
;
                </div>
                <div className="mt3 mb3">
                  <span className="green">printf</span>
                                    (
                  <span className="red">&quot;%d\n&quot;</span>
                                    , second);
                  <span className="gray">&#47;&#47; printing the value on new line \n is important</span>
                </div>
              </div>
              <div className="mb3">
                                &#125;
              </div>
              <div className="mb3">
                                return
                {' '}
                <span className="red">0</span>
;
              </div>
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
        topic="Math"
        gettingStartedContent={gettingStartedContent}
        dissectingProblemContent={dissectingProblemContent}
        pseudoCodeContent={pseudoCodeContent}
        writingCodeContent={writingCodeContent}
      />
    </div>
  );
};

export default UNI06;
