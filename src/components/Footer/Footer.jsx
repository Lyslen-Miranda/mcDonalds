import React from 'react'

import logo from '../../assets/logo.svg'
import appStore from '../../assets/appStore.png'
import googlePlay from '../../assets/googlePlay.png'

import * as S from './footer_styled'

export default function Footer() {
  return (
    <S.Footer>
        <S.DivDaLogo>
            <img src={logo} alt="Logo" />
            <p>© McDonald's 2024</p>
        </S.DivDaLogo>
        <S.DivApps>
            <a href="https://apps.apple.com/br/app/mcdonalds-cupons-e-delivery/id1114009187" target='_blank'>
              <img src={appStore} alt="App Store" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds&hl=pt_BR&pli=1" target='_blank'>
              <img src={googlePlay} alt="Google Play" />
            </a>
        </S.DivApps>
    </S.Footer>
  )
}
