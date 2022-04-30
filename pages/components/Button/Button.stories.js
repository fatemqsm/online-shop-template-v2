import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const primary = () => <Button >Button</Button>;
export const small = () => <Button fontSize="15px">Small</Button>;
export const submit_form = () => <Button
  backgroundColor="#0c1c6c"
  backgroundColorHover="#fbede7"
  color="white"
  colorHover="#0c1c6c"
>
  Submit Form
</Button>;

