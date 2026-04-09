use("optics");
db.createCollection("client_orders", {
  validator:
  {
    $jsonSchema: {
      title: 'Client',
      bsonType: 'object',
      required: [
        'address',
        'telephone',
        'email',
        'register_date'
      ],
      properties: {
        _id: {
          bsonType: 'objectId',
          description: 'Shop id'
        },
        address: {
          bsonType: 'string',
          description: 'The address'
        },
        telephone: {
          bsonType: 'string',
          description: 'The telephone'
        },
        email:{
          bsonType: 'string',
          description: 'The email'
        },
        register_date: {
          bsonType: 'date',
          description: 'Register date'
        },
        lastshoppings: {
          bsonType: 'array',
          items: {
            title: 'shop',
            bsonType: 'object',
            properties: {
              brand: {
                bsonType: 'string',
                description:'The brand'
              },
              graduationl: {
                bsonType: 'decimal',
                description:'Graduation of left lens'
              },
              graduationr: {
                bsonType: 'decimal',
                description:'Graduation of right lens'
              },
              glasscolorl: {
                bsonType: 'string',
                description:'Color of left lens'
              },
              glasscolorr: {
                bsonType: 'string',
                description:'Color of right lens'
              },
              frametype: {
                bsonType: 'string',
                enum:["plastic","metallic"],
                description:'Frame type'
              },
              price: {
                bsonType: 'decimal',
                description:'The price'
              }
            }
          }
        }
      }
    }
  }
});

db.client_orders.insertOne({
    address: "Right Street,123",
    telephone: "678921235",
    email: "email@email.com",
    register_date:new ISODate("2023-09-23"),
    lastshoppings:[{
        brand:"Rayban",
        graduationl:NumberDecimal("1.5"),
        graduationr:NumberDecimal("1.6"),
        glasscolorl:"red",
        glasscolorr:"blue",
        frametype:"metallic",
        price: NumberDecimal("100")
    }],
});

