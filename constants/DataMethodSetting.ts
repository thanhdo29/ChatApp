import { Icons } from "@/components/atoms/Icons"

interface DataMethodSetting {
    id:string,
    nameMethod: string
    desMethod?: string
    typeIcon: any
    nameIcon: string
}
const dataMethodSetting: DataMethodSetting[] = [
    {   id:"1",
        nameMethod: 'Account',
        desMethod: 'Privacy, security, change number',
        typeIcon:Icons.Ionicons,
        nameIcon:"key-outline"
    },
    {
        id:"2",
        nameMethod: 'Chat',
        desMethod: 'Chat history,theme,wallpapers',
        typeIcon:Icons.Ionicons,
        nameIcon:"chatbubble-ellipses-outline"
    },
    {
        id:"3",
        nameMethod: 'Notifications',
        desMethod: 'Messages, group and others',
        typeIcon:Icons.Feather,
        nameIcon:"bell"
    },
    {
        id:"4",
        nameMethod: 'Help',
        desMethod: 'Help center,contact us, privacy policy',
        typeIcon:Icons.Feather,
        nameIcon:"help-circle"
    },
    {
        id:"5",
        nameMethod: 'Storage and data',
        desMethod: 'Network usage, stogare usage',
        typeIcon:Icons.Ionicons,
        nameIcon:"swap-vertical"
    },
    {
        id:"6",
        nameMethod: 'Log out',
        typeIcon:Icons.MaterialIcons,
        nameIcon:"logout"
    },
]

export default dataMethodSetting