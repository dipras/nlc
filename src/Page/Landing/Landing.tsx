
 import React, {ReactNode} from 'react';
 import { Dimensions, View, StyleSheet, ScrollView } from 'react-native';
 import { Text, Image, Button } from "@rneui/themed";
 import { Shadow } from 'react-native-shadow-2';
 
 const Window = Dimensions.get('window').width;
 const homeImgWidth = Window / 1.13089005236;
 const homeImgRatio = 191 / 143;
 const roundWidthHeight = Window / (108 / 25);
 
 const Landing: React.FC = () => {
   return (
       <ScrollView>
         <View style={{position: "absolute", width: roundWidthHeight, height: roundWidthHeight, backgroundColor: "#FFAE70", borderRadius: 100, left: roundWidthHeight / -2}}></View>
         <Image source={require('../../assets/img/computer-home.png')} style={{width: homeImgWidth, height: homeImgWidth / homeImgRatio, transform: [{rotate: "45deg"}]}} />
         <View style={{paddingHorizontal: Window * 10 / 100}}>
           <Text h1 style={{textAlign: "center", color: "#605E5E"}}>BELAJAR EKSPOR LEBIH MUDAH </Text>
           <Text style={{textAlign: "center", marginTop: 20}}>Anda akan diajari caranya, langkah demi langkah dari 0 sampai anda jago dalam bidang Ekspor. Mau?</Text>
           <Text style={{textAlign: "center", fontWeight: "bold", marginTop: 10}}>#EKSPORBARENGAN</Text>
         </View>
         <View style={{flexDirection: 'row', justifyContent: "center", marginTop: 50}}>
           <Button title={"Login / Signup"} radius="md" />
         </View>
         <View style={{paddingHorizontal: Window * 10 / 100, marginTop: 50}}>
          <Text h3 style={{textAlign: "center", color: "#605E5E"}}>Mencetak 300+ Eksportir Baru Sejak Tahun 2014</Text>
          <Text h4 style={{textAlign: "center", color: "#605E5E", marginTop: 10}}>Dipercayai Oleh Banyak Institusi</Text>
          <Image source={require('../../assets/img/group-sponsor.png')} style={{height: 40, width: 400}} />
        </View>
          <Text h3 style={{textAlign: "center", color: "#605E5E", marginTop: 50}}>Biasanya ada 7 Hal yang menjadi masalah calon eksportir:</Text>
          <View style={{flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap"}}>
                <View style={{width: 125}}>
                    <Image source={require('../../assets/img/sulit-mencari-prospek-pembeli.png')} style={{width: 125, height: 125}} />
                    <Text style={{textAlign: "center"}}>Sulit Mencari Prospek Pembeli</Text>
                </View>
                <View style={{width: 125}}>
                    <Image source={require('../../assets/img/tidak-tahu-mulai-darimana.png')} style={{width: 125, height: 125}} />
                    <Text style={{textAlign: "center"}}>Tidak tahu mulai darimana</Text>
                </View>
                <View style={{width: 125}}>
                    <Image source={require('../../assets/img/bingung-menentukan-produk-yang-dijual.png')} style={{width: 125, height: 125}} />
                    <Text style={{textAlign: "center"}}>Bingung Menentukan Produk Yang Dijual</Text>
                </View>
                <View style={{width: 125}}>
                    <Image source={require('../../assets/img/punya-produk-tapi-tidak-tau-dijual-kemana.png')} style={{width: 125, height: 125}} />
                    <Text style={{textAlign: "center"}}>Punya Produk Tapi Tidak Tahu Jual ke Negara Mana</Text>
                </View>
                <View style={{width: 125}}>
                    <Image source={require('../../assets/img/takut-tidak-dibayar.png')} style={{width: 125, height: 125}} />
                    <Text style={{textAlign: "center"}}>Takut tidak di bayar</Text>
                </View>
                <View style={{width: 125}}>
                    <Image source={require('../../assets/img/tidak-memiliki-modal.png')} style={{width: 125, height: 125}} />
                    <Text style={{textAlign: "center"}}>Tidak memiliki modal</Text>
                </View>
                <View style={{width: 125}}>
                    <Image source={require('../../assets/img/Sulit-mencari-supplier.png')} style={{width: 125, height: 125}} />
                    <Text style={{textAlign: "center"}}>Sulit Menendapatkan Supplier Produk Yang Tepat</Text>
                </View>
          </View>
       </ScrollView>
   )
 };
 
 const style = StyleSheet.create({
   round1: {position: "absolute", width: roundWidthHeight, height: roundWidthHeight, backgroundColor: "#FFAE70", borderRadius: 100, left: roundWidthHeight / -2},
   round2: {position: "absolute", width: roundWidthHeight * 2, height: roundWidthHeight * 2, backgroundColor: "#FFAE70", borderRadius: 100, left: roundWidthHeight / -2},
 })
 
 
 export default Landing;
 