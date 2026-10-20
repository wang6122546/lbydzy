// 明显虚构的本地样例；字段与状态结构来自已观察页面。
const unit='演示集团有限公司',site='演示集团有限公司选矿厂';
const record=(id,type,title,level,progress,status,start,end,extra={})=>({id,type,title,level,progress,status,start,end,number:`${{fire:'DH',high:'GC',earth:'DT'}[type]||'ZY'}202610${id.slice(-2).padStart(2,'0')}001`,unit,site,owner:'演示负责人',guardians:['演示监护人甲','演示监护人乙'],applicant:'演示用户',applicationTime:'2026-10-14 12:21',mine:true,participating:true,fields:{},people:{},files:{},workers:[{id:'demo-worker-1',name:'演示作业人员',unit,kind:'普通'}],...extra});
export const operationSeed=[
 record('demo-risk-01','fire','演示动火作业内容','三级','风险评估','申请中','2026-10-15 12:21','2026-10-16 12:21',{todo:'risk',fields:{'动火方式':'演示动火方式','动火地点及部位':'演示作业区域'}}),
 record('demo-risk-02','high','演示高架平移','三级','风险评估','申请中','2026-03-04 19:25','2026-03-05 03:25',{todo:'risk',fields:{'作业高度':'20','作业地点及部位':'演示高架区'}}),
 record('demo-safety-03','fire','演示作业内容','三级','接收交底','申请中','2026-03-12 19:12','2026-03-13 19:12',{todo:'safety',action:'气体检测'}),
 record('demo-safety-04','earth','演示动土作业','C级','接收交底','申请中','2024-10-17 15:47','2024-10-18 15:56',{todo:'safety',action:'接收交底'}),
 record('demo-complete-05','high','演示高处作业','三级','验收完成','已完成','2025-12-17 09:34','2025-12-18 09:34'),
 record('demo-fire-06','fire','演示动火申请','一级','风险评估','申请中','2025-12-24 10:24','2025-12-24 18:24')
];
