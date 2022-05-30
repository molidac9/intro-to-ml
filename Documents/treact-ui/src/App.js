import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/DashedBorderSixFeatures";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Testimonial from "components/features/VerticalWithAlternateImageAndText.js";


const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <FeatureStats/>
      <Features 
        heading={<>Amazing <HighlightedText>Features</HighlightedText></>}
      />
      <MainFeature
        heading={<>Real World <HighlightedText>Applications</HighlightedText></>}
      />
      <Testimonial 
        heading={<> <HighlightedText>Resources</HighlightedText></>}
      />
     
    </AnimationRevealPage>
  );
}


