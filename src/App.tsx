import * as React from 'react'
import { Header } from '@/components/Header.tsx'
import { CardList } from '@/components/CardList.tsx'

/**
 * Type definition for user data from the JSON Placeholder API
 */
type UsersApi = {
  /** Unique identifier for the user */
  id: number
  /** Full name of the user */
  name: string
  /** Username of the user */
  username: string
  /** Email address of the user */
  email: string
  /** Address information for the user */
  address: {
    /** Street name */
    street: string
    /** Suite or apartment number */
    suite: string
    /** City name */
    city: string
    /** Postal code */
    zipcode: string
    /** Geographic coordinates */
    geo: {
      /** Latitude coordinate */
      lat: string
      /** Longitude coordinate */
      lng: string
    }
  }
  /** Phone number of the user */
  phone: string
  /** Website of the user */
  website: string
  /** Company information */
  company: {
    /** Company name */
    name: string
    /** Company catchphrase */
    catchPhrase: string
    /** Company business strategy */
    bs: string
  }
}

/**
 * Main application component that fetches and displays robot friends
 *
 * @returns React component
 */
const App = (): React.JSX.Element => {
  const [usersList, setUsersList] = React.useState<Array<UsersApi>>([])
  const [searchValue, setSearchValue] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)

  // Derived values
  const filteredUsersList = usersList.filter((user) => user.name.toLowerCase().includes(searchValue.toLowerCase()))

  /**
   * Handles search input changes
   *
   * @param event - Change event from input element
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }

  // Fetch users data on component mount
  React.useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        setIsLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status.toString()}`)
        }

        const data = (await response.json()) as Array<UsersApi>
        setUsersList(data)
        setError(null)
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
        console.error('Failed to fetch users:', errorMessage)
        setError('Failed to load users. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    void fetchUsers()
  }, [])

  return (
    <main className="min-h-screen">
      <Header onSearchChange={handleSearchChange} />

      {error && (
        <p className="mt-5 text-center text-xl text-red-500" role="alert">
          {error}
        </p>
      )}

      {isLoading ? (
        <p className="mt-5 text-center text-xl" aria-live="polite">
          Loading users...
        </p>
      ) : filteredUsersList.length > 0 ? (
        <CardList elements={filteredUsersList} />
      ) : (
        <p className="mt-5 text-center text-xl" aria-live="polite">
          No matching robots found
        </p>
      )}
    </main>
  )
}

export { App }
