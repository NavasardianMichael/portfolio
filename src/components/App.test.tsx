import { render, screen } from "@testing-library/react"
import App from "App"
import styles from './app.module.css'

test('App renders correctly', () => {
    render(<App />)
    const wrapperElement = screen.getByTestId('app-wrapper')
    expect(wrapperElement).toHaveClass(styles.app)
})