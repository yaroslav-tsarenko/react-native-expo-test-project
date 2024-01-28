import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuizAnswer from './QuizAnswer';

jest.mock('expo-linear-gradient', () => ({ LinearGradient: 'ExpoLinearGradient' }));

describe('<QuizAnswer />', () => {
    it('renders correctly', () => {
        const { getByPlaceholderText, getByText } = render(<QuizAnswer />);
        const inputElement = getByPlaceholderText('Your answer');
        const submitButton = getByText('Submit');
        const attemptsText = getByText('5 attempts remaining');
        expect(inputElement).toBeDefined();
        expect(submitButton).toBeDefined();
        expect(attemptsText).toBeDefined();
    });

    it('updates inputValue when typing in the TextInput', () => {
        const { getByPlaceholderText } = render(<QuizAnswer />);
        const inputElement = getByPlaceholderText('Your answer');
        fireEvent.changeText(inputElement, 'Test Answer');
        expect(inputElement.props.value).toBe('Test Answer');
    });

    it('decreases attempts when Submit button is pressed', () => {
        const { getByText } = render(<QuizAnswer />);
        const submitButton = getByText('Submit');
        fireEvent.press(submitButton);
        const attemptsText = getByText('4 attempts remaining');
        expect(attemptsText).toBeDefined();
    });
});
