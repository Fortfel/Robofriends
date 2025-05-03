import * as React from 'react'

/**
 * Props for the Card component
 */
export type CardProps = {
  /** Name of the robot */
  name: string
  /** Username of the robot */
  username: string
  /** Email address of the robot */
  email: string
}

/**
 * Card component that displays a robot's information
 *
 * @param name - Name of the robot
 * @param username - Username of the robot
 * @param email - Email address of the robot
 * @returns React component
 */
const Card = ({ name, username, email }: CardProps): React.JSX.Element => {
  const imgSrc = `https://robohash.org/${username}.png?size=200x200`

  return (
    <article className="flex w-[250px] flex-col items-center gap-2 rounded-md bg-[#8dddc8] p-6 text-center text-[#000200] transition duration-300 hover:scale-105">
      <img src={imgSrc} alt={`Robot avatar for ${name}`} className="w-full" loading="lazy" />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="font-medium">{email}</p>
    </article>
  )
}

export { Card }
