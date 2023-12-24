const {dataone,datafashion, datalaptop, women, menData,accesoriesdata, Home, laptopApple }=require ("../data/data1")

const blogController=((req,res)=>{
    res.send(dataone)

})
const fashiondata=((req,res)=>{
    res.send(datafashion)

})

// const sportbaby=((req,res)=>{
//     res.send(sportToyBaby)

// })

const laptop=((req,res)=>{
    res.send(datalaptop)

})

// const sportBags=((req,res)=>{
//     res.send(sportToyBags)

// })

// const BeverageCoffee=((req,res)=>{
//     res.send(groceriesBeveragesCoffee)

// })


// const BeverageTea=((req,res)=>{
//     res.send(groceriesBeveragesTea)

// })


const womenData=((req,res)=>{
    res.send(women)

})



const men=((req,res)=>{
    res.send(menData)

})


const dataaccesories=((req,res)=>{
    res.send(accesoriesdata)

})


const HomeData=((req,res)=>{
    res.send(Home)
})

// const PearData=((req,res)=>{
//     res.send(pears)
// })

const AppleData=((req,res)=>{
    res.send(laptopApple)
})







module.exports={blogController,laptop,fashiondata,womenData,men,dataaccesories,HomeData,AppleData}
