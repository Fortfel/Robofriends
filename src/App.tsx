import * as React from 'react'
import { Header } from '@/components/Header.tsx'
import { CardList } from '@/components/CardList.tsx'

// jsonplaceholder.typicode.com/users
type UsersApi = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

const App = (): React.JSX.Element => {
  const [usersList, setUsersList] = React.useState<Array<UsersApi>>([])
  const [searchValue, setSearchValue] = React.useState<string>('')

  // Derived values
  const filteredUsersList = usersList.filter((user) => user.name.toLowerCase().includes(searchValue.toLowerCase()))

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsersList(data as Array<UsersApi>))
      .catch((error: unknown) => console.error('Failed to fetch users:', error))
  }, [])

  function onSearchChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <Header onSearchChange={onSearchChange} />
      {filteredUsersList.length > 0 ? (
        <CardList elements={filteredUsersList} />
      ) : (
        <p className="mt-5 text-center text-xl">No results</p>
      )}
    </>
  )
}

export { App }
