//═══════════════════════════════════════════════════════//
// 𝚃𝙷𝙸𝚂 𝙱𝙶𝙼 𝙱𝙾𝚃 𝙲𝙾𝙳𝙴𝚁 𝙱𝚈 DOMINATOR 
// 𝚈𝙾𝚄𝚁 𝙴𝙳𝙸𝚃𝙸𝙽𝙶 𝙾𝚁 𝙲𝙾𝙿𝚈  
// 𝚈𝙾𝚄 𝙲𝚁𝙴𝙳𝙸𝚃 𝚁𝙴𝙼𝙾𝚅𝙴 𝙱𝚄𝚃 
// 𝙹𝙴𝚂𝚃 𝚂𝙰𝙿𝙿𝙾𝚁𝚃 𝙼𝙴 𝙿𝙻𝚉 
//════════════════════════════//

const _0x5b62b1=_0x32e8;(function(_0x39d058,_0x373671){const _0x5a2f98=_0x32e8,_0x3e4945=_0x39d058();while(!![]){try{const _0x42bfc3=-parseInt(_0x5a2f98(0x175))/0x1*(parseInt(_0x5a2f98(0x20a))/0x2)+-parseInt(_0x5a2f98(0x1c9))/0x3*(parseInt(_0x5a2f98(0x1cc))/0x4)+-parseInt(_0x5a2f98(0x17b))/0x5*(-parseInt(_0x5a2f98(0x19d))/0x6)+-parseInt(_0x5a2f98(0x207))/0x7+-parseInt(_0x5a2f98(0x1cb))/0x8*(parseInt(_0x5a2f98(0x1a2))/0x9)+parseInt(_0x5a2f98(0x1f5))/0xa+parseInt(_0x5a2f98(0x22d))/0xb;if(_0x42bfc3===_0x373671)break;else _0x3e4945['push'](_0x3e4945['shift']());}catch(_0x5e9a8d){_0x3e4945['push'](_0x3e4945['shift']());}}}(_0x1bd4,0xe21fc),require(_0x5b62b1(0x212)));const {default:JslConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x5b62b1(0x1fe)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x5b62b1(0x208)),pino=require(_0x5b62b1(0x1b3)),{Boom}=require(_0x5b62b1(0x1ab)),fs=require('fs'),yargs=require(_0x5b62b1(0x1b7)),chalk=require(_0x5b62b1(0x1d1)),FileType=require(_0x5b62b1(0x193)),path=require(_0x5b62b1(0x1bc)),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x5b62b1(0x20d)),fetch=require(_0x5b62b1(0x1b2));var low;try{low=require(_0x5b62b1(0x1f1));}catch(_0x100512){low=require(_0x5b62b1(0x1ac));}const {Low,JSONFile}=low,mongoDB=require(_0x5b62b1(0x1ce));global[_0x5b62b1(0x1c0)]=(_0x3601bc,_0x59ffdd='/',_0x1a82e9={},_0x302ca4)=>(_0x3601bc in global[_0x5b62b1(0x21f)]?global[_0x5b62b1(0x21f)][_0x3601bc]:_0x3601bc)+_0x59ffdd+(_0x1a82e9||_0x302ca4?'?'+new URLSearchParams(Object[_0x5b62b1(0x1b4)]({..._0x1a82e9,..._0x302ca4?{[_0x302ca4]:global['APIKeys'][_0x3601bc in global[_0x5b62b1(0x21f)]?global[_0x5b62b1(0x21f)][_0x3601bc]:_0x3601bc]}:{}})):'');function _0x32e8(_0x5450d9,_0x222398){const _0x1bd4dd=_0x1bd4();return _0x32e8=function(_0x32e8e8,_0x13e7c9){_0x32e8e8=_0x32e8e8-0x174;let _0x55150f=_0x1bd4dd[_0x32e8e8];return _0x55150f;},_0x32e8(_0x5450d9,_0x222398);}const store=makeInMemoryStore({'logger':pino()[_0x5b62b1(0x206)]({'level':_0x5b62b1(0x1b5),'stream':'store'})});global[_0x5b62b1(0x1d3)]=new Object(yargs(process[_0x5b62b1(0x204)]['slice'](0x2))['exitProcess'](![])[_0x5b62b1(0x190)]()),global['db']=new Low(/https?:\/\//[_0x5b62b1(0x1b8)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/['test'](opts['db'])?new mongoDB(opts['db']):new JSONFile(_0x5b62b1(0x1d0))),global['db'][_0x5b62b1(0x174)]={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db'][_0x5b62b1(0x174)]||{}};if(global['db'])setInterval(async()=>{const _0x8c34bb=_0x5b62b1;if(global['db'][_0x8c34bb(0x174)])await global['db']['write']();},0x1e*0x3e8);async function startJsl(){const _0x5385cf=_0x5b62b1,_0x5d2a4a=JslConnect({'logger':pino({'level':_0x5385cf(0x1b5)}),'printQRInTerminal':!![],'browser':[_0x5385cf(0x18c),_0x5385cf(0x196),'1.0.0'],'auth':state});return store[_0x5385cf(0x1ff)](_0x5d2a4a['ev']),_0x5d2a4a['ev']['on']('messages.upsert',async _0x5b350b=>{const _0x3d6aad=_0x5385cf;try{mek=_0x5b350b[_0x3d6aad(0x213)][0x0];if(!mek[_0x3d6aad(0x176)])return;mek['message']=Object[_0x3d6aad(0x217)](mek[_0x3d6aad(0x176)])[0x0]==='ephemeralMessage'?mek[_0x3d6aad(0x176)]['ephemeralMessage'][_0x3d6aad(0x176)]:mek[_0x3d6aad(0x176)];if(mek[_0x3d6aad(0x22f)]&&mek[_0x3d6aad(0x22f)][_0x3d6aad(0x1ea)]===_0x3d6aad(0x18a))return;if(!_0x5d2a4a[_0x3d6aad(0x1c2)]&&!mek[_0x3d6aad(0x22f)][_0x3d6aad(0x1d6)]&&_0x5b350b[_0x3d6aad(0x192)]===_0x3d6aad(0x18e))return;if(mek[_0x3d6aad(0x22f)]['id'][_0x3d6aad(0x17e)](_0x3d6aad(0x178))&&mek[_0x3d6aad(0x22f)]['id'][_0x3d6aad(0x1bd)]===0x10)return;m=smsg(_0x5d2a4a,mek,store),require(_0x3d6aad(0x191))(_0x5d2a4a,m,_0x5b350b,store);}catch(_0x5d93f7){console[_0x3d6aad(0x1a1)](_0x5d93f7);}}),_0x5d2a4a['ev']['on'](_0x5385cf(0x1c8),async _0x283aa2=>{const _0x5099b9=_0x5385cf;try{ppgc=await _0x5d2a4a[_0x5099b9(0x1d8)](_0x283aa2[0x0]['id'],_0x5099b9(0x220));}catch{ppgc='https://shortlink.Jslarridho.my.id/rg1oT';}let _0x56dd14={'url':ppgc};if(_0x283aa2[0x0][_0x5099b9(0x1b1)]==!![])_0x5d2a4a[_0x5099b9(0x18d)](_0x283aa2[0x0]['id'],_0x5099b9(0x1ec),_0x5099b9(0x1de),_0x56dd14,[]);else{if(_0x283aa2[0x0][_0x5099b9(0x1b1)]==![])_0x5d2a4a['send5ButImg'](_0x283aa2[0x0]['id'],'「\x20ɢʀᴏᴜᴘ\x20ᴏᴘᴇɴᴇᴅ\x20」\x0a\x0aᴛʜɪs\x20ɢʀᴏᴜᴘ\x20ʜᴀs\x20ᴏᴘᴇɴᴇᴅ\x20!','ɢʀᴏᴜᴘ\x20ᴏᴘᴇɴᴇᴅ',_0x56dd14,[]);else{if(_0x283aa2[0x0][_0x5099b9(0x228)]==!![])_0x5d2a4a[_0x5099b9(0x18d)](_0x283aa2[0x0]['id'],_0x5099b9(0x222),_0x5099b9(0x1af),_0x56dd14,[]);else _0x283aa2[0x0][_0x5099b9(0x228)]==![]?_0x5d2a4a['send5ButImg'](_0x283aa2[0x0]['id'],_0x5099b9(0x1ee),_0x5099b9(0x1f2),_0x56dd14,[]):_0x5d2a4a[_0x5099b9(0x18d)](_0x283aa2[0x0]['id'],'「\x20ɢʀᴏᴜᴘ\x20ᴅᴇᴄʀɪᴘᴛɪᴏɴ\x20ʜᴀs\x20ᴄʜᴀɴɢᴇᴅ\x20」\x0a\x0aɢʀᴏᴜᴘ\x20sᴜʙᴊᴇᴄᴛ\x20ᴄʜᴀɴɢᴇᴅ\x20ᴛᴏ*'+_0x283aa2[0x0][_0x5099b9(0x1d9)]+'*',_0x5099b9(0x1a9),_0x56dd14,[]);}}}),_0x5d2a4a['ev']['on'](_0x5385cf(0x181),async _0x335b07=>{const _0x57d2b0=_0x5385cf;console['log'](_0x335b07);try{let _0x1f81eb=await _0x5d2a4a['groupMetadata'](_0x335b07['id']);string=''+_0x1f81eb[_0x57d2b0(0x216)],description=string[_0x57d2b0(0x218)]();let _0x276b17=_0x335b07[_0x57d2b0(0x199)];for(let _0x6e8f25 of _0x276b17){try{ppuser=await _0x5d2a4a[_0x57d2b0(0x1d8)](_0x6e8f25,_0x57d2b0(0x220));}catch{ppuser=_0x57d2b0(0x186);}try{ppgroup=await _0x5d2a4a[_0x57d2b0(0x1d8)](_0x335b07['id'],_0x57d2b0(0x220));}catch{ppgroup=_0x57d2b0(0x186);}if(_0x335b07[_0x57d2b0(0x225)]==_0x57d2b0(0x1f0)){const _0x18c60b=[{'index':0x1,'urlButton':{'displayText':_0x57d2b0(0x1b9),'url':_0x57d2b0(0x1da)}},{'index':0x2,'quickReplyButton':{'displayText':_0x57d2b0(0x1bf),'id':'group\x20info'}},{'index':0x3,'quickReplyButton':{'displayText':'ᴡᴇʟᴄᴏᴍᴇ\x20ʙʀᴏ','id':'😙'}}];let _0x1f7317=_0x57d2b0(0x1dc)+_0x6e8f25[_0x57d2b0(0x1df)]('@')[0x0]+_0x57d2b0(0x1ba)+_0x1f81eb[_0x57d2b0(0x1d9)]+'\x0a\x0a'+description;const _0x23295b={'image':{'url':ppuser},'jpegThumbnail':await(await fetch(ppuser))[_0x57d2b0(0x1d4)](),'caption':_0x1f7317,'footer':_0x5d2a4a[_0x57d2b0(0x20b)][_0x57d2b0(0x1f7)],'templateButtons':_0x18c60b};await _0x5d2a4a['sendMessage'](_0x335b07['id'],_0x23295b,{'contextInfo':{'mentionedJid':[_0x6e8f25]}});}else{if(_0x335b07[_0x57d2b0(0x225)]=='remove'){const _0x58fa2c=[{'index':0x1,'urlButton':{'displayText':_0x57d2b0(0x1b9),'url':_0x57d2b0(0x1b6)}},{'index':0x2,'quickReplyButton':{'displayText':'ᴍᴇɴᴜ','id':'menu'}},{'index':0x3,'quickReplyButton':{'displayText':_0x57d2b0(0x17c),'id':'😙'}}];let _0x3e37bf=_0x57d2b0(0x224)+_0x6e8f25['split']('@')[0x0]+'\x20';const _0x5295cb={'image':{'url':ppuser},'jpegThumbnail':await(await fetch(ppuser))['buffer'](),'caption':_0x3e37bf,'footer':_0x5d2a4a[_0x57d2b0(0x20b)][_0x57d2b0(0x1f7)],'templateButtons':_0x58fa2c};await _0x5d2a4a[_0x57d2b0(0x1fa)](_0x335b07['id'],_0x5295cb,{'contextInfo':{'mentionedJid':[_0x6e8f25]}});}}}}catch(_0x1cc639){console[_0x57d2b0(0x1a1)](_0x1cc639);}}),_0x5d2a4a[_0x5385cf(0x1ef)]=_0x58476c=>{const _0x443dff=_0x5385cf;if(!_0x58476c)return _0x58476c;if(/:\d+@/gi[_0x443dff(0x1b8)](_0x58476c)){let _0x1a9640=jidDecode(_0x58476c)||{};return _0x1a9640[_0x443dff(0x20b)]&&_0x1a9640[_0x443dff(0x226)]&&_0x1a9640[_0x443dff(0x20b)]+'@'+_0x1a9640[_0x443dff(0x226)]||_0x58476c;}else return _0x58476c;},_0x5d2a4a['ev']['on'](_0x5385cf(0x1cd),_0x2bd0b9=>{const _0x5ac329=_0x5385cf;for(let _0x1a512e of _0x2bd0b9){let _0x379df4=_0x5d2a4a[_0x5ac329(0x1ef)](_0x1a512e['id']);if(store&&store[_0x5ac329(0x1cf)])store[_0x5ac329(0x1cf)][_0x379df4]={'id':_0x379df4,'name':_0x1a512e['notify']};}}),_0x5d2a4a[_0x5385cf(0x17f)]=(_0x2a0ee8,_0x54e2ca=![])=>{const _0x720f78=_0x5385cf;id=_0x5d2a4a[_0x720f78(0x1ef)](_0x2a0ee8),_0x54e2ca=_0x5d2a4a['withoutContact']||_0x54e2ca;let _0x237dc5;if(id[_0x720f78(0x1a0)](_0x720f78(0x1fb)))return new Promise(async _0x367aac=>{const _0x51cfbc=_0x720f78;_0x237dc5=store[_0x51cfbc(0x1cf)][id]||{};if(!(_0x237dc5[_0x51cfbc(0x1f7)]||_0x237dc5[_0x51cfbc(0x1d9)]))_0x237dc5=_0x5d2a4a[_0x51cfbc(0x17a)](id)||{};_0x367aac(_0x237dc5[_0x51cfbc(0x1f7)]||_0x237dc5[_0x51cfbc(0x1d9)]||PhoneNumber('+'+id[_0x51cfbc(0x19a)](_0x51cfbc(0x1e7),''))[_0x51cfbc(0x1ed)](_0x51cfbc(0x195)));});else _0x237dc5=id==='0@s.whatsapp.net'?{'id':id,'name':'WhatsApp'}:id===_0x5d2a4a[_0x720f78(0x1ef)](_0x5d2a4a[_0x720f78(0x20b)]['id'])?_0x5d2a4a[_0x720f78(0x20b)]:store['contacts'][id]||{};return(_0x54e2ca?'':_0x237dc5[_0x720f78(0x1f7)])||_0x237dc5[_0x720f78(0x1d9)]||_0x237dc5['verifiedName']||PhoneNumber('+'+_0x2a0ee8['replace']('@s.whatsapp.net',''))['getNumber'](_0x720f78(0x195));},_0x5d2a4a[_0x5385cf(0x1a6)]=async(_0x300606,_0x4f0cd8,_0x512af9='',_0x5c01ba={})=>{const _0x4d785c=_0x5385cf;let _0x3e3a6f=[];for(let _0x4ca73a of _0x4f0cd8){_0x3e3a6f[_0x4d785c(0x1a8)]({'displayName':await _0x5d2a4a[_0x4d785c(0x17f)](_0x4ca73a+_0x4d785c(0x1e7)),'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:'+ownername+'\x0aitem1.TEL;waid='+_0x4ca73a+':'+_0x4ca73a+_0x4d785c(0x21c)+sc+_0x4d785c(0x1e6)+myweb+_0x4d785c(0x205)+region+_0x4d785c(0x1e9)});}_0x5d2a4a[_0x4d785c(0x1fa)](_0x300606,{'contacts':{'displayName':_0x3e3a6f[_0x4d785c(0x1bd)]+_0x4d785c(0x1a7),'contacts':_0x3e3a6f},..._0x5c01ba},{'quoted':_0x512af9});},_0x5d2a4a[_0x5385cf(0x227)]=_0x3e009e=>{const _0x452eec=_0x5385cf;return _0x5d2a4a[_0x452eec(0x1e2)]({'tag':'iq','attrs':{'to':_0x452eec(0x1e7),'type':_0x452eec(0x20e),'xmlns':'status'},'content':[{'tag':_0x452eec(0x223),'attrs':{},'content':Buffer[_0x452eec(0x1d2)](_0x3e009e,_0x452eec(0x214))}]}),_0x3e009e;},_0x5d2a4a[_0x5385cf(0x1c2)]=!![],_0x5d2a4a['serializeM']=_0x3f3035=>smsg(_0x5d2a4a,_0x3f3035,store),_0x5d2a4a['ev']['on'](_0x5385cf(0x20c),async _0x3bcd00=>{const _0xc06566=_0x5385cf,{connection:_0x4a6f14,lastDisconnect:_0x52b271}=_0x3bcd00;if(_0x4a6f14===_0xc06566(0x189)){let _0x36c9c6=new Boom(_0x52b271?.[_0xc06566(0x1e0)])?.['output'][_0xc06566(0x1e5)];if(_0x36c9c6===DisconnectReason['badSession'])console[_0xc06566(0x1a1)](_0xc06566(0x229)),_0x5d2a4a[_0xc06566(0x18f)]();else{if(_0x36c9c6===DisconnectReason[_0xc06566(0x1ae)])console['log']('🔖Connection\x20closed,\x20reconnecting....'),startJsl();else{if(_0x36c9c6===DisconnectReason[_0xc06566(0x1f8)])console[_0xc06566(0x1a1)](_0xc06566(0x18b)),startJsl();else{if(_0x36c9c6===DisconnectReason[_0xc06566(0x1a5)])console[_0xc06566(0x1a1)](_0xc06566(0x1d7)),_0x5d2a4a[_0xc06566(0x18f)]();else{if(_0x36c9c6===DisconnectReason[_0xc06566(0x22a)])console[_0xc06566(0x1a1)](_0xc06566(0x1c7)),_0x5d2a4a[_0xc06566(0x18f)]();else{if(_0x36c9c6===DisconnectReason[_0xc06566(0x184)])console[_0xc06566(0x1a1)](_0xc06566(0x1d5)),startJsl();else{if(_0x36c9c6===DisconnectReason[_0xc06566(0x1c3)])console[_0xc06566(0x1a1)](_0xc06566(0x19c)),startJsl();else _0x5d2a4a[_0xc06566(0x1fc)](_0xc06566(0x1f6)+_0x36c9c6+'|'+_0x4a6f14);}}}}}}}console[_0xc06566(0x1a1)](_0xc06566(0x215),_0x3bcd00);}),_0x5d2a4a['ev']['on'](_0x5385cf(0x21d),saveState),_0x5d2a4a[_0x5385cf(0x18d)]=async(_0x523bdb,_0x45dcf0='',_0x19bab7='',_0x4a7045,_0x43e31d=[],_0x4f9a48={})=>{const _0x3dc7ed=_0x5385cf;let _0x4b88c5=await prepareWAMessageMedia({'image':_0x4a7045},{'upload':_0x5d2a4a[_0x3dc7ed(0x180)]});var _0x4ba1de=generateWAMessageFromContent(m[_0x3dc7ed(0x219)],proto['Message'][_0x3dc7ed(0x210)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x4b88c5[_0x3dc7ed(0x1c6)],'hydratedContentText':_0x45dcf0,'hydratedFooterText':_0x19bab7,'hydratedButtons':_0x43e31d}}}),_0x4f9a48);_0x5d2a4a[_0x3dc7ed(0x1dd)](_0x523bdb,_0x4ba1de[_0x3dc7ed(0x176)],{'messageId':_0x4ba1de['key']['id']});},_0x5d2a4a['sendButtonText']=(_0x5af898,_0x537e99=[],_0x2cbcdc,_0xb9f5c7,_0x2e8d2b='',_0x5dd5a1={})=>{const _0x3e0fef=_0x5385cf;let _0x17c2e1={'text':_0x2cbcdc,'footer':_0xb9f5c7,'buttons':_0x537e99,'headerType':0x2,..._0x5dd5a1};_0x5d2a4a[_0x3e0fef(0x1fa)](_0x5af898,_0x17c2e1,{'quoted':_0x2e8d2b,..._0x5dd5a1});},_0x5d2a4a['sendText']=(_0x14621e,_0x3067f6,_0x46e9a5='',_0x2f138b)=>_0x5d2a4a[_0x5385cf(0x1fa)](_0x14621e,{'text':_0x3067f6,..._0x2f138b},{'quoted':_0x46e9a5}),_0x5d2a4a['sendImage']=async(_0x47141b,_0x11b8d1,_0x306f21='',_0x92d7bf='',_0x2ed2e2)=>{const _0x4844ca=_0x5385cf;let _0x1419f0=Buffer[_0x4844ca(0x19b)](_0x11b8d1)?_0x11b8d1:/^data:.*?\/.*?;base64,/i[_0x4844ca(0x1b8)](_0x11b8d1)?Buffer[_0x4844ca(0x1d2)](_0x11b8d1[_0x4844ca(0x1df)]`,`[0x1],_0x4844ca(0x1e1)):/^https?:\/\//[_0x4844ca(0x1b8)](_0x11b8d1)?await await getBuffer(_0x11b8d1):fs[_0x4844ca(0x177)](_0x11b8d1)?fs[_0x4844ca(0x22b)](_0x11b8d1):Buffer[_0x4844ca(0x185)](0x0);return await _0x5d2a4a[_0x4844ca(0x1fa)](_0x47141b,{'image':_0x1419f0,'caption':_0x306f21,..._0x2ed2e2},{'quoted':_0x92d7bf});},_0x5d2a4a[_0x5385cf(0x197)]=async(_0x4bf1ab,_0x11cbcd,_0x3bc9e0='',_0x2ce019='',_0x4f94a3=![],_0x122722)=>{const _0x17011f=_0x5385cf;let _0x4ce2af=Buffer[_0x17011f(0x19b)](_0x11cbcd)?_0x11cbcd:/^data:.*?\/.*?;base64,/i[_0x17011f(0x1b8)](_0x11cbcd)?Buffer[_0x17011f(0x1d2)](_0x11cbcd[_0x17011f(0x1df)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0x11cbcd)?await await getBuffer(_0x11cbcd):fs[_0x17011f(0x177)](_0x11cbcd)?fs['readFileSync'](_0x11cbcd):Buffer[_0x17011f(0x185)](0x0);return await _0x5d2a4a[_0x17011f(0x1fa)](_0x4bf1ab,{'video':_0x4ce2af,'caption':_0x3bc9e0,'gifPlayback':_0x4f94a3,..._0x122722},{'quoted':_0x2ce019});},_0x5d2a4a['sendAudio']=async(_0x2701f2,_0x562c61,_0x1f42d7='',_0x4ff5c5=![],_0x30bb5d)=>{const _0x22f51b=_0x5385cf;let _0x38e846=Buffer[_0x22f51b(0x19b)](_0x562c61)?_0x562c61:/^data:.*?\/.*?;base64,/i[_0x22f51b(0x1b8)](_0x562c61)?Buffer[_0x22f51b(0x1d2)](_0x562c61[_0x22f51b(0x1df)]`,`[0x1],_0x22f51b(0x1e1)):/^https?:\/\//[_0x22f51b(0x1b8)](_0x562c61)?await await getBuffer(_0x562c61):fs[_0x22f51b(0x177)](_0x562c61)?fs['readFileSync'](_0x562c61):Buffer[_0x22f51b(0x185)](0x0);return await _0x5d2a4a['sendMessage'](_0x2701f2,{'audio':_0x38e846,'ptt':_0x4ff5c5,..._0x30bb5d},{'quoted':_0x1f42d7});},_0x5d2a4a[_0x5385cf(0x1eb)]=async(_0x4f4cb4,_0x414048,_0x450dfe,_0x3638bd={})=>_0x5d2a4a[_0x5385cf(0x1fa)](_0x4f4cb4,{'text':_0x414048,'contextInfo':{'mentionedJid':[..._0x414048['matchAll'](/@(\d{0,16})/g)]['map'](_0x4a3f98=>_0x4a3f98[0x1]+_0x5385cf(0x1e7))},..._0x3638bd},{'quoted':_0x450dfe}),_0x5d2a4a['sendImageAsSticker']=async(_0x196578,_0x15ac6c,_0x5e79f2,_0x1ac609={})=>{const _0x5e7762=_0x5385cf;let _0x21e303=Buffer[_0x5e7762(0x19b)](_0x15ac6c)?_0x15ac6c:/^data:.*?\/.*?;base64,/i[_0x5e7762(0x1b8)](_0x15ac6c)?Buffer[_0x5e7762(0x1d2)](_0x15ac6c[_0x5e7762(0x1df)]`,`[0x1],_0x5e7762(0x1e1)):/^https?:\/\//[_0x5e7762(0x1b8)](_0x15ac6c)?await await getBuffer(_0x15ac6c):fs[_0x5e7762(0x177)](_0x15ac6c)?fs[_0x5e7762(0x22b)](_0x15ac6c):Buffer[_0x5e7762(0x185)](0x0),_0x3be93e;return _0x1ac609&&(_0x1ac609[_0x5e7762(0x1c1)]||_0x1ac609[_0x5e7762(0x188)])?_0x3be93e=await writeExifImg(_0x21e303,_0x1ac609):_0x3be93e=await imageToWebp(_0x21e303),await _0x5d2a4a['sendMessage'](_0x196578,{'sticker':{'url':_0x3be93e},..._0x1ac609},{'quoted':_0x5e79f2}),_0x3be93e;},_0x5d2a4a['sendVideoAsSticker']=async(_0xb6f341,_0x2aa2e5,_0x432901,_0x2376e3={})=>{const _0x2f99d1=_0x5385cf;let _0x334e1d=Buffer['isBuffer'](_0x2aa2e5)?_0x2aa2e5:/^data:.*?\/.*?;base64,/i[_0x2f99d1(0x1b8)](_0x2aa2e5)?Buffer[_0x2f99d1(0x1d2)](_0x2aa2e5[_0x2f99d1(0x1df)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0x2aa2e5)?await await getBuffer(_0x2aa2e5):fs[_0x2f99d1(0x177)](_0x2aa2e5)?fs['readFileSync'](_0x2aa2e5):Buffer[_0x2f99d1(0x185)](0x0),_0x1be1db;return _0x2376e3&&(_0x2376e3['packname']||_0x2376e3[_0x2f99d1(0x188)])?_0x1be1db=await writeExifVid(_0x334e1d,_0x2376e3):_0x1be1db=await videoToWebp(_0x334e1d),await _0x5d2a4a[_0x2f99d1(0x1fa)](_0xb6f341,{'sticker':{'url':_0x1be1db},..._0x2376e3},{'quoted':_0x432901}),_0x1be1db;},_0x5d2a4a[_0x5385cf(0x21a)]=async(_0x40690a,_0x520b75,_0x3f48e0=!![])=>{const _0x4a4847=_0x5385cf;let _0x1c4a56=_0x40690a['msg']?_0x40690a[_0x4a4847(0x200)]:_0x40690a,_0x59c69b=(_0x40690a[_0x4a4847(0x200)]||_0x40690a)['mimetype']||'',_0x7b43bc=_0x40690a[_0x4a4847(0x194)]?_0x40690a['mtype'][_0x4a4847(0x19a)](/Message/gi,''):_0x59c69b[_0x4a4847(0x1df)]('/')[0x0];const _0x485387=await downloadContentFromMessage(_0x1c4a56,_0x7b43bc);let _0x4e7aa5=Buffer[_0x4a4847(0x1d2)]([]);for await(const _0x36fbf9 of _0x485387){_0x4e7aa5=Buffer[_0x4a4847(0x179)]([_0x4e7aa5,_0x36fbf9]);}let _0xb49da2=await FileType[_0x4a4847(0x201)](_0x4e7aa5);return trueFileName=_0x3f48e0?_0x520b75+'.'+_0xb49da2[_0x4a4847(0x198)]:_0x520b75,await fs['writeFileSync'](trueFileName,_0x4e7aa5),trueFileName;},_0x5d2a4a['downloadMediaMessage']=async _0x4dabb5=>{const _0x55aa7d=_0x5385cf;let _0x5d357b=(_0x4dabb5[_0x55aa7d(0x200)]||_0x4dabb5)[_0x55aa7d(0x22e)]||'',_0x31e42e=_0x4dabb5[_0x55aa7d(0x194)]?_0x4dabb5[_0x55aa7d(0x194)][_0x55aa7d(0x19a)](/Message/gi,''):_0x5d357b['split']('/')[0x0];const _0x494853=await downloadContentFromMessage(_0x4dabb5,_0x31e42e);let _0x5da327=Buffer[_0x55aa7d(0x1d2)]([]);for await(const _0x5e6403 of _0x494853){_0x5da327=Buffer[_0x55aa7d(0x179)]([_0x5da327,_0x5e6403]);}return _0x5da327;},_0x5d2a4a[_0x5385cf(0x1c4)]=async(_0x1dbef4,_0x2e676f,_0x56e10c='',_0xa41ba8='',_0x316b21='',_0x22fedf={})=>{const _0x52a9c4=_0x5385cf;let _0x486978=await _0x5d2a4a[_0x52a9c4(0x1f9)](_0x2e676f,!![]),{mime:_0x79e83b,ext:_0x34abb7,res:_0x462e94,data:_0x12a88c,filename:_0x5a96ad}=_0x486978;if(_0x462e94&&_0x462e94[_0x52a9c4(0x223)]!==0xc8||file[_0x52a9c4(0x1bd)]<=0x10000)try{throw{'json':JSON['parse'](file[_0x52a9c4(0x218)]())};}catch(_0x45a9ce){if(_0x45a9ce[_0x52a9c4(0x22c)])throw _0x45a9ce[_0x52a9c4(0x22c)];}let _0x3becee='',_0x1b3cfe=_0x79e83b,_0x29e45f=_0x5a96ad;if(_0x22fedf[_0x52a9c4(0x1a3)])_0x3becee=_0x52a9c4(0x209);if(_0x22fedf[_0x52a9c4(0x1b0)]||/webp/[_0x52a9c4(0x1b8)](_0x79e83b)){let {writeExif:_0x55a0fa}=require(_0x52a9c4(0x1e4)),_0x32ad7e={'mimetype':_0x79e83b,'data':_0x12a88c};_0x29e45f=await _0x55a0fa(_0x32ad7e,{'packname':_0x22fedf['packname']?_0x22fedf[_0x52a9c4(0x1c1)]:global[_0x52a9c4(0x1c1)],'author':_0x22fedf['author']?_0x22fedf[_0x52a9c4(0x188)]:global[_0x52a9c4(0x188)],'categories':_0x22fedf[_0x52a9c4(0x1e8)]?_0x22fedf[_0x52a9c4(0x1e8)]:[]}),await fs[_0x52a9c4(0x1c5)]['unlink'](_0x5a96ad),_0x3becee=_0x52a9c4(0x1f3),_0x1b3cfe=_0x52a9c4(0x1f4);}else{if(/image/[_0x52a9c4(0x1b8)](_0x79e83b))_0x3becee='image';else{if(/video/['test'](_0x79e83b))_0x3becee=_0x52a9c4(0x20f);else{if(/audio/['test'](_0x79e83b))_0x3becee=_0x52a9c4(0x211);else _0x3becee=_0x52a9c4(0x209);}}}return await _0x5d2a4a[_0x52a9c4(0x1fa)](_0x1dbef4,{[_0x3becee]:{'url':_0x29e45f},'caption':_0xa41ba8,'mimetype':_0x1b3cfe,'fileName':_0x56e10c,..._0x22fedf},{'quoted':_0x316b21,..._0x22fedf}),fs['promises']['unlink'](_0x29e45f);},_0x5d2a4a[_0x5385cf(0x1db)]=async(_0x4bf69d,_0xdeecb9,_0x4429a3=![],_0x4bc9de={})=>{const _0x9eecc6=_0x5385cf;let _0x4d53ce;_0x4bc9de[_0x9eecc6(0x1e3)]&&(_0xdeecb9['message']=_0xdeecb9[_0x9eecc6(0x176)]&&_0xdeecb9[_0x9eecc6(0x176)][_0x9eecc6(0x1be)]&&_0xdeecb9['message']['ephemeralMessage'][_0x9eecc6(0x176)]?_0xdeecb9[_0x9eecc6(0x176)][_0x9eecc6(0x1be)]['message']:_0xdeecb9[_0x9eecc6(0x176)]||undefined,_0x4d53ce=Object[_0x9eecc6(0x217)](_0xdeecb9[_0x9eecc6(0x176)][_0x9eecc6(0x1bb)][_0x9eecc6(0x176)])[0x0],delete(_0xdeecb9[_0x9eecc6(0x176)]&&_0xdeecb9[_0x9eecc6(0x176)][_0x9eecc6(0x19f)]?_0xdeecb9[_0x9eecc6(0x176)][_0x9eecc6(0x19f)]:_0xdeecb9[_0x9eecc6(0x176)]||undefined),delete _0xdeecb9[_0x9eecc6(0x176)]['viewOnceMessage'][_0x9eecc6(0x176)][_0x4d53ce]['viewOnce'],_0xdeecb9['message']={..._0xdeecb9[_0x9eecc6(0x176)]['viewOnceMessage'][_0x9eecc6(0x176)]});let _0x202535=Object[_0x9eecc6(0x217)](_0xdeecb9['message'])[0x0],_0x1431e5=await generateForwardMessageContent(_0xdeecb9,_0x4429a3),_0x3efc97=Object[_0x9eecc6(0x217)](_0x1431e5)[0x0],_0x414f8c={};if(_0x202535!=_0x9eecc6(0x182))_0x414f8c=_0xdeecb9[_0x9eecc6(0x176)][_0x202535]['contextInfo'];_0x1431e5[_0x3efc97]['contextInfo']={..._0x414f8c,..._0x1431e5[_0x3efc97][_0x9eecc6(0x1ad)]};const _0x4f4005=await generateWAMessageFromContent(_0x4bf69d,_0x1431e5,_0x4bc9de?{..._0x1431e5[_0x3efc97],..._0x4bc9de,..._0x4bc9de[_0x9eecc6(0x1ad)]?{'contextInfo':{..._0x1431e5[_0x3efc97]['contextInfo'],..._0x4bc9de[_0x9eecc6(0x1ad)]}}:{}}:{});return await _0x5d2a4a[_0x9eecc6(0x1dd)](_0x4bf69d,_0x4f4005['message'],{'messageId':_0x4f4005[_0x9eecc6(0x22f)]['id']}),_0x4f4005;},_0x5d2a4a['cMod']=(_0x112c77,_0x102f69,_0x390f7a='',_0x2090f1=_0x5d2a4a[_0x5385cf(0x20b)]['id'],_0x337170={})=>{const _0x1ccb25=_0x5385cf;let _0x3b47f1=Object['keys'](_0x102f69[_0x1ccb25(0x176)])[0x0],_0x13e0ac=_0x3b47f1===_0x1ccb25(0x1be);_0x13e0ac&&(_0x3b47f1=Object[_0x1ccb25(0x217)](_0x102f69[_0x1ccb25(0x176)]['ephemeralMessage'][_0x1ccb25(0x176)])[0x0]);let _0x2c9b01=_0x13e0ac?_0x102f69[_0x1ccb25(0x176)][_0x1ccb25(0x1be)][_0x1ccb25(0x176)]:_0x102f69['message'],_0x20770a=_0x2c9b01[_0x3b47f1];if(typeof _0x20770a===_0x1ccb25(0x183))_0x2c9b01[_0x3b47f1]=_0x390f7a||_0x20770a;else{if(_0x20770a[_0x1ccb25(0x221)])_0x20770a[_0x1ccb25(0x221)]=_0x390f7a||_0x20770a[_0x1ccb25(0x221)];else{if(_0x20770a['text'])_0x20770a[_0x1ccb25(0x1a4)]=_0x390f7a||_0x20770a[_0x1ccb25(0x1a4)];}}if(typeof _0x20770a!=='string')_0x2c9b01[_0x3b47f1]={..._0x20770a,..._0x337170};if(_0x102f69[_0x1ccb25(0x22f)][_0x1ccb25(0x1ca)])_0x2090f1=_0x102f69[_0x1ccb25(0x22f)][_0x1ccb25(0x1ca)]=_0x2090f1||_0x102f69['key'][_0x1ccb25(0x1ca)];else{if(_0x102f69[_0x1ccb25(0x22f)][_0x1ccb25(0x1ca)])_0x2090f1=_0x102f69[_0x1ccb25(0x22f)][_0x1ccb25(0x1ca)]=_0x2090f1||_0x102f69[_0x1ccb25(0x22f)]['participant'];}if(_0x102f69[_0x1ccb25(0x22f)][_0x1ccb25(0x1ea)]['includes'](_0x1ccb25(0x1e7)))_0x2090f1=_0x2090f1||_0x102f69[_0x1ccb25(0x22f)][_0x1ccb25(0x1ea)];else{if(_0x102f69[_0x1ccb25(0x22f)][_0x1ccb25(0x1ea)]['includes']('@broadcast'))_0x2090f1=_0x2090f1||_0x102f69['key'][_0x1ccb25(0x1ea)];}return _0x102f69[_0x1ccb25(0x22f)]['remoteJid']=_0x112c77,_0x102f69[_0x1ccb25(0x22f)][_0x1ccb25(0x1d6)]=_0x2090f1===_0x5d2a4a[_0x1ccb25(0x20b)]['id'],proto['WebMessageInfo'][_0x1ccb25(0x210)](_0x102f69);},_0x5d2a4a[_0x5385cf(0x1f9)]=async(_0x5964ca,_0x2f9b70)=>{const _0xf19005=_0x5385cf;let _0x4f379b,_0x4540ce=Buffer[_0xf19005(0x19b)](_0x5964ca)?_0x5964ca:/^data:.*?\/.*?;base64,/i['test'](_0x5964ca)?Buffer[_0xf19005(0x1d2)](_0x5964ca[_0xf19005(0x1df)]`,`[0x1],_0xf19005(0x1e1)):/^https?:\/\//[_0xf19005(0x1b8)](_0x5964ca)?await(_0x4f379b=await getBuffer(_0x5964ca)):fs[_0xf19005(0x177)](_0x5964ca)?(filename=_0x5964ca,fs[_0xf19005(0x22b)](_0x5964ca)):typeof _0x5964ca==='string'?_0x5964ca:Buffer[_0xf19005(0x185)](0x0),_0x142b94=await FileType['fromBuffer'](_0x4540ce)||{'mime':_0xf19005(0x19e),'ext':_0xf19005(0x202)};filename=path[_0xf19005(0x203)](__filename,_0xf19005(0x21e)+new Date()*0x1+'.'+_0x142b94[_0xf19005(0x198)]);if(_0x4540ce&&_0x2f9b70)fs[_0xf19005(0x1c5)][_0xf19005(0x1aa)](filename,_0x4540ce);return{'res':_0x4f379b,'filename':filename,'size':await getSizeMedia(_0x4540ce),..._0x142b94,'data':_0x4540ce};},_0x5d2a4a;}startJsl();let file=require['resolve'](__filename);fs[_0x5b62b1(0x1fd)](file,()=>{const _0x3f4f1e=_0x5b62b1;fs[_0x3f4f1e(0x17d)](file),console['log'](chalk[_0x3f4f1e(0x21b)](_0x3f4f1e(0x187)+__filename)),delete require['cache'][file],require(file);});function _0x1bd4(){const _0xcddf44=['connectionReplaced','sendContact','\x20Contact','push','ɢʀᴏᴜᴘ\x20ᴅᴇᴄʀɪᴘᴛɪᴏɴ\x20ʜᴀs\x20ᴄʜᴀɴɢᴇᴅ','writeFile','@hapi/boom','./lib/lowdb','contextInfo','connectionClosed','ɢʀᴏᴜᴘ\x20ɪɴғᴏ\x20ᴏғғ','asSticker','announce','node-fetch','pino','entries','silent','https://instagram.com/toxic_turbo777','yargs/yargs','test','ɪɴsᴛᴀ','\x20ᴡᴇʟᴄᴏᴍᴇ\x20ᴛᴏ\x20','viewOnceMessage','path','length','ephemeralMessage','ɢʀᴏᴜᴘ\x20ɪɴғᴏ','api','packname','public','timedOut','sendMedia','promises','imageMessage','🔖Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','groups.update','3yBgtsZ','participant','24VYalVI','473992LdzHZx','contacts.update','./lib/mongoDB','contacts','database/database.json','chalk','from','opts','buffer','🔖Restart\x20Required,\x20Restarting...','fromMe','🔖Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','profilePictureUrl','subject','https://instagram.com/jsl._xr','copyNForward','ʜɪ\x20@','relayMessage','ɢʀᴏᴜᴘ\x20ᴍᴜᴛᴇᴅ','split','error','base64','query','readViewOnce','./lib/exif','statusCode','\x0aitem2.X-ABLabel:Script\x0aitem3.URL:','@s.whatsapp.net','categories',';;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','remoteJid','sendTextWithMentions','「\x20ɢʀᴏᴜᴘ\x20ᴍᴜᴛᴇᴅ\x20」\x0a\x0aᴛʜɪs\x20ɢʀᴏᴜᴘ\x20ʜᴀs\x20ᴍᴜᴛᴇᴅ\x20!','getNumber','「\x20ɢʀᴏᴜᴘ\x20ɪɴғᴏ\x20ᴏᴘᴇɴᴇᴅ\x20」\x0a\x0aɢʀᴏᴜᴘ\x20ɪɴғᴏ\x20ᴏᴘᴇᴅɴᴇᴅ\x20ᴛʜᴇɴ\x20ᴄʜᴀɴɢᴇ\x20ᴀʟʟ\x20!','decodeJid','add','lowdb','ɢʀᴏᴜᴘ\x20ɪɴғᴏ\x20ᴏᴘᴇɴᴇᴅ','sticker','image/webp','6240750iXaXNq','🔖Unknown\x20DisconnectReason:\x20','name','connectionLost','getFile','sendMessage','@g.us','end','watchFile','@adiwajshing/baileys','bind','msg','fromBuffer','.bin','join','argv','\x0aitem3.X-ABLabel:Script\x0aitem4.ADR:;;','child','1728552QnvJVS','.json','document','245654rKZpcz','user','connection.update','./lib/myfunc','set','video','fromObject','audio','./settings','messages','utf-8','Connected...','desc','keys','toString','chat','downloadAndSaveMediaMessage','redBright','\x0aitem1.X-ABLabel:Click\x20To\x20Chat\x0aitem2.EMAIL;type=INTERNET:','creds.update','../src/','APIs','image','caption','「\x20ɢʀᴏᴜᴘ\x20ɪɴғᴏ\x20ᴏғғ\x20」\x0a\x0aɢʀᴏᴜᴘ\x20ɪɴғᴏ\x20ᴏғғᴇ\x20ᴏɴʟʏ\x20ᴀᴅᴍɪɴ\x20ᴄʜᴀɴɢᴇ\x20!','status','ʟᴇғᴛᴇᴅ\x20ᴍᴇᴍʙᴇʀ\x20@','action','server','setStatus','restrict','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','loggedOut','readFileSync','json','37175160VAdlLj','mimetype','key','data','15UKuHvT','message','existsSync','BAE5','concat','groupMetadata','45fGCKsZ','ʙʏ\x20ʙʏ\x20ʙʀᴏ☺️','unwatchFile','startsWith','getName','waUploadToServer','group-participants.update','conversation','string','restartRequired','alloc','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','Update\x20','author','close','status@broadcast','🔖Connection\x20Lost\x20from\x20Server,\x20reconnecting...','Alena','send5ButImg','notify','logout','parse','./Jsl','type','file-type','mtype','international','Safari','sendVideo','ext','participants','replace','isBuffer','🔖Connection\x20TimedOut,\x20Reconnecting...','29862pOWxNh','application/octet-stream','ignore','endsWith','log','2743155cqxOyA','asDocument','text'];_0x1bd4=function(){return _0xcddf44;};return _0x1bd4();}
