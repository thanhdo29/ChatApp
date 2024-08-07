interface DataContact {
    img: number,
    name:string,
    note:string
}

const dataContact:DataContact[]=[
    {
        img:require('@/assets/images/avt2.png'),
        name:"Đỗ Tuấn Thành",
        note:"I am happy"
    },
    {
        img:require('@/assets/images/avatar.png'),
        name:"Lương Văn Ngọc",
        note:"I am happy"
    },
    {
        img:require('@/assets/images/avt3.png'),
        name:"Đỗ Xuân Đức",
        note:"I am happy"
    },
]
export default dataContact