// Edit this file to add new stories
import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { AccordionDetails, AccordionDetailsProps } from "../AccordionDetails";
import { defaultStoryMeta } from "./AccordionDetails.stories.gen";

/**
 * Metadata for AccordionDetails stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: "Surfaces/Accordion/AccordionDetails",
};

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<AccordionDetailsProps>(
  (args) => <AccordionDetails {...args}>Accordion Details</AccordionDetails>,
  { args: {} }
);

/** Default story for AccordionDetails (edit/remove by hand if needed) */
export const Default = story(Template);

// TODO: add more stories below
