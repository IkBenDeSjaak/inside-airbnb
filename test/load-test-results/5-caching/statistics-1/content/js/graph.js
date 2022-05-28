/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 150.0, "series": [{"data": [[0.0, 15.0], [0.1, 15.0], [0.2, 15.0], [0.3, 15.0], [0.4, 15.0], [0.5, 15.0], [0.6, 15.0], [0.7, 16.0], [0.8, 16.0], [0.9, 16.0], [1.0, 16.0], [1.1, 16.0], [1.2, 16.0], [1.3, 16.0], [1.4, 16.0], [1.5, 16.0], [1.6, 16.0], [1.7, 16.0], [1.8, 16.0], [1.9, 16.0], [2.0, 16.0], [2.1, 16.0], [2.2, 16.0], [2.3, 16.0], [2.4, 16.0], [2.5, 16.0], [2.6, 16.0], [2.7, 16.0], [2.8, 16.0], [2.9, 16.0], [3.0, 16.0], [3.1, 16.0], [3.2, 16.0], [3.3, 16.0], [3.4, 16.0], [3.5, 16.0], [3.6, 16.0], [3.7, 16.0], [3.8, 16.0], [3.9, 16.0], [4.0, 16.0], [4.1, 16.0], [4.2, 16.0], [4.3, 16.0], [4.4, 16.0], [4.5, 16.0], [4.6, 16.0], [4.7, 16.0], [4.8, 16.0], [4.9, 16.0], [5.0, 16.0], [5.1, 16.0], [5.2, 16.0], [5.3, 16.0], [5.4, 16.0], [5.5, 16.0], [5.6, 16.0], [5.7, 16.0], [5.8, 16.0], [5.9, 16.0], [6.0, 16.0], [6.1, 16.0], [6.2, 16.0], [6.3, 16.0], [6.4, 16.0], [6.5, 16.0], [6.6, 16.0], [6.7, 16.0], [6.8, 16.0], [6.9, 16.0], [7.0, 16.0], [7.1, 16.0], [7.2, 16.0], [7.3, 16.0], [7.4, 16.0], [7.5, 16.0], [7.6, 16.0], [7.7, 16.0], [7.8, 16.0], [7.9, 16.0], [8.0, 16.0], [8.1, 16.0], [8.2, 16.0], [8.3, 16.0], [8.4, 16.0], [8.5, 16.0], [8.6, 16.0], [8.7, 16.0], [8.8, 16.0], [8.9, 16.0], [9.0, 16.0], [9.1, 16.0], [9.2, 16.0], [9.3, 16.0], [9.4, 16.0], [9.5, 16.0], [9.6, 16.0], [9.7, 16.0], [9.8, 16.0], [9.9, 16.0], [10.0, 16.0], [10.1, 16.0], [10.2, 16.0], [10.3, 16.0], [10.4, 16.0], [10.5, 16.0], [10.6, 16.0], [10.7, 16.0], [10.8, 16.0], [10.9, 16.0], [11.0, 16.0], [11.1, 16.0], [11.2, 16.0], [11.3, 16.0], [11.4, 17.0], [11.5, 17.0], [11.6, 17.0], [11.7, 17.0], [11.8, 17.0], [11.9, 17.0], [12.0, 17.0], [12.1, 17.0], [12.2, 17.0], [12.3, 17.0], [12.4, 17.0], [12.5, 17.0], [12.6, 17.0], [12.7, 17.0], [12.8, 17.0], [12.9, 17.0], [13.0, 17.0], [13.1, 17.0], [13.2, 17.0], [13.3, 17.0], [13.4, 17.0], [13.5, 17.0], [13.6, 17.0], [13.7, 17.0], [13.8, 17.0], [13.9, 17.0], [14.0, 17.0], [14.1, 17.0], [14.2, 17.0], [14.3, 17.0], [14.4, 17.0], [14.5, 17.0], [14.6, 17.0], [14.7, 17.0], [14.8, 17.0], [14.9, 17.0], [15.0, 17.0], [15.1, 17.0], [15.2, 17.0], [15.3, 17.0], [15.4, 17.0], [15.5, 17.0], [15.6, 17.0], [15.7, 17.0], [15.8, 17.0], [15.9, 17.0], [16.0, 17.0], [16.1, 17.0], [16.2, 17.0], [16.3, 17.0], [16.4, 17.0], [16.5, 17.0], [16.6, 17.0], [16.7, 17.0], [16.8, 17.0], [16.9, 17.0], [17.0, 17.0], [17.1, 17.0], [17.2, 17.0], [17.3, 17.0], [17.4, 17.0], [17.5, 17.0], [17.6, 17.0], [17.7, 17.0], [17.8, 17.0], [17.9, 17.0], [18.0, 17.0], [18.1, 17.0], [18.2, 17.0], [18.3, 17.0], [18.4, 17.0], [18.5, 17.0], [18.6, 17.0], [18.7, 17.0], [18.8, 17.0], [18.9, 17.0], [19.0, 17.0], [19.1, 17.0], [19.2, 17.0], [19.3, 17.0], [19.4, 17.0], [19.5, 17.0], [19.6, 17.0], [19.7, 17.0], [19.8, 17.0], [19.9, 17.0], [20.0, 17.0], [20.1, 17.0], [20.2, 17.0], [20.3, 17.0], [20.4, 17.0], [20.5, 17.0], [20.6, 17.0], [20.7, 17.0], [20.8, 17.0], [20.9, 17.0], [21.0, 17.0], [21.1, 17.0], [21.2, 17.0], [21.3, 17.0], [21.4, 17.0], [21.5, 17.0], [21.6, 17.0], [21.7, 17.0], [21.8, 17.0], [21.9, 17.0], [22.0, 17.0], [22.1, 17.0], [22.2, 17.0], [22.3, 17.0], [22.4, 17.0], [22.5, 17.0], [22.6, 17.0], [22.7, 17.0], [22.8, 17.0], [22.9, 17.0], [23.0, 17.0], [23.1, 17.0], [23.2, 17.0], [23.3, 17.0], [23.4, 17.0], [23.5, 17.0], [23.6, 17.0], [23.7, 17.0], [23.8, 17.0], [23.9, 17.0], [24.0, 17.0], [24.1, 17.0], [24.2, 17.0], [24.3, 17.0], [24.4, 17.0], [24.5, 17.0], [24.6, 17.0], [24.7, 17.0], [24.8, 17.0], [24.9, 17.0], [25.0, 17.0], [25.1, 17.0], [25.2, 17.0], [25.3, 17.0], [25.4, 17.0], [25.5, 17.0], [25.6, 17.0], [25.7, 17.0], [25.8, 17.0], [25.9, 17.0], [26.0, 17.0], [26.1, 17.0], [26.2, 17.0], [26.3, 17.0], [26.4, 17.0], [26.5, 17.0], [26.6, 17.0], [26.7, 17.0], [26.8, 17.0], [26.9, 17.0], [27.0, 17.0], [27.1, 17.0], [27.2, 17.0], [27.3, 17.0], [27.4, 17.0], [27.5, 17.0], [27.6, 17.0], [27.7, 17.0], [27.8, 17.0], [27.9, 17.0], [28.0, 17.0], [28.1, 17.0], [28.2, 17.0], [28.3, 17.0], [28.4, 17.0], [28.5, 17.0], [28.6, 17.0], [28.7, 17.0], [28.8, 17.0], [28.9, 17.0], [29.0, 17.0], [29.1, 17.0], [29.2, 17.0], [29.3, 17.0], [29.4, 17.0], [29.5, 17.0], [29.6, 17.0], [29.7, 17.0], [29.8, 17.0], [29.9, 17.0], [30.0, 17.0], [30.1, 17.0], [30.2, 17.0], [30.3, 17.0], [30.4, 17.0], [30.5, 17.0], [30.6, 17.0], [30.7, 17.0], [30.8, 17.0], [30.9, 17.0], [31.0, 17.0], [31.1, 17.0], [31.2, 17.0], [31.3, 17.0], [31.4, 17.0], [31.5, 17.0], [31.6, 17.0], [31.7, 17.0], [31.8, 17.0], [31.9, 17.0], [32.0, 17.0], [32.1, 17.0], [32.2, 17.0], [32.3, 17.0], [32.4, 17.0], [32.5, 17.0], [32.6, 17.0], [32.7, 17.0], [32.8, 17.0], [32.9, 17.0], [33.0, 17.0], [33.1, 17.0], [33.2, 17.0], [33.3, 17.0], [33.4, 17.0], [33.5, 17.0], [33.6, 17.0], [33.7, 17.0], [33.8, 17.0], [33.9, 17.0], [34.0, 17.0], [34.1, 17.0], [34.2, 17.0], [34.3, 17.0], [34.4, 17.0], [34.5, 17.0], [34.6, 17.0], [34.7, 17.0], [34.8, 17.0], [34.9, 17.0], [35.0, 17.0], [35.1, 17.0], [35.2, 17.0], [35.3, 17.0], [35.4, 17.0], [35.5, 17.0], [35.6, 17.0], [35.7, 17.0], [35.8, 17.0], [35.9, 17.0], [36.0, 17.0], [36.1, 17.0], [36.2, 17.0], [36.3, 17.0], [36.4, 17.0], [36.5, 17.0], [36.6, 17.0], [36.7, 17.0], [36.8, 17.0], [36.9, 17.0], [37.0, 17.0], [37.1, 17.0], [37.2, 17.0], [37.3, 17.0], [37.4, 17.0], [37.5, 17.0], [37.6, 17.0], [37.7, 18.0], [37.8, 18.0], [37.9, 18.0], [38.0, 18.0], [38.1, 18.0], [38.2, 18.0], [38.3, 18.0], [38.4, 18.0], [38.5, 18.0], [38.6, 18.0], [38.7, 18.0], [38.8, 18.0], [38.9, 18.0], [39.0, 18.0], [39.1, 18.0], [39.2, 18.0], [39.3, 18.0], [39.4, 18.0], [39.5, 18.0], [39.6, 18.0], [39.7, 18.0], [39.8, 18.0], [39.9, 18.0], [40.0, 18.0], [40.1, 18.0], [40.2, 18.0], [40.3, 18.0], [40.4, 18.0], [40.5, 18.0], [40.6, 18.0], [40.7, 18.0], [40.8, 18.0], [40.9, 18.0], [41.0, 18.0], [41.1, 18.0], [41.2, 18.0], [41.3, 18.0], [41.4, 18.0], [41.5, 18.0], [41.6, 18.0], [41.7, 18.0], [41.8, 18.0], [41.9, 18.0], [42.0, 18.0], [42.1, 18.0], [42.2, 18.0], [42.3, 18.0], [42.4, 18.0], [42.5, 18.0], [42.6, 18.0], [42.7, 18.0], [42.8, 18.0], [42.9, 18.0], [43.0, 18.0], [43.1, 18.0], [43.2, 18.0], [43.3, 18.0], [43.4, 18.0], [43.5, 18.0], [43.6, 18.0], [43.7, 18.0], [43.8, 18.0], [43.9, 18.0], [44.0, 18.0], [44.1, 18.0], [44.2, 18.0], [44.3, 18.0], [44.4, 18.0], [44.5, 18.0], [44.6, 18.0], [44.7, 18.0], [44.8, 18.0], [44.9, 18.0], [45.0, 18.0], [45.1, 18.0], [45.2, 18.0], [45.3, 18.0], [45.4, 18.0], [45.5, 18.0], [45.6, 18.0], [45.7, 18.0], [45.8, 18.0], [45.9, 18.0], [46.0, 18.0], [46.1, 18.0], [46.2, 18.0], [46.3, 18.0], [46.4, 18.0], [46.5, 18.0], [46.6, 18.0], [46.7, 18.0], [46.8, 18.0], [46.9, 18.0], [47.0, 18.0], [47.1, 18.0], [47.2, 18.0], [47.3, 18.0], [47.4, 18.0], [47.5, 18.0], [47.6, 18.0], [47.7, 18.0], [47.8, 18.0], [47.9, 18.0], [48.0, 18.0], [48.1, 18.0], [48.2, 18.0], [48.3, 18.0], [48.4, 18.0], [48.5, 18.0], [48.6, 18.0], [48.7, 18.0], [48.8, 18.0], [48.9, 18.0], [49.0, 18.0], [49.1, 18.0], [49.2, 18.0], [49.3, 18.0], [49.4, 18.0], [49.5, 18.0], [49.6, 18.0], [49.7, 18.0], [49.8, 18.0], [49.9, 18.0], [50.0, 18.0], [50.1, 18.0], [50.2, 18.0], [50.3, 18.0], [50.4, 18.0], [50.5, 18.0], [50.6, 18.0], [50.7, 18.0], [50.8, 18.0], [50.9, 18.0], [51.0, 18.0], [51.1, 18.0], [51.2, 18.0], [51.3, 18.0], [51.4, 18.0], [51.5, 18.0], [51.6, 18.0], [51.7, 18.0], [51.8, 18.0], [51.9, 18.0], [52.0, 18.0], [52.1, 18.0], [52.2, 18.0], [52.3, 18.0], [52.4, 18.0], [52.5, 18.0], [52.6, 18.0], [52.7, 18.0], [52.8, 18.0], [52.9, 18.0], [53.0, 18.0], [53.1, 18.0], [53.2, 18.0], [53.3, 18.0], [53.4, 18.0], [53.5, 18.0], [53.6, 18.0], [53.7, 18.0], [53.8, 18.0], [53.9, 18.0], [54.0, 18.0], [54.1, 18.0], [54.2, 18.0], [54.3, 18.0], [54.4, 18.0], [54.5, 18.0], [54.6, 18.0], [54.7, 18.0], [54.8, 18.0], [54.9, 18.0], [55.0, 18.0], [55.1, 18.0], [55.2, 18.0], [55.3, 18.0], [55.4, 18.0], [55.5, 18.0], [55.6, 18.0], [55.7, 18.0], [55.8, 18.0], [55.9, 18.0], [56.0, 18.0], [56.1, 18.0], [56.2, 18.0], [56.3, 18.0], [56.4, 18.0], [56.5, 18.0], [56.6, 18.0], [56.7, 18.0], [56.8, 18.0], [56.9, 18.0], [57.0, 18.0], [57.1, 18.0], [57.2, 18.0], [57.3, 18.0], [57.4, 18.0], [57.5, 18.0], [57.6, 18.0], [57.7, 18.0], [57.8, 18.0], [57.9, 18.0], [58.0, 18.0], [58.1, 18.0], [58.2, 18.0], [58.3, 18.0], [58.4, 18.0], [58.5, 18.0], [58.6, 18.0], [58.7, 18.0], [58.8, 18.0], [58.9, 18.0], [59.0, 18.0], [59.1, 18.0], [59.2, 18.0], [59.3, 18.0], [59.4, 19.0], [59.5, 19.0], [59.6, 19.0], [59.7, 19.0], [59.8, 19.0], [59.9, 19.0], [60.0, 19.0], [60.1, 19.0], [60.2, 19.0], [60.3, 19.0], [60.4, 19.0], [60.5, 19.0], [60.6, 19.0], [60.7, 19.0], [60.8, 19.0], [60.9, 19.0], [61.0, 19.0], [61.1, 19.0], [61.2, 19.0], [61.3, 19.0], [61.4, 19.0], [61.5, 19.0], [61.6, 19.0], [61.7, 19.0], [61.8, 19.0], [61.9, 19.0], [62.0, 19.0], [62.1, 19.0], [62.2, 19.0], [62.3, 19.0], [62.4, 19.0], [62.5, 19.0], [62.6, 19.0], [62.7, 19.0], [62.8, 19.0], [62.9, 19.0], [63.0, 19.0], [63.1, 19.0], [63.2, 19.0], [63.3, 19.0], [63.4, 19.0], [63.5, 19.0], [63.6, 19.0], [63.7, 19.0], [63.8, 19.0], [63.9, 19.0], [64.0, 19.0], [64.1, 19.0], [64.2, 19.0], [64.3, 19.0], [64.4, 19.0], [64.5, 19.0], [64.6, 19.0], [64.7, 19.0], [64.8, 19.0], [64.9, 19.0], [65.0, 19.0], [65.1, 19.0], [65.2, 19.0], [65.3, 19.0], [65.4, 19.0], [65.5, 19.0], [65.6, 19.0], [65.7, 19.0], [65.8, 19.0], [65.9, 19.0], [66.0, 19.0], [66.1, 19.0], [66.2, 19.0], [66.3, 19.0], [66.4, 19.0], [66.5, 19.0], [66.6, 19.0], [66.7, 19.0], [66.8, 19.0], [66.9, 19.0], [67.0, 19.0], [67.1, 19.0], [67.2, 19.0], [67.3, 19.0], [67.4, 19.0], [67.5, 19.0], [67.6, 19.0], [67.7, 19.0], [67.8, 19.0], [67.9, 19.0], [68.0, 19.0], [68.1, 19.0], [68.2, 19.0], [68.3, 19.0], [68.4, 19.0], [68.5, 19.0], [68.6, 19.0], [68.7, 19.0], [68.8, 19.0], [68.9, 19.0], [69.0, 19.0], [69.1, 19.0], [69.2, 19.0], [69.3, 19.0], [69.4, 20.0], [69.5, 20.0], [69.6, 20.0], [69.7, 20.0], [69.8, 20.0], [69.9, 20.0], [70.0, 20.0], [70.1, 20.0], [70.2, 20.0], [70.3, 20.0], [70.4, 20.0], [70.5, 20.0], [70.6, 20.0], [70.7, 20.0], [70.8, 20.0], [70.9, 20.0], [71.0, 20.0], [71.1, 20.0], [71.2, 20.0], [71.3, 20.0], [71.4, 20.0], [71.5, 20.0], [71.6, 20.0], [71.7, 20.0], [71.8, 20.0], [71.9, 20.0], [72.0, 20.0], [72.1, 20.0], [72.2, 20.0], [72.3, 20.0], [72.4, 20.0], [72.5, 20.0], [72.6, 20.0], [72.7, 20.0], [72.8, 20.0], [72.9, 20.0], [73.0, 20.0], [73.1, 20.0], [73.2, 20.0], [73.3, 20.0], [73.4, 20.0], [73.5, 20.0], [73.6, 20.0], [73.7, 20.0], [73.8, 20.0], [73.9, 20.0], [74.0, 20.0], [74.1, 20.0], [74.2, 20.0], [74.3, 20.0], [74.4, 20.0], [74.5, 20.0], [74.6, 20.0], [74.7, 20.0], [74.8, 20.0], [74.9, 20.0], [75.0, 20.0], [75.1, 20.0], [75.2, 20.0], [75.3, 20.0], [75.4, 21.0], [75.5, 21.0], [75.6, 21.0], [75.7, 21.0], [75.8, 21.0], [75.9, 21.0], [76.0, 21.0], [76.1, 21.0], [76.2, 21.0], [76.3, 21.0], [76.4, 21.0], [76.5, 21.0], [76.6, 21.0], [76.7, 21.0], [76.8, 21.0], [76.9, 21.0], [77.0, 21.0], [77.1, 21.0], [77.2, 21.0], [77.3, 21.0], [77.4, 21.0], [77.5, 21.0], [77.6, 21.0], [77.7, 21.0], [77.8, 21.0], [77.9, 21.0], [78.0, 21.0], [78.1, 21.0], [78.2, 21.0], [78.3, 21.0], [78.4, 21.0], [78.5, 21.0], [78.6, 21.0], [78.7, 21.0], [78.8, 21.0], [78.9, 21.0], [79.0, 21.0], [79.1, 21.0], [79.2, 21.0], [79.3, 21.0], [79.4, 21.0], [79.5, 21.0], [79.6, 22.0], [79.7, 22.0], [79.8, 22.0], [79.9, 22.0], [80.0, 22.0], [80.1, 22.0], [80.2, 22.0], [80.3, 22.0], [80.4, 22.0], [80.5, 22.0], [80.6, 22.0], [80.7, 22.0], [80.8, 22.0], [80.9, 22.0], [81.0, 22.0], [81.1, 22.0], [81.2, 22.0], [81.3, 22.0], [81.4, 22.0], [81.5, 22.0], [81.6, 22.0], [81.7, 22.0], [81.8, 22.0], [81.9, 23.0], [82.0, 23.0], [82.1, 23.0], [82.2, 23.0], [82.3, 23.0], [82.4, 23.0], [82.5, 23.0], [82.6, 23.0], [82.7, 23.0], [82.8, 23.0], [82.9, 23.0], [83.0, 23.0], [83.1, 23.0], [83.2, 23.0], [83.3, 23.0], [83.4, 23.0], [83.5, 24.0], [83.6, 24.0], [83.7, 24.0], [83.8, 24.0], [83.9, 24.0], [84.0, 24.0], [84.1, 24.0], [84.2, 24.0], [84.3, 24.0], [84.4, 24.0], [84.5, 24.0], [84.6, 24.0], [84.7, 25.0], [84.8, 25.0], [84.9, 25.0], [85.0, 25.0], [85.1, 25.0], [85.2, 25.0], [85.3, 25.0], [85.4, 25.0], [85.5, 25.0], [85.6, 25.0], [85.7, 25.0], [85.8, 25.0], [85.9, 25.0], [86.0, 25.0], [86.1, 25.0], [86.2, 25.0], [86.3, 25.0], [86.4, 25.0], [86.5, 25.0], [86.6, 25.0], [86.7, 25.0], [86.8, 25.0], [86.9, 25.0], [87.0, 26.0], [87.1, 26.0], [87.2, 26.0], [87.3, 26.0], [87.4, 26.0], [87.5, 27.0], [87.6, 27.0], [87.7, 27.0], [87.8, 27.0], [87.9, 27.0], [88.0, 27.0], [88.1, 27.0], [88.2, 27.0], [88.3, 27.0], [88.4, 28.0], [88.5, 28.0], [88.6, 28.0], [88.7, 28.0], [88.8, 28.0], [88.9, 28.0], [89.0, 28.0], [89.1, 28.0], [89.2, 28.0], [89.3, 28.0], [89.4, 28.0], [89.5, 28.0], [89.6, 28.0], [89.7, 28.0], [89.8, 30.0], [89.9, 30.0], [90.0, 31.0], [90.1, 31.0], [90.2, 31.0], [90.3, 31.0], [90.4, 31.0], [90.5, 31.0], [90.6, 31.0], [90.7, 31.0], [90.8, 31.0], [90.9, 31.0], [91.0, 31.0], [91.1, 31.0], [91.2, 32.0], [91.3, 32.0], [91.4, 33.0], [91.5, 33.0], [91.6, 33.0], [91.7, 33.0], [91.8, 33.0], [91.9, 34.0], [92.0, 34.0], [92.1, 34.0], [92.2, 34.0], [92.3, 34.0], [92.4, 35.0], [92.5, 35.0], [92.6, 35.0], [92.7, 35.0], [92.8, 35.0], [92.9, 35.0], [93.0, 35.0], [93.1, 35.0], [93.2, 35.0], [93.3, 35.0], [93.4, 35.0], [93.5, 35.0], [93.6, 35.0], [93.7, 35.0], [93.8, 36.0], [93.9, 36.0], [94.0, 36.0], [94.1, 36.0], [94.2, 36.0], [94.3, 36.0], [94.4, 36.0], [94.5, 37.0], [94.6, 37.0], [94.7, 37.0], [94.8, 37.0], [94.9, 37.0], [95.0, 37.0], [95.1, 37.0], [95.2, 37.0], [95.3, 37.0], [95.4, 37.0], [95.5, 37.0], [95.6, 38.0], [95.7, 38.0], [95.8, 38.0], [95.9, 38.0], [96.0, 38.0], [96.1, 38.0], [96.2, 38.0], [96.3, 38.0], [96.4, 38.0], [96.5, 38.0], [96.6, 39.0], [96.7, 39.0], [96.8, 39.0], [96.9, 39.0], [97.0, 40.0], [97.1, 40.0], [97.2, 40.0], [97.3, 40.0], [97.4, 40.0], [97.5, 40.0], [97.6, 40.0], [97.7, 40.0], [97.8, 40.0], [97.9, 40.0], [98.0, 40.0], [98.1, 40.0], [98.2, 42.0], [98.3, 42.0], [98.4, 42.0], [98.5, 42.0], [98.6, 42.0], [98.7, 43.0], [98.8, 43.0], [98.9, 44.0], [99.0, 44.0], [99.1, 50.0], [99.2, 50.0], [99.3, 50.0], [99.4, 71.0], [99.5, 71.0], [99.6, 106.0], [99.7, 106.0], [99.8, 150.0], [99.9, 150.0], [100.0, 150.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 428.0, "series": [{"data": [[0.0, 428.0], [100.0, 2.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 430.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 430.0, "series": [{"data": [[0.0, 430.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.653742305E12, "maxY": 1.0, "series": [{"data": [[1.653742323E12, 1.0], [1.6537423245E12, 1.0], [1.6537423215E12, 1.0], [1.6537423185E12, 1.0], [1.6537423395E12, 1.0], [1.65374232E12, 1.0], [1.6537423365E12, 1.0], [1.6537423155E12, 1.0], [1.653742338E12, 1.0], [1.653742317E12, 1.0], [1.6537423125E12, 1.0], [1.6537423335E12, 1.0], [1.653742314E12, 1.0], [1.653742335E12, 1.0], [1.6537423095E12, 1.0], [1.653742332E12, 1.0], [1.653742311E12, 1.0], [1.653742308E12, 1.0], [1.653742329E12, 1.0], [1.6537423305E12, 1.0], [1.653742326E12, 1.0], [1.653742305E12, 1.0], [1.6537423065E12, 1.0], [1.6537423275E12, 1.0]], "isOverall": false, "label": "parallel bzm - Parallel", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6537423395E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 20.489411764705892, "minX": 1.0, "maxY": 106.0, "series": [{"data": [[1.0, 20.489411764705892], [2.0, 47.0], [3.0, 106.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}, {"data": [[1.013953488372093, 20.93488372093023]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 180.0, "minX": 1.653742305E12, "maxY": 203820.0, "series": [{"data": [[1.653742323E12, 135880.0], [1.6537423245E12, 142674.0], [1.6537423215E12, 115498.0], [1.6537423185E12, 108704.0], [1.6537423395E12, 135880.0], [1.65374232E12, 115498.0], [1.6537423365E12, 203820.0], [1.6537423155E12, 88322.0], [1.653742338E12, 203820.0], [1.653742317E12, 88322.0], [1.6537423125E12, 61146.0], [1.6537423335E12, 203820.0], [1.653742314E12, 74734.0], [1.653742335E12, 203820.0], [1.6537423095E12, 33970.0], [1.653742332E12, 197026.0], [1.653742311E12, 54352.0], [1.653742308E12, 33970.0], [1.653742329E12, 176644.0], [1.6537423305E12, 183438.0], [1.653742326E12, 156262.0], [1.653742305E12, 13588.0], [1.6537423065E12, 27176.0], [1.6537423275E12, 163056.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.653742323E12, 1800.0], [1.6537423245E12, 1890.0], [1.6537423215E12, 1530.0], [1.6537423185E12, 1440.0], [1.6537423395E12, 1800.0], [1.65374232E12, 1530.0], [1.6537423365E12, 2700.0], [1.6537423155E12, 1170.0], [1.653742338E12, 2700.0], [1.653742317E12, 1170.0], [1.6537423125E12, 810.0], [1.6537423335E12, 2700.0], [1.653742314E12, 990.0], [1.653742335E12, 2700.0], [1.6537423095E12, 450.0], [1.653742332E12, 2610.0], [1.653742311E12, 720.0], [1.653742308E12, 450.0], [1.653742329E12, 2340.0], [1.6537423305E12, 2430.0], [1.653742326E12, 2070.0], [1.653742305E12, 180.0], [1.6537423065E12, 360.0], [1.6537423275E12, 2160.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6537423395E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 18.266666666666666, "minX": 1.653742305E12, "maxY": 84.0, "series": [{"data": [[1.653742323E12, 18.6], [1.6537423245E12, 19.523809523809522], [1.6537423215E12, 22.58823529411765], [1.6537423185E12, 20.25], [1.6537423395E12, 19.400000000000002], [1.65374232E12, 21.823529411764707], [1.6537423365E12, 27.766666666666666], [1.6537423155E12, 21.846153846153847], [1.653742338E12, 18.266666666666666], [1.653742317E12, 19.38461538461538], [1.6537423125E12, 29.11111111111111], [1.6537423335E12, 18.300000000000004], [1.653742314E12, 22.363636363636363], [1.653742335E12, 18.933333333333334], [1.6537423095E12, 19.6], [1.653742332E12, 19.89655172413793], [1.653742311E12, 25.125], [1.653742308E12, 18.8], [1.653742329E12, 19.846153846153843], [1.6537423305E12, 20.333333333333332], [1.653742326E12, 20.869565217391308], [1.653742305E12, 84.0], [1.6537423065E12, 20.0], [1.6537423275E12, 18.666666666666664]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6537423395E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 18.266666666666666, "minX": 1.653742305E12, "maxY": 84.0, "series": [{"data": [[1.653742323E12, 18.55], [1.6537423245E12, 19.476190476190478], [1.6537423215E12, 22.470588235294116], [1.6537423185E12, 20.187500000000004], [1.6537423395E12, 19.400000000000002], [1.65374232E12, 21.70588235294118], [1.6537423365E12, 27.666666666666668], [1.6537423155E12, 21.846153846153847], [1.653742338E12, 18.266666666666666], [1.653742317E12, 19.38461538461538], [1.6537423125E12, 29.0], [1.6537423335E12, 18.300000000000004], [1.653742314E12, 22.363636363636363], [1.653742335E12, 18.900000000000002], [1.6537423095E12, 19.6], [1.653742332E12, 19.86206896551724], [1.653742311E12, 25.125], [1.653742308E12, 18.8], [1.653742329E12, 19.76923076923077], [1.6537423305E12, 20.296296296296298], [1.653742326E12, 20.869565217391308], [1.653742305E12, 84.0], [1.6537423065E12, 20.0], [1.6537423275E12, 18.666666666666664]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6537423395E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 10.0, "minX": 1.653742305E12, "maxY": 20.0, "series": [{"data": [[1.653742323E12, 10.65], [1.6537423245E12, 11.095238095238095], [1.6537423215E12, 13.705882352941176], [1.6537423185E12, 11.937500000000002], [1.6537423395E12, 11.15], [1.65374232E12, 12.882352941176471], [1.6537423365E12, 18.466666666666672], [1.6537423155E12, 13.384615384615383], [1.653742338E12, 10.066666666666668], [1.653742317E12, 11.076923076923077], [1.6537423125E12, 20.0], [1.6537423335E12, 10.433333333333335], [1.653742314E12, 13.909090909090908], [1.653742335E12, 10.933333333333334], [1.6537423095E12, 11.2], [1.653742332E12, 11.655172413793103], [1.653742311E12, 16.5], [1.653742308E12, 10.8], [1.653742329E12, 11.538461538461538], [1.6537423305E12, 12.518518518518517], [1.653742326E12, 12.478260869565219], [1.653742305E12, 10.0], [1.6537423065E12, 11.75], [1.6537423275E12, 10.625]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6537423395E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 15.0, "minX": 1.653742305E12, "maxY": 150.0, "series": [{"data": [[1.653742323E12, 32.0], [1.6537423245E12, 35.0], [1.6537423215E12, 38.0], [1.6537423185E12, 28.0], [1.6537423395E12, 35.0], [1.65374232E12, 36.0], [1.6537423365E12, 106.0], [1.6537423155E12, 40.0], [1.653742338E12, 28.0], [1.653742317E12, 25.0], [1.6537423125E12, 43.0], [1.6537423335E12, 37.0], [1.653742314E12, 35.0], [1.653742335E12, 37.0], [1.6537423095E12, 23.0], [1.653742332E12, 40.0], [1.653742311E12, 37.0], [1.653742308E12, 20.0], [1.653742329E12, 38.0], [1.6537423305E12, 38.0], [1.653742326E12, 42.0], [1.653742305E12, 150.0], [1.6537423065E12, 25.0], [1.6537423275E12, 38.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.653742323E12, 23.0], [1.6537423245E12, 24.400000000000002], [1.6537423215E12, 37.2], [1.6537423185E12, 28.0], [1.6537423395E12, 32.60000000000003], [1.65374232E12, 36.0], [1.6537423365E12, 49.40000000000001], [1.6537423155E12, 34.39999999999999], [1.653742338E12, 22.0], [1.653742317E12, 23.799999999999997], [1.6537423125E12, 43.0], [1.6537423335E12, 20.900000000000002], [1.653742314E12, 34.2], [1.653742335E12, 29.00000000000002], [1.6537423095E12, 23.0], [1.653742332E12, 36.0], [1.653742311E12, 37.0], [1.653742308E12, 20.0], [1.653742329E12, 28.60000000000001], [1.6537423305E12, 31.0], [1.653742326E12, 31.20000000000001], [1.653742305E12, 150.0], [1.6537423065E12, 25.0], [1.6537423275E12, 22.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.653742323E12, 32.0], [1.6537423245E12, 35.0], [1.6537423215E12, 38.0], [1.6537423185E12, 28.0], [1.6537423395E12, 35.0], [1.65374232E12, 36.0], [1.6537423365E12, 106.0], [1.6537423155E12, 40.0], [1.653742338E12, 28.0], [1.653742317E12, 25.0], [1.6537423125E12, 43.0], [1.6537423335E12, 37.0], [1.653742314E12, 35.0], [1.653742335E12, 37.0], [1.6537423095E12, 23.0], [1.653742332E12, 40.0], [1.653742311E12, 37.0], [1.653742308E12, 20.0], [1.653742329E12, 38.0], [1.6537423305E12, 38.0], [1.653742326E12, 42.0], [1.653742305E12, 150.0], [1.6537423065E12, 25.0], [1.6537423275E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.653742323E12, 31.549999999999994], [1.6537423245E12, 33.999999999999986], [1.6537423215E12, 38.0], [1.6537423185E12, 28.0], [1.6537423395E12, 34.95], [1.65374232E12, 36.0], [1.6537423365E12, 86.74999999999997], [1.6537423155E12, 40.0], [1.653742338E12, 25.799999999999997], [1.653742317E12, 25.0], [1.6537423125E12, 43.0], [1.6537423335E12, 34.8], [1.653742314E12, 35.0], [1.653742335E12, 33.699999999999996], [1.6537423095E12, 23.0], [1.653742332E12, 39.5], [1.653742311E12, 37.0], [1.653742308E12, 20.0], [1.653742329E12, 37.65], [1.6537423305E12, 35.19999999999999], [1.653742326E12, 40.39999999999998], [1.653742305E12, 150.0], [1.6537423065E12, 25.0], [1.6537423275E12, 34.25]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.653742323E12, 16.0], [1.6537423245E12, 16.0], [1.6537423215E12, 17.0], [1.6537423185E12, 16.0], [1.6537423395E12, 16.0], [1.65374232E12, 17.0], [1.6537423365E12, 15.0], [1.6537423155E12, 17.0], [1.653742338E12, 16.0], [1.653742317E12, 16.0], [1.6537423125E12, 19.0], [1.6537423335E12, 16.0], [1.653742314E12, 17.0], [1.653742335E12, 15.0], [1.6537423095E12, 18.0], [1.653742332E12, 15.0], [1.653742311E12, 19.0], [1.653742308E12, 17.0], [1.653742329E12, 16.0], [1.6537423305E12, 16.0], [1.653742326E12, 16.0], [1.653742305E12, 18.0], [1.6537423065E12, 18.0], [1.6537423275E12, 16.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.653742323E12, 17.0], [1.6537423245E12, 18.0], [1.6537423215E12, 19.0], [1.6537423185E12, 18.0], [1.6537423395E12, 17.5], [1.65374232E12, 19.0], [1.6537423365E12, 18.0], [1.6537423155E12, 19.0], [1.653742338E12, 17.0], [1.653742317E12, 19.0], [1.6537423125E12, 24.0], [1.6537423335E12, 17.0], [1.653742314E12, 21.0], [1.653742335E12, 18.0], [1.6537423095E12, 19.0], [1.653742332E12, 18.0], [1.653742311E12, 21.5], [1.653742308E12, 19.0], [1.653742329E12, 18.0], [1.6537423305E12, 19.0], [1.653742326E12, 18.0], [1.653742305E12, 84.0], [1.6537423065E12, 18.5], [1.6537423275E12, 17.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6537423395E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 17.0, "minX": 2.0, "maxY": 23.0, "series": [{"data": [[2.0, 18.5], [8.0, 20.0], [9.0, 19.0], [10.0, 18.0], [11.0, 18.0], [3.0, 18.5], [12.0, 19.0], [13.0, 17.0], [14.0, 18.0], [15.0, 18.0], [4.0, 19.5], [16.0, 17.5], [17.0, 18.0], [18.0, 19.0], [19.0, 18.0], [5.0, 20.0], [20.0, 17.0], [6.0, 23.0], [7.0, 19.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 17.0, "minX": 2.0, "maxY": 23.0, "series": [{"data": [[2.0, 18.5], [8.0, 20.0], [9.0, 19.0], [10.0, 18.0], [11.0, 18.0], [3.0, 18.5], [12.0, 19.0], [13.0, 17.0], [14.0, 18.0], [15.0, 18.0], [4.0, 19.5], [16.0, 17.5], [17.0, 18.0], [18.0, 18.5], [19.0, 18.0], [5.0, 20.0], [20.0, 17.0], [6.0, 23.0], [7.0, 19.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.653742305E12, "maxY": 20.666666666666668, "series": [{"data": [[1.653742323E12, 13.333333333333334], [1.6537423245E12, 14.0], [1.6537423215E12, 12.0], [1.6537423185E12, 10.0], [1.6537423395E12, 12.666666666666666], [1.65374232E12, 11.333333333333334], [1.6537423365E12, 19.333333333333332], [1.6537423155E12, 8.0], [1.653742338E12, 20.666666666666668], [1.653742317E12, 9.333333333333334], [1.6537423125E12, 6.0], [1.6537423335E12, 20.0], [1.653742314E12, 7.333333333333333], [1.653742335E12, 20.0], [1.6537423095E12, 4.0], [1.653742332E12, 19.333333333333332], [1.653742311E12, 5.333333333333333], [1.653742308E12, 3.3333333333333335], [1.653742329E12, 17.333333333333332], [1.6537423305E12, 18.666666666666668], [1.653742326E12, 15.333333333333334], [1.653742305E12, 2.0], [1.6537423065E12, 2.0], [1.6537423275E12, 15.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6537423395E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.653742305E12, "maxY": 20.0, "series": [{"data": [[1.653742323E12, 13.333333333333334], [1.6537423245E12, 14.0], [1.6537423215E12, 11.333333333333334], [1.6537423185E12, 10.666666666666666], [1.6537423395E12, 13.333333333333334], [1.65374232E12, 11.333333333333334], [1.6537423365E12, 20.0], [1.6537423155E12, 8.666666666666666], [1.653742338E12, 20.0], [1.653742317E12, 8.666666666666666], [1.6537423125E12, 6.0], [1.6537423335E12, 20.0], [1.653742314E12, 7.333333333333333], [1.653742335E12, 20.0], [1.6537423095E12, 3.3333333333333335], [1.653742332E12, 19.333333333333332], [1.653742311E12, 5.333333333333333], [1.653742308E12, 3.3333333333333335], [1.653742329E12, 17.333333333333332], [1.6537423305E12, 18.0], [1.653742326E12, 15.333333333333334], [1.653742305E12, 1.3333333333333333], [1.6537423065E12, 2.6666666666666665], [1.6537423275E12, 16.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6537423395E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.653742305E12, "maxY": 20.0, "series": [{"data": [[1.653742323E12, 13.333333333333334], [1.6537423245E12, 14.0], [1.6537423215E12, 11.333333333333334], [1.6537423185E12, 10.666666666666666], [1.6537423395E12, 13.333333333333334], [1.65374232E12, 11.333333333333334], [1.6537423365E12, 20.0], [1.6537423155E12, 8.666666666666666], [1.653742338E12, 20.0], [1.653742317E12, 8.666666666666666], [1.6537423125E12, 6.0], [1.6537423335E12, 20.0], [1.653742314E12, 7.333333333333333], [1.653742335E12, 20.0], [1.6537423095E12, 3.3333333333333335], [1.653742332E12, 19.333333333333332], [1.653742311E12, 5.333333333333333], [1.653742308E12, 3.3333333333333335], [1.653742329E12, 17.333333333333332], [1.6537423305E12, 18.0], [1.653742326E12, 15.333333333333334], [1.653742305E12, 1.3333333333333333], [1.6537423065E12, 2.6666666666666665], [1.6537423275E12, 16.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6537423395E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.653742305E12, "maxY": 20.0, "series": [{"data": [[1.653742323E12, 13.333333333333334], [1.6537423245E12, 14.0], [1.6537423215E12, 11.333333333333334], [1.6537423185E12, 10.666666666666666], [1.6537423395E12, 13.333333333333334], [1.65374232E12, 11.333333333333334], [1.6537423365E12, 20.0], [1.6537423155E12, 8.666666666666666], [1.653742338E12, 20.0], [1.653742317E12, 8.666666666666666], [1.6537423125E12, 6.0], [1.6537423335E12, 20.0], [1.653742314E12, 7.333333333333333], [1.653742335E12, 20.0], [1.6537423095E12, 3.3333333333333335], [1.653742332E12, 19.333333333333332], [1.653742311E12, 5.333333333333333], [1.653742308E12, 3.3333333333333335], [1.653742329E12, 17.333333333333332], [1.6537423305E12, 18.0], [1.653742326E12, 15.333333333333334], [1.653742305E12, 1.3333333333333333], [1.6537423065E12, 2.6666666666666665], [1.6537423275E12, 16.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6537423395E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

