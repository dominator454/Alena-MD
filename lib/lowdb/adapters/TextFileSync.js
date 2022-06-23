//═══════════════════════════════════════════════════════//
// 𝚃𝙷𝙸𝚂 𝙱𝙶𝙼 𝙱𝙾𝚃 𝙲𝙾𝙳𝙴𝚁 𝙱𝚈 DOMINATOR 
// 𝚈𝙾𝚄𝚁 𝙴𝙳𝙸𝚃𝙸𝙽𝙶 𝙾𝚁 𝙲𝙾𝙿𝚈  
// 𝚈𝙾𝚄 𝙲𝚁𝙴𝙳𝙸𝚃 𝚁𝙴𝙼𝙾𝚅𝙴 𝙱𝚄𝚃 
// 𝙹𝙴𝚂𝚃 𝚂𝙰𝙿𝙿𝙾𝚁𝚃 𝙼𝙴 𝙿𝙻𝚉 
//════════════════════════════//
const fs = require('fs');
const path = require('path');
class TextFileSync {
    constructor(filename) {
        this.filename = filename;
        this.tempFilename = path.join(path.dirname(filename), `.${path.basename(filename)}.tmp`);
    }
    read() {
        let data;
        try {
            data = fs.readFileSync(this.filename, 'utf-8');
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
        return data;
    }
    write(str) {
        fs.writeFileSync(this.tempFilename, str);
        fs.renameSync(this.tempFilename, this.filename);
    }
}
module.exports = { TextFileSync };
