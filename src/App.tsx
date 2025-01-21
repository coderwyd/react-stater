import { useQuery } from '@tanstack/react-query'
import { Button } from 'antd'
import { useEffect } from 'react'
import { getMovieListApi } from './api/movie'
import { useCountStore } from './store'

function App() {
  // const [count, setCount] = useState(0)
  const { count, increment, decrement } = useCountStore()

  const { data: list } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const result = await getMovieListApi()
      return result.data.list
    },
    initialData: [],
  })

  useEffect(() => {
    console.log('list', list)
  }, [list])

  return (
    <div className="App">
      <div className="text-cyan" style={{ margin: '10px' }}>
        {count}
      </div>
      <div className="flex gap-10">
        <Button type="primary" onClick={() => decrement()}>
          -1
        </Button>
        <Button type="primary" onClick={() => increment()}>
          +1
        </Button>
        <Button type="primary" onClick={() => increment(5)}>
          +5
        </Button>
      </div>
      <ul className="list-none">
        {list.slice(0, 10).map((item) => {
          return (
            <li
              className="mb-2 w-30 border border-dark-300 rounded-md border-solid text-center text-red"
              key={item.tvId}
            >
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
