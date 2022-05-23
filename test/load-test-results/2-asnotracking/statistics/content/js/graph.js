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
        data: {"result": {"minY": 134.0, "minX": 0.0, "maxY": 3191.0, "series": [{"data": [[0.0, 134.0], [0.1, 134.0], [0.2, 134.0], [0.3, 135.0], [0.4, 135.0], [0.5, 135.0], [0.6, 135.0], [0.7, 136.0], [0.8, 136.0], [0.9, 136.0], [1.0, 136.0], [1.1, 136.0], [1.2, 136.0], [1.3, 136.0], [1.4, 137.0], [1.5, 137.0], [1.6, 137.0], [1.7, 137.0], [1.8, 137.0], [1.9, 138.0], [2.0, 138.0], [2.1, 138.0], [2.2, 138.0], [2.3, 138.0], [2.4, 139.0], [2.5, 139.0], [2.6, 139.0], [2.7, 139.0], [2.8, 139.0], [2.9, 139.0], [3.0, 139.0], [3.1, 140.0], [3.2, 140.0], [3.3, 140.0], [3.4, 140.0], [3.5, 140.0], [3.6, 140.0], [3.7, 140.0], [3.8, 140.0], [3.9, 140.0], [4.0, 140.0], [4.1, 140.0], [4.2, 140.0], [4.3, 140.0], [4.4, 140.0], [4.5, 141.0], [4.6, 141.0], [4.7, 141.0], [4.8, 141.0], [4.9, 141.0], [5.0, 141.0], [5.1, 141.0], [5.2, 141.0], [5.3, 141.0], [5.4, 141.0], [5.5, 141.0], [5.6, 141.0], [5.7, 141.0], [5.8, 141.0], [5.9, 142.0], [6.0, 142.0], [6.1, 142.0], [6.2, 142.0], [6.3, 142.0], [6.4, 142.0], [6.5, 142.0], [6.6, 142.0], [6.7, 142.0], [6.8, 143.0], [6.9, 143.0], [7.0, 143.0], [7.1, 143.0], [7.2, 143.0], [7.3, 143.0], [7.4, 143.0], [7.5, 143.0], [7.6, 143.0], [7.7, 143.0], [7.8, 143.0], [7.9, 143.0], [8.0, 144.0], [8.1, 144.0], [8.2, 144.0], [8.3, 144.0], [8.4, 144.0], [8.5, 144.0], [8.6, 144.0], [8.7, 145.0], [8.8, 145.0], [8.9, 145.0], [9.0, 145.0], [9.1, 146.0], [9.2, 146.0], [9.3, 146.0], [9.4, 147.0], [9.5, 147.0], [9.6, 147.0], [9.7, 147.0], [9.8, 147.0], [9.9, 147.0], [10.0, 147.0], [10.1, 147.0], [10.2, 147.0], [10.3, 148.0], [10.4, 148.0], [10.5, 148.0], [10.6, 148.0], [10.7, 148.0], [10.8, 148.0], [10.9, 148.0], [11.0, 148.0], [11.1, 148.0], [11.2, 149.0], [11.3, 149.0], [11.4, 149.0], [11.5, 149.0], [11.6, 149.0], [11.7, 150.0], [11.8, 150.0], [11.9, 150.0], [12.0, 150.0], [12.1, 150.0], [12.2, 150.0], [12.3, 150.0], [12.4, 150.0], [12.5, 150.0], [12.6, 151.0], [12.7, 151.0], [12.8, 151.0], [12.9, 151.0], [13.0, 151.0], [13.1, 151.0], [13.2, 151.0], [13.3, 152.0], [13.4, 152.0], [13.5, 152.0], [13.6, 152.0], [13.7, 152.0], [13.8, 152.0], [13.9, 152.0], [14.0, 152.0], [14.1, 152.0], [14.2, 153.0], [14.3, 153.0], [14.4, 153.0], [14.5, 153.0], [14.6, 153.0], [14.7, 153.0], [14.8, 153.0], [14.9, 154.0], [15.0, 154.0], [15.1, 154.0], [15.2, 154.0], [15.3, 154.0], [15.4, 154.0], [15.5, 154.0], [15.6, 154.0], [15.7, 154.0], [15.8, 154.0], [15.9, 155.0], [16.0, 155.0], [16.1, 155.0], [16.2, 155.0], [16.3, 156.0], [16.4, 156.0], [16.5, 156.0], [16.6, 157.0], [16.7, 157.0], [16.8, 157.0], [16.9, 157.0], [17.0, 158.0], [17.1, 158.0], [17.2, 158.0], [17.3, 159.0], [17.4, 159.0], [17.5, 159.0], [17.6, 159.0], [17.7, 159.0], [17.8, 159.0], [17.9, 159.0], [18.0, 159.0], [18.1, 159.0], [18.2, 159.0], [18.3, 159.0], [18.4, 160.0], [18.5, 160.0], [18.6, 160.0], [18.7, 160.0], [18.8, 160.0], [18.9, 161.0], [19.0, 161.0], [19.1, 161.0], [19.2, 161.0], [19.3, 161.0], [19.4, 162.0], [19.5, 162.0], [19.6, 164.0], [19.7, 164.0], [19.8, 166.0], [19.9, 166.0], [20.0, 166.0], [20.1, 167.0], [20.2, 167.0], [20.3, 167.0], [20.4, 167.0], [20.5, 167.0], [20.6, 167.0], [20.7, 168.0], [20.8, 168.0], [20.9, 168.0], [21.0, 168.0], [21.1, 168.0], [21.2, 170.0], [21.3, 170.0], [21.4, 171.0], [21.5, 171.0], [21.6, 171.0], [21.7, 175.0], [21.8, 175.0], [21.9, 175.0], [22.0, 175.0], [22.1, 175.0], [22.2, 175.0], [22.3, 175.0], [22.4, 177.0], [22.5, 177.0], [22.6, 179.0], [22.7, 179.0], [22.8, 180.0], [22.9, 180.0], [23.0, 180.0], [23.1, 181.0], [23.2, 181.0], [23.3, 182.0], [23.4, 182.0], [23.5, 184.0], [23.6, 184.0], [23.7, 184.0], [23.8, 185.0], [23.9, 185.0], [24.0, 185.0], [24.1, 185.0], [24.2, 187.0], [24.3, 187.0], [24.4, 187.0], [24.5, 190.0], [24.6, 190.0], [24.7, 190.0], [24.8, 190.0], [24.9, 193.0], [25.0, 193.0], [25.1, 193.0], [25.2, 195.0], [25.3, 195.0], [25.4, 195.0], [25.5, 195.0], [25.6, 196.0], [25.7, 196.0], [25.8, 196.0], [25.9, 196.0], [26.0, 196.0], [26.1, 198.0], [26.2, 198.0], [26.3, 198.0], [26.4, 198.0], [26.5, 198.0], [26.6, 198.0], [26.7, 198.0], [26.8, 198.0], [26.9, 198.0], [27.0, 199.0], [27.1, 199.0], [27.2, 199.0], [27.3, 199.0], [27.4, 199.0], [27.5, 201.0], [27.6, 201.0], [27.7, 203.0], [27.8, 203.0], [27.9, 203.0], [28.0, 205.0], [28.1, 205.0], [28.2, 206.0], [28.3, 206.0], [28.4, 207.0], [28.5, 207.0], [28.6, 207.0], [28.7, 208.0], [28.8, 208.0], [28.9, 209.0], [29.0, 209.0], [29.1, 209.0], [29.2, 209.0], [29.3, 209.0], [29.4, 209.0], [29.5, 209.0], [29.6, 210.0], [29.7, 210.0], [29.8, 211.0], [29.9, 211.0], [30.0, 211.0], [30.1, 212.0], [30.2, 212.0], [30.3, 213.0], [30.4, 213.0], [30.5, 215.0], [30.6, 215.0], [30.7, 215.0], [30.8, 215.0], [30.9, 215.0], [31.0, 216.0], [31.1, 216.0], [31.2, 218.0], [31.3, 218.0], [31.4, 219.0], [31.5, 219.0], [31.6, 219.0], [31.7, 219.0], [31.8, 219.0], [31.9, 220.0], [32.0, 220.0], [32.1, 220.0], [32.2, 220.0], [32.3, 220.0], [32.4, 220.0], [32.5, 220.0], [32.6, 220.0], [32.7, 220.0], [32.8, 220.0], [32.9, 220.0], [33.0, 220.0], [33.1, 220.0], [33.2, 220.0], [33.3, 222.0], [33.4, 222.0], [33.5, 223.0], [33.6, 223.0], [33.7, 223.0], [33.8, 223.0], [33.9, 223.0], [34.0, 225.0], [34.1, 225.0], [34.2, 225.0], [34.3, 225.0], [34.4, 225.0], [34.5, 226.0], [34.6, 226.0], [34.7, 226.0], [34.8, 226.0], [34.9, 228.0], [35.0, 228.0], [35.1, 228.0], [35.2, 228.0], [35.3, 228.0], [35.4, 229.0], [35.5, 229.0], [35.6, 230.0], [35.7, 230.0], [35.8, 230.0], [35.9, 230.0], [36.0, 230.0], [36.1, 232.0], [36.2, 232.0], [36.3, 233.0], [36.4, 233.0], [36.5, 233.0], [36.6, 235.0], [36.7, 235.0], [36.8, 235.0], [36.9, 235.0], [37.0, 238.0], [37.1, 238.0], [37.2, 238.0], [37.3, 242.0], [37.4, 242.0], [37.5, 244.0], [37.6, 244.0], [37.7, 244.0], [37.8, 244.0], [37.9, 244.0], [38.0, 245.0], [38.1, 245.0], [38.2, 246.0], [38.3, 246.0], [38.4, 246.0], [38.5, 246.0], [38.6, 246.0], [38.7, 248.0], [38.8, 248.0], [38.9, 248.0], [39.0, 248.0], [39.1, 250.0], [39.2, 250.0], [39.3, 250.0], [39.4, 251.0], [39.5, 251.0], [39.6, 251.0], [39.7, 251.0], [39.8, 251.0], [39.9, 251.0], [40.0, 251.0], [40.1, 252.0], [40.2, 252.0], [40.3, 253.0], [40.4, 253.0], [40.5, 253.0], [40.6, 253.0], [40.7, 253.0], [40.8, 253.0], [40.9, 253.0], [41.0, 253.0], [41.1, 253.0], [41.2, 255.0], [41.3, 255.0], [41.4, 258.0], [41.5, 258.0], [41.6, 258.0], [41.7, 260.0], [41.8, 260.0], [41.9, 261.0], [42.0, 261.0], [42.1, 261.0], [42.2, 261.0], [42.3, 261.0], [42.4, 261.0], [42.5, 261.0], [42.6, 266.0], [42.7, 266.0], [42.8, 267.0], [42.9, 267.0], [43.0, 267.0], [43.1, 268.0], [43.2, 268.0], [43.3, 270.0], [43.4, 270.0], [43.5, 274.0], [43.6, 274.0], [43.7, 274.0], [43.8, 275.0], [43.9, 275.0], [44.0, 276.0], [44.1, 276.0], [44.2, 276.0], [44.3, 276.0], [44.4, 276.0], [44.5, 277.0], [44.6, 277.0], [44.7, 278.0], [44.8, 278.0], [44.9, 278.0], [45.0, 278.0], [45.1, 278.0], [45.2, 280.0], [45.3, 280.0], [45.4, 289.0], [45.5, 289.0], [45.6, 294.0], [45.7, 294.0], [45.8, 294.0], [45.9, 314.0], [46.0, 314.0], [46.1, 318.0], [46.2, 318.0], [46.3, 326.0], [46.4, 326.0], [46.5, 326.0], [46.6, 329.0], [46.7, 329.0], [46.8, 329.0], [46.9, 329.0], [47.0, 336.0], [47.1, 336.0], [47.2, 336.0], [47.3, 340.0], [47.4, 340.0], [47.5, 345.0], [47.6, 345.0], [47.7, 349.0], [47.8, 349.0], [47.9, 349.0], [48.0, 355.0], [48.1, 355.0], [48.2, 357.0], [48.3, 357.0], [48.4, 369.0], [48.5, 369.0], [48.6, 369.0], [48.7, 373.0], [48.8, 373.0], [48.9, 374.0], [49.0, 374.0], [49.1, 382.0], [49.2, 382.0], [49.3, 382.0], [49.4, 382.0], [49.5, 382.0], [49.6, 384.0], [49.7, 384.0], [49.8, 385.0], [49.9, 385.0], [50.0, 386.0], [50.1, 386.0], [50.2, 386.0], [50.3, 387.0], [50.4, 387.0], [50.5, 389.0], [50.6, 389.0], [50.7, 390.0], [50.8, 390.0], [50.9, 390.0], [51.0, 394.0], [51.1, 394.0], [51.2, 394.0], [51.3, 394.0], [51.4, 396.0], [51.5, 396.0], [51.6, 396.0], [51.7, 397.0], [51.8, 397.0], [51.9, 398.0], [52.0, 398.0], [52.1, 398.0], [52.2, 398.0], [52.3, 398.0], [52.4, 399.0], [52.5, 399.0], [52.6, 401.0], [52.7, 401.0], [52.8, 403.0], [52.9, 403.0], [53.0, 403.0], [53.1, 403.0], [53.2, 403.0], [53.3, 405.0], [53.4, 405.0], [53.5, 407.0], [53.6, 407.0], [53.7, 407.0], [53.8, 410.0], [53.9, 410.0], [54.0, 413.0], [54.1, 413.0], [54.2, 414.0], [54.3, 414.0], [54.4, 414.0], [54.5, 416.0], [54.6, 416.0], [54.7, 417.0], [54.8, 417.0], [54.9, 417.0], [55.0, 417.0], [55.1, 417.0], [55.2, 418.0], [55.3, 418.0], [55.4, 419.0], [55.5, 419.0], [55.6, 421.0], [55.7, 421.0], [55.8, 421.0], [55.9, 421.0], [56.0, 421.0], [56.1, 422.0], [56.2, 422.0], [56.3, 424.0], [56.4, 424.0], [56.5, 424.0], [56.6, 424.0], [56.7, 424.0], [56.8, 427.0], [56.9, 427.0], [57.0, 427.0], [57.1, 427.0], [57.2, 427.0], [57.3, 429.0], [57.4, 429.0], [57.5, 433.0], [57.6, 433.0], [57.7, 434.0], [57.8, 434.0], [57.9, 434.0], [58.0, 446.0], [58.1, 446.0], [58.2, 451.0], [58.3, 451.0], [58.4, 455.0], [58.5, 455.0], [58.6, 455.0], [58.7, 456.0], [58.8, 456.0], [58.9, 459.0], [59.0, 459.0], [59.1, 460.0], [59.2, 460.0], [59.3, 460.0], [59.4, 463.0], [59.5, 463.0], [59.6, 465.0], [59.7, 465.0], [59.8, 473.0], [59.9, 473.0], [60.0, 477.0], [60.1, 477.0], [60.2, 477.0], [60.3, 479.0], [60.4, 479.0], [60.5, 484.0], [60.6, 484.0], [60.7, 496.0], [60.8, 496.0], [60.9, 496.0], [61.0, 503.0], [61.1, 503.0], [61.2, 544.0], [61.3, 544.0], [61.4, 585.0], [61.5, 585.0], [61.6, 585.0], [61.7, 592.0], [61.8, 592.0], [61.9, 626.0], [62.0, 626.0], [62.1, 631.0], [62.2, 631.0], [62.3, 631.0], [62.4, 665.0], [62.5, 665.0], [62.6, 674.0], [62.7, 674.0], [62.8, 719.0], [62.9, 719.0], [63.0, 719.0], [63.1, 737.0], [63.2, 737.0], [63.3, 744.0], [63.4, 744.0], [63.5, 753.0], [63.6, 753.0], [63.7, 753.0], [63.8, 780.0], [63.9, 780.0], [64.0, 803.0], [64.1, 803.0], [64.2, 818.0], [64.3, 818.0], [64.4, 818.0], [64.5, 818.0], [64.6, 818.0], [64.7, 822.0], [64.8, 822.0], [64.9, 833.0], [65.0, 833.0], [65.1, 833.0], [65.2, 836.0], [65.3, 836.0], [65.4, 841.0], [65.5, 841.0], [65.6, 842.0], [65.7, 842.0], [65.8, 842.0], [65.9, 849.0], [66.0, 849.0], [66.1, 852.0], [66.2, 852.0], [66.3, 856.0], [66.4, 856.0], [66.5, 856.0], [66.6, 890.0], [66.7, 890.0], [66.8, 897.0], [66.9, 897.0], [67.0, 903.0], [67.1, 903.0], [67.2, 903.0], [67.3, 903.0], [67.4, 903.0], [67.5, 923.0], [67.6, 923.0], [67.7, 924.0], [67.8, 924.0], [67.9, 924.0], [68.0, 933.0], [68.1, 933.0], [68.2, 947.0], [68.3, 947.0], [68.4, 959.0], [68.5, 959.0], [68.6, 959.0], [68.7, 977.0], [68.8, 977.0], [68.9, 981.0], [69.0, 981.0], [69.1, 983.0], [69.2, 983.0], [69.3, 983.0], [69.4, 983.0], [69.5, 983.0], [69.6, 995.0], [69.7, 995.0], [69.8, 1015.0], [69.9, 1015.0], [70.0, 1048.0], [70.1, 1048.0], [70.2, 1048.0], [70.3, 1089.0], [70.4, 1089.0], [70.5, 1116.0], [70.6, 1116.0], [70.7, 1121.0], [70.8, 1121.0], [70.9, 1121.0], [71.0, 1183.0], [71.1, 1183.0], [71.2, 1197.0], [71.3, 1197.0], [71.4, 1208.0], [71.5, 1208.0], [71.6, 1208.0], [71.7, 1214.0], [71.8, 1214.0], [71.9, 1223.0], [72.0, 1223.0], [72.1, 1258.0], [72.2, 1258.0], [72.3, 1258.0], [72.4, 1287.0], [72.5, 1287.0], [72.6, 1308.0], [72.7, 1308.0], [72.8, 1312.0], [72.9, 1312.0], [73.0, 1312.0], [73.1, 1333.0], [73.2, 1333.0], [73.3, 1337.0], [73.4, 1337.0], [73.5, 1379.0], [73.6, 1379.0], [73.7, 1379.0], [73.8, 1386.0], [73.9, 1386.0], [74.0, 1406.0], [74.1, 1406.0], [74.2, 1413.0], [74.3, 1413.0], [74.4, 1413.0], [74.5, 1415.0], [74.6, 1415.0], [74.7, 1419.0], [74.8, 1419.0], [74.9, 1421.0], [75.0, 1421.0], [75.1, 1421.0], [75.2, 1431.0], [75.3, 1431.0], [75.4, 1446.0], [75.5, 1446.0], [75.6, 1523.0], [75.7, 1523.0], [75.8, 1523.0], [75.9, 1525.0], [76.0, 1525.0], [76.1, 1537.0], [76.2, 1537.0], [76.3, 1545.0], [76.4, 1545.0], [76.5, 1545.0], [76.6, 1549.0], [76.7, 1549.0], [76.8, 1605.0], [76.9, 1605.0], [77.0, 1611.0], [77.1, 1611.0], [77.2, 1611.0], [77.3, 1628.0], [77.4, 1628.0], [77.5, 1645.0], [77.6, 1645.0], [77.7, 1658.0], [77.8, 1658.0], [77.9, 1658.0], [78.0, 1676.0], [78.1, 1676.0], [78.2, 1695.0], [78.3, 1695.0], [78.4, 1697.0], [78.5, 1697.0], [78.6, 1697.0], [78.7, 1721.0], [78.8, 1721.0], [78.9, 1729.0], [79.0, 1729.0], [79.1, 1742.0], [79.2, 1742.0], [79.3, 1742.0], [79.4, 1749.0], [79.5, 1749.0], [79.6, 1760.0], [79.7, 1760.0], [79.8, 1791.0], [79.9, 1791.0], [80.0, 1791.0], [80.1, 1791.0], [80.2, 1791.0], [80.3, 1798.0], [80.4, 1798.0], [80.5, 1802.0], [80.6, 1802.0], [80.7, 1805.0], [80.8, 1805.0], [80.9, 1805.0], [81.0, 1807.0], [81.1, 1807.0], [81.2, 1826.0], [81.3, 1826.0], [81.4, 1835.0], [81.5, 1835.0], [81.6, 1835.0], [81.7, 1842.0], [81.8, 1842.0], [81.9, 1846.0], [82.0, 1846.0], [82.1, 1855.0], [82.2, 1855.0], [82.3, 1855.0], [82.4, 1869.0], [82.5, 1869.0], [82.6, 1878.0], [82.7, 1878.0], [82.8, 1891.0], [82.9, 1891.0], [83.0, 1891.0], [83.1, 1892.0], [83.2, 1892.0], [83.3, 1897.0], [83.4, 1897.0], [83.5, 1914.0], [83.6, 1914.0], [83.7, 1914.0], [83.8, 1930.0], [83.9, 1930.0], [84.0, 1934.0], [84.1, 1934.0], [84.2, 1934.0], [84.3, 1934.0], [84.4, 1934.0], [84.5, 1949.0], [84.6, 1949.0], [84.7, 1952.0], [84.8, 1952.0], [84.9, 1972.0], [85.0, 1972.0], [85.1, 1972.0], [85.2, 1972.0], [85.3, 1972.0], [85.4, 1990.0], [85.5, 1990.0], [85.6, 1993.0], [85.7, 1993.0], [85.8, 1993.0], [85.9, 1994.0], [86.0, 1994.0], [86.1, 1994.0], [86.2, 1994.0], [86.3, 1999.0], [86.4, 1999.0], [86.5, 1999.0], [86.6, 2000.0], [86.7, 2000.0], [86.8, 2009.0], [86.9, 2009.0], [87.0, 2011.0], [87.1, 2011.0], [87.2, 2011.0], [87.3, 2012.0], [87.4, 2012.0], [87.5, 2018.0], [87.6, 2018.0], [87.7, 2028.0], [87.8, 2028.0], [87.9, 2028.0], [88.0, 2030.0], [88.1, 2030.0], [88.2, 2052.0], [88.3, 2052.0], [88.4, 2057.0], [88.5, 2057.0], [88.6, 2057.0], [88.7, 2119.0], [88.8, 2119.0], [88.9, 2121.0], [89.0, 2121.0], [89.1, 2125.0], [89.2, 2125.0], [89.3, 2125.0], [89.4, 2132.0], [89.5, 2132.0], [89.6, 2155.0], [89.7, 2155.0], [89.8, 2159.0], [89.9, 2159.0], [90.0, 2159.0], [90.1, 2170.0], [90.2, 2170.0], [90.3, 2190.0], [90.4, 2190.0], [90.5, 2198.0], [90.6, 2198.0], [90.7, 2199.0], [90.8, 2199.0], [90.9, 2199.0], [91.0, 2234.0], [91.1, 2234.0], [91.2, 2240.0], [91.3, 2240.0], [91.4, 2242.0], [91.5, 2242.0], [91.6, 2242.0], [91.7, 2271.0], [91.8, 2271.0], [91.9, 2281.0], [92.0, 2281.0], [92.1, 2291.0], [92.2, 2291.0], [92.3, 2291.0], [92.4, 2304.0], [92.5, 2304.0], [92.6, 2315.0], [92.7, 2315.0], [92.8, 2323.0], [92.9, 2323.0], [93.0, 2323.0], [93.1, 2328.0], [93.2, 2328.0], [93.3, 2330.0], [93.4, 2330.0], [93.5, 2333.0], [93.6, 2333.0], [93.7, 2333.0], [93.8, 2338.0], [93.9, 2338.0], [94.0, 2341.0], [94.1, 2341.0], [94.2, 2371.0], [94.3, 2371.0], [94.4, 2371.0], [94.5, 2375.0], [94.6, 2375.0], [94.7, 2376.0], [94.8, 2376.0], [94.9, 2398.0], [95.0, 2398.0], [95.1, 2398.0], [95.2, 2417.0], [95.3, 2417.0], [95.4, 2419.0], [95.5, 2419.0], [95.6, 2448.0], [95.7, 2448.0], [95.8, 2448.0], [95.9, 2450.0], [96.0, 2450.0], [96.1, 2500.0], [96.2, 2500.0], [96.3, 2519.0], [96.4, 2519.0], [96.5, 2519.0], [96.6, 2525.0], [96.7, 2525.0], [96.8, 2533.0], [96.9, 2533.0], [97.0, 2538.0], [97.1, 2538.0], [97.2, 2538.0], [97.3, 2545.0], [97.4, 2545.0], [97.5, 2566.0], [97.6, 2566.0], [97.7, 2662.0], [97.8, 2662.0], [97.9, 2662.0], [98.0, 2782.0], [98.1, 2782.0], [98.2, 2871.0], [98.3, 2871.0], [98.4, 2928.0], [98.5, 2928.0], [98.6, 2928.0], [98.7, 2937.0], [98.8, 2937.0], [98.9, 2998.0], [99.0, 2998.0], [99.1, 3011.0], [99.2, 3011.0], [99.3, 3011.0], [99.4, 3014.0], [99.5, 3014.0], [99.6, 3129.0], [99.7, 3129.0], [99.8, 3191.0], [99.9, 3191.0], [100.0, 3191.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 118.0, "series": [{"data": [[600.0, 4.0], [700.0, 5.0], [800.0, 13.0], [900.0, 12.0], [1000.0, 3.0], [1100.0, 4.0], [1200.0, 5.0], [1300.0, 6.0], [1400.0, 7.0], [1500.0, 5.0], [100.0, 118.0], [1600.0, 8.0], [1700.0, 8.0], [1800.0, 13.0], [1900.0, 13.0], [2000.0, 9.0], [2100.0, 10.0], [2300.0, 12.0], [2200.0, 6.0], [2400.0, 4.0], [2500.0, 7.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 79.0], [300.0, 29.0], [400.0, 36.0], [500.0, 4.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 63.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 262.0, "series": [{"data": [[0.0, 262.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 63.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 105.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.653323538E12, "maxY": 1.0, "series": [{"data": [[1.653323538E12, 1.0], [1.6533235575E12, 1.0], [1.653323541E12, 1.0], [1.6533235605E12, 1.0], [1.6533235545E12, 1.0], [1.653323574E12, 1.0], [1.6533235485E12, 1.0], [1.6533235515E12, 1.0], [1.653323571E12, 1.0], [1.653323565E12, 1.0], [1.6533235425E12, 1.0], [1.653323568E12, 1.0], [1.6533235455E12, 1.0], [1.653323559E12, 1.0], [1.653323562E12, 1.0], [1.6533235395E12, 1.0], [1.6533235755E12, 1.0], [1.653323553E12, 1.0], [1.653323556E12, 1.0], [1.6533235695E12, 1.0], [1.653323547E12, 1.0], [1.6533235725E12, 1.0], [1.65332355E12, 1.0], [1.653323544E12, 1.0], [1.6533235635E12, 1.0], [1.6533235665E12, 1.0]], "isOverall": false, "label": "parallel bzm - Parallel", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6533235755E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 180.78688524590152, "minX": 1.0, "maxY": 2937.0, "series": [{"data": [[2.0, 180.78688524590152], [33.0, 1866.8333333333333], [32.0, 2128.6666666666665], [35.0, 1825.75], [34.0, 1938.0], [36.0, 2001.4285714285716], [37.0, 2018.25], [39.0, 1994.25], [38.0, 2313.0], [40.0, 2004.5], [41.0, 1953.8461538461538], [42.0, 2095.6666666666665], [43.0, 2242.0], [45.0, 2304.0], [44.0, 2662.0], [47.0, 2309.5], [46.0, 2450.0], [3.0, 248.02325581395348], [49.0, 2240.0], [48.0, 2937.0], [4.0, 273.8837209302326], [5.0, 349.25000000000006], [6.0, 596.5714285714287], [7.0, 508.5454545454546], [8.0, 526.0625], [9.0, 631.8888888888889], [10.0, 724.7777777777778], [11.0, 705.2], [12.0, 851.6666666666666], [13.0, 705.2857142857142], [14.0, 995.5], [15.0, 1442.0], [1.0, 205.02857142857144], [16.0, 1108.8], [17.0, 1085.5714285714287], [18.0, 1545.0], [19.0, 1274.3333333333335], [21.0, 1596.0], [22.0, 1258.5714285714287], [23.0, 1550.1666666666665], [24.0, 1997.0], [25.0, 1406.0], [26.0, 1702.0], [27.0, 1406.0], [28.0, 1713.3333333333335], [29.0, 1501.625], [30.0, 1449.4], [31.0, 2044.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}, {"data": [[13.379069767441852, 813.2279069767441]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 49.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 90.0, "minX": 1.653323538E12, "maxY": 210107.33333333334, "series": [{"data": [[1.653323538E12, 5730.0], [1.6533235575E12, 149417.33333333334], [1.653323541E12, 17950.0], [1.6533235605E12, 169850.0], [1.6533235545E12, 115396.66666666667], [1.653323574E12, 210107.33333333334], [1.6533235485E12, 81528.0], [1.6533235515E12, 101910.0], [1.653323571E12, 149265.33333333334], [1.653323565E12, 156008.66666666666], [1.6533235425E12, 37268.0], [1.653323568E12, 128883.33333333333], [1.6533235455E12, 61095.333333333336], [1.653323559E12, 129086.0], [1.653323562E12, 149468.0], [1.6533235395E12, 17494.0], [1.6533235755E12, 122038.66666666667], [1.653323553E12, 101910.0], [1.653323556E12, 122342.66666666667], [1.6533235695E12, 169444.66666666666], [1.653323547E12, 61095.333333333336], [1.6533235725E12, 162802.66666666666], [1.65332355E12, 88322.0], [1.653323544E12, 45784.666666666664], [1.6533235635E12, 169698.0], [1.6533235665E12, 183387.33333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.653323538E12, 90.0], [1.6533235575E12, 1980.0], [1.653323541E12, 270.0], [1.6533235605E12, 2250.0], [1.6533235545E12, 1530.0], [1.653323574E12, 2790.0], [1.6533235485E12, 1080.0], [1.6533235515E12, 1350.0], [1.653323571E12, 1980.0], [1.653323565E12, 2070.0], [1.6533235425E12, 540.0], [1.653323568E12, 1710.0], [1.6533235455E12, 810.0], [1.653323559E12, 1710.0], [1.653323562E12, 1980.0], [1.6533235395E12, 270.0], [1.6533235755E12, 1620.0], [1.653323553E12, 1350.0], [1.653323556E12, 1620.0], [1.6533235695E12, 2250.0], [1.653323547E12, 810.0], [1.6533235725E12, 2160.0], [1.65332355E12, 1170.0], [1.653323544E12, 630.0], [1.6533235635E12, 2250.0], [1.6533235665E12, 2430.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6533235755E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 142.77777777777774, "minX": 1.653323538E12, "maxY": 2427.0967741935488, "series": [{"data": [[1.653323538E12, 211.0], [1.6533235575E12, 218.45454545454547], [1.653323541E12, 145.66666666666666], [1.6533235605E12, 313.4], [1.6533235545E12, 230.35294117647055], [1.653323574E12, 2427.0967741935488], [1.6533235485E12, 148.66666666666666], [1.6533235515E12, 151.4], [1.653323571E12, 1855.6363636363637], [1.653323565E12, 576.6521739130434], [1.6533235425E12, 147.66666666666666], [1.653323568E12, 1082.8421052631577], [1.6533235455E12, 143.22222222222223], [1.653323559E12, 229.78947368421052], [1.653323562E12, 270.13636363636357], [1.6533235395E12, 171.0], [1.6533235755E12, 2186.1111111111104], [1.653323553E12, 149.99999999999997], [1.653323556E12, 191.16666666666663], [1.6533235695E12, 1485.7599999999995], [1.653323547E12, 142.77777777777774], [1.6533235725E12, 2054.166666666667], [1.65332355E12, 151.9230769230769], [1.653323544E12, 151.85714285714286], [1.6533235635E12, 415.71999999999997], [1.6533235665E12, 715.8888888888889]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6533235755E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 142.77777777777774, "minX": 1.653323538E12, "maxY": 2426.9032258064517, "series": [{"data": [[1.653323538E12, 204.0], [1.6533235575E12, 218.40909090909088], [1.653323541E12, 145.66666666666666], [1.6533235605E12, 313.3200000000001], [1.6533235545E12, 230.35294117647055], [1.653323574E12, 2426.9032258064517], [1.6533235485E12, 148.5], [1.6533235515E12, 151.33333333333334], [1.653323571E12, 1855.409090909091], [1.653323565E12, 576.5652173913044], [1.6533235425E12, 147.66666666666666], [1.653323568E12, 1082.7894736842104], [1.6533235455E12, 143.22222222222223], [1.653323559E12, 229.73684210526318], [1.653323562E12, 269.95454545454544], [1.6533235395E12, 170.66666666666666], [1.6533235755E12, 2186.1111111111104], [1.653323553E12, 149.93333333333337], [1.653323556E12, 191.1111111111111], [1.6533235695E12, 1485.6400000000003], [1.653323547E12, 142.77777777777774], [1.6533235725E12, 2053.9999999999995], [1.65332355E12, 151.84615384615384], [1.653323544E12, 151.71428571428572], [1.6533235635E12, 415.40000000000003], [1.6533235665E12, 715.4814814814813]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6533235755E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.799999999999999, "minX": 1.653323538E12, "maxY": 43.0, "series": [{"data": [[1.653323538E12, 43.0], [1.6533235575E12, 14.5], [1.653323541E12, 13.666666666666666], [1.6533235605E12, 19.199999999999996], [1.6533235545E12, 15.941176470588236], [1.653323574E12, 27.516129032258064], [1.6533235485E12, 11.75], [1.6533235515E12, 10.799999999999999], [1.653323571E12, 24.863636363636363], [1.653323565E12, 31.000000000000004], [1.6533235425E12, 16.666666666666664], [1.653323568E12, 38.63157894736842], [1.6533235455E12, 12.88888888888889], [1.653323559E12, 15.526315789473685], [1.653323562E12, 18.545454545454543], [1.6533235395E12, 21.333333333333332], [1.6533235755E12, 33.5], [1.653323553E12, 11.599999999999996], [1.653323556E12, 14.055555555555554], [1.6533235695E12, 36.27999999999999], [1.653323547E12, 11.777777777777779], [1.6533235725E12, 27.541666666666664], [1.65332355E12, 11.692307692307693], [1.653323544E12, 14.428571428571429], [1.6533235635E12, 27.599999999999998], [1.6533235665E12, 28.81481481481481]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6533235755E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 134.0, "minX": 1.653323538E12, "maxY": 3191.0, "series": [{"data": [[1.653323538E12, 211.0], [1.6533235575E12, 275.0], [1.653323541E12, 150.0], [1.6533235605E12, 421.0], [1.6533235545E12, 357.0], [1.653323574E12, 3191.0], [1.6533235485E12, 159.0], [1.6533235515E12, 167.0], [1.653323571E12, 2519.0], [1.653323565E12, 995.0], [1.6533235425E12, 157.0], [1.653323568E12, 1611.0], [1.6533235455E12, 175.0], [1.653323559E12, 268.0], [1.653323562E12, 398.0], [1.6533235395E12, 185.0], [1.6533235755E12, 2782.0], [1.653323553E12, 164.0], [1.653323556E12, 220.0], [1.6533235695E12, 2333.0], [1.653323547E12, 160.0], [1.6533235725E12, 2419.0], [1.65332355E12, 175.0], [1.653323544E12, 177.0], [1.6533235635E12, 631.0], [1.6533235665E12, 1048.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.653323538E12, 211.0], [1.6533235575E12, 247.1], [1.653323541E12, 150.0], [1.6533235605E12, 398.8], [1.6533235545E12, 343.4], [1.653323574E12, 3013.4], [1.6533235485E12, 158.7], [1.6533235515E12, 166.4], [1.653323571E12, 2240.2], [1.653323565E12, 979.4], [1.6533235425E12, 157.0], [1.653323568E12, 1431.0], [1.6533235455E12, 175.0], [1.653323559E12, 266.0], [1.653323562E12, 364.8], [1.6533235395E12, 185.0], [1.6533235755E12, 2587.6000000000004], [1.653323553E12, 162.2], [1.653323556E12, 220.0], [1.6533235695E12, 1959.6000000000001], [1.653323547E12, 160.0], [1.6533235725E12, 2354.0], [1.65332355E12, 169.4], [1.653323544E12, 177.0], [1.6533235635E12, 438.6000000000001], [1.6533235665E12, 960.5999999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.653323538E12, 211.0], [1.6533235575E12, 275.0], [1.653323541E12, 150.0], [1.6533235605E12, 421.0], [1.6533235545E12, 357.0], [1.653323574E12, 3191.0], [1.6533235485E12, 159.0], [1.6533235515E12, 167.0], [1.653323571E12, 2519.0], [1.653323565E12, 995.0], [1.6533235425E12, 157.0], [1.653323568E12, 1611.0], [1.6533235455E12, 175.0], [1.653323559E12, 268.0], [1.653323562E12, 398.0], [1.6533235395E12, 185.0], [1.6533235755E12, 2782.0], [1.653323553E12, 164.0], [1.653323556E12, 220.0], [1.6533235695E12, 2333.0], [1.653323547E12, 160.0], [1.6533235725E12, 2419.0], [1.65332355E12, 175.0], [1.653323544E12, 177.0], [1.6533235635E12, 631.0], [1.6533235665E12, 1048.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.653323538E12, 211.0], [1.6533235575E12, 271.4], [1.653323541E12, 150.0], [1.6533235605E12, 415.59999999999997], [1.6533235545E12, 357.0], [1.653323574E12, 3153.7999999999997], [1.6533235485E12, 159.0], [1.6533235515E12, 167.0], [1.653323571E12, 2491.8499999999995], [1.653323565E12, 992.1999999999999], [1.6533235425E12, 157.0], [1.653323568E12, 1611.0], [1.6533235455E12, 175.0], [1.653323559E12, 268.0], [1.653323562E12, 393.6499999999999], [1.6533235395E12, 185.0], [1.6533235755E12, 2782.0], [1.653323553E12, 164.0], [1.653323556E12, 220.0], [1.6533235695E12, 2241.5], [1.653323547E12, 160.0], [1.6533235725E12, 2418.5], [1.65332355E12, 175.0], [1.653323544E12, 177.0], [1.6533235635E12, 578.4999999999999], [1.6533235665E12, 1034.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.653323538E12, 211.0], [1.6533235575E12, 190.0], [1.653323541E12, 143.0], [1.6533235605E12, 242.0], [1.6533235545E12, 167.0], [1.653323574E12, 1406.0], [1.6533235485E12, 139.0], [1.6533235515E12, 140.0], [1.653323571E12, 1446.0], [1.653323565E12, 401.0], [1.6533235425E12, 136.0], [1.653323568E12, 585.0], [1.6533235455E12, 134.0], [1.653323559E12, 198.0], [1.653323562E12, 222.0], [1.6533235395E12, 157.0], [1.6533235755E12, 1545.0], [1.653323553E12, 140.0], [1.653323556E12, 162.0], [1.6533235695E12, 903.0], [1.653323547E12, 135.0], [1.6533235725E12, 1676.0], [1.65332355E12, 139.0], [1.653323544E12, 135.0], [1.6533235635E12, 382.0], [1.6533235665E12, 382.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.653323538E12, 211.0], [1.6533235575E12, 217.5], [1.653323541E12, 144.0], [1.6533235605E12, 318.0], [1.6533235545E12, 208.0], [1.653323574E12, 2330.0], [1.6533235485E12, 148.5], [1.6533235515E12, 150.0], [1.653323571E12, 1823.5], [1.653323565E12, 473.0], [1.6533235425E12, 149.0], [1.653323568E12, 983.0], [1.6533235455E12, 139.0], [1.653323559E12, 225.0], [1.653323562E12, 257.5], [1.6533235395E12, 171.0], [1.6533235755E12, 2151.0], [1.653323553E12, 148.0], [1.653323556E12, 192.5], [1.6533235695E12, 1415.0], [1.653323547E12, 140.0], [1.6533235725E12, 2037.5], [1.65332355E12, 154.0], [1.653323544E12, 152.0], [1.6533235635E12, 407.0], [1.6533235665E12, 780.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6533235755E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 138.5, "minX": 2.0, "maxY": 2322.5, "series": [{"data": [[2.0, 164.0], [8.0, 148.5], [34.0, 2322.5], [10.0, 152.0], [3.0, 150.0], [12.0, 215.0], [13.0, 326.0], [14.0, 983.0], [15.0, 473.0], [4.0, 152.5], [16.0, 363.0], [17.0, 876.0], [18.0, 276.5], [19.0, 1372.0], [6.0, 138.5], [7.0, 149.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 138.5, "minX": 2.0, "maxY": 2322.5, "series": [{"data": [[2.0, 164.0], [8.0, 148.5], [34.0, 2322.5], [10.0, 151.5], [3.0, 150.0], [12.0, 215.0], [13.0, 326.0], [14.0, 983.0], [15.0, 472.0], [4.0, 152.5], [16.0, 363.0], [17.0, 874.0], [18.0, 276.5], [19.0, 1371.5], [6.0, 138.5], [7.0, 149.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.653323538E12, "maxY": 20.666666666666668, "series": [{"data": [[1.653323538E12, 0.6666666666666666], [1.6533235575E12, 13.333333333333334], [1.653323541E12, 2.6666666666666665], [1.6533235605E12, 16.0], [1.6533235545E12, 12.0], [1.653323574E12, 1.3333333333333333], [1.6533235485E12, 7.333333333333333], [1.6533235515E12, 10.0], [1.653323571E12, 20.0], [1.653323565E12, 18.0], [1.6533235425E12, 4.0], [1.653323568E12, 20.0], [1.6533235455E12, 6.0], [1.653323559E12, 14.666666666666666], [1.653323562E12, 16.666666666666668], [1.6533235395E12, 2.0], [1.653323553E12, 10.666666666666666], [1.653323556E12, 12.666666666666666], [1.6533235695E12, 20.0], [1.653323547E12, 6.666666666666667], [1.6533235725E12, 20.0], [1.65332355E12, 8.666666666666666], [1.653323544E12, 4.666666666666667], [1.6533235635E12, 18.0], [1.6533235665E12, 20.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653323574E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.653323538E12, "maxY": 20.666666666666668, "series": [{"data": [[1.653323538E12, 0.6666666666666666], [1.6533235575E12, 14.666666666666666], [1.653323541E12, 2.0], [1.6533235605E12, 16.666666666666668], [1.6533235545E12, 11.333333333333334], [1.653323574E12, 20.666666666666668], [1.6533235485E12, 8.0], [1.6533235515E12, 10.0], [1.653323571E12, 14.666666666666666], [1.653323565E12, 15.333333333333334], [1.6533235425E12, 4.0], [1.653323568E12, 12.666666666666666], [1.6533235455E12, 6.0], [1.653323559E12, 12.666666666666666], [1.653323562E12, 14.666666666666666], [1.6533235395E12, 2.0], [1.6533235755E12, 12.0], [1.653323553E12, 10.0], [1.653323556E12, 12.0], [1.6533235695E12, 16.666666666666668], [1.653323547E12, 6.0], [1.6533235725E12, 16.0], [1.65332355E12, 8.666666666666666], [1.653323544E12, 4.666666666666667], [1.6533235635E12, 16.666666666666668], [1.6533235665E12, 18.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6533235755E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.653323538E12, "maxY": 20.666666666666668, "series": [{"data": [[1.653323538E12, 0.6666666666666666], [1.6533235575E12, 14.666666666666666], [1.653323541E12, 2.0], [1.6533235605E12, 16.666666666666668], [1.6533235545E12, 11.333333333333334], [1.653323574E12, 20.666666666666668], [1.6533235485E12, 8.0], [1.6533235515E12, 10.0], [1.653323571E12, 14.666666666666666], [1.653323565E12, 15.333333333333334], [1.6533235425E12, 4.0], [1.653323568E12, 12.666666666666666], [1.6533235455E12, 6.0], [1.653323559E12, 12.666666666666666], [1.653323562E12, 14.666666666666666], [1.6533235395E12, 2.0], [1.6533235755E12, 12.0], [1.653323553E12, 10.0], [1.653323556E12, 12.0], [1.6533235695E12, 16.666666666666668], [1.653323547E12, 6.0], [1.6533235725E12, 16.0], [1.65332355E12, 8.666666666666666], [1.653323544E12, 4.666666666666667], [1.6533235635E12, 16.666666666666668], [1.6533235665E12, 18.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6533235755E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.653323538E12, "maxY": 20.666666666666668, "series": [{"data": [[1.653323538E12, 0.6666666666666666], [1.6533235575E12, 14.666666666666666], [1.653323541E12, 2.0], [1.6533235605E12, 16.666666666666668], [1.6533235545E12, 11.333333333333334], [1.653323574E12, 20.666666666666668], [1.6533235485E12, 8.0], [1.6533235515E12, 10.0], [1.653323571E12, 14.666666666666666], [1.653323565E12, 15.333333333333334], [1.6533235425E12, 4.0], [1.653323568E12, 12.666666666666666], [1.6533235455E12, 6.0], [1.653323559E12, 12.666666666666666], [1.653323562E12, 14.666666666666666], [1.6533235395E12, 2.0], [1.6533235755E12, 12.0], [1.653323553E12, 10.0], [1.653323556E12, 12.0], [1.6533235695E12, 16.666666666666668], [1.653323547E12, 6.0], [1.6533235725E12, 16.0], [1.65332355E12, 8.666666666666666], [1.653323544E12, 4.666666666666667], [1.6533235635E12, 16.666666666666668], [1.6533235665E12, 18.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6533235755E12, "title": "Total Transactions Per Second"}},
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

