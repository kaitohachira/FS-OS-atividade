    // ATIVIDADE 1 
// // const fs = require('fs')

// // fs.readFile('arquivo.txt', 'utf8', function(err, data){
// //      console.log(data)
//        console.log("Leitura do arquivo👌")
// // })



 // ATIVIDADE 2

// // const fs = require('fs')

// // fs.writeFile('text.txt', 'sabe nada', function(err) {
// //     if (err) {
// //         console.log(err)
// //     }
//      console.log("Arquivo Criado😎")
// // })


   // ATIVIDADE 3


// const fs = require('fs')
//  fs.appendFile('atividade3.txt', '\n oi veida', function(err){
//        if (err) {
//          console.log(err)
//        }else{
//         console.log("Atividade Finalizada❤️")
//        }
//  })


   //ATIVIDADE 4


//     const fs = require('fs')

//    fs.copyFile('atividade4.txt', 'oi.txt', function(err){
//         if (err) {
//           console.log(err)
//         }
//     console.log("Arquivo Copiado com sucesso😁")
//    }) 



  //ATIVIDADE 5

  
//   const fs = require('fs')

// const arqAntigo = 'arqAntigo.txt'

// const arqNovo = 'atividade5.txt'

// fs.rename(arqAntigo, arqNovo, (err)=>{
//     if(err){
//       console.log(err)
//       return
//     }

//     console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}😉`)
// })


  //ATIVIDADE 6 
   

//   const fs = require('fs')

//   fs.unlink('atividade6.txt', (err)=>{
//     if (err) {
//          console.log(err)
//          return
//     }
//     console.log("Arquivo Removido")
//   })



  //ATIVIDADE 7

  const fs = require('fs')

fs.existsSync('atividade7.txt',(err)=>{
    if (err) {
        console.log('err')
    }else{
        
    }
    
})