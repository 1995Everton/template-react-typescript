import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('render base template', () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <About />
        </Router>,
    );
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
});
