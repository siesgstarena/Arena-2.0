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
        We are going to choose the third problem Vowel Shovel.
      </Body1>
    </div>
  );

  const dissectingProblemContent = (
    <div>
      <Headline3 className="purple">Dissecting the Problem</Headline3>
      <Body1 className="ma0">
        The problem is actually quite simple, that is our goal is
        to make a program that successfully removes all occurrences of vowels in our strings.
      </Body1>
      <Headline6 className="mt3 ma0">Read the problem description.</Headline6>
      <Body1 className="ma0">
        The description is accompanied by a storyline, which doesn’t
        really achieve much in this trivial problem but such descriptions
        help understand the problem and its application in real life.
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
      <Body1>Let&apos;s write our pseudo code!</Body1>
      <Body1>
        This is simple set of steps written for our understanding.
      </Body1>
      <Body1>
        Now you need to think about it and maybe even write it down,
        with enough practice you will be able to map all these instructions
        at once and follow the flow of the program.
      </Body1>
      <Body1>Lets start!</Body1>
      <Body1>We will really keep things simple here.</Body1>
      <Body1>
        All we need to do is take string as input and check for
        every character whether it is a vowel or not.
      </Body1>
      <Body1>
        If it is not we will output the character, else we
        will skip it until the entire string is traced.
      </Body1>
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
              <span className="blue"> &lt;iostream&gt;</span>
            </div>
            <div className="mb4">
              using namespace
              <span className="green"> std</span>
              ;
            </div>
            <div className="dark-blue mb4">int main() &#123;</div>
            <div className="ml3">
              <div>int i, T, x;</div>
              <div className="mb2">
                <span className="green">string </span>
                str;
              </div>
              <div>
                <span className="green">cin </span>
                &gt;&gt; T;
              </div>
              <div className="gray">&#47;&#47; Perform the same task T times</div>
              <div>
                for (i =
                <span className="red"> 0</span>
                ; i &lt;
                <span className="red"> T</span>
                ; i++) &#123;
              </div>
              <div className="ml3">
                <div>
                  <span className="green">cin </span>
                  &gt;&gt; str;
                </div>
                <div className="mb3">
                  <span>int x = str.length(); </span>
                  <span className="gray">&#47;&#47; Number of characters in the string</span>
                </div>
                <div>
                  for (i =
                  <span className="red"> 0</span>
                  ; i &lt;
                  <span className="red"> x</span>
                  ; i++) &#123;
                </div>
                <div className="ml3">
                  <div className="mb3">
                    if (!(str[i] ==
                    <span className="red"> &#39;a&#39; </span>
                    || str[i] ==
                    <span className="red"> &#39;e&#39; </span>
                    || str[i] ==
                    <span className="red"> &#39;i&#39; </span>
                    || str[i] ==
                    <span className="red"> &#39;o&#39; </span>
                    ||
                    <div className="ml5 mb3">
                      str[i] == &#39;u&#39;))
                      <span className="gray">  &#47;&#47; Checking each character</span>
                    </div>
                    <div className="ml3">
                      <span className="green">cout </span>
                      &lt;&lt;
                      str[i];
                    </div>
                  </div>
                </div>
                <div>
                  &#125;
                  <div>
                    <span className="green">cout </span>
                    &lt;&lt;
                    <span className="red"> &#34;\n&#34;</span>
                    ;
                    <span className="gray">  &#47;&#47; Newline for the next testcase’s output</span>
                  </div>
                </div>
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
        topic="Adhoc"
        gettingStartedContent={gettingStartedContent}
        dissectingProblemContent={dissectingProblemContent}
        pseudoCodeContent={pseudoCodeContent}
        writingCodeContent={writingCodeContent}
      />
    </div>
  );
};

export default UNI01;
