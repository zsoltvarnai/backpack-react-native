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

import { ViewPropTypes, type StyleObj } from 'react-native';
import PropTypes from 'prop-types';

export const SELECTION_TYPES = {
  single: 'single',
  range: 'range',
  multiple: 'multiple',
};

export type SelectionType = $Keys<typeof SELECTION_TYPES>;

export type CommonProps = {
  locale: string,
  minDate: Date,
  maxDate: Date,
  onChangeSelectedDates: ?(Date[]) => mixed,
  selectedDates: Date[],
  selectionType: SelectionType,
  style: ?StyleObj,
};

export const commonPropTypes = {
  locale: PropTypes.string.isRequired,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  onChangeSelectedDates: PropTypes.func,
  selectedDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  selectionType: PropTypes.oneOf(Object.keys(SELECTION_TYPES)),
  style: ViewPropTypes.style,
};

const getDateOneYearFromNow = () => {
  const date = new Date();
  const monthOneYearFromNow = date.getMonth() + 12;
  date.setMonth(monthOneYearFromNow);
  return date;
};

export const commonDefaultProps = {
  minDate: new Date(),
  maxDate: getDateOneYearFromNow(),
  onChangeSelectedDates: null,
  selectedDates: [],
  selectionType: SELECTION_TYPES.single,
  style: null,
};
