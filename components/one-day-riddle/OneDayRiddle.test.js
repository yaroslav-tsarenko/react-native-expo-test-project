import React from 'react';
import { render } from '@testing-library/react-native';
import OneDayRiddle from './OneDayRiddle';

describe('<OneDayRiddle />', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<OneDayRiddle />);
        const oneDayExpRiddle = getByText('1 Day Exp.Riddles');
        const oneDayForSolvingRiddle = getByText('1 day for solving');
        expect(oneDayForSolvingRiddle).not.toBeNull();
        expect(oneDayExpRiddle).not.toBeNull();
    });
});
