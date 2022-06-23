//═══════════════════════════════════════════════════════//
// 𝚃𝙷𝙸𝚂 𝙱𝙶𝙼 𝙱𝙾𝚃 𝙲𝙾𝙳𝙴𝚁 𝙱𝚈 DOMINATOR 
// 𝚈𝙾𝚄𝚁 𝙴𝙳𝙸𝚃𝙸𝙽𝙶 𝙾𝚁 𝙲𝙾𝙿𝚈  
// 𝚈𝙾𝚄 𝙲𝚁𝙴𝙳𝙸𝚃 𝚁𝙴𝙼𝙾𝚅𝙴 𝙱𝚄𝚃 
// 𝙹𝙴𝚂𝚃 𝚂𝙰𝙿𝙿𝙾𝚁𝚃 𝙼𝙴 𝙿𝙻𝚉 
//════════════════════════════//
  const fs = require('fs')
  let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

  const addInventoriDarah = (sender, darah) => {
        const obj = {id: sender, healt: darah}
         _darahOrg.push(obj)
        fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
   }
  const cekDuluJoinAdaApaKagaDiJson = (sender) => {
            let status = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addDarah = (sender, amount) => {
            let position = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _darahOrg[position].healt += amount
                fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
            }
        }
   const kurangDarah = (sender, amount) => {
            let position = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _darahOrg[position].healt -= amount
                fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
            }
        }
   const getDarah = (sender) => {
            let position = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _darahOrg[position].healt
            }
        }     
        
   module.exports = { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah }   
