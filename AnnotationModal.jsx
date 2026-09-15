import React, { useEffect, useState } from 'react';
import { Check, StickyNote, Trash2, X } from 'lucide-react';

const colors=[
 {id:'yellow',label:'Yellow',dot:'bg-amber-300',surface:'bg-amber-50'},
 {id:'blue',label:'Blue',dot:'bg-blue-400',surface:'bg-blue-50'},
 {id:'green',label:'Green',dot:'bg-emerald-400',surface:'bg-emerald-50'},
 {id:'pink',label:'Pink',dot:'bg-rose-400',surface:'bg-rose-50'}
];

export const annotationSurface=color=>colors.find(x=>x.id===color)?.surface||'bg-amber-50';

export default function AnnotationModal({draft,onClose,onSave,onDelete}){
 const [note,setNote]=useState(draft?.note||'');
 const [color,setColor]=useState(draft?.color||'yellow');
 useEffect(()=>{setNote(draft?.note||'');setColor(draft?.color||'yellow')},[draft]);
 if(!draft)return null;
 return <div className="fixed inset-0 z-[60] flex items-end justify-center bg-[#102A43]/55 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><div role="dialog" aria-modal="true" className="modal-enter w-full max-w-lg rounded-t-3xl bg-white shadow-soft sm:rounded-3xl"><div className="flex items-center justify-between border-b border-slate-200 p-5"><div className="flex items-center gap-2 font-black"><StickyNote size={19} className="text-brand"/>{draft.id?'Edit annotation':'Add annotation'}</div><button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full hover:bg-surface"><X size={19}/></button></div><div className="p-5 sm:p-6"><div className={`rounded-xl border-l-4 border-gold p-4 ${annotationSurface(color)}`}><div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Selected sentence</div><p className="mt-1 font-semibold leading-6">“{draft.quote}”</p></div><div className="mt-5"><div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Highlight color</div><div className="mt-2 flex flex-wrap gap-2">{colors.map(item=><button key={item.id} onClick={()=>setColor(item.id)} className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold ${color===item.id?'border-brand ring-2 ring-brand/20':'border-slate-200'}`}><span className={`h-3 w-3 rounded-full ${item.dot}`}/>{item.label}{color===item.id&&<Check size={13} className="text-brand"/>}</button>)}</div></div><label className="mt-5 block"><span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Your note</span><textarea autoFocus value={note} onChange={e=>setNote(e.target.value)} rows={5} maxLength={500} placeholder="Why is this sentence important? Add a meaning, grammar observation, or personal reminder…" className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 leading-6 outline-none focus:border-brand"/><span className="mt-1 block text-right text-xs text-slate-400">{note.length}/500</span></label><div className="mt-5 flex items-center justify-between">{draft.id?<button onClick={()=>onDelete(draft.id)} className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-rose-600 hover:bg-rose-50"><Trash2 size={17}/>Delete</button>:<span/>}<button onClick={()=>onSave({...draft,note:note.trim(),color})} className="btn-primary"><StickyNote size={17}/>Save annotation</button></div></div></div></div>
}
