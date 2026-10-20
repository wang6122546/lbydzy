import {disclosureContent} from '../data/disclosure-content.js';
import {operationRepository as repo} from '../services/operation-repository.js';
import {operationURL as url} from '../config/operation.config.js';
import {esc,header,toast,preview,sign,readFile,confirmAction} from '../components/operation-ui.js';
const MAX_IMAGES=3;
const main=header('安全交底',url('safety'));
main.className='form-page';
const id=new URLSearchParams(location.search).get('id');
async function start(){
 const ticket=await repo.get(id);
 if(!ticket){main.innerHTML='<p class="error">作业票不存在，请返回列表</p>';return}
 let attachments=structuredClone(ticket.disclosureAttachments||[]);let images=structuredClone(ticket.disclosureImages||[]),signature=ticket.disclosureSignature||'',busy=false;
 let measures=structuredClone(ticket.disclosureMeasures??disclosureContent).map(m=>typeof m==='string'?m:m.content).filter(Boolean);
 function draw(){
  main.innerHTML=`<form novalidate><section class="form-section"><button type="button" class="outline disclosure-add" data-add>+ 新增交底内容</button>${measures.length?measures.map((m,i)=>`<article class="disclosure-measure"><p>${i+1}、${esc(m)}</p><button type="button" class="outline" data-edit="${i}">编辑</button> <button type="button" class="outline danger" data-delete="${i}">删除</button></article>`).join(''):'<p class="op-note">当前演示作业票暂无安全措施交底内容。</p>'}<div class="form-field"><span class="field-title">附件</span><label class="outline upload-button">上传文件<input type="file" ${busy?'disabled':''} multiple data-attachment aria-label="上传附件"></label><div class="file-list">${attachments.map((f,i)=>`<span class="file-chip"><button type="button" data-attachment-preview="${i}">${esc(f.name)}</button><button type="button" data-attachment-remove="${i}" aria-label="删除附件${i+1}">×</button></span>`).join('')}</div></div><div class="form-field review-highlight"><span class="field-title">照片</span><div class="image-grid">${images.map((f,i)=>`<div class="image-tile"><img src="${esc(f.src)}" alt="安全交底图片${i+1}" data-preview="${i}" tabindex="0" role="button"><button type="button" data-remove="${i}" aria-label="删除第${i+1}张图片">×</button></div>`).join('')}${images.length<MAX_IMAGES?'<label class="image-add"><b>＋</b>上传图片<input type="file" accept="image/*" multiple aria-label="上传安全交底图片"></label>':''}</div><p class="field-hint" role="status">最多上传3张图片，已上传 ${images.length}/3 张</p></div><div class="form-field"><span class="field-title"><em class="required">*</em>安全交底人签字</span><button type="button" class="signature">${signature?`<img src="${esc(signature)}" alt="安全交底人签字">`:'点击签字'}</button></div></section><footer class="form-footer"><a href="${url('safety')}">取消</a><button type="submit" class="primary" ${busy?'disabled':''}>提交</button></footer></form>`;
  const input=main.querySelector('input[accept="image/*"]');
  if(input)input.onchange=async()=>{
   if(busy)return;const files=Array.from(input.files);input.value='';
   if(images.length+files.length>MAX_IMAGES){toast('最多上传3张图片');return}
   if(files.some(f=>!f.type.startsWith('image/'))){toast('请选择图片文件');return}
   if(files.some(f=>f.size>20*1024*1024)){toast('本地演示图片请小于20MB');return}
   busy=true;input.disabled=true;main.querySelector('[type=submit]').disabled=true;
   try{const added=await Promise.all(files.map(readFile));images.push(...added)}catch(e){toast('图片读取失败，请重试')}finally{busy=false;draw()}
  };
  main.querySelector('[data-add]').onclick=()=>{const d=document.createElement('dialog');d.innerHTML='<label>交底内容<textarea aria-label="新增交底内容" rows="6" placeholder="请输入安全交底内容" style="width:100%"></textarea></label><div class="dialog-actions"><button type="button">取消</button><button type="button">确定</button></div>';const b=d.querySelectorAll('button');b[0].onclick=()=>d.remove();b[1].onclick=()=>{const v=d.querySelector('textarea').value.trim();if(!v){toast('请填写交底内容');return}measures.push(v);d.remove();draw()};document.body.append(d);d.showModal()};
  main.querySelector('[data-attachment]').onchange=async e=>{if(busy)return;const selected=Array.from(e.target.files);if(selected.some(f=>f.size>20*1024*1024)){toast('本地演示附件请小于20MB');return}busy=true;draw();try{attachments.push(...await Promise.all(selected.map(readFile)))}catch(e){toast('附件读取失败，请重试')}finally{busy=false;draw()}};
  main.querySelectorAll('[data-attachment-preview]').forEach(b=>b.onclick=()=>{const f=attachments[+b.dataset.attachmentPreview];if(f.type.startsWith('image/'))preview(f.src);else{const a=document.createElement('a');a.href=f.src;a.download=f.name;a.click()}});
  main.querySelectorAll('[data-attachment-remove]').forEach(b=>b.onclick=()=>{if(busy)return;attachments.splice(+b.dataset.attachmentRemove,1);draw()});
  main.querySelectorAll('[data-preview]').forEach(b=>{b.onclick=()=>preview(images[+b.dataset.preview].src);b.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();b.click()}}});
  main.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{if(busy)return;images.splice(+b.dataset.remove,1);draw()});
  main.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>{const i=+b.dataset.edit;const d=document.createElement('dialog');d.innerHTML='<label>交底内容<textarea aria-label="交底内容" rows="6" placeholder="请输入安全交底内容" style="width:100%"></textarea></label><div class="dialog-actions"><button type="button">取消</button><button type="button">保存</button></div>';d.querySelector('textarea').value=measures[i];const buttons=d.querySelectorAll('button');buttons[0].onclick=()=>d.remove();buttons[1].onclick=()=>{const value=d.querySelector('textarea').value.trim();if(!value){toast('请填写交底内容');return}measures[i]=value;d.remove();draw()};document.body.append(d);d.showModal()});
  main.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>confirmAction('确定删除这条本地交底内容？',()=>{measures.splice(+b.dataset.delete,1);draw()}));
  main.querySelector('.signature').onclick=()=>{if(!busy)sign(src=>{signature=src;draw()},'安全交底人签字')};
  main.querySelector('form').onsubmit=async e=>{e.preventDefault();if(busy)return;if(images.length>MAX_IMAGES){toast('最多上传3张图片');return}if(!signature){toast('请完成安全交底人签字');return}busy=true;draw();try{await repo.update(id,{disclosureAttachments:attachments,disclosureImages:images,disclosureSignature:signature,disclosureMeasures:measures,disclosureTime:new Date().toISOString(),progress:'接收交底',todo:'safety',action:'接收交底'});location.href=url('safety')}catch(e){toast('保存失败，请重试');busy=false;draw()}};
 }
 draw();
}
start().catch(e=>{console.error(e);main.innerHTML='<p class="error">数据加载失败，请刷新重试</p>'});
