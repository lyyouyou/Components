import React from 'react';
import Text from './components/Text';
import Face from './components/Face';
import Text2 from './components/Text2';
import Image from './components/Image';
import Circle from './components/Circle'

export default function Home() {
  return (
    <main style={{ display: 'flex', padding: '15px', height: '100vh', flexWrap: 'wrap', width: '100vw' }}>
      <Text />
      <Text2 />
      <Face />
      <Image />
      <Circle />
    </main>
  )
}
