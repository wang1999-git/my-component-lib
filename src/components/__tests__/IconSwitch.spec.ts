import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import IconSwitch from '../IconSwitch.vue';

describe('IconSwitch.vue', () => {
  // 用例1：测试组件能否正常渲染，且初始状态正确
  it('renders properly and checks initial state', () => {
    const wrapper = mount(IconSwitch);
    const container = wrapper.find('[data-testid="switch-container"]');
    expect(container.exists()).toBe(true);

    // 初始状态应该没有 is-active 类
    expect(wrapper.classes()).not.toContain('is-active');
    expect(wrapper.vm.isActive).toBe(false);
  });

  // 用例2：测试组件的点击交互和事件触发
  it('toggles state and emits change event on click', async () => {
    const wrapper = mount(IconSwitch);
    await wrapper.trigger('click');

    // 点击后状态应该变为 true
    expect(wrapper.vm.isActive).toBe(true);
    expect(wrapper.classes()).toContain('is-active');

    // 点击后应该向外抛出 change 事件，且参数为 true
    expect(wrapper.emitted()).toHaveProperty('change');
    expect(wrapper.emitted('change')?.[0]).toEqual([true]);
  });
});
