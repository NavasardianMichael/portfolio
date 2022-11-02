import { render, screen } from "@testing-library/react"
import BgAvatar from "./BgAvatar"

test('Background Avatar has alt attribute', () => {
    render(<BgAvatar />);
    
    expect(screen.getByTestId('avatar-img').hasAttribute('alt'))
})