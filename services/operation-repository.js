import {operationSeed} from '../data/operation-seed.js';
const channel='BroadcastChannel' in window?new BroadcastChannel('mobile-operation'):null;
const database=new Promise((resolve,reject)=>{const q=indexedDB.open('mobile-operation-demo',1);q.onupgradeneeded=()=>{const d=q.result;d.createObjectStore('tickets',{keyPath:'id'});d.createObjectStore('gas',{keyPath:'id'});d.createObjectStore('meta',{keyPath:'id'})};q.onerror=()=>reject(q.error);q.onsuccess=()=>{const d=q.result,t=d.transaction(['tickets','meta'],'readwrite'),m=t.objectStore('meta'),s=m.get('seed');s.onsuccess=()=>{if(!s.result){operationSeed.forEach(r=>t.objectStore('tickets').put(r));m.put({id:'seed',version:1})}};t.oncomplete=()=>resolve(d);t.onerror=()=>reject(t.error)}});
async function run(store,mode,fn){const d=await database;return new Promise((resolve,reject)=>{const t=d.transaction(store,mode);let value;const q=fn(t.objectStore(store));q.onsuccess=()=>value=q.result;t.oncomplete=()=>{if(mode==='readwrite'){channel?.postMessage('changed');window.dispatchEvent(new Event('operationchange'))}resolve(value)};t.onerror=()=>reject(t.error)})}
export const operationRepository={
 async list(filters={}){return (await run('tickets','readonly',s=>s.getAll())).filter(r=>(!filters.type||r.type===filters.type)&&(!filters.todo||r.todo===filters.todo)&&(!filters.query||r.title.includes(filters.query))&&(!filters.status||r.status===filters.status)&&(!filters.scope||filters.scope==='全部作业'||r[filters.scope==='我申请的作业'?'mine':'participating'])&&(!filters.unit||r.unit===filters.unit)&&(!filters.site||r.site===filters.site)&&(!filters.start||r.start.slice(0,10)>=filters.start)&&(!filters.end||r.end.slice(0,10)<=filters.end)).sort((a,b)=>String(b.createdAt||'').localeCompare(String(a.createdAt||'')))},
 get:id=>run('tickets','readonly',s=>s.get(id)),
 async create(payload){const id=crypto.randomUUID(),record={...payload,id,createdAt:new Date().toISOString()};await run('tickets','readwrite',s=>s.put(record));return record},
 async update(id,patch){const old=await this.get(id);if(!old)throw Error('作业票不存在');const record={...old,...patch,id,updatedAt:new Date().toISOString()};await run('tickets','readwrite',s=>s.put(record));return record},
 remove:id=>run('tickets','readwrite',s=>s.delete(id)),
 async terminate(id){return this.update(id,{status:'作废',progress:'已终止',todo:null})},
 async gases(ticketId){return (await run('gas','readonly',s=>s.getAll())).filter(g=>g.ticketId===ticketId)},
 async saveGas(payload){const g={...payload,id:crypto.randomUUID(),createdAt:new Date().toISOString()};await run('gas','readwrite',s=>s.put(g));return g},
 subscribe(fn){const on=()=>fn();channel?.addEventListener('message',on);window.addEventListener('operationchange',on);return()=>{channel?.removeEventListener('message',on);window.removeEventListener('operationchange',on)}}
};
