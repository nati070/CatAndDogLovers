const send = (async () => {
  try{   
    const response = await chrome.runtime.sendMessage({msg: "ping"});
    console.log(response)
  }
  catch{
    console.log("problem")
  }
});

setInterval(send,1000*60*3) //3 hours 


