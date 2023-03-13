import React, { FC, ReactNode, useState } from 'react'
import './SelectCard.scss'
import { Button } from '../Button'
import { Typography } from '../Typography'

export interface SelectCardProps {
  cards: string[]
  successCard: string
}

export const SelectCard: FC<SelectCardProps> = ({ cards, successCard }) => {
  const [currentCard, setCurrentCard] = useState<null | number>(null)
  return (
    <div className='bui-selectCard'>
      <Typography sx={{ margin: '20px 0' }} variant='h5'>
        Как переводится «озеро»?
      </Typography>
      <ul className='bui-selectCard__list'>
        {cards.map((card, index) => (
          <li className='bui-selectCard__listItem' key={index} onClick={() => setCurrentCard(index)}>
            <button
              className={`bui-selectCard__button ${index === currentCard ? 'bui-selectCard__button_active' : ''}`}
            >
              {card}
            </button>
          </li>
        ))}
      </ul>
      <div className='bui-selectCard__bottom'>
        <Button size='large'>Не знаю</Button>
        <Button size='large' variant='filled' disabled={currentCard === null}>
          Проверить
        </Button>
      </div>
    </div>
  )
}
