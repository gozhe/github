var map;

function onLoad() {

    var mapDiv = document.getElementById("mapDiv");
    
    map = new SE.Map(mapDiv);
    // map.addControl(new SE.MapControl());
    // map.enableHandleKeyboard();
    // map.enableHandleMouseScroll();

    map.setCenter(new SE.LngLat(116.40969,39.94940),12);  
    map.addControl(new SE.MapControl());
    //绑定地图移动事件  
    if (typeof(SE_Rego) != "undefined" && SE_Rego.getRegoCode) {
        SE.Event.addListener(map, "move", SE_Rego.getRegoCode);
    }
    // 创建地图工具条  
    SE_MapTool.addMapTool(map, "mapBox");


    // var points = new Array();
    // points.push(new SE.LngLat(116.29376, 39.95776));
    // points.push(new SE.LngLat(116.42688, 39.88608));
    // points.push(new SE.LngLat(116.41152, 39.92640));
    // // 为便于演示，将三个点显示在地图上  
    // var marker = null;
    // for (var i = 0; i < points.length; i++) {
    //     marker = new SE.Marker(points[i]);
    //     map.addOverLay(marker);
    // }
    // // 将地图定位到最佳视图  
    // map.getBestMap(points);
}