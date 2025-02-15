import { seedStory } from 'storybook-addon-faker';
import { StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';

import { Button } from '../../_components/button/Button';

export default {
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

type ButtonProps = React.ComponentProps<typeof Button>;

function mockButtonProps(input: Partial<ButtonProps>): ButtonProps {
  return {
    label: faker.word.verb(),
    size: faker.helpers.arrayElement<ButtonProps['size']>(['small', 'medium', 'large']),
    ...input,
  };
}

const options = {
  faker,
  seed: 123,
};

export const Seeded = seedStory<ButtonProps>(
  () => ({
    args: mockButtonProps({ primary: true }),
  }),
  options
);

export const Random: StoryObj<ButtonProps> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: mockButtonProps({ primary: true }),
};
