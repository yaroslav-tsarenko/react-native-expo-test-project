import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RiddleChallengesButton from "./RiddleChallengesButton";

describe('RiddleChallengesButton', () => {
    it('renders correctly with defaultActive=false', () => {
        const { getByText } = render(<RiddleChallengesButton text="Test Button" defaultActive={false} />);
        const button = getByText('Test Button');
        expect(button).toBeDefined();
    });

    it('renders correctly with defaultActive=true', () => {
        const { getByText } = render(<RiddleChallengesButton text="Test Button" defaultActive={true} />);
        const button = getByText('Test Button');
        expect(button).toBeDefined();
    });
});
