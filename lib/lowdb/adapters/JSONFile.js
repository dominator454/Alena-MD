//═══════════════════════════════════════════════════════//
// 𝚃𝙷𝙸𝚂 𝙱𝙶𝙼 𝙱𝙾𝚃 𝙲𝙾𝙳𝙴𝚁 𝙱𝚈 DOMINATOR 
// 𝚈𝙾𝚄𝚁 𝙴𝙳𝙸𝚃𝙸𝙽𝙶 𝙾𝚁 𝙲𝙾𝙿𝚈  
// 𝚈𝙾𝚄 𝙲𝚁𝙴𝙳𝙸𝚃 𝚁𝙴𝙼𝙾𝚅𝙴 𝙱𝚄𝚃 
// 𝙹𝙴𝚂𝚃 𝚂𝙰𝙿𝙿𝙾𝚁𝚃 𝙼𝙴 𝙿𝙻𝚉 
//════════════════════════════//
const { TextFile } = require('./TextFile.js');
class JSONFile {
    constructor(filename) {
        this.adapter = new TextFile(filename);
    }
    async read() {
        const data = await this.adapter.read();
        if (data === null) {
            return null;
        }
        else {
            return JSON.parse(data);
        }
    }
    write(obj) {
        return this.adapter.write(JSON.stringify(obj, null, 2));
    }
}
module.exports = { JSONFile };
