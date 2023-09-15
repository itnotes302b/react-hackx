import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    type: {
      options: ["filled", "outline", "w-icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "filled",
    className: {},
    divClassName: {},
  },
};
