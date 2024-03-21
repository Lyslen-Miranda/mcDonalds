import React, { useState } from 'react'

import bigMac from '../../assets/bigMac.svg'
import batataFrita from '../../assets/batataFrita.svg'
import sorvete from '../../assets/sorvete.svg'
import delivery from '../../assets/delivery.png'
import loja from '../../assets/loja.png'
import medidas from '../../assets/medidas.png'

import Card from '../Card/Card'

import * as S from './main_styled'

export default function Main() {

  const [produto, setProduto] = useState(bigMac)

  return (
    <main>
      <S.SectionInicial>
        <img src={produto} alt="produto" />
        <p>Bateu aquela <strong>#fome</strong> de <strong>méqui</strong>?</p>
      </S.SectionInicial>
      <S.SectionProdutos>
        <div>
          <img onClick={()=>{setProduto(bigMac)}} src={bigMac} alt="Big Mac" />
          <img onClick={()=>{setProduto(batataFrita)}}src={batataFrita} alt="Batata Frita" />
          <img onClick={()=>{setProduto(sorvete)}}src={sorvete} alt="Sorvete" />
        </div>
      </S.SectionProdutos>
      <S.SectionPromocao>
        <h2>Promoção</h2>
        <div>
          <Card imagem={delivery} texto={"Que tal um #MéquiNoSofá?"} link={"https://www.mcdonalds.com.br/apps"} />
          <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} link={"https://maps.app.goo.gl/jQUuJxxB8BFo5qzF8"}/>
          <Card imagem={medidas} texto={"Confira as medidas que o Méqui adotou!"} link={"https://www.mcdonalds.com.br/familia/compromissoscomasfamilias"}/>
        </div>
      </S.SectionPromocao>
    </main>
  )
}
