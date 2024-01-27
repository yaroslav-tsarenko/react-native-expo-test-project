import React from 'react';
import { render } from '@testing-library/react-native';
import StarButton from './StarButton';

describe('<StarButton />', () => {
    it('renders correctly with default text', () => {
        const { getByText } = render(<StarButton />);
        const starButton = getByText('954');
        expect(starButton).toBeDefined();
    });
});
