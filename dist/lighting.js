// Visual presets are independent of the game clock and random number generator.
export const LIGHTING={
 day:{label:'晴日',sky:'#b7d3dc',sun:'#fff2dc',power:3.2,position:[-10,30,18],hemi:'#fff3dc',ground:'#6f8e9e',ambient:.95,fill:'#b4d9ef',fillPower:1,environment:.32,exposure:.94,bloom:.08,threshold:1.2,windows:0,lamps:0,waterDeep:'#135c7d',waterShallow:'#3da8ad'},
 golden:{label:'暖阳傍晚',sky:'#dfbba9',sun:'#ffce91',power:3.1,position:[-18,12,12],hemi:'#ffe2bb',ground:'#7e858d',ambient:.75,fill:'#a9c7e9',fillPower:.7,environment:.25,exposure:.97,bloom:.14,threshold:1,windows:.35,lamps:1,waterDeep:'#405d78',waterShallow:'#96aaa3'},
 night:{label:'灯火夜色',sky:'#263954',sun:'#bacff5',power:1.05,position:[-12,24,8],hemi:'#95b4e6',ground:'#384b72',ambient:.48,fill:'#849ed6',fillPower:.45,environment:.12,exposure:1.05,bloom:.28,threshold:.85,windows:1.8,lamps:4,waterDeep:'#0b203f',waterShallow:'#23466d'}
};
export const lightingMode=value=>Object.hasOwn(LIGHTING,value)?value:'day';
