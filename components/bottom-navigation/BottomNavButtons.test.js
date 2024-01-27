import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import BottomNavButtons from './BottomNavButtons';

jest.mock('react-native', () => {
    const rn = jest.requireActual('react-native');
    rn.Keyboard = {
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
    return rn;
});

afterEach(cleanup);

describe('<BottomNavButtons />', () => {
    it('Renders correctly and shows the navigation buttons', () => {
        const { getByText } = render(<BottomNavButtons />);
        const homeButton = getByText('Home');
        const leaderboardButton = getByText('Leaderboard');
        const settingsButton = getByText('Settings');
        expect(homeButton).not.toBeNull();
        expect(leaderboardButton).not.toBeNull();
        expect(settingsButton).not.toBeNull();
    });
});
