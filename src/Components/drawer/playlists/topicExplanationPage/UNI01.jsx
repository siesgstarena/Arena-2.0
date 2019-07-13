import React from 'react';
import { Headline3, Body1, Headline6 } from '@material/react-typography';
import SideBar from './SideBar';

const UNI01 = () => {
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
        We are going to choose the first problem Jumping Rahul.
      </Body1>
    </div>
  );

  const dissectingProblemContent = (
    <div>
      <Headline3 className="purple">Dissecting the Problem</Headline3>
      <Body1 className="ma0">
        Let’s look at the composition of a typical arena problem.
        First off is the description. Usually, a problem will be led off with a
        high-level description of a situation. This description may tie into real-life ideas and
        topics or it may just be a completely fictional story, serving only as some sort of context.
        For many problems the back-story itself is not particularly important in understanding
        the actual problem at hand.
      </Body1>
      <Headline6 className="mt3 ma0">Read the problem description.</Headline6>
      <Body1 className="ma0">
        Next comes the input and output section. It gives you the skeleton of the solution
        you need to write and how should the output look.
      </Body1>
      <Headline6 className="mt3 ma0">Try to understand the Input and Output given by relating it to the description.</Headline6>
      <Body1 className="ma0">
        Finally, a set of examples is provided. These give sample inputs against which you
        can test your program. The given parameters will be in the correct order,
        followed by the expected return value and, optionally, an explanation of the test case.
      </Body1>
      <Headline6 className="mt3 ma0">Make sense out of that Input-Output and try to relate it with the examples and corner cases.</Headline6>
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
      <Body1>Let&apos;s start with it!</Body1>
      <Body1>
        We know that Rahul is at the centre block and can go at only 4 positions.
      </Body1>
      <Body1>Lets take the input first.</Body1>
      <Body1>We&apos;ll take the weight of Rahul</Body1>
      <Body1>We&apos;ll take the weight each stone can handle.</Body1>
      <Body1>We&apos;ll check which stone has the weight more than Rahul&apos;s weight.</Body1>
      <Body1>We&apos;ll print the weight of that stone.</Body1>
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
              <div className="gray">&#47;&#47; We&apos;ll take the weight of Rahul</div>
              <div>int rahul_weight, t, i, left, right, front, back;</div>
              <div className="mb4">
                <span className="green">scanf</span>
                (
                <span className="red">&quot;%d&quot;</span>
                , &t);
              </div>
              <div className="gray">&#47;&#47; Perform the same task T times</div>
              <div>
                for (i =
                <span className="red">0</span>
                ; i &lt;
                <span className="red">t</span>
                ; i++) &#123;
              </div>
              <div className="ml3">
                <div className="gray">&#47;&#47; We&apos;ll take the weight of Rahul</div>
                <div className="mb4">
                  <span className="green">scanf</span>
                  (
                  <span className="red">&quot;%d&quot;</span>
                  , &rahul_weight);
                </div>
                <div className="gray">&#47;&#47; We&apos;ll take the weight each stone can handle</div>
                <div className="mb4">
                  <span className="green">scanf</span>
                  (
                  <span className="red">&quot;%d %d %d %d&quot;</span>
                  , &left, &right, &front, &back);
                </div>
                <div className="gray">&#47;&#47; We&apos;ll check which stone has more weight than Rahul&apos;s weight</div>
                if (rahul_weight &lt; left) &#123;
                <div>
                  <span className="green">printf</span>
                  (
                  <span className="red">&quot;%d\n&quot;</span>
                  , left);
                  &nbsp;
                  <span className="gray">&#47;&#47; \n is important because it will print output on a new line.</span>
                </div>
                &#125; else if (rahul_weight &lt; right) &#123;
                <div>
                  <span className="green">printf</span>
                  (
                  <span className="red">&quot;%d\n&quot;</span>
                  , right);
                </div>
                &#125; else if (rahul_weight &lt; front) &#123;
                <div>
                  <span className="green">printf</span>
                  (
                  <span className="red">&quot;%d\n&quot;</span>
                  , front);
                </div>
                &#125; else if (rahul_weight &lt; back) &#123;
                <div>
                  <span className="green">printf</span>
                  (
                  <span className="red">&quot;%d\n&quot;</span>
                  , back);
                </div>
                &#125; else &#123;
                <div>
                  <span className="green">printf</span>
                  (
                  <span className="red">&quot;-1\n&quot;</span>
                  );
                </div>
                <div className="mb3">&#125;</div>
              </div>
              <div className="mb3">
                &#125;
              </div>
              <div className="red mb3">
                return 0;
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
        gettingStartedContent={gettingStartedContent}
        dissectingProblemContent={dissectingProblemContent}
        pseudoCodeContent={pseudoCodeContent}
        writingCodeContent={writingCodeContent}
      />
    </div>
  );
};

export default UNI01;
