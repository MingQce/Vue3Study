//定义一个接口限制person对象的具体属性
export interface PersonInter {
    id:string,
    name:string,
    age:number
    x?:number  //加个问号表示可选属性
}

//一个自定义类型
// export type Persons = Array<PersonInter>  //使用泛型,包含多个PersonInter规范对象的数组
export type Persons = PersonInter[]  //两种写法都行