db.createCollection("glasses", {
  validator:
  {
    $jsonSchema: {
      title: 'Glass',
      bsonType: 'object',
      required: [
        'brand',
        'frame',
        'provider',
        'price'
      ],
      properties: {
        _id: {
          bsonType: 'objectId',
          description: 'Shop id'
        },
        brand: {
          bsonType: 'string',
          description: 'The brand'
        },
        frame: {
          bsonType: "string",
          enum:["plastic","metallic"],
          description: 'Type of frame'
        },
        provider: {
          bsonType: 'string',
          description: 'The provider'
        },
        price: {
          bsonType: 'decimal',
          description: 'The price'
        },
        bougthby: {
          bsonType: 'array',
          items: {
            title: 'client',
            bsonType: 'object',
            required:[
            'name'
            ],
            properties: {
              name: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  }
});

db.glasses.insertOne({
    brand: "Rayban",
    frame: "metallic",
    provider: "Googles Associated SL",
    price:NumberDecimal("105.75"),
    bougthby:[{
        name:"Client 1",
    },
    {
        name:"Client 2"
    },
    {
        name:"Client 3"
    }]
});

use("online_food");

db.createCollection("online_food_orders", {
  validator:
  {
    $jsonSchema: {
      title: 'Client',
      bsonType: 'object',
      required: [
        'name',
        'surnames',
        'address',
        'postalcode',
        'city',
        'province',
        'phone',
        'shopID'
      ],
      properties: {
        _id: {
          bsonType: 'objectId',
          description: 'Shop id'
        },
        shopID:{
          bsonType: 'objectId',
          description: 'ID de la tienda'
        },
        name: {
          bsonType: 'string',
          description: 'Client name'
        },
        surnames: {
          bsonType: 'string',
          description: 'Client surnames'
        },
        address: {
          bsonType: 'string',
          description: 'Client address'
        },
        postalcode:{
          bsonType: 'string',
          description: 'Client postal code'
        },
        city: {
          bsonType: 'string',
          description: 'Client city'
        },
        province: {
          bsonType: 'string',
          description: 'Client province'
        },
        phone: {
          bsonType: 'string',
          description: 'Client phone'
        },
        orders: {
          bsonType: 'array',
          items: {
            title: 'order',
            bsonType: 'object',
            required:[
            'date',
            'delivered',
            'totalpizzas',
            'totalburgers',
            'totaldrinks',
            'totalprice'
            ],
            properties: {
              id: {
                bsonType: 'objectId',
                description: 'Id of order'
              },
              date:{
                bsonType: 'date',
                description: 'Date and time of order'
              },
              delivered:{
                bsonType: 'bool',
                description: 'Is delivered'
              },
              deliveredby:{
                bsonType: ['objectId','null'],
                description:'person that delivered the order'
              },
              delivereddate:{
                bsonType: 'date',
                description: 'Delivered date'
              },
              totalpizzas:{
                bsonType: 'int',
                description: 'Total pizzas'
              },
              totalburgers:{
                bsonType:'int',
                description: 'Total burgers'
              },
              totaldrinks:{
                bsonType:'int',
                description: ' Total drinks'
              },
              totalprice:{
                bsonType:'decimal',
                description: ' Total price'
              },
              products:{
                bsonType: 'array',
                items: {
                  title: 'order',
                  bsonType: 'object',
                  required:[
                    'productType',
                    'name',
                    'description',
                    'image',
                    'price'
                  ],
                  properties:{
                    id: {
                      bsonType: 'objectId',
                      description: 'Product id'
                    },
                    productType:{
                      bsonType:'string',
                      enum:["pizza","burger","drink"],
                      description:'The product type'
                    },
                    name:{
                      bsonType:'string',
                      description:'The product name'
                    },
                    description:{
                      bsonType:'string',
                      description:'The description of product'
                    },
                    image:{
                      bsonType:'string',
                      description:'Image of the product'
                    },
                    price:{
                      bsonType:'decimal',
                      description:'The price of product'
                    },
                    quantity:{
                      bsonType:'int',
                      description:'Quantity of products'
                    },
                    pizzacategory:{
                      bsonType:'string',
                      enum:["hawaiana","italiana"],
                      description:'The pizza category'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

db.createCollection("shops", {
  validator:
  {
    $jsonSchema: {
      title: 'shop',
      bsonType: 'object',
      required: [
        'address',
        'postalcode',
        'city',
        'province'
      ],
      properties: {
        _id: {
          bsonType: 'objectId',
          description: 'Shop id'
        },
        address:{
          bsonType: 'string',
          description: 'Shop Address'
        },
        postalcode: {
          bsonType: "string",
          description: 'Shop postal code'
        },
        city: {
          bsonType: 'string',
          description: 'Shop city'
        },
        province: {
          bsonType: 'string',
          description: 'Shop province'
        },
        workers: {
          bsonType: 'array',
          items: {
            title: 'worker',
            bsonType: 'object',
            required:[
            'name',
            'surnames',
            'nif',
            'phone',
            'deliverathome'
            ],
            properties: {
              _id:{
                bsonType: 'objectId',
                description: 'Id of worker'
              },
              name: {
                bsonType: 'string',
                description:'worker name'
              },
              surnames: {
                bsonType: 'string',
                description:'worker surnames'
              },
              nif: {
                bsonType: 'string',
                description:'worker nif'
              },
              phone: {
                bsonType: 'string',
                description:'worker phone'
              },
              deliverathome: {
                bsonType: 'bool',
                description:'worker deliver at home'
              }
            }
          }
        }
      }
    }
  }
});

db.shops.insertOne({
  address: "Calle de la calle 20",
  postalcode: "09999",
  city: "Barcelona",
  province: "Catalunya",
  workers: [
    {
      name:"Jordi",
      surnames:"Garcia Garcia",
      nif:"55555555D",
      phone:"6767676",
      deliverathome: false
    },
    {
      name:"Pedro",
      surnames:"Reyes Costa",
      nif:"44567645E",
      phone:"4456787",
      deliverathome: true
    }
  ]
});

db.online_food_orders.insertOne({
  name:"Juan",
  surnames:"Garcia Garcia",
  address:"Calle principal 30",
  postalcode:"09999",
  city:"Barcelona",
  province:"Barcelona",
  phone:"944484944",
  shopID: db.shops.findOne({address:"Calle de la calle 20"})._id,
  orders:[{
    date: new ISODate("2026-01-01T20:00:00Z"),
    delivered:true,
    deliveredby:db.shops.findOne({address:"Calle de la calle 20"}).workers[0]._id,
    delivereddate: new ISODate("2026-01-01T20:30:00Z"),
    totalpizzas:1,
    totalburgers:0,
    totaldrinks:1,
    totalprice: NumberDecimal("14.00"),
    products:[
      {
        productType:"pizza",
        name:"Especial",
        description:"Piña",
        image:"especial.png",
        price:NumberDecimal("12.00"),
        pizzacategory:"hawaiana",
        quantity:1
      },
      {
        productType:"drink",
        name:"Aquarius",
        description:"Lata 33cl",
        image:"aquarius.png",
        price:NumberDecimal("2.00"),
        quantity:1
      }
    ]
  },
  {
    date: new ISODate("2026-02-01T20:00:00Z"),
    delivered:false,
    totalpizzas:0,
    totalburgers:1,
    totaldrinks:1,
    totalprice: NumberDecimal("14.00"),
    products:[
      {
        productType:"burger",
        name:"Doble cheeseburger",
        description:"Doble hamburguesa",
        image:"doble.png",
        price:NumberDecimal("12.00"),
        quantity:1
      },
      {
        productType:"drink",
        name:"Aquarius",
        description:"Lata 33cl",
        image:"aquarius.png",
        price:NumberDecimal("2.00"),
        quantity:1
      }
    ]
  }
  ]
});

use("youtube");

db.createCollection("users",{
  validator:{
    $jsonSchema:{
      title:'user',
      bsonType:'object',
      required:[
        'email',
        'password',
        'username',
        'birthDate',
        'sex',
        'country',
        'postalCode',
        'createdAt',
        'subscriptions'
      ],
      properties: {
        _id:{
          bsonType: "objectId"
        },
        email:{
          bsonType: "string",
          description: "Email"
        },
        password:{
          bsonType: "string"
        },
        username:{
          bsonType:"string"
        },
        birthDate: {
          bsonType:"date"
        },
        sex:{
          bsonType: "string",
          enum:["male","female"]
        },
        country: {
          bsonType:"string"
        },
        postalCode: {
          bsonType:"string"
        },
        createdAt: {
          bsonType:"date"
        },
        subscriptions:{
          bsonType:"array",
          items:{
            bsonType:"object",
            required:['channelId','createdAt'],
            properties:{
              channelId:{
                bsonType:"objectId"
              },
              createdAt:{
                bsonType:"date"
              }
            }
          }
        }
      }
    }
  }
});

db.createCollection("channels", {
  validator:{
    $jsonSchema:{
      bsonType:"object",
      additionalProperties: false,
      required:[
        "ownerUserId",
        "name",
        "description",
        "createdAt"
      ],
      properties:{
        _id:{
          bsonType:"objectId"
        },
        ownerUserId:{
          bsonType:"objectId"
        },
        name:{
          bsonType:"string"
        },
        description:{
          bsonType:"string"
        },
        createdAt:{
          bsonType:"date"
        }
      }
    }
  }
});

db.createCollection("videos",{
  validator:{
    $jsonSchema:{
      bsonType:"object",
      required:[
        "title",
        "description",
        "sizeBytes",
        "fileName",
        "durationSeconds",
        "thumbnail",
        "viewsCount",
        "likesCount",
        "dislikesCount",
        "status",
        "tags",
        "publishedByUserId",
        "channelId",
        "publishedAt",
        "comments"
      ],
      properties:{
        _id:{
          bsonType:"objectId"
        },
        title:{
          bsonType:"string"
        },
        description:{
          bsonType:"string"
        },
        sizeBytes:{
          bsonType:["int","long"],
          minimum:0
        },
        fileName:{
          bsonType:"string"
        },
        durationSeconds:{
          bsonType: ["int","long"],
          minimum: 0
        },
        thumbnail:{
          bsonType:"string"
        },
        viewsCount:{
          bsonType: ["int","long"],
          minimum:0
        },
        likesCount:{
          bsonType: ["int","long"],
          minimum:0
        },
        dislikesCount:{
          bsonType: ["int","long"],
          minimum:0
        },
        status:{
          enum: ["public","hidden","private"]
        },
        tags:{
          bsonType:"array",
          uniqueItems:true,
          items:{
            bsonType:"string"
          }
        },
        publishedByUserId:{
          bsonType:"objectId"
        },
        channelId:{
          bsonType:"objectId"
        },
        publishedAt:{
          bsonType:"date"
        },
        comments:{
          bsonType:"array",
          items:{
            bsonType:"object",
            required:[
              "userId",
              "text",
              "createdAt"
            ],
            properties:{
              _id:{
                bsonType:"objectId"
              },
              userId:{
                bsonType:"objectId"
              },
              text:{
                bsonType:"string",
                minLength:1,
                maxLength:5000
              },
              createdAt:{
                bsonType:"date"
              }
            }
          }
        }
      }
    }
  },
});

db.createCollection("playlists",{
  validator:{
    $jsonSchema:{
      bsonType:"object",
      required:[
        "ownerUserId",
        "name",
        "createdAt",
        "status",
        "videoIds"
      ],
      properties:{
        _id:{
          bsonType:"objectId"
        },
        ownerUserId:{
          bsonType:"objectId"
        },
        name:{
          bsonType:"string",
          minLength:1,
          maxLength:150
        },
        createdAt:{
          bsonType:"date"
        },
        status:{
          enum:["public","private"]
        },
        videoIds:{
          bsonType:"array",
          uniqueItems:true,
          items:{
            bsonType:"objectId"
          }
        }
      }
    }
  },
});

db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ username: 1 }, { unique: true })

db.channels.createIndex({ ownerUserId: 1 }, { unique: true })

db.videos.createIndex({ publishedByUserId: 1 })
db.videos.createIndex({ channelId: 1 })
db.videos.createIndex({ status: 1, publishedAt: -1 })
db.videos.createIndex({ tags: 1 })

db.playlists.createIndex({ ownerUserId: 1 })
db.playlists.createIndex({ status: 1 })

const user1 = db.users.insertOne({
  email: "alex@mail.com",
  password: "alex1234",
  username: "alexdev",
  birthDate: ISODate("1998-06-12T00:00:00Z"),
                                 sex: "male",
                                 country: "Spain",
                                 postalCode: "08921",
                                 createdAt: ISODate("2026-04-01T09:00:00Z"),
                                 subscriptions: []
});

const user2 = db.users.insertOne({
  email: "maria@mail.com",
  password: "maria1234",
  username: "maria_play",
  birthDate: ISODate("2000-02-18T00:00:00Z"),
                                 sex: "female",
                                 country: "Spain",
                                 postalCode: "08001",
                                 createdAt: ISODate("2026-04-01T09:30:00Z"),
                                 subscriptions: []
});

const user3 = db.users.insertOne({
  email: "sergi@mail.com",
  password: "sergi1234",
  username: "sergi86",
  birthDate: ISODate("1996-11-03T00:00:00Z"),
                                 sex: "male",
                                 country: "Spain",
                                 postalCode: "17001",
                                 createdAt: ISODate("2026-04-01T10:00:00Z"),
                                 subscriptions: []
});

const user4 = db.users.insertOne({
  email: "laura@mail.com",
  password: "laura1234",
  username: "laurita",
  birthDate: ISODate("2001-09-27T00:00:00Z"),
                                 sex: "female",
                                 country: "Spain",
                                 postalCode: "46001",
                                 createdAt: ISODate("2026-04-01T10:30:00Z"),
                                 subscriptions: []
});

const channel1 = db.channels.insertOne({
  ownerUserId: user1.insertedId,
  name: "Alex Coding Channel",
  description: "Canal sobre PHP, MongoDB i desenvolupament web.",
  createdAt: ISODate("2026-04-01T11:00:00Z")
});

const channel2 = db.channels.insertOne({
  ownerUserId: user2.insertedId,
  name: "Maria Plays",
  description: "Gameplays i directes curts.",
  createdAt: ISODate("2026-04-01T11:15:00Z")
});

const channel3 = db.channels.insertOne({
  ownerUserId: user3.insertedId,
  name: "Sergi Tech",
  description: "Tutorials tècnics i reviews.",
  createdAt: ISODate("2026-04-01T11:30:00Z")
});

db.users.updateOne(
  { _id: user1.insertedId },
  {
    $set: {
      subscriptions: [
        {
          channelId: channel2.insertedId,
          createdAt: ISODate("2026-04-01T12:00:00Z")
        },
        {
          channelId: channel3.insertedId,
          createdAt: ISODate("2026-04-01T12:10:00Z")
        }
      ]
    }
  }
);

db.users.updateOne(
  { _id: user2.insertedId },
  {
    $set: {
      subscriptions: [
        {
          channelId: channel1.insertedId,
          createdAt: ISODate("2026-04-01T12:20:00Z")
        }
      ]
    }
  }
);

db.users.updateOne(
  { _id: user3.insertedId },
  {
    $set: {
      subscriptions: [
        {
          channelId: channel1.insertedId,
          createdAt: ISODate("2026-04-01T12:30:00Z")
        },
        {
          channelId: channel2.insertedId,
          createdAt: ISODate("2026-04-01T12:40:00Z")
        }
      ]
    }
  }
);

const video1 = db.videos.insertOne({
  title:"Introducció a MongoDB",
  description:"Vídeo bàsic sobre col·leccions, documents i consultes.",
  sizeBytes:NumberLong(15430000),
                                   fileName:"mongodb_intro.mp4",
                                   durationSeconds:320,
                                   thumbnail:"thumb_mongodb_intro.jpg",
                                   viewsCount:250,
                                   likesCount:18,
                                   dislikesCount:2,
                                   status:"public",
                                   tags:["mongodb", "database", "backend"],
                                   publishedByUserId: user1.insertedId,
                                   channelId:channel1.insertedId,
                                   publishedAt:ISODate("2026-04-02T10:20:00Z"),
                                   comments:[
                                     {
                                       userId:user2.insertedId,
                                       text:"Molt bon vídeo!",
                                       createdAt:ISODate("2026-04-02T10:30:00Z")
                                     },
                                     {
                                       userId:user3.insertedId,
                                       text:"M'ha anat bé per repassar.",
                                       createdAt:ISODate("2026-04-02T10:40:00Z")
                                     }
                                   ]
});

const video2 = db.videos.insertOne({
  title:"PHP i MongoDB CRUD",
  description:"Exemple senzill de CRUD amb PHP i MongoDB.",
  sizeBytes:NumberLong(21200000),
                                   fileName:"php_mongodb_crud.mp4",
                                   durationSeconds:540,
                                   thumbnail:"thumb_php_crud.jpg",
                                   viewsCount:430,
                                   likesCount:35,
                                   dislikesCount:4,
                                   status:"public",
                                   tags:["php","mongodb","crud"],
                                   publishedByUserId:user1.insertedId,
                                   channelId:channel1.insertedId,
                                   publishedAt:ISODate("2026-04-02T11:00:00Z"),
                                   comments:[
                                     {
                                       userId:user4.insertedId,
                                       text:"Explicació molt clara.",
                                       createdAt:ISODate("2026-04-02T11:10:00Z")
                                     }
                                   ]
});

const video3 = db.videos.insertOne({
  title:"Gameplay Retro Racing",
  description:"Partida ràpida a un joc de cotxes retro.",
  sizeBytes:NumberLong(30750000),
                                   fileName:"retro_racing.mp4",
                                   durationSeconds:600,
                                   thumbnail:"thumb_retro_racing.jpg",
                                   viewsCount:1200,
                                   likesCount:80,
                                   dislikesCount:6,
                                   status:"hidden",
                                   tags:["gaming", "retro", "racing"],
                                   publishedByUserId:user2.insertedId,
                                   channelId:channel2.insertedId,
                                   publishedAt:ISODate("2026-04-02T09:00:00Z"),
                                   comments:[
                                     {
                                       userId:user1.insertedId,
                                       text:"Molt top aquest gameplay.",
                                       createdAt:ISODate("2026-04-02T09:20:00Z")
                                     },
                                     {
                                       userId:user3.insertedId,
                                       text:"Quin joc és?",
                                       createdAt:ISODate("2026-04-02T09:35:00Z")
                                     }
                                   ]
});

const video4 = db.videos.insertOne({
  title:"Review d'eines per developers",
  description:"Repàs ràpid d'eines útils per programar.",
  sizeBytes:NumberLong(18900000),
                                   fileName:"dev_tools_review.mp4",
                                   durationSeconds:410,
                                   thumbnail:"thumb_dev_tools.jpg",
                                   viewsCount:560,
                                   likesCount:42,
                                   dislikesCount:1,
                                   status:"private",
                                   tags:["tools", "developer", "productivity"],
                                   publishedByUserId:user3.insertedId,
                                   channelId:channel3.insertedId,
                                   publishedAt:ISODate("2026-04-02T08:30:00Z"),
                                   comments:[]
});

db.playlists.insertMany([
  {
    ownerUserId:user2.insertedId,
    name:"Aprendre MongoDB",
    createdAt:ISODate("2026-04-02T12:00:00Z"),
                        status:"public",
                        videoIds:[
                          video1.insertedId,
                          video2.insertedId
                        ]
  },
  {
    ownerUserId:user1.insertedId,
    name: "Vídeos preferits",
    createdAt:ISODate("2026-04-02T12:10:00Z"),
                        status:"private",
                        videoIds:[
                          video3.insertedId,
                          video4.insertedId
                        ]
  },
  {
    ownerUserId:user4.insertedId,
    name:"Tutorials web",
    createdAt:ISODate("2026-04-02T12:20:00Z"),
                        status:"public",
                        videoIds:[
                          video2.insertedId,
                          video4.insertedId
                        ]
  }
]);
