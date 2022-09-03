import { Image, Text } from "@rneui/base";
import React from "react";
import { Dimensions, ScrollView, View } from "react-native";

const Window = Dimensions.get('window');
const MentorPage : React.FC = () => {
    return (
        <ScrollView>
            <View style={{paddingHorizontal: Window.width * 5 / 100, paddingTop: 20}}>
                <Text h3 style={{color: "#696984", textAlign: "center", marginBottom: 30}}>Siapa saja mentornya? </Text>

                <View style={{marginBottom: 50}}>
                    <View style={{width: "100%", flexDirection: "row", justifyContent: "center"}}>
                        <Image source={require('../../assets/img/rahmat-marpaung.png')} style={{height: 400, width: 300, borderRadius: 40}} />
                    </View>
                    <Text h4 style={{color: "#696984", textAlign: "center", marginBottom: 10}}>Rachmat S. Marpaung</Text>
                    <Text style={{color: "#696984", textAlign: "center"}}>Eksportir aktif</Text>
                    <Text style={{color: "#696984", textAlign: "center"}}> CEO Aspenku.com (Marketplace khusus ekspor produk Indonesia)</Text>
                    <Text style={{color: "#696984", textAlign: "center"}}> Fasilitator kompetensi Ekspor bersertifikat BNSP</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <View style={{width: "100%", flexDirection: "row", justifyContent: "center"}}>
                        <Image source={require('../../assets/img/nursyamsu-mahyudin.png')} style={{height: 400, width: 300, borderRadius: 40}} />
                    </View>
                    <Text h4 style={{color: "#696984", textAlign: "center", marginBottom: 10}}>Nursyamsu Mahyuddin</Text>
                    <Text style={{color: "#696984", textAlign: "center"}}>Eksportir aktif sejak 1980</Text>
                    <Text style={{color: "#696984", textAlign: "center"}}> Eksportir aktif sejak tahun 1990CEO Nudira Sumberdaya Indonesia & Penulis Buku Eksport itu mudah</Text>
                    <Text style={{color: "#696984", textAlign: "center"}}> Fasilitator kompetensi Ekspor bersertifikat BNSP</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: Window.width * 5 / 100, backgroundColor: "#4C5EFD", paddingVertical: 20, marginBottom: 70}}>
                <Text h4 style={{textAlign: "center", color: "white"}}>Ditambah dengan 14 Mentor lain yang berpengalaman di Bidang Ekspor Pertanian, Perikanan, dll</Text>
            </View>

            <View style={{paddingHorizontal: Window.width * 10 / 100, marginBottom: 50}}>
                <Text h4 style={{textAlign: "center", color: "#696984"}}>Tunggu Apalagi, Anda Akan Mendapatkan Kesempatan dibimbing langsung oleh para Ahli di Bidang Ekspor</Text>
            </View>
        </ScrollView>
    )
}

export default MentorPage;