import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SpecialBrandRiddle from './SpecialBrandRiddle';

describe('SpecialBrandRiddle', () => {
    it('Displays Icons', () => {
        const { getByText, getByTestId } = render(<SpecialBrandRiddle />);
        expect(getByText('Special Brand Riddles')).toBeTruthy();
        expect(getByText('Riddles related with popular brands such as')).toBeTruthy();
        expect(getByTestId('nike-icon')).toBeTruthy();
        expect(getByTestId('mac-icon')).toBeTruthy();
        expect(getByTestId('lego-icon')).toBeTruthy();
    });

    it('navigates to WeeklyRiddles screen on press', () => {
        const navigation = { navigate: jest.fn() };
        const { getByTestId } = render(<SpecialBrandRiddle navigation={navigation} />);
        fireEvent.press(getByTestId('special-brand-riddle'));
        expect(navigation.navigate).toHaveBeenCalledWith('WeeklyRiddles');
    });
});
