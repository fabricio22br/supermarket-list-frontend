import { useState } from 'react'
import './index.css'
import { Input } from '../Input'
import { Button } from '../Button'
import { createItem } from '../../services/request'

export const Modal = ({ onClose }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)

  const callAddItem = async () => {
    if (name.length < 3) {
      alert('Nome precisa ter mais de 3 caracteres.')
      return
    }

    if (quantity < 1) {
      alert('Quantidade não pode ser menor do que 1.')
      return
    }

    const result = await createItem({ name, quantity: Number(quantity) })
    if (!result?.error) {
      alert('Item salvo com sucesso.')
      onClose()
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Adicionar novo item</h1>
          <button onClick={onClose} className="modal-close-button" />
        </div>
        <Input
          onChange={text => setName(text)}
          value={name}
          label="Nome"
          placeholder="Ex: Arroz"
        />
        <Input
          onChange={text => setQuantity(text)}
          value={quantity}
          label="Quantidade"
          type="number"
        />
        <div className="modal-spacer" />
        <Button onClick={callAddItem}>Adicionar</Button>
      </div>
    </div>
  )
}
