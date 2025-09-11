import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('shows loading spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button')).toHaveClass('opacity-60');
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button').querySelector('span[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('renders icon if provided', () => {
    render(<Button icon={<span data-testid="icon">icon</span>}>WithIcon</Button>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('applies aria-label', () => {
    render(<Button aria-label="custom-label">Label</Button>);
    expect(screen.getByLabelText('custom-label')).toBeInTheDocument();
  });
});
