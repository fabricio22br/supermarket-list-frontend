import { useEffect } from 'react'
import { getList } from '../../services/request'

export const ListScreen = () => {
  const loadListItems = async () => {
    const result = await getList()
    console.log({ result })
  }

  useEffect(() => {
    loadListItems()
  }, [])

  return <div></div>
}
