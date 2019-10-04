import React from 'react';
import { Headline4, Headline5, Body1 } from '@material/react-typography';
import SideBar from './SideBar';

const UNI04 = () => {
  const gettingStartedContent = (
    <div>
      <Headline4 className="purple">Getting Started</Headline4>
      <Body1 className="ma0">So here we are! If you ready to start the playlist let&apos;s get started!</Body1>
      <Body1 className="ma0">
        If you are a beginner and this is your first playlist,
        don&apos;t worry you are at the right place!
      </Body1>
      <Body1 className="ma0">
        We are going to use a problem from the Universe of arena,
        where all the problems are kept open for submission for a long span of time.
      </Body1>
      <Body1 className="mt3">
        We are going to choose the fourth problem Tug Of War.
      </Body1>
    </div>
  );

  const dissectingProblemContent = (
    <div>
      <Headline4 className="purple">Dissecting the Problem</Headline4>
      <Body1 className="ma0 mb3">
        There is a very straightforward description for this problem.
      </Body1>
      <Body1 className="ma0 mb3">
        Understand the input output and the pattern for it, which
        is very important especially for this problem.
      </Body1>
      <Body1 className="ma0">
        Notice that the powers are taken in an alternate fashion.
      </Body1>
    </div>
  );

  const pseudoCodeContent = (
    <div>
      <Headline4 className="purple">Creating a Pseudo Code</Headline4>
      <Body1 className="ma0">
        We know how to create a pseudo code! Its just a bunch of
        arrows and block which do the processing.
        To know more about pseudo code visit here.
      </Body1>
      <Headline5 className="black mb3 mt3">Let&apos;s write our pseudo code!</Headline5>
      <Body1 className="ma0 mb2">
        This is simple set of steps written for our understanding.
      </Body1>
      <Body1 className="ma0">
        Now you need to think about it and maybe even write it down,
        with enough practice you will be able to map all these instructions
        at once and follow the flow of the program.
      </Body1>
      <Headline5 className="black mb3 mt3">Let&apos;s start!</Headline5>
      <Body1 className="ma0 mb2">
        We take input for the number of members in one team, and powers of each
        member of both the teams.
      </Body1>
      <Body1 className="ma0 mb2">
        We consider kind of a balanced integer at the start which moves either
        towards the right or left (on the number line) based on the alternate pattern of input.
      </Body1>
      <Body1 className="ma0 mb2">
        That mean we will be adding the powers of team 1 members and subtracting the powers
        of team 2 members starting with ‘0&apos;.
      </Body1>
      <Body1 className="ma0">
        If we end at 0, means the powers are balanced. If we move towards the
        positive end, team 1 wins or else team 2 wins!
      </Body1>
    </div>
  );

  const writingCodeContent = (
    <div>
      <Headline4 className="purple">Writing Code </Headline4>
      <code>
        <div className="ba br4 bw2 b--gray bg-gray w-90-l">
          <div className="pa3 br4" style={{ backgroundColor: 'aliceblue' }}>
            <div className="dark-blue mb4">
              #include&nbsp;
              <span className="blue">&lt;bits/stdc++.h&gt;</span>
              <div className="black">
                using namespace&nbsp;
                <span className="dark-green">std</span>
                ;
              </div>
            </div>

            <div className="mb3">
              int&nbsp;
              <span className="dark-red">main</span>
              () &#123;
            </div>

            <div className="ml3">
              <div className="mb1">int t, i, T, g;</div>
              <div className="mb3">
                <span className="dark-green">scanf</span>
                (
                <span className="dark-red">&quot;%d&quot;</span>
                , &T);
              </div>

              <div className="mb3">
                while (T--) &#123;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="gray">&#47;&#47; Peform the same task T times</span>
              </div>

              <div className="ml4">
                <div className="mb1">
                  <span className="dark-green">scanf</span>
                  (
                  <span className="dark-red">&quot;%d&quot;</span>
                  , &t);
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="gray">
                    &#47;&#47; input the number of integers to be taken next
                  </span>
                </div>

                <div className="mb3">
                  int tot=
                  <span className="dark-red">0</span>
                  ;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;
                  <span className="gray">&#47;&#47; intializing tot as 0</span>
                </div>

                <div className="mb3">
                  for (i =&nbsp;
                  <span className="dark-red">0</span>
                  ; i &lt; t;
                  &nbsp;i++) &#123;
                </div>

                <div className="ml3">
                  <div className="mb1">
                    <span className="dark-green">scanf</span>
                    (
                    <span className="dark-red">&quot;%d&quot;</span>
                    , &g);
                    &nbsp;&nbsp;&nbsp;
                    <span className="gray">
                      &#47;&#47; input the number which actually
                      needs to be checked
                    </span>
                  </div>

                  <div className="mb1">
                    tot = tot + g;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="gray">&#47;&#47; adding team 1 members&apos; powers</span>
                  </div>

                  <div className="mb1">
                    <span className="dark-green">scanf</span>
                    (
                    <span className="dark-red">&quot;%d&quot;</span>
                    , &g);
                  </div>

                  <div className="mb3">
                    tot = tot + g;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="gray">&#47;&#47; subtracting team 2 members&apos; powers</span>
                  </div>
                </div>

                <div className="mb3">&#125;</div>

                <div className="mb3">
                  if (tot&nbsp;&gt;&nbsp;
                  <span className="dark-red">0</span>
                  ) &#123;
                </div>
                <div className="mb3 ml3">
                  <span className="dark-green">printf</span>
                  (
                  <span className="dark-red">&quot;1&quot;</span>
                  );
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="gray">&#47;&#47; Team 1 wins</span>
                </div>

                <div className="mb3">&#125; else if (tot&nbsp;&lt;&nbsp;0) &#123;</div>
                <div className="mb3 ml3">
                  <span className="dark-green">printf</span>
                  (
                  <span className="dark-red">&quot;2&quot;</span>
                  );
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="gray">&#47;&#47; Team 2 wins</span>
                </div>

                <div className="mb3">&#125; else &#123;</div>
                <div className="mb3 ml3">
                  <span className="dark-green">printf</span>
                  (
                  <span className="dark-red">&quot;0&quot;</span>
                  );
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="gray">&#47;&#47; Draw</span>
                </div>
                <div className="mb3">&#125;</div>
              </div>

              <div className="mb3">&#125;</div>
              <div className="mb3">
                return&nbsp;
                <span className="dark-red">0</span>
                ;
              </div>
            </div>
            <div>&#125;</div>
          </div>
        </div>
      </code>
    </div>
  );

  return (
    <div>
      <SideBar
        topic="Adhoc, Math"
        gettingStartedContent={gettingStartedContent}
        dissectingProblemContent={dissectingProblemContent}
        pseudoCodeContent={pseudoCodeContent}
        writingCodeContent={writingCodeContent}
      />
    </div>
  );
};

export default UNI04;
