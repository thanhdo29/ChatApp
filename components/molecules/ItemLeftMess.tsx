import getColors from "@/constants/Colors";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

type Props = {
    timeAgo: string;
    quantityMess: string;
};

export const ItemLeftMess = (props: Props): React.ReactElement => {
    const colors = getColors(useColorScheme());
    return (
        <View>
            <Text style={styles.timeText}>{props.timeAgo} min ago</Text>
            <View style={[styles.containerQuantityText, { backgroundColor: colors.red }]}>
                <Text style={[styles.quantityText, { color: colors.white }]}>{props.quantityMess}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    timeText:{
        fontSize:12,
        marginBottom:7
    },
    quantityText: {
        textAlign: "center",
        fontSize:12
    },
    containerQuantityText: {
        padding: 5,
        borderRadius: 12, 
        height: 24,
        width: 24, 
        alignSelf: "flex-end", 
    },
});
