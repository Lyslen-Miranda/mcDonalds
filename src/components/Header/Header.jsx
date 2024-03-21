import React from 'react'

import logo from '../../assets/logo.svg'
import iconCel from '../../assets/iconCel.svg'
import iconApp from '../../assets/iconApp.svg'

import * as S from './header_styled'

export default function Header() {
  return (
    <S.Header>
        <S.Logo src={logo} alt="logo" />
        <section>
            <div>
                <img src={iconCel} alt="cel1" />
                <a href="https://www.mcdonalds.com.br/apps" target='_blank'>
                  <p>Baixe o App</p>
                </a>
            </div>
            <S.DivFundoAmarelo>
                <a href="https://www.mcdonalds.com.br/pedidos" target='_blank'>
                  <p><strong> Peça seu Méqui </strong></p>
                </a>
                <img src={iconApp} alt="cel2" />
            </S.DivFundoAmarelo>
        </section>
    </S.Header>
  )
}
