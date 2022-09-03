import React from 'react';
import WebView from 'react-native-webview';

const MemberPage : React.FC = () => {
    return (
        <WebView source={{uri: "https://nlc.aspenku.com/member-area"}} style={{width: "100%"}} />
    )
}

export default MemberPage;