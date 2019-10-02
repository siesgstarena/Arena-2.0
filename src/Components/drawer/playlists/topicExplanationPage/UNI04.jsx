import React from 'react';
import { Headline3, Body1 } from '@material/react-typography';
import SideBar from './SideBar';

const UNI04 = () => {
  const gettingStartedContent = (
    <div>
      <Headline3 className="purple">Getting Started</Headline3>
      <Body1 className="ma1">So here we are! If you ready to start the playlist let&apos;s get started!</Body1>
      <Body1 className="ma1">
        If you are a beginner and this is your first playlist,
        don&apos;t worry you are at the right place!
      </Body1>
      <Body1 className="ma1">
        We are going to use a problem from the Universe of arena,
        where all the problems are kept open for submission for a long span of time.
      </Body1>
      <Body1 className="ml1">
        We are going to choose the fourth problem Tug Of War.
      </Body1>
    </div>
  );

  const dissectingProblemContent = (
    <div>
      <Headline3 className="purple">Dissecting the Problem</Headline3>
      <Body1 className="ma0">
        There is a very straightforward description for this problem.
      </Body1>
      <Body1 className="ma0">
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
      <Headline3 className="purple">Creating a Pseudo Code</Headline3>
      <Body1 className="ma0">
        We know how to create a pseudo code! Its just a bunch of
        arrows and block which do the processing.
        To know more about pseudo code visit here.
      </Body1>
      <Headline3 className="purple">Let&apos;s write our pseudo code!</Headline3>
      <Body1 className="ma0">
        This is simple set of steps written for our understanding.
      </Body1>
      <Body1 className="ma0">
        Now you need to think about it and maybe even write it down,
        with enough practice you will be able to map all these instructions
        at once and follow the flow of the program.
      </Body1>
      <Headline3 className="purple">Let&apos;s start!</Headline3>
      <Body1 className="ma0">
        We take input for the number of members in one team, and powers of each
        member of both the teams.
      </Body1>
      <Body1 className="ma0">
        We consider kind of a balanced integer at the start which moves either
        towards the right or left (on the number line) based on the alternate pattern of input.
      </Body1>
      <Body1 className="ma0">
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
      <Headline3 className="purple">Writing Code </Headline3>
      <code>
        <div className="ba br4 bw2 b--gray bg-gray w-90-l">
          <div className="pa3 br4" style={{ backgroundColor: 'aliceblue' }}>
            <div className="dark-blue mb4">
              #include
              <span className="blue">&lt;bits/stdc++.h&gt;</span>
            </div>
            <div className="dark-blue mb4">int main() &#123;</div>
            <div className="ml3">
              <div>int t, i, T, g;</div>
              <div className="mb4">
                <span className="green">scanf</span>
                (
                <span className="red">&quot;%d&quot;</span>
                , &T);
              </div>
              <div className="gray">&#47;&#47; Peform the same task T times</div>
              <div>
                while (T--) &#123;
              </div>
              <div className="ml3">
                <div className="gray">
                  &#47;&#47; input the number of integers to be taken next
                </div>
                <div className="mb4">
                  <span className="green">scanf</span>
                  (
                  <span className="red">&quot;%d&quot;</span>
                  , &t);
                </div>
                <div className="gray">&#47;&#47; intializing tot as 0</div>
                <div>
                  int tot=
                  <span className="red">0</span>
                  ;
                </div>

                <div>
                  for (i =
                  <span className="red">0</span>
                  ; i &lt; t
                  ; i++) &#123;
                </div>

                <div className="gray">
                  &#47;&#47; input the number which actually
                  needs to be checked
                </div>
                <div className="mb4">
                  <span className="green">scanf</span>
                  (
                  <span className="red">&quot;%d&quot;</span>
                  , &g);
                </div>

                <div className="gray">&#47;&#47; adding team 1 members&apos; powers</div>
                <div>tot = tot + g ;</div>

                <div className="mb4">
                  <span className="green">scanf</span>
                  (
                  <span className="red">&quot;%d&quot;</span>
                  , &g);
                </div>

                <div className="gray">&#47;&#47; subtracting team 2 members&apos; powers</div>
                <div>tot = tot + g ;</div>

                <div className="mb3">&#125;</div>

                <div>
                  if (tot&rt;
                  <span className="red">0</span>
                  ) &#123;
                </div>
                <div className="gray">&#47;&#47; // Team 1 wins</div>
                <div className="mb4">
                  <span className="green">printf</span>
                  (
                  <span className="red">&quot;1&quot;</span>
                  );
                </div>

                <div>&#125; else if (tot&lt;0) &#123;</div>
                <div className="gray">&#47;&#47; // Team 1 wins</div>
                <div className="mb4">
                  <span className="green">printf</span>
                  (
                  <span className="red">&quot;2&quot;</span>
                  );
                </div>

                <div className="mb4">&#125; else &#123;</div>
                <div className="gray">&#47;&#47; // Draw</div>

                <div className="mb4">
                  <span className="green">printf</span>
                  (
                  <span className="red">&quot;0&quot;</span>
                  );
                </div>
                <div>&#125;</div>

                <div className="mb3">&#125;</div>

                <div className="mb2">
                  return
                  <span className="red">0</span>
                  ;
                </div>

                <div>&#125;</div>
              </div>
            </div>
          </div>
        </div>
      </code>
    </div>
  );

  return (
    <div>
      <SideBar
        topic="Adhoc"
        gettingStartedContent={gettingStartedContent}
        dissectingProblemContent={dissectingProblemContent}
        pseudoCodeContent={pseudoCodeContent}
        writingCodeContent={writingCodeContent}
      />
    </div>
  );
};

export default UNI04;
