import React from 'react';
import { render } from '@testing-library/react-native';
import LampButton from './LampButton';

describe('<LampButton />', () => {
    it('shows the correct notification count', () => {
        const { getByText } = render(<LampButton />);
        const notificationCount = getByText('5');
        expect(notificationCount).not.toBeNull();
    });
});
