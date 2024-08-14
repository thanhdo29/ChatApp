import React from "react"
import { Image, StyleSheet, View, ViewProps } from "react-native"
import { ContentContact } from "../molecules/ContentContact"
import { RenderIcon } from "../atoms/RenderIcon"
import { isNil } from "lodash"
import { useRouter } from "expo-router";
type Props = {
    backIcon?: React.ReactElement
    namePerson: string,
    notePerson?: string,
    img: number | string
    iconPhone?: string | React.ReactElement,
    iconVideo?: string | React.ReactElement
} & ViewProps
export const ItemContact = (props: Props): React.ReactElement => {
    const soureImg = typeof props.img === 'number' ? props.img : { uri: '' }
    const router = useRouter()
    const back = () => {
        if (router.canGoBack()) {
            router.back();
        }
    }
    return (
        <View style={[styles.container, props.style]}>
            {
                !isNil(props.backIcon) &&
                <RenderIcon icon={props.backIcon} onPress={()=>back() } />
            }
            <View style={styles.viewLeft}>
                <Image style={styles.img} source={soureImg} />
                <ContentContact namePerson={props.namePerson} notePerson={props.notePerson} />
            </View>
            <View style={styles.viewRight}>
                {!isNil(props.iconPhone) && <RenderIcon icon={props.iconPhone} />}
                {!isNil(props.iconVideo) && <RenderIcon icon={props.iconVideo} />}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    viewLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    viewRight: {
        flexDirection: "row",
        alignItems: "center",
        gap:16
    },
    img: {
        height: 52,
        width: 52,
        marginRight: 14,
        resizeMode: "contain"
    }
})