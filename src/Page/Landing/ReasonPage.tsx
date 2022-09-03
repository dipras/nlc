
 import React, {useState} from 'react';
 import { Dimensions, View, FlatList, ScrollView } from 'react-native';
 import { Text, Image } from "@rneui/themed";
import { Icon } from '@rneui/base';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Shadow } from 'react-native-shadow-2';
 

 const Window = Dimensions.get('window').width;
 const reasonImageWidth = (Window * 50 / 100) - (Window * 10 / 100);
 const reasonImageRatio = 244 / 144;

 type renderItem = {
    item: data,
    index: number
 }

 type data = {
    text: string,
    name: string,
    produk?: string
 }
 
 const ReasonPage: React.FC = () => {
    const [data, setData] = useState<data[]>([
        {
            text: 'Penyampaian para narsum sangat luar biasa, karena ketika seseorang berbicara dengan pengalaman pasti beda dengan orang yg hanya tau teori saja. ada energi tambahan yg ditransfer. saya sangat senang bisa menimba ilmu dari orang-orang yg luar biasa. untuk penyelenggara yg sabar menyertai dari awal sampai akhir saya sangat berterima kasih karena sudah meluangkan waktu membersamai kami, terima kasih juga sudah mewadahi kami untuk memperdalam ilmu ekspor ini.',
            name: "Muklish F. Alamsyah"
        },

        {
            text: 'Pelatihan ini memotivasi saya utk berkontribusi meningkatkan devisa negara dan membuka lapangan pekerjaan ditengah kesulitan ekonomi yg dirasakan sebagian masyarakat akibat pandemi. Semoga ilmu yg disampaikan menjadi ilmu bermanfaat bagi para peserta dan menjadi amal kebaikan jariyah bagi para fasilitator dan penyelenggara',
            name: "Dinni Nurhayani, S.T., M.T.",
            produk: "Gula Kelapa, Buah Tropis"
        },

        {
            text: 'Terimakasih kepada para fasilitator yg sudah ikhlas berbagi imu dan pengalamannya. Terimakasih kepada Mbak Mila dan team NLC yang telah menyelenggarakan workshop dengan sangat baik dan memuaskan. Bagi saya Nudira Learning Centre adalah salah satu lembaga pelatihan ekspor terbaik di negeri ini. Kalau ada pelatihan lanjutan pasti saya akan ikut lagi. Sukses utk Nudira Learning Centre.',
            name: "Bonita Harsadi",
            produk: "Sweet Potatoes and Yam beserta produk turunannya (snack, flour)"
        },
    ]);
    
    const renderItem = (params: renderItem) => {
        const text = params.item.text.length > 350 ? params.item.text.slice(0, 350) + "..." : params.item.text;

        return (
            <View style={{width: 380, height: "100%", backgroundColor: "white", borderRadius: 20, marginRight: 20}} key={params.index}>
                <Shadow>
                    <View style={{height: "100%", width: 380, borderRadius: 20, paddingTop: 50, paddingHorizontal: 20}}>
                        <Text style={{textAlign: "center", color: "#838383"}}>"{text}"</Text>
                        <Text style={{textAlign: "center", color: "#838383", marginTop: 20, fontWeight: "bold"}}>{params.item.name}</Text>
                        <Text style={{textAlign: "center", color: "#838383"}}>{params.item.produk || ""}</Text>
                    </View>    
                </Shadow>
            </View>
        )
    }

   return (
        <ScrollView>
            <View style={{backgroundColor: "#4C5EFD", paddingVertical: 30, paddingHorizontal: Window * 5 / 100}}>
                <View style={{flexDirection: "row"}}>
                    <View style={{width: "50%"}}>
                        <Text h3 style={{color: "#FFCE33"}}>Tahukan Anda ?</Text>
                        <Text style={{color: "white"}}>Nilai ekspor Indonesia meningkat pada bulan November 2021 hingga menembus angka USD 22,84 Milliar</Text>
                    </View>
                    <View style={{width: "50%", flexDirection: "column", justifyContent: "center"}}>
                        <Image source={require('../../assets/img/reason-image.png')} style={{width: reasonImageWidth, height: reasonImageWidth / reasonImageRatio}} />
                    </View>
                </View>
                <Text style={{color: "#FFCE33", marginTop: 50}} h4>Biasanya ada 7 Hal yang menjadi masalah calon eksportir: </Text>
                <View>
                    <View style={{flexDirection: "row", marginTop: 20}}>
                        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: "white", marginRight: 10}}>
                        </View>
                        <Text style={{color: "white"}}>Ekspor Indonesia Didominasi Produk Mentah dan Produk Setengah Jadi</Text>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 20}}>
                        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: "white", marginRight: 10}}>
                        </View>
                        <Text style={{color: "white"}}>Indonesia Dikenal Sebagai Produsen Berbagai Brand Terkenal Luar Negeri</Text>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 20}}>
                        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: "white", marginRight: 10}}>
                        </View>
                        <Text style={{color: "white"}}>Bisnis Ekspor Dapat Dimulai Dengan Kuantitas Kecil</Text>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 20}}>
                        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: "white", marginRight: 10}}>
                        </View>
                        <Text style={{color: "white"}}>Bisnis Ekspor Sama Halnya Dengan Bisnis Pada Umumnya. Anda Harus Bangun Basis Customer Anda Terlebih Dahulu.</Text>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 20}}>
                        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: "white", marginRight: 10}}>
                        </View>
                        <Text style={{color: "white"}}>Pembeli Akan Mencari Produk Anda Apabila Produk Anda Mudah Ditemukan Secara Online.</Text>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 20}}>
                        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: "white", marginRight: 10}}>
                        </View>
                        <Text style={{color: "white"}}>Ekspor Itu Mudah Dilakukan Bagi Semua Kalangan Yang Ingin Belajar</Text>
                    </View>
                </View>
            </View>
            <View style={{paddingVertical: 30, paddingHorizontal: Window * 5 / 100}}>
                <Text h4 style={{color: "#696984"}}>Inilah alasan mengapa anda harus ekspor produk Anda bersama Export Academy</Text>
                <View style={{flexDirection: "row", marginTop: 20}}>
                    <Icon name="check-circle-outline" type="material" size={24} iconStyle={{color: "#FFB103"}} style={{marginRight: 10}} />
                    <Text style={{color: "#696984"}}>Menjangkau pasar yg lebih luas</Text>
                </View>
                <View style={{flexDirection: "row", marginTop: 20}}>
                    <Icon name="check-circle-outline" type="material" size={24} iconStyle={{color: "#FFB103"}} style={{marginRight: 10}} />
                    <Text style={{color: "#696984"}}>Komoditas Indonesia yang bernilai tinggi</Text>
                </View>
                <View style={{flexDirection: "row", marginTop: 20}}>
                    <Icon name="check-circle-outline" type="material" size={24} iconStyle={{color: "#FFB103"}} style={{marginRight: 10}} />
                    <Text style={{color: "#696984"}}>Pemanfaatan Kelebihan Kapasitas Produksi</Text>
                </View>
                
                <View style={{width: "100%", backgroundColor: "#4C5EFD", borderRadius: 20, paddingVertical: 20, marginTop: 50, paddingHorizontal: 20, height: 450, marginBottom: 50}}>
                    <Text h4 style={{color: "white", textAlign: "center"}}>Apa Kata Mereka Tentang Export Academy?</Text>
                    <View style={{height: 270, position: "absolute", top: 100, left: -10, width: 420}}>
                        <FlatList keyExtractor={(item, index) => index} renderItem={renderItem} data={data} horizontal showsHorizontalScrollIndicator={false} />
                    </View>
                </View>
                <YoutubePlayer height={300} videoId={"u4myi5tlpn0"} />
            </View>

        </ScrollView>
   )
 };
 
 export default ReasonPage;
 