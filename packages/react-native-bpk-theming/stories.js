/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* @flow */

import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { StyleSheet, View, Picker } from 'react-native';
import {
  spacingMd,
  colorWhite,
  colorRed400,
  colorRed500,
  colorBlue400,
  colorBlue500,
  colorYellow400,
  colorYellow500,
  fontFamily,
} from 'bpk-tokens/tokens/base.react.native';

// We import relatively because a) it's just for a story and
// b) it causes cyclic dependencies in lerna
import BpkButton from '../react-native-bpk-component-button';
import CenterDecorator from '../../storybook/CenterDecorator';

import BpkThemeProvider, { BpkThemeAttributes } from './index';

type Theme = {
  buttonPrimaryTextColor: string,
  buttonPrimaryGradientStartColor: string,
  buttonPrimaryGradientEndColor: string,
  buttonSecondaryTextColor: string,
  buttonSecondaryBackgroundColor: string,
  buttonSecondaryBorderColor: string,
  primaryColor: string,
  textFontFamily: string,
};

const generateThemeAttributes = (
  gradientStartColor: string,
  gradientEndColor: string,
): Theme => ({
  buttonPrimaryTextColor: colorWhite,
  buttonPrimaryGradientStartColor: gradientStartColor,
  buttonPrimaryGradientEndColor: gradientEndColor,
  buttonSecondaryTextColor: gradientEndColor,
  buttonSecondaryBackgroundColor: colorWhite,
  buttonSecondaryBorderColor: gradientEndColor,
  primaryColor: gradientStartColor,
  textFontFamily: fontFamily,
});

const styles = StyleSheet.create({
  bottomMargin: {
    marginBottom: spacingMd,
  },
  solidColorBlock: {
    width: '100%',
    height: spacingMd * 3,
  },
});

type State = {
  themeId: string,
  theme: Theme,
};

const SolidColorBlock = () => (
  <BpkThemeAttributes>
    {({ primaryColor }) => (
      <View
        style={[styles.solidColorBlock, { backgroundColor: primaryColor }]}
      />
    )}
  </BpkThemeAttributes>
);

class BpkThemePicker extends Component<{}, State> {
  themes: {| blue: Theme, yellow: Theme, red: Theme |};

  constructor() {
    super();

    this.themes = {
      blue: generateThemeAttributes(colorBlue400, colorBlue500),
      yellow: generateThemeAttributes(colorYellow400, colorYellow500),
      red: generateThemeAttributes(colorRed400, colorRed500),
    };

    this.state = {
      themeId: 'blue',
      theme: this.themes.blue,
    };
  }

  switchTheme = value => {
    if (typeof value === 'string') {
      this.setState({
        themeId: value,
        theme: this.themes[value],
      });
    }
  };

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.themeId}
          onValueChange={this.switchTheme}
        >
          <Picker.Item label="Blue" value="blue" />
          <Picker.Item label="Yellow" value="yellow" />
          <Picker.Item label="Red" value="red" />
        </Picker>
        <BpkThemeProvider theme={this.state.theme}>
          <View>
            <BpkButton
              type="primary"
              title="Book hotel"
              onPress={action('primary themed button pressed')}
              style={styles.bottomMargin}
            />
            <BpkButton
              type="secondary"
              title="Go back"
              onPress={action('secondary themed button pressed')}
              style={styles.bottomMargin}
            />
            <SolidColorBlock />
          </View>
        </BpkThemeProvider>
      </View>
    );
  }
}

storiesOf('react-native-bpk-theming', module)
  .addDecorator(CenterDecorator)
  .add('Default', () => (
    <View>
      <BpkThemePicker />
    </View>
  ));
