import React from 'react';
import Enzyme from 'enzyme';
import Game from './Game';

const { mount } = Enzyme;

describe('Game', () => {
    let grid;
    const size = 100;

    beforeEach(() => {
        grid = mount(<Game />);
    });

    it('renders rows', () => {
        expect(grid.find('.row').length).toEqual(size);
    });

    it('renders cells', () => {
        expect(grid.find('.cell').length).toEqual(size * size);
    });
});