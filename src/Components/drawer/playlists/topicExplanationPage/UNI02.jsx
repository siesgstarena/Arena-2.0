import React from 'react';
import { Headline3, Body1, Headline6 } from '@material/react-typography';
import SideBar from './SideBar';

const UNI02 = () => {
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
        We are going to choose the second problem Odd or Even.
      </Body1>
    </div>
  );

  const dissectingProblemContent = (
    <div>
      <Headline3 className="purple">Dissecting the Problem</Headline3>
      <Body1 className="mb1">
        There is a very straightforward description for this problem.
        {' '}
      </Body1>
      <Body1 className="ma0 mb1">
        Understand the input output and the pattern for it.
        {' '}
      </Body1>
      <Body1 className="ma0 mb1">
        Only thing that you should consider is that the output is needed to be on a single line.
        {' '}
      </Body1>
    </div>
  );

  const pseudoCodeContent = (
    <div>
      <Headline3 className="purple">Creating a Pseudo Code</Headline3>
      <Body1 className="ma0">
        We know how to create a pseudo code!
        It&apos;s just a bunch of arrows and block which do the processing.
        To know more about pseudo code visit here.
      </Body1>
      <Headline6 className="mt3 ma0">Let&apos;s write our pseudo code!</Headline6>
      <Body1 className="ma0">
        This is simple set of steps written for our understanding.
        <br />
        Now you need to think about it and maybe even write it down,
        with enough practice you will be able to map all these instructions at once and
        follow the flow of the program.
      </Body1>
      <Headline6 className="mt3 ma0">Let&apos;s start!</Headline6>
      <Body1 className="ma0">
        We need to take input for the integer.

        Then we&apos;ll check whether the integer is a multiple of 2 or not.
        This can be done easily by checking the remainder for the division of that number.
        If it is 0, means the number is ever or else it is odd.
        We&apos;ll print the parity in terms of
        &apos;E&apos; or &apos;O&apos; as per the description.
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
              <span className="blue">&lt;stdio.h&gt;</span>
            </div>
            <div className="dark-blue mb4">int main() &#123;</div>
            <div className="ml3">
              <div>int t, i, T, g;</div>
              <br />
              <div className="mb4">
                <span className="green">scanf</span>
                (
                <span className="red">&quot;%d&quot;</span>
                , &T);
              </div>
              <div className="gray">&#47;&#47; Perform the same task T times</div>
              <div>
                for (i =
                <span className="red"> 0</span>
                ; i &lt;
                <span> T</span>
                ; i++) &#123;
              </div>
              <div className="ml3">
                <div className="gray">&#47;&#47; input the number of integers to be taken next</div>
                <div className="mb4">
                  <span className="green">scanf</span>
                  (
                  <span className="red">&quot;%d&quot;</span>
                  , &t);
                </div>
                <div>
                for (i =
                  <span className="red"> 0</span>
                ; i &lt;
                  <span> t</span>
                ; i++) &#123;
                </div>
                <div className="ml3">
                  <div className="gray">&#47;&#47; input the number of integers to be taken next</div>
                  <span className="green">scanf</span>
                  (
                  <span className="red">&quot;%d&quot;</span>
                  , &g);
                </div>
                <div className="ml3">
                  {' '}
if (g%
                  <span className="red">2</span>
==
                  <span className="red">0</span>
) &#123;
                  {' '}
                </div>
                <div className="ml4">
                  <span className="green">printf</span>
                  (
                  <span className="red">&quot;E&quot;</span>
                  );
                </div>
                <div className="ml3"> &#125; else &#123;</div>
                <div className="ml4">
                  <span className="green">printf</span>
                  (
                  <span className="red">&quot;O&quot;</span>
                  );
                </div>
                <div className="ml3"> &#125; </div>
                <div className="mb3">&#125;</div>
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
        topic="Adhoc"
        gettingStartedContent={gettingStartedContent}
        dissectingProblemContent={dissectingProblemContent}
        pseudoCodeContent={pseudoCodeContent}
        writingCodeContent={writingCodeContent}
      />
    </div>
  );
};

export default UNI02;
