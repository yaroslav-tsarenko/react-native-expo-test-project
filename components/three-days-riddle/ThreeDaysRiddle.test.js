import React from 'react';
import { render } from '@testing-library/react-native';
import ThreeDaysRiddle from './ThreeDaysRiddle';

describe('<ThreeDaysRiddle />', () => {
    it('renders correctly with default text', () => {
        const { getByText } = render(<ThreeDaysRiddle />);
        const riddle = getByText('3 Days Exp.Riddles');
        expect(riddle).toBeDefined();
    });
});
