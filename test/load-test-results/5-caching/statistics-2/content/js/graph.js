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
        data: {"result": {"minY": 14.0, "minX": 0.0, "maxY": 658.0, "series": [{"data": [[0.0, 14.0], [0.1, 14.0], [0.2, 15.0], [0.3, 15.0], [0.4, 15.0], [0.5, 15.0], [0.6, 15.0], [0.7, 15.0], [0.8, 16.0], [0.9, 16.0], [1.0, 16.0], [1.1, 16.0], [1.2, 16.0], [1.3, 16.0], [1.4, 16.0], [1.5, 16.0], [1.6, 16.0], [1.7, 16.0], [1.8, 16.0], [1.9, 16.0], [2.0, 16.0], [2.1, 16.0], [2.2, 16.0], [2.3, 16.0], [2.4, 17.0], [2.5, 17.0], [2.6, 17.0], [2.7, 17.0], [2.8, 17.0], [2.9, 17.0], [3.0, 17.0], [3.1, 17.0], [3.2, 17.0], [3.3, 17.0], [3.4, 17.0], [3.5, 17.0], [3.6, 17.0], [3.7, 17.0], [3.8, 17.0], [3.9, 17.0], [4.0, 17.0], [4.1, 17.0], [4.2, 18.0], [4.3, 18.0], [4.4, 18.0], [4.5, 18.0], [4.6, 18.0], [4.7, 18.0], [4.8, 18.0], [4.9, 18.0], [5.0, 18.0], [5.1, 18.0], [5.2, 18.0], [5.3, 18.0], [5.4, 18.0], [5.5, 18.0], [5.6, 18.0], [5.7, 18.0], [5.8, 18.0], [5.9, 18.0], [6.0, 18.0], [6.1, 18.0], [6.2, 18.0], [6.3, 18.0], [6.4, 18.0], [6.5, 19.0], [6.6, 19.0], [6.7, 19.0], [6.8, 19.0], [6.9, 19.0], [7.0, 19.0], [7.1, 19.0], [7.2, 19.0], [7.3, 19.0], [7.4, 19.0], [7.5, 19.0], [7.6, 19.0], [7.7, 19.0], [7.8, 19.0], [7.9, 19.0], [8.0, 19.0], [8.1, 19.0], [8.2, 19.0], [8.3, 19.0], [8.4, 19.0], [8.5, 19.0], [8.6, 19.0], [8.7, 19.0], [8.8, 19.0], [8.9, 19.0], [9.0, 19.0], [9.1, 19.0], [9.2, 20.0], [9.3, 20.0], [9.4, 20.0], [9.5, 20.0], [9.6, 20.0], [9.7, 20.0], [9.8, 20.0], [9.9, 20.0], [10.0, 20.0], [10.1, 20.0], [10.2, 20.0], [10.3, 20.0], [10.4, 20.0], [10.5, 20.0], [10.6, 20.0], [10.7, 20.0], [10.8, 20.0], [10.9, 20.0], [11.0, 20.0], [11.1, 20.0], [11.2, 20.0], [11.3, 20.0], [11.4, 20.0], [11.5, 20.0], [11.6, 20.0], [11.7, 21.0], [11.8, 21.0], [11.9, 21.0], [12.0, 21.0], [12.1, 21.0], [12.2, 21.0], [12.3, 21.0], [12.4, 21.0], [12.5, 21.0], [12.6, 21.0], [12.7, 21.0], [12.8, 21.0], [12.9, 21.0], [13.0, 21.0], [13.1, 21.0], [13.2, 21.0], [13.3, 21.0], [13.4, 21.0], [13.5, 21.0], [13.6, 22.0], [13.7, 22.0], [13.8, 22.0], [13.9, 22.0], [14.0, 22.0], [14.1, 22.0], [14.2, 22.0], [14.3, 22.0], [14.4, 22.0], [14.5, 22.0], [14.6, 22.0], [14.7, 22.0], [14.8, 22.0], [14.9, 22.0], [15.0, 22.0], [15.1, 22.0], [15.2, 22.0], [15.3, 22.0], [15.4, 22.0], [15.5, 22.0], [15.6, 22.0], [15.7, 22.0], [15.8, 23.0], [15.9, 23.0], [16.0, 23.0], [16.1, 23.0], [16.2, 23.0], [16.3, 23.0], [16.4, 23.0], [16.5, 23.0], [16.6, 23.0], [16.7, 23.0], [16.8, 23.0], [16.9, 23.0], [17.0, 23.0], [17.1, 23.0], [17.2, 23.0], [17.3, 23.0], [17.4, 23.0], [17.5, 23.0], [17.6, 23.0], [17.7, 23.0], [17.8, 23.0], [17.9, 23.0], [18.0, 23.0], [18.1, 23.0], [18.2, 23.0], [18.3, 23.0], [18.4, 23.0], [18.5, 23.0], [18.6, 23.0], [18.7, 24.0], [18.8, 24.0], [18.9, 24.0], [19.0, 24.0], [19.1, 24.0], [19.2, 24.0], [19.3, 24.0], [19.4, 24.0], [19.5, 24.0], [19.6, 24.0], [19.7, 24.0], [19.8, 24.0], [19.9, 24.0], [20.0, 24.0], [20.1, 24.0], [20.2, 24.0], [20.3, 24.0], [20.4, 24.0], [20.5, 24.0], [20.6, 24.0], [20.7, 24.0], [20.8, 24.0], [20.9, 24.0], [21.0, 24.0], [21.1, 24.0], [21.2, 24.0], [21.3, 24.0], [21.4, 24.0], [21.5, 24.0], [21.6, 24.0], [21.7, 24.0], [21.8, 25.0], [21.9, 25.0], [22.0, 25.0], [22.1, 25.0], [22.2, 25.0], [22.3, 25.0], [22.4, 25.0], [22.5, 25.0], [22.6, 25.0], [22.7, 25.0], [22.8, 25.0], [22.9, 25.0], [23.0, 25.0], [23.1, 25.0], [23.2, 25.0], [23.3, 25.0], [23.4, 25.0], [23.5, 25.0], [23.6, 25.0], [23.7, 25.0], [23.8, 25.0], [23.9, 25.0], [24.0, 25.0], [24.1, 25.0], [24.2, 25.0], [24.3, 25.0], [24.4, 25.0], [24.5, 25.0], [24.6, 25.0], [24.7, 25.0], [24.8, 25.0], [24.9, 25.0], [25.0, 25.0], [25.1, 25.0], [25.2, 26.0], [25.3, 26.0], [25.4, 26.0], [25.5, 26.0], [25.6, 26.0], [25.7, 26.0], [25.8, 26.0], [25.9, 26.0], [26.0, 26.0], [26.1, 26.0], [26.2, 26.0], [26.3, 26.0], [26.4, 26.0], [26.5, 26.0], [26.6, 26.0], [26.7, 26.0], [26.8, 26.0], [26.9, 26.0], [27.0, 26.0], [27.1, 26.0], [27.2, 26.0], [27.3, 26.0], [27.4, 26.0], [27.5, 26.0], [27.6, 26.0], [27.7, 26.0], [27.8, 26.0], [27.9, 26.0], [28.0, 26.0], [28.1, 26.0], [28.2, 26.0], [28.3, 26.0], [28.4, 26.0], [28.5, 26.0], [28.6, 26.0], [28.7, 26.0], [28.8, 26.0], [28.9, 27.0], [29.0, 27.0], [29.1, 27.0], [29.2, 27.0], [29.3, 27.0], [29.4, 27.0], [29.5, 27.0], [29.6, 27.0], [29.7, 27.0], [29.8, 27.0], [29.9, 27.0], [30.0, 27.0], [30.1, 27.0], [30.2, 27.0], [30.3, 27.0], [30.4, 27.0], [30.5, 27.0], [30.6, 27.0], [30.7, 27.0], [30.8, 27.0], [30.9, 27.0], [31.0, 27.0], [31.1, 27.0], [31.2, 27.0], [31.3, 27.0], [31.4, 27.0], [31.5, 27.0], [31.6, 27.0], [31.7, 27.0], [31.8, 27.0], [31.9, 27.0], [32.0, 27.0], [32.1, 27.0], [32.2, 27.0], [32.3, 27.0], [32.4, 27.0], [32.5, 28.0], [32.6, 28.0], [32.7, 28.0], [32.8, 28.0], [32.9, 28.0], [33.0, 28.0], [33.1, 28.0], [33.2, 28.0], [33.3, 28.0], [33.4, 28.0], [33.5, 28.0], [33.6, 28.0], [33.7, 28.0], [33.8, 28.0], [33.9, 28.0], [34.0, 28.0], [34.1, 28.0], [34.2, 28.0], [34.3, 28.0], [34.4, 28.0], [34.5, 28.0], [34.6, 28.0], [34.7, 28.0], [34.8, 28.0], [34.9, 28.0], [35.0, 28.0], [35.1, 28.0], [35.2, 28.0], [35.3, 28.0], [35.4, 28.0], [35.5, 28.0], [35.6, 28.0], [35.7, 28.0], [35.8, 29.0], [35.9, 29.0], [36.0, 29.0], [36.1, 29.0], [36.2, 29.0], [36.3, 29.0], [36.4, 29.0], [36.5, 29.0], [36.6, 29.0], [36.7, 29.0], [36.8, 29.0], [36.9, 29.0], [37.0, 29.0], [37.1, 29.0], [37.2, 29.0], [37.3, 29.0], [37.4, 29.0], [37.5, 29.0], [37.6, 29.0], [37.7, 29.0], [37.8, 29.0], [37.9, 30.0], [38.0, 30.0], [38.1, 30.0], [38.2, 30.0], [38.3, 30.0], [38.4, 30.0], [38.5, 30.0], [38.6, 30.0], [38.7, 30.0], [38.8, 30.0], [38.9, 30.0], [39.0, 30.0], [39.1, 30.0], [39.2, 31.0], [39.3, 31.0], [39.4, 31.0], [39.5, 31.0], [39.6, 31.0], [39.7, 31.0], [39.8, 31.0], [39.9, 31.0], [40.0, 31.0], [40.1, 32.0], [40.2, 32.0], [40.3, 32.0], [40.4, 32.0], [40.5, 32.0], [40.6, 33.0], [40.7, 33.0], [40.8, 33.0], [40.9, 33.0], [41.0, 33.0], [41.1, 33.0], [41.2, 33.0], [41.3, 34.0], [41.4, 34.0], [41.5, 34.0], [41.6, 34.0], [41.7, 34.0], [41.8, 35.0], [41.9, 35.0], [42.0, 35.0], [42.1, 35.0], [42.2, 35.0], [42.3, 35.0], [42.4, 35.0], [42.5, 35.0], [42.6, 35.0], [42.7, 36.0], [42.8, 36.0], [42.9, 36.0], [43.0, 36.0], [43.1, 36.0], [43.2, 36.0], [43.3, 36.0], [43.4, 36.0], [43.5, 37.0], [43.6, 37.0], [43.7, 37.0], [43.8, 37.0], [43.9, 37.0], [44.0, 37.0], [44.1, 38.0], [44.2, 38.0], [44.3, 38.0], [44.4, 38.0], [44.5, 38.0], [44.6, 38.0], [44.7, 38.0], [44.8, 38.0], [44.9, 39.0], [45.0, 39.0], [45.1, 39.0], [45.2, 39.0], [45.3, 39.0], [45.4, 40.0], [45.5, 40.0], [45.6, 40.0], [45.7, 40.0], [45.8, 40.0], [45.9, 40.0], [46.0, 41.0], [46.1, 41.0], [46.2, 41.0], [46.3, 41.0], [46.4, 42.0], [46.5, 42.0], [46.6, 42.0], [46.7, 42.0], [46.8, 42.0], [46.9, 43.0], [47.0, 43.0], [47.1, 43.0], [47.2, 43.0], [47.3, 43.0], [47.4, 43.0], [47.5, 44.0], [47.6, 44.0], [47.7, 44.0], [47.8, 44.0], [47.9, 44.0], [48.0, 44.0], [48.1, 45.0], [48.2, 45.0], [48.3, 45.0], [48.4, 45.0], [48.5, 45.0], [48.6, 46.0], [48.7, 46.0], [48.8, 47.0], [48.9, 47.0], [49.0, 47.0], [49.1, 47.0], [49.2, 48.0], [49.3, 48.0], [49.4, 49.0], [49.5, 49.0], [49.6, 50.0], [49.7, 50.0], [49.8, 50.0], [49.9, 51.0], [50.0, 51.0], [50.1, 52.0], [50.2, 52.0], [50.3, 52.0], [50.4, 52.0], [50.5, 53.0], [50.6, 53.0], [50.7, 53.0], [50.8, 53.0], [50.9, 53.0], [51.0, 54.0], [51.1, 54.0], [51.2, 54.0], [51.3, 55.0], [51.4, 55.0], [51.5, 56.0], [51.6, 56.0], [51.7, 57.0], [51.8, 57.0], [51.9, 57.0], [52.0, 58.0], [52.1, 58.0], [52.2, 58.0], [52.3, 58.0], [52.4, 59.0], [52.5, 59.0], [52.6, 60.0], [52.7, 60.0], [52.8, 60.0], [52.9, 61.0], [53.0, 62.0], [53.1, 62.0], [53.2, 63.0], [53.3, 64.0], [53.4, 64.0], [53.5, 65.0], [53.6, 65.0], [53.7, 65.0], [53.8, 66.0], [53.9, 67.0], [54.0, 68.0], [54.1, 68.0], [54.2, 68.0], [54.3, 69.0], [54.4, 69.0], [54.5, 69.0], [54.6, 69.0], [54.7, 70.0], [54.8, 70.0], [54.9, 71.0], [55.0, 72.0], [55.1, 72.0], [55.2, 73.0], [55.3, 73.0], [55.4, 73.0], [55.5, 74.0], [55.6, 74.0], [55.7, 74.0], [55.8, 75.0], [55.9, 75.0], [56.0, 77.0], [56.1, 77.0], [56.2, 78.0], [56.3, 79.0], [56.4, 79.0], [56.5, 81.0], [56.6, 82.0], [56.7, 82.0], [56.8, 82.0], [56.9, 83.0], [57.0, 84.0], [57.1, 84.0], [57.2, 85.0], [57.3, 86.0], [57.4, 86.0], [57.5, 87.0], [57.6, 87.0], [57.7, 88.0], [57.8, 88.0], [57.9, 88.0], [58.0, 89.0], [58.1, 89.0], [58.2, 90.0], [58.3, 91.0], [58.4, 92.0], [58.5, 93.0], [58.6, 93.0], [58.7, 94.0], [58.8, 96.0], [58.9, 96.0], [59.0, 97.0], [59.1, 98.0], [59.2, 98.0], [59.3, 98.0], [59.4, 99.0], [59.5, 99.0], [59.6, 99.0], [59.7, 100.0], [59.8, 100.0], [59.9, 101.0], [60.0, 101.0], [60.1, 102.0], [60.2, 102.0], [60.3, 102.0], [60.4, 102.0], [60.5, 103.0], [60.6, 104.0], [60.7, 104.0], [60.8, 105.0], [60.9, 105.0], [61.0, 105.0], [61.1, 105.0], [61.2, 106.0], [61.3, 106.0], [61.4, 106.0], [61.5, 106.0], [61.6, 107.0], [61.7, 108.0], [61.8, 109.0], [61.9, 110.0], [62.0, 111.0], [62.1, 112.0], [62.2, 113.0], [62.3, 114.0], [62.4, 114.0], [62.5, 115.0], [62.6, 116.0], [62.7, 116.0], [62.8, 116.0], [62.9, 117.0], [63.0, 118.0], [63.1, 119.0], [63.2, 119.0], [63.3, 120.0], [63.4, 120.0], [63.5, 121.0], [63.6, 121.0], [63.7, 121.0], [63.8, 122.0], [63.9, 122.0], [64.0, 123.0], [64.1, 124.0], [64.2, 125.0], [64.3, 126.0], [64.4, 127.0], [64.5, 127.0], [64.6, 129.0], [64.7, 130.0], [64.8, 130.0], [64.9, 131.0], [65.0, 132.0], [65.1, 133.0], [65.2, 134.0], [65.3, 135.0], [65.4, 135.0], [65.5, 136.0], [65.6, 136.0], [65.7, 136.0], [65.8, 137.0], [65.9, 137.0], [66.0, 138.0], [66.1, 138.0], [66.2, 139.0], [66.3, 140.0], [66.4, 141.0], [66.5, 142.0], [66.6, 144.0], [66.7, 145.0], [66.8, 146.0], [66.9, 147.0], [67.0, 147.0], [67.1, 148.0], [67.2, 148.0], [67.3, 149.0], [67.4, 149.0], [67.5, 149.0], [67.6, 150.0], [67.7, 150.0], [67.8, 151.0], [67.9, 151.0], [68.0, 152.0], [68.1, 153.0], [68.2, 154.0], [68.3, 155.0], [68.4, 156.0], [68.5, 156.0], [68.6, 157.0], [68.7, 159.0], [68.8, 159.0], [68.9, 160.0], [69.0, 160.0], [69.1, 161.0], [69.2, 162.0], [69.3, 163.0], [69.4, 164.0], [69.5, 164.0], [69.6, 164.0], [69.7, 165.0], [69.8, 165.0], [69.9, 166.0], [70.0, 166.0], [70.1, 167.0], [70.2, 167.0], [70.3, 168.0], [70.4, 169.0], [70.5, 170.0], [70.6, 171.0], [70.7, 171.0], [70.8, 173.0], [70.9, 173.0], [71.0, 175.0], [71.1, 176.0], [71.2, 177.0], [71.3, 177.0], [71.4, 178.0], [71.5, 179.0], [71.6, 179.0], [71.7, 180.0], [71.8, 181.0], [71.9, 181.0], [72.0, 181.0], [72.1, 181.0], [72.2, 182.0], [72.3, 183.0], [72.4, 183.0], [72.5, 184.0], [72.6, 185.0], [72.7, 185.0], [72.8, 186.0], [72.9, 186.0], [73.0, 186.0], [73.1, 187.0], [73.2, 187.0], [73.3, 188.0], [73.4, 189.0], [73.5, 190.0], [73.6, 191.0], [73.7, 192.0], [73.8, 192.0], [73.9, 193.0], [74.0, 194.0], [74.1, 194.0], [74.2, 194.0], [74.3, 194.0], [74.4, 195.0], [74.5, 195.0], [74.6, 195.0], [74.7, 196.0], [74.8, 197.0], [74.9, 197.0], [75.0, 198.0], [75.1, 198.0], [75.2, 199.0], [75.3, 200.0], [75.4, 200.0], [75.5, 201.0], [75.6, 202.0], [75.7, 204.0], [75.8, 205.0], [75.9, 207.0], [76.0, 207.0], [76.1, 207.0], [76.2, 208.0], [76.3, 209.0], [76.4, 209.0], [76.5, 210.0], [76.6, 210.0], [76.7, 211.0], [76.8, 211.0], [76.9, 211.0], [77.0, 212.0], [77.1, 212.0], [77.2, 213.0], [77.3, 215.0], [77.4, 215.0], [77.5, 216.0], [77.6, 217.0], [77.7, 218.0], [77.8, 219.0], [77.9, 220.0], [78.0, 220.0], [78.1, 222.0], [78.2, 222.0], [78.3, 223.0], [78.4, 223.0], [78.5, 224.0], [78.6, 225.0], [78.7, 226.0], [78.8, 226.0], [78.9, 226.0], [79.0, 227.0], [79.1, 228.0], [79.2, 229.0], [79.3, 230.0], [79.4, 231.0], [79.5, 233.0], [79.6, 233.0], [79.7, 234.0], [79.8, 235.0], [79.9, 236.0], [80.0, 236.0], [80.1, 237.0], [80.2, 238.0], [80.3, 239.0], [80.4, 240.0], [80.5, 241.0], [80.6, 241.0], [80.7, 242.0], [80.8, 243.0], [80.9, 244.0], [81.0, 245.0], [81.1, 246.0], [81.2, 247.0], [81.3, 248.0], [81.4, 248.0], [81.5, 250.0], [81.6, 251.0], [81.7, 252.0], [81.8, 253.0], [81.9, 254.0], [82.0, 254.0], [82.1, 257.0], [82.2, 257.0], [82.3, 258.0], [82.4, 259.0], [82.5, 261.0], [82.6, 262.0], [82.7, 263.0], [82.8, 264.0], [82.9, 265.0], [83.0, 265.0], [83.1, 267.0], [83.2, 267.0], [83.3, 269.0], [83.4, 269.0], [83.5, 270.0], [83.6, 271.0], [83.7, 272.0], [83.8, 273.0], [83.9, 275.0], [84.0, 275.0], [84.1, 277.0], [84.2, 277.0], [84.3, 280.0], [84.4, 281.0], [84.5, 282.0], [84.6, 283.0], [84.7, 283.0], [84.8, 284.0], [84.9, 285.0], [85.0, 286.0], [85.1, 287.0], [85.2, 288.0], [85.3, 289.0], [85.4, 290.0], [85.5, 292.0], [85.6, 293.0], [85.7, 293.0], [85.8, 294.0], [85.9, 295.0], [86.0, 296.0], [86.1, 297.0], [86.2, 298.0], [86.3, 299.0], [86.4, 300.0], [86.5, 301.0], [86.6, 303.0], [86.7, 303.0], [86.8, 305.0], [86.9, 306.0], [87.0, 308.0], [87.1, 308.0], [87.2, 309.0], [87.3, 309.0], [87.4, 310.0], [87.5, 311.0], [87.6, 312.0], [87.7, 313.0], [87.8, 315.0], [87.9, 316.0], [88.0, 317.0], [88.1, 319.0], [88.2, 321.0], [88.3, 323.0], [88.4, 324.0], [88.5, 325.0], [88.6, 326.0], [88.7, 326.0], [88.8, 328.0], [88.9, 330.0], [89.0, 331.0], [89.1, 331.0], [89.2, 332.0], [89.3, 335.0], [89.4, 336.0], [89.5, 337.0], [89.6, 338.0], [89.7, 340.0], [89.8, 341.0], [89.9, 341.0], [90.0, 342.0], [90.1, 345.0], [90.2, 347.0], [90.3, 349.0], [90.4, 350.0], [90.5, 350.0], [90.6, 352.0], [90.7, 352.0], [90.8, 353.0], [90.9, 356.0], [91.0, 357.0], [91.1, 359.0], [91.2, 362.0], [91.3, 363.0], [91.4, 364.0], [91.5, 365.0], [91.6, 367.0], [91.7, 370.0], [91.8, 371.0], [91.9, 372.0], [92.0, 373.0], [92.1, 374.0], [92.2, 375.0], [92.3, 378.0], [92.4, 381.0], [92.5, 384.0], [92.6, 385.0], [92.7, 389.0], [92.8, 391.0], [92.9, 394.0], [93.0, 396.0], [93.1, 398.0], [93.2, 400.0], [93.3, 402.0], [93.4, 403.0], [93.5, 404.0], [93.6, 406.0], [93.7, 408.0], [93.8, 410.0], [93.9, 411.0], [94.0, 413.0], [94.1, 415.0], [94.2, 418.0], [94.3, 420.0], [94.4, 422.0], [94.5, 423.0], [94.6, 425.0], [94.7, 426.0], [94.8, 429.0], [94.9, 432.0], [95.0, 433.0], [95.1, 435.0], [95.2, 438.0], [95.3, 439.0], [95.4, 440.0], [95.5, 442.0], [95.6, 444.0], [95.7, 448.0], [95.8, 452.0], [95.9, 455.0], [96.0, 458.0], [96.1, 459.0], [96.2, 465.0], [96.3, 469.0], [96.4, 471.0], [96.5, 475.0], [96.6, 477.0], [96.7, 481.0], [96.8, 483.0], [96.9, 486.0], [97.0, 488.0], [97.1, 489.0], [97.2, 491.0], [97.3, 493.0], [97.4, 494.0], [97.5, 496.0], [97.6, 498.0], [97.7, 501.0], [97.8, 504.0], [97.9, 505.0], [98.0, 508.0], [98.1, 510.0], [98.2, 511.0], [98.3, 515.0], [98.4, 516.0], [98.5, 517.0], [98.6, 519.0], [98.7, 522.0], [98.8, 525.0], [98.9, 526.0], [99.0, 530.0], [99.1, 535.0], [99.2, 537.0], [99.3, 541.0], [99.4, 548.0], [99.5, 551.0], [99.6, 563.0], [99.7, 575.0], [99.8, 596.0], [99.9, 631.0], [100.0, 658.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 2435.0, "series": [{"data": [[0.0, 2435.0], [300.0, 278.0], [600.0, 7.0], [200.0, 456.0], [100.0, 637.0], [400.0, 182.0], [500.0, 89.0]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 96.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 3988.0, "series": [{"data": [[0.0, 3988.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 96.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6537430985E12, "maxY": 1.0, "series": [{"data": [[1.653743112E12, 1.0], [1.653743133E12, 1.0], [1.6537431105E12, 1.0], [1.6537431315E12, 1.0], [1.6537431135E12, 1.0], [1.653743106E12, 1.0], [1.653743127E12, 1.0], [1.6537431045E12, 1.0], [1.6537431255E12, 1.0], [1.653743109E12, 1.0], [1.65374313E12, 1.0], [1.6537431075E12, 1.0], [1.6537431285E12, 1.0], [1.6537431225E12, 1.0], [1.6537431E12, 1.0], [1.653743121E12, 1.0], [1.653743103E12, 1.0], [1.653743124E12, 1.0], [1.6537431015E12, 1.0], [1.6537431165E12, 1.0], [1.653743115E12, 1.0], [1.6537430985E12, 1.0], [1.6537431195E12, 1.0], [1.653743118E12, 1.0]], "isOverall": false, "label": "parallel bzm - Parallel", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653743133E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 19.03030303030302, "minX": 1.0, "maxY": 596.0, "series": [{"data": [[2.0, 21.00757575757575], [3.0, 23.59100204498978], [4.0, 27.069506726457394], [5.0, 31.815950920245406], [6.0, 40.68181818181818], [7.0, 41.223021582733814], [8.0, 42.495495495495476], [9.0, 55.609375], [10.0, 57.90769230769229], [11.0, 59.76190476190479], [12.0, 76.40909090909092], [13.0, 70.62962962962962], [14.0, 75.8214285714286], [15.0, 88.26086956521739], [16.0, 91.97142857142858], [17.0, 97.21739130434783], [18.0, 101.11764705882352], [19.0, 104.6], [20.0, 104.2857142857143], [21.0, 121.1904761904762], [22.0, 117.19354838709677], [23.0, 120.66666666666666], [24.0, 130.78947368421055], [25.0, 137.04000000000002], [26.0, 136.37500000000003], [27.0, 142.73076923076923], [28.0, 144.1818181818182], [29.0, 160.48000000000002], [30.0, 142.16666666666669], [31.0, 157.75000000000003], [32.0, 158.28000000000003], [33.0, 163.86486486486484], [35.0, 173.97297297297294], [34.0, 172.34615384615387], [37.0, 191.80952380952374], [36.0, 186.12903225806448], [38.0, 202.50000000000006], [39.0, 212.78260869565213], [41.0, 213.36], [40.0, 203.5789473684211], [43.0, 214.21875], [42.0, 217.08333333333334], [44.0, 236.45000000000002], [45.0, 240.55999999999997], [46.0, 241.45833333333331], [47.0, 235.9], [48.0, 193.13793103448276], [49.0, 240.82352941176472], [50.0, 279.25], [51.0, 258.00000000000006], [53.0, 262.16216216216225], [52.0, 260.5], [54.0, 276.0833333333333], [55.0, 282.4800000000001], [57.0, 285.0454545454545], [56.0, 295.62499999999994], [59.0, 306.84375], [58.0, 296.2142857142858], [61.0, 305.85185185185185], [60.0, 294.8571428571429], [63.0, 322.7692307692307], [62.0, 330.3636363636364], [67.0, 347.46153846153845], [65.0, 326.5], [64.0, 320.0588235294118], [66.0, 346.5], [68.0, 345.92857142857144], [71.0, 360.90909090909093], [69.0, 333.2727272727273], [70.0, 368.3], [75.0, 365.625], [74.0, 394.69230769230774], [72.0, 371.9166666666667], [73.0, 333.5], [78.0, 379.0], [76.0, 372.3], [77.0, 374.6428571428571], [79.0, 391.2727272727273], [81.0, 401.9090909090909], [82.0, 417.3333333333333], [80.0, 417.0], [83.0, 395.2857142857143], [87.0, 409.5454545454545], [86.0, 424.87500000000006], [84.0, 425.3], [85.0, 433.1], [91.0, 476.58333333333337], [89.0, 450.7857142857142], [88.0, 438.125], [90.0, 480.75], [95.0, 502.55555555555554], [94.0, 476.5], [92.0, 489.2], [93.0, 501.2857142857143], [99.0, 514.8749999999999], [98.0, 498.99999999999994], [97.0, 496.07142857142856], [96.0, 495.7894736842106], [101.0, 510.22222222222223], [102.0, 518.0], [100.0, 509.0769230769231], [103.0, 534.25], [107.0, 511.8], [106.0, 550.0], [105.0, 529.0], [104.0, 527.3333333333334], [109.0, 596.0], [108.0, 516.25], [110.0, 461.2], [1.0, 19.03030303030302]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}, {"data": [[23.935357492654262, 126.84745347698325]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 110.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2340.0, "minX": 1.6537430985E12, "maxY": 2467838.6666666665, "series": [{"data": [[1.653743112E12, 965052.0], [1.653743133E12, 991366.6666666666], [1.6537431105E12, 951514.6666666666], [1.6537431315E12, 2467838.6666666665], [1.6537431135E12, 1135611.3333333333], [1.653743106E12, 584334.6666666666], [1.653743127E12, 1695202.0], [1.6537431045E12, 550263.3333333334], [1.6537431255E12, 1737896.0], [1.653743109E12, 774668.0], [1.65374313E12, 1534278.6666666667], [1.6537431075E12, 747390.6666666666], [1.6537431285E12, 2193043.3333333335], [1.6537431225E12, 1699158.6666666667], [1.6537431E12, 190232.0], [1.653743121E12, 1557346.0], [1.653743103E12, 387258.0], [1.653743124E12, 1692364.6666666667], [1.6537431015E12, 366876.0], [1.6537431165E12, 1333346.6666666667], [1.653743115E12, 1163192.6666666667], [1.6537430985E12, 177150.66666666666], [1.6537431195E12, 1515568.6666666667], [1.653743118E12, 1354691.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.653743112E12, 12780.0], [1.653743133E12, 13140.0], [1.6537431105E12, 12600.0], [1.6537431315E12, 32580.0], [1.6537431135E12, 15030.0], [1.653743106E12, 7740.0], [1.653743127E12, 22410.0], [1.6537431045E12, 7290.0], [1.6537431255E12, 23040.0], [1.653743109E12, 10260.0], [1.65374313E12, 20340.0], [1.6537431075E12, 9900.0], [1.6537431285E12, 29070.0], [1.6537431225E12, 22500.0], [1.6537431E12, 2520.0], [1.653743121E12, 20610.0], [1.653743103E12, 5130.0], [1.653743124E12, 22410.0], [1.6537431015E12, 4860.0], [1.6537431165E12, 17640.0], [1.653743115E12, 15390.0], [1.6537430985E12, 2340.0], [1.6537431195E12, 20070.0], [1.653743118E12, 17910.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653743133E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 17.214285714285715, "minX": 1.6537430985E12, "maxY": 387.68141592920347, "series": [{"data": [[1.653743112E12, 22.774647887323944], [1.653743133E12, 267.43835616438366], [1.6537431105E12, 24.342857142857145], [1.6537431315E12, 296.5220994475135], [1.6537431135E12, 28.149700598802394], [1.653743106E12, 18.75581395348838], [1.653743127E12, 194.2329317269075], [1.6537431045E12, 19.987654320987648], [1.6537431255E12, 171.08203125000009], [1.653743109E12, 21.64035087719298], [1.65374313E12, 387.68141592920347], [1.6537431075E12, 19.390909090909098], [1.6537431285E12, 283.19195046439637], [1.6537431225E12, 73.08400000000005], [1.6537431E12, 17.214285714285715], [1.653743121E12, 44.41048034934499], [1.653743103E12, 18.964912280701757], [1.653743124E12, 73.98393574297188], [1.6537431015E12, 18.240740740740737], [1.6537431165E12, 32.65816326530613], [1.653743115E12, 27.684210526315788], [1.6537430985E12, 47.692307692307686], [1.6537431195E12, 58.70852017937222], [1.653743118E12, 31.944723618090443]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.653743133E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 17.17857142857143, "minX": 1.6537430985E12, "maxY": 387.16814159292016, "series": [{"data": [[1.653743112E12, 22.711267605633807], [1.653743133E12, 267.11643835616434], [1.6537431105E12, 24.314285714285706], [1.6537431315E12, 296.10773480662994], [1.6537431135E12, 27.90419161676646], [1.653743106E12, 18.674418604651166], [1.653743127E12, 193.89156626506016], [1.6537431045E12, 19.901234567901245], [1.6537431255E12, 170.76171875000006], [1.653743109E12, 21.508771929824558], [1.65374313E12, 387.16814159292016], [1.6537431075E12, 19.318181818181817], [1.6537431285E12, 282.7244582043342], [1.6537431225E12, 72.76399999999997], [1.6537431E12, 17.17857142857143], [1.653743121E12, 43.995633187772924], [1.653743103E12, 18.87719298245614], [1.653743124E12, 73.570281124498], [1.6537431015E12, 18.185185185185187], [1.6537431165E12, 32.53061224489795], [1.653743115E12, 27.596491228070178], [1.6537430985E12, 47.692307692307686], [1.6537431195E12, 58.43497757847533], [1.653743118E12, 31.768844221105518]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.653743133E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.785714285714285, "minX": 1.6537430985E12, "maxY": 80.64383561643835, "series": [{"data": [[1.653743112E12, 14.725352112676056], [1.653743133E12, 80.64383561643835], [1.6537431105E12, 15.55714285714286], [1.6537431315E12, 69.07182320441986], [1.6537431135E12, 17.616766467065872], [1.653743106E12, 11.43023255813954], [1.653743127E12, 45.97188755020079], [1.6537431045E12, 12.246913580246916], [1.6537431255E12, 44.847656250000014], [1.653743109E12, 13.631578947368425], [1.65374313E12, 66.53539823008849], [1.6537431075E12, 11.999999999999995], [1.6537431285E12, 61.823529411764675], [1.6537431225E12, 29.780000000000005], [1.6537431E12, 9.785714285714285], [1.653743121E12, 23.755458515283838], [1.653743103E12, 11.105263157894736], [1.653743124E12, 27.128514056224894], [1.6537431015E12, 10.462962962962964], [1.6537431165E12, 20.229591836734702], [1.653743115E12, 17.82456140350878], [1.6537430985E12, 12.076923076923078], [1.6537431195E12, 24.38565022421524], [1.653743118E12, 19.79899497487437]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.653743133E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.6537430985E12, "maxY": 658.0, "series": [{"data": [[1.653743112E12, 29.0], [1.653743133E12, 488.0], [1.6537431105E12, 95.0], [1.6537431315E12, 592.0], [1.6537431135E12, 116.0], [1.653743106E12, 26.0], [1.653743127E12, 328.0], [1.6537431045E12, 49.0], [1.6537431255E12, 373.0], [1.653743109E12, 76.0], [1.65374313E12, 658.0], [1.6537431075E12, 28.0], [1.6537431285E12, 549.0], [1.6537431225E12, 211.0], [1.6537431E12, 21.0], [1.653743121E12, 162.0], [1.653743103E12, 45.0], [1.653743124E12, 159.0], [1.6537431015E12, 35.0], [1.6537431165E12, 136.0], [1.653743115E12, 97.0], [1.6537430985E12, 234.0], [1.6537431195E12, 254.0], [1.653743118E12, 105.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.653743112E12, 26.0], [1.653743133E12, 403.0], [1.6537431105E12, 27.0], [1.6537431315E12, 496.0], [1.6537431135E12, 35.60000000000005], [1.653743106E12, 22.0], [1.653743127E12, 293.0], [1.6537431045E12, 23.799999999999997], [1.6537431255E12, 249.20000000000005], [1.653743109E12, 25.0], [1.65374313E12, 525.6], [1.6537431075E12, 23.0], [1.6537431285E12, 480.6], [1.6537431225E12, 136.0], [1.6537431E12, 19.1], [1.653743121E12, 81.0], [1.653743103E12, 21.0], [1.653743124E12, 126.0], [1.6537431015E12, 20.0], [1.6537431165E12, 49.30000000000001], [1.653743115E12, 30.0], [1.6537430985E12, 199.10000000000002], [1.6537431195E12, 148.79999999999998], [1.653743118E12, 47.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.653743112E12, 28.569999999999993], [1.653743133E12, 472.02000000000004], [1.6537431105E12, 94.59], [1.6537431315E12, 571.22], [1.6537431135E12, 109.87999999999994], [1.653743106E12, 26.0], [1.653743127E12, 318.5], [1.6537431045E12, 49.0], [1.6537431255E12, 357.86], [1.653743109E12, 73.89999999999992], [1.65374313E12, 645.8399999999999], [1.6537431075E12, 27.89], [1.6537431285E12, 540.52], [1.6537431225E12, 189.92000000000007], [1.6537431E12, 21.0], [1.653743121E12, 138.4999999999995], [1.653743103E12, 45.0], [1.653743124E12, 155.0], [1.6537431015E12, 35.0], [1.6537431165E12, 136.0], [1.653743115E12, 94.12], [1.6537430985E12, 234.0], [1.6537431195E12, 252.27999999999997], [1.653743118E12, 105.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.653743112E12, 27.0], [1.653743133E12, 435.90000000000003], [1.6537431105E12, 41.69999999999993], [1.6537431315E12, 523.0], [1.6537431135E12, 51.0], [1.653743106E12, 23.0], [1.653743127E12, 307.0], [1.6537431045E12, 25.799999999999983], [1.6537431255E12, 278.29999999999995], [1.653743109E12, 30.0], [1.65374313E12, 567.8999999999999], [1.6537431075E12, 24.0], [1.6537431285E12, 507.20000000000005], [1.6537431225E12, 166.45], [1.6537431E12, 20.549999999999997], [1.653743121E12, 92.0], [1.653743103E12, 24.39999999999992], [1.653743124E12, 141.0], [1.6537431015E12, 23.0], [1.6537431165E12, 77.29999999999995], [1.653743115E12, 44.0], [1.6537430985E12, 225.94999999999996], [1.6537431195E12, 184.99999999999991], [1.653743118E12, 59.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.653743112E12, 17.0], [1.653743133E12, 66.0], [1.6537431105E12, 15.0], [1.6537431315E12, 93.0], [1.6537431135E12, 20.0], [1.653743106E12, 14.0], [1.653743127E12, 57.0], [1.6537431045E12, 15.0], [1.6537431255E12, 31.0], [1.653743109E12, 14.0], [1.65374313E12, 145.0], [1.6537431075E12, 14.0], [1.6537431285E12, 87.0], [1.6537431225E12, 30.0], [1.6537431E12, 15.0], [1.653743121E12, 24.0], [1.653743103E12, 15.0], [1.653743124E12, 29.0], [1.6537431015E12, 15.0], [1.6537431165E12, 21.0], [1.653743115E12, 21.0], [1.6537430985E12, 15.0], [1.6537431195E12, 24.0], [1.653743118E12, 23.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.653743112E12, 23.0], [1.653743133E12, 275.0], [1.6537431105E12, 22.5], [1.6537431315E12, 294.5], [1.6537431135E12, 25.0], [1.653743106E12, 19.0], [1.653743127E12, 191.0], [1.6537431045E12, 19.0], [1.6537431255E12, 180.0], [1.653743109E12, 20.0], [1.65374313E12, 409.0], [1.6537431075E12, 19.0], [1.6537431285E12, 264.0], [1.6537431225E12, 59.0], [1.6537431E12, 17.0], [1.653743121E12, 35.0], [1.653743103E12, 18.0], [1.653743124E12, 69.0], [1.6537431015E12, 18.0], [1.6537431165E12, 27.0], [1.653743115E12, 26.0], [1.6537430985E12, 19.0], [1.6537431195E12, 33.0], [1.653743118E12, 28.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653743133E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 17.0, "minX": 6.0, "maxY": 384.0, "series": [{"data": [[38.0, 18.0], [43.0, 19.0], [57.0, 19.0], [63.0, 19.0], [76.0, 20.0], [81.0, 21.0], [94.0, 22.0], [6.0, 112.0], [97.0, 23.0], [98.0, 26.0], [113.0, 26.0], [117.0, 25.0], [119.0, 26.0], [135.0, 28.0], [132.0, 27.0], [128.0, 309.0], [139.0, 29.0], [151.0, 43.0], [149.0, 105.0], [146.0, 275.0], [153.0, 34.0], [156.0, 43.0], [162.0, 261.0], [170.0, 60.0], [173.0, 49.0], [183.0, 195.0], [192.0, 242.5], [195.0, 227.0], [218.0, 193.0], [265.0, 384.0], [19.0, 17.0], [20.0, 18.0], [25.0, 18.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 265.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 17.0, "minX": 6.0, "maxY": 384.0, "series": [{"data": [[38.0, 18.0], [43.0, 19.0], [57.0, 19.0], [63.0, 19.0], [76.0, 20.0], [81.0, 21.0], [94.0, 22.0], [6.0, 112.0], [97.0, 23.0], [98.0, 25.0], [113.0, 26.0], [117.0, 25.0], [119.0, 26.0], [135.0, 28.0], [132.0, 27.0], [128.0, 309.0], [139.0, 29.0], [151.0, 43.0], [149.0, 105.0], [146.0, 275.0], [153.0, 33.0], [156.0, 42.0], [162.0, 260.5], [170.0, 59.0], [173.0, 48.0], [183.0, 195.0], [192.0, 242.5], [195.0, 227.0], [218.0, 193.0], [265.0, 384.0], [19.0, 17.0], [20.0, 18.0], [25.0, 18.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 265.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 17.333333333333332, "minX": 1.6537430985E12, "maxY": 191.33333333333334, "series": [{"data": [[1.653743112E12, 94.66666666666667], [1.653743133E12, 84.0], [1.6537431105E12, 92.66666666666667], [1.6537431315E12, 189.33333333333334], [1.6537431135E12, 112.66666666666667], [1.653743106E12, 56.666666666666664], [1.653743127E12, 188.66666666666666], [1.6537431045E12, 55.333333333333336], [1.6537431255E12, 186.66666666666666], [1.653743109E12, 76.0], [1.65374313E12, 190.0], [1.6537431075E12, 74.0], [1.6537431285E12, 191.33333333333334], [1.6537431225E12, 169.33333333333334], [1.6537431E12, 19.333333333333332], [1.653743121E12, 152.0], [1.653743103E12, 38.0], [1.653743124E12, 172.0], [1.6537431015E12, 35.333333333333336], [1.6537431165E12, 131.33333333333334], [1.653743115E12, 114.0], [1.6537430985E12, 17.333333333333332], [1.6537431195E12, 149.33333333333334], [1.653743118E12, 132.66666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653743133E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 17.333333333333332, "minX": 1.6537430985E12, "maxY": 241.33333333333334, "series": [{"data": [[1.653743112E12, 94.66666666666667], [1.653743133E12, 97.33333333333333], [1.6537431105E12, 93.33333333333333], [1.6537431315E12, 241.33333333333334], [1.6537431135E12, 111.33333333333333], [1.653743106E12, 57.333333333333336], [1.653743127E12, 166.0], [1.6537431045E12, 54.0], [1.6537431255E12, 170.66666666666666], [1.653743109E12, 76.0], [1.65374313E12, 150.66666666666666], [1.6537431075E12, 73.33333333333333], [1.6537431285E12, 215.33333333333334], [1.6537431225E12, 166.66666666666666], [1.6537431E12, 18.666666666666668], [1.653743121E12, 152.66666666666666], [1.653743103E12, 38.0], [1.653743124E12, 166.0], [1.6537431015E12, 36.0], [1.6537431165E12, 130.66666666666666], [1.653743115E12, 114.0], [1.6537430985E12, 17.333333333333332], [1.6537431195E12, 148.66666666666666], [1.653743118E12, 132.66666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.653743133E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 17.333333333333332, "minX": 1.6537430985E12, "maxY": 241.33333333333334, "series": [{"data": [[1.653743112E12, 94.66666666666667], [1.653743133E12, 97.33333333333333], [1.6537431105E12, 93.33333333333333], [1.6537431315E12, 241.33333333333334], [1.6537431135E12, 111.33333333333333], [1.653743106E12, 57.333333333333336], [1.653743127E12, 166.0], [1.6537431045E12, 54.0], [1.6537431255E12, 170.66666666666666], [1.653743109E12, 76.0], [1.65374313E12, 150.66666666666666], [1.6537431075E12, 73.33333333333333], [1.6537431285E12, 215.33333333333334], [1.6537431225E12, 166.66666666666666], [1.6537431E12, 18.666666666666668], [1.653743121E12, 152.66666666666666], [1.653743103E12, 38.0], [1.653743124E12, 166.0], [1.6537431015E12, 36.0], [1.6537431165E12, 130.66666666666666], [1.653743115E12, 114.0], [1.6537430985E12, 17.333333333333332], [1.6537431195E12, 148.66666666666666], [1.653743118E12, 132.66666666666666]], "isOverall": false, "label": "https://localhost:44313/Home/Statistics-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.653743133E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 17.333333333333332, "minX": 1.6537430985E12, "maxY": 241.33333333333334, "series": [{"data": [[1.653743112E12, 94.66666666666667], [1.653743133E12, 97.33333333333333], [1.6537431105E12, 93.33333333333333], [1.6537431315E12, 241.33333333333334], [1.6537431135E12, 111.33333333333333], [1.653743106E12, 57.333333333333336], [1.653743127E12, 166.0], [1.6537431045E12, 54.0], [1.6537431255E12, 170.66666666666666], [1.653743109E12, 76.0], [1.65374313E12, 150.66666666666666], [1.6537431075E12, 73.33333333333333], [1.6537431285E12, 215.33333333333334], [1.6537431225E12, 166.66666666666666], [1.6537431E12, 18.666666666666668], [1.653743121E12, 152.66666666666666], [1.653743103E12, 38.0], [1.653743124E12, 166.0], [1.6537431015E12, 36.0], [1.6537431165E12, 130.66666666666666], [1.653743115E12, 114.0], [1.6537430985E12, 17.333333333333332], [1.6537431195E12, 148.66666666666666], [1.653743118E12, 132.66666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.653743133E12, "title": "Total Transactions Per Second"}},
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

