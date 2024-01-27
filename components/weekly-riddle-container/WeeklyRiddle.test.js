import React from 'react';
import { render } from '@testing-library/react-native';
import WeeklyRiddle from './WeeklyRiddle';

describe('<WeeklyRiddle />', () => {
    it('renders correctly with default text', () => {
        const { getByText } = render(<WeeklyRiddle />);
        const riddle = getByText('Weekly Riddle');
        expect(riddle).toBeDefined();
    });
});
