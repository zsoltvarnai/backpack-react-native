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
import PropTypes from 'prop-types';
import {
  type StyleObj,
  StyleSheet,
  View,
  ViewPropTypes,
  requireNativeComponent,
} from 'react-native';

import { SELECTION_TYPES, type SelectionType } from './common-types';

const RCTCalendarView = requireNativeComponent('RCTCalendarView');

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: '100%',
  },
});

export type Props = {
  minDate: Date,
  maxDate: Date,
  onDateSelectionChanged: ?({
    event: {
      nativeEvent: {
        selectedDates: [string],
      },
    },
  }) => mixed,
  selectedDates: [Date],
  selectionType: SelectionType,
  style: ?StyleObj,
};

const getDateOneYearFromNow = () => {
  const date = new Date();
  const monthOneYearFromNow = date.getMonth() + 12;
  date.setMonth(monthOneYearFromNow);
  return date;
};

const onDateSelection = (event, callbackFn) => {
  const datesConverted = event.nativeEvent.selectedDates.map(
    dateString => new Date(Date.parse(dateString)),
  );
  if (callbackFn) {
    callbackFn(datesConverted);
  }
};

const BpkCalendar = (props: Props) => {
  const { onDateSelectionChanged, style: userStyle, ...rest } = props;

  const style = [styles.base];
  if (userStyle) {
    style.push(userStyle);
  }

  return (
    <View style={style} {...rest}>
      <RCTCalendarView
        locale="en-GB"
        onDateSelection={event => {
          onDateSelection(event, onDateSelectionChanged);
        }}
        {...rest}
      />
    </View>
  );
};

BpkCalendar.propTypes = {
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  onDateSelectionChanged: PropTypes.func,
  selectedDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  selectionType: PropTypes.oneOf(Object.keys(SELECTION_TYPES)),
  style: ViewPropTypes.style,
};

BpkCalendar.defaultProps = {
  minDate: new Date(),
  maxDate: getDateOneYearFromNow(),
  onDateSelectionChanged: null,
  selectedDates: [],
  selectionType: SELECTION_TYPES.single,
  style: null,
};

export default BpkCalendar;
