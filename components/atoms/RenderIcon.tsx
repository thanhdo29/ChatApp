import React from "react";
import { TouchableOpacity } from "react-native";

type RenderIconProps = {
    icon: string | React.ReactElement;
    onPress?: () => void;
};

export const RenderIcon = ({ icon, onPress }: RenderIconProps): React.ReactElement => {
    return (
        <TouchableOpacity onPress={onPress}>
            {icon}
        </TouchableOpacity>
    );
};
