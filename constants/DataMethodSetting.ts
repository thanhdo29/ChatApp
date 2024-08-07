import { Icons } from "@/components/atoms/Icons"

interface DataMethodSetting {
    nameMethod: string
    desMethod?: string
    typeIcon: any
    nameIcon: string
}
const dataMethodSetting: DataMethodSetting[] = [
    {
        nameMethod: 'Account',
        desMethod: 'Privacy, security, change number',
        typeIcon:Icons.Ionicons,
        nameIcon:"key-outline"
    },
    {
        nameMethod: 'Chat',
        desMethod: 'Chat history,theme,wallpapers',
        typeIcon:Icons.Ionicons,
        nameIcon:"chatbubble-ellipses-outline"
    },
    {
        nameMethod: 'Notifications',
        desMethod: 'Messages, group and others',
        typeIcon:Icons.Feather,
        nameIcon:"bell"
    },
    {
        nameMethod: 'Help',
        desMethod: 'Help center,contact us, privacy policy',
        typeIcon:Icons.Feather,
        nameIcon:"help-circle"
    },
    {
        nameMethod: 'Storage and data',
        desMethod: 'Network usage, stogare usage',
        typeIcon:Icons.Ionicons,
        nameIcon:"swap-vertical"
    },

]

export default dataMethodSetting