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

import BpkNavigationBar from './src/BpkNavigationBar';
import BpkNavigationBarButtonAndroid from './src/BpkNavigationBarButtonAndroid';
import BpkNavigationBarBackButtonIOS from './src/BpkNavigationBarBackButtonIOS';
import BpkNavigationBarTextButtonIOS from './src/BpkNavigationBarTextButtonIOS';
import BpkNavigationBarIconButtonIOS from './src/BpkNavigationBarIconButtonIOS';

export type { Props as BpkNavigationBarProps } from './src/BpkNavigationBar';
export type {
  Props as BpkNavigationBarBackButtonIOSProps,
} from './src/BpkNavigationBarBackButtonIOS';
export type {
  Props as BpkNavigationBarButtonAndroidProps,
} from './src/BpkNavigationBarButtonAndroid';
export type {
  Props as BpkNavigationBarTextButtonIOSProps,
} from './src/BpkNavigationBarTextButtonIOS';
export type {
  Props as BpkNavigationBarIconButtonIOSProps,
} from './src/BpkNavigationBarIconButtonIOS';

export {
  // Android
  BpkNavigationBarButtonAndroid,
  // iOS
  BpkNavigationBarBackButtonIOS,
  BpkNavigationBarTextButtonIOS,
  BpkNavigationBarIconButtonIOS,
};
export default BpkNavigationBar;
