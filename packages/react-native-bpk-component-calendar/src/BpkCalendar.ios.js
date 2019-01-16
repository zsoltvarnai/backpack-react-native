/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
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

import React from 'react';
import { StyleSheet, View, requireNativeComponent } from 'react-native';

import {
  commonPropTypes,
  commonDefaultProps,
  type CommonProps,
} from './common-types';

const RCTCalendarView = requireNativeComponent('RCTCalendarView');

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: '100%',
  },
});

export type Props = {
  ...$Exact<CommonProps>,
};

const onDateSelection = (event, selectionType, callbackFn) => {
  const datesConverted = event.nativeEvent.selectedDates.map(
    dateString => new Date(Date.parse(dateString)),
  );
  if (callbackFn) {
    callbackFn(datesConverted);
  }
};

const BpkCalendarInner = (props: Props) => {
  const {
    onDateSelectionChanged,
    selectionType,
    style: userStyle,
    ...rest
  } = props;

  const style = [styles.base];
  if (userStyle) {
    style.push(userStyle);
  }

  return (
    <View style={style} {...rest}>
      <RCTCalendarView
        onDateSelection={event => {
          onDateSelection(event, selectionType, onDateSelectionChanged);
        }}
        {...rest}
      />
    </View>
  );
};

BpkCalendarInner.propTypes = commonPropTypes;
BpkCalendarInner.defaultProps = commonDefaultProps;

export default BpkCalendarInner;
