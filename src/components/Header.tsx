import * as React from 'react'

type HeaderProps = {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Header = ({ onSearchChange }: HeaderProps): React.JSX.Element => {
  return (
    <header className="mt-5 flex flex-col items-center gap-5">
      <h1 className="font-sega text-5xl text-[#0ccac4]">ROBOFRIENDS</h1>
      <input
        type="text"
        placeholder="Search Robots"
        onChange={onSearchChange}
        className="w-[300px] rounded-md bg-blue-200 p-3 text-black"
      />
      <hr className="w-full" />
    </header>
  )
}

export { Header }
