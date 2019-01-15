var wsUri = "wss://ws.blockchain.info/inv";
var output;
 function init(){
  output = document.getElementById("bitcoin_notifications");    
  newBlockSubscribes();

}

// whenever anyone subscribes to new blocks
function newBlockSubscribes(){
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt){
  doSend('{"op":"ping_block"}');
}

function onMessage(evt){
    var jsonObj=JSON.parse(evt.data);
  var result = jsonObj.x.txIndexes.map(function(val) {
        return val+"\n";
      }).join('');
    
var myvar = '<table  class="table table-bordered table-striped" style="width:100%">'+
'   <thead>'+
'      <tr>'+
'         <th>OP</th>'+
'         <th>txIndexes</th>'+
'         <th>nTx</th>'+
'         <th>totalBTCSent</th>'+
'         <th>reward</th>'+
'         <th>size</th>'+
'         <th>weight</th>'+
'         <th>blockIndex</th>'+
'         <th>prevBlockIndex</th>'+
'         <th>height</th>'+
'         <th>hash</th>'+
'         <th>mrklRoot</th>'+
'         <th>version</th>'+
'         <th>time</th>'+
'         <th>bits</th>'+
'         <th>nonce</th>'+
'         <th>description</th>'+
'         <th>ip</th>'+
'         <th>link</th>'+
'      </tr>'+
'   </thead>'+
'   <tbody>'+
'      <tr>'+
'         <td>'+jsonObj.op+'</td>'+
'         <td>'+result+'</td>'+
'         <td>'+jsonObj.x.nTx+'</td>'+
'         <td>'+jsonObj.x.totalBTCSent+'</td>'+
'         <td>'+jsonObj.x.reward+'</td>'+
'         <td>'+jsonObj.x.size+'</td>'+
'         <td>'+jsonObj.x.weight+'</td>'+
'         <td>'+jsonObj.x.blockIndex+'</td>'+
'         <td>'+jsonObj.x.prevBlockIndex+'</td>'+
'         <td>'+jsonObj.x.height+'</td>'+
'         <td>'+jsonObj.x.hash+'</td>'+
'         <td>'+jsonObj.x.mrklRoot+'</td>'+
'         <td>'+jsonObj.x.version+'</td>'+
'         <td>'+jsonObj.x.time+'</td>'+
'         <td>'+jsonObj.x.bits+'</td>'+
'         <td>'+jsonObj.x.nonce+'</td>'+
'         <td>'+jsonObj.x.foundBy.description+'</td>'+
'         <td>'+jsonObj.x.foundBy.ip+'</td>'+
'         <td>'+jsonObj.x.foundBy.link+'</td>'+
'      </tr>'+
'   </tbody>'+
'</table>';
   writeToScreen(myvar);
websocket.close();
}

function onError(evt){
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message){

  websocket.send(message);
}

function writeToScreen(message){
  var pre = document.createElement("div");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}
window.addEventListener("load", init, false);