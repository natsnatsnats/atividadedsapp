import { View, FlatList, StyleSheet } from 'react-native';
import Jogo from './components/Jogo';
import Estatisticas from './components/Estatisticas';


// Importando fotos
import Delta from './pngs/delta.jpg'
import Galinha from './pngs/galinha.jpg'
import Hollow from './pngs/hollow.jpg'
import Lis from './pngs/estranhinho.jpg'
import Lis2 from './pngs/lis2.jpg'
import Medo from './pngs/medo.jpg'
import Minecraft from './pngs/minecraft.jpg'
import Omori from './pngs/omori.jpg'
import Oneshot from './pngs/one shot.jpg'
import Over from './pngs/overcook.jpg'
import Outer from './pngs/outer.jpg'
import Peak from './pngs/peak.jpg'
import Pesadelo from './pngs/pesadelinho.jpg'
import Pesadelo2 from './pngs/pesadelo2.jpg'
import Silk from './pngs/silk.jpg'
import Stardew from './pngs/stardewva.jpg'
import Terraria from './pngs/terraria.jpg'
import Then from './pngs/then.jpg'
import Titan from './pngs/titanzinho.jpg'
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
     descricao: 'Mergulhe na história paralela de UNDERTALE! Lute ou poupe seu caminho em batalhas repletas de ação enquanto explora um mundo misterioso ao lado de um elenco cativante de personagens novos e conhecidos.'
   },
   {
     id: '2',
     nome: 'Enigma do Medo',
     categoria: 'Terror Psicológico',
     plataforma: 'PC',
     imagem: Medo,
     data: '2023',
     descricao: 'Se torne Mia, uma detetive paranormal buscando por seu pai que desapareceu. Investigue e desvende os mistérios do Enigma do Medo, derrotando monstros assustadores em seu caminho.'
   },
   {
     id: '3',
     nome: 'Hollow Knight',
     categoria: 'Metroidvania',
     plataforma: 'PC, Nintendo, Playstation e Xbox',
     imagem: Hollow,
     data: '24/02/2017',
     descricao: 'Abaixo da cidade moribunda de Dirtmouth jaz um reino antigo e arruinado. Explore cavernas, lute contra criaturas malignas e solucione mistérios antigos.'
   },
   {
     id: '4',
     nome: 'Hollow Knight: Silksong',
     categoria: 'Metroidvania',
     plataforma: 'PC, Nintendo, Playstation, Xbox',
     imagem: Silk,
     data: '04/08/2025',
     descricao: 'Descubra um reino vasto e amaldiçoado em Hollow Knight: Silksong! Explore, lute e sobreviva enquanto você ascende ao pico de uma terra governada pela seda e por canções.'
   },
   {
     id: '5',
     nome: 'Life is Strange',
     categoria: 'Visual Novel',
     plataforma: 'PC, Mobile, Playstation, Xbox e Nintendo',
     imagem: Lis,
     data: '29/01/2015',
     descricao: 'Life Is Strange se passa na cidade fictícia de Arcadia Bay. Max Caulfield descobre possuir a habilidade de voltar no tempo.'
   },
   {
     id: '6',
     nome: 'Life is Strange 2',
     categoria: 'Visual Novel',
     plataforma: 'PC, Mobile e Nintendo',
     imagem: Lis2,
     data: '26/09/2018',
     descricao: 'Após um trágico incidente, os irmãos Sean e Daniel Diaz fogem de casa com um novo poder telecinético.'
   },
   {
     id: '7',
     nome: 'Little Nightmares',
     categoria: 'Terror',
     plataforma: 'PC, Mobile, Playstation, Xbox, Nintendo',
     imagem: Pesadelo,
     data: '28/04/2017',
     descricao: 'Mergulhe em Little Nightmares, um fantástico conto sombrio que o fará enfrentar seus medos de infância! Ajude Six a fugir de A Bocarra – um navio imenso e misterioso habitado por almas corrompidas que procuram sua próxima refeição.'
   },
   {
     id: '8',
     nome: 'Little Nightmares 2',
     categoria: 'Terror',
     plataforma: 'PC, Mobile, Playstation, Xbox, Nintendo',
     imagem: Pesadelo2,
     data: '11/02/2021',
     descricao: 'Little Nightmares II é uma aventura de suspense em que se controla Mono, um garoto preso em um mundo que foi distorcido por uma transmissão maligna. Juntamente com sua amiga, Six, ele começa uma jornada para descobrir a fonte da Transmissão.'
   },
   {
     id: '9',
     nome: 'Minecraft',
     categoria: 'Sandbox',
     plataforma: 'PC, Mobile, Playstation, Xbox, Nintendo',
     imagem: Minecraft,
     data: '18/11/2011',
     descricao: 'O jogo mais vendido de todos os tempos! Construa, explore, sobreviva e crie mundos infinitos.'
   },
   {
     id: '10',
     nome: 'Omori',
     categoria: 'RPG Psicológico',
     plataforma: 'PC, Nintendo, Playstation, Xbox',
     imagem: Omori,
     data: '25/12/2020',
     descricao: 'Explore um mundo estranho, repleto de amigos e inimigos peculiares. Quando chegar a hora, o caminho que você escolheu determinará seu destino... e talvez o de outros também.'
   },
   {
     id: '11',
     nome: 'OneShot',
     categoria: 'Puzzle',
     plataforma: 'PC',
     imagem: Oneshot,
     data: '08/12/2016',
     descricao: 'OneShot é um jogo surreal de quebra-cabeça/aventura com recursos exclusivos de jogabilidade. Você deverá guiar uma criança por um mundo misterioso e restaurar o seu sol há muito extinto. O mundo sabe que você existe.'
   },
   {
     id: '12',
     nome: 'Outer Wilds',
     categoria: 'Aventura Espacial',
     plataforma: 'PC, Playstation, Xbox, Nintendo',
     imagem: Outer,
     data: '28/05/2019',
     descricao: 'Um jogo de mistério espacial onde você explora um sistema solar preso em um loop de tempo.'
   },
   {
     id: '13',
     nome: 'Overcooked 2',
     categoria: 'Culinária',
     plataforma: 'PC, Mobile, Playstation, Xbox, Nintendo',
     imagem: Over,
     data: '03/08/2016',
     descricao: 'O Overcooked voltou trazendo mais caos para a cozinha! Volte para o Reino da Cebola e monte sua equipe de chefs em um jogo cooperativo local ou on-line para até quatro jogadores. Segurem seus aventais ... chegou a hora de salvar o mundo (de novo!)'
   },
   {
     id: '14',
     nome: 'Peak',
     categoria: 'Aventura',
     plataforma: 'PC',
     imagem: Peak,
     data: '16/06/2024',
     descricao: 'PEAK é um jogo cooperativo de escalada onde o menor erro pode custar a sua vida. Sozinho ou em grupo, sua única esperança de resgate em uma ilha misteriosa é escalar a montanha no seu centro. Você tem o que é preciso para chegar ao PICO?'
   },
   {
     id: '15',
     nome: 'Stardew Valley',
     categoria: 'Simulação',
     plataforma: 'PC, Mobile, Playstation, Xbox, Nintendo',
     imagem: Stardew,
     data: '26/02/2016',
     descricao: 'Você herdou a antiga fazenda do seu avô, em Stardew Valley. Com ferramentas de segunda-mão e algumas moedas, você parte para dar início a sua nova vida. Será que você vai aprender a viver da terra, a transformar esse matagal em um próspero lar?'
   },
   {
     id: '16',
     nome: 'Super Chicken Jump',
     categoria: 'Plataforma',
     plataforma: 'PC, Mobile e Nintendo',
     imagem: Galinha,
     data: '24/09/2021',
     descricao: 'Um espião-galinha tenta salvar o mundo enquanto meninas de anime o guiam nesse runner/shooter.'
   },
   {
     id: '17',
     nome: 'Terraria',
     categoria: 'Aventura Sandbox',
     plataforma: 'PC, Mobile, Playstation, Xbox, Nintendo',
     imagem: Terraria,
     data: '16/05/2011',
     descricao: 'Cave, lute, explore, construa! Nada é impossível neste jogo de aventura cheio de ação. Pacote com quatro jogadores também disponível.'
   },
   {
     id: '18',
     nome: 'Titan Souls',
     categoria: 'Ação',
     plataforma: 'PC, Playstation, Xbox',
     imagem: Titan,
     data: '14/04/2015',
     descricao: 'Entre o nosso mundo e o mundo além, encontram-se as Almas dos Titãs, a fonte espiritual de todos os seres vivos. Espalhadas pelas ruínas e guardadas pelos titãs ociosos encarregados de sua proteção, um herói solitário, armado com uma única flecha, reúne fragmentos da Alma dos Titãs em busca da verdade e do poder.'
   },
   {
     id: '19',
     nome: 'Undertale',
     categoria: 'Rpg eletrônico',
     plataforma: 'PC, Nintendo',
     imagem: Undertale,
     data: '15/09/2015',
     descricao: 'Neste RPG, você controla um humano que cai no subterrâneo, no mundo dos monstros.'
   },
   {
     id: '20',
     nome: 'Until Then',
     categoria: 'Visual Novel',
     plataforma: 'PC',
     imagem: Then,
     data: '25/07/2024',
     descricao: 'Um fatídico encontro desencadeia um efeito dominó, revirando a vida de Mark. Pessoas somem e as memórias se mostram incertas. Revele uma verdade oculta com Mark e seus amigos nesta narrativa de aventura e corra para resolver o mistério antes que seja tarde demais.'
   }
 ];


 return (
   <View style={styles.container}>
     <FlatList
       data={jogos}
       keyExtractor={(item) => item.id}
       contentContainerStyle={styles.flatListContent}
       renderItem={({ item }) => (
         <View style={styles.itemContainer}>
           <Jogo
             nome={item.nome}
             categoria={item.categoria}
             plataforma={item.plataforma}
             imagem={item.imagem}
             data={item.data}
             descricao={item.descricao}
           />
           <Estatisticas />
         </View>
       )}
     />
   </View>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#f0f0f0',
 },
 flatListContent: {
   alignItems: 'center',
   justifyContent: 'center',
   paddingTop: 20,
   paddingBottom: 20,
   paddingHorizontal: 20,
 },
 itemContainer: {
   width: '1000%',
   maxWidth: 600, // Limita a largura máxima em telas muito grandes
   alignItems: 'center',
   marginBottom: 20, // Espaço entre os cards
 },
});

