import React from 'react';
import { render } from '@testing-library/react-native';
import PoppinsFont from './PoppinsFont';

describe('<PoppinsFont />', () => {
    it('displays the correct text', () => {
        const { getByText } = render(<PoppinsFont>Test Text</PoppinsFont>);
        const textElement = getByText('Test Text');
        expect(textElement).not.toBeNull();
    });
});
