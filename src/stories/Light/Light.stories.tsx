import { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";

const meta:Meta<typeof Light> = {
    component: Light,
    title: "Light",
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        activeColor: 'orange'
    }
}