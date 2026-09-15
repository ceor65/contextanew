const persons=['yo','tú','él / ella','nosotros/as','vosotros/as','ellos / ellas'];
const table=(forms,tense='Presente')=>({tense,forms:persons.map((person,i)=>[person,forms[i]])});

const irregular={
 ser:['soy','eres','es','somos','sois','son'],estar:['estoy','estás','está','estamos','estáis','están'],tener:['tengo','tienes','tiene','tenemos','tenéis','tienen'],ir:['voy','vas','va','vamos','vais','van'],
 querer:['quiero','quieres','quiere','queremos','queréis','quieren'],poder:['puedo','puedes','puede','podemos','podéis','pueden'],saber:['sé','sabes','sabe','sabemos','sabéis','saben'],hacer:['hago','haces','hace','hacemos','hacéis','hacen'],
 venir:['vengo','vienes','viene','venimos','venís','vienen'],decir:['digo','dices','dice','decimos','decís','dicen'],ver:['veo','ves','ve','vemos','veis','ven'],dar:['doy','das','da','damos','dais','dan'],
 poner:['pongo','pones','pone','ponemos','ponéis','ponen'],salir:['salgo','sales','sale','salimos','salís','salen'],traer:['traigo','traes','trae','traemos','traéis','traen'],dormir:['duermo','duermes','duerme','dormimos','dormís','duermen'],
 volver:['vuelvo','vuelves','vuelve','volvemos','volvéis','vuelven'],servir:['sirvo','sirves','sirve','servimos','servís','sirven'],caer:['caigo','caes','cae','caemos','caéis','caen'],soler:['suelo','sueles','suele','solemos','soléis','suelen'],empezar:['empiezo','empiezas','empieza','empezamos','empezáis','empiezan'],encontrar:['encuentro','encuentras','encuentra','encontramos','encontráis','encuentran'],
 preferir:['prefiero','prefieres','prefiere','preferimos','preferís','prefieren'],pedir:['pido','pides','pide','pedimos','pedís','piden'],jugar:['juego','juegas','juega','jugamos','jugáis','juegan'],costar:['cuesto','cuestas','cuesta','costamos','costáis','cuestan'],
 elegir:['elijo','eliges','elige','elegimos','elegís','eligen'],seguir:['sigo','sigues','sigue','seguimos','seguís','siguen'],recordar:['recuerdo','recuerdas','recuerda','recordamos','recordáis','recuerdan'],
 pensar:['pienso','piensas','piensa','pensamos','pensáis','piensan'],sentir:['siento','sientes','siente','sentimos','sentís','sienten'],leer:['leo','lees','lee','leemos','leéis','leen'],
 conocer:['conozco','conoces','conoce','conocemos','conocéis','conocen'],haber:['he','has','hay','hemos','habéis','han'],aparecer:['aparezco','apareces','aparece','aparecemos','aparecéis','aparecen'],repetir:['repito','repites','repite','repetimos','repetís','repiten'],continuar:['continúo','continúas','continúa','continuamos','continuáis','continúan'],parecer:['parezco','pareces','parece','parecemos','parecéis','parecen'],sonreír:['sonrío','sonríes','sonríe','sonreímos','sonreís','sonríen']
};

const reflexive={
 llamarse:['me llamo','te llamas','se llama','nos llamamos','os llamáis','se llaman'],
 despertarse:['me despierto','te despiertas','se despierta','nos despertamos','os despertáis','se despiertan'],
 levantarse:['me levanto','te levantas','se levanta','nos levantamos','os levantáis','se levantan'],
 ducharse:['me ducho','te duchas','se ducha','nos duchamos','os ducháis','se duchan'],
 ponerse:['me pongo','te pones','se pone','nos ponemos','os ponéis','se ponen'],
 vestirse:['me visto','te vistes','se viste','nos vestimos','os vestís','se visten']
};

const regularPresent=lemma=>{
 const ending=lemma.slice(-2),stem=lemma.slice(0,-2);
 if(ending==='ar')return [stem+'o',stem+'as',stem+'a',stem+'amos',stem+'áis',stem+'an'];
 if(ending==='er')return [stem+'o',stem+'es',stem+'e',stem+'emos',stem+'éis',stem+'en'];
 if(ending==='ir')return [stem+'o',stem+'es',stem+'e',stem+'imos',stem+'ís',stem+'en'];
 return null;
};
const regularPreterite=lemma=>{const ending=lemma.slice(-2),stem=lemma.slice(0,-2);if(ending==='ar')return [stem+'é',stem+'aste',stem+'ó',stem+'amos',stem+'asteis',stem+'aron'];if(ending==='er'||ending==='ir')return [stem+'í',stem+'iste',stem+'ió',stem+'imos',stem+'isteis',stem+'ieron'];return null};

export function spanishConjugation(lemma,tense='present'){
 const clean=lemma.toLowerCase();
 if(tense==='preterite'){const forms=regularPreterite(clean);return forms?table(forms,'Pretérito indefinido'):null}
 if(reflexive[clean])return table(reflexive[clean]);
 const forms=irregular[clean]||regularPresent(clean);return forms?table(forms):null;
}

