import { Button } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from '@/store'
import { getMovieData } from '@/store/slices/movie'
import { decrement, increment } from '@/store/slices/userSlice'

function App() {
  // const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  const { count } = useSelector(state => state.user!)
  const { list } = useSelector(state => state.movie!)
  useEffect(() => {
    console.log('mounted')
    dispatch(getMovieData())
  }, [dispatch])
  return (
    <div className="App">
      <div style={{ margin: '10px' }}>{count}</div>
      <div>
        <Button type="primary" onClick={() => dispatch(decrement())}>
          -1
        </Button>
        <Button type="primary" onClick={() => dispatch(increment())}>
          +1
        </Button>
        <Button type="primary" onClick={() => dispatch(increment(5))}>
          +5
        </Button>
      </div>
      <ul className="list-none">
        {list.slice(0, 10).map((item) => {
          return (
            <li
              className="mb-2 border border-dark-300 rounded-md border-solid text-red text-center w-30"
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
