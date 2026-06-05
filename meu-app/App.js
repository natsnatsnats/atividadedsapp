import { View, FlatList, StyleSheet } from 'react-native';
import Jogo from './components/Jogo';
import Estatistica from './components/Estatisticas';

//Importando fotos
import Delta from './pngs/delta.jpg'
import Galinha from './pngs/galinha.jpg'
import Hollow from './pngs/hollow.jpg'
import Lis from './pngs/lis.jpg'
import Lis2 from './pngs/lis2.jpg'
import Medo from './pngs/medo.jpg'
import Minecraft from './pngs/minecraft.jpg'
import Omori from './pngs/omori.jpg'
import Oneshot from './pngs/one shot.jpg'
import Over from './pngs/over.jpg'
import Outer from './pngs/outer.jpg'
import Peak from './pngs/peak.jpg'
import Pesadelo from './pngs/pesadelo.jpg'
import Pesadelo2 from './pngs/pesadelo2.jpg'
import Silk from './pngs/silk.jpg'
import Stardew from './pngs/stardew.jpg'
import Terraria from './pngs/terraria.jpg'
import Then from './pngs/then.jpg'
import Titan from './pngs/titan.jpg'
import Undertale from './pngs/undertale.jpg'

export default function App() {
  const jogos = [
    {
      id: '1',
      nome: 'Deltarune',
      categoria: 'Rpg eletrônico',
      plataforma: 'PC, Playstation e Nintendo',
      imagem: Delta,
      data: '31/10/2018',
      descricao: 'Mergulhe na história paralela de UNDERTALE! Lute ou poupe seu caminho em batalhas repletas de ação enquanto explora um mundo misterioso ao lado de um elenco cativante de personagens novos e conhecidos. Os capítulos 1 a 4 estarão disponíveis no lançamento, com mais planejados como atualizações gratuitas!'
    },
    {
      id: '3',
      nome: 'Hollow Kight',
      categoria: 'Metroidvania',
      plataforma: 'PC, Nintendo, Playstation e Xbox',
      imagem: Hollow,
      data: '24/02/2017',
      descricao: 'Abaixo da cidade moribunda de Dirtmouth jaz um reino antigo e arruinado. Muitos são atraídos para o subterrâneo em busca de riquezas, glórias ou respostas para antigos segredos. Hollow Knight é uma aventura de ação clássica em estilo 2D por um vasto mundo interligado. Explore cavernas serpenteantes, cidades antigas e ermos mortais; lute contra criaturas malignas e alie-se a insetos bizarros, e solucione mistérios antigos no centro do reino.'
    },
    {
      id: '4',
      nome: 'Life is Strange',
      categoria: 'Rpg eletrônico',
      plataforma: 'PC, Mobile e Nintendo',
      imagem: Lis,
      data: '31/10/2018',
      descricao: 'Um espião-galinha tenta salvar o mundo da devastação enquanto meninas de anime o guiam nesse runner/shooter que atira pra todo lado. Corra por 6 mundos diferentes, atire em seus inimigos e torne-se uma galinha lendária'
    },
    {
      id: '2',
      nome: 'Super Chiken Jump',
      categoria: 'Rpg eletrônico',
      plataforma: 'PC, Mobile e Nintendo',
      imagem: Galinha,
      data: '31/10/2018',
      descricao: 'Um espião-galinha tenta salvar o mundo da devastação enquanto meninas de anime o guiam nesse runner/shooter que atira pra todo lado. Corra por 6 mundos diferentes, atire em seus inimigos e torne-se uma galinha lendária'
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Jogo
            nome={item.nome}
            categoria={item.categoria}
            plataforma={item.plataforma}
            imagem={item.imagem}
            data={item.data}
            descricao={item.descricao}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
  },
});