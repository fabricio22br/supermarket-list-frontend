import { SubTitle } from 'components/atoms'
import { ListCard } from 'components/molecules/ListCard'
import { ListRenderContainer } from './styles'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return <SubTitle>Sua lista está vazia, adicione um item.</SubTitle>
  }

  return (
    <ListRenderContainer>
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </ListRenderContainer>
  )
}
