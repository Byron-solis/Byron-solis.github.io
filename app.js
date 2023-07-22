window.addEventListener('load',creacion)

//base es de 32 de ancho y 32 de profundidad.

//cordenadas de la ubicacion de las casas
/*const casas=[
    {x:-16,y:0,z:-10},
    {x:-16,y:0,z:-16},
    {x:-16,y:0,z:-30},
    {x:-16,y:0,z:-36},
    {x:-10,y:0,z:-10},
    {x:-10,y:0,z:-16},
    {x:-10,y:0,z:-30},
    {x:-10,y:0,z:-36},
    {x:4,y:0,z:-10},
    {x:4,y:0,z:-16},
    {x:4,y:0,z:-30},
    {x:4,y:0,z:-36},
    {x:10,y:0,z:-10},
    {x:10,y:0,z:-16},
    {x:10,y:0,z:-30},
    {x:10,y:0,z:-36},
    ]*/

//Casa Primer modelo.
const casa_m1=[
    {x:-16,y:1.8,z:-10},
    {x:-16,y:1.8,z:-36},
    {x:-10,y:1.8,z:-16},
    {x:-10,y:1.8,z:-30},
    {x:4,y:1.8,z:-10},
    {x:4,y:1.8,z:-36},
    {x:10,y:1.8,z:-16},
    {x:10,y:1.8,z:-30},
    ]

//Casa Segundo modelo.
const casa_m2=[
    {x:-18,y:1.8,z:-16},
    {x:-18,y:1.8,z:-30},
    {x:-12,y:1.8,z:-10},
    {x:-12,y:1.8,z:-36},
    {x:6,y:1.8,z:-16},
    {x:6,y:1.8,z:-30},
    {x:12,y:1.8,z:-10},
    {x:12,y:1.8,z:-36},
    ]
const calle_v=[
    {x:-3,y:1.55,z:-14},
    {x:-3,y:1.55,z:-32},
    ]
const calle_h=[
    {x:-12,y:1.55,z:-23},
    {x:6,y:1.55,z:-23},
    ]
const cunetas_v=[
    {x:-6,y:1.56,z:-14},
    {x:-6,y:1.56,z:-32},
    {x:0,y:1.56,z:-14},
    {x:0,y:1.56,z:-32},
    ]
const cunetas_h=[
    {x:-13,y:1.56,z:-26},
    {x:-13,y:1.56,z:-20},
    {x:7,y:1.56,z:-26},
    {x:7,y:1.56,z:-20},
    ]
let casa1, casa2, base, base_t,  carretera, cuneta;
function creacion(){
    let vecindario = document.querySelector(".vecindario");
    
    base=document.createElement('a-entity');
    base.setAttribute('geometry' ,{primitive:'box', height:3, width:32, depth:32});
    base.setAttribute('material', {src:'#pasto'})
    base.setAttribute('position', '-3 0 -23');
    vecindario.appendChild(base);
    
    base_t=document.createElement('a-entity');
    base_t.setAttribute('geometry' ,{primitive:'box', height:3, width:32, depth:32});
    base_t.setAttribute('material', {src:'#tierra'})
    base_t.setAttribute('position', '-3 -3 -23');
    vecindario.appendChild(base_t);
    
    centro_calle=document.createElement('a-entity');
    centro_calle.setAttribute('geometry', {primitive:'box', height:0.1, width:4, depth:4});
    centro_calle.setAttribute('material',{src:'#centro'});
    centro_calle.setAttribute('position', '-3 1.55 -23');
    vecindario.appendChild(centro_calle);
    
    calle_v.forEach(pos=>{
        carretera=document.createElement('a-entity');
        carretera.setAttribute('geometry', {primitive:'box', height:0.1, width:4, depth:14});
        carretera.setAttribute('material',{src:'#asfalto'});
        carretera.object3D.position.set(pos.x, pos.y, pos.z);
        vecindario.appendChild(carretera);
    });
    
    calle_h.forEach(pos=>{
        carretera=document.createElement('a-entity');
        carretera.setAttribute('geometry', {primitive:'box', height:0.1, width:4, depth:14});
        carretera.setAttribute('material',{src:'#asfalto'});
        carretera.setAttribute('rotation', '0 90 0');
        carretera.object3D.position.set(pos.x, pos.y, pos.z);
        vecindario.appendChild(carretera);
    });
    
    cunetas_v.forEach(pos=>{
        cuneta=document.createElement('a-entity');
        cuneta.setAttribute('geometry',{primitive:'box', height:0.2, width:2, depth:14});
        cuneta.setAttribute('material',{src:'#cuneta'});
        cuneta.object3D.position.set(pos.x, pos.y, pos.z);
        vecindario.appendChild(cuneta);
         });
    
    cunetas_h.forEach(pos=>{
        cuneta=document.createElement('a-entity');
        cuneta.setAttribute('geometry',{primitive:'box', height:0.2, width:2, depth:12});
        cuneta.setAttribute('material',{src:'#cuneta'});
        cuneta.setAttribute('rotation', '0 90 0')
        cuneta.object3D.position.set(pos.x, pos.y, pos.z);
        vecindario.appendChild(cuneta);
         });
         
        casa_m1.forEach(pos=>{
            casa1=document.createElement('a-entity');
            casa1.setAttribute('obj-model','obj:house_10.obj', 'mtl: house_10.mtl');
            casa1.setAttribute('scale',{x:0.8, y:0.8, z:0.8})
            casa1.object3D.position.set(pos.x, pos.y, pos.z);
            //casa.object3D.rotation.set(45*Math.PI/180,0,0);
            vecindario.appendChild(casa1);
        });
        
        casa_m2.forEach(pos=>{
            casa2=document.createElement('a-entity');
            casa2.setAttribute('obj-model','obj: Bambo_House.obj','mtl: Bambo_House.mtl');
            casa2.setAttribute('scale',{x:0.5, y:0.5, z:0.5})
            casa2.object3D.position.set(pos.x, pos.y, pos.z);
            vecindario.appendChild(casa2);
        });
}