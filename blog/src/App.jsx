import React from 'react';
import Card from './components/card/Card';
import Header from './components/header/Header';
import { Fade } from 'react-reveal';
import styles from './style.css';

export default function App() {
  return (
    <>
      <Header />

      <div className='articles'>
        <Fade duration={1000} delay={200}>
          <Card data="01 de jan, 2024" title="Agora é oficial: o Windows 11 está vindo" />
          <Card data="02 de fev, 2024" title="Tim Berners-Lee vai leiloar código-fonte da web" />
          <Card data="03 de mar, 2024" title="Tem Firefox novo no pedaço e você vai querer migrar" />
          <Card data="04 de abr, 2024" title="Inovações Revolucionárias: Tecnologia 6G promete transformar a conectividade" />
          <Card data="05 de mai, 2024" title="Avanços na Inteligência Artificial: Novos algoritmos surpreendem especialistas" />
          <Card data="06 de jun, 2024" title="Realidade Aumentada Redefinida: Novas aplicações prometem experiências imersivas" />
          <Card data="07 de jul, 2024" title="Exploração Espacial Tech: Robôs autônomos enviados para explorar planetas distantes" />
          <Card data="08 de ago, 2024" title="Cibersegurança Avançada: Novas medidas protegem dados em larga escala" />
          <Card data="09 de set, 2024" title="Veículos Autônomos Dominam as Ruas: Tecnologia de condução autônoma avança" />
          <Card data="10 de out, 2024" title="Energia Tech Sustentável: Soluções inovadoras impulsionam a revolução verde" />
          <Card data="11 de nov, 2024" title="Tecnologia Quântica: Avanços significativos abrem portas para novas possibilidades" />
          <Card data="12 de dez, 2024" title="Futuro da Computação: Novos paradigmas e arquiteturas prometem transformar a informática" />
        </Fade>
      </div>
    </>
  );
}
