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
        data: {"result": {"minY": 130.0, "minX": 0.0, "maxY": 1285.0, "series": [{"data": [[0.0, 130.0], [0.1, 130.0], [0.2, 130.0], [0.3, 132.0], [0.4, 132.0], [0.5, 132.0], [0.6, 132.0], [0.7, 132.0], [0.8, 132.0], [0.9, 132.0], [1.0, 132.0], [1.1, 132.0], [1.2, 132.0], [1.3, 132.0], [1.4, 132.0], [1.5, 132.0], [1.6, 132.0], [1.7, 132.0], [1.8, 132.0], [1.9, 133.0], [2.0, 133.0], [2.1, 133.0], [2.2, 133.0], [2.3, 133.0], [2.4, 133.0], [2.5, 133.0], [2.6, 133.0], [2.7, 133.0], [2.8, 133.0], [2.9, 133.0], [3.0, 133.0], [3.1, 133.0], [3.2, 133.0], [3.3, 133.0], [3.4, 133.0], [3.5, 134.0], [3.6, 134.0], [3.7, 134.0], [3.8, 134.0], [3.9, 134.0], [4.0, 134.0], [4.1, 134.0], [4.2, 134.0], [4.3, 134.0], [4.4, 134.0], [4.5, 134.0], [4.6, 134.0], [4.7, 134.0], [4.8, 134.0], [4.9, 134.0], [5.0, 134.0], [5.1, 134.0], [5.2, 134.0], [5.3, 134.0], [5.4, 135.0], [5.5, 135.0], [5.6, 135.0], [5.7, 135.0], [5.8, 135.0], [5.9, 135.0], [6.0, 135.0], [6.1, 135.0], [6.2, 135.0], [6.3, 135.0], [6.4, 135.0], [6.5, 135.0], [6.6, 135.0], [6.7, 135.0], [6.8, 135.0], [6.9, 135.0], [7.0, 136.0], [7.1, 136.0], [7.2, 136.0], [7.3, 136.0], [7.4, 136.0], [7.5, 136.0], [7.6, 136.0], [7.7, 136.0], [7.8, 136.0], [7.9, 136.0], [8.0, 136.0], [8.1, 136.0], [8.2, 136.0], [8.3, 136.0], [8.4, 136.0], [8.5, 136.0], [8.6, 136.0], [8.7, 136.0], [8.8, 136.0], [8.9, 136.0], [9.0, 136.0], [9.1, 136.0], [9.2, 136.0], [9.3, 136.0], [9.4, 136.0], [9.5, 136.0], [9.6, 136.0], [9.7, 136.0], [9.8, 136.0], [9.9, 136.0], [10.0, 137.0], [10.1, 137.0], [10.2, 137.0], [10.3, 137.0], [10.4, 137.0], [10.5, 137.0], [10.6, 137.0], [10.7, 137.0], [10.8, 137.0], [10.9, 137.0], [11.0, 137.0], [11.1, 137.0], [11.2, 137.0], [11.3, 137.0], [11.4, 137.0], [11.5, 137.0], [11.6, 137.0], [11.7, 137.0], [11.8, 137.0], [11.9, 138.0], [12.0, 138.0], [12.1, 138.0], [12.2, 138.0], [12.3, 138.0], [12.4, 139.0], [12.5, 139.0], [12.6, 139.0], [12.7, 139.0], [12.8, 139.0], [12.9, 139.0], [13.0, 139.0], [13.1, 140.0], [13.2, 140.0], [13.3, 140.0], [13.4, 140.0], [13.5, 140.0], [13.6, 140.0], [13.7, 140.0], [13.8, 140.0], [13.9, 140.0], [14.0, 140.0], [14.1, 140.0], [14.2, 140.0], [14.3, 140.0], [14.4, 140.0], [14.5, 140.0], [14.6, 140.0], [14.7, 141.0], [14.8, 141.0], [14.9, 141.0], [15.0, 141.0], [15.1, 141.0], [15.2, 141.0], [15.3, 141.0], [15.4, 141.0], [15.5, 141.0], [15.6, 142.0], [15.7, 142.0], [15.8, 142.0], [15.9, 142.0], [16.0, 142.0], [16.1, 142.0], [16.2, 142.0], [16.3, 143.0], [16.4, 143.0], [16.5, 143.0], [16.6, 143.0], [16.7, 143.0], [16.8, 143.0], [16.9, 143.0], [17.0, 143.0], [17.1, 143.0], [17.2, 143.0], [17.3, 143.0], [17.4, 143.0], [17.5, 144.0], [17.6, 144.0], [17.7, 144.0], [17.8, 144.0], [17.9, 144.0], [18.0, 144.0], [18.1, 144.0], [18.2, 144.0], [18.3, 144.0], [18.4, 144.0], [18.5, 144.0], [18.6, 144.0], [18.7, 144.0], [18.8, 144.0], [18.9, 144.0], [19.0, 144.0], [19.1, 145.0], [19.2, 145.0], [19.3, 145.0], [19.4, 145.0], [19.5, 145.0], [19.6, 145.0], [19.7, 145.0], [19.8, 145.0], [19.9, 145.0], [20.0, 145.0], [20.1, 145.0], [20.2, 145.0], [20.3, 145.0], [20.4, 145.0], [20.5, 145.0], [20.6, 145.0], [20.7, 146.0], [20.8, 146.0], [20.9, 146.0], [21.0, 146.0], [21.1, 146.0], [21.2, 146.0], [21.3, 146.0], [21.4, 146.0], [21.5, 146.0], [21.6, 146.0], [21.7, 146.0], [21.8, 146.0], [21.9, 146.0], [22.0, 146.0], [22.1, 146.0], [22.2, 146.0], [22.3, 146.0], [22.4, 146.0], [22.5, 146.0], [22.6, 147.0], [22.7, 147.0], [22.8, 147.0], [22.9, 147.0], [23.0, 147.0], [23.1, 147.0], [23.2, 147.0], [23.3, 148.0], [23.4, 148.0], [23.5, 148.0], [23.6, 148.0], [23.7, 148.0], [23.8, 148.0], [23.9, 148.0], [24.0, 149.0], [24.1, 149.0], [24.2, 149.0], [24.3, 149.0], [24.4, 149.0], [24.5, 149.0], [24.6, 149.0], [24.7, 149.0], [24.8, 149.0], [24.9, 149.0], [25.0, 149.0], [25.1, 149.0], [25.2, 149.0], [25.3, 149.0], [25.4, 149.0], [25.5, 149.0], [25.6, 149.0], [25.7, 149.0], [25.8, 149.0], [25.9, 150.0], [26.0, 150.0], [26.1, 150.0], [26.2, 150.0], [26.3, 150.0], [26.4, 150.0], [26.5, 150.0], [26.6, 151.0], [26.7, 151.0], [26.8, 151.0], [26.9, 151.0], [27.0, 151.0], [27.1, 151.0], [27.2, 151.0], [27.3, 151.0], [27.4, 151.0], [27.5, 151.0], [27.6, 151.0], [27.7, 151.0], [27.8, 151.0], [27.9, 151.0], [28.0, 151.0], [28.1, 151.0], [28.2, 151.0], [28.3, 151.0], [28.4, 151.0], [28.5, 151.0], [28.6, 151.0], [28.7, 152.0], [28.8, 152.0], [28.9, 152.0], [29.0, 152.0], [29.1, 152.0], [29.2, 152.0], [29.3, 152.0], [29.4, 153.0], [29.5, 153.0], [29.6, 153.0], [29.7, 153.0], [29.8, 153.0], [29.9, 153.0], [30.0, 153.0], [30.1, 153.0], [30.2, 153.0], [30.3, 153.0], [30.4, 153.0], [30.5, 153.0], [30.6, 153.0], [30.7, 153.0], [30.8, 153.0], [30.9, 153.0], [31.0, 154.0], [31.1, 154.0], [31.2, 154.0], [31.3, 154.0], [31.4, 154.0], [31.5, 154.0], [31.6, 154.0], [31.7, 154.0], [31.8, 154.0], [31.9, 154.0], [32.0, 154.0], [32.1, 155.0], [32.2, 155.0], [32.3, 155.0], [32.4, 156.0], [32.5, 156.0], [32.6, 156.0], [32.7, 156.0], [32.8, 156.0], [32.9, 156.0], [33.0, 156.0], [33.1, 156.0], [33.2, 156.0], [33.3, 158.0], [33.4, 158.0], [33.5, 159.0], [33.6, 159.0], [33.7, 159.0], [33.8, 160.0], [33.9, 160.0], [34.0, 160.0], [34.1, 160.0], [34.2, 160.0], [34.3, 160.0], [34.4, 160.0], [34.5, 161.0], [34.6, 161.0], [34.7, 161.0], [34.8, 161.0], [34.9, 161.0], [35.0, 161.0], [35.1, 161.0], [35.2, 161.0], [35.3, 161.0], [35.4, 162.0], [35.5, 162.0], [35.6, 162.0], [35.7, 162.0], [35.8, 162.0], [35.9, 162.0], [36.0, 162.0], [36.1, 163.0], [36.2, 163.0], [36.3, 163.0], [36.4, 163.0], [36.5, 163.0], [36.6, 164.0], [36.7, 164.0], [36.8, 165.0], [36.9, 165.0], [37.0, 165.0], [37.1, 165.0], [37.2, 165.0], [37.3, 166.0], [37.4, 166.0], [37.5, 167.0], [37.6, 167.0], [37.7, 168.0], [37.8, 168.0], [37.9, 168.0], [38.0, 171.0], [38.1, 171.0], [38.2, 172.0], [38.3, 172.0], [38.4, 174.0], [38.5, 174.0], [38.6, 174.0], [38.7, 178.0], [38.8, 178.0], [38.9, 182.0], [39.0, 182.0], [39.1, 183.0], [39.2, 183.0], [39.3, 183.0], [39.4, 183.0], [39.5, 183.0], [39.6, 192.0], [39.7, 192.0], [39.8, 193.0], [39.9, 193.0], [40.0, 201.0], [40.1, 201.0], [40.2, 201.0], [40.3, 209.0], [40.4, 209.0], [40.5, 219.0], [40.6, 219.0], [40.7, 233.0], [40.8, 233.0], [40.9, 233.0], [41.0, 237.0], [41.1, 237.0], [41.2, 247.0], [41.3, 247.0], [41.4, 248.0], [41.5, 248.0], [41.6, 248.0], [41.7, 255.0], [41.8, 255.0], [41.9, 264.0], [42.0, 264.0], [42.1, 266.0], [42.2, 266.0], [42.3, 266.0], [42.4, 269.0], [42.5, 269.0], [42.6, 269.0], [42.7, 269.0], [42.8, 272.0], [42.9, 272.0], [43.0, 272.0], [43.1, 272.0], [43.2, 272.0], [43.3, 274.0], [43.4, 274.0], [43.5, 274.0], [43.6, 274.0], [43.7, 274.0], [43.8, 274.0], [43.9, 274.0], [44.0, 274.0], [44.1, 274.0], [44.2, 275.0], [44.3, 275.0], [44.4, 275.0], [44.5, 276.0], [44.6, 276.0], [44.7, 276.0], [44.8, 276.0], [44.9, 277.0], [45.0, 277.0], [45.1, 277.0], [45.2, 277.0], [45.3, 277.0], [45.4, 277.0], [45.5, 277.0], [45.6, 280.0], [45.7, 280.0], [45.8, 280.0], [45.9, 280.0], [46.0, 280.0], [46.1, 281.0], [46.2, 281.0], [46.3, 281.0], [46.4, 281.0], [46.5, 281.0], [46.6, 282.0], [46.7, 282.0], [46.8, 282.0], [46.9, 282.0], [47.0, 282.0], [47.1, 282.0], [47.2, 282.0], [47.3, 283.0], [47.4, 283.0], [47.5, 283.0], [47.6, 283.0], [47.7, 284.0], [47.8, 284.0], [47.9, 284.0], [48.0, 286.0], [48.1, 286.0], [48.2, 289.0], [48.3, 289.0], [48.4, 289.0], [48.5, 289.0], [48.6, 289.0], [48.7, 289.0], [48.8, 289.0], [48.9, 290.0], [49.0, 290.0], [49.1, 290.0], [49.2, 290.0], [49.3, 290.0], [49.4, 292.0], [49.5, 292.0], [49.6, 292.0], [49.7, 292.0], [49.8, 293.0], [49.9, 293.0], [50.0, 294.0], [50.1, 294.0], [50.2, 294.0], [50.3, 296.0], [50.4, 296.0], [50.5, 296.0], [50.6, 296.0], [50.7, 297.0], [50.8, 297.0], [50.9, 297.0], [51.0, 297.0], [51.1, 297.0], [51.2, 297.0], [51.3, 297.0], [51.4, 299.0], [51.5, 299.0], [51.6, 299.0], [51.7, 299.0], [51.8, 299.0], [51.9, 300.0], [52.0, 300.0], [52.1, 300.0], [52.2, 300.0], [52.3, 300.0], [52.4, 301.0], [52.5, 301.0], [52.6, 302.0], [52.7, 302.0], [52.8, 302.0], [52.9, 302.0], [53.0, 302.0], [53.1, 303.0], [53.2, 303.0], [53.3, 303.0], [53.4, 303.0], [53.5, 304.0], [53.6, 304.0], [53.7, 304.0], [53.8, 304.0], [53.9, 304.0], [54.0, 305.0], [54.1, 305.0], [54.2, 306.0], [54.3, 306.0], [54.4, 306.0], [54.5, 309.0], [54.6, 309.0], [54.7, 310.0], [54.8, 310.0], [54.9, 311.0], [55.0, 311.0], [55.1, 311.0], [55.2, 311.0], [55.3, 311.0], [55.4, 312.0], [55.5, 312.0], [55.6, 315.0], [55.7, 315.0], [55.8, 315.0], [55.9, 316.0], [56.0, 316.0], [56.1, 316.0], [56.2, 316.0], [56.3, 316.0], [56.4, 316.0], [56.5, 316.0], [56.6, 316.0], [56.7, 316.0], [56.8, 317.0], [56.9, 317.0], [57.0, 319.0], [57.1, 319.0], [57.2, 319.0], [57.3, 321.0], [57.4, 321.0], [57.5, 321.0], [57.6, 321.0], [57.7, 321.0], [57.8, 321.0], [57.9, 321.0], [58.0, 321.0], [58.1, 321.0], [58.2, 321.0], [58.3, 321.0], [58.4, 322.0], [58.5, 322.0], [58.6, 322.0], [58.7, 323.0], [58.8, 323.0], [58.9, 326.0], [59.0, 326.0], [59.1, 327.0], [59.2, 327.0], [59.3, 327.0], [59.4, 327.0], [59.5, 327.0], [59.6, 327.0], [59.7, 327.0], [59.8, 327.0], [59.9, 327.0], [60.0, 328.0], [60.1, 328.0], [60.2, 328.0], [60.3, 328.0], [60.4, 328.0], [60.5, 330.0], [60.6, 330.0], [60.7, 330.0], [60.8, 330.0], [60.9, 330.0], [61.0, 330.0], [61.1, 330.0], [61.2, 330.0], [61.3, 330.0], [61.4, 331.0], [61.5, 331.0], [61.6, 331.0], [61.7, 332.0], [61.8, 332.0], [61.9, 332.0], [62.0, 332.0], [62.1, 332.0], [62.2, 332.0], [62.3, 332.0], [62.4, 332.0], [62.5, 332.0], [62.6, 333.0], [62.7, 333.0], [62.8, 333.0], [62.9, 333.0], [63.0, 333.0], [63.1, 333.0], [63.2, 333.0], [63.3, 334.0], [63.4, 334.0], [63.5, 334.0], [63.6, 334.0], [63.7, 334.0], [63.8, 336.0], [63.9, 336.0], [64.0, 336.0], [64.1, 336.0], [64.2, 336.0], [64.3, 336.0], [64.4, 336.0], [64.5, 337.0], [64.6, 337.0], [64.7, 337.0], [64.8, 337.0], [64.9, 338.0], [65.0, 338.0], [65.1, 338.0], [65.2, 339.0], [65.3, 339.0], [65.4, 339.0], [65.5, 339.0], [65.6, 339.0], [65.7, 339.0], [65.8, 339.0], [65.9, 341.0], [66.0, 341.0], [66.1, 342.0], [66.2, 342.0], [66.3, 344.0], [66.4, 344.0], [66.5, 344.0], [66.6, 344.0], [66.7, 344.0], [66.8, 345.0], [66.9, 345.0], [67.0, 347.0], [67.1, 347.0], [67.2, 347.0], [67.3, 348.0], [67.4, 348.0], [67.5, 348.0], [67.6, 348.0], [67.7, 348.0], [67.8, 348.0], [67.9, 348.0], [68.0, 349.0], [68.1, 349.0], [68.2, 350.0], [68.3, 350.0], [68.4, 350.0], [68.5, 350.0], [68.6, 350.0], [68.7, 350.0], [68.8, 350.0], [68.9, 352.0], [69.0, 352.0], [69.1, 353.0], [69.2, 353.0], [69.3, 353.0], [69.4, 353.0], [69.5, 353.0], [69.6, 354.0], [69.7, 354.0], [69.8, 356.0], [69.9, 356.0], [70.0, 356.0], [70.1, 356.0], [70.2, 356.0], [70.3, 358.0], [70.4, 358.0], [70.5, 358.0], [70.6, 358.0], [70.7, 361.0], [70.8, 361.0], [70.9, 361.0], [71.0, 361.0], [71.1, 361.0], [71.2, 362.0], [71.3, 362.0], [71.4, 367.0], [71.5, 367.0], [71.6, 367.0], [71.7, 367.0], [71.8, 367.0], [71.9, 372.0], [72.0, 372.0], [72.1, 372.0], [72.2, 372.0], [72.3, 372.0], [72.4, 379.0], [72.5, 379.0], [72.6, 380.0], [72.7, 380.0], [72.8, 381.0], [72.9, 381.0], [73.0, 381.0], [73.1, 384.0], [73.2, 384.0], [73.3, 388.0], [73.4, 388.0], [73.5, 392.0], [73.6, 392.0], [73.7, 392.0], [73.8, 393.0], [73.9, 393.0], [74.0, 394.0], [74.1, 394.0], [74.2, 402.0], [74.3, 402.0], [74.4, 402.0], [74.5, 403.0], [74.6, 403.0], [74.7, 407.0], [74.8, 407.0], [74.9, 408.0], [75.0, 408.0], [75.1, 408.0], [75.2, 417.0], [75.3, 417.0], [75.4, 422.0], [75.5, 422.0], [75.6, 427.0], [75.7, 427.0], [75.8, 427.0], [75.9, 430.0], [76.0, 430.0], [76.1, 438.0], [76.2, 438.0], [76.3, 441.0], [76.4, 441.0], [76.5, 441.0], [76.6, 441.0], [76.7, 441.0], [76.8, 445.0], [76.9, 445.0], [77.0, 445.0], [77.1, 445.0], [77.2, 445.0], [77.3, 448.0], [77.4, 448.0], [77.5, 449.0], [77.6, 449.0], [77.7, 460.0], [77.8, 460.0], [77.9, 460.0], [78.0, 463.0], [78.1, 463.0], [78.2, 465.0], [78.3, 465.0], [78.4, 474.0], [78.5, 474.0], [78.6, 474.0], [78.7, 476.0], [78.8, 476.0], [78.9, 480.0], [79.0, 480.0], [79.1, 484.0], [79.2, 484.0], [79.3, 484.0], [79.4, 486.0], [79.5, 486.0], [79.6, 490.0], [79.7, 490.0], [79.8, 490.0], [79.9, 490.0], [80.0, 491.0], [80.1, 491.0], [80.2, 491.0], [80.3, 497.0], [80.4, 497.0], [80.5, 498.0], [80.6, 498.0], [80.7, 501.0], [80.8, 501.0], [80.9, 501.0], [81.0, 502.0], [81.1, 502.0], [81.2, 511.0], [81.3, 511.0], [81.4, 512.0], [81.5, 512.0], [81.6, 512.0], [81.7, 517.0], [81.8, 517.0], [81.9, 517.0], [82.0, 517.0], [82.1, 519.0], [82.2, 519.0], [82.3, 519.0], [82.4, 526.0], [82.5, 526.0], [82.6, 530.0], [82.7, 530.0], [82.8, 531.0], [82.9, 531.0], [83.0, 531.0], [83.1, 531.0], [83.2, 531.0], [83.3, 531.0], [83.4, 531.0], [83.5, 533.0], [83.6, 533.0], [83.7, 533.0], [83.8, 535.0], [83.9, 535.0], [84.0, 537.0], [84.1, 537.0], [84.2, 539.0], [84.3, 539.0], [84.4, 539.0], [84.5, 539.0], [84.6, 539.0], [84.7, 545.0], [84.8, 545.0], [84.9, 545.0], [85.0, 545.0], [85.1, 545.0], [85.2, 548.0], [85.3, 548.0], [85.4, 549.0], [85.5, 549.0], [85.6, 557.0], [85.7, 557.0], [85.8, 557.0], [85.9, 559.0], [86.0, 559.0], [86.1, 562.0], [86.2, 562.0], [86.3, 565.0], [86.4, 565.0], [86.5, 565.0], [86.6, 571.0], [86.7, 571.0], [86.8, 571.0], [86.9, 571.0], [87.0, 578.0], [87.1, 578.0], [87.2, 578.0], [87.3, 587.0], [87.4, 587.0], [87.5, 598.0], [87.6, 598.0], [87.7, 607.0], [87.8, 607.0], [87.9, 607.0], [88.0, 614.0], [88.1, 614.0], [88.2, 620.0], [88.3, 620.0], [88.4, 622.0], [88.5, 622.0], [88.6, 622.0], [88.7, 625.0], [88.8, 625.0], [88.9, 639.0], [89.0, 639.0], [89.1, 645.0], [89.2, 645.0], [89.3, 645.0], [89.4, 645.0], [89.5, 645.0], [89.6, 648.0], [89.7, 648.0], [89.8, 650.0], [89.9, 650.0], [90.0, 650.0], [90.1, 654.0], [90.2, 654.0], [90.3, 660.0], [90.4, 660.0], [90.5, 669.0], [90.6, 669.0], [90.7, 669.0], [90.8, 669.0], [90.9, 669.0], [91.0, 674.0], [91.1, 674.0], [91.2, 675.0], [91.3, 675.0], [91.4, 678.0], [91.5, 678.0], [91.6, 678.0], [91.7, 683.0], [91.8, 683.0], [91.9, 710.0], [92.0, 710.0], [92.1, 722.0], [92.2, 722.0], [92.3, 722.0], [92.4, 723.0], [92.5, 723.0], [92.6, 725.0], [92.7, 725.0], [92.8, 728.0], [92.9, 728.0], [93.0, 728.0], [93.1, 729.0], [93.2, 729.0], [93.3, 733.0], [93.4, 733.0], [93.5, 761.0], [93.6, 761.0], [93.7, 761.0], [93.8, 763.0], [93.9, 763.0], [94.0, 768.0], [94.1, 768.0], [94.2, 775.0], [94.3, 775.0], [94.4, 775.0], [94.5, 803.0], [94.6, 803.0], [94.7, 815.0], [94.8, 815.0], [94.9, 841.0], [95.0, 841.0], [95.1, 841.0], [95.2, 849.0], [95.3, 849.0], [95.4, 868.0], [95.5, 868.0], [95.6, 882.0], [95.7, 882.0], [95.8, 882.0], [95.9, 905.0], [96.0, 905.0], [96.1, 913.0], [96.2, 913.0], [96.3, 954.0], [96.4, 954.0], [96.5, 954.0], [96.6, 958.0], [96.7, 958.0], [96.8, 961.0], [96.9, 961.0], [97.0, 967.0], [97.1, 967.0], [97.2, 967.0], [97.3, 980.0], [97.4, 980.0], [97.5, 989.0], [97.6, 989.0], [97.7, 1015.0], [97.8, 1015.0], [97.9, 1015.0], [98.0, 1027.0], [98.1, 1027.0], [98.2, 1029.0], [98.3, 1029.0], [98.4, 1057.0], [98.5, 1057.0], [98.6, 1057.0], [98.7, 1135.0], [98.8, 1135.0], [98.9, 1136.0], [99.0, 1136.0], [99.1, 1164.0], [99.2, 1164.0], [99.3, 1164.0], [99.4, 1166.0], [99.5, 1166.0], [99.6, 1196.0], [99.7, 1196.0], [99.8, 1285.0], [99.9, 1285.0], [100.0, 1285.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 172.0, "series": [{"data": [[1100.0, 5.0], [300.0, 96.0], [600.0, 18.0], [1200.0, 1.0], [700.0, 11.0], [100.0, 172.0], [200.0, 51.0], [800.0, 6.0], [400.0, 28.0], [900.0, 8.0], [500.0, 30.0], [1000.0, 4.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 83.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 347.0, "series": [{"data": [[0.0, 347.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 83.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.653327468E12, "maxY": 1.0, "series": [{"data": [[1.653327483E12, 1.0], [1.6533274845E12, 1.0], [1.653327486E12, 1.0], [1.6533274875E12, 1.0], [1.6533274785E12, 1.0], [1.6533274995E12, 1.0], [1.65332748E12, 1.0], [1.653327501E12, 1.0], [1.6533275025E12, 1.0], [1.6533274815E12, 1.0], [1.6533274725E12, 1.0], [1.6533274935E12, 1.0], [1.653327474E12, 1.0], [1.653327495E12, 1.0], [1.6533274965E12, 1.0], [1.6533274755E12, 1.0], [1.653327498E12, 1.0], [1.653327477E12, 1.0], [1.653327468E12, 1.0], [1.653327489E12, 1.0], [1.6533274905E12, 1.0], [1.6533274695E12, 1.0], [1.653327492E12, 1.0], [1.653327471E12, 1.0]], "isOverall": false, "label": "parallel bzm - Parallel", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6533275025E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 144.10810810810815, "minX": 1.0, "maxY": 1165.0, "series": [{"data": [[2.0, 145.37634408602148], [8.0, 397.36507936507934], [9.0, 420.8666666666666], [10.0, 484.46153846153845], [11.0, 556.9166666666666], [3.0, 167.9090909090909], [12.0, 677.6666666666667], [13.0, 738.7500000000001], [14.0, 714.6666666666666], [15.0, 852.125], [1.0, 144.10810810810815], [4.0, 222.85714285714286], [16.0, 946.3333333333334], [17.0, 1005.5], [18.0, 1165.0], [19.0, 1088.0], [5.0, 287.2857142857143], [6.0, 289.25], [7.0, 365.6410256410256]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}, {"data": [[6.206976744186047, 335.44883720930255]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 19.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 180.0, "minX": 1.653327468E12, "maxY": 223948.66666666666, "series": [{"data": [[1.653327483E12, 108704.0], [1.6533274845E12, 122292.0], [1.653327486E12, 129035.33333333333], [1.6533274875E12, 142674.0], [1.6533274785E12, 81528.0], [1.6533274995E12, 197076.66666666666], [1.65332748E12, 95116.0], [1.653327501E12, 197076.66666666666], [1.6533275025E12, 210512.66666666666], [1.6533274815E12, 101910.0], [1.6533274725E12, 40764.0], [1.6533274935E12, 170154.0], [1.653327474E12, 54352.0], [1.653327495E12, 217357.33333333334], [1.6533274965E12, 196975.33333333334], [1.6533274755E12, 61146.0], [1.653327498E12, 217458.66666666666], [1.653327477E12, 67889.33333333333], [1.653327468E12, 26766.0], [1.653327489E12, 135880.0], [1.6533274905E12, 88068.66666666667], [1.6533274695E12, 20382.0], [1.653327492E12, 223948.66666666666], [1.653327471E12, 27176.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.653327483E12, 1440.0], [1.6533274845E12, 1620.0], [1.653327486E12, 1710.0], [1.6533274875E12, 1890.0], [1.6533274785E12, 1080.0], [1.6533274995E12, 2610.0], [1.65332748E12, 1260.0], [1.653327501E12, 2610.0], [1.6533275025E12, 2790.0], [1.6533274815E12, 1350.0], [1.6533274725E12, 540.0], [1.6533274935E12, 2250.0], [1.653327474E12, 720.0], [1.653327495E12, 2880.0], [1.6533274965E12, 2610.0], [1.6533274755E12, 810.0], [1.653327498E12, 2880.0], [1.653327477E12, 900.0], [1.653327468E12, 180.0], [1.653327489E12, 1800.0], [1.6533274905E12, 1170.0], [1.6533274695E12, 270.0], [1.653327492E12, 2970.0], [1.653327471E12, 360.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6533275025E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 135.5, "minX": 1.653327468E12, "maxY": 790.909090909091, "series": [{"data": [[1.653327483E12, 147.62500000000006], [1.6533274845E12, 152.16666666666669], [1.653327486E12, 151.89473684210526], [1.6533274875E12, 154.0], [1.6533274785E12, 137.08333333333337], [1.6533274995E12, 334.65517241379314], [1.65332748E12, 144.6428571428571], [1.653327501E12, 383.2068965517241], [1.6533275025E12, 374.8709677419355], [1.6533274815E12, 143.99999999999997], [1.6533274725E12, 143.83333333333331], [1.6533274935E12, 502.87999999999994], [1.653327474E12, 135.5], [1.653327495E12, 501.2500000000001], [1.6533274965E12, 397.7931034482759], [1.6533274755E12, 136.33333333333334], [1.653327498E12, 368.53125], [1.653327477E12, 135.70000000000002], [1.653327468E12, 141.0], [1.653327489E12, 178.05], [1.6533274905E12, 567.4615384615385], [1.6533274695E12, 136.33333333333334], [1.653327492E12, 790.909090909091], [1.653327471E12, 138.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6533275025E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 135.5, "minX": 1.653327468E12, "maxY": 790.878787878788, "series": [{"data": [[1.653327483E12, 147.62500000000006], [1.6533274845E12, 152.16666666666669], [1.653327486E12, 151.89473684210526], [1.6533274875E12, 153.95238095238096], [1.6533274785E12, 136.91666666666666], [1.6533274995E12, 334.44827586206895], [1.65332748E12, 144.6428571428571], [1.653327501E12, 383.06896551724145], [1.6533275025E12, 374.7096774193549], [1.6533274815E12, 143.99999999999997], [1.6533274725E12, 143.83333333333331], [1.6533274935E12, 502.64000000000004], [1.653327474E12, 135.5], [1.653327495E12, 500.93750000000017], [1.6533274965E12, 397.58620689655174], [1.6533274755E12, 136.33333333333334], [1.653327498E12, 368.3749999999999], [1.653327477E12, 135.5], [1.653327468E12, 141.0], [1.653327489E12, 178.0], [1.6533274905E12, 567.3846153846154], [1.6533274695E12, 136.33333333333334], [1.653327492E12, 790.878787878788], [1.653327471E12, 138.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6533275025E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.653327468E12, "maxY": 28.181818181818183, "series": [{"data": [[1.653327483E12, 9.062500000000002], [1.6533274845E12, 9.666666666666666], [1.653327486E12, 9.947368421052632], [1.6533274875E12, 10.285714285714288], [1.6533274785E12, 9.666666666666666], [1.6533274995E12, 17.344827586206897], [1.65332748E12, 9.785714285714286], [1.653327501E12, 20.89655172413793], [1.6533275025E12, 19.064516129032256], [1.6533274815E12, 9.06666666666667], [1.6533274725E12, 13.666666666666666], [1.6533274935E12, 23.879999999999995], [1.653327474E12, 10.75], [1.653327495E12, 25.8125], [1.6533274965E12, 19.17241379310345], [1.6533274755E12, 9.0], [1.653327498E12, 17.562500000000004], [1.653327477E12, 9.5], [1.653327468E12, 10.5], [1.653327489E12, 10.8], [1.6533274905E12, 15.153846153846153], [1.6533274695E12, 10.666666666666666], [1.653327492E12, 28.181818181818183], [1.653327471E12, 12.75]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6533275025E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 130.0, "minX": 1.653327468E12, "maxY": 1285.0, "series": [{"data": [[1.653327483E12, 162.0], [1.6533274845E12, 167.0], [1.653327486E12, 183.0], [1.6533274875E12, 182.0], [1.6533274785E12, 148.0], [1.6533274995E12, 545.0], [1.65332748E12, 193.0], [1.653327501E12, 614.0], [1.6533275025E12, 587.0], [1.6533274815E12, 160.0], [1.6533274725E12, 155.0], [1.6533274935E12, 882.0], [1.653327474E12, 140.0], [1.653327495E12, 768.0], [1.6533274965E12, 660.0], [1.6533274755E12, 144.0], [1.653327498E12, 549.0], [1.653327477E12, 142.0], [1.653327468E12, 150.0], [1.653327489E12, 247.0], [1.6533274905E12, 1029.0], [1.6533274695E12, 140.0], [1.653327492E12, 1285.0], [1.653327471E12, 151.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.653327483E12, 157.8], [1.6533274845E12, 165.2], [1.653327486E12, 174.0], [1.6533274875E12, 169.8], [1.6533274785E12, 145.9], [1.6533274995E12, 531.0], [1.65332748E12, 172.5], [1.653327501E12, 571.0], [1.6533275025E12, 543.0], [1.6533274815E12, 157.6], [1.6533274725E12, 155.0], [1.6533274935E12, 807.8000000000001], [1.653327474E12, 140.0], [1.653327495E12, 731.8], [1.6533274965E12, 639.0], [1.6533274755E12, 144.0], [1.653327498E12, 526.7], [1.653327477E12, 141.7], [1.653327468E12, 150.0], [1.653327489E12, 235.20000000000005], [1.6533274905E12, 1013.0], [1.6533274695E12, 140.0], [1.653327492E12, 1165.2], [1.653327471E12, 151.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.653327483E12, 162.0], [1.6533274845E12, 167.0], [1.653327486E12, 183.0], [1.6533274875E12, 182.0], [1.6533274785E12, 148.0], [1.6533274995E12, 545.0], [1.65332748E12, 193.0], [1.653327501E12, 614.0], [1.6533275025E12, 587.0], [1.6533274815E12, 160.0], [1.6533274725E12, 155.0], [1.6533274935E12, 882.0], [1.653327474E12, 140.0], [1.653327495E12, 768.0], [1.6533274965E12, 660.0], [1.6533274755E12, 144.0], [1.653327498E12, 549.0], [1.653327477E12, 142.0], [1.653327468E12, 150.0], [1.653327489E12, 247.0], [1.6533274905E12, 1029.0], [1.6533274695E12, 140.0], [1.653327492E12, 1285.0], [1.653327471E12, 151.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.653327483E12, 162.0], [1.6533274845E12, 167.0], [1.653327486E12, 183.0], [1.6533274875E12, 180.89999999999998], [1.6533274785E12, 148.0], [1.6533274995E12, 542.0], [1.65332748E12, 193.0], [1.653327501E12, 596.0], [1.6533275025E12, 570.1999999999999], [1.6533274815E12, 160.0], [1.6533274725E12, 155.0], [1.6533274935E12, 861.9], [1.653327474E12, 140.0], [1.653327495E12, 763.4499999999999], [1.6533274965E12, 657.0], [1.6533274755E12, 144.0], [1.653327498E12, 537.3], [1.653327477E12, 142.0], [1.653327468E12, 150.0], [1.653327489E12, 246.5], [1.6533274905E12, 1029.0], [1.6533274695E12, 140.0], [1.653327492E12, 1222.6999999999998], [1.653327471E12, 151.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.653327483E12, 134.0], [1.6533274845E12, 137.0], [1.653327486E12, 140.0], [1.6533274875E12, 140.0], [1.6533274785E12, 133.0], [1.6533274995E12, 248.0], [1.65332748E12, 132.0], [1.653327501E12, 290.0], [1.6533275025E12, 233.0], [1.6533274815E12, 133.0], [1.6533274725E12, 132.0], [1.6533274935E12, 282.0], [1.653327474E12, 132.0], [1.653327495E12, 334.0], [1.6533274965E12, 281.0], [1.6533274755E12, 133.0], [1.653327498E12, 269.0], [1.653327477E12, 130.0], [1.653327468E12, 132.0], [1.653327489E12, 143.0], [1.6533274905E12, 276.0], [1.6533274695E12, 134.0], [1.653327492E12, 336.0], [1.653327471E12, 132.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.653327483E12, 146.0], [1.6533274845E12, 150.0], [1.653327486E12, 150.0], [1.6533274875E12, 153.0], [1.6533274785E12, 136.0], [1.6533274995E12, 289.0], [1.65332748E12, 140.0], [1.653327501E12, 339.0], [1.6533275025E12, 348.0], [1.6533274815E12, 144.0], [1.6533274725E12, 144.0], [1.6533274935E12, 408.0], [1.653327474E12, 136.0], [1.653327495E12, 453.0], [1.6533274965E12, 333.0], [1.6533274755E12, 135.0], [1.653327498E12, 310.5], [1.653327477E12, 136.0], [1.653327468E12, 141.0], [1.653327489E12, 167.0], [1.6533274905E12, 557.0], [1.6533274695E12, 135.0], [1.653327492E12, 841.0], [1.653327471E12, 134.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6533275025E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 134.5, "minX": 1.0, "maxY": 849.0, "series": [{"data": [[2.0, 134.5], [8.0, 136.0], [9.0, 139.0], [10.0, 144.0], [12.0, 153.0], [14.0, 155.0], [1.0, 150.0], [4.0, 144.0], [16.0, 450.5], [19.0, 339.0], [5.0, 136.0], [20.0, 347.0], [21.0, 384.0], [6.0, 134.5], [7.0, 849.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 134.5, "minX": 1.0, "maxY": 849.0, "series": [{"data": [[2.0, 134.5], [8.0, 136.0], [9.0, 139.0], [10.0, 144.0], [12.0, 153.0], [14.0, 155.0], [1.0, 150.0], [4.0, 144.0], [16.0, 450.5], [19.0, 339.0], [5.0, 136.0], [20.0, 347.0], [21.0, 383.0], [6.0, 134.5], [7.0, 849.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.653327468E12, "maxY": 20.666666666666668, "series": [{"data": [[1.653327483E12, 11.333333333333334], [1.6533274845E12, 12.0], [1.653327486E12, 12.666666666666666], [1.6533274875E12, 14.0], [1.6533274785E12, 8.0], [1.6533274995E12, 19.333333333333332], [1.65332748E12, 9.333333333333334], [1.653327501E12, 20.0], [1.6533275025E12, 15.333333333333334], [1.6533274815E12, 10.0], [1.6533274725E12, 4.0], [1.6533274935E12, 18.0], [1.653327474E12, 5.333333333333333], [1.653327495E12, 19.333333333333332], [1.6533274965E12, 19.333333333333332], [1.6533274755E12, 6.0], [1.653327498E12, 20.666666666666668], [1.653327477E12, 6.666666666666667], [1.653327468E12, 1.3333333333333333], [1.653327489E12, 15.333333333333334], [1.6533274905E12, 16.0], [1.6533274695E12, 2.0], [1.653327492E12, 17.333333333333332], [1.653327471E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6533275025E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.653327468E12, "maxY": 22.0, "series": [{"data": [[1.653327483E12, 10.666666666666666], [1.6533274845E12, 12.0], [1.653327486E12, 12.666666666666666], [1.6533274875E12, 14.0], [1.6533274785E12, 8.0], [1.6533274995E12, 19.333333333333332], [1.65332748E12, 9.333333333333334], [1.653327501E12, 19.333333333333332], [1.6533275025E12, 20.666666666666668], [1.6533274815E12, 10.0], [1.6533274725E12, 4.0], [1.6533274935E12, 16.666666666666668], [1.653327474E12, 5.333333333333333], [1.653327495E12, 21.333333333333332], [1.6533274965E12, 19.333333333333332], [1.6533274755E12, 6.0], [1.653327498E12, 21.333333333333332], [1.653327477E12, 6.666666666666667], [1.653327468E12, 1.3333333333333333], [1.653327489E12, 13.333333333333334], [1.6533274905E12, 8.666666666666666], [1.6533274695E12, 2.0], [1.653327492E12, 22.0], [1.653327471E12, 2.6666666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6533275025E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.653327468E12, "maxY": 22.0, "series": [{"data": [[1.653327483E12, 10.666666666666666], [1.6533274845E12, 12.0], [1.653327486E12, 12.666666666666666], [1.6533274875E12, 14.0], [1.6533274785E12, 8.0], [1.6533274995E12, 19.333333333333332], [1.65332748E12, 9.333333333333334], [1.653327501E12, 19.333333333333332], [1.6533275025E12, 20.666666666666668], [1.6533274815E12, 10.0], [1.6533274725E12, 4.0], [1.6533274935E12, 16.666666666666668], [1.653327474E12, 5.333333333333333], [1.653327495E12, 21.333333333333332], [1.6533274965E12, 19.333333333333332], [1.6533274755E12, 6.0], [1.653327498E12, 21.333333333333332], [1.653327477E12, 6.666666666666667], [1.653327468E12, 1.3333333333333333], [1.653327489E12, 13.333333333333334], [1.6533274905E12, 8.666666666666666], [1.6533274695E12, 2.0], [1.653327492E12, 22.0], [1.653327471E12, 2.6666666666666665]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6533275025E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.653327468E12, "maxY": 22.0, "series": [{"data": [[1.653327483E12, 10.666666666666666], [1.6533274845E12, 12.0], [1.653327486E12, 12.666666666666666], [1.6533274875E12, 14.0], [1.6533274785E12, 8.0], [1.6533274995E12, 19.333333333333332], [1.65332748E12, 9.333333333333334], [1.653327501E12, 19.333333333333332], [1.6533275025E12, 20.666666666666668], [1.6533274815E12, 10.0], [1.6533274725E12, 4.0], [1.6533274935E12, 16.666666666666668], [1.653327474E12, 5.333333333333333], [1.653327495E12, 21.333333333333332], [1.6533274965E12, 19.333333333333332], [1.6533274755E12, 6.0], [1.653327498E12, 21.333333333333332], [1.653327477E12, 6.666666666666667], [1.653327468E12, 1.3333333333333333], [1.653327489E12, 13.333333333333334], [1.6533274905E12, 8.666666666666666], [1.6533274695E12, 2.0], [1.653327492E12, 22.0], [1.653327471E12, 2.6666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6533275025E12, "title": "Total Transactions Per Second"}},
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

