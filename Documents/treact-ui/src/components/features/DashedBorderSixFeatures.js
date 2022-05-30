import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }

  .description2 {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Self-Driving Cars",
      description: "Nowadays, the first thing that comes to mind when machine learning is brought up is self-driving cars. Self-driving cars have been popularized by companies such as Tesla and Lucid.",
      description2:"Self-driving cars learn to drive by collectinf data about driving situations asnd road conditions. As this data is collected and processed, the machine makes decisions on the spot about what to do such as if they should turn, stop, or continue to accelerate. The machines utilize equipment such as sensors, cameras, and radars."
    },

    { imageSrc: SupportIconImage,
       title: "Fantasy Football Predictions",
      description:"Just like how machine learning can be used for stock market predictions, it can also be uesd to make predictions about fantasy football. Data is collected about players statistics and point totals from a range of several years.",
      description2:"This data can be used to predict things such as the top 50 players in the franchise or players that are expected to have the least impact on their fantasy football team." 
    },

    { imageSrc: CustomizeIconImage,
       title: "Image Recognition",
      description:"Image recognition is powered by machine learning. Modern machine learning methods allow for facial recognition by analyzing images and videos. An example of this is how Apple uses facial ID to allow users into their phone.",
      description2:"Image recognition is also used in the medical field. For example, machine learning is used to identify signs of melanoma in patients charts and scans."
    },

    { imageSrc: ReliableIconImage,
       title: "Customer Service",
      description: "A chatbot is a program that can act and converse like a human primarily through text or even voice chat. This is done by a process called natural language processing.",
      description2:"Chatbots can be seen in sites such as online clothing stores or mobile bank applications. They are primarily used to answer frequently asked questions."
    },

    { imageSrc: FastIconImage,
       title: "Emails",
      description:"Machine learning is present even in your emails. Spam emails are detected through the use of machine learning algorithms.",
      description2:"Machines are trained using words that are commonly seen in fraud/spam emails and scan through messages for those words to flag them as spam."
    },

    { imageSrc: SimpleIconImage,
       title: "Recommendation Engine",
      description:"Companies such as Amazon and Netflix use machine learning to decide what to recommend to their customers. Machine learning utilizes user's data and their preferences in order to suggest certain films or products.",
      description2:"Essentially, recommendation systems are a filtering system that make use of user data in order to make the best recommendations to customers and promote more business for the companies utilizing this technology."
     }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Real World <span tw="text-primary-500">Applications</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
                <p className="description2">
                  {card.description2 || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
