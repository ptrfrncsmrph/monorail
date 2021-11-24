// Edit this file to add new stories
import React from "react";

import { story } from "../../../__tests__/helpers/storybook";
import { Avatar } from "../../Avatar/Avatar";
import { Box } from "../../Box/Box";
import { AvatarGroup, AvatarGroupProps } from "../AvatarGroup";
import { defaultStoryMeta } from "./AvatarGroup.stories.gen";

/**
 * Metadata for AvatarGroup stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta, title: "Data Display/AvatarGroup" };

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<AvatarGroupProps>(
  (args) => (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <AvatarGroup {...args}>
        <Avatar>A</Avatar>
        <Avatar>B</Avatar>
        <Avatar>C</Avatar>
      </AvatarGroup>
    </Box>
  ),
  {
    args: {},
  }
);

/** Default story for AvatarGroup (edit/remove by hand if needed) */
export const Default = story(Template);

export const Max = story<AvatarGroupProps>(() => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <AvatarGroup max={4}>
        <Avatar
          alt="Rover"
          src="https://images.dog.ceo/breeds/terrier-fox/n02095314_2247.jpg"
        />
        <Avatar
          alt="Brutus"
          src="https://images.dog.ceo/breeds/kuvasz/n02104029_1324.jpg"
        />
        <Avatar
          alt="Spot"
          src="https://images.dog.ceo/breeds/lhasa/n02098413_12117.jpg"
        />
        <Avatar
          alt="Spike"
          src="https://images.dog.ceo/breeds/vizsla/n02100583_12639.jpg"
        />
        <Avatar
          alt="Buddy"
          src="https://images.dog.ceo/breeds/chow/n02112137_7340.jpg"
        />
      </AvatarGroup>
    </Box>
  );
});

Max.parameters = {
  docs: {
    description: {
      story: `Use the max prop to limit the number of avatars shown`,
    },
  },
  creevey: {
    skip: "Images don't load reliably",
  },
};
