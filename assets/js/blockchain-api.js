
window.onload = function() {
    var service = new WebSocket("wss://ws.blockchain.info/inv");
    service.onmessage = function(event) {
    console.log("onmessage event: "+event.data);
    var jsonObj=JSON.parse(event.data);
    if(typeof jsonObj.x.txIndexes!=='undefined'){
      console.log("txIndexes:---"+jsonObj.x.txIndexes);
      var result = jsonObj.x.txIndexes.map(function(val) {
        return val+"\n";
      }).join('');
          var newblockNotificationTable = '<table  class="table table-bordered table-striped" style="width:100%">'+
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
          $("#block_response").hide();
          $("#tableid").html(newblockNotificationTable);
    }else{
      var notificatonTable = '<table  class="table table-bordered table-striped" style="width:100%">'+
      '   <thead>'+
      '      <tr>'+
      '         <th>OP</th>'+
      '         <th>size</th>'+
      '         <th>hash</th>'+
      '         <th>time</th>'+
      '         <th>lock_time</th>'+
      '         <th>ver</th>'+
      '         <th>tx_index</th>'+
      '         <th>vin_sz</th>'+
      '         <th>vout_sz</th>'+
      '      </tr>'+
      '   </thead>'+
      '   <tbody>'+
      '      <tr>'+
      '         <td>'+jsonObj.op+'</td>'+
      '         <td>'+jsonObj.x.size+'</td>'+
      '         <td>'+jsonObj.x.hash+'</td>'+
      '         <td>'+jsonObj.x.time+'</td>'+
      '         <td>'+jsonObj.x.lock_time+'</td>'+
      '         <td>'+jsonObj.x.ver+'</td>'+
      '         <td>'+jsonObj.x.tx_index+'</td>'+
      '         <td>'+jsonObj.x.vin_sz+'</td>'+
      '         <td>'+jsonObj.x.vout_sz+'</td>'+  
      '      </tr>'+
      '   </tbody>'+
      '</table>';
      $("#bitcoin_response").hide();
      $("#bitcoin_notifications").html(notificatonTable);
    }

  }
  service.onopen = function() {
    service.send('{"op":"blocks_sub"}'); //Will work here!
    //^^^^^^^^^^^^^^^^^
    service.send('{"op":"unconfirmed_sub"}');
  }
  service.onclose = function() {
    console.log("closed");
  }
  service.onerror = function() {
    console.log("error");
  }

  //Can't close while a connection is still being established.
  // service.close();
}
