/*
* Greet should render the text hello 
* if a name is passed into the component 
* It should render hello followed by the name 
*/

import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

// step 1  Render the text Hello
test('Greet renders Correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})
test('Name passed to the component', () => {
    render(<Greet name="Rokibul" />)
    const textElement = screen.getByText('Hello Rokibul')
    expect(textElement).toBeInTheDocument()
})