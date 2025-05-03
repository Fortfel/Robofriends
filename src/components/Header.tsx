import * as React from 'react'

/**
 * Props for the Header component
 */
type HeaderProps = {
  /** Function to handle search input changes */
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Header component with search functionality
 *
 * @param onSearchChange - Function to handle search input changes
 * @returns React component
 */
const Header = ({ onSearchChange }: HeaderProps): React.JSX.Element => {
  return (
    <header className="mt-10 flex flex-col items-center gap-7">
      <h1 className="font-sega text-5xl text-[#0ccac4]">ROBOFRIENDS</h1>
      <div className="w-[300px]">
        <label htmlFor="search-robots" className="sr-only">
          Search Robots
        </label>
        <input
          id="search-robots"
          type="search"
          placeholder="Search Robots"
          onChange={onSearchChange}
          className="w-full rounded-md bg-blue-200 p-3 text-black"
          aria-label="Search for robots by name"
        />
      </div>
      <hr className="w-full" aria-hidden="true" />
    </header>
  )
}

export { Header }
