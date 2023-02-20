import { render, screen } from "@testing-library/react"
import Contributions from "./Contributions"

test('Renderes Contributions Section', () => {
    render(<Contributions />)
    expect(screen.getByText(/Contributions/i)).toBeInTheDocument()
})