import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    placeholder: "Place you text here",
    type: 'text'
  },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}