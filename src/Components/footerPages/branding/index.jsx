import React from 'react';
import { Headline4, Body1, Body2 } from '@material/react-typography';

const BrandingGuidelines = () => (
  <div className="ml6-l mr6-l ml3 mr3 ml4-m mr4-m">
    <Headline4 className="purple">
      SIESGSTarena Brand Guidelines
      <Body2 className="gray">Last Updated: 20 December 2018</Body2>
    </Headline4>

    <Body1>
      Guidance on how and when to leverage the SIESGSTarena brand
      <br />
      <span className="mid-gray">
        Welcome to SIESGSTarena&apos;s brand guidelines. Please read the below before using any
        SIESGSTarena&apos;s brand features. We have these guidelines to make sure our brand is used
        in the right way and to prevent confusion.
      </span>
    </Body1>

    <Body1>
      Guidelines for use of SIESGSTarena brand features
      <br />
      <span className="mid-gray">
        If we provide specific written requirements (size, typeface, colors, etc.) to you, please
        implement them when using our brand features. Otherwise, use the logos below per the
        following guidelines. We also ask that you follow the rules below when you use any of our
        brand features.
        <div className="mt4" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1599157105/arena/assets/arena-icon.ico"
            alt="ArenaLogo"
            style={{ width: '60%', maxWidth: '250px' }}
          />
        </div>
        <Body2 style={{ textAlign: 'center' }}>
          Logo Designed By
          <a
            href="https://github.com/vinaya8"
            className="dim no-underline i mid-gray"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vinay Ambre
          </a>
        </Body2>
        Always use the above resources to represent the logo as opposed to an image of the logo
        sourced elsewhere, and keep a minimum clearance of space between the logo and other visual
        elements akin to the images above.
      </span>
    </Body1>
    <Body1>
      In addition, please don&apos;t do any of the following without checking with us first (please
      email <span style={{ color: 'grey' }}>codechef@siesgst.ac.in</span>):
      <br />
      <span className="mid-gray">
        <ul>
          <li>
            Don&apos;t try to copy or replicate SIESGSTarena&apos;s logo in your own way by changing
            colors, distortion or any other methods.
          </li>
          <li>
            Don&apos;t display a SIESGSTarena&apos;s brand feature in any manner that implies a
            relationship or affiliation with, sponsorship, or endorsement by SIESGSTarena.
          </li>
          <li>
            Don&apos;t display a SIESGSTarena&apos;s brand feature in a manner that is misleading,
            unfair, defamatory, infringing, libelous, disparaging, obscene or otherwise
            objectionable to SIESGSTarena.
          </li>
          <li>
            Don&apos;t display a SIESGSTarena&apos;s brand feature on a site that violates any law
            or regulation.
          </li>
          <li>
            Don&apos;t use the SIESGSTarena&apos;s logo in a way that suggests a common,
            descriptive, or generic meaning.
          </li>
          <li>
            Please note that: The team&apos;s name is SIESGSTarena, usages such as SIESGSTArena,
            arena or SIESGST Arena are incorrect and must be avoided.
          </li>
        </ul>
      </span>
    </Body1>
  </div>
);

export default BrandingGuidelines;
