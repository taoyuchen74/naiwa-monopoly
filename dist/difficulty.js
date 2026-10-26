export const DIFFICULTIES={easy:{name:'轻松',reserve:650,cardThreshold:Infinity,description:'简单买地，较少用卡，岔路随意选择，适合首次试玩。'},normal:{name:'标准',reserve:400,cardThreshold:55,description:'比较落点风险、经营街区、使用道具和买卖股票。'},hard:{name:'高手',reserve:550,cardThreshold:25,description:'评估下一轮租金、优先连片建设，组合用卡并管理现金和股票。'}};
/** @param {import("./engine.js").Game} g */
export const difficulty=g=>DIFFICULTIES[g.aiDifficulty()]||DIFFICULTIES.normal;