const formToLemma={
 es:'ser',soy:'ser',somos:'ser',vive:'vivir',viven:'vivir',entrar:'entrar',dice:'decir',llamo:'llamarse',llama:'llamarse',responde:'responder',hablo:'hablar',entra:'entrar',saluda:'saludar',conoce:'conocer',hablan:'hablar',está:'estar',están:'estar',
 va:'ir',van:'ir',presenta:'presentar',tiene:'tener',tienen:'tener',vienen:'venir',tenemos:'tener',toman:'tomar',piensa:'pensar',
 despierta:'despertarse',levanta:'levantarse',ducha:'ducharse',desayuna:'desayunar',empiezan:'empezar',terminan:'terminar',estudia:'estudiar',vuelve:'volver',come:'comer',hace:'hacer',escucha:'escuchar',lee:'leer',cena:'cenar',prepara:'preparar',dormir:'dormir',duerme:'dormir',
 empieza:'empezar',encuentra:'encontrar',mira:'mirar',hay:'haber',pregunta:'preguntar',recuerda:'recordar',estudiaron:'estudiar',salen:'salir',cruzan:'cruzar',sonríe:'sonreír',
 quiere:'querer',pedir:'pedir',gusta:'gustar',prefiere:'preferir',comprar:'comprar',cuesta:'costar',pide:'pedir',pagan:'pagar',comen:'comer',queréis:'querer',quieren:'querer',deciden:'decidir',
 entrega:'entregar',entregar:'entregar',necesita:'necesitar',practicar:'practicar',prepararlo:'preparar',hacemos:'hacer',pueden:'poder',quedar:'quedar',estudiar:'estudiar',descansar:'descansar',recordar:'recordar',escribe:'escribir',parece:'parecer',
 encontrar:'encontrar',juega:'jugar',sabe:'saber',nadar:'nadar',puede:'poder',escuchar:'escuchar',tocar:'tocar',cantar:'cantar',visitan:'visitar',dibujar:'dibujar',aprenden:'aprender',bailar:'bailar',ven:'ver',elige:'elegir',montar:'montar',
 llevar:'llevar',lleva:'llevar',miran:'mirar',salir:'salir',aparecen:'aparecer',pone:'ponerse',presta:'prestar',cambian:'cambiar',preparan:'preparar',aprende:'aprender',cambiar:'cambiar',
 camina:'caminar',enseña:'enseñar',busca:'buscar',explica:'explicar',sigue:'seguir',gira:'girar',cruzar:'cruzar',pasan:'pasar',gires:'girar',continúa:'continuar',llegar:'llegar',repite:'repetir',da:'dar',señala:'señalar',llega:'llegar',
 hacen:'hacer',visitar:'visitar',venir:'venir',invitar:'invitar',viajar:'viajar',traer:'traer',ver:'ver',jugar:'jugar',descubre:'descubrir',voy:'ir',pasar:'pasar',escribe:'escribir',
 deben:'deber',caminar:'caminar',señala:'señalar',responde:'responder',continúa:'continuar',puede:'poder',termina:'terminar',recomienda:'recomendar',elige:'elegir',sirven:'servir',mete:'meter',gustan:'gustar',combinan:'combinar',suele:'soler',vestirse:'vestirse',trabajar:'trabajar',ayuda:'ayudar',decide:'decidir',prepara:'preparar',coloca:'colocar',toca:'tocar',queda:'quedar',terminan:'terminar',trae:'traer',pone:'poner',necesitan:'necesitar',cae:'caer',llega:'llegar',florecer:'florecer',observa:'observar',prefiere:'preferir',entrenar:'entrenar',participar:'participar',eligen:'elegir',espera:'esperar',conseguirlo:'conseguir'
};

const infinitivePattern=/(ar|er|ir|arse|erse|irse)$/i;
export function getSpanishVerbData(surface){
 const word=surface.toLowerCase();let lemma=formToLemma[word]||(infinitivePattern.test(word)?word:null),tense=word==='estudiaron'?'preterite':'present';if(!lemma)return null;
 const conjugation=spanishConjugation(lemma,tense);if(!conjugation)return null;
 const matched=conjugation.forms.find(([_,form])=>form.toLowerCase().split(' ').includes(word)||form.toLowerCase()===word);
 const form=infinitivePattern.test(word)?'infinitivo':matched?`${conjugation.tense.toLowerCase()} · ${matched[0]}`:`${conjugation.tense.toLowerCase()} · forma con pronombre`;
 return {lemma,form,conjugation,explanation:infinitivePattern.test(word)?`“${surface}” is the infinitive of “${lemma}”. The infinitive is used after a conjugated verb or as the dictionary form.`:`“${surface}” is a form of “${lemma}” used in this sentence. The table shows the complete ${conjugation.tense.toLowerCase()} conjugation, including vosotros/as used in Spain.`};
}
