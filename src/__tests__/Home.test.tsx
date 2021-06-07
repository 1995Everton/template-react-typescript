import React from 'react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('render base template', () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <Home />
        </Router>,
    );
    const linkElement = screen.getByText(/ECARD-BAT/i);
    expect(linkElement).toBeInTheDocument();
});

test('navigate to about page', () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <Home />
        </Router>,
    );
    expect(screen.getByText(/Go About/i)).toBeInTheDocument();
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/about/i), leftClick);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
});
