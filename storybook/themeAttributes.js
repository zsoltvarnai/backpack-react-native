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

import { Platform } from 'react-native';

const theme = {
  contentColor: '#2d244c',
  contentGray: '#757380',
  secondaryColor: '#e8c410',
  // Because it's a theme, Backpack tokens shouldn't be used.
  // eslint-disable-next-line backpack/use-tokens
  backgroundColor: '#fff',
  brandColors: {
    gradientStart: '#fce134',
    gradientEnd: '#f8c42d',
  },
};

const themeAttributes = {
  // Used in BpkButton.
  buttonPrimaryGradientStartColor: theme.brandColors.gradientStart,
  buttonPrimaryGradientEndColor: theme.brandColors.gradientEnd,
  buttonPrimaryTextColor: theme.contentColor,
  buttonSecondaryBackgroundColor: theme.backgroundColor,
  buttonSecondaryTextColor: theme.contentColor,
  buttonSecondaryBorderColor: theme.contentColor,
  buttonLinkTextColor: theme.contentColor,

  // Used in BpkHorizontalNavItem.
  horizontalNavSelectedTextColor: theme.contentColor,

  // Used in BpkSpinner.
  spinnerPrimaryColor: theme.contentColor,

  // Used in BpkSwitch.
  switchPrimaryColor: theme.contentColor,

  // Used in BpkNavigationBar
  navigationBarBackgroundColor: theme.brandColors.gradientStart,
  navigationBarTintColor: theme.contentColor,
  navigationBarDisabledTintColor: theme.contentGray,
  navigationBarStatusBarColor: theme.brandColors.gradientEnd,
  navigationBarStatusBarStyle: 'dark-content',
  navigationBarShadowColor: theme.brandColors.gradientEnd,
  navigationBarPrimaryColor: theme.secondaryColor,

  // Used in BpkProgress
  progressFillBackgroundColor: theme.contentColor,
  progressTrackBackgroundColor: theme.contentGray,

  // Used in BpkText
  textFontFamily: Platform.OS === 'ios' ? 'Courier' : 'serif-monospace',

  // Used in BpkFlatList and BpkSectionList
  flatListSelectedItemColor: theme.brandColors.gradientStart,
};

export default themeAttributes;
