import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    // APIの情報を取得
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle,
        headerTextStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        imageStyle
     } = styles;

    return (
        <Card>
            <CardSection>
                <View style={ thumbnailContainerStyle }>
                    <Image
                        style={ thumbnailStyle }
                        source={{ uri: thumbnail_image }} 
                     />
                </View>
                <View style={ headerContentStyle }>
                    <Text style={ headerTextStyle }>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={ imageStyle }
                    source={{ url:image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    {/*ボタン名*/}
                    Buy Now 
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;