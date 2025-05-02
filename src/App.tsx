import * as React from 'react'
import { robots } from '@/data/robots.ts'
import { Header } from '@/components/Header.tsx'
import { CardList } from '@/components/CardList.tsx'

const App = (): React.JSX.Element => {
  const [robotsList, setRobotsList] = React.useState(robots)

  function onSearchChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const searchValue = event.target.value.toLowerCase()
    const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchValue))
    setRobotsList(filteredRobots)
  }

  return (
    <>
      <Header onSearchChange={onSearchChange} />
      <CardList elements={robotsList} />
    </>
  )
}

export { App }
