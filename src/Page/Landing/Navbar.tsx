import React, {useRef, useState} from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { Image, Text } from '@rneui/themed';
import { Shadow } from 'react-native-shadow-2';
import { Icon, Button } from '@rneui/base';

interface NavbarProps {
    setPage: Function
}
const Window = Dimensions.get('window');
const Navbar : React.FC<NavbarProps> = ({setPage}) => {
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [option, showOption] = useState(false);

    return (
        <>
            <Shadow>
                <View style={{flexDirection: "row", justifyContent: "space-between", shadowColor: "#000", width: 430, padding: 10}} onLayout={e => {
                    setNavbarHeight(e.nativeEvent.layout.height)
                }}>
                    <Image source={require('../../assets/img/logo-export.png')} style={{width: 50, height: 50}} />
                    <TouchableOpacity onPress={() => showOption(!option)}>
                        <Icon name="menu" size={50} />
                    </TouchableOpacity>
                </View>
            </Shadow>
        
            {option && (
                <View style={{position: "absolute", right: 0, top: navbarHeight, width: Window.width * 65 / 100, backgroundColor: "white", zIndex: 10, minHeight: Window.width * 50 / 100}}>
                    <Shadow>
                        <View style={{width: Window.width * 65 / 100, height: '100%', paddingVertical: 30}}>
                            <TouchableOpacity onPress={() => {setPage('landing'); showOption(false)}}> 
                                <Text style={{textAlign: "center", fontSize: 24, color: "#737373", marginBottom: 30}}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setPage('reason'); showOption(false)}}> 
                                <Text style={{textAlign: "center", fontSize: 24, color: "#737373", marginBottom: 30}}>Alasan Export</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setPage('why'); showOption(false)}}> 
                                <Text style={{textAlign: "center", fontSize: 24, color: "#737373", marginBottom: 30}}>Kenapa Export</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setPage('mentor'); showOption(false)}}> 
                                <Text style={{textAlign: "center", fontSize: 24, color: "#737373", marginBottom: 30}}>Mentor</Text>
                            </TouchableOpacity>
                            <View style={{width: "100%", justifyContent: "center", flexDirection: "row"}}>
                                <View style={{width: "80%"}}>
                                    <Button title={"Member Area"} radius="sm" color={"#4C5EFD"} size="lg" onPress={() => {setPage('member'); showOption(false)}}  />
                                </View>
                            </View>
                        </View>
                    </Shadow>
                </View>
            )}
        </>
    )
}

export default Navbar;