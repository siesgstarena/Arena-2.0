import React from 'react';
import { Headline4, Body2, Body1 } from '@material/react-typography';
import 'tachyons';

const Privacy = () => (
  <div className="ml6-l mr6-l ml2 mr2 ml4-m mr4-m">
    <Headline4 className="purple">
      Privacy Policy
      <Body2 className="gray">Last Updated: 20 December 2018</Body2>
    </Headline4>
    <Body1>
      We recognize that your privacy is very important and take it seriously. Our SIESGSTarena
      Privacy Policy (“Privacy Policy”) describes our policies and procedures on the collection,
      use, disclosure, and sharing of your information when you use the SIESGSTarena Platform. We
      will not use or share your information with anyone except as described in this Privacy Policy.
      This Privacy Policy applies to activities by SIESGSTarena and its affiliates and subsidiaries
      (collectively “SIESGSTarena,” “we” or “us”).
    </Body1>
    <Body1>
      Information We Collect
      <br />
      <span className="mid-gray">
        We collect information directly from individuals, from third-parties and automatically
        through the SIESGSTarena Platform.
      </span>
    </Body1>
    <Body1>
      Account and Profile Information
      <br />
      <span className="mid-gray">
        When you create an account and profile on the SIESGSTarena Platform, we collect your name,
        contact information, and other information you provide, such as topics that you know about
        or find interesting. Your name, photo, and any other information that you choose to add to
        your public-facing profile will be available for viewing to users of the SIESGSTarena
        Platform. Once you activate a profile, other users will be able to see in your profile
        certain information about your activity on the SIESGSTarena Platform, such as your
        submissions to problems, your followers and who you follow, topics of interest to you, the
        information you list in profile, and your edits to your blog post.
      </span>
    </Body1>
    <Body1>
      Your Content
      <br />
      <span className="mid-gray">
        We collect and store the information and content that you post to the SIESGSTarena Platform,
        including your questions, answers, photos, comments. Unless you have posted certain content
        anonymously, Your Content, date and time stamps, and all associated comments are publicly
        viewable on the SIESGSTarena Platform, along with your name. This also may be indexed by
        search engines and be republished elsewhere on the internet. As of December 2018, we will be
        publishing all the data generated on this platform, on a website called&nbsp;
        <a
          className="dim no-underline i mid-gray"
          href="https://www.kaggle.com/datasets"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kaggle
        </a>
        . Data generated will be released as Datasets on Kaggle, for research purposes. This action
        is taken to motivate and strengthen research activities.
      </span>
    </Body1>
    <Body1>
      Automatically Collected Information About Your Activity
      <br />
      <span className="mid-gray">
        We use cookies, log files, pixel tags, local storage objects, and other tracking
        technologies to automatically collect information about your activities, such as your
        searches, page views, date and time of your visit, and other information about your use of
        the SIESGSTarena Platform. We also collect and may store information that your computer or
        mobile device provides to us in connection with your use of the SIESGSTarena Platform such
        as your browser type, type of computer or mobile device, browser language, IP address,
        mobile carrier, unique device identifier, location, and requested and referring URLs. We
        also receive information when you view content on or otherwise interact with the
        SIESGSTarena Platform, even if you have not created an account.
      </span>
    </Body1>
    <Body1>
      How We Protect Your Information
      <br />
      <span className="mid-gray">
        The security of your information is important to us. SIESGSTarena has implemented safeguards
        to protect the information we collect. However, no website or Internet transmission is
        completely secure. We urge you to take steps to keep your personal data safe, such as
        choosing strong password and keeping it private, as well as logging out of your user
        account, and closing your web browser when finished using the SIESGSTarena Platform.
      </span>
    </Body1>
    <Body1>
      Access and Amend Your Information
      <br />
      <span className="mid-gray">
        You may update or correct your account information at any time by logging in to your
        account. You may also make a number of other adjustments to settings or the display of
        information about you as described in more detail in the following section about Your
        Choices.
      </span>
    </Body1>
    <Body1>
      Links to Other Web Sites
      <br />
      <span className="mid-gray">
        The SIESGSTarena Platform may contain links to third party sites or online services. We are
        not responsible for the practices of such third parties, whose information practices are
        subject to their own policies and procedures, not to this Privacy Policy.
      </span>
    </Body1>
    <Body1>
      Contact Us
      <br />
      <span className="mid-gray">
        If you have any questions about our practices or this Privacy Policy, please contact us
        at&nbsp;
        <a className="no-underline dim mid-gray i" href="mailto:codechef@siesgst.ac.in">
          codechef@siesgst.ac.in
        </a>
        .
      </span>
    </Body1>
    <Body1>
      Changes to Our Privacy Policy
      <br />
      <span className="mid-gray">
        If we change our privacy policies and procedures, we will post those changes on this page.
      </span>
    </Body1>
  </div>
);

export default Privacy;
