import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'  // Adjust this import to match your actual component file

describe('NavBar', () => {
  test('renders navbar with correct title', () => {
    render(<NavBar />)

    // Check for the presence of the main title
    const titleElement = screen.getByText(/Akshay Rokade/i)
    expect(titleElement).toBeInTheDocument()

    // Optionally, you can add more specific tests
    expect(titleElement).toHaveClass('text-2xl')
    expect(titleElement).toHaveClass('font-semibold')
  })

  test('renders user menu button', () => {
    render(<NavBar />)

    const userMenuButton = screen.getByRole('button', { name: /open user menu/i })
    expect(userMenuButton).toBeInTheDocument()
  })

  // Add more tests as needed for other navbar elements
})