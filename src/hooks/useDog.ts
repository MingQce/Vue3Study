import {onMounted, reactive} from "vue";
import axios from "axios";

export default function(){  //函数设定为default的话可以不用命名
    //数据
    let dogList = reactive([  //
        'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])
    //方法
    // @ts-ignore
    async function getDog() {  //从网络上获取随机dog图片的数据并返回
        try{  //需要错误处理，防止连接不上服务器的情况
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            console.log(result.data.message)
            dogList.push(result.data.message)
        }catch (error){
            alert(error)
        }
    }
    //钩子
    onMounted(()=>{
        getDog()
    })
    //向外部提供东西
    return {dogList,getDog}
}
