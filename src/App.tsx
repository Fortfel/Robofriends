import * as React from 'react'
// @ts-expect-error ts(7016): Could not find a declaration file for module
import { robots } from '@/data/robots'
import { Card, type CardProps } from '@/components/Card.tsx'
import { Header } from '@/components/Header.tsx'

const App = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <section className="flex flex-row flex-wrap justify-center gap-5 px-8 py-3">
        {robots.map((robot: CardProps & { id: number }) => (
          <Card key={robot.id} {...robot} />
        ))}
      </section>
    </>
  )
}

export { App }
