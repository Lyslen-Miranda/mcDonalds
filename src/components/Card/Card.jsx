import React from 'react'

import * as S from './card_styled'

export default function Card({imagem, texto, link}) {
  return (
    <S.Card>
        <img src={imagem}/>
        <p>{texto}</p>
        <button><a href={link} target='_blank'>Cique aqui</a></button>
    </S.Card>
  )
}
