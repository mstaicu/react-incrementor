import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { composeEventHandlers } from './utils';

export default class extends Component {
  static propTypes = {
    defaultValue: PropTypes.number,
    value: PropTypes.number,

    onChange: PropTypes.func,
    render: PropTypes.func,
  };

  static defaultProps = {
    defaultValue: 0,
    onChange: () => {},
  };

  constructor(...props) {
    super(...props);

    this.state = this.getState({
      value: this.props.defaultValue,
    });
  }

  getState = (state = this.state) =>
    Object.keys(state).reduce((newState, stateKey) => {
      newState[stateKey] = this.isControlledProp(stateKey) ? this.props[stateKey] : state[stateKey];

      return newState;
    }, {});

  _setState = (stateToSet) => {
    const onChangeArguments = {};

    this.setState(
      (previousState) => {
        previousState = this.getState(previousState);

        /**
         * This is the next state that we will set on setState.
         * It contains only uncontrolled, relevant to the
         * internal state, props
         */
        const nextState = {};

        Object.keys(stateToSet).forEach((stateKey) => {
          if (!this.isControlledProp(stateKey)) {
            nextState[stateKey] = stateToSet[stateKey];
          }

          /**
           * Store only relevant changes in the onChangeArguments
           */
          if (previousState[stateKey] !== stateToSet[stateKey]) {
            onChangeArguments[stateKey] = stateToSet[stateKey];
          }
        });

        return nextState;
      },
      () => {
        const hasRelevantOnChangeArgs = Object.keys(onChangeArguments).length > 0;

        if (hasRelevantOnChangeArgs && this.props.onChange) {
          this.props.onChange(onChangeArguments);
        }
      },
    );
  };

  getButtonProps = ({ label, ...rest }) => ({
    tabIndex: 0,
    'aria-label': label,
    ...rest,
  });

  getIncrementerProps = ({ onClick, disabled, ...rest } = {}) =>
    this.getButtonProps({
      label: 'increment button',
      onClick: disabled ? {} : composeEventHandlers(onClick, this.handleIncrement),
      ...rest,
    });

  getDecrementerProps = ({ onClick, disabled, ...rest } = {}) =>
    this.getButtonProps({
      label: 'decrement button',
      onClick: disabled ? {} : composeEventHandlers(onClick, this.handleDecrement),
      ...rest,
    });

  handleIncrement = (event) => {
    const amount = event.shiftKey ? 5 : 1;
    const { value } = this.getState();

    const newValue = value + amount;

    this._setState({
      value: newValue,
    });
  };

  handleDecrement = (event) => {
    const amount = event.shiftKey ? -5 : -1;
    const { value } = this.getState();

    const newValue = value + amount < 0 ? value : value + amount;

    this._setState({
      value: newValue,
    });
  };

  getStateAndHandlers = () => ({
    value: this.state.value,
    getIncrementerProps: this.getIncrementerProps,
    getDecrementerProps: this.getDecrementerProps,
  });

  isControlledProp = key => this.props[key] !== undefined;

  render() {
    return this.props.render(this.getStateAndHandlers());
  }
}
