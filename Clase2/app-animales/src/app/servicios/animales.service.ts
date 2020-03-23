import { Injectable } from '@angular/core';

@Injectable()
export class AnimalesService {

private animales:Animal[] =
[
  {
    nombre: "Elefante",
    bio: "Mamífero paquidermo de gran tamaño, el mayor de los terrestres, con la piel de color gris oscuro, gruesa, rugosa y sin pelo, grandes orejas colgantes, larga trompa prensil, cuatro extremidades gruesas y casi cilíndricas, cola larga, y dos colmillos muy largos de punta cónica; se alimenta de vegetales, y vive en diversos hábitats de Asia y África.",
    img: "assets/img/elefante.jpg",
    aparicion: "1941-11-01",
    habitat:"Terrestre"
  },
  {
    nombre: "Jirafa",
    bio: "Mamífero rumiante de unos 5 m de alto, pelaje amarillento repleto de manchas leonadas, cuello muy largo y esbelto, crin corta, cabeza pequeña, cuernos cortos cubiertos por la piel, hocico alargado, patas delgadas (más bajas las traseras) y cola larga; es veloz y resistente, y habita en la sabana africana, formando manadas.",
    img: "assets/img/jirafa.jpg",
    aparicion: "1939-05-01",
    habitat:"Terrestre"
  },
  {
    nombre: "León",
    bio: "Mamífero felino de 250 a 350 cm de longitud (cola incluida), pelaje pardo claro, cabeza grande, cola larga terminada en un mechón y uñas fuertes que usa para cazar; el macho es mayor que la hembra y tiene una larga melena que le cubre la nuca y el cuello; es carnívoro y habita en manada en desiertos y estepas de África y la India.",
    img: "assets/img/leon.jpg",
    aparicion: "1964-01-01",
    habitat: "Terrestre"
  },
  {
    nombre: "Hipopotamo",
    bio: "Mamífero paquidermo de unos 4 m de longitud, cuerpo muy voluminoso, piel gruesa negruzca y casi sin pelo, patas gruesas y cortas, cabeza con boca enorme y orejas pequeñas; nada bien, se alimenta de vegetales y vive en pequeños grupos en los grandes ríos y lagos africanos.",
    img: "assets/img/hipopotamo.jpg",
    aparicion: "1962-05-01",
    habitat:"Terrestre"
  },
  {
    nombre: "Rinoceronte",
    bio: "Mamífero paquidermo de hasta 5 metros de longitud, muy corpulento, de piel desnuda muy gruesa y rígida de color gris o castaño; tiene patas cortas y robustas con tres dedos, cabeza alargada, cola corta y uno o dos grandes cuernos curvados en la línea media de la nariz; es nocturno y solitario, y vive en Asia y África.",
    img: "assets/img/rinoceronte.jpg",
    aparicion: "1940-06-01",
    habitat: "Terrestre"
  },
  {
    nombre: "Cocodrilo",
    bio: "Crocodylidae es una familia de saurópsidos arcosaurios comúnmente conocidos como cocodrilos. Incluye a catorce especies actuales.​ Se trata de grandes reptiles semiacuáticos que viven en las regiones tropicales de África, Asia, América y Australia.",
    img: "assets/img/cocodrilo.jpg",
    aparicion: "1962-08-01",
    habitat: "Acuático"
  },
  {
    nombre: "Mamba Negra",
    bio: "La mamba negra (Dendroaspis polylepis) es una especie de serpiente de la familia Elapidae extremadamente venenosa que habita en diversas zonas del África subsahariana. Descrita formalmente por Albert Günther en 1864, es la segunda serpiente venenosa de mayor tamaño, después de la cobra real; aunque hay informes de ejemplares de algo más de cuatro metros, los adultos normalmente miden entre dos y tres metros. El color de su piel varía de gris a marrón oscuro; los ejemplares jóvenes tienden a ser más pálidos que los adultos y se oscurecen con la edad.",
    img: "assets/img/mamba negra.jpg",
    aparicion: "1974-11-01",
    habitat: "Terrestre"
  },
  {
    nombre: "Oso Panda",
    bio: "El panda, oso panda o panda gigante (Ailuropoda melanoleuca) es una especie de mamífero del orden de los carnívoros y aunque hay una gran controversia al respecto, los últimos estudios de su ADN lo engloban entre los miembros de la familia de los osos (Ursidae), siendo el oso de anteojos su pariente más cercano, si bien este pertenece a la subfamilia de los tremarctinos.",
    img: "assets/img/oso panda.jpg",
    aparicion: "1974-11-01",
    habitat: "Terrestre"
  },
  {
    nombre: "Tiburón Blanco",
    bio: "El tiburón blanco es una especie de pez cartilaginoso lamniforme de la familia Lamnidae. Vive en las aguas cálidas y templadas de casi todos los océanos. Esta especie es la única del género Carcharodon que sobrevive en la actualidad. A nivel mundial se considera Vulnerable y en México se considera Amenazada.",
    img: "assets/img/tiburon blanco.jpg",
    aparicion: "1974-11-01",
    habitat: "Acuático"
  }
];

  constructor() {
    console.log("El servicio ya se puede utilizar!!");
   }

   getAnimales(){
     return this.animales;
   }

   getAnimal(idx:string){
     return this.animales[idx];
   }

   buscarAnimales( termino:string ):Animal[]{

    let animalesArr:Animal[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.animales.length; i ++ ){

      let animal = this.animales[i];

      let nombre = animal.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        animal.idx = i;
        animalesArr.push( animal )
      }

    }

    return animalesArr;
  }

}

export interface Animal{
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  habitat:string;
  idx?: number;
}
