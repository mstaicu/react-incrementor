import React from 'react';
import Incrementer from '../';

import { mount } from 'enzyme';

test('Value is defaulted to 0', () => {
  const { value } = setup();
  expect(value).toBe(0);
});

test('Increment value by 1', () => {
  const { childSpy, getIncrementerProps } = setup();
  const mockClick = jest.fn();

  const { onClick } = getIncrementerProps({ onClick: mockClick });
  const fakeEvent = { target: null };

  onClick(fakeEvent);

  expect(mockClick).toHaveBeenCalledTimes(1);
  expect(mockClick).toHaveBeenCalledWith(fakeEvent);
  expect(childSpy).toHaveBeenLastCalledWith(expect.objectContaining({ value: 1 }));
});

test('Decrement value by 1', () => {
  const { childSpy, getDecrementerProps } = setup();
  const mockClick = jest.fn();

  const { onClick } = getDecrementerProps({ onClick: mockClick });
  const fakeEvent = { target: null };

  onClick(fakeEvent);

  expect(mockClick).toHaveBeenCalledTimes(1);
  expect(mockClick).toHaveBeenCalledWith(fakeEvent);
  expect(childSpy).toHaveBeenLastCalledWith(expect.objectContaining({ value: 0 }));
});

test('Increment value by 5', () => {
  const { childSpy, getIncrementerProps } = setup();
  const mockClick = jest.fn();

  const { onClick } = getIncrementerProps({ onClick: mockClick });
  const fakeEvent = { target: null, shiftKey: true };

  onClick(fakeEvent);

  expect(mockClick).toHaveBeenCalledTimes(1);
  expect(mockClick).toHaveBeenCalledWith(fakeEvent);
  expect(childSpy).toHaveBeenLastCalledWith(expect.objectContaining({ value: 5 }));
});

test('Decrement value by 5', () => {
  const { childSpy, getDecrementerProps } = setup();
  const mockClick = jest.fn();

  const { onClick } = getDecrementerProps({ onClick: mockClick });
  const fakeEvent = { target: null, shiftKey: true };

  onClick(fakeEvent);

  expect(mockClick).toHaveBeenCalledTimes(1);
  expect(mockClick).toHaveBeenCalledWith(fakeEvent);
  expect(childSpy).toHaveBeenLastCalledWith(expect.objectContaining({ value: 0 }));
});

test('Increment value by 5 then decrement by 1', () => {
  const { childSpy, getIncrementerProps, getDecrementerProps } = setup();
  const mockClick = jest.fn();

  const incrementerProps = getIncrementerProps();
  let fakeEvent = { target: null, shiftKey: true };

  incrementerProps.onClick(fakeEvent);

  expect(childSpy).toHaveBeenLastCalledWith(expect.objectContaining({ value: 5 }));

  const decrementerProps = getDecrementerProps();
  fakeEvent = { target: null };

  decrementerProps.onClick(fakeEvent);

  expect(childSpy).toHaveBeenLastCalledWith(expect.objectContaining({ value: 4 }));
});

test('Increment value by 1 on a controlled property', () => {
  const { getIncrementerProps } = setup({ value: 0 });
  const mockClick = jest.fn();

  const { onClick } = getIncrementerProps({ onClick: mockClick });
  const fakeEvent = { target: null };

  onClick(fakeEvent);

  expect(mockClick).toHaveBeenCalledTimes(1);
  expect(mockClick).toHaveBeenCalledWith(fakeEvent);
});

test('Disabled increment buttons should have no event handlers', () => {
  const { getIncrementerProps } = setup();

  const { onClick } = getIncrementerProps({ disabled: true });
  expect(Object.keys(onClick).length).toBe(0);
});

test('Disabled decrement buttons should have no event handlers', () => {
  const { getDecrementerProps } = setup();

  const { onClick } = getDecrementerProps({ disabled: true });
  expect(Object.keys(onClick).length).toBe(0);
});

test('No arguments passed to the getIncrementerProps', () => {
  const { getIncrementerProps } = setup();

  const { onClick } = getIncrementerProps();
  expect(typeof onClick).toBe('function');
});

test('No arguments passed to the getDecrementerProps', () => {
  const { getDecrementerProps } = setup();

  const { onClick } = getDecrementerProps();
  expect(typeof onClick).toBe('function');
});

function setup({ render = () => <div />, ...props } = {}) {
  let renderArg;

  const childSpy = jest.fn((controllerArg) => {
    renderArg = controllerArg;
    return render(controllerArg);
  });

  const wrapper = mount(<Incrementer render={childSpy} {...props} />);

  return { childSpy, wrapper, ...renderArg };
}
