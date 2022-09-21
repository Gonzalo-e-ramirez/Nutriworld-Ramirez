const products = [
{ id:1,
  name:"proteina",
  description: "Proteina de sabor vainilla",
  cost:2000,
  image: "https://farmavip.com.ar/wp-content/uploads/2019/12/7792981025013.jpg",
  stock: 10,
  categoryId:1
},
{ id:2,
    name:"Creatina",
    description: "Pote de 200Gr",
    cost:1200,
    image: "https://http2.mlstatic.com/D_NQ_NP_816014-MLA50404589504_062022-O.webp",
    stock: 15,
    categoryId:2
  },
  { id:3,
    name:"Aminoacidos",
    description: "Aminoacidos en polvo",
    cost:1000,
    image: "https://http2.mlstatic.com/D_NQ_NP_650875-MLA31908015304_082019-O.jpg",
    stock: 10,
    categoryId:3
  },
  { id:4,
    name:"Aminoacidos",
    description: "Aminoacidos en pastillas",
    cost:800,
    image: "https://farmacityar.vteximg.com.br/arquivos/ids/164112-1000-1000/154552_suplemento-dietario-muscle-max-a-base-de-aminoacidos-x-90-tabletas_imagen-1.jpg?v=636670330390370000",
    stock: 12,
    categoryId:3
  },
  { id:5,
    name:"Creatina",
    description: "Creatina Monogydrate",
    cost:1300,
    image: "https://desuplementos.com/wp-content/uploads/2021/08/creatina-gold.png",
    stock: 12,
    categoryId:2
  },
  { id:6,
    name:"proteina",
    description: "Proteina sabor chocolate",
    cost:1600,
    image: "https://farmacityar.vteximg.com.br/arquivos/ids/226263-600-600/203644_suplemento-dietario-ena-whey-protein-sabor-chocolate-x-930-g_imagen-1.jpg?v=637957502788970000",
    stock: 10,
    categoryId:1
  }
]

module.exports = {
    products,
  }