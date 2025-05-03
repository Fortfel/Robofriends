import * as React from 'react'
import { Card, type CardProps } from '@/components/Card.tsx'

/**
 * Props for the CardList component
 */
export type CardListProps = {
  /** Array of elements to display as cards */
  elements: Array<CardProps & { id: number }>
}

/**
 * CardList component that renders a grid of Card components
 *
 * @param elements - Array of elements to display as cards
 * @returns React component
 */
const CardList = ({ elements }: CardListProps): React.JSX.Element => {
  return (
    <section
      className="mx-auto flex max-w-[var(--breakpoint-2xl)] flex-row flex-wrap justify-center gap-5 px-8 py-3"
      aria-label="Robot cards grid"
    >
      {elements.map((element) => (
        <Card key={element.id} {...element} />
      ))}
    </section>
  )
}

export { CardList }
