import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-render';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<button></button>, div)
})

it("renders buttons correctly", ()=> {
    const {getByTestId} = render(<Button label="click me please"></Button>)
    expect(getByTestId('btn')).toHaveTextContent("click me please")
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

