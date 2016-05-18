/*! light-blue - v3.2.0 - 2015-10-05 */ 
/* $(function(){function a(){function a(){return Math.floor(40*Math.random())}function b(){e.lineColor=$green,e.fillColor="rgba(86, 188, 118, 0.1)",$("#direct-trend").sparkline(d[0],e),e.lineColor=$orange,e.fillColor="rgba(234, 200, 94, 0.1)",$("#refer-trend").sparkline(d[1],e),e.lineColor=$blue,e.fillColor="rgba(106, 141, 167, 0.1)",$("#social-trend").sparkline(d[2],e),e.lineColor=$red,e.fillColor="rgba(229, 96, 59, 0.1)",$("#search-trend").sparkline(d[3],e),e.lineColor=$white,e.fillColor="rgba(255, 255, 255, 0.1)",$("#internal-trend").sparkline(d[4],e)}function c(a){var b=$("#settings"),d=b.siblings(".popover");d.length&&!$.contains(d[0],a.target)&&(b.popover("hide"),$(document).off("click",c))}nv.addGraph(function(){var a=nv.models.lineChart().useInteractiveGuideline(!0).margin({top:0,bottom:25,left:25,right:0}).color([$orange,"#cf6d51"]);a.legend.margin({top:3}),a.yAxis.showMaxMin(!1).tickFormat(d3.format(",.f")),a.xAxis.showMaxMin(!1).tickFormat(function(a){return d3.time.format("%b %d")(new Date(a))});var b=testData(["Unique","Visits"],30);return b[0].area=!0,d3.select("#visits-chart svg").datum(b).transition().duration(500).call(a),PjaxApp.onResize(a.update),a});for(var d=[[],[],[],[],[]],e={width:"150px",height:"30px",lineColor:$white,lineWidth:"2",spotRadius:"2",highlightLineColor:$gray,highlightSpotColor:$gray,spotColor:!1,minSpotColor:!1,maxSpotColor:!1},f=0;f<d.length;f++)d[f]=[10+a(),15+a(),20+a(),15+a(),25+a(),25+a(),30+a(),30+a(),40+a()];b(),PjaxApp.onResize(b),$("#notification-link").click(function(){return $(window).width()>767?($("#settings").popover("show"),$(document).on("click",c),!1):void 0}),$("#feed").slimscroll({height:"auto",size:"5px",alwaysVisible:!0,railVisible:!0}),$("#chat-messages").slimscroll({height:"240px",size:"5px",alwaysVisible:!0,railVisible:!0}),$(".widget").widgster()}a(),PjaxApp.onPageLoad(a)}); */

$(function() {
    function a() {
        function a() {
            return Math.floor(40 * Math.random())
        }

        function b() {
            e.lineColor = $green, e.fillColor = "rgba(86, 188, 118, 0.1)", $("#direct-trend").sparkline(d[0], e), e.lineColor = $orange, e.fillColor = "rgba(234, 200, 94, 0.1)", $("#refer-trend").sparkline(d[1], e), e.lineColor = $blue, e.fillColor = "rgba(106, 141, 167, 0.1)", $("#social-trend").sparkline(d[2], e), e.lineColor = $red, e.fillColor = "rgba(229, 96, 59, 0.1)", $("#search-trend").sparkline(d[3], e), e.lineColor = $white, e.fillColor = "rgba(255, 255, 255, 0.1)", $("#internal-trend").sparkline(d[4], e)
        }

        function c(a) {
            var b = $("#settings"),
                d = b.siblings(".popover");
            d.length && !$.contains(d[0], a.target) && (b.popover("hide"), $(document).off("click", c))
        }

        /**
        nv.addGraph(function() {
            var a = nv.models.lineChart().useInteractiveGuideline(!0).margin({
                top: 0,
                bottom: 25,
                left: 25,
                right: 0
            }).color([$orange, "#cf6d51"]);
            a.legend.margin({
                top: 3
            }), a.yAxis.showMaxMin(!1).tickFormat(d3.format(",.f")), a.xAxis.showMaxMin(!1).tickFormat(function(a) {
                return d3.time.format("%b %d")(new Date(a))
            });
            var b = testData(["Unique", "Visits"], 30);
            return b[0].area = !0, d3.select("#visits-chart svg").datum(b).transition().duration(500).call(a), PjaxApp.onResize(a.update), a
        }); **/

        for (var d = [
                [],
                [],
                [],
                [],
                []
            ], e = {
                width: "150px",
                height: "30px",
                lineColor: $white,
                lineWidth: "2",
                spotRadius: "2",
                highlightLineColor: $gray,
                highlightSpotColor: $gray,
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1
            }, f = 0; f < d.length; f++) d[f] = [10 + a(), 15 + a(), 20 + a(), 15 + a(), 25 + a(), 25 + a(), 30 + a(), 30 + a(), 40 + a()];
        b(), PjaxApp.onResize(b), $("#notification-link").click(function() {
            return $(window).width() > 767 ? ($("#settings").popover("show"), $(document).on("click", c), !1) : void 0
        }), $("#feed").slimscroll({
            height: "auto",
            size: "5px",
            alwaysVisible: !0,
            railVisible: !0
        }), $("#chat-messages").slimscroll({
            height: "240px",
            size: "5px",
            alwaysVisible: !0,
            railVisible: !0
        }), $(".widget").widgster()
    }
    a(), PjaxApp.onPageLoad(a)
});