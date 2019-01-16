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

const defaultProps = {
  locale: 'en_GB',
  minDate: new Date(2019, 4, 19),
  maxDate: new Date(2020, 4, 19),
};

const commonTests = () => {
  describe('BpkCalendar', () => {
    it('should render correctly', () => {
      const tree = renderer
        .create(
          <BpkCalendar
            selectionType={SELECTION_TYPES.single}
            {...defaultProps}
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
            selectedDates={[new Date(2019, 4, 19)]}
            {...defaultProps}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should error with selection type "single" and selectedDates.length > 1', () => {
      jest.spyOn(console, 'error').mockImplementation(() => jest.fn());
      renderer.create(
        <BpkCalendar
          selectionType={SELECTION_TYPES.single}
          selectedDates={[new Date(2019, 4, 19), new Date(2019, 4, 20)]}
          {...defaultProps}
        />,
      );
      expect(console.error).toHaveBeenCalled();
    });

    it('should render correctly with selection type "range" and selected dates', () => {
      const tree = renderer
        .create(
          <BpkCalendar
            selectionType={SELECTION_TYPES.single}
            selectedDates={[new Date(2019, 4, 19), new Date(2019, 4, 21)]}
            {...defaultProps}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should error with selection type "range" and selectedDates.length > 2', () => {
      jest.spyOn(console, 'error').mockImplementation(() => jest.fn());
      renderer.create(
        <BpkCalendar
          selectionType={SELECTION_TYPES.range}
          selectedDates={[
            new Date(2019, 4, 19),
            new Date(2019, 4, 20),
            new Date(2019, 4, 21),
          ]}
          {...defaultProps}
        />,
      );
      expect(console.error).toHaveBeenCalled();
    });

    it('should render correctly with selection type "multiple" and selected dates', () => {
      const tree = renderer
        .create(
          <BpkCalendar
            selectionType={SELECTION_TYPES.multiple}
            selectedDates={[
              new Date(2019, 4, 19),
              new Date(2019, 4, 21),
              new Date(2019, 4, 29),
            ]}
            {...defaultProps}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    Object.keys(SELECTION_TYPES).forEach(selectionType => {
      it(`should render correctly for selectionType={'${selectionType}'}`, () => {
        const tree = renderer
          .create(
            <BpkCalendar selectionType={selectionType} {...defaultProps} />,
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
            {...defaultProps}
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
            {...defaultProps}
            testID="123" // <- Arbitrary prop.
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
};
export default commonTests;
