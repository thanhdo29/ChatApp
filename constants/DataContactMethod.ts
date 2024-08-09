import { Icons } from "@/components/atoms/Icons"

interface DataContactMethod {
    id:string
    typeIcon: any
    nameIcon: string
}

const dataContactMethod:DataContactMethod[]=[
    {
        id:'1',
        typeIcon:Icons.Ionicons,
        nameIcon:'chatbubble-ellipses-outline'
    },
    {
        id:'2',
        typeIcon:Icons.Ionicons,
        nameIcon:'videocam-outline'
    },
    {
        id:'3',
        typeIcon:Icons.Feather,
        nameIcon:'phone'
    },
    {
        id:'4',
        typeIcon:Icons.MaterialCommunityIcons,
        nameIcon:'dots-horizontal'
    }
]

export default dataContactMethod