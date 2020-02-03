const fs=require('fs')
if (process.argv[2]==="list"){
const data=fs.readFile('./note.json', 'utf8',function(err, data){
    if (err) {
        return console.log(err);
      } else {
const nte=JSON.parse(data)
nte.map((el,i)=>
console.log("\n Title :" + el.title + "\n Body : " + el.body))}
}
)
}

if(process.argv[2]==="read"){
const data=fs.readFile('./note.json','utf8',function(err,data){
    if(err){
        return console.log(err)
    }else {
        const nte=JSON.parse(data)
        console.log(nte)
        const tab=nte.filter((el,i)=>el.title==process.argv[4])
console.log("\n Title :"+tab[0].title+"\n Body:"+tab[0].body)
        
    }
})
}

if(process.argv[2]==="add"){
    if(
        process.argv[3]== '--title' && process.argv[4]&&
        process.argv[5] === '--body' && process.argv[6]
    ) 
    {
        const data=fs.readFile('./note.json','utf8',(err,data)=>{
if (err){console.log (err)}
else {
    const nte =JSON.parse(data)
    nte.push({title:process.argv[4],body:process.argv[6]})
    const str =JSON.stringify(nte);
    fs.writeFile('./note.json',str,'utf8',err=>{
        if (err) console.log(err)
        console.log('notes est crrez')
    
    })


}
        })
    }
    else {
        console.log(
          'add options:\n --title set your note title\n --body set your note body'
        );
      }
}
if(process.argv[2]=="remove"){
  fs.readFile('./note.json','utf8',function(err,data){
      if (err){console.log(err)}
      else{
        const donne  =JSON.parse(data)
        console.log (donne)
        const filterdonne=donne.filter(el=>el.title !== process.argv[4])
        filterdonne.map (el=>console.log("\n title:"+filterdonne[0].title+"\n body:"+filterdonne[0].body))
        fs.writeFile('./note.json',JSON.stringify(filterdonne),err=>{
            if (err){console.log(err);
            return; }
        })
      }
  }
  )  
}



