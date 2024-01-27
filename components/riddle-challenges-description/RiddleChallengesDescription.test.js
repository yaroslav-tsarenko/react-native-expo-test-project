import React from 'react';
import { render } from '@testing-library/react-native';
import RiddleChallengesDescription from './RiddleChallengesDescription';

describe('RiddleChallengesDescription', () => {
    test('renders main title correctly', () => {
        const { getByText } = render(<RiddleChallengesDescription />);
        const mainTitle = getByText('Weekly Riddles');
        expect(mainTitle).toBeTruthy();
    });

    test('renders description text correctly', () => {
        const { getByText } = render(<RiddleChallengesDescription />);
        const descriptionText = getByText(/I can add to several hundred/i);
        expect(descriptionText).toBeTruthy();
    });

    test('renders sub-title correctly', () => {
        const { getByText } = render(<RiddleChallengesDescription />);
        const subTitle = getByText('Who am i?');
        expect(subTitle).toBeTruthy();
    });
});
