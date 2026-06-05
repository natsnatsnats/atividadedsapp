import { View, Text, Button, StyleSheet, Image} from 'react-native';
import { useState } from 'react';


export default function Estatisticas() {
  
 const [curtir, setCurtir] = useState(false);
 const [curtida, setCurtida] = useState("🤍");
 const [favorito, setFavorito] = useState(false);
 const [favoritar, setFavoritar] = useState("⭐");
 const [compartilhamento, setCompartilhamento] = useState(0);


 function CurtirDescurtir(){
   if(curtir == false){
     setCurtir(true)
     setCurtida("❤️")
  
   }else if(curtir == true){
     setCurtir(false)
     setCurtida("🤍")
   }


 }


  function FavoritarDesfavoritar(){
   if(favorito == false){
     setFavorito(true)
     setFavoritar("🌟")
  
   }else if(favorito == true){
     setFavorito(false)
     setFavoritar("⭐")
   }
  }




   return(
       <View style={styles.ButtonDiv}>
      <Button
       title={curtida}
       onPress={() =>  {CurtirDescurtir()} }
   
     />


       <Button
      title={`Compartilhar.   ${compartilhamento}`}
       onPress={() =>  setCompartilhamento(compartilhamento + 1) }
  
      
     />


       <Button
       title={favoritar}
       onPress={() =>  {FavoritarDesfavoritar()} }
     />
    
   </View>




   )


  }


  const styles = StyleSheet.create({
curtir: {
   marginBottom: 10,
   fontSize: 16,
 },


   ButtonDiv: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: 10,
   width: '100%'
 }




 
  })

