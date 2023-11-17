import Button from "./Button";

export default {
  component: Button,
  title: 'Spotify/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  }
}

export const GetStarted = {
  args: {
    label: 'Get Started'
  }
}

export const Continue = {
  args: {
    label: 'Continue'
  }
}