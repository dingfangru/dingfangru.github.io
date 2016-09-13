<script src="js/jquery-3.0.0.min.js"></script>
<script src="js/imgrotate.js"></script>
<script src="js/navFixed.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js.js"></script>

<script>
setInterval("document.getElementById('time1').innerHTML = new Date().toLocaleString();", 1000);


function word(){

  $.ajax({
      beforeSend: function(request) {
          request.setRequestHeader("apikey", '58ae0237c99c70af1ecff9d0d6e85aab');
      },
      dataType: "json",
      url: 'http://apis.baidu.com/apistore/weatherservice/recentweathers?cityname=%E5%8C%97%E4%BA%AC&cityid=101190401',
      success: function(data) {

      var h="<ul>";
     for(var i=0;i<data.retData.history.length;i++)
   {
    var h1=data.retData.history[i];
    var l='<li class="list-group-item"><span class="col-xs-3">'
         +h1.week+'</span>  <span class="col-xs-3">'
         +h1.type+'</span>  <span class="col-xs-2">'
         +h1.fengli+'</span> <span class="col-xs-2">'
         +h1.hightemp+'</span><span class="col-xs-2">'
         +h1.lowtemp+'</span></li>';
      h+=l;
  }
      h+="</ul>"
    $(".history").html(h);

//未来天气
   var f="<ul>";
   for(var i=0;i<data.retData. forecast.length;i++)
  {
    var f1=data.retData. forecast[i];
    var L='<li class="list-group-item"><span class="col-xs-3">'
         +f1.week+'</span>  <span class="col-xs-3">'
         +f1.type+'</span>  <span class="col-xs-2">'
         +f1.fengli+'</span> <span class="col-xs-2">'
         +f1.hightemp+'</span><span class="col-xs-2">'
         +f1.lowtemp+'</span></li>';
      f+=L;
  }
      f+="</ul>";
  $(".fore").html(f);

//细节
    var D="<ul>";
    for(var i=2;i<data.retData.today.index.length;i++)
    {
      var d1=data.retData.today.index[i];
      var d='<li class="list-group-item"><span class="col-xs-6">'
         +d1.name+'</span>  <span class="col-xs-3">'
         +d1.code+'</span>  <span class="col-xs-5">'
         +d1.index+'</span></li>';
      D+=d;
  }
      D+="</ul>";
      $(".image-text").html(D);

//细节2
      var DD="<ul>";
      for(var i=3;i<data.retData.today.index.length-2;i++)
      {
      var dd1=data.retData.today.index[i];
      var dd='<li class="list-group-item"><span class="col-xs-12">'
           +dd1.details+'</span></li>';
        DD+=dd;
    }
        DD+="</ul>";
        $(".image-text-text").html(DD);


      $("#city").html(data.retData.city);
      $("#type").html(data.retData.today.type);
      $("#max").html(data.retData.today.hightemp);
      $("#min").html(data.retData.today. lowtemp);
      $("#du").html(data.retData.today.curTemp);
       //$("#xingqisan").html(data.retData.today.week);
          ///alert(data.retData.history.length);

//华氏度摄氏度转换
  /*  $("#huashi").click(function(){
      var convert;

      function convert(celsius=$("#du").html(data.retData.today.curTemp)) {

  var fahrenheit=celsius*9/5+32;

      return fahrenheit;
  }

});*/

  /*function aa(){
    var celsius=$("#du").html(data.retData.today.curTemp);
      var fahrenheit=celsius*9/5+32;
  }
   return fahrenheit;*/

      }

  });

}


</script>
<script>
$(document).ready(function(){
  word();

    $("#hide").click(function(){
     $(this).css("color","white");
       $("#show").css("color","gray");
    $(".here").hide(500);

    });

    $("#show").click(function(){
      $(this).css("color","white");
        $("#hide").css("color","gray");
        $(".here").show(500);

    });






});
</script>
