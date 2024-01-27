import React from 'react';
import renderer from 'react-test-renderer';
import BellButton from './BellButton';

describe('<BellButton />', () => {
    it('Renders correctly and shows the notification count', () => {
        const tree = renderer.create(<BellButton />).toJSON();
        const bellButtonText = tree.children[0].children[0].children[0].children[0];
        expect(bellButtonText).toBe('2');
    });
});
