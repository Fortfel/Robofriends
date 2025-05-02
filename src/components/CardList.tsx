import * as React from 'react'
import { Card, type CardProps } from '@/components/Card.tsx'

export type CardListProps = {
  elements: Array<CardProps & { id: number }>
}

const CardList = ({ elements }: CardListProps): React.JSX.Element => {
  return (
    <section className="mx-auto flex max-w-[var(--breakpoint-2xl)] flex-row flex-wrap justify-center gap-5 px-8 py-3">
      {elements.map((element) => (
        <Card key={element.id} {...element} />
      ))}
    </section>
  )
}

export { CardList }
