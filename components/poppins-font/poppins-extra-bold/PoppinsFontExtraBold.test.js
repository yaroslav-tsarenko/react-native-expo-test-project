import React from 'react';
import { render } from '@testing-library/react-native';
import PoppinsFontExtraBold from './PoppinsFontExtraBold';

describe('<PoppinsFontExtraBold />', () => {
    it('displays the correct text', () => {
        const { getByText } = render(<PoppinsFontExtraBold>Test Text</PoppinsFontExtraBold>);
        const textElement = getByText('Test Text');
        expect(textElement).not.toBeNull();
    });
});
