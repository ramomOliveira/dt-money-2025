import { createContext, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transactions')
    console.log('query', query)

    if (query) {
      url.searchParams.append('q', query)
    }

    console.log('url', url)

    const response = await fetch(url)
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export { TransactionsContext }
