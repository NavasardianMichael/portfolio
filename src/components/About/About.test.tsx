import { render, screen } from "@testing-library/react"
import About from "./About"

test('Renders About Section', () => {
    render(<About />)
    const section = screen.getByText(/About/i)
    expect(section).toBeInTheDocument()
})