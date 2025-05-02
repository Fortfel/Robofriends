import * as React from 'react'

export type CardProps = {
  name: string
  username: string
  email: string
}

const Card = ({ name, username, email }: CardProps): React.JSX.Element => {
  const imgSrc = `https://robohash.org/${username}.png?size=200x200`
  return (
    <>
      <div className="flex w-[250px] flex-col items-center gap-2 rounded-md bg-[#8dddc8] p-6 text-center text-[#000200] transition duration-300 hover:scale-105">
        <img src={imgSrc} alt="" className="w-full" />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="font-medium">{email}</p>
      </div>
    </>
  )
}

export { Card }
