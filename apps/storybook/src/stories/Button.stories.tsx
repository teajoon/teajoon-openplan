import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";
import { action } from 'storybook/actions';

import Button from "@repo/ui/elements/button";
import Text from "@repo/ui/elements/text";

import "./globals.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Elements/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FlatButton: Story = {
  args: {
    variant: "flat",
    color: "black",
    children: <Text color="text-white-100">FlatButton</Text>
  },
};

export const OutlineButton: Story = {
  args: {
    variant: "outline",
    color: "black",
    children: <Text>OutlineButton</Text>
  },
};

export const TextButton: Story = {
  args: {
    variant: "text",
    color: "black",
    children: <Text>TextButton</Text>
  },
};

export const BackgroundColor: Story = {
  args: {
    variant: "flat",
    backgroundColor: "bg-blue-100",
    children: <Text color="text-white-100">FlatButton</Text>
  },
};

export const Width: Story = {
  args: {
    variant: "flat",
    width: "w-[400px]",
    backgroundColor: "bg-blue-100",
    children: <Text color="text-white-100">FlatButton</Text>
  },
};

export const Height: Story = {
  args: {
    variant: "flat",
    height: "h-[200px]",
    backgroundColor: "bg-blue-100",
    children: <Text color="text-white-100">FlatButton</Text>
  },
};

export const JustifyLeft: Story = {
  args: {
    variant: "flat",
    width: "w-[200px]",
    backgroundColor: "bg-blue-100",
    justifyContent: "justify-start",
    children: <Text color="text-white-100">FlatButton</Text>
  },
};

export const alignContentBottom: Story = {
  args: {
    variant: "flat",
    height: "h-[200px]",
    backgroundColor: "bg-blue-100",
    alignContent: "content-bottom",
    children: <Text color="text-white-100">FlatButton</Text>
  },
};

export const Cursor: Story = {
  args: {
    variant: "flat",
    backgroundColor: "bg-blue-100",
    cursor: "cursor-text",
    children: <Text color="text-white-100">FlatButton</Text>
  },
};

export const Border: Story = {
  args: {
    variant: "flat",
    borderRadius: "rounded-[12px]",
    backgroundColor: "bg-blue-100",
    borderWidth: "border-[4px]",
    borderColor: "border-black-100",
    borderStyle: "border-dotted",
    children: <Text color="text-white-100">FlatButton</Text>
  },
};

export const HoverBackgroundColor: Story = {
  args: {
    variant: "flat",
    width: "w-[200px]",
    backgroundColor: "bg-blue-100",
    hoverBackgroundColor: "hover:bg-black-100",
    children: <Text color="text-white-100">FlatButton</Text>
  },
};

export const ActiveBackgroundColor: Story = {
  args: {
    variant: "flat",
    width: "w-[200px]",
    backgroundColor: "bg-blue-100",
    activeBackgroundColor: "active:bg-black-100",
    children: <Text color="text-white-100">FlatButton</Text>
  }
};

export const AddTailwindClass: Story = {
  args: {
    variant: "flat",
    width: "w-[200px]",
    backgroundColor: "bg-blue-100",
    className: ["pt-[20px]", "pl-[20px]"],
    children: <Text color="text-white-100">FlatButton</Text>
  }
};
