import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import { Text } from '@rneui/base';


const Window = Dimensions.get('window');
const parentHPadding = Window.width * 5 / 100;
const pointHPadding = (Window.width - (parentHPadding * 2)) * 10 / 100;
const WhyPage : React.FC = () => {
    return (
        <ScrollView>
            <View style={{paddingHorizontal: parentHPadding}}>
                <Text h3 style={{color: "#696984", textAlign: "center", marginBottom: 20}}>Mengapa Memilih Export Academy sebagai Teman Belajar Anda?</Text>
                <View style={{backgroundColor: "#4C5EFD", width: "100%", borderRadius: 20, paddingVertical: 30, marginBottom: 70}}>
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text h4 style={{color: "white", textAlign: "center", marginBottom: 20}}>Materi Ekspor sudah berbasis SKKNI</Text>
                    </View>

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Melakukan Persiapan usaha ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Menyusun rencana usaha Ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Menghitung harga Ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Menyiapkan produk Ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Promosi & mencari pembeli di pasar Ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Mengurus Pembayaran Ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Melakukan Pemasaran Ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Melakukan Negoisasi & kontrak penjualan Ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Mengurus dokumen Ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Mengurus pengiriman produk Ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Merencanakan pemasaran produk Ekspor secara online</Text>
                    </View>

                </View>

                <View style={{backgroundColor: "#E0A35C", width: "100%", borderRadius: 20, paddingVertical: 30, marginBottom: 70}}>
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text h4 style={{color: "white", textAlign: "center", marginBottom: 20}}>Materi Digital Marketing Sudah Berbasis SKKNI</Text>
                    </View>

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Fundamental Digital Marketing</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Teknik Konten Marketing</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Teknik Copy Writing</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Teknik Fotografi Produk</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Optimalisasi Media Sosial</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Optimalilasi Google</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Search Engine Optimization (SEO)</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Teknik Google Ads</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Riset Online Pasar Ekspor</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Mengenal Global B2B e-Commers</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>
                    
                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Teknik e-Mail Marketing</Text>
                    </View>
                    <View style={{width: "100%", height: 1, backgroundColor: "white", marginVertical: 10}}></View>

                    <View style={{paddingHorizontal: pointHPadding}}>
                        <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Measuring Succes</Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default WhyPage;