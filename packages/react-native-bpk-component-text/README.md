# react-native-bpk-component-text

> Backpack React Native text component.

## Installation

```sh
npm install react-native-bpk-component-text --save-dev
```

## Usage

```js
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BpkText, { WEIGHT_STYLES } from 'react-native-bpk-component-text';
import { spacingBase } from 'bpk-tokens/tokens/base.react.native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacingBase,
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BpkText textStyle='xxl'>Backpack rocks!</BpkText>
        <BpkText textStyle='xl' weight={WEIGHT_STYLES.heavy}>Backpack rocks!</BpkText>
        <BpkText textStyle='lg' weight={WEIGHT_STYLES.emphasized}>Backpack rocks!</BpkText>
        <BpkText textStyle='base'>Backpack rocks!</BpkText>
        <BpkText textStyle='sm'>Backpack rocks!</BpkText>
        <BpkText textStyle='xs'>Backpack rocks!</BpkText>
        <BpkText textStyle='caps'>BACKPACK ROCKS!</BpkText>
      </View>
    );
  }
}
```

## Props

| Property                             | PropType                                             | Required | Default Value |
| ------------------------------------ | ---------------------------------------------------- | -------- | ------------- |
| children                             | node                                                 | true     | -             |
| textStyle                            | oneOf('xxl', 'xl', 'lg', 'base', 'sm', 'xs', 'caps') | false    | base          |
| weight                               | oneOf('regular', 'emphasized', 'heavy')              | false    | regular       |
| emphasize (deprecated, use `weight`) | bool                                                 | false    | false         |

## Theme props

* `textFontFamily`
