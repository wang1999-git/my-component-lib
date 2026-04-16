import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyButton from '../MyButton.vue';

describe('MyButton.vue', () => {
  it('renders slot content', () => {
    const wrapper = mount(MyButton, { slots: { default: 'Click Me' } });
    expect(wrapper.text()).toContain('Click Me');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(MyButton, { slots: { default: 'Click' } });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
});
