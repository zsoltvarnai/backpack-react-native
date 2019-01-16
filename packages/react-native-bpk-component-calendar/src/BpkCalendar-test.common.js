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

import React from 'react';
import { StyleSheet } from 'react-native';
import renderer from 'react-test-renderer';

import BpkCalendar from './BpkCalendar';
import { SELECTION_TYPES } from './common-types';

const HARD_CODED_LOCALE = 'en_GB';

const commonTests = () => {
  describe('BpkCalendar', () => {
    it('should render correctly', () => {
      const tree = renderer
        .create(
          <BpkCalendar
            selectionType={SELECTION_TYPES.single}
            locale={HARD_CODED_LOCALE}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render correctly with minDate and maxDate', () => {
      const tree = renderer
        .create(
          <BpkCalendar
            selectionType={SELECTION_TYPES.single}
            locale={HARD_CODED_LOCALE}
            minDate={new Date(2019, 4, 19)}
            maxDate={new Date(2020, 4, 19)}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render correctly with selection type "single" and selected dates', () => {
      const tree = renderer
        .create(
          <BpkCalendar
            selectionType={SELECTION_TYPES.single}
            locale={HARD_CODED_LOCALE}
            selectedDates={[new Date(2019, 4, 19)]}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render correctly with selection type "range" and selected dates', () => {
      const tree = renderer
        .create(
          <BpkCalendar
            selectionType={SELECTION_TYPES.single}
            locale={HARD_CODED_LOCALE}
            selectedDates={[new Date(2019, 4, 19), new Date(2019, 4, 21)]}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render correctly with selection type "multiple" and selected dates', () => {
      const tree = renderer
        .create(
          <BpkCalendar
            selectionType={SELECTION_TYPES.single}
            locale={HARD_CODED_LOCALE}
            selectedDates={[
              new Date(2019, 4, 19),
              new Date(2019, 4, 21),
              new Date(2019, 4, 29),
            ]}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    Object.keys(SELECTION_TYPES).forEach(selectionType => {
      it(`should render correctly for selectionType={'${selectionType}'}`, () => {
        const tree = renderer
          .create(
            <BpkCalendar
              locale={HARD_CODED_LOCALE}
              selectionType={selectionType}
            />,
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    it('should render correctly with custom style', () => {
      const styles = StyleSheet.create({
        custom: {
          flex: 1,
        },
      });

      const tree = renderer
        .create(
          <BpkCalendar
            selectionType={SELECTION_TYPES.single}
            locale={HARD_CODED_LOCALE}
            style={styles.custom}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render correctly with arbitrary props', () => {
      const tree = renderer
        .create(
          <BpkCalendar
            selectionType={SELECTION_TYPES.single}
            locale={HARD_CODED_LOCALE}
            testID="123" // <- Arbitrary prop.
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
};
export default commonTests;
