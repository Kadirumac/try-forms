
let nesne = [
    {
        id: '123',
        name: 'arac1',
        location: '35810'
    },
    {
        id: '235',
        name: 'arac2',
        location: '68103'
    },
    {
        id: '678',
        name: 'arac3',
        location: '35780'
    }
]

let yerler = [
    {
        id: '35810',
        name: 'kizilay',
        location: '666'
    },
    {
        id: '68103',
        name: 'karanfil',
        location: '35780'
    },
    {
        id: '35780',
        name: 'ankara',
        location: '666'
    },
    {
        id: '666',
        name: 'turkey',
        location: '00000'
    }
]   

let result = nesne.map((arac)=>{
    let res = []
    yerler.forEach((yer)=>{
        if (arac.location === yer.id) {
            res.push(yer.name)
        }
    })
    // let yerler2 = yerler
    // for(yer of yerler){
    //   for(yer2 of yerler2){
    //       if (yer.location === yer2.id) {
    //           res.push(yer2.name)
    //       }
    //   }
    // }
    return res
})

console.log(result);