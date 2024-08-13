import getColors from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet, useColorScheme, Image } from "react-native";

type MessageBubbleProps = {
    message: string;
    isSender: boolean;
    namePerson: string;
    imgPerson:number
};

export const MessageBubble = ({ message, isSender, namePerson,imgPerson }: MessageBubbleProps) => {
    const colors = getColors(useColorScheme());
    return (
        <View style={[styles.messageContainer, isSender && styles.senderContainer]}>
            {!isSender && (
                <Image
                    source={imgPerson}
                    style={styles.avatar}
                />
            )}
            <View style={styles.bubbleContainer}>
                {!isSender && (
                    <Text style={styles.textNamePerson}>{namePerson}</Text>
                )}
                <View
                    style={[
                        styles.bubble,
                        isSender
                            ? { ...styles.sender, backgroundColor: colors.royalPurple }
                            : { ...styles.receiver, backgroundColor: colors.powderBlue },
                    ]}
                >
                    <Text style={isSender ? styles.textSender : styles.textReceiver}>
                        {message}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: "row",
        marginVertical: 5,
        alignItems:"flex-start"
    },
    senderContainer: {
        justifyContent: 'flex-end',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 8,
    },
    bubbleContainer: {
        maxWidth: "70%",
    },
    bubble: {
        padding: 10,
        borderRadius: 20,
        marginTop: 4,
    },
    sender: {
        borderTopRightRadius: 0,
    },
    receiver: {
        borderTopLeftRadius: 0,
    },
    textSender: {
        color: "#fff",
    },
    textReceiver: {
        color: "#000",
    },
    textNamePerson: {
        fontWeight: '500',
    },
});
