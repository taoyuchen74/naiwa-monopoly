"use strict";(()=>{var ut=[{from:8,merge:16,path:[40,41,42,43],name:"\u677E\u6797\u5C0F\u5F84"},{from:28,merge:36,path:[44,45,46,47],name:"\u6E29\u6CC9\u6808\u9053"}];var Wr=[{id:"clear",name:"\u6674\u6717",duration:0,branches:[],text:"\u4E24\u6761\u652F\u8DEF\u5F00\u653E"},{id:"rain",name:"\u66B4\u96E8",duration:2,branches:[0],text:"\u677E\u6797\u5C0F\u5F84\u5165\u53E3\u5173\u95ED\uFF0C\u5DF2\u8FDB\u5165\u8005\u53EF\u79BB\u5F00"},{id:"rockfall",name:"\u843D\u77F3",duration:2,branches:[1],text:"\u6E29\u6CC9\u6808\u9053\u5165\u53E3\u5173\u95ED\uFF0C\u5DF2\u8FDB\u5165\u8005\u53EF\u79BB\u5F00"},{id:"fog",name:"\u5C71\u96FE",duration:1,branches:[0,1],text:"\u4E24\u6761\u652F\u8DEF\u5165\u53E3\u5173\u95ED\uFF0C\u4E3B\u73AF\u59CB\u7EC8\u5F00\u653E"}],dt=[{id:"forest-coupons",name:"\u6E29\u6CC9\u8865\u7ED9",art:"rest",text:"\u9886\u53D6\u6E29\u6CC9\u8865\u7ED9\uFF0C\u83B7\u5F9715\u70B9\u5238\u3002",kind:"coupons",amount:15,negative:!1},{id:"forest-market",name:"\u5C71\u8D27\u4EA4\u6613",art:"house",text:"\u552E\u51FA\u5C71\u8D27\uFF0C\u83B7\u5F97120\u5976\u5E01\u3002",kind:"gain",amount:120,negative:!1},{id:"forest-maintenance",name:"\u5C71\u9053\u7EF4\u62A4",art:"factory",text:"\u5206\u62C5\u5C71\u9053\u7EF4\u62A4\u8D39\u7528100\u5976\u5E01\u3002",kind:"loss",amount:100,negative:!0}];function ki(s){if(s.mapVersion!==4)return s.weather===void 0||s.weather===null;let e=s.weather,t=e&&Wr.find(n=>n.id===e.kind);return!!(e&&t&&Object.keys(e).length===4&&Number.isSafeInteger(e.startedRound)&&e.startedRound>=1&&(e.startedRound-1)%3===0&&e.startedRound<=s.round&&e.nextRound===e.startedRound+3&&s.round<e.nextRound&&e.untilRound===e.startedRound+t.duration-1)}var q=Object.freeze({handLimit:15,auctionStartRatio:.5,auctionIncrement:20,auctionUnit:10,cardOverflowCash:60,startIncome:400,startTalentBonus:80,startCoupons:25,couponPickup:10,couponCap:150,loanLimit:1800,weekLength:7,bankClosedDay:3,stockClosedDay:0,depositInterest:.005,loanInterest:.04,propertySaleRatio:.65,chainRentCap:400}),zi=5,ft=Object.freeze([20,30,50,80]);var Ne={1:{schemaVersion:1,id:"classic-island",name:"\u7ECF\u5178\u53D1\u8D22\u5C9B",description:"\u4E0D\u89C4\u5219\u73AF\u5C9B\u4E0E\u8DE8\u5C9B\u957F\u6377\u5F84\u3002\u897F\u4FA7\u5165\u53E3\u901A\u5F80\u4E1C\u5CB8\uFF0C\u4E1C\u4FA7\u5165\u53E3\u901A\u5F80\u897F\u5CB8\uFF1B\u4FDD\u5B58\u7684\u5BF9\u5C40\u59CB\u7EC8\u4FDD\u7559\u81EA\u5DF1\u7684\u5730\u56FE\u3002",branches:[{from:35,merge:15},{from:15,merge:35}],pointStops:[2,8,14,20,26,32,38,42,46],eventPool:["event-01","event-02","event-03","event-04","event-05","event-06","event-07","event-08","event-09","event-10","event-11","event-12","event-13"],startingCash:3200,victory:{rounds:50,type:"ranking",target:0},tiles:[{id:0,x:-9.767944512883028,z:7.284330371132955,kind:"start",name:"\u5976\u5BB6\u8D77\u70B9",description:"\u6BCF\u6B21\u7ECF\u8FC7\u9886\u53D6 400 \u5976\u5E01",group:0,price:180,next:[1],yaw:-.6772974633727715,lotX:-11.209329929484825,lotZ:9.076649561681242,facing:2.4642951902170216},{id:1,x:-8.415408086301957,z:8.226759668285204,kind:"property",name:"\u5976\u8336\u5C0F\u7AD9",description:"",group:0,price:210,next:[2],yaw:-.5354096349178885,lotX:-9.588852889540242,lotZ:10.204896997631442,facing:2.6061830186719046},{id:2,x:-6.9139911497528725,z:8.977315328732596,kind:"property",name:"\u5927\u7B11\u7167\u76F8\u9986",description:"",group:0,price:240,next:[3],yaw:-.3896862886351344,lotX:-7.787757106206337,lotZ:11.104880381402657,facing:2.751906364954659},{id:3,x:-5.238855568535244,z:9.531332445238748,kind:"event",name:"\u8868\u60C5\u5305\u5E7F\u573A",description:"",group:0,price:180,next:[4],yaw:-.2511630776847006,lotX:-5.810476206316422,lotZ:11.759167682966762,facing:2.8904295759050926},{id:4,x:-3.3701978577215543,z:9.886586062694706,kind:"property",name:"\u5976\u86D9\u5267\u573A",description:"",group:0,price:210,next:[5],yaw:-.1292151285065035,lotX:-3.6665663221661875,lotZ:12.167411731894948,facing:3.0123775250832896},{id:5,x:-1.3070451054270515,z:10.042228409438989,kind:"property",name:"\u5976\u5757\u9762\u5305\u623F",description:"",group:0,price:240,next:[6],yaw:-.025957089838812238,lotX:-1.3667397081188382,lotZ:12.341453616853318,facing:3.115635563750981},{id:6,x:.9224788522699345,z:9.998036489499743,kind:"bank",name:"\u5976\u5E01\u94F6\u884C",description:"",group:0,price:180,next:[7],yaw:.06305553109904195,lotX:1.067410487864752,lotZ:12.293465604284997,facing:-3.078537122490751},{id:7,x:3.2569024620657783,z:9.754064256834518,kind:"property",name:"\u5976\u866B\u751C\u54C1\u5C4B",description:"",group:1,price:300,next:[8],yaw:.14575782624168063,lotX:3.5909596639515717,lotZ:12.029675336493833,facing:-2.9958348273481126},{id:8,x:5.604352975069379,z:9.310742521288779,kind:"property",name:"\u91D1\u8033\u9F20\u5546\u5E97",description:"",group:1,price:330,next:[9],yaw:.23178673639554812,lotX:6.132701716025423,lotZ:11.549234783488977,facing:-2.909805917194245},{id:9,x:7.852315555314901,z:8.669414216720172,kind:"shop",name:"\u5976\u5BB6\u4FBF\u5229\u5E97",description:"",group:1,price:270,next:[10],yaw:.33254813114371656,lotX:8.603156566926899,lotZ:10.84340542536879,facing:-2.8090445224460767},{id:10,x:9.882330447888693,z:7.833238417055687,kind:"property",name:"\u5976\u5BB6\u5C0F\u82B1\u56ED",description:"",group:1,price:300,next:[11],yaw:.4623377497317402,lotX:10.90822621629888,lotZ:9.891766500992865,facing:-2.679254903858053},{id:11,x:11.586666453117674,z:6.808349112139572,kind:"property",name:"\u5FEB\u4E50\u6D17\u6FA1\u5802",description:"",group:1,price:330,next:[12],yaw:.6386204982348835,lotX:12.95766972932722,lotZ:8.655062413283712,facing:-2.5029721553549096},{id:12,x:12.883561390840754,z:5.605119167089025,kind:"hospital",name:"\u5976\u86D9\u7597\u517B\u9662",description:"",group:1,price:270,next:[13],yaw:.8759616968227837,lotX:14.65032845209001,lotZ:7.077713527829506,facing:-2.2656309567670094},{id:13,x:13.727910315520573,z:4.239359832367178,kind:"property",name:"\u5976\u8336\u591C\u5E02",description:"",group:1,price:300,next:[14],yaw:1.1656400113652696,lotX:15.841704143388778,lotZ:5.145933410884815,facing:-1.9759526422245237},{id:14,x:14.115247275025105,z:2.733283850513423,kind:"property",name:"\u5976\u5E01\u7801\u5934",description:"",group:2,price:420,next:[15],yaw:1.4590781868220837,lotX:16.40090911293226,lotZ:2.989701405947692,facing:-1.6825144667677097},{id:15,x:14.0782967011052,z:1.1160760591611674,kind:"stock",name:"\u5976\u5BB6\u8BC1\u5238\u6240",description:"",group:2,price:360,next:[16,44],yaw:1.702471146939566,lotX:16.358386496417918,lotZ:.8140983690732886,facing:-1.4391215066502272},{id:16,x:13.67695507093285,z:-.5760519538138723,kind:"property",name:"\u5927\u809A\u5B50\u65C5\u9986",description:"",group:2,price:390,next:[17],yaw:1.880782429662575,lotX:15.86733203217102,lotZ:-1.277656377743079,facing:-1.2608102239272183},{id:17,x:12.983957741080578,z:-2.300400183105425,kind:"property",name:"\u7EFF\u773C\u775B\u4E66\u5E97",description:"",group:2,price:420,next:[18],yaw:2.008751969795995,lotX:15.066884992931605,lotZ:-3.2758047471178786,facing:-1.1328406837937988},{id:18,x:12.069386829159221,z:-4.008932856304483,kind:"event",name:"\u91CE\u751F\u72D7\u5976\u644A",description:"",group:2,price:360,next:[19],yaw:2.1083143392875323,lotX:14.045045698968297,lotZ:-5.186545708707481,facing:-1.033278314302261},{id:19,x:10.987388278588547,z:-5.650007110130059,kind:"property",name:"\u5976\u9F20\u73A9\u5177\u5C4B",description:"",group:2,price:390,next:[20],yaw:2.2000189137375603,lotX:12.846904406302922,lotZ:-7.00359485045949,facing:-.9415737398522327},{id:20,x:9.76794451288303,z:-7.170581692661673,kind:"property",name:"\u661F\u91CE\u5C0F\u5267\u573A",description:"",group:2,price:420,next:[21],yaw:2.301702110478801,lotX:11.480455644226476,lotZ:-8.705933647434517,facing:-.8398905431109921},{id:21,x:8.415408086301959,z:-8.51875957772782,kind:"spirit",name:"\u5927\u7B11\u795E\u6BBF",description:"",group:3,price:450,next:[22],yaw:2.4270073486164354,lotX:9.92260780821894,lotZ:-10.256099210112165,facing:-.7145853049733577},{id:22,x:6.913991149752879,z:-9.646480840469865,kind:"property",name:"\u5976\u86D9\u8BBE\u8BA1\u5BA4",description:"",group:3,price:480,next:[23],yaw:2.5811716996182414,lotX:8.136539604129156,lotZ:-11.594653131798887,facing:-.5604209539715517},{id:23,x:5.238855568535246,z:-10.512160976631556,kind:"property",name:"\u5976\u76D6\u5DE5\u5382",description:"",group:3,price:510,next:[24],yaw:2.756456114117213,lotX:6.102932627510927,lotZ:-12.643679411023324,facing:-.3851365394725802},{id:24,x:3.370197857721556,z:-11.083067283256108,kind:"rest",name:"\u5976\u86D9\u7684\u5C0F\u7A9D",description:"",group:3,price:450,next:[25],yaw:2.9347463209146993,lotX:3.842559171358332,lotZ:-13.334039248736651,facing:-.20684633267509375},{id:25,x:1.3070451054270533,z:-11.33724240092558,kind:"property",name:"\u5FAE\u7B11\u4FBF\u5229\u5E97",description:"",group:3,price:480,next:[26],yaw:3.0992781492586317,lotX:1.4043394247958236,lotZ:-13.635183613276011,facing:-.04231450433116173},{id:26,x:-.9224788522699328,z:-11.264818259531781,kind:"property",name:"\u5976\u5BB6\u9910\u5385",description:"",group:3,price:510,next:[27],yaw:-3.039270403493763,lotX:-1.1574095782293354,lotZ:-13.552788441592769,facing:.10232225009603037},{id:27,x:-3.256902462065776,z:-10.868612379573685,kind:"shop",name:"\u5976\u4F34\u8865\u7ED9\u7AD9",description:"",group:3,price:450,next:[28],yaw:-2.910655084423043,lotX:-3.7833501584871296,lotZ:-13.107552491084633,facing:.23093756916675046},{id:28,x:-5.604352975069378,z:-10.163957260967969,kind:"property",name:"\u91D1\u86D9\u5C0F\u516C\u5BD3",description:"",group:4,price:570,next:[29],yaw:-2.789026062225049,lotX:-6.3985605960619525,lotZ:-12.322483205856589,facing:.35256659136474455},{id:29,x:-7.8523155553149,z:-9.177776969922938,kind:"property",name:"\u5976\u7F50\u8F66\u7AD9",description:"",group:4,price:600,next:[30],yaw:-2.6634687568931295,lotX:-8.910578375708821,lotZ:-11.219854295337404,facing:.47812389669666405},{id:30,x:-9.882330447888691,z:-7.946987095526967,kind:"bank",name:"\u5976\u5E01\u50A8\u84C4\u6240",description:"",group:4,price:540,next:[31],yaw:-2.5224017898805027,lotX:-11.217196241054806,lotZ:-9.819988247217749,facing:.6191908637092902},{id:31,x:-11.586666453117674,z:-6.516349202696955,kind:"property",name:"\u86CB\u58F3\u5C55\u89C8\u9986",description:"",group:4,price:570,next:[32],yaw:-2.3545640747760146,lotX:-13.215661505985427,lotZ:-8.14004102004789,facing:.7870285788137786},{id:32,x:-12.883561390840754,z:-4.935953655351754,kind:"property",name:"\u5976\u9999\u5546\u573A",description:"",group:4,price:600,next:[33],yaw:-2.15226056312971,lotX:-14.80557781984536,lotZ:-6.199224349477277,facing:.9893320904600831},{id:33,x:-13.727910315520573,z:-3.25853130097437,kind:"event",name:"\u5976\u86D9\u8857\u821E\u53F0",description:"",group:4,price:540,next:[34],yaw:-1.918431642708027,lotX:-15.89032645618109,lotZ:-4.042085022560115,facing:1.2231610108817663},{id:34,x:-14.115247275025105,z:-1.536802629952021,kind:"property",name:"\u5927\u7B11\u7535\u5F71\u9662",description:"",group:4,price:570,next:[35],yaw:-1.6723769847901164,lotX:-16.403391050696044,lotZ:-1.7700365508519276,facing:1.469215668799677},{id:35,x:-14.078296701105202,z:.17893793232542426,kind:"property",name:"\u5706\u809A\u5B50\u98DF\u5802",description:"",group:5,price:690,next:[36,40],yaw:-1.4418299177076037,lotX:-16.359196012349557,lotZ:.4747391019732657,facing:1.6997627358821896},{id:36,x:-13.67695507093285,z:1.8428337238459096,kind:"tax",name:"\u5976\u6CE1\u6E05\u6D01\u7AD9",description:"",group:5,price:630,next:[37],yaw:-1.244694300498157,lotX:-15.85574107897103,lotZ:2.5796454577217003,facing:1.8968983530916363},{id:37,x:-12.98395774108058,z:3.4149483058445886,kind:"property",name:"\u5976\u5BB6\u90AE\u5C40",description:"",group:5,price:660,next:[38],yaw:-1.0815438528999985,lotX:-15.01413190062401,lotZ:4.495870542604536,facing:2.0600488006897946},{id:38,x:-12.069386829159223,z:4.86214759598367,kind:"property",name:"\u73CD\u73E0\u5976\u8336\u94FA",description:"",group:5,price:690,next:[39],yaw:-.941677362919724,lotX:-13.929043209803618,lotZ:6.215542640281006,facing:2.199915290670069},{id:39,x:-10.987388278588549,z:6.158369863332823,kind:"stock",name:"\u5976\u5BB6\u4EA4\u6613\u6240",description:"",group:5,price:630,next:[0],yaw:-.8109535728639912,lotX:-12.654760242115758,lotZ:7.742627018987618,facing:2.330639080725802},{id:40,x:-8.44697802066312,z:-1.8084398757895779,kind:"property",name:"\u5976\u8336\u5C0F\u7AD9",description:"",group:4,price:570,next:[41],yaw:.27222762583345594,lotX:-9.065396716993792,lotZ:-4.0237408296169965,facing:.27222762583345594},{id:41,x:-2.815659340221039,z:-2.965115927232347,kind:"property",name:"\u5927\u7B11\u7167\u76F8\u9986",description:"",group:4,price:600,next:[42],yaw:.08584722973111517,lotX:-3.0128655335528385,lotZ:-5.256645922085475,facing:.08584722973111517},{id:42,x:2.815659340221039,z:-2.7776883018651986,kind:"property",name:"\u5927\u7B11\u7167\u76F8\u9986",description:"",group:4,price:540,next:[43],yaw:-.15145609549912645,lotX:3.1626780931406424,lotZ:-5.0513588991862175,facing:-.15145609549912648},{id:43,x:8.446978020663124,z:-1.2461569996881323,kind:"property",name:"\u5976\u86D9\u5267\u573A",description:"",group:4,price:570,next:[15],yaw:-.3328604236164859,lotX:9.198497916740934,lotZ:-3.4199136203334146,facing:-.3328604236164859},{id:44,x:8.446978020663119,z:3.1034538672761696,kind:"property",name:"\u5976\u5757\u9762\u5305\u623F",description:"",group:5,price:690,next:[45],yaw:-2.8693650277563374,lotX:9.06539671699379,lotZ:5.318754821103589,facing:-2.8693650277563374},{id:45,x:2.8156593402210373,z:4.260129918718938,kind:"property",name:"\u5976\u5757\u9762\u5305\u623F",description:"",group:5,price:630,next:[46],yaw:-3.055745423858678,lotX:3.0128655335528367,lotZ:6.551659913572067,facing:-3.055745423858678},{id:46,x:-2.815659340221041,z:4.0727022933517905,kind:"property",name:"\u5976\u866B\u751C\u54C1\u5C4B",description:"",group:5,price:660,next:[47],yaw:2.9901365580906667,lotX:-3.162678093140644,lotZ:6.34637289067281,facing:2.9901365580906667},{id:47,x:-8.446978020663126,z:2.541170991174724,kind:"property",name:"\u91D1\u8033\u9F20\u5546\u5E97",description:"",group:5,price:690,next:[35],yaw:2.8087322299733075,lotX:-9.198497916740935,lotZ:4.714927611820006,facing:2.8087322299733075}]},2:{schemaVersion:1,id:"riverside-town",name:"\u5976\u5BB6\u6EE8\u6CB3\u9547",description:"48 \u683C\u57CE\u9547\u73AF\u7EBF\uFF0C\u5357\u5317\u53CC\u94F6\u884C\u4E0E\u8865\u7ED9\u5E97\uFF1B\u4E24\u6761\u652F\u8DEF\u5404\u7701 3 \u683C\u3002\u897F\u4FA7\u652F\u8DEF\u8DF3\u8FC7\u8D77\u70B9\u5956\u52B1\uFF0C\u4E1C\u4FA7\u652F\u8DEF\u7ED5\u5F00\u533B\u9662\u53CA\u795E\u6BBF\u3002",branches:[{from:35,merge:3},{from:15,merge:23}],pointStops:[2,8,14,20,26,32,38,42,46],eventPool:["event-01","event-02","event-03","event-04","event-05","event-06","event-07","event-08","event-09","event-10","event-11","event-12","event-13"],startingCash:3200,victory:{rounds:50,type:"ranking",target:0},tiles:[{id:0,x:-14,z:0,group:0,kind:"start",name:"\u5976\u5BB6\u8F66\u7AD9",price:180,description:"",next:[1],yaw:1.5707963267948966,lotX:-16.3,lotZ:0,facing:1.5707963267948966},{id:1,x:-13.6,z:-1.8,group:0,kind:"property",name:"\u73CD\u73E0\u5C0F\u5C4B",price:210,description:"",next:[2],yaw:1.3521273809209544,lotX:-15.84523023842309,lotZ:-2.2989400529829096,facing:1.3521273809209544},{id:2,x:-13.2,z:-3.6,group:0,kind:"property",name:"\u7EFF\u773C\u775B\u4E66\u5E97",price:240,description:"",next:[3],yaw:1.3521273809209549,lotX:-15.44523023842309,lotZ:-4.0989400529829085,facing:1.3521273809209549},{id:3,x:-12.8,z:-5.3999999999999995,group:0,kind:"event",name:"\u6668\u5149\u5E7F\u573A",price:180,description:"",next:[4],yaw:1.352127380920955,lotX:-15.045230238423091,lotZ:-5.898940052982908,facing:1.3521273809209549},{id:4,x:-12.4,z:-7.2,group:0,kind:"property",name:"\u5DF7\u53E3\u8336\u9986",price:210,description:"",next:[5],yaw:1.3521273809209544,lotX:-14.64523023842309,lotZ:-7.69894005298291,facing:1.3521273809209544},{id:5,x:-12,z:-9,group:0,kind:"property",name:"\u6668\u5149\u5976\u8336\u94FA",price:240,description:"",next:[6],yaw:.6659692373791097,lotX:-13.420989569443378,lotZ:-10.808532179291571,facing:.6659692373791097},{id:6,x:-9.6,z:-9.4,group:0,kind:"bank",name:"\u5317\u5CB8\u94F6\u884C",price:180,description:"",next:[7],yaw:.16514867741462697,lotX:-9.978117670802321,lotZ:-11.66870602481393,facing:.16514867741462697},{id:7,x:-7.199999999999999,z:-9.8,group:1,kind:"property",name:"\u661F\u5149\u7167\u76F8\u9986",price:280,description:"",next:[8],yaw:.16514867741462666,lotX:-7.578117670802321,lotZ:-12.068706024813931,facing:.16514867741462666},{id:8,x:-4.800000000000001,z:-10.2,group:1,kind:"property",name:"\u56DE\u58F0\u4E66\u5C4B",price:310,description:"",next:[9],yaw:.16514867741462658,lotX:-5.1781176708023215,lotZ:-12.46870602481393,facing:.16514867741462658},{id:9,x:-2.3999999999999986,z:-10.6,group:1,kind:"property",name:"\u5976\u4F34\u7535\u53F0",price:250,description:"",next:[10],yaw:.16514867741462697,lotX:-2.7781176708023207,lotZ:-12.86870602481393,facing:.16514867741462697},{id:10,x:0,z:-11,group:1,kind:"shop",name:"\u5976\u8336\u8857\u8865\u7ED9\u5E97",price:280,description:"",next:[11],yaw:0,lotX:0,lotZ:-13.3,facing:0},{id:11,x:2.4000000000000004,z:-10.6,group:1,kind:"property",name:"\u5976\u5BB6\u5F71\u793E",price:310,description:"",next:[12],yaw:-.16514867741462697,lotX:2.7781176708023225,lotZ:-12.86870602481393,facing:-.16514867741462697},{id:12,x:4.800000000000001,z:-10.2,group:1,kind:"property",name:"\u661F\u5149\u7167\u76F8\u9986",price:250,description:"",next:[13],yaw:-.16514867741462666,lotX:5.178117670802322,lotZ:-12.46870602481393,facing:-.16514867741462666},{id:13,x:7.199999999999999,z:-9.8,group:1,kind:"property",name:"\u56DE\u58F0\u4E66\u5C4B",price:280,description:"",next:[14],yaw:-.16514867741462658,lotX:7.57811767080232,lotZ:-12.068706024813931,facing:-.16514867741462658},{id:14,x:9.600000000000001,z:-9.4,group:2,kind:"property",name:"\u8857\u89D2\u4ED3\u5E93",price:380,description:"",next:[15],yaw:-.16514867741462697,lotX:9.978117670802323,lotZ:-11.66870602481393,facing:-.16514867741462697},{id:15,x:12,z:-9,group:2,kind:"stock",name:"\u5E02\u6C11\u8BC1\u5238\u6240",price:320,description:"",next:[16,44],yaw:-.6659692373791101,lotX:13.420989569443378,lotZ:-10.808532179291571,facing:-.66596923737911},{id:16,x:12.4,z:-7.2,group:2,kind:"property",name:"\u5976\u7F50\u4F5C\u574A",price:350,description:"",next:[17],yaw:-1.3521273809209544,lotX:14.64523023842309,lotZ:-7.69894005298291,facing:-1.3521273809209544},{id:17,x:12.8,z:-5.4,group:2,kind:"property",name:"\u5976\u9999\u9762\u5305\u623F",price:380,description:"",next:[18],yaw:-1.3521273809209549,lotX:15.045230238423091,lotZ:-5.898940052982909,facing:-1.3521273809209549},{id:18,x:13.2,z:-3.6000000000000005,group:2,kind:"hospital",name:"\u5976\u5BB6\u533B\u9662",price:320,description:"",next:[19],yaw:-1.352127380920955,lotX:15.44523023842309,lotZ:-4.098940052982909,facing:-1.352127380920955},{id:19,x:13.6,z:-1.7999999999999998,group:2,kind:"property",name:"\u8857\u89D2\u4ED3\u5E93",price:350,description:"",next:[20],yaw:-1.3521273809209544,lotX:15.84523023842309,lotZ:-2.298940052982909,facing:-1.3521273809209544},{id:20,x:14,z:0,group:2,kind:"event",name:"\u8857\u89D2\u65B0\u95FB\u53F0",price:380,description:"",next:[21],yaw:-1.5707963267948966,lotX:16.3,lotZ:0,facing:-1.5707963267948966},{id:21,x:13.6,z:1.8,group:3,kind:"property",name:"\u5706\u809A\u5B50\u65C5\u9986",price:390,description:"",next:[22],yaw:-1.789465272668839,lotX:15.84523023842309,lotZ:2.2989400529829096,facing:-1.789465272668839},{id:22,x:13.2,z:3.6,group:3,kind:"spirit",name:"\u5927\u7B11\u795E\u6BBF",price:420,description:"",next:[23],yaw:-1.7894652726688385,lotX:15.44523023842309,lotZ:4.0989400529829085,facing:-1.7894652726688385},{id:23,x:12.8,z:5.3999999999999995,group:3,kind:"property",name:"\u5976\u4F34\u516C\u5BD3",price:450,description:"",next:[24],yaw:-1.7894652726688383,lotX:15.045230238423091,lotZ:5.898940052982908,facing:-1.7894652726688385},{id:24,x:12.4,z:7.2,group:3,kind:"property",name:"\u82B1\u56ED\u9910\u5385",price:390,description:"",next:[25],yaw:-1.789465272668839,lotX:14.64523023842309,lotZ:7.69894005298291,facing:-1.789465272668839},{id:25,x:12,z:9,group:3,kind:"property",name:"\u5976\u5BB6\u82B1\u56ED",price:420,description:"",next:[26],yaw:-2.4756234162106834,lotX:13.420989569443378,lotZ:10.808532179291571,facing:-2.4756234162106834},{id:26,x:9.6,z:9.4,group:3,kind:"bank",name:"\u5357\u5CB8\u94F6\u884C",price:450,description:"",next:[27],yaw:-2.976443976175166,lotX:9.978117670802321,lotZ:11.66870602481393,facing:-2.976443976175166},{id:27,x:7.199999999999999,z:9.8,group:3,kind:"property",name:"\u94F6\u674F\u5C0F\u9662",price:390,description:"",next:[28],yaw:-2.9764439761751667,lotX:7.578117670802321,lotZ:12.068706024813931,facing:-2.9764439761751667},{id:28,x:4.800000000000001,z:10.2,group:4,kind:"property",name:"\u6E2F\u6E7E\u9910\u5385",price:490,description:"",next:[29],yaw:-2.9764439761751667,lotX:5.1781176708023215,lotZ:12.46870602481393,facing:-2.9764439761751667},{id:29,x:2.3999999999999986,z:10.6,group:4,kind:"property",name:"\u5FAE\u7B11\u4FBF\u5229\u5E97",price:520,description:"",next:[30],yaw:-2.976443976175166,lotX:2.7781176708023207,lotZ:12.86870602481393,facing:-2.976443976175166},{id:30,x:0,z:11,group:4,kind:"shop",name:"\u6E2F\u6E7E\u8865\u7ED9\u5E97",price:460,description:"",next:[31],yaw:-3.141592653589793,lotX:0,lotZ:13.3,facing:-3.141592653589793},{id:31,x:-2.4000000000000004,z:10.6,group:4,kind:"property",name:"\u5976\u5BB6\u90AE\u5C40",price:490,description:"",next:[32],yaw:2.976443976175166,lotX:-2.7781176708023225,lotZ:12.86870602481393,facing:2.976443976175166},{id:32,x:-4.800000000000001,z:10.2,group:4,kind:"property",name:"\u5E06\u8239\u65C5\u5E97",price:520,description:"",next:[33],yaw:2.9764439761751667,lotX:-5.178117670802322,lotZ:12.46870602481393,facing:2.9764439761751667},{id:33,x:-7.199999999999999,z:9.8,group:4,kind:"property",name:"\u6E2F\u6E7E\u9910\u5385",price:460,description:"",next:[34],yaw:2.9764439761751667,lotX:-7.57811767080232,lotZ:12.068706024813931,facing:2.9764439761751667},{id:34,x:-9.600000000000001,z:9.4,group:4,kind:"rest",name:"\u6EE8\u6CB3\u5C0F\u7A9D",price:490,description:"",next:[35],yaw:2.976443976175166,lotX:-9.978117670802323,lotZ:11.66870602481393,facing:2.976443976175166},{id:35,x:-12,z:9,group:5,kind:"property",name:"\u661F\u91CE\u5546\u573A",price:590,description:"",next:[36,40],yaw:2.4756234162106834,lotX:-13.420989569443378,lotZ:10.808532179291571,facing:2.4756234162106834},{id:36,x:-12.4,z:7.2,group:5,kind:"tax",name:"\u793E\u533A\u6E05\u6D01\u7AD9",price:530,description:"",next:[37],yaw:1.789465272668839,lotX:-14.64523023842309,lotZ:7.69894005298291,facing:1.789465272668839},{id:37,x:-12.8,z:5.4,group:5,kind:"property",name:"\u86CB\u58F3\u5C55\u89C8\u9986",price:560,description:"",next:[38],yaw:1.7894652726688385,lotX:-15.045230238423091,lotZ:5.898940052982909,facing:1.7894652726688385},{id:38,x:-13.2,z:3.6000000000000005,group:5,kind:"event",name:"\u6E2F\u53E3\u96C6\u5E02",price:590,description:"",next:[39],yaw:1.7894652726688383,lotX:-15.44523023842309,lotZ:4.098940052982909,facing:1.7894652726688383},{id:39,x:-13.6,z:1.7999999999999998,group:5,kind:"stock",name:"\u6E2F\u6E7E\u4EA4\u6613\u6240",price:530,description:"",next:[0],yaw:1.789465272668839,lotX:-15.84523023842309,lotZ:2.298940052982909,facing:1.789465272668839},{id:40,x:-9.691301940371613,z:6.12,group:0,kind:"property",name:"\u6668\u5149\u5976\u8336\u94FA",price:210,description:"",next:[41],yaw:1.002957883465597,lotX:-7.752251399182466,lotZ:7.356965237471965,facing:-2.1386347701241966},{id:41,x:-8.325562631560356,z:3.24,group:0,kind:"property",name:"\u73CD\u73E0\u5C0F\u5C4B",price:240,description:"",next:[42],yaw:1.3644461679779345,lotX:-6.074356569835707,lotZ:3.7112443820929846,facing:-1.7771464856118588},{id:42,x:-8.485562631560356,z:.3600000000000012,group:0,kind:"property",name:"\u7EFF\u773C\u775B\u4E66\u5E97",price:180,description:"",next:[43],yaw:1.8808991223828997,lotX:-6.295267557364209,lotZ:-.34186002019782813,facing:-1.2606935312068936},{id:43,x:-10.171301940371613,z:-2.5199999999999996,group:0,kind:"property",name:"\u5976\u76D6\u70D8\u7119\u5C4B",price:210,description:"",next:[3],yaw:2.213679078852693,lotX:-8.330448959906859,lotZ:-3.898861959847332,facing:-.9279135747370999},{id:44,x:9.691301940371613,z:-6.12,group:3,kind:"property",name:"\u82B1\u56ED\u9910\u5385",price:450,description:"",next:[45],yaw:-2.138634770124196,lotX:7.752251399182466,lotZ:-7.356965237471965,facing:1.0029578834655968},{id:45,x:8.325562631560356,z:-3.24,group:3,kind:"property",name:"\u5976\u5BB6\u82B1\u56ED",price:390,description:"",next:[46],yaw:-1.7771464856118588,lotX:6.074356569835707,lotZ:-3.7112443820929846,facing:1.3644461679779345},{id:46,x:8.485562631560356,z:-.3600000000000012,group:3,kind:"property",name:"\u5706\u809A\u5B50\u65C5\u9986",price:420,description:"",next:[47],yaw:-1.2606935312068936,lotX:6.295267557364209,lotZ:.34186002019782813,facing:1.8808991223828997},{id:47,x:10.171301940371613,z:2.5199999999999996,group:3,kind:"property",name:"\u94F6\u674F\u5C0F\u9662",price:450,description:"",next:[23],yaw:-.9279135747370999,lotX:8.330448959906859,lotZ:3.898861959847332,facing:2.213679078852693}]}};var $e=[{id:"naiwa",estateColor:"#45a078",name:"\u5976\u86D9",subtitle:"\u7B11\u4E00\u7B11\uFF0C\u597D\u8FD0\u5230",color:"#f7c945",accent:"#78a84d",style:"\u5747\u8861\u7ECF\u8425",description:"\u5706\u809A\u5B50\u3001\u7EFF\u773C\u775B\uFF0C\u4ECA\u5929\u4E5F\u8981\u6367\u8179\u5927\u7B11\u3002"},{id:"naichong",estateColor:"#d96850",name:"\u5976\u866B",subtitle:"\u6162\u6162\u6765\uFF0C\u4E5F\u4F1A\u53D1\u8D22",color:"#f66b45",accent:"#f6c944",style:"\u7A33\u5065\u50A8\u84C4",description:"\u7EA2\u8272\u8F6F\u58F3\u548C\u91D1\u9EC4\u6761\u7EB9\uFF0C\u5B89\u9759\u5730\u6512\u4E0B\u81EA\u5DF1\u7684\u5C0F\u91D1\u5E93\u3002"},{id:"naishu",estateColor:"#4888ca",name:"\u5976\u9F20",subtitle:"\u597D\u5730\u6BB5\uFF0C\u5148\u5230\u5148\u5F97",color:"#e4b745",accent:"#79b7c2",style:"\u79EF\u6781\u7F6E\u4E1A",description:"\u5927\u8033\u6735\u3001\u7EC6\u5C3E\u5DF4\uFF0C\u5411\u6BCF\u4E00\u4F4D\u5976\u5BB6\u4EBA\u6325\u6325\u624B\u3002"},{id:"naigou",estateColor:"#9564c4",name:"\u5976\u72D7",subtitle:"\u5F00\u5FC3\u6BCF\u4E00\u5929",color:"#f5d25f",accent:"#8c744a",style:"\u5747\u8861\u7ECF\u8425",description:"\u5782\u8033\u3001\u4E0A\u7FD8\u5C3E\u5DF4\u548C\u5F00\u6000\u7B11\u8138\u7684\u56DB\u8DB3\u5976\u4F34\u3002"},{id:"naidan",estateColor:"#df9139",name:"\u5976\u86CB",subtitle:"\u8EBA\u7740\u4E5F\u80FD\u8D62",color:"#f8d44c",accent:"#91af55",style:"\u5F3A\u52BF\u5EFA\u8BBE",description:"\u5C0F\u5DE7\u7684\u91D1\u9EC4\u8272\u86CB\u5F62\u8EAB\u4F53\u3001\u7EFF\u773C\u775B\u548C\u77ED\u77ED\u7684\u5634\uFF0C\u6EDA\u7740\u4E5F\u80FD\u53D1\u8D22\u3002"},{id:"naicha",estateColor:"#c67396",name:"\u5976\u8336",subtitle:"\u6696\u5FC3\u8865\u7ED9",color:"#f3c958",accent:"#58372e",style:"\u8865\u7ED9\u652F\u63F4",description:"\u91D1\u8272\u5976\u8336\u676F\u3001\u5706\u6DA6\u676F\u628A\u3001\u6DF1\u8272\u624B\u5957\u548C\u77ED\u817F\uFF0C\u7B11\u7740\u4E3A\u5976\u4F34\u8865\u7ED9\u3002"}];var Ol=Ne[1].tiles;var ie={dice:{name:"\u5FC3\u60F3\u4E8B\u6210\u5361",icon:"\u2684",price:30,description:"\u63B7\u9AB0\u524D\u6307\u5B9A\u672C\u6B21\u603B\u6B65\u6570 1\u20146\uFF1B\u914D\u5408\u843D\u70B9\u9884\u89C8\u9009\u62E9\u4E70\u5730\u3001\u8865\u7ED9\u6216\u907F\u79DF\u3002",target:"steps"},block:{name:"\u5976\u5757\u8DEF\u969C",icon:"\u25A6",price:20,description:"\u524D\u65B9 1\u20146 \u683C\u653E\u8DEF\u969C\uFF0C\u9996\u540D\u7ECF\u8FC7\u8005\u505C\u4E0B\uFF1B\u53EF\u4EE5\u622A\u4F4F\u5BF9\u624B\uFF0C\u4E5F\u80FD\u505C\u5728\u5FC3\u4EEA\u5730\u5757\u3002",target:"ahead"},turn:{name:"\u5976\u86D9\u56DE\u5934\u5361",icon:"\u21B6",price:20,description:"\u672C\u56DE\u5408\u6CBF\u6765\u8DEF\u5012\u9000\uFF1B\u53EF\u4EE5\u907F\u5F00\u9AD8\u79DF\u91D1\uFF0C\u4F46\u5012\u9000\u4E0D\u9886\u53D6\u8D77\u70B9\u5956\u52B1\u3002",target:"self"},shield:{name:"\u5FEB\u4E50\u514D\u79DF\u5361",icon:"\u2302",price:35,description:"\u62B5\u6D88\u4E0B\u4E00\u7B14\u79DF\u91D1\uFF0C\u4FDD\u7559\u81F3\u89E6\u53D1\u3002\u53EF\u4E0E\u63A7\u9AB0\u3001\u56DE\u5934\u7B49\u5361\u7EC4\u5408\u4F7F\u7528\u3002",target:"self"},steal:{name:"\u5976\u9F20\u62A2\u5730\u5361",icon:"\u2691",price:45,description:"\u4EC5\u5728\u62B5\u8FBE\u5BF9\u624B\u5730\u4EA7\u3001\u4ED8\u79DF\u524D\u6536\u8D2D\u8BE5\u5730\u4EA7\uFF1B\u5411\u4E1A\u4E3B\u652F\u4ED8\u5730\u4EA7\u6210\u672C\u7684 125%\uFF0C\u53EF\u6253\u65AD\u5176\u8857\u533A\u7ECF\u8425\u3002",target:"enemy"},recover:{name:"\u91CE\u751F\u72D7\u5976",icon:"\u2667",price:20,description:"\u79FB\u9664\u4F11\u517B\u4E0E\u9709\u8FD0\uFF0C\u83B7\u5F97 80 \u5976\u5E01\u8865\u7ED9\u3002",target:"self"},demolish:{name:"\u5976\u5757\u62C6\u9664\u5361",icon:"\u265C",price:25,description:"\u62C6\u53BB 8 \u683C\u8303\u56F4\u5185\u4E00\u5C42\u623F\u5C4B\uFF0C\u6216\u6E05\u9664\u8DEF\u969C\uFF1B\u4E0D\u4F1A\u593A\u8D70\u571F\u5730\u3002",target:"enemyBuilt"},build:{name:"\u5976\u5BB6\u5DE5\u7A0B\u961F",icon:"\u2692",price:65,description:"\u4E3A 8 \u683C\u8303\u56F4\u5185\u81EA\u5DF1\u7684\u5730\u4EA7\u514D\u8D39\u52A0\u76D6\u4E00\u5C42\uFF0C\u4E0D\u5360\u5E38\u89C4\u5EFA\u8BBE\u6B21\u6570\u3002",target:"own"},ward:{name:"\u5976\u4F34\u62A4\u76FE\u5361",icon:"\u25C9",price:30,description:"\u62B5\u6D88\u4E0B\u4E00\u6B21\u4E2A\u4EBA\u8D1F\u9762\u968F\u673A\u4E8B\u4EF6\u6216\u9709\u795E\u5230\u8BBF\uFF1B\u4E0D\u62B5\u6D88\u79DF\u91D1\u3001\u7A0E\u8D39\u6216\u7597\u517B\u8D39\u3002\u4E0E\u795E\u7075\u5B88\u62A4\u5E76\u5B58\u65F6\u4F18\u5148\u6D88\u8017\u62A4\u76FE\uFF0C\u4E0D\u53E0\u52A0\u3002",target:"self",effect:"negativeEvent",duration:0,charges:1},swap:{name:"\u5976\u4F34\u6362\u4F4D\u5361",icon:"\u21C4",price:40,description:"\u63B7\u9AB0\u524D\u4E0E\u4E00\u540D\u5B58\u6D3B\u4E14\u4F4D\u7F6E\u4E0D\u540C\u7684\u5BF9\u624B\u4EA4\u6362\u4F4D\u7F6E\u3002\u53CC\u65B9\u6765\u8DEF\u548C\u5012\u9000\u6E05\u7A7A\uFF0C\u4E0D\u89E6\u53D1\u8D77\u70B9\u5956\u52B1\u3001\u843D\u5730\u3001\u6536\u8D39\u6216\u8DEF\u969C\uFF1B\u4E4B\u540E\u7167\u5E38\u63B7\u9AB0\u3002",target:"opponent",effect:"swap",duration:0},insurance:{name:"\u5B89\u5FC3\u79DF\u91D1\u4FDD\u9669",icon:"\u25C7",price:40,description:"\u63B7\u9AB0\u524D\u751F\u6548\uFF0C\u542B\u672C\u56DE\u5408\u5728\u5185\u4E09\u6B21\u672C\u4EBA\u56DE\u5408\u7ED3\u675F\u524D\uFF0C\u5730\u4EA7\u6536\u8D39\u51CF\u514D50%\uFF1B\u4E0D\u514D\u65C5\u9986\u4F11\u517B\uFF0C\u4E0D\u5F71\u54CD\u6536\u8D2D\u3002\u4E0D\u4E0E\u540C\u7C7B\u53E0\u52A0\uFF0C\u514D\u79DF\u5361\u4F18\u5148\u3002",target:"self",effect:"rentReduction",duration:3,reduction:.5},slow:{name:"\u6162\u6162\u8D70\u5361",icon:"\u2667",price:25,description:"\u81EA\u5DF1\u63A5\u4E0B\u6765\u4E09\u6B21\u884C\u52A8\u5404\u8D70 1 \u683C\uFF0C\u4FBF\u4E8E\u8FDE\u7EED\u4E70\u5730\u6216\u4EAB\u53D7\u5F53\u5730\u5EFA\u8BBE\u6298\u6263\u3002",target:"self"}};for(let[s,e]of Object.entries(ie))e.duration??=s==="slow"?3:0,e.timing=s==="steal"?"beforeRent":["dice","turn","slow","block","swap","insurance"].includes(s)?"beforeMove":"action";var Vi={fortune:{name:"\u5927\u7B11\u8D22\u795E",icon:"\u2726",description:"\u975E\u4EA4\u6613\u6536\u5165\u589E\u52A0 25%"},misfortune:{name:"\u5976\u6CE1\u9709\u795E",icon:"\u2601",description:"\u79DF\u91D1\u548C\u8D39\u7528\u589E\u52A0 25%"},guardian:{name:"\u5976\u86CB\u5B88\u62A4",icon:"\u25C9",description:"\u62B5\u6321\u4E00\u6B21\u8D1F\u9762\u4E8B\u4EF6"}},Rn=[{id:0,name:"\u6B65\u884C",dice:1,price:0},{id:1,name:"\u5976\u86D9\u81EA\u884C\u8F66",dice:2,price:600},{id:2,name:"\u5976\u7F50\u5C0F\u8F66",dice:3,price:1200}],Je=[{id:"event-01",name:"\u5168\u7F51\u4E00\u8D77\u6367\u8179\u5927\u7B11",art:"theater",text:"\u4F60\u7684\u5927\u7B11\u8868\u60C5\u5305\u8D70\u7EA2\uFF0C\u6536\u83B7 280 \u5976\u5E01\u3002",kind:"gain",amount:280,stock:1,change:.12},{id:"event-02",name:"\u91CE\u751F\u72D7\u5976\u8865\u7ED9",art:"recover",text:"\u6536\u5230\u5976\u5BB6\u4EBA\u7684\u8865\u7ED9\uFF0C\u6062\u590D\u4F11\u517B\u5E76\u83B7\u4E00\u74F6\u91CE\u751F\u72D7\u5976\u3002",kind:"recover"},{id:"event-03",name:"\u5976\u8336\u6D12\u4E86\u4E00\u5730",art:"tea",text:"\u652F\u4ED8\u6E05\u6D01\u8D39\u7528 180 \u5976\u5E01\u3002",kind:"loss",amount:180},{id:"event-04",name:"\u9009\u62E9\u4F60\u7684\u5976\u4F34",art:"dice",text:"\u5976\u4F34\u9001\u6765\u4E00\u5F20\u968F\u673A\u9053\u5177\u5361\u3002",kind:"card"},{id:"event-05",name:"\u5976\u86D9\u8857\u821E\u5F00\u573A",art:"theater",text:"\u6F14\u51FA\u6536\u83B7 200 \u5976\u5E01\uFF0C\u5927\u7B11\u4F20\u5A92\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:200,stock:1,change:.1},{id:"event-06",name:"\u5976\u5757\u5DE5\u5382\u505C\u7535",art:"factory",text:"\u4FEE\u7406\u8BBE\u5907\u652F\u4ED8 150 \u5976\u5E01\uFF0C\u5976\u5757\u5DE5\u574A\u884C\u60C5\u56DE\u843D\u3002",kind:"loss",amount:150,stock:2,change:-.12},{id:"event-07",name:"\u5976\u8336\u65B0\u54C1\u5927\u5356",art:"tea",text:"\u54C1\u9274\u6D3B\u52A8\u83B7\u5F97 160 \u5976\u5E01\uFF0C\u5976\u8336\u5B9E\u4E1A\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:160,stock:0,change:.12},{id:"event-08",name:"\u5976\u86D9\u7231\u6D17\u6FA1",art:"recover",text:"\u6D17\u9999\u9999\uFF0C\u4F11\u606F\u4E00\u56DE\u5408\uFF0C\u83B7\u8865\u8D34 100 \u5976\u5E01\u3002",kind:"rest",amount:100},{id:"event-09",name:"\u5976\u5E01\u6E2F\u53E3\u987A\u98CE",art:"vehicle",text:"\u8FD0\u8F93\u6536\u5165 220 \u5976\u5E01\uFF0C\u5976\u5E01\u7269\u6D41\u884C\u60C5\u4E0A\u6DA8\u3002",kind:"gain",amount:220,stock:3,change:.1},{id:"event-10",name:"\u795E\u79D8\u5976\u7F50",art:"shield",text:"\u6253\u5F00\u5976\u7F50\uFF0C\u8BF7\u4E00\u4F4D\u5976\u5BB6\u795E\u7075\u6765\u505A\u5BA2\u3002",kind:"spirit"},{id:"event-11",name:"\u5976\u5E01\u7269\u6D41\u5206\u7EA2",art:"stocks",text:"\u5976\u5E01\u7269\u6D41\u4E0A\u6DA88%\uFF1B\u6301\u6709\u8BE5\u80A1\u7968\u6BCF\u80A1\u5206\u7EA24\u5976\u5E01\uFF0C\u6700\u591A120\u5976\u5E01\u3002\u5206\u7EA2\u8BA1\u5165\u975E\u4EA4\u6613\u6536\u5165\u3002",kind:"dividend",target:"stockHolder",stock:3,change:.08,perShare:4,cap:120,negative:!1,duration:0},{id:"event-12",name:"\u793E\u533A\u7ECF\u8425\u8282",art:"house",text:"\u672C\u8F6E\u53CA\u4E4B\u540E\u4E24\u8F6E\uFF0C\u4F60\u7684\u5DF2\u5EFA\u6210\u6536\u8D39\u8BBE\u65BD\u6536\u5165\u63D0\u9AD815%\uFF1B\u4E0D\u589E\u52A0\u516C\u56ED\u70B9\u5238\u6216\u7814\u7A76\u4EA7\u51FA\u3002\u91CD\u590D\u89E6\u53D1\u53EA\u5237\u65B0\u671F\u9650\u3002",kind:"operations",target:"selfBusinesses",multiplier:1.15,duration:2,negative:!1},{id:"event-13",name:"\u8BBE\u65BD\u5B89\u5168\u5DE1\u68C0",art:"factory",text:"\u4F60\u6700\u9AD8\u7EA7\u7684\u4E00\u5904\u6536\u8D39\u8BBE\u65BD\u672C\u8F6E\u53CA\u4E0B\u4E00\u8F6E\u6682\u505C\u6536\u8D39\uFF1B\u540C\u7EA7\u6309\u5730\u5757\u7F16\u53F7\u9009\u62E9\u3002\u6CA1\u6709\u6536\u8D39\u8BBE\u65BD\u5219\u65E0\u5F71\u54CD\u3002",kind:"closure",target:"mostDevelopedBusiness",duration:1,negative:!0}];for(let s of Je)s.negative??=["loss","rest"].includes(s.kind),s.target??="self",s.duration??=0;ie.insurance.description=`\u63B7\u9AB0\u524D\u751F\u6548\uFF0C\u542B\u672C\u56DE\u5408\u5728\u5185${ie.insurance.duration}\u6B21\u672C\u4EBA\u56DE\u5408\u7ED3\u675F\u524D\uFF0C\u5730\u4EA7\u6536\u8D39\u51CF\u514D${ie.insurance.reduction*100}%\uFF1B\u4E0D\u514D\u65C5\u9986\u4F11\u517B\uFF0C\u4E0D\u5F71\u54CD\u6536\u8D2D\u3002\u4E0D\u4E0E\u540C\u7C7B\u53E0\u52A0\uFF0C\u514D\u79DF\u5361\u4F18\u5148\u3002`;for(let s of Je)s.kind==="operations"&&(s.text=`\u672C\u8F6E\u53CA\u4E4B\u540E${s.duration}\u8F6E\uFF0C\u4F60\u7684\u5DF2\u5EFA\u6210\u6536\u8D39\u8BBE\u65BD\u6536\u5165\u63D0\u9AD8${Math.round(((s.multiplier??1)-1)*100)}%\uFF1B\u4E0D\u589E\u52A0\u516C\u56ED\u70B9\u5238\u6216\u7814\u7A76\u4EA7\u51FA\u3002\u91CD\u590D\u89E6\u53D1\u53EA\u5237\u65B0\u671F\u9650\u3002`),s.kind==="dividend"&&(s.text=`\u5976\u5E01\u7269\u6D41\u4E0A\u6DA8${Math.round((s.change??0)*100)}%\uFF1B\u6301\u6709\u8BE5\u80A1\u7968\u6BCF\u80A1\u5206\u7EA2${s.perShare}\u5976\u5E01\uFF0C\u6700\u591A${s.cap}\u5976\u5E01\u3002\u5206\u7EA2\u8BA1\u5165\u975E\u4EA4\u6613\u6536\u5165\u3002`),s.kind==="closure"&&(s.text=`\u4F60\u6700\u9AD8\u7EA7\u7684\u4E00\u5904\u6536\u8D39\u8BBE\u65BD\u672C\u8F6E\u53CA\u4E4B\u540E${s.duration}\u8F6E\u6682\u505C\u6536\u8D39\uFF1B\u540C\u7EA7\u6309\u5730\u5757\u7F16\u53F7\u9009\u62E9\u3002\u6CA1\u6709\u6536\u8D39\u8BBE\u65BD\u5219\u65E0\u5F71\u54CD\u3002`);var Cn=Object.fromEntries(Je.map(s=>[s.kind,s])),Bl=Ne[1].pointStops;var pt={residence:{name:"\u666E\u901A\u4F4F\u5B85",max:5,cost:1,architecture:"residence",text:"\u9010\u5C42\u52A0\u76D6\uFF0C\u5411\u5BF9\u624B\u6536\u79DF\uFF1B\u540C\u8857\u533A\u4F4F\u5B85\u53C2\u4E0E\u8054\u8425\u52A0\u6536\u3002"},chain:{name:"\u8FDE\u9501\u4FBF\u5229\u5E97",max:1,cost:1.2,architecture:"tea",text:`\u53EA\u5EFA\u4E00\u7EA7\uFF1B\u540C\u4E00\u4E1A\u4E3B\u6BCF\u591A\u4E00\u95F4\u8FDE\u9501\u5E97\uFF0C\u6240\u6709\u5206\u5E97\u7EDF\u4E00\u63D0\u9AD8\u6536\u8D39\uFF0C\u4E0A\u9650${q.chainRentCap}\u3002\u4E0D\u53C2\u4E0E\u8857\u533A\u8054\u8425\u3002`},hotel:{name:"\u5976\u5BB6\u65C5\u9986",max:5,cost:1.4,architecture:"hotel",text:"\u5BF9\u624B\u5165\u4F4F1\u20143\u56DE\u5408\uFF0C\u6309\u5929\u6536\u4F4F\u5BBF\u8D39\u5E76\u6682\u505C\u884C\u52A8\uFF1B\u514D\u79DF\u5361\u53EF\u62B5\u6D88\u672C\u6B21\u5165\u4F4F\u3002"},mall:{name:"\u8D2D\u7269\u4E2D\u5FC3",max:5,cost:1.35,architecture:"mall",text:"\u5BF9\u624B\u8D2D\u7269\u62BD\u7B7E\uFF0C\u630975%\u3001100%\u6216150%\u6D88\u8D39\u500D\u7387\u6536\u8D39\uFF1B\u697C\u5C42\u8D8A\u9AD8\uFF0C\u6D88\u8D39\u57FA\u6570\u8D8A\u9AD8\u3002"},gas:{name:"\u5976\u7F50\u52A0\u6CB9\u7AD9",max:1,cost:.9,architecture:"gas",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF1B\u6309\u672C\u6B21\u884C\u8FDB\u6B65\u6570\u4E0E\u4EA4\u901A\u5DE5\u5177\u7B49\u7EA7\u6536\u52A0\u6CB9\u8D39\uFF0C\u8F66\u8F86\u8D8A\u9AD8\u7EA7\u6536\u8D39\u8D8A\u9AD8\u3002"},research:{name:"\u5976\u5BB6\u7814\u7A76\u6240",max:5,cost:1.2,architecture:"research",text:"\u4E0D\u6536\u8FC7\u8DEF\u8D39\uFF1B\u4E1A\u4E3B\u6BCF\u51FA\u53D1\u4E09\u6B21\u4EA7\u51FA\u6240\u9009\u9053\u5177\u5361\u3002\u5347\u7EA7\u89E3\u9501\u66F4\u591A\u7814\u53D1\u9879\u76EE\uFF0C\u5230\u8BBF\u53EF\u66F4\u6362\u9879\u76EE\u3002"},park:{name:"\u6EE8\u6CB3\u516C\u56ED",max:1,cost:.45,architecture:"garden",text:"\u53EA\u5EFA\u4E00\u7EA7\uFF0C\u4E0D\u6536\u4EFB\u4F55\u8D39\u7528\uFF1B\u6240\u6709\u505C\u9760\u8005\u83B7\u5F9710\u70B9\u5238\uFF0C\u9002\u5408\u8F7B\u677E\u516C\u76CA\u73A9\u6CD5\u3002"}},Bt=s=>s?.buildingType||"residence",kt=s=>pt[Bt(s)]?.max||5,Hi=s=>["dice","shield","demolish","build","steal"].slice(0,s);var Vt=131072,Xr=Object.freeze(["start","property","event","bank","shop","stock","hospital","spirit","rest","tax"]),Gi=["schemaVersion","id","name","description","tiles","branches","pointStops","eventPool","startingCash","victory"],Wi=["id","kind","name","description","x","z","group","price","next","yaw","lotX","lotZ","facing"],In=new WeakMap,Ln=class extends Error{constructor(e){super(e),this.name="MapValidationError"}},R=s=>{throw new Ln(s)};function mt(s,e,t=e){(!s||typeof s!="object"||Array.isArray(s)||Object.keys(s).some(n=>!e.includes(n))||t.some(n=>!Object.hasOwn(s,n)))&&R("\u5B57\u6BB5\u7F3A\u5931\u6216\u5305\u542B\u4E0D\u652F\u6301\u7684\u5B57\u6BB5")}var re=(s,e,t)=>Number.isSafeInteger(s)&&s>=e&&s<=t,Pn=(s,e,t)=>typeof s=="number"&&Number.isFinite(s)&&s>=e&&s<=t,zt=(s,e,t)=>typeof s=="string"&&s.length>=e&&s.length<=t&&!/[<>&"'\u0000-\u001f\u007f-\u009f]/.test(s);function Xi(s,e=0,t={n:0}){if(typeof s=="string"&&s.length>Vt&&R("\u5730\u56FE\u6587\u5B57\u8FC7\u957F"),(e>12||++t.n>5e3)&&R("\u5730\u56FE\u5D4C\u5957\u8FC7\u6DF1\u6216\u8282\u70B9\u8FC7\u591A"),s&&typeof s=="object"){!Array.isArray(s)&&![Object.prototype,null].includes(Object.getPrototypeOf(s))&&R("\u4EC5\u652F\u6301\u666E\u901A JSON \u5BF9\u8C61");for(let n of Object.keys(s))(["__proto__","constructor","prototype"].includes(n)||!Object.hasOwn(Object.getOwnPropertyDescriptor(s,n),"value"))&&R("\u4E0D\u652F\u6301\u53EF\u6267\u884C\u6216\u539F\u578B\u5B57\u6BB5"),Xi(s[n],e+1,t)}else!["string","number","boolean"].includes(typeof s)&&s!==null&&R("\u4EC5\u652F\u6301 JSON \u6570\u636E")}function qi(s){if(s&&typeof s=="object"){for(let e of Object.values(s))qi(e);Object.freeze(s)}return s}function Yi(s){if(typeof s=="string"){(s.length>Vt||new TextEncoder().encode(s).length>Vt)&&R("\u5730\u56FE\u6587\u4EF6\u4E0D\u5F97\u8D85\u8FC7128KiB");try{s=JSON.parse(s)}catch{R("\u5730\u56FE\u4E0D\u662F\u6709\u6548 JSON")}}Xi(s);let e=JSON.stringify(s);new TextEncoder().encode(e).length>Vt&&R("\u5730\u56FE\u6587\u4EF6\u4E0D\u5F97\u8D85\u8FC7128KiB");let t=JSON.parse(e);t?.schemaVersion===0&&(mt(t,Gi.filter(p=>p!=="startingCash").concat("startingMoney")),t.startingCash=t.startingMoney,delete t.startingMoney,t.schemaVersion=1),mt(t,Gi),t.schemaVersion!==1&&R("\u4E0D\u652F\u6301\u7684\u5730\u56FE\u7248\u672C"),(typeof t.id!="string"||!/^[a-z][a-z0-9-]{2,47}$/.test(t.id)||!zt(t.name,1,32)||!zt(t.description,0,240))&&R("\u5730\u56FEID\u3001\u540D\u79F0\u6216\u63CF\u8FF0\u4E0D\u5408\u6CD5\uFF08\u4EC5\u652F\u6301\u7EAF\u6587\u672C\uFF09"),(!Array.isArray(t.tiles)||!re(t.tiles.length,16,64))&&R("\u5730\u56FE\u987B\u5305\u542B16\u201464\u683C");let n=t.tiles.length,i=new Set;for(let p of t.tiles){mt(p,Wi,Wi.slice(0,9)),(!re(p.id,0,n-1)||i.has(p.id))&&R("\u5730\u5757ID\u5FC5\u987B\u552F\u4E00\u4E14\u8FDE\u7EED"),i.add(p.id),(!Xr.includes(p.kind)||!zt(p.name,1,32)||!zt(p.description,0,240)||!Pn(p.x,-24,24)||!Pn(p.z,-24,24)||!re(p.group,0,5)||!re(p.price,100,2e3))&&R("\u5730\u5757\u7C7B\u578B\u3001\u6587\u5B57\u3001\u5750\u6807\u6216\u4EF7\u683C\u8D85\u51FA\u8303\u56F4"),(!Array.isArray(p.next)||!re(p.next.length,1,2)||new Set(p.next).size!==p.next.length||p.next.some(g=>!re(g,0,n-1)||g===p.id))&&R("\u8FDE\u63A5\u987B\u6307\u5411\u4E0D\u540C\u7684\u6709\u6548\u5730\u5757");for(let g of["yaw","facing","lotX","lotZ"])p[g]!==void 0&&!Pn(p[g],-32,32)&&R("\u5E03\u5C40\u6570\u503C\u8D85\u51FA\u8303\u56F4")}t.tiles.sort((p,g)=>p.id-g.id),(t.tiles[0].kind!=="start"||t.tiles.filter(p=>p.kind==="start").length!==1)&&R("\u7F16\u53F70\u5FC5\u987B\u662F\u552F\u4E00\u7684\u8D77\u70B9"),t.tiles.filter(p=>p.kind==="property").length<12&&R("\u81F3\u5C11\u9700\u898112\u5757\u5730\u4EA7");for(let p=0;p<n;p++)for(let g=p+1;g<n;g++)Math.hypot(t.tiles[p].x-t.tiles[g].x,t.tiles[p].z-t.tiles[g].z)<.25&&R("\u5730\u5757\u5750\u6807\u8FC7\u4E8E\u63A5\u8FD1");re(t.startingCash,1e3,2e4)||R("\u8D77\u59CB\u8D44\u91D1\u987B\u4E3A1000\u201420000\u6574\u6570"),mt(t.victory,["rounds","type","target"]);let r=t.victory;(![20,30,50,80].includes(r.rounds)||!["ranking","netWorth"].includes(r.type)||(r.type==="ranking"?r.target!==0:!re(r.target,1e3,1e5)))&&R("\u80DC\u5229\u6761\u4EF6\u8D85\u51FA\u652F\u6301\u8303\u56F4"),(!Array.isArray(t.pointStops)||t.pointStops.length>16||new Set(t.pointStops).size!==t.pointStops.length||t.pointStops.some(p=>!re(p,0,n-1)))&&R("\u70B9\u5238\u683C\u5F15\u7528\u65E0\u6548\u6216\u91CD\u590D");let o=new Set([...Je,...dt].map(p=>p.id));(!Array.isArray(t.eventPool)||!re(t.eventPool.length,1,Je.length+dt.length)||new Set(t.eventPool).size!==t.eventPool.length||t.eventPool.some(p=>!o.has(p)))&&R("\u4E8B\u4EF6\u6C60\u987B\u5F15\u7528\u73B0\u6709\u7684\u552F\u4E00\u4E8B\u4EF6ID"),(!Array.isArray(t.branches)||t.branches.length>2)&&R("\u6700\u591A\u652F\u6301\u4E24\u6761\u652F\u8DEF");let l=new Map;for(let p of t.branches)mt(p,["from","merge"]),(!re(p.from,0,n-1)||!re(p.merge,0,n-1)||p.from===p.merge||l.has(p.from))&&R("\u5206\u5C94\u58F0\u660E\u65E0\u6548\u6216\u91CD\u590D"),l.set(p.from,p.merge);let c=[],a=new Set,h=0;for(;!a.has(h);)a.add(h),c.push(h),h=t.tiles[h].next[0];(h!==0||c.length<12)&&R("\u4E3B\u8DEF\u5FC5\u987B\u4E3A\u5305\u542B\u8D77\u70B9\u7684\u81F3\u5C1112\u683C\u95ED\u73AF");let u=new Set(c),f=new Set(c);for(let p of t.tiles){if(p.next.length!==2){l.has(p.id)&&R("\u58F0\u660E\u5206\u5C94\u7684\u683C\u5B50\u5FC5\u987B\u6709\u4E24\u6761\u8FDE\u63A5");continue}let g=l.get(p.id);(g===void 0||!u.has(p.id)||!u.has(g))&&R("\u5206\u5C94\u6216\u6C47\u5408\u70B9\u4E0D\u5728\u4E3B\u73AF\uFF0C\u6216\u672A\u58F0\u660E"),h=p.next[1];let x=0,v=new Set;for(;!u.has(h);)(v.has(h)||f.has(h))&&R("\u652F\u8DEF\u5F62\u6210\u5B64\u7ACB\u5FAA\u73AF\u6216\u5171\u4EAB\u4E2D\u95F4\u683C"),v.add(h),f.add(h),x++,t.tiles[h].next.length!==1&&R("\u652F\u8DEF\u4E2D\u4E0D\u652F\u6301\u5D4C\u5957\u5206\u5C94"),h=t.tiles[h].next[0];(!x||h!==g)&&R("\u652F\u8DEF\u5FC5\u987B\u7ECF\u8FC7\u72EC\u7ACB\u4E2D\u95F4\u683C\u5E76\u62B5\u8FBE\u58F0\u660E\u7684\u6C47\u5408\u70B9")}f.size!==n&&R("\u5B58\u5728\u4ECE\u8D77\u70B9\u4E0D\u53EF\u8FBE\u7684\u5730\u5757");let d=new Set([0]),m=!0;for(;m;){m=!1;for(let p of t.tiles)!d.has(p.id)&&p.next.some(g=>d.has(g))&&(d.add(p.id),m=!0)}return d.size!==n&&R("\u5E76\u975E\u6240\u6709\u5730\u5757\u90FD\u80FD\u56DE\u5230\u8D77\u70B9"),qi(t)}function Zi(s){if(In.has(s))return In.get(s);let e=s.tiles.map(t=>({...t,next:[...t.next]}));Object.defineProperty(e,"custom",{value:!0});for(let t of e)Object.freeze(t.next),Object.freeze(t);return Object.freeze(e),In.set(s,e),e}var qr={0:["start","\u677E\u679C\u8F66\u7AD9"],3:["event","\u5C71\u8D27\u96C6\u5E02"],6:["bank","\u6797\u95F4\u94F6\u884C"],9:["shop","\u677E\u679C\u8865\u7ED9\u7AD9"],12:["hospital","\u6E29\u6CC9\u7597\u517B\u9662"],15:["stock","\u68EE\u6797\u8BC1\u5238\u6240"],18:["event","\u68EE\u6797\u5E03\u544A\u680F"],21:["spirit","\u53E4\u6811\u7960\u5802"],24:["rest","\u6E29\u6CC9\u65C5\u9986"],27:["shop","\u5C71\u8D27\u5546\u5E97"],30:["bank","\u5C71\u8C37\u94F6\u884C"],33:["event","\u6CC9\u7554\u5C0F\u5E7F\u573A"],36:["tax","\u5C71\u9053\u517B\u62A4\u7AD9"],39:["stock","\u5C71\u8D27\u4EA4\u6613\u6240"]},$i=["\u677E\u9488\u6728\u5C4B","\u6EAA\u7554\u8336\u9986","\u699B\u679C\u5DE5\u574A","\u67AB\u53F6\u65C5\u5E97","\u6CC9\u8FB9\u98DF\u5802","\u4E91\u6749\u4E66\u5C4B"],Ke=Array.from({length:48},(s,e)=>{let t=e<40?e:ut[e<44?0:1].from,n=14.4*Math.cos(2.4-t*Math.PI/20),i=10.6*Math.sin(2.4-t*Math.PI/20);if(e>=40){let l=ut[e<44?0:1],c=((e<44?e-40:e-44)+1)/5,a=2.4-l.from*Math.PI/20,h=2.4-l.merge*Math.PI/20;n=14.4*((1-c)*Math.cos(a)+c*Math.cos(h)),i=10.6*((1-c)*Math.sin(a)+c*Math.sin(h))+(e<44?-1:1)*Math.sin(c*Math.PI)*1.8}let r=qr[e],o=r?.[0]||"property";return{id:e,kind:o,name:r?.[1]||$i[e%$i.length]+(Math.floor(e/6)+1),description:e===0?"\u7ECF\u8FC7\u8D77\u70B9\u9886\u53D6\u57FA\u7840\u6536\u5165":o==="event"?"\u68EE\u6797\u5C0F\u9547\u4E8B\u4EF6":o==="property"?"\u7ECF\u8425\u6797\u95F4\u5730\u4EA7\uFF0C\u9009\u62E9\u5408\u9002\u7684\u5EFA\u7B51":"\u68EE\u6797\u6E29\u6CC9\u5C0F\u9547\u516C\u5171\u8BBE\u65BD",x:n,z:i,group:e%6,price:o==="property"?240+e%7*40:300,next:e<40?[(e+1)%40]:[e===43?16:e===47?36:e+1]}});for(let s of ut)Ke[s.from].next.push(s.path[0]);for(let s of Ke){let e=Ke[s.id<40?(s.id+39)%40:s.id===40?8:s.id===44?28:s.id-1],t=Ke[s.next[0]],n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i),o=-i/r,l=n/r;o*s.x+l*s.z<0&&(o=-o,l=-l),s.yaw=Math.atan2(-i,n),s.lotX=s.x+o*2.3,s.lotZ=s.z+l*2.3,s.facing=Math.atan2(-o,-l)}Object.defineProperty(Ke,"forest",{value:!0});var Ji={schemaVersion:1,id:"forest-onsen",name:"\u68EE\u6797\u6E29\u6CC9\u5C0F\u9547",description:"\u677E\u6797\u3001\u6E29\u6CC9\u4E0E\u5C71\u8C37\u652F\u8DEF\uFF1B\u5929\u6C14\u6539\u53D8\u901A\u884C\u673A\u4F1A",tiles:Ke,branches:ut.map(({from:s,merge:e})=>({from:s,merge:e})),pointStops:[2,8,14,20,26,32,38,42,46],eventPool:[...Ne[2].eventPool,...dt.map(s=>s.id)],startingCash:3200,victory:{rounds:50,type:"ranking",target:0}};var je={...Ne,4:Ji},Kl=je[2].tiles,Yr={1:je[1],2:je[2],4:je[4]},jl=Object.freeze({1:"island",2:"riverside",3:"custom",4:"forest"}),gt=(s,e)=>s===3&&e?Zi(e):(je[s]||je[1]).tiles,Dn=s=>s.mapVersion===3?s.customMap:Yr[s.mapVersion],Ki=s=>Dn(s).pointStops;var Ht=s=>Number.isSafeInteger(s)&&s>=0,Qi=s=>s.players.filter(e=>e.human).length<=1,Zr=(s,e)=>Math.max(q.auctionUnit,Math.ceil(s.tiles[e].price*q.auctionStartRatio/q.auctionUnit)*q.auctionUnit);var $r=s=>!!s&&typeof s=="object"&&!Array.isArray(s)&&Object.keys(s).sort().join(",")==="cards,cash,properties"&&Ht(s.cash)&&Array.isArray(s.properties)&&Array.isArray(s.cards)&&s.properties.length<=48&&s.cards.length<=q.handLimit&&[...s.properties,...s.cards].every(Ht)&&new Set(s.properties).size===s.properties.length&&new Set(s.cards).size===s.cards.length;function ji(s,e,t){return $r(t)&&t.cash<=e.money&&t.properties.every(n=>{let i=s.ownership[n];return gt(s.mapVersion,s.customMap)[n]?.kind==="property"&&i&&i.player===e.id&&Number.isInteger(i.level)&&i.level>=0&&i.level<=kt(i)&&(i.buildingType===void 0||Object.hasOwn(pt,i.buildingType))&&!i.mortgaged&&!i.mortgage})&&t.cards.every(n=>Object.hasOwn(ie,e.cards[n])&&s.mode.allowedCards.includes(e.cards[n]))}function Jr(s,e){if(!e||!Qi(s)||s.debt||!["roll","end"].includes(e.resume)||!Ht(e.to)||e.to===s.current)return!1;let t=s.players[s.current],n=s.players[e.to];if(!t?.alive||!t.human||!n?.alive||n.human||!ji(s,t,e.give)||!ji(s,n,e.receive))return!1;let i=e.give,r=e.receive;return i.cash+r.cash+i.properties.length+r.properties.length+i.cards.length+r.cards.length>0&&Number.isSafeInteger(t.money-i.cash+r.cash)&&Number.isSafeInteger(n.money-r.cash+i.cash)&&t.cards.length-i.cards.length+r.cards.length<=q.handLimit&&n.cards.length-r.cards.length+i.cards.length<=q.handLimit}function er(s){let e=s.auction,t=s.negotiation;if(s.phase!=="auction"&&e!=null||s.phase!=="negotiation"&&t!=null)return!1;if(s.phase==="negotiation")return Jr(s,t);if(s.phase!=="auction")return!0;let n=gt(s.mapVersion,s.customMap),i=s.players.filter(o=>o.alive).map(o=>o.id);if(!e||!Qi(s)||!s.players[s.current].alive||s.debt||n[e.tile]?.kind!=="property"||e.tile!==s.players[s.current].pos||s.ownership[e.tile]||!Array.isArray(e.eligible)||!Array.isArray(e.passed)||e.eligible.some((o,l)=>o!==Array.from({length:s.players.length},(c,a)=>(s.current+a)%s.players.length).filter(c=>s.players[c].alive)[l])||new Set(e.eligible).size!==i.length||e.eligible.length!==i.length||e.eligible.some(o=>!i.includes(o))||new Set(e.passed).size!==e.passed.length||e.passed.some(o=>!i.includes(o))||!e.eligible.includes(e.actor)||e.passed.includes(e.actor)||e.leader===e.actor||!Ht(e.bid))return!1;let r=e.eligible.filter(o=>!e.passed.includes(o));return!(!r.length||e.leader===null&&e.bid!==0||e.leader!==null&&(!i.includes(e.leader)||e.passed.includes(e.leader)||r.length<2||e.bid<Zr({tiles:n},e.tile)||e.bid>s.players[e.leader].money))}var Gt={standard:"\u7ECF\u5178\u65C5\u884C",short:"\u77ED\u5C40\u6A21\u5F0F",business:"\u7ECF\u8425\u6311\u6218",daily:"\u6BCF\u65E5\u56FA\u5B9A\u79CD\u5B50\u6311\u6218"},Kr=(s=new Date)=>`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`;function tr(s){if(!nr(s))throw new RangeError("Invalid local date");let e=2166136261;for(let t of"naiwa-daily-v1:"+s)e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0||1}function nr(s){if(typeof s!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(s))return!1;let e=new Date(s+"T12:00:00Z");return Number.isFinite(+e)&&e.toISOString().slice(0,10)===s}function ir({id:s="standard",rounds:e=50,cash:t=3200,tickets:n=60,date:i=Kr()}={}){if(!Object.hasOwn(Gt,s))throw new RangeError("Unknown mode");let r={configVersion:1,id:s,rounds:ft.includes(e)?e:50,speed:1,initial:{cash:t,tickets:n,loan:0,propertiesPerPlayer:0,buildingLevel:0},allowedCards:Object.keys(ie),goal:{type:"ranking",target:0},dailyDate:null,fixedSeed:null};return s!=="standard"&&(r.rounds=s==="daily"?30:20,r.speed=2,r.initial.cash=3200,r.initial.tickets=60),s==="business"&&(r.initial.loan=800,r.initial.propertiesPerPlayer=2,r.initial.buildingLevel=1,r.goal={type:"netWorth",target:5e3},r.allowedCards=r.allowedCards.filter(o=>!["steal","demolish","swap"].includes(o))),s==="daily"&&(r.dailyDate=i,r.fixedSeed=tr(i)),r}function rr(s){let e=s;if(!e||e.configVersion!==1||!Object.hasOwn(Gt,e.id)||!ft.includes(e.rounds)||![1,2,3].includes(e.speed))return!1;let t=e.initial;return!t||!Number.isSafeInteger(t.cash)||t.cash<0||t.cash>1e5||!Number.isSafeInteger(t.tickets)||t.tickets<0||t.tickets>q.couponCap||!Number.isSafeInteger(t.loan)||t.loan<0||t.loan>q.loanLimit||!Number.isInteger(t.propertiesPerPlayer)||t.propertiesPerPlayer<0||t.propertiesPerPlayer>2||!Number.isInteger(t.buildingLevel)||t.buildingLevel<0||t.buildingLevel>5||!Array.isArray(e.allowedCards)||!e.allowedCards.length||new Set(e.allowedCards).size!==e.allowedCards.length||e.allowedCards.some(n=>!Object.hasOwn(ie,n))||!e.goal||!["ranking","netWorth"].includes(e.goal.type)||!Number.isSafeInteger(e.goal.target)||(e.goal.type==="netWorth"?e.goal.target<=0||e.goal.target>1e6:e.goal.target!==0)?!1:e.id==="daily"?nr(e.dailyDate)&&e.fixedSeed===tr(e.dailyDate):e.dailyDate===null&&e.fixedSeed===null}function sr(s){return s.stockBook===void 0&&(s.stockLegacy=!0,s.stockBook=s.stocks.map(e=>({cost:e?null:0,realized:0,unpriced:0}))),s.stockLegacy===void 0&&(s.stockLegacy=!1),s.stockTrades===void 0&&(s.stockTrades=[]),typeof s.stockLegacy=="boolean"&&Array.isArray(s.stockBook)&&s.stockBook.length===4&&s.stockBook.every((e,t)=>e&&(e.cost===null||Number.isSafeInteger(e.cost)&&e.cost>=0)&&(s.stocks[t]?!0:e.cost===0)&&Number.isSafeInteger(e.realized)&&Number.isSafeInteger(e.unpriced)&&e.unpriced>=0)&&Array.isArray(s.stockTrades)&&s.stockTrades.length<=40&&s.stockTrades.every(e=>e&&Number.isInteger(e.stock)&&e.stock>=0&&e.stock<4&&Number.isInteger(e.qty)&&e.qty!==0&&Number.isInteger(e.price)&&e.price>=20&&e.price<=500&&Number.isInteger(e.round)&&e.round>=1&&(e.profit===null||Number.isSafeInteger(e.profit)))}var Wt=1,Fe=s=>typeof s=="number"&&Number.isSafeInteger(s)&&s>0&&s<=864e13,jr=s=>JSON.parse(JSON.stringify(s));function Oe(s){try{let e=typeof s=="string"?JSON.parse(s):jr(s);if(e&&Object.hasOwn(e,"schemaVersion")){if(e.schemaVersion!==Wt||!Fe(e.savedAt))return null;delete e.schemaVersion}if(e?.mapVersion===3)e.customMap=Yi(e.customMap);else if(e&&e.customMap!==void 0)return null;let t=gt(e?.mapVersion??1,e?.customMap);if(e&&e.mapVersion===void 0&&(e.mapVersion=1),e&&e.difficulty===void 0&&(e.difficulty="normal"),!e||![1,2,3,4].includes(e.mapVersion)||!["easy","normal","hard"].includes(e.difficulty)||e.version!==2||!Array.isArray(e.players)||![2,3,4,5,6].includes(e.players.length)||!["roll","departure","moving","branch","buy","estate","event","end","debt","finished","auction","negotiation"].includes(e.phase)||!Number.isInteger(e.current)||e.current<0||e.current>=e.players.length||!Number.isInteger(e.round)||e.round<1||!ft.includes(e.maxRounds)||e.round>e.maxRounds||!Number.isInteger(e.seed)||!Number.isInteger(e.remaining)||e.remaining<0||e.remaining>18||(e.revision===void 0&&e.commandSequences===void 0&&(e.revision=0,e.commandSequences=e.players.map(()=>0)),!Number.isSafeInteger(e.revision)||e.revision<0||!Array.isArray(e.commandSequences)||e.commandSequences.length!==e.players.length||e.commandSequences.some(n=>!Number.isSafeInteger(n)||n<0)||e.commandSequences.reduce((n,i)=>n+i,0)!==e.revision)||(e.moveSteps===void 0&&(e.moveSteps=null),e.moveSteps!==null&&(!Number.isInteger(e.moveSteps)||e.moveSteps<0||e.moveSteps>18))||!e.options||!e.market||e.market.length!==4||!e.ownership||!e.blocks||!Array.isArray(e.logs)||!Array.isArray(e.dice))return null;for(let n of e.players)n.character==="dounai"&&(n.character="naicha");if(e.players.some(n=>!sr(n))||new Set(e.players.map(n=>n.character)).size!==e.players.length)return null;for(let[n,i]of e.players.entries())if(i.id!==n||typeof i.human!="boolean"||typeof i.alive!="boolean"||!Number.isInteger(i.pos)||!$e.some(r=>r.id===i.character)||!t[i.pos]||![i.money,i.deposit,i.loan,...i.stocks].every(r=>Number.isSafeInteger(r)&&r>=0)||i.stocks.length!==4||!Array.isArray(i.cards)||i.cards.length>q.handLimit||i.cards.some(r=>!Object.hasOwn(ie,r))||!Array.isArray(i.history)||i.history.length>80||i.history.some(r=>!Number.isInteger(r)||!t[r])||!Rn[i.vehicle]||!Number.isInteger(i.diceCount)||i.diceCount<1||i.diceCount>Rn[i.vehicle].dice||!Number.isInteger(i.skip)||i.skip<0||i.skip>3||!Number.isInteger(i.forced)||i.forced<0||i.forced>6||!Number.isInteger(i.spiritTurns)||i.spiritTurns<0||i.spiritTurns>4||i.spirit&&!Vi[i.spirit])return null;for(let[n,i]of Object.entries(e.ownership))if(i.closedUntilRound!==void 0&&(!Number.isInteger(i.closedUntilRound)||i.closedUntilRound<0||i.closedUntilRound>e.maxRounds+(Cn.closure.duration??0))||i.buildingType!==void 0&&!Object.hasOwn(pt,i.buildingType)||i.level>kt(i)||i.researchProgress!==void 0&&(!Number.isInteger(i.researchProgress)||i.researchProgress<0||i.researchProgress>2)||i.researchCard!==void 0&&(!Hi(i.level).includes(i.researchCard)||Bt(i)!=="research")||!t[n]||t[n].kind!=="property"||!Number.isInteger(i.player)||i.player<0||i.player>=e.players.length||!Number.isInteger(i.level)||i.level<0||i.level>zi)return null;for(let n of e.market)if(n.previous===void 0&&(n.previous=Number.isFinite(n.change)?Math.max(20,Math.min(500,n.price-n.change)):n.price),!Number.isSafeInteger(n.previous)||n.previous<20||n.previous>500)return null;if(e.market.some(n=>!Number.isSafeInteger(n.price)||n.price<20||n.price>500||!Array.isArray(n.history)||n.history.length>20||n.history.some(i=>!Number.isFinite(i)||i<20||i>500)))return null;for(let n of["music","voice"])if(n in e.options&&typeof e.options[n]!="boolean")return null;for(let n of["musicVolume","effectsVolume","voiceVolume"])if(n in e.options&&(!Number.isFinite(e.options[n])||e.options[n]<0||e.options[n]>1))return null;if("track"in e.options&&!["ode","town"].includes(e.options.track)||(e.options.lighting===void 0&&(e.options.lighting="day"),!["day","golden","night"].includes(e.options.lighting))||(e.options.speed===4&&(e.options.speed=3),e.options.aiFast!==void 0&&typeof e.options.aiFast!="boolean")||typeof e.options.sound!="boolean"||![1,2,3].includes(e.options.speed)||!["auto","low"].includes(e.options.quality)||e.logs.some(n=>typeof n.text!="string"||!Number.isInteger(n.round))||Object.entries(e.blocks).some(([n,i])=>!t[n]||!Number.isInteger(i)||i<0||i>=e.players.length)||e.phase==="estate"&&(!e.ownership[e.players[e.current].pos]||e.ownership[e.players[e.current].pos].player===e.current)||e.phase==="branch"&&(t[e.players[e.current].pos].next.length!==2||e.remaining<=0)||e.phase==="debt"&&(!e.debt||!Number.isSafeInteger(e.debt.amount)||e.debt.amount<=0||e.debt.to!==null&&(!Number.isInteger(e.debt.to)||!e.players[e.debt.to])||typeof e.debt.label!="string")||(e.firstPlayer===void 0&&(e.firstPlayer=0),!Number.isInteger(e.firstPlayer)||e.firstPlayer<0||e.firstPlayer>=e.players.length)||(e.pickups===void 0&&(e.pickups={}),!e.pickups||typeof e.pickups!="object"||Object.entries(e.pickups).some(([n,i])=>!Ki(e).includes(+n)||!Number.isInteger(i)||!e.players[i]))||(e.talents===void 0&&(e.talents=!1),typeof e.talents!="boolean")||!ki(e)||e.mapVersion===4&&e.rules!==12||e.mapVersion!==4&&e.rules>11)return null;e.rules=e.mapVersion===4?12:11;for(let n of e.players){if(n.eventWard===void 0&&(n.eventWard=!1),n.insuranceTurns===void 0&&(n.insuranceTurns=0),n.operatingUntilRound===void 0&&(n.operatingUntilRound=0),typeof n.eventWard!="boolean"||!Number.isInteger(n.insuranceTurns)||n.insuranceTurns<0||n.insuranceTurns>ie.insurance.duration||!Number.isInteger(n.operatingUntilRound)||n.operatingUntilRound<0||n.operatingUntilRound>e.maxRounds+(Cn.operations.duration??0))return null;for(let[i,r]of Object.entries({tickets:60,cardsUsed:0,buildsUsed:0,shopUsed:0,slowTurns:0}))if(n[i]===void 0&&(n[i]=r),!Number.isInteger(n[i])||n[i]<0||n[i]>(i==="tickets"?q.couponCap:i==="slowTurns"?3:i==="shopUsed"?2:i==="cardsUsed"?32:1))return null;if(n.difficulty===void 0&&(n.difficulty=e.difficulty),!["easy","normal","hard"].includes(n.difficulty)||(n.businessReady===void 0&&(n.businessReady=!1),typeof n.businessReady!="boolean")||(n.talentReady===void 0&&(n.talentReady=!1),n.departures===void 0&&(n.departures=0),typeof n.talentReady!="boolean"||!Number.isSafeInteger(n.departures)||n.departures<0)||(n.buildSite===void 0&&(n.buildSite=null),n.bankAccess===void 0&&(n.bankAccess=!1),n.buildSite!==null&&(!Number.isInteger(n.buildSite)||!t[n.buildSite])||typeof n.bankAccess!="boolean"))return null}return e.notice?.outcomes!==void 0&&(!Array.isArray(e.notice.outcomes)||e.notice.outcomes.length>6||e.notice.outcomes.some(n=>typeof n!="string"))||(e.handoff===void 0&&(e.handoff=e.players.filter(n=>n.human).length>1&&e.players[e.current].human&&e.phase!=="finished"?{playerId:e.current}:null),e.handoff!==null&&(!e.handoff||!Number.isInteger(e.handoff.playerId)||e.handoff.playerId!==e.current||!e.players[e.current].human||!e.players[e.current].alive||e.phase==="finished"||e.players.filter(n=>n.human).length<2))||(e.mode===void 0&&(e.mode=ir({rounds:e.maxRounds})),!rr(e.mode)||e.mode.rounds!==e.maxRounds||e.players.some(n=>n.cards.some(i=>!e.mode.allowedCards.includes(i))))||!er(e)?null:e}catch{return null}}function xt(s,e=Date.now()){if(!Fe(e))throw Error("Invalid save time");let t=Oe(s);if(!t)throw Error("Invalid save");return{...t,savedAt:e,schemaVersion:Wt}}var _t="naiwa-monopoly-v2",Xt=_t+"-backup",Yt=Object.freeze(["auto","manual1","manual2","manual3"]);function Un(s){if(!Yt.includes(s))throw Error("Unknown slot");return s==="auto"?_t:_t+"-"+s}var qt=class extends Error{constructor(){super("\u5B58\u6863\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4\u3002")}};function or(s,{clock:e=Date.now}={}){let t=()=>typeof s=="function"?s():s,n=c=>t().getItem(Un(c)),i=(c,a)=>{if(a!==void 0&&n(c)!==a)throw new qt};function r(c){let a=n(c);if(a===null)return{id:c,status:"empty",raw:null,state:null};let h=Oe(a);if(h)return{id:c,status:"valid",raw:a,state:h,updatedAt:Fe(h.savedAt)?h.savedAt:null};let u="corrupt";try{JSON.parse(a)?.schemaVersion>Wt&&(u="future")}catch{}return{id:c,status:u,raw:a,state:null,updatedAt:null}}function o(c,a,{expectedRaw:h=c==="auto"?void 0:null,now:u=e()}={}){let f=xt(a,u),d=JSON.stringify(f);return i(c,h),t().setItem(Un(c),d),f}function l(c,{expectedRaw:a,now:h=e()}={}){let u=xt(c,h);i("auto",a);let f=n("auto");return f!==null&&t().setItem(Xt,f),i("auto",f),t().setItem(_t,JSON.stringify(u)),u}return{read:r,raw:n,list:()=>Yt.map(r),save:o,replaceAuto:l,load(c){let a=r(c);if(a.status!=="valid")throw Error("\u5B58\u6863\u635F\u574F\u6216\u7248\u672C\u4E0D\u517C\u5BB9\u3002");return a.state},remove(c,{expectedRaw:a}={}){if(a===void 0)throw new qt;i(c,a),t().removeItem(Un(c))},export(c){let a=r(c);if(a.status==="empty")throw Error("\u7A7A\u69FD\u4F4D\u65E0\u6CD5\u5BFC\u51FA\u3002");return a.status==="valid"?JSON.stringify(xt(a.state,a.updatedAt||e()),null,2):a.raw},parse:Oe,serialize(c){return JSON.stringify(xt(c,Fe(c.savedAt)?c.savedAt:e()),null,2)},backupAuto(c,{allowInvalid:a=!1}={}){if(c===null||!a&&!Oe(c))throw Error("Invalid backup");i("auto",c),t().setItem(Xt,c)},readBackup(){let c=t().getItem(Xt);return{raw:c,state:Oe(c)}},restoreBackup(){let c=t().getItem(Xt),a=Oe(c);return!a||c===null?null:(t().setItem(_t,c),a)}}}function Nn(s){return Array.isArray(s)?s.map(Nn):s&&typeof s=="object"?Object.fromEntries(Object.keys(s).sort().filter(e=>s[e]!==void 0).map(e=>[e,Nn(s[e])])):s}function Qr(s){let{options:e,savedAt:t,...n}=s;return JSON.stringify(Nn(n))}var es=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],me=(s,e)=>s>>>e|s<<32-e;function ts(s){let e=new TextEncoder().encode(s),t=Math.ceil((e.length+9)/64)*64,n=new Uint8Array(t),i=new DataView(n.buffer);n.set(e),n[e.length]=128,i.setUint32(t-8,Math.floor(e.length/536870912)),i.setUint32(t-4,e.length*8);let r=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],o=new Uint32Array(64);for(let l=0;l<t;l+=64){for(let g=0;g<16;g++)o[g]=i.getUint32(l+g*4);for(let g=16;g<64;g++){let x=o[g-15],v=o[g-2];o[g]=o[g-16]+(me(x,7)^me(x,18)^x>>>3)+o[g-7]+(me(v,17)^me(v,19)^v>>>10)>>>0}let[c,a,h,u,f,d,m,p]=r;for(let g=0;g<64;g++){let x=p+(me(f,6)^me(f,11)^me(f,25))+(f&d^~f&m)+es[g]+o[g]>>>0,v=(me(c,2)^me(c,13)^me(c,22))+(c&a^c&h^a&h)>>>0;p=m,m=d,d=f,f=u+x>>>0,u=h,h=a,a=c,c=x+v>>>0}for(let[g,x]of[c,a,h,u,f,d,m,p].entries())r[g]=r[g]+x>>>0}return r.map(l=>l.toString(16).padStart(8,"0")).join("")}var Fn=s=>"sha256-v1:"+ts(Qr(s));var Zt="naiwa-cloud-links-v1",On=s=>"naiwa-cloud-download-backup-v1:"+s,U=class extends Error{constructor(e,t={}){super(e),this.code=e,this.data=t}},$t=class{constructor({storage:e=localStorage,request:t=globalThis.fetch.bind(globalThis),uuid:n=()=>crypto.randomUUID()}={}){this.storage=e,this.fetch=t,this.uuid=n,this.repo=or(e),this.user=null,this.items=[]}metadata(){try{let e=JSON.parse(this.storage.getItem(Zt)||"null");if(e===null)return{version:1,links:{},pending:{}};if(e.version!==1||!e.links||Array.isArray(e.links)||!e.pending||Array.isArray(e.pending))throw Error();return e}catch{throw new U("LOCAL_SYNC_CORRUPT")}}writeMetadata(e){this.storage.setItem(Zt,JSON.stringify(e))}pending(){return this.user&&this.metadata().pending[this.user.id]||null}link(e){return this.user&&this.metadata().links[this.user.id+":"+e]||null}async api(e,t,n){let i=new AbortController,r=setTimeout(()=>i.abort(),12e3);try{let o=await this.fetch("/api/cloud"+t,{method:e,credentials:"same-origin",cache:"no-store",signal:i.signal,headers:n===void 0?{}:{"Content-Type":"application/json"},body:n===void 0?void 0:JSON.stringify(n)}),l;try{l=await o.json()}catch{throw new U("CLOUD_DISABLED")}if(!o.ok)throw o.status===401&&(this.user=null,this.items=[]),new U(l.error||"CLOUD_UNAVAILABLE",l);return l}catch(o){throw o instanceof U?o:new U("NETWORK_ERROR")}finally{clearTimeout(r)}}verify(e){if(!this.user||e!==this.user.id)throw this.user=null,this.items=[],new U("ACCOUNT_CHANGED")}async session(){let e=await this.api("GET","/session");if(!e.supported)throw new U("CLOUD_DISABLED");return e.user?.id!==this.user?.id&&(this.items=[]),this.user=e.user,e}async auth(e,t,n){let i=await this.api("POST","/auth/"+e,{username:t,password:n});return this.user=i.user,this.items=[],this.refresh()}async refresh(){if(!this.user)return[];let e=await this.api("GET","/saves");return this.verify(e.accountId),this.items=e.items,this.items}async logout(){await this.api("POST","/auth/logout",{actorUserId:this.user?.id||null}),this.user=null,this.items=[]}stage(e,t=null,n="\u65C5\u884C\u5907\u4EFD"){if(!this.user)throw new U("LOGIN_REQUIRED");if(this.pending())throw new U("PENDING_UPLOAD");if(!Yt.includes(e))throw new U("INVALID_SLOT");let i=this.repo.read(e);if(i.status!=="valid")throw new U("INVALID_LOCAL_SAVE");let r=t?this.items.find(c=>c.id===t):null;if(t&&!r)throw new U("REMOTE_CHANGED");let o=this.link(e),l=r&&o?.id===r.id;return{accountId:this.user.id,id:r?.id||this.uuid(),slot:e,localRaw:i.raw,save:i.state,label:n,expectedVersion:l?o.version:r?.version||0,cloud:r,conflict:!!r&&(r.status!=="valid"||l&&o.version!==r.version)}}async upload(e){if(this.verify(e.accountId),this.repo.raw(e.slot)!==e.localRaw)throw new U("LOCAL_CHANGED");let t=this.metadata();if(t.pending[this.user.id])throw new U("PENDING_UPLOAD");let n={accountId:this.user.id,id:e.id,slot:e.slot,localRaw:e.localRaw,body:{actorUserId:this.user.id,requestId:this.uuid(),expectedVersion:e.expectedVersion,label:e.label,save:e.save}};return t.pending[this.user.id]=n,this.writeMetadata(t),this.sendPending(n)}async retry(){let e=this.pending();if(!e)throw new U("NO_PENDING");return this.sendPending(e)}async sendPending(e){this.verify(e.accountId);let t;try{t=await this.api("PUT","/saves/"+encodeURIComponent(e.id),e.body)}catch(i){if(i.code==="VERSION_CONFLICT"||i.code==="CLOUD_CORRUPT"||i.code==="INVALID_SAVE"||i.code==="FUTURE_SAVE"||i.code==="INVALID_UPLOAD"){let r=this.metadata();delete r.pending[e.accountId],this.writeMetadata(r),i.data.pending=e}throw i}this.verify(t.accountId);let n=this.metadata();delete n.pending[e.accountId],n.links[e.accountId+":"+e.slot]={id:t.id,version:t.version,snapshotHash:t.snapshotHash,localHash:Fn(e.body.save)};try{this.writeMetadata(n)}catch{throw new U("LOCAL_RECEIPT_FAILED")}return{...t,localChanged:this.repo.raw(e.slot)!==e.localRaw}}async stageDownload(e,t){if(!["manual1","manual2","manual3"].includes(t))throw new U("MANUAL_SLOT_REQUIRED");if(!this.user)throw new U("LOGIN_REQUIRED");let n=await this.api("GET","/saves/"+encodeURIComponent(e));this.verify(n.accountId);let i=this.repo.parse(n.save);if(!i)throw new U("CLOUD_CORRUPT");return{accountId:this.user.id,slot:t,id:e,cloud:n,state:i,expectedRaw:this.repo.raw(t)}}applyDownload(e){if(this.verify(e.accountId),this.repo.raw(e.slot)!==e.expectedRaw)throw new U("LOCAL_CHANGED");if(!this.repo.parse(e.state))throw new U("CLOUD_CORRUPT");e.expectedRaw!==null&&this.storage.setItem(On(e.slot),e.expectedRaw),this.repo.save(e.slot,e.state,{expectedRaw:e.expectedRaw});let t;try{t=this.metadata()}catch{return{associated:!1}}t.links[e.accountId+":"+e.slot]={id:e.id,version:e.cloud.version,snapshotHash:e.cloud.snapshotHash,localHash:Fn(this.repo.load(e.slot))};let n=!0;try{this.writeMetadata(t)}catch{n=!1}return{associated:n}}async raw(e){if(!this.user)throw new U("LOGIN_REQUIRED");let t=await this.fetch("/api/cloud/saves/"+encodeURIComponent(e)+"/raw",{credentials:"same-origin",cache:"no-store"});if(!t.ok)throw new U(t.status===401?"LOGIN_REQUIRED":"NOT_FOUND");return t.blob()}resetMetadata(){let e=this.storage.getItem(Zt);e!==null&&this.storage.setItem(Zt+":backup",e),this.writeMetadata({version:1,links:{},pending:{}})}};var ns="button,input:not([type=hidden]),select,textarea,a[href],area[href],summary,[tabindex],[contenteditable]:not([contenteditable=false]),audio[controls],video[controls],iframe";function Bn(s){let e=s.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}function is(s,e){for(let t=e;t;t=t.parentNode||t.host)if(t===s)return!0;return!1}function yt(s){if(!s.isConnected||s.matches(":disabled"))return!1;for(let t=s;t;t=t.parentElement||t.getRootNode()?.host)if(t.hidden||t.inert||t.getAttribute("aria-hidden")==="true")return!1;let e=getComputedStyle(s);return e.visibility!=="hidden"&&e.visibility!=="collapse"&&s.getClientRects().length>0}function ar(s){let e=[],t=n=>{for(let i of n.children||[])i.matches(ns)&&(i.tabIndex>=0||i.isContentEditable&&!i.hasAttribute("tabindex"))&&yt(i)&&!i.shadowRoot?.delegatesFocus&&e.push(i),i.shadowRoot&&t(i.shadowRoot),t(i)};return t(s),e.filter(n=>{if(n.type!=="radio"||!n.name)return!0;let i=e.filter(r=>r.type==="radio"&&r.name===n.name&&r.form===n.form&&r.getRootNode()===n.getRootNode());return n===(i.find(r=>r.checked)||i[0])}).sort((n,i)=>(n.tabIndex>0?n.tabIndex:1/0)-(i.tabIndex>0?i.tabIndex:1/0))}function rs(s){return{node:s,id:s?.id,player:s?.dataset?.playerId}}var Jt=class{constructor(e,{onEscape:t=()=>{},fallback:n=()=>null}={}){this.sheet=e,this.doc=e.ownerDocument,this.onEscape=t,this.fallback=n,this.background=new Map,this.epoch=0,this.doc.addEventListener("keydown",i=>this.keydown(i)),this.doc.addEventListener("focusin",()=>{this.active&&!is(this.sheet,Bn(this.doc))&&this.first()},!0),this.observer=new MutationObserver(()=>{this.active&&this.isolate()})}isolate(){for(let e=this.sheet;e.parentElement;e=e.parentElement){for(let t of e.parentElement.children)t===e||t.id==="sheetBackdrop"||(this.background.has(t)||this.background.set(t,t.inert),t.inert=!0);if(e.parentElement===this.doc.body)break}}first(){let e=this.sheet.querySelector("#sheetBody"),t=e?.querySelector("[data-modal-autofocus]");(t&&yt(t)?t:ar(e||this.sheet)[0]||this.sheet.querySelector("#sheetTitle"))?.focus({preventScroll:!0})}open(){this.active||(this.trigger=rs(Bn(this.doc))),this.active=!0;let e=++this.epoch;this.isolate(),this.observer.observe(this.doc.body,{childList:!0,subtree:!0}),queueMicrotask(()=>{this.active&&e===this.epoch&&this.first()})}close(){this.active=!1;let e=++this.epoch,t=this.trigger;this.observer.disconnect();for(let[n,i]of this.background)n.inert=i;this.background.clear(),queueMicrotask(()=>{if(this.active||e!==this.epoch)return;let n=t?.node;(!n||!yt(n))&&(n=t?.id?this.doc.getElementById(t.id):null,!n&&t?.player!==void 0&&(n=this.doc.querySelector('[data-player-id="'+t.player+'"]'))),(!n||!yt(n))&&(n=this.fallback()),n&&yt(n)&&n.focus({preventScroll:!0})})}keydown(e){if(!this.active||this.sheet.hidden||e.isComposing||e.defaultPrevented)return;if(e.key==="Escape"){e.preventDefault(),this.onEscape();return}if(e.key!=="Tab")return;e.preventDefault();let t=ar(this.sheet),n=Bn(this.doc),i=t.indexOf(n);if(!t.length){this.first();return}let r=t[i<0?e.shiftKey?t.length-1:0:(i+(e.shiftKey?-1:1)+t.length)%t.length];r.focus({preventScroll:!0}),r.scrollIntoView?.({block:"nearest",inline:"nearest"})}};var di="180";var $n=0;var Jn=1;var Kn=100;var jn=204,Qn=205;var fi=0,pi=1,mi=2,At=3,gi=4,xi=5,_i=6,yi=7;var vi=300;var ln=1e3,wt=1001,ei=1002;var Mi=1006;var Si=1008;var yr=1009;var vr=1015;var Mr=1023;var Rt=2300,cn=2301,on=2302,ti=2400,ni=2401,ii=2402;var Sr=0;var bi="",K="srgb",ri="srgb-linear",si="linear",an="srgb";var ze=7680;var oi=519;var ai=35044;var Tt=2e3,li=2001;var Ve=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Y=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ac=Math.PI/180,ss=180/Math.PI;function Pt(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Y[s&255]+Y[s>>8&255]+Y[s>>16&255]+Y[s>>24&255]+"-"+Y[e&255]+Y[e>>8&255]+"-"+Y[e>>16&15|64]+Y[e>>24&255]+"-"+Y[t&63|128]+Y[t>>8&255]+"-"+Y[t>>16&255]+Y[t>>24&255]+Y[n&255]+Y[n>>8&255]+Y[n>>16&255]+Y[n>>24&255]).toLowerCase()}function D(s,e,t){return Math.max(e,Math.min(t,s))}function os(s,e){return(s%e+e)%e}function kn(s,e,t){return(1-t)*s+t*e}function vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function J(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var B=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=D(this.x,e.x,t.x),this.y=D(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=D(this.x,e,t),this.y=D(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(D(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(D(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Se=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,l){let c=n[i+0],a=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],p=r[o+3];if(l===0){e[t+0]=c,e[t+1]=a,e[t+2]=h,e[t+3]=u;return}if(l===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=p;return}if(u!==p||c!==f||a!==d||h!==m){let g=1-l,x=c*f+a*d+h*m+u*p,v=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){let M=Math.sqrt(T),I=Math.atan2(M,x*v);g=Math.sin(g*I)/M,l=Math.sin(l*I)/M}let A=l*v;if(c=c*g+f*A,a=a*g+d*A,h=h*g+m*A,u=u*g+p*A,g===1-l){let M=1/Math.sqrt(c*c+a*a+h*h+u*u);c*=M,a*=M,h*=M,u*=M}}e[t]=c,e[t+1]=a,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let l=n[i],c=n[i+1],a=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=l*m+h*u+c*d-a*f,e[t+1]=c*m+h*f+a*u-l*d,e[t+2]=a*m+h*d+l*f-c*u,e[t+3]=h*m-l*u-c*f-a*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,a=l(n/2),h=l(i/2),u=l(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+a*d*m,this._y=a*d*u-f*h*m,this._z=a*h*m+f*d*u,this._w=a*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+a*d*m,this._y=a*d*u-f*h*m,this._z=a*h*m-f*d*u,this._w=a*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-a*d*m,this._y=a*d*u+f*h*m,this._z=a*h*m+f*d*u,this._w=a*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-a*d*m,this._y=a*d*u+f*h*m,this._z=a*h*m-f*d*u,this._w=a*h*u+f*d*m;break;case"YZX":this._x=f*h*u+a*d*m,this._y=a*d*u+f*h*m,this._z=a*h*m-f*d*u,this._w=a*h*u-f*d*m;break;case"XZY":this._x=f*h*u-a*d*m,this._y=a*d*u-f*h*m,this._z=a*h*m+f*d*u,this._w=a*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],l=t[5],c=t[9],a=t[2],h=t[6],u=t[10],f=n+l+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-a)*d,this._z=(o-i)*d}else if(n>l&&n>u){let d=2*Math.sqrt(1+n-l-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+a)/d}else if(l>u){let d=2*Math.sqrt(1+l-n-u);this._w=(r-a)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-l);this._w=(o-i)/d,this._x=(r+a)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(D(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,l=t._x,c=t._y,a=t._z,h=t._w;return this._x=n*h+o*l+i*a-r*c,this._y=i*h+o*c+r*l-n*a,this._z=r*h+o*a+n*c-i*l,this._w=o*h-n*l-i*c-r*a,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,l=o*e._w+n*e._x+i*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-l*l;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let a=Math.sqrt(c),h=Math.atan2(a,l),u=Math.sin((1-t)*h)/a,f=Math.sin(t*h)/a;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,l=e.z,c=e.w,a=2*(o*i-l*n),h=2*(l*t-r*i),u=2*(r*n-o*t);return this.x=t+c*a+o*u-l*h,this.y=n+c*h+l*a-r*u,this.z=i+c*u+r*h-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=D(this.x,e.x,t.x),this.y=D(this.y,e.y,t.y),this.z=D(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=D(this.x,e,t),this.y=D(this.y,e,t),this.z=D(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(D(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=i*c-r*l,this.y=r*o-n*c,this.z=n*l-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zn.copy(this).projectOnVector(e),this.sub(zn)}reflect(e){return this.sub(zn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(D(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zn=new _,lr=new Se,b=class s{constructor(e,t,n,i,r,o,l,c,a){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,c,a)}set(e,t,n,i,r,o,l,c,a){let h=this.elements;return h[0]=e,h[1]=i,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],a=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],p=i[0],g=i[3],x=i[6],v=i[1],T=i[4],A=i[7],M=i[2],I=i[5],E=i[8];return r[0]=o*p+l*v+c*M,r[3]=o*g+l*T+c*I,r[6]=o*x+l*A+c*E,r[1]=a*p+h*v+u*M,r[4]=a*g+h*T+u*I,r[7]=a*x+h*A+u*E,r[2]=f*p+d*v+m*M,r[5]=f*g+d*T+m*I,r[8]=f*x+d*A+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8];return t*o*h-t*l*a-n*r*h+n*l*c+i*r*a-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],u=h*o-l*a,f=l*c-h*r,d=a*r-o*c,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/m;return e[0]=u*p,e[1]=(i*a-h*n)*p,e[2]=(l*n-i*o)*p,e[3]=f*p,e[4]=(h*t-i*c)*p,e[5]=(i*r-l*t)*p,e[6]=d*p,e[7]=(n*c-a*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(n*c,n*a,-n*(c*o+a*l)+o+e,-i*a,i*c,-i*(-a*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Vn.makeScale(e,t)),this}rotate(e){return this.premultiply(Vn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vn=new b;function br(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ci(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var cr={};function hi(s){s in cr||(cr[s]=!0,console.warn(s))}var hr=new b().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ur=new b().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function as(){let s={enabled:!0,workingColorSpace:ri,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===an&&(i.r=ve(i.r),i.g=ve(i.g),i.b=ve(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===an&&(i.r=at(i.r),i.g=at(i.g),i.b=at(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?si:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ri]:{primaries:e,whitePoint:n,transfer:si,toXYZ:hr,fromXYZ:ur,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:K},outputColorSpaceConfig:{drawingBufferColorSpace:K}},[K]:{primaries:e,whitePoint:n,transfer:an,toXYZ:hr,fromXYZ:ur,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:K}}}),s}var oe=as();function ve(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function at(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Qe,hn=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qe===void 0&&(Qe=ci("canvas")),Qe.width=e.width,Qe.height=e.height;let i=Qe.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qe}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ci("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ve(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ve(t[n]/255)*255):t[n]=ve(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ls=0,un=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ls++}),this.uuid=Pt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?r.push(Hn(i[o].image)):r.push(Hn(i[o]))}else r=Hn(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hn(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hn.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cs=0,Gn=new _,lt=class s extends Ve{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=wt,i=wt,r=Mi,o=Si,l=Mr,c=yr,a=s.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cs++}),this.uuid=Pt(),this.name="",this.source=new un(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new b,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gn).x}get height(){return this.source.getSize(Gn).y}get depth(){return this.source.getSize(Gn).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vi)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ln:e.x=e.x-Math.floor(e.x);break;case wt:e.x=e.x<0?0:1;break;case ei:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ln:e.y=e.y-Math.floor(e.y);break;case wt:e.y=e.y<0?0:1;break;case ei:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};lt.DEFAULT_IMAGE=null;lt.DEFAULT_MAPPING=vi;lt.DEFAULT_ANISOTROPY=1;var be=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ce.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ce.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ce.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ce):ce.fromBufferAttribute(r,o),ce.applyMatrix4(e.matrixWorld),this.expandByPoint(ce);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kt.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kt.copy(n.boundingBox)),Kt.applyMatrix4(e.matrixWorld),this.union(Kt)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ce),ce.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mt),jt.subVectors(this.max,Mt),et.subVectors(e.a,Mt),tt.subVectors(e.b,Mt),nt.subVectors(e.c,Mt),Te.subVectors(tt,et),Ae.subVectors(nt,tt),Be.subVectors(et,nt);let t=[0,-Te.z,Te.y,0,-Ae.z,Ae.y,0,-Be.z,Be.y,Te.z,0,-Te.x,Ae.z,0,-Ae.x,Be.z,0,-Be.x,-Te.y,Te.x,0,-Ae.y,Ae.x,0,-Be.y,Be.x,0];return!Wn(t,et,tt,nt,jt)||(t=[1,0,0,0,1,0,0,0,1],!Wn(t,et,tt,nt,jt))?!1:(Qt.crossVectors(Te,Ae),t=[Qt.x,Qt.y,Qt.z],Wn(t,et,tt,nt,jt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ce).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ce).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_e),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_e=[new _,new _,new _,new _,new _,new _,new _,new _],ce=new _,Kt=new be,et=new _,tt=new _,nt=new _,Te=new _,Ae=new _,Be=new _,Mt=new _,jt=new _,Qt=new _,ke=new _;function Wn(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ke.fromArray(s,r);let l=i.x*Math.abs(ke.x)+i.y*Math.abs(ke.y)+i.z*Math.abs(ke.z),c=e.dot(ke),a=t.dot(ke),h=n.dot(ke);if(Math.max(-Math.max(c,a,h),Math.min(c,a,h))>l)return!1}return!0}var hs=new be,St=new _,Xn=new _,dn=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hs.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;St.subVectors(e,this.center);let t=St.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(St,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(St.copy(e.center).add(Xn)),this.expandByPoint(St.copy(e.center).sub(Xn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var ae=class s{constructor(e,t,n,i,r,o,l,c,a,h,u,f,d,m,p,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,c,a,h,u,f,d,m,p,g)}set(e,t,n,i,r,o,l,c,a,h,u,f,d,m,p,g){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=l,x[13]=c,x[2]=a,x[6]=h,x[10]=u,x[14]=f,x[3]=d,x[7]=m,x[11]=p,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/it.setFromMatrixColumn(e,0).length(),r=1/it.setFromMatrixColumn(e,1).length(),o=1/it.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(i),a=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=l*h,p=l*u;t[0]=c*h,t[4]=-c*u,t[8]=a,t[1]=d+m*a,t[5]=f-p*a,t[9]=-l*c,t[2]=p-f*a,t[6]=m+d*a,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,m=a*h,p=a*u;t[0]=f+p*l,t[4]=m*l-d,t[8]=o*a,t[1]=o*u,t[5]=o*h,t[9]=-l,t[2]=d*l-m,t[6]=p+f*l,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,m=a*h,p=a*u;t[0]=f-p*l,t[4]=-o*u,t[8]=m+d*l,t[1]=d+m*l,t[5]=o*h,t[9]=p-f*l,t[2]=-o*a,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=l*h,p=l*u;t[0]=c*h,t[4]=m*a-d,t[8]=f*a+p,t[1]=c*u,t[5]=p*a+f,t[9]=d*a-m,t[2]=-a,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*a,m=l*c,p=l*a;t[0]=c*h,t[4]=p-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-l*h,t[2]=-a*h,t[6]=d*u+m,t[10]=f-p*u}else if(e.order==="XZY"){let f=o*c,d=o*a,m=l*c,p=l*a;t[0]=c*h,t[4]=-u,t[8]=a*h,t[1]=f*u+p,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=l*h,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(us,e,ds)}lookAt(e,t,n){let i=this.elements;return ee.subVectors(e,t),ee.lengthSq()===0&&(ee.z=1),ee.normalize(),Re.crossVectors(n,ee),Re.lengthSq()===0&&(Math.abs(n.z)===1?ee.x+=1e-4:ee.z+=1e-4,ee.normalize(),Re.crossVectors(n,ee)),Re.normalize(),en.crossVectors(ee,Re),i[0]=Re.x,i[4]=en.x,i[8]=ee.x,i[1]=Re.y,i[5]=en.y,i[9]=ee.y,i[2]=Re.z,i[6]=en.z,i[10]=ee.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],a=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],p=n[6],g=n[10],x=n[14],v=n[3],T=n[7],A=n[11],M=n[15],I=i[0],E=i[4],C=i[8],O=i[12],k=i[1],z=i[5],de=i[9],V=i[13],fe=i[2],pe=i[6],Ye=i[10],Ue=i[14],we=i[3],G=i[7],X=i[11],Q=i[15];return r[0]=o*I+l*k+c*fe+a*we,r[4]=o*E+l*z+c*pe+a*G,r[8]=o*C+l*de+c*Ye+a*X,r[12]=o*O+l*V+c*Ue+a*Q,r[1]=h*I+u*k+f*fe+d*we,r[5]=h*E+u*z+f*pe+d*G,r[9]=h*C+u*de+f*Ye+d*X,r[13]=h*O+u*V+f*Ue+d*Q,r[2]=m*I+p*k+g*fe+x*we,r[6]=m*E+p*z+g*pe+x*G,r[10]=m*C+p*de+g*Ye+x*X,r[14]=m*O+p*V+g*Ue+x*Q,r[3]=v*I+T*k+A*fe+M*we,r[7]=v*E+T*z+A*pe+M*G,r[11]=v*C+T*de+A*Ye+M*X,r[15]=v*O+T*V+A*Ue+M*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],l=e[5],c=e[9],a=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],p=e[7],g=e[11],x=e[15];return m*(+r*c*u-i*a*u-r*l*f+n*a*f+i*l*d-n*c*d)+p*(+t*c*d-t*a*f+r*o*f-i*o*d+i*a*h-r*c*h)+g*(+t*a*u-t*l*d-r*o*u+n*o*d+r*l*h-n*a*h)+x*(-i*l*h-t*c*u+t*l*f+i*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],p=e[13],g=e[14],x=e[15],v=u*g*a-p*f*a+p*c*d-l*g*d-u*c*x+l*f*x,T=m*f*a-h*g*a-m*c*d+o*g*d+h*c*x-o*f*x,A=h*p*a-m*u*a+m*l*d-o*p*d-h*l*x+o*u*x,M=m*u*c-h*p*c-m*l*f+o*p*f+h*l*g-o*u*g,I=t*v+n*T+i*A+r*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/I;return e[0]=v*E,e[1]=(p*f*r-u*g*r-p*i*d+n*g*d+u*i*x-n*f*x)*E,e[2]=(l*g*r-p*c*r+p*i*a-n*g*a-l*i*x+n*c*x)*E,e[3]=(u*c*r-l*f*r-u*i*a+n*f*a+l*i*d-n*c*d)*E,e[4]=T*E,e[5]=(h*g*r-m*f*r+m*i*d-t*g*d-h*i*x+t*f*x)*E,e[6]=(m*c*r-o*g*r-m*i*a+t*g*a+o*i*x-t*c*x)*E,e[7]=(o*f*r-h*c*r+h*i*a-t*f*a-o*i*d+t*c*d)*E,e[8]=A*E,e[9]=(m*u*r-h*p*r-m*n*d+t*p*d+h*n*x-t*u*x)*E,e[10]=(o*p*r-m*l*r+m*n*a-t*p*a-o*n*x+t*l*x)*E,e[11]=(h*l*r-o*u*r-h*n*a+t*u*a+o*n*d-t*l*d)*E,e[12]=M*E,e[13]=(h*p*i-m*u*i+m*n*f-t*p*f-h*n*g+t*u*g)*E,e[14]=(m*l*i-o*p*i-m*n*c+t*p*c+o*n*g-t*l*g)*E,e[15]=(o*u*i-h*l*i+h*n*c-t*u*c-o*n*f+t*l*f)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,a=r*o,h=r*l;return this.set(a*o+n,a*l-i*c,a*c+i*l,0,a*l+i*c,h*l+n,h*c-i*o,0,a*c-i*l,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,a=r+r,h=o+o,u=l+l,f=r*a,d=r*h,m=r*u,p=o*h,g=o*u,x=l*u,v=c*a,T=c*h,A=c*u,M=n.x,I=n.y,E=n.z;return i[0]=(1-(p+x))*M,i[1]=(d+A)*M,i[2]=(m-T)*M,i[3]=0,i[4]=(d-A)*I,i[5]=(1-(f+x))*I,i[6]=(g+v)*I,i[7]=0,i[8]=(m+T)*E,i[9]=(g-v)*E,i[10]=(1-(f+p))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=it.set(i[0],i[1],i[2]).length(),o=it.set(i[4],i[5],i[6]).length(),l=it.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],he.copy(this);let a=1/r,h=1/o,u=1/l;return he.elements[0]*=a,he.elements[1]*=a,he.elements[2]*=a,he.elements[4]*=h,he.elements[5]*=h,he.elements[6]*=h,he.elements[8]*=u,he.elements[9]*=u,he.elements[10]*=u,t.setFromRotationMatrix(he),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,o,l=Tt,c=!1){let a=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,p;if(c)m=r/(o-r),p=o*r/(o-r);else if(l===Tt)m=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(l===li)m=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=m,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o,l=Tt,c=!1){let a=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,p;if(c)m=1/(o-r),p=o/(o-r);else if(l===Tt)m=-2/(o-r),p=-(o+r)/(o-r);else if(l===li)m=-1/(o-r),p=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=0,a[12]=f,a[1]=0,a[5]=u,a[9]=0,a[13]=d,a[2]=0,a[6]=0,a[10]=m,a[14]=p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},it=new _,he=new ae,us=new _(0,0,0),ds=new _(1,1,1),Re=new _,en=new _,ee=new _,dr=new ae,fr=new Se,ct=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],l=i[8],c=i[1],a=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(D(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,a),this._z=0);break;case"YXZ":this._x=Math.asin(-D(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(D(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-D(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(D(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-D(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fr.setFromEuler(this),this.setFromQuaternion(fr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ct.DEFAULT_ORDER="XYZ";var fn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fs=0,pr=new _,rt=new Se,ye=new ae,tn=new _,bt=new _,ps=new _,ms=new Se,mr=new _(1,0,0),gr=new _(0,1,0),xr=new _(0,0,1),_r={type:"added"},gs={type:"removed"},st={type:"childadded",child:null},qn={type:"childremoved",child:null},He=class s extends Ve{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fs++}),this.uuid=Pt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new _,t=new ct,n=new Se,i=new _(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new b}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rt.setFromAxisAngle(e,t),this.quaternion.multiply(rt),this}rotateOnWorldAxis(e,t){return rt.setFromAxisAngle(e,t),this.quaternion.premultiply(rt),this}rotateX(e){return this.rotateOnAxis(mr,e)}rotateY(e){return this.rotateOnAxis(gr,e)}rotateZ(e){return this.rotateOnAxis(xr,e)}translateOnAxis(e,t){return pr.copy(e).applyQuaternion(this.quaternion),this.position.add(pr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mr,e)}translateY(e){return this.translateOnAxis(gr,e)}translateZ(e){return this.translateOnAxis(xr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ye.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tn.copy(e):tn.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),bt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ye.lookAt(bt,tn,this.up):ye.lookAt(tn,bt,this.up),this.quaternion.setFromRotationMatrix(ye),i&&(ye.extractRotation(i.matrixWorld),rt.setFromRotationMatrix(ye),this.quaternion.premultiply(rt.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_r),st.child=e,this.dispatchEvent(st),st.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gs),qn.child=e,this.dispatchEvent(qn),qn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ye.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ye.multiply(e.parent.matrixWorld)),e.applyMatrix4(ye),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_r),st.child=e,this.dispatchEvent(st),st.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bt,e,ps),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bt,ms,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,h=c.length;a<h;a++){let u=c[a];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(e.materials,this.material[c]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];i.animations.push(r(e.animations,c))}}if(t){let l=o(e.geometries),c=o(e.materials),a=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),a.length>0&&(n.textures=a),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(l){let c=[];for(let a in l){let h=l[a];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};He.DEFAULT_UP=new _(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Er={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ce={h:0,s:0,l:0},nn={h:0,s:0,l:0};function Yn(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var L=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=K){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,oe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=oe.workingColorSpace){return this.r=e,this.g=t,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=oe.workingColorSpace){if(e=os(e,1),t=D(t,0,1),n=D(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yn(o,r,e+1/3),this.g=Yn(o,r,e),this.b=Yn(o,r,e-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(e,t=K){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=K){let n=Er[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ve(e.r),this.g=ve(e.g),this.b=ve(e.b),this}copyLinearToSRGB(e){return this.r=at(e.r),this.g=at(e.g),this.b=at(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=K){return oe.workingToColorSpace(Z.copy(this),e),Math.round(D(Z.r*255,0,255))*65536+Math.round(D(Z.g*255,0,255))*256+Math.round(D(Z.b*255,0,255))}getHexString(e=K){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=oe.workingColorSpace){oe.workingToColorSpace(Z.copy(this),t);let n=Z.r,i=Z.g,r=Z.b,o=Math.max(n,i,r),l=Math.min(n,i,r),c,a,h=(l+o)/2;if(l===o)c=0,a=0;else{let u=o-l;switch(a=h<=.5?u/(o+l):u/(2-o-l),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=a,e.l=h,e}getRGB(e,t=oe.workingColorSpace){return oe.workingToColorSpace(Z.copy(this),t),e.r=Z.r,e.g=Z.g,e.b=Z.b,e}getStyle(e=K){oe.workingToColorSpace(Z.copy(this),e);let t=Z.r,n=Z.g,i=Z.b;return e!==K?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ce),this.setHSL(Ce.h+e,Ce.s+t,Ce.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ce),e.getHSL(nn);let n=kn(Ce.h,nn.h,t),i=kn(Ce.s,nn.s,t),r=kn(Ce.l,nn.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Z=new L;L.NAMES=Er;var xs=0,pn=class extends Ve{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xs++}),this.uuid=Pt(),this.name="",this.type="Material",this.blending=Jn,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jn,this.blendDst=Qn,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new L(0,0,0),this.blendAlpha=0,this.depthFunc=At,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oi,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ze,this.stencilZFail=ze,this.stencilZPass=ze,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jn&&(n.blendSrc=this.blendSrc),this.blendDst!==Qn&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==At&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oi&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ze&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ze&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ze&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var F=new _,rn=new B,_s=0,Me=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_s++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ai,this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXY(t,rn.x,rn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)F.fromBufferAttribute(this,t),F.applyMatrix3(e),this.setXYZ(t,F.x,F.y,F.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)F.fromBufferAttribute(this,t),F.applyMatrix4(e),this.setXYZ(t,F.x,F.y,F.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)F.fromBufferAttribute(this,t),F.applyNormalMatrix(e),this.setXYZ(t,F.x,F.y,F.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)F.fromBufferAttribute(this,t),F.transformDirection(e),this.setXYZ(t,F.x,F.y,F.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=J(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=J(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=J(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=J(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=J(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=J(t,this.array),n=J(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=J(t,this.array),n=J(n,this.array),i=J(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=J(t,this.array),n=J(n,this.array),i=J(i,this.array),r=J(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ai&&(e.usage=this.usage),e}};var mn=class extends Me{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var gn=class extends Me{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var W=class extends Me{constructor(e,t,n){super(new Float32Array(e),t,n)}},ys=0,se=new ae,Zn=new He,ot=new _,te=new be,Et=new be,H=new _,Ee=class s extends Ve{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ys++}),this.uuid=Pt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(br(e)?gn:mn)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new b().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return se.makeRotationFromQuaternion(e),this.applyMatrix4(se),this}rotateX(e){return se.makeRotationX(e),this.applyMatrix4(se),this}rotateY(e){return se.makeRotationY(e),this.applyMatrix4(se),this}rotateZ(e){return se.makeRotationZ(e),this.applyMatrix4(se),this}translate(e,t,n){return se.makeTranslation(e,t,n),this.applyMatrix4(se),this}scale(e,t,n){return se.makeScale(e,t,n),this.applyMatrix4(se),this}lookAt(e){return Zn.lookAt(e),Zn.updateMatrix(),this.applyMatrix4(Zn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ot).negate(),this.translate(ot.x,ot.y,ot.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new W(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new be);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];te.setFromBufferAttribute(r),this.morphTargetsRelative?(H.addVectors(this.boundingBox.min,te.min),this.boundingBox.expandByPoint(H),H.addVectors(this.boundingBox.max,te.max),this.boundingBox.expandByPoint(H)):(this.boundingBox.expandByPoint(te.min),this.boundingBox.expandByPoint(te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let n=this.boundingSphere.center;if(te.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];Et.setFromBufferAttribute(l),this.morphTargetsRelative?(H.addVectors(te.min,Et.min),te.expandByPoint(H),H.addVectors(te.max,Et.max),te.expandByPoint(H)):(te.expandByPoint(Et.min),te.expandByPoint(Et.max))}te.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)H.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(H));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],c=this.morphTargetsRelative;for(let a=0,h=l.count;a<h;a++)H.fromBufferAttribute(l,a),c&&(ot.fromBufferAttribute(e,a),H.add(ot)),i=Math.max(i,n.distanceToSquared(H))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),l=[],c=[];for(let C=0;C<n.count;C++)l[C]=new _,c[C]=new _;let a=new _,h=new _,u=new _,f=new B,d=new B,m=new B,p=new _,g=new _;function x(C,O,k){a.fromBufferAttribute(n,C),h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,k),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,O),m.fromBufferAttribute(r,k),h.sub(a),u.sub(a),d.sub(f),m.sub(f);let z=1/(d.x*m.y-m.x*d.y);isFinite(z)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(z),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(z),l[C].add(p),l[O].add(p),l[k].add(p),c[C].add(g),c[O].add(g),c[k].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,O=v.length;C<O;++C){let k=v[C],z=k.start,de=k.count;for(let V=z,fe=z+de;V<fe;V+=3)x(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let T=new _,A=new _,M=new _,I=new _;function E(C){M.fromBufferAttribute(i,C),I.copy(M);let O=l[C];T.copy(O),T.sub(M.multiplyScalar(M.dot(O))).normalize(),A.crossVectors(I,O);let z=A.dot(c[C])<0?-1:1;o.setXYZW(C,T.x,T.y,T.z,z)}for(let C=0,O=v.length;C<O;++C){let k=v[C],z=k.start,de=k.count;for(let V=z,fe=z+de;V<fe;V+=3)E(e.getX(V+0)),E(e.getX(V+1)),E(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new _,r=new _,o=new _,l=new _,c=new _,a=new _,h=new _,u=new _;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),p=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.fromBufferAttribute(n,g),l.add(h),c.add(h),a.add(h),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(g,a.x,a.y,a.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)H.fromBufferAttribute(e,t),H.normalize(),e.setXYZ(t,H.x,H.y,H.z)}toNonIndexed(){function e(l,c){let a=l.array,h=l.itemSize,u=l.normalized,f=new a.constructor(c.length*h),d=0,m=0;for(let p=0,g=c.length;p<g;p++){l.isInterleavedBufferAttribute?d=c[p]*l.data.stride+l.offset:d=c[p]*h;for(let x=0;x<h;x++)f[m++]=a[d++]}return new Me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let l in i){let c=i[l],a=e(c,n);t.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let h=0,u=a.length;h<u;h++){let f=a[h],d=e(f,n);c.push(d)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let a=n[c];e.data.attributes[c]=a.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],h=[];for(let u=0,f=a.length;u<f;u++){let d=a[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let a in i){let h=i[a];this.setAttribute(a,h.clone(t))}let r=e.morphAttributes;for(let a in r){let h=[],u=r[a];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[a]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,h=o.length;a<h;a++){let u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ct=class s extends Ee{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let l=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new W(a,3)),this.setAttribute("normal",new W(h,3)),this.setAttribute("uv",new W(u,2));function m(p,g,x,v,T,A,M,I,E,C,O){let k=A/E,z=M/C,de=A/2,V=M/2,fe=I/2,pe=E+1,Ye=C+1,Ue=0,we=0,G=new _;for(let X=0;X<Ye;X++){let Q=X*z-V;for(let Ze=0;Ze<pe;Ze++){let Ot=Ze*k-de;G[p]=Ot*v,G[g]=Q*T,G[x]=fe,a.push(G.x,G.y,G.z),G[p]=0,G[g]=0,G[x]=I>0?1:-1,h.push(G.x,G.y,G.z),u.push(Ze/E),u.push(1-X/C),Ue+=1}}for(let X=0;X<C;X++)for(let Q=0;Q<E;Q++){let Ze=f+Q+pe*X,Ot=f+Q+pe*(X+1),Gr=f+(Q+1)+pe*(X+1),Bi=f+(Q+1)+pe*X;c.push(Ze,Ot,Bi),c.push(Ot,Gr,Bi),we+=6}l.addGroup(d,we,O),d+=we,f+=Ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function wr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $(s){let e={};for(let t=0;t<s.length;t++){let n=wr(s[t]);for(let i in n)e[i]=n[i]}return e}var Ge=class s extends Ee{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+l,Math.PI),a=0,h=[],u=new _,f=new _,d=[],m=[],p=[],g=[];for(let x=0;x<=n;x++){let v=[],T=x/n,A=0;x===0&&o===0?A=.5/t:x===n&&c===Math.PI&&(A=-.5/t);for(let M=0;M<=t;M++){let I=M/t;u.x=-e*Math.cos(i+I*r)*Math.sin(o+T*l),u.y=e*Math.cos(o+T*l),u.z=e*Math.sin(i+I*r)*Math.sin(o+T*l),m.push(u.x,u.y,u.z),f.copy(u).normalize(),p.push(f.x,f.y,f.z),g.push(I+A,1-T),v.push(a++)}h.push(v)}for(let x=0;x<n;x++)for(let v=0;v<t;v++){let T=h[x][v+1],A=h[x][v],M=h[x+1][v],I=h[x+1][v+1];(x!==0||o>0)&&d.push(T,A,I),(x!==n-1||c<Math.PI)&&d.push(A,M,I)}this.setIndex(d),this.setAttribute("position",new W(m,3)),this.setAttribute("normal",new W(p,3)),this.setAttribute("uv",new W(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var We=class extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new L(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new L(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ct,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ge=class extends We{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return D(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new L(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new L(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new L(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function sn(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function vs(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Xe=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xn=class extends Xe{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ti,endingEnd:ti}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,l=i[r],c=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case ni:r=e,l=2*t-n;break;case ii:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ni:o=e,c=2*n-t;break;case ii:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let a=(n-t)*.5,h=this.valueSize;this._weightPrev=a/(t-l),this._weightNext=a/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),p=m*m,g=p*m,x=-f*g+2*f*p-f*m,v=(1+f)*g+(-1.5-2*f)*p+(-.5+f)*m+1,T=(-1-d)*g+(1.5+d)*p+.5*m,A=d*g-d*p;for(let M=0;M!==l;++M)r[M]=x*o[h+M]+v*o[a+M]+T*o[c+M]+A*o[u+M];return r}},_n=class extends Xe{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==l;++f)r[f]=o[a+f]*u+o[c+f]*h;return r}},yn=class extends Xe{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ne=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sn(t,this.TimeBufferType),this.values=sn(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sn(e.times,Array),values:sn(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yn(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _n(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xn(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rt:t=this.InterpolantFactoryMethodDiscrete;break;case cn:t=this.InterpolantFactoryMethodLinear;break;case on:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rt;case this.InterpolantFactoryMethodLinear:return cn;case this.InterpolantFactoryMethodSmooth:return on}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(i!==void 0&&vs(i))for(let l=0,c=i.length;l!==c;++l){let a=i[l];if(isNaN(a)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===on,r=e.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=e[l],h=e[l+1];if(a!==h&&(l!==1||a!==e[0]))if(i)c=!0;else{let u=l*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let p=t[u+m];if(p!==t[f+m]||p!==t[d+m]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];let u=l*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,a=0;a!==n;++a)t[c+a]=t[l+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ne.prototype.ValueTypeName="";ne.prototype.TimeBufferType=Float32Array;ne.prototype.ValueBufferType=Float32Array;ne.prototype.DefaultInterpolation=cn;var Ie=class extends ne{constructor(e,t,n){super(e,t,n)}};Ie.prototype.ValueTypeName="bool";Ie.prototype.ValueBufferType=Array;Ie.prototype.DefaultInterpolation=Rt;Ie.prototype.InterpolantFactoryMethodLinear=void 0;Ie.prototype.InterpolantFactoryMethodSmooth=void 0;var vn=class extends ne{constructor(e,t,n,i){super(e,t,n,i)}};vn.prototype.ValueTypeName="color";var Mn=class extends ne{constructor(e,t,n,i){super(e,t,n,i)}};Mn.prototype.ValueTypeName="number";var Sn=class extends Xe{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(i-t),a=e*l;for(let h=a+l;a!==h;a+=4)Se.slerpFlat(r,0,o,a-l,o,a,c);return r}},It=class extends ne{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Sn(this.times,this.values,this.getValueSize(),e)}};It.prototype.ValueTypeName="quaternion";It.prototype.InterpolantFactoryMethodSmooth=void 0;var Pe=class extends ne{constructor(e,t,n){super(e,t,n)}};Pe.prototype.ValueTypeName="string";Pe.prototype.ValueBufferType=Array;Pe.prototype.DefaultInterpolation=Rt;Pe.prototype.InterpolantFactoryMethodLinear=void 0;Pe.prototype.InterpolantFactoryMethodSmooth=void 0;var bn=class extends ne{constructor(e,t,n,i){super(e,t,n,i)}};bn.prototype.ValueTypeName="vector";var En=class{constructor(e,t,n){let i=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){l++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return a.push(h,u),this},this.removeHandler=function(h){let u=a.indexOf(h);return u!==-1&&a.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=a.length;u<f;u+=2){let d=a[u],m=a[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Tr=new En,wn=class{constructor(e){this.manager=e!==void 0?e:Tr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ei="\\[\\]\\.:\\/",Ms=new RegExp("["+Ei+"]","g"),wi="[^"+Ei+"]",Ss="[^"+Ei.replace("\\.","")+"]",bs=/((?:WC+[\/:])*)/.source.replace("WC",wi),Es=/(WCOD+)?/.source.replace("WCOD",Ss),ws=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wi),Ts=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wi),As=new RegExp("^"+bs+Es+ws+Ts+"$"),Rs=["material","materials","bones","map"],ui=class{constructor(e,t,n){let i=n||N.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},N=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ms,"")}static parseTrackName(e){let t=As.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Rs.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===a){a=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[i];if(o===void 0){let a=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+a+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};N.Composite=ui;N.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};N.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};N.prototype.GetterByBindingType=[N.prototype._getValue_direct,N.prototype._getValue_array,N.prototype._getValue_arrayElement,N.prototype._getValue_toArray];N.prototype.SetterByBindingTypeAndVersioning=[[N.prototype._setValue_direct,N.prototype._setValue_direct_setNeedsUpdate,N.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[N.prototype._setValue_array,N.prototype._setValue_array_setNeedsUpdate,N.prototype._setValue_array_setMatrixWorldNeedsUpdate],[N.prototype._setValue_arrayElement,N.prototype._setValue_arrayElement_setNeedsUpdate,N.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[N.prototype._setValue_fromArray,N.prototype._setValue_fromArray_setNeedsUpdate,N.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rc=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:di}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=di);var Xs=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qs=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ys=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zs=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$s=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Js=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ks=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,js=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qs=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,to=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,no=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,io=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ro=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,so=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oo=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ao=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,co=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ho=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,po=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,go=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_o=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,So="gl_FragColor = linearToOutputTexel( gl_FragColor );",bo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,To=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ao=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ro=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Co=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Io=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Po=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lo=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Do=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uo=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,No=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fo=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oo=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bo=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ko=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zo=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vo=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ho=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Go=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wo=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xo=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qo=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yo=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zo=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$o=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jo=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ko=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jo=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qo=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ea=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ta=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,na=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ia=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ra=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sa=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oa=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aa=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,la=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ca=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ha=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ua=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,da=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fa=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pa=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ma=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ga=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xa=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_a=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ya=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,va=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ma=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sa=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ba=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ea=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wa=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ta=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Aa=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ra=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ca=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ia=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pa=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,La=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Da=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ua=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Na=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fa=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oa=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ba=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ka=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,za=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Va=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ha=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ga=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wa=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xa=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qa=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ya=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Za=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$a=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ja=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ka=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ja=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qa=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,el=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,il=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rl=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ol=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,al=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ll=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ul=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ml=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gl=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xl=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_l=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yl=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ml=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sl=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bl=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,El=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w={alphahash_fragment:Xs,alphahash_pars_fragment:qs,alphamap_fragment:Ys,alphamap_pars_fragment:Zs,alphatest_fragment:$s,alphatest_pars_fragment:Js,aomap_fragment:Ks,aomap_pars_fragment:js,batching_pars_vertex:Qs,batching_vertex:eo,begin_vertex:to,beginnormal_vertex:no,bsdfs:io,iridescence_fragment:ro,bumpmap_pars_fragment:so,clipping_planes_fragment:oo,clipping_planes_pars_fragment:ao,clipping_planes_pars_vertex:lo,clipping_planes_vertex:co,color_fragment:ho,color_pars_fragment:uo,color_pars_vertex:fo,color_vertex:po,common:mo,cube_uv_reflection_fragment:go,defaultnormal_vertex:xo,displacementmap_pars_vertex:_o,displacementmap_vertex:yo,emissivemap_fragment:vo,emissivemap_pars_fragment:Mo,colorspace_fragment:So,colorspace_pars_fragment:bo,envmap_fragment:Eo,envmap_common_pars_fragment:wo,envmap_pars_fragment:To,envmap_pars_vertex:Ao,envmap_physical_pars_fragment:Bo,envmap_vertex:Ro,fog_vertex:Co,fog_pars_vertex:Io,fog_fragment:Po,fog_pars_fragment:Lo,gradientmap_pars_fragment:Do,lightmap_pars_fragment:Uo,lights_lambert_fragment:No,lights_lambert_pars_fragment:Fo,lights_pars_begin:Oo,lights_toon_fragment:ko,lights_toon_pars_fragment:zo,lights_phong_fragment:Vo,lights_phong_pars_fragment:Ho,lights_physical_fragment:Go,lights_physical_pars_fragment:Wo,lights_fragment_begin:Xo,lights_fragment_maps:qo,lights_fragment_end:Yo,logdepthbuf_fragment:Zo,logdepthbuf_pars_fragment:$o,logdepthbuf_pars_vertex:Jo,logdepthbuf_vertex:Ko,map_fragment:jo,map_pars_fragment:Qo,map_particle_fragment:ea,map_particle_pars_fragment:ta,metalnessmap_fragment:na,metalnessmap_pars_fragment:ia,morphinstance_vertex:ra,morphcolor_vertex:sa,morphnormal_vertex:oa,morphtarget_pars_vertex:aa,morphtarget_vertex:la,normal_fragment_begin:ca,normal_fragment_maps:ha,normal_pars_fragment:ua,normal_pars_vertex:da,normal_vertex:fa,normalmap_pars_fragment:pa,clearcoat_normal_fragment_begin:ma,clearcoat_normal_fragment_maps:ga,clearcoat_pars_fragment:xa,iridescence_pars_fragment:_a,opaque_fragment:ya,packing:va,premultiplied_alpha_fragment:Ma,project_vertex:Sa,dithering_fragment:ba,dithering_pars_fragment:Ea,roughnessmap_fragment:wa,roughnessmap_pars_fragment:Ta,shadowmap_pars_fragment:Aa,shadowmap_pars_vertex:Ra,shadowmap_vertex:Ca,shadowmask_pars_fragment:Ia,skinbase_vertex:Pa,skinning_pars_vertex:La,skinning_vertex:Da,skinnormal_vertex:Ua,specularmap_fragment:Na,specularmap_pars_fragment:Fa,tonemapping_fragment:Oa,tonemapping_pars_fragment:Ba,transmission_fragment:ka,transmission_pars_fragment:za,uv_pars_fragment:Va,uv_pars_vertex:Ha,uv_vertex:Ga,worldpos_vertex:Wa,background_vert:Xa,background_frag:qa,backgroundCube_vert:Ya,backgroundCube_frag:Za,cube_vert:$a,cube_frag:Ja,depth_vert:Ka,depth_frag:ja,distanceRGBA_vert:Qa,distanceRGBA_frag:el,equirect_vert:tl,equirect_frag:nl,linedashed_vert:il,linedashed_frag:rl,meshbasic_vert:sl,meshbasic_frag:ol,meshlambert_vert:al,meshlambert_frag:ll,meshmatcap_vert:cl,meshmatcap_frag:hl,meshnormal_vert:ul,meshnormal_frag:dl,meshphong_vert:fl,meshphong_frag:pl,meshphysical_vert:ml,meshphysical_frag:gl,meshtoon_vert:xl,meshtoon_frag:_l,points_vert:yl,points_frag:vl,shadow_vert:Ml,shadow_frag:Sl,sprite_vert:bl,sprite_frag:El},y={common:{diffuse:{value:new L(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new b},alphaMap:{value:null},alphaMapTransform:{value:new b},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new b}},envmap:{envMap:{value:null},envMapRotation:{value:new b},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new b}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new b}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new b},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new b},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new b},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new b}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new b}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new b}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new L(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new L(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new b},alphaTest:{value:0},uvTransform:{value:new b}},sprite:{diffuse:{value:new L(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new b},alphaMap:{value:null},alphaMapTransform:{value:new b},alphaTest:{value:0}}},Ar={basic:{uniforms:$([y.common,y.specularmap,y.envmap,y.aomap,y.lightmap,y.fog]),vertexShader:w.meshbasic_vert,fragmentShader:w.meshbasic_frag},lambert:{uniforms:$([y.common,y.specularmap,y.envmap,y.aomap,y.lightmap,y.emissivemap,y.bumpmap,y.normalmap,y.displacementmap,y.fog,y.lights,{emissive:{value:new L(0)}}]),vertexShader:w.meshlambert_vert,fragmentShader:w.meshlambert_frag},phong:{uniforms:$([y.common,y.specularmap,y.envmap,y.aomap,y.lightmap,y.emissivemap,y.bumpmap,y.normalmap,y.displacementmap,y.fog,y.lights,{emissive:{value:new L(0)},specular:{value:new L(1118481)},shininess:{value:30}}]),vertexShader:w.meshphong_vert,fragmentShader:w.meshphong_frag},standard:{uniforms:$([y.common,y.envmap,y.aomap,y.lightmap,y.emissivemap,y.bumpmap,y.normalmap,y.displacementmap,y.roughnessmap,y.metalnessmap,y.fog,y.lights,{emissive:{value:new L(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:w.meshphysical_vert,fragmentShader:w.meshphysical_frag},toon:{uniforms:$([y.common,y.aomap,y.lightmap,y.emissivemap,y.bumpmap,y.normalmap,y.displacementmap,y.gradientmap,y.fog,y.lights,{emissive:{value:new L(0)}}]),vertexShader:w.meshtoon_vert,fragmentShader:w.meshtoon_frag},matcap:{uniforms:$([y.common,y.bumpmap,y.normalmap,y.displacementmap,y.fog,{matcap:{value:null}}]),vertexShader:w.meshmatcap_vert,fragmentShader:w.meshmatcap_frag},points:{uniforms:$([y.points,y.fog]),vertexShader:w.points_vert,fragmentShader:w.points_frag},dashed:{uniforms:$([y.common,y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:w.linedashed_vert,fragmentShader:w.linedashed_frag},depth:{uniforms:$([y.common,y.displacementmap]),vertexShader:w.depth_vert,fragmentShader:w.depth_frag},normal:{uniforms:$([y.common,y.bumpmap,y.normalmap,y.displacementmap,{opacity:{value:1}}]),vertexShader:w.meshnormal_vert,fragmentShader:w.meshnormal_frag},sprite:{uniforms:$([y.sprite,y.fog]),vertexShader:w.sprite_vert,fragmentShader:w.sprite_frag},background:{uniforms:{uvTransform:{value:new b},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:w.background_vert,fragmentShader:w.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new b}},vertexShader:w.backgroundCube_vert,fragmentShader:w.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:w.cube_vert,fragmentShader:w.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:w.equirect_vert,fragmentShader:w.equirect_frag},distanceRGBA:{uniforms:$([y.common,y.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:w.distanceRGBA_vert,fragmentShader:w.distanceRGBA_frag},shadow:{uniforms:$([y.lights,y.fog,{color:{value:new L(0)},opacity:{value:1}}]),vertexShader:w.shadow_vert,fragmentShader:w.shadow_frag}};Ar.physical={uniforms:$([Ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new b},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new b},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new b},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new b},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new b},sheen:{value:0},sheenColor:{value:new L(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new b},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new b},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new b},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new b},attenuationDistance:{value:0},attenuationColor:{value:new L(0)},specularColor:{value:new L(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new b},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new b},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new b}}]),vertexShader:w.meshphysical_vert,fragmentShader:w.meshphysical_frag};var qe=(1+Math.sqrt(5))/2,ht=1/qe,ym=[new _(-qe,ht,0),new _(qe,ht,0),new _(-ht,0,qe),new _(ht,0,qe),new _(0,qe,-ht),new _(0,qe,ht),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)];var vm=new Float32Array(16),Mm=new Float32Array(9),Sm=new Float32Array(4);var bm={[fi]:pi,[mi]:_i,[gi]:yi,[At]:xi,[pi]:fi,[_i]:mi,[yi]:gi,[xi]:At};var Lt=new _;function le(s,e,t,n,i,r){let o=2*Math.PI*i/4,l=Math.max(r-2*i,0),c=Math.PI/4;Lt.copy(e),Lt[n]=0,Lt.normalize();let a=.5*o/(o+l),h=1-Lt.angleTo(s)/c;return Math.sign(Lt[t])===1?h*a:l/(o+l)+a+a*(1-h)}var Dt=class s extends Ct{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new _,a=new _,h=new _(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,p=new _,g=.5/o;for(let x=0,v=0;x<u.length;x+=3,v+=2)switch(c.fromArray(u,x),a.copy(c),a.x-=Math.sign(a.x)*g,a.y-=Math.sign(a.y)*g,a.z-=Math.sign(a.z)*g,a.normalize(),u[x+0]=h.x*Math.sign(c.x)+a.x*r,u[x+1]=h.y*Math.sign(c.y)+a.y*r,u[x+2]=h.z*Math.sign(c.z)+a.z*r,f[x+0]=a.x,f[x+1]=a.y,f[x+2]=a.z,Math.floor(x/m)){case 0:p.set(1,0,0),d[v+0]=le(p,a,"z","y",r,n),d[v+1]=1-le(p,a,"y","z",r,t);break;case 1:p.set(-1,0,0),d[v+0]=1-le(p,a,"z","y",r,n),d[v+1]=1-le(p,a,"y","z",r,t);break;case 2:p.set(0,1,0),d[v+0]=1-le(p,a,"x","z",r,e),d[v+1]=le(p,a,"z","x",r,n);break;case 3:p.set(0,-1,0),d[v+0]=1-le(p,a,"x","z",r,e),d[v+1]=1-le(p,a,"z","x",r,n);break;case 4:p.set(0,0,1),d[v+0]=1-le(p,a,"x","y",r,e),d[v+1]=1-le(p,a,"y","x",r,t);break;case 5:p.set(0,0,-1),d[v+0]=le(p,a,"x","y",r,e),d[v+1]=1-le(p,a,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var Nm={value:new _(28,30,36).normalize()};var Vm=new Ge(1,32,24),Hm=new Dt(1,1,1,2,.075);var G0=new ge({color:"#e9be38",roughness:.48,metalness:0,clearcoat:.22,clearcoatRoughness:.5}),W0=new ge({color:"#df4a25",roughness:.48,clearcoat:.2});var Ii=s=>s==="auto"?"\u81EA\u52A8\u69FD":{manual1:"\u624B\u52A8\u69FD 1",manual2:"\u624B\u52A8\u69FD 2",manual3:"\u624B\u52A8\u69FD 3"}[s]||"\u5B58\u6863";function Ur(s){let e=s.players[0],t=$e.find(i=>i.id===e.character),n=$e.find(i=>i.id===s.players[s.current].character);return{map:Dn(s).name,round:s.round,players:s.players.length,time:Fe(s.savedAt)?new Date(s.savedAt).toLocaleString("zh-CN",{hour12:!1}):"\u672A\u77E5\uFF08\u65E7\u5B58\u6863\uFF09",detail:Gt[s.mode.id]+" \xB7 "+t.name+" \xB7 \u73B0\u91D1 "+e.money.toLocaleString("zh-CN")+" \xB7 \u5730\u4EA7 "+Object.values(s.ownership).filter(i=>i.player===0).length+" \u5757 \xB7 "+(s.phase==="finished"?"\u5DF2\u7ED3\u7B97":s.handoff?"\u7B49\u5F85\u6362\u624B":n.name+" \xB7 "+{auction:"\u5F85\u7ADE\u62CD",negotiation:"\u5F85\u4EA4\u6613\u5BA1\u6838",roll:"\u5F85\u63B7\u9AB0",departure:"\u51FA\u53D1\u4E2D",moving:"\u79FB\u52A8\u4E2D",branch:"\u5F85\u9009\u8DEF\u7EBF",buy:"\u5F85\u8D2D\u5730",estate:"\u5F85\u4ED8\u79DF",event:"\u5F85\u786E\u8BA4\u4E8B\u4EF6",end:"\u7ECF\u8425\u4E2D",debt:"\u5F85\u7B79\u6B3E"}[s.phase])}}var S=s=>document.getElementById(s),P=new $t,Pi=!1,Li=null,Or=null,Di=null;S("cloudMain").addEventListener("click",s=>{let e=s.target.closest("button");e&&(Or=e)},!0);var Nr=new Jt(S("confirm"),{onEscape:()=>Li?.(),fallback:()=>S("upload")}),Rl={CLOUD_DISABLED:"\u6B64\u7AD9\u70B9\u672A\u542F\u7528\u4E91\u5B58\u6863\u3002\u53EF\u8FD4\u56DE\u5355\u673A\uFF0C\u65E0\u9700\u767B\u5F55\u7EE7\u7EED\u73A9\u3002",NETWORK_ERROR:"\u8FDE\u63A5\u5931\u8D25\uFF0C\u672A\u81EA\u52A8\u91CD\u53D1\u3002\u4E0A\u4F20\u82E5\u5DF2\u63D0\u4EA4\uFF0C\u8BF7\u7528\u201C\u91CD\u8BD5\u5F85\u786E\u8BA4\u4E0A\u4F20\u201D\u786E\u8BA4\u539F\u7ED3\u679C\u3002\u9000\u51FA\u82E5\u5931\u8D25\uFF0C\u670D\u52A1\u5668\u4F1A\u8BDD\u4ECD\u53EF\u80FD\u6709\u6548\uFF0C\u8054\u7F51\u540E\u8BF7\u91CD\u8BD5\u9000\u51FA\u3002",LOGIN_REQUIRED:"\u8BF7\u91CD\u65B0\u767B\u5F55\uFF1B\u672C\u673A\u5B58\u6863\u4ECD\u7136\u4FDD\u7559\u3002",BAD_CREDENTIALS:"\u7528\u6237\u540D\u6216\u5BC6\u7801\u4E0D\u6B63\u786E\u3002",USERNAME_TAKEN:"\u7528\u6237\u540D\u5DF2\u88AB\u4F7F\u7528\u3002",INVALID_CREDENTIALS:"\u8BF7\u68C0\u67E5\u7528\u6237\u540D\u548C\u5BC6\u7801\u957F\u5EA6\u3002",ACCOUNT_CHANGED:"\u8D26\u53F7\u5DF2\u5728\u5176\u4ED6\u9875\u9762\u6539\u53D8\uFF0C\u8BF7\u91CD\u65B0\u68C0\u67E5\u767B\u5F55\u72B6\u6001\u3002\u6CA1\u6709\u7EE7\u7EED\u6B64\u64CD\u4F5C\u3002",LOCAL_CHANGED:"\u672C\u673A\u5B58\u6863\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u68C0\u67E5\u5E76\u786E\u8BA4\u3002",LOCAL_SYNC_CORRUPT:"\u672C\u673A\u540C\u6B65\u8BB0\u5F55\u635F\u574F\uFF0C\u8BF7\u5148\u5BFC\u51FA\u672C\u673A\u5B58\u6863\uFF0C\u518D\u4F7F\u7528\u540C\u6B65\u8BB0\u5F55\u7EF4\u62A4\uFF1B\u539F\u8BB0\u5F55\u4E0D\u4F1A\u81EA\u52A8\u5220\u9664\u3002",INVALID_LOCAL_SAVE:"\u6765\u6E90\u69FD\u4F4D\u4E3A\u7A7A\u3001\u635F\u574F\u6216\u7248\u672C\u4E0D\u517C\u5BB9\uFF0C\u4E0D\u80FD\u4E0A\u4F20\u3002",PENDING_UPLOAD:"\u5148\u91CD\u8BD5\u5F85\u786E\u8BA4\u4E0A\u4F20\uFF0C\u53D6\u5F97\u539F\u8BF7\u6C42\u7ED3\u679C\u540E\u518D\u4E0A\u4F20\u65B0\u4FEE\u6539\u3002",LOCAL_RECEIPT_FAILED:"\u4E91\u7AEF\u5DF2\u63A5\u6536\uFF0C\u4F46\u672C\u673A\u672A\u80FD\u8BB0\u5F55\u7ED3\u679C\u3002\u8BF7\u91CA\u653E\u672C\u673A\u7A7A\u95F4\u540E\u91CD\u8BD5\u5F85\u786E\u8BA4\u4E0A\u4F20\u3002",REQUEST_ID_REUSED:"\u8BF7\u6C42\u6807\u8BC6\u4E0E\u5185\u5BB9\u4E0D\u4E00\u81F4\uFF0C\u5DF2\u62D2\u7EDD\u3002\u8BF7\u4FDD\u7559\u526F\u672C\u5E76\u68C0\u67E5\u540C\u6B65\u8BB0\u5F55\u3002",CLOUD_CORRUPT:"\u4E91\u7AEF\u6570\u636E\u635F\u574F\u6216\u7248\u672C\u4E0D\u517C\u5BB9\uFF0C\u672A\u5199\u5165\u672C\u673A\u3002\u53EF\u4E0B\u8F7D\u539F\u59CB\u6570\u636E\u4FDD\u7559\uFF0C\u6216\u4E0A\u4F20\u4E3A\u72EC\u7ACB\u65B0\u526F\u672C\u3002",SAVE_LIMIT:"\u4E91\u7AEF\u526F\u672C\u6570\u91CF\u5DF2\u8FBE\u4E0A\u9650\u3002\u8BF7\u5BFC\u51FA JSON \u4FDD\u7559\u3002",REQUEST_LIMIT:"\u4E91\u7AEF\u8BF7\u6C42\u8BB0\u5F55\u5DF2\u8FBE\u4E0A\u9650\uFF0C\u8BF7\u8054\u7CFB\u7AD9\u70B9\u7EF4\u62A4\u8005\u3002",RATE_LIMIT:"\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",AUTH_BUSY:"\u767B\u5F55\u670D\u52A1\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",REMOTE_CHANGED:"\u4E91\u7AEF\u5217\u8868\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5148\u5237\u65B0\u3002"};function ue(s){S("status").textContent!==s&&(S("status").textContent=s)}function Ui(s){ue(Rl[s.code]||"\u64CD\u4F5C\u672A\u5B8C\u6210\uFF08"+(s.code||"\u672C\u673A\u5B58\u50A8\u4E0D\u53EF\u7528")+"\uFF09\u3002\u539F\u5B58\u6863\u672A\u88AB\u9759\u9ED8\u66FF\u6362\u3002")}function Ni(){S("network").textContent=navigator.onLine?"\u7F51\u7EDC\u53EF\u7528\uFF1B\u540C\u6B65\u9700\u624B\u52A8\u786E\u8BA4\u3002":"\u5F53\u524D\u79BB\u7EBF\uFF1A\u53EF\u8FD4\u56DE\u5355\u673A\u7EE7\u7EED\u73A9\uFF0C\u8054\u7F51\u540E\u624B\u52A8\u540C\u6B65\u3002"}function Cl(s){return s?new Date(s).toLocaleString("zh-CN",{hour12:!1}):"\u672A\u77E5"}function Fi(s){if(!s)return"\u7A7A\u69FD\u4F4D\u6216\u6570\u636E\u4E0D\u53EF\u8BFB\u53D6";let e=Ur(s);return e.map+" \xB7 \u7B2C "+e.round+" \u8F6E \xB7 "+e.players+` \u4EBA
\u672C\u673A\u4FDD\u5B58\u65F6\u95F4\uFF08\u4EC5\u4F9B\u53C2\u8003\uFF09\uFF1A`+e.time}function Oi(s){return s?(s.summary?s.summary.map+" \xB7 \u7B2C "+s.summary.round+" \u8F6E \xB7 "+s.summary.players+" \u4EBA":"\u6458\u8981\u4E0D\u53EF\u7528")+`
\u670D\u52A1\u5668\u4FDD\u5B58\u65F6\u95F4\uFF1A`+Cl(s.serverSavedAt)+" \xB7 \u7248\u672C "+s.version+(s.status==="valid"?"":" \xB7 \u6570\u636E\u635F\u574F\u6216\u7248\u672C\u4E0D\u517C\u5BB9"):"\u5C1A\u65E0\u4E91\u7AEF\u526F\u672C"}function Fr(s,e){let t=document.createElement("button");return t.textContent=s,t.addEventListener("click",()=>xe(e)),t}function Br(s,e){let t=document.createElement("a"),n=URL.createObjectURL(s);t.href=n,t.download=e,t.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function An(s,e,t){return new Promise(n=>{let i=S("confirm"),r=Or||document.activeElement;Di=r,S("confirmTitle").textContent=s,S("comparison").replaceChildren(),S("choices").replaceChildren();for(let a of e){let h=document.createElement("p");h.textContent=a,S("comparison").append(h)}let o=!1,l=a=>{o||(o=!0,Nr.close(),i.close(),Li=null,i.removeEventListener("cancel",c),r?.isConnected&&r.focus(),n(a))},c=a=>{a.preventDefault(),l(null)};i.addEventListener("cancel",c);for(let[a,h]of[[null,"\u53D6\u6D88"],...t]){let u=document.createElement("button");u.textContent=h,u.onclick=()=>l(a),S("choices").append(u)}Li=()=>l(null),i.showModal(),Nr.open(),S("choices").firstElementChild.focus()})}function kr(){try{let s=P.repo.read(S("source").value);S("localSummary").textContent=Fi(s.state)}catch(s){Ui(s)}}function Il(){let s=P.user;if(S("auth").hidden=!!s,S("account").hidden=!s,S("accountName").textContent=s?"\u5F53\u524D\u8D26\u53F7\uFF1A"+s.username:"",!s){S("cloudList").replaceChildren(),S("target").replaceChildren(new Option("\u65B0\u5EFA\u4E91\u7AEF\u526F\u672C",""));return}kr();try{S("retry").hidden=!P.pending()}catch(t){S("retry").hidden=!0,Ui(t)}let e=S("target").value;S("target").replaceChildren(new Option("\u65B0\u5EFA\u4E91\u7AEF\u526F\u672C","")),S("cloudList").replaceChildren();for(let t of P.items){S("target").append(new Option(t.label+" \xB7 \u7248\u672C "+t.version,t.id));let n=document.createElement("article"),i=document.createElement("h3"),r=document.createElement("p"),o=document.createElement("div");n.dataset.cloudId=t.id,o.className="actions",i.textContent=t.label,r.textContent=Oi(t),o.append(Fr("\u4E0B\u8F7D\u5230\u624B\u52A8\u69FD",()=>zr(t.id)),Fr("\u4E0B\u8F7D\u539F\u59CB JSON",async()=>Br(await P.raw(t.id),"cloud-save.json"))),o.firstChild.disabled=t.status!=="valid",n.append(i,r,o),S("cloudList").append(n)}P.items.some(t=>t.id===e)&&(S("target").value=e)}async function xe(s){if(Pi)return;let e=document.activeElement;Pi=!0,document.querySelectorAll("main button").forEach(t=>t.disabled=!0);try{await s()}catch(t){Ui(t)}finally{Pi=!1,document.querySelectorAll("main button").forEach(n=>n.disabled=!1),Il();let t=Di||(document.activeElement===document.body?e:null);Di=null,t?.isConnected&&!t.disabled&&t.focus()}}async function zr(s){let e=await P.stageDownload(s,S("destination").value),t=P.repo.read(e.slot);if(await An("\u786E\u8BA4\u4E0B\u8F7D\u5230"+Ii(e.slot),["\u5C06\u8986\u76D6\u8FD9\u4E2A\u624B\u52A8\u69FD\uFF1B\u65E7\u6570\u636E\u4F1A\u5148\u4FDD\u7559\u4E3A\u8986\u76D6\u524D\u526F\u672C\u3002","\u672C\u673A\uFF1A"+Fi(t.state),"\u4E91\u7AEF\uFF1A"+Oi(e.cloud)],[["download","\u4FDD\u7559\u65E7\u526F\u672C\u5E76\u4E0B\u8F7D"]])){let i=P.applyDownload(e);ue("\u5DF2\u4E0B\u8F7D\u5230"+Ii(e.slot)+"\u3002\u8FD4\u56DE\u5355\u673A\uFF0C\u5728\u5B58\u6863\u7BA1\u7406\u4E2D\u8BFB\u53D6\u6B64\u69FD\u7EE7\u7EED\u3002"+(i.associated?"":"\u672C\u673A\u540C\u6B65\u5173\u8054\u672A\u4FDD\u5B58\uFF0C\u4E0B\u6B21\u4E0A\u4F20\u8BF7\u624B\u52A8\u9009\u62E9\u76EE\u6807\u3002"))}}async function Vr(s){let e=s.cloud?.status==="valid"?[["cloud","\u4F7F\u7528\u4E91\u7AEF\uFF08\u4E0B\u8F7D\u786E\u8BA4\uFF09"],["local","\u7528\u672C\u673A\u8986\u76D6\u6B64\u4E91\u7AEF\u7248\u672C"],["copy","\u4E24\u8005\u4FDD\u7559\uFF1A\u65B0\u5EFA\u4E91\u7AEF\u526F\u672C"]]:[["copy","\u4FDD\u7559\u4E91\u7AEF\u539F\u6570\u636E\uFF0C\u65B0\u5EFA\u526F\u672C"]],t=await An(s.conflict?"\u5B58\u6863\u51B2\u7A81\uFF1A\u8BF7\u9009\u62E9\u4FDD\u7559\u65B9\u5F0F":"\u786E\u8BA4\u4E0A\u4F20\u5355\u673A\u5B58\u6863",["\u672C\u673A\uFF1A"+Fi(s.save),"\u4E91\u7AEF\uFF1A"+Oi(s.cloud),"\u4E0A\u4F20\u5F52\u5C5E\u5F53\u524D\u8D26\u53F7\uFF1A"+P.user.username+"\u3002\u4E0D\u4F1A\u6309\u672C\u673A\u65F6\u95F4\u81EA\u52A8\u8986\u76D6\u3002"],s.cloud?e:[["local","\u786E\u8BA4\u4E0A\u4F20\u65B0\u526F\u672C"]]);if(t){if(t==="cloud"){await zr(s.id);return}t==="copy"?s={...s,id:crypto.randomUUID(),expectedVersion:0,cloud:null,label:s.label.slice(0,57)+" \u526F\u672C"}:s={...s,expectedVersion:s.cloud?.version||0};try{let n=await P.upload(s);await P.refresh(),S("target").value=n.id,ue("\u4E91\u7AEF\u5DF2\u4FDD\u5B58\uFF1A\u7B2C "+n.summary.round+" \u8F6E \xB7 \u670D\u52A1\u5668\u7248\u672C "+n.version+(n.localChanged?"\u3002\u672C\u673A\u540E\u6765\u6709\u65B0\u4FEE\u6539\uFF0C\u5C1A\u672A\u4E0A\u4F20\u3002":"\u3002"))}catch(n){await Hr(n)}}}async function Hr(s){if((s.code==="VERSION_CONFLICT"||s.code==="CLOUD_CORRUPT")&&s.data.pending){let e=s.data.pending;await P.refresh();let t=P.items.find(n=>n.id===e.id)||s.data.cloud;await Vr({accountId:e.accountId,id:e.id,slot:e.slot,localRaw:e.localRaw,save:e.body.save,label:e.body.label,expectedVersion:e.body.expectedVersion,cloud:t,conflict:!0});return}throw s}S("authForm").addEventListener("submit",s=>{s.preventDefault();let e=s.submitter?.name==="register"?"register":"login",t=S("password").value;S("password").value="",xe(async()=>{await P.auth(e,S("username").value,t),ue("\u5DF2\u767B\u5F55\u3002\u6E38\u5BA2\u5B58\u6863\u4ECD\u5728\u672C\u673A\uFF0C\u5C1A\u672A\u4E0A\u4F20\uFF1B\u8BF7\u9009\u62E9\u6765\u6E90\u5E76\u786E\u8BA4\u7ED1\u5B9A\u5230\u6B64\u8D26\u53F7\u3002")})});S("source").addEventListener("change",kr);S("upload").onclick=()=>xe(async()=>{await P.refresh(),await Vr(P.stage(S("source").value,S("target").value||null,S("label").value))});S("retry").onclick=()=>xe(async()=>{try{let s=await P.retry();await P.refresh(),ue("\u5DF2\u786E\u8BA4\u539F\u4E0A\u4F20\u7ED3\u679C\uFF1A\u670D\u52A1\u5668\u7248\u672C "+s.version+(s.localChanged?"\uFF1B\u672C\u673A\u65B0\u4FEE\u6539\u5C1A\u672A\u4E0A\u4F20\u3002":"\u3002"))}catch(s){await Hr(s)}});S("refresh").onclick=()=>xe(async()=>{await P.refresh(),ue("\u4E91\u7AEF\u5217\u8868\u5DF2\u5237\u65B0\u3002")});S("logout").onclick=()=>xe(async()=>{await An("\u9000\u51FA\u5F53\u524D\u8BBE\u5907\u767B\u5F55",["\u672C\u673A\u5B58\u6863\u4E0E\u5F85\u786E\u8BA4\u8BF7\u6C42\u6309\u539F\u8D26\u53F7\u4FDD\u7559\uFF1B\u5176\u4ED6\u8BBE\u5907\u4F1A\u8BDD\u4E0D\u53D7\u5F71\u54CD\u3002"],[["logout","\u786E\u8BA4\u9000\u51FA"]])&&(await P.logout(),ue("\u5DF2\u9000\u51FA\u3002\u53EF\u8FD4\u56DE\u5355\u673A\u4EE5\u6E38\u5BA2\u7EE7\u7EED\u73A9\uFF1B\u672A\u5220\u9664\u672C\u673A\u6216\u4E91\u7AEF\u5B58\u6863\u3002"))});S("check").onclick=()=>xe(async()=>{await P.session(),P.user&&await P.refresh(),ue(P.user?"\u767B\u5F55\u72B6\u6001\u5DF2\u66F4\u65B0\u3002":"\u5F53\u524D\u4E3A\u6E38\u5BA2\uFF0C\u65E0\u9700\u767B\u5F55\u5373\u53EF\u73A9\u3002")});S("backup").onclick=()=>xe(()=>{let s=localStorage.getItem(On(S("destination").value));if(s===null){ue("\u8BE5\u69FD\u4F4D\u8FD8\u6CA1\u6709\u4E91\u7AEF\u4E0B\u8F7D\u8986\u76D6\u524D\u526F\u672C\u3002");return}Br(new Blob([s],{type:"application/json"}),"before-cloud-download.json")});S("reset").onclick=()=>xe(async()=>{await An("\u91CD\u7F6E\u540C\u6B65\u8BB0\u5F55",["\u5C06\u5148\u5907\u4EFD\u539F\u8BB0\u5F55\uFF0C\u518D\u6E05\u9664\u5173\u8054\u4E0E\u5F85\u786E\u8BA4\u8BF7\u6C42\u3002\u672C\u673A\u5B58\u6863\u4E0E\u4E91\u7AEF\u6570\u636E\u4E0D\u5220\u9664\u3002\u4E91\u7AEF\u53EF\u80FD\u5DF2\u7ECF\u63A5\u6536\u5F85\u786E\u8BA4\u8BF7\u6C42\uFF0C\u8BF7\u5148\u5237\u65B0\u68C0\u67E5\u3002"],[["reset","\u5907\u4EFD\u5E76\u91CD\u7F6E"]])&&(P.resetMetadata(),ue("\u540C\u6B65\u8BB0\u5F55\u5DF2\u5907\u4EFD\u5E76\u91CD\u7F6E\uFF1B\u8BF7\u5237\u65B0\u68C0\u67E5\u4E91\u7AEF\u5DF2\u6709\u526F\u672C\u3002"))});addEventListener("online",Ni);addEventListener("offline",Ni);Ni();xe(async()=>{await P.session(),P.user&&await P.refresh(),ue(P.user?"\u5DF2\u6062\u590D\u767B\u5F55\u72B6\u6001\u3002\u540C\u6B65\u59CB\u7EC8\u9700\u8981\u624B\u52A8\u786E\u8BA4\u3002":"\u5F53\u524D\u4E3A\u6E38\u5BA2\uFF0C\u65E0\u9700\u767B\u5F55\u5373\u53EF\u73A9\u3002")});})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
