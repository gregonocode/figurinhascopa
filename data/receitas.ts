export type Receita = {
  id: number;
  slug: string;
  title: string;
  time: string;
  image: string;
  description: string;
  sourceUrl: string;
};

export const receitas: Receita[] = [
  {
    "id": 1,
    "slug": "minissanduiche-no-pao-de-forma",
    "title": "Minissanduíche no pão de forma",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/minissanduiche-no-pao-de-forma-730x480.jpg.webp",
    "description": "Feito com pão de forma, esses minissanduíches é uma ótima opção de petisco. O preparo é fácil, rende bastante e fica muito delicioso.",
    "sourceUrl": "https://www.receiteria.com.br/receita/minissanduiche-no-pao-de-forma/"
  },
  {
    "id": 2,
    "slug": "canudinho-de-frango",
    "title": "Canudinho de frango",
    "time": "50min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/canudinho-de-frango-730x480.jpg.webp",
    "description": "Tem petisco mais fácil do que os canudinhos de frango? Basta você misturar os ingredientes do recheio e depois rechear os canudinhos fritos. Receita simples e cheia de sabor, confira!",
    "sourceUrl": "https://www.receiteria.com.br/receita/canudinho-de-frango/"
  },
  {
    "id": 3,
    "slug": "falafel-na-air-fryer",
    "title": "Falafel na air fryer",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/falafel-na-air-fryer-730x480.jpg.webp",
    "description": "Demandando apenas 30 minutinhos de preparo, esse é um falafel feito na facilidade da air fryer. O resultado é igualmente crocante, mas com uma proposta mais leve, por não ser frito no óleo!",
    "sourceUrl": "https://www.receiteria.com.br/receita/falafel-na-air-fryer/"
  },
  {
    "id": 4,
    "slug": "bolinho-de-batata-com-queijo-facil",
    "title": "Bolinho de batata com queijo fácil",
    "time": "45min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-batata-com-queijo-facil-730x480.jpeg.webp",
    "description": "Essa receita fácil pode ser feita na air fryer e leva poucos ingredientes. As batatas são cozidas, amassadas, temperadas e, na sequência, assadas. Veja o passo a passo com fotos e acerte no preparo.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-batata-com-queijo-facil/"
  },
  {
    "id": 5,
    "slug": "nachos-com-massa-de-pastel",
    "title": "Nachos com massa de pastel",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/nachos-com-massa-de-pastel-730x480.jpg.webp",
    "description": "Deliciosa e prática, essa receita de nachos fica pronta em 20 minutinhos e faz a alegria de todo mundo, sejam crianças ou adultos. O molho picante que cobre a massa de pastel confere um sabor muito similar ao do salgadinho pronto de mercado.",
    "sourceUrl": "https://www.receiteria.com.br/receita/nachos-com-massa-de-pastel/"
  },
  {
    "id": 6,
    "slug": "enroladinho-de-queijo-e-presunto-na-air-fryer",
    "title": "Enroladinho de queijo e presunto na air fryer",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/enroladinho-de-queijo-e-presunto-na-airfryer-730x480.jpeg.webp",
    "description": "Nessa combinação clássica de queijo e presunto, um enroladinho bem crocante e delicioso para petiscar! O molho de tomate deixa tudo bem molhadinho e ainda mais gostoso, vale provar.",
    "sourceUrl": "https://www.receiteria.com.br/receita/enroladinho-de-queijo-e-presunto-na-airfryer/"
  },
  {
    "id": 7,
    "slug": "nachos-mexicanos",
    "title": "Nachos mexicanos",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/nachos-mexicanos-730x480.jpg.webp",
    "description": "Um prato típico do México, os nachos mexicanos, que combina tortilhas de milho crocante com molho de queijo. Se for fazer uma noite mexicana, esse é o preparo perfeito para iniciar a noite!",
    "sourceUrl": "https://www.receiteria.com.br/receita/nachos-mexicanos/"
  },
  {
    "id": 8,
    "slug": "dadinho-de-tapioca-facil",
    "title": "Dadinho de tapioca fácil",
    "time": "140min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/dadinho-de-tapioca-facil-730x480.jpg.webp",
    "description": "Prático e saboroso, que tal um petisco de salsicha com massa de pastel? Pronto em 20 minutinhos, será frito em óleo quente, mas também pode ser assado na air fryer para uma versão mais saudável e menos gordurosa.",
    "sourceUrl": "https://www.receiteria.com.br/receita/dadinho-de-tapioca-facil/"
  },
  {
    "id": 9,
    "slug": "enroladinho-de-salsicha-simples",
    "title": "Enroladinho de salsicha simples",
    "time": "35min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/enroladinho-de-salsicha-simples.jpg.webp",
    "description": "Nesse petisco, o enroladinho terá suas salsichas pré-cozidas para os melhores sabores! A massa é douradinha e crocante, não grudando nas mãos enquanto você prepara o salgado. Teste agora mesmo essa receita!",
    "sourceUrl": "https://www.receiteria.com.br/receita/enroladinho-de-salsicha-simples/"
  },
  {
    "id": 10,
    "slug": "massinha-frita",
    "title": "Massinha frita",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/massinha-frita-730x480.jpeg.webp",
    "description": "Também conhecido como \"pastel de vento\", esse petisco fácil fica bem crocante e delicioso. Você pode polvilhar açúcar e canela para uma versão doce, ou servir com molhos salgados. Aprenda e aproveite!",
    "sourceUrl": "https://www.receiteria.com.br/receita/massinha-frita/"
  },
  {
    "id": 11,
    "slug": "frango-frito",
    "title": "Frango frito",
    "time": "50min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/frango-frito-730x480.jpeg.webp",
    "description": "O melhor petisco de boteco que você vai provar! O segredo é deixar marinando por, no mínimo, 1 hora - se conseguir deixar mais tempo, o sabor fica ainda melhor. Confira o passo a passo e faça hoje mesmo!",
    "sourceUrl": "https://www.receiteria.com.br/receita/frango-frito/"
  },
  {
    "id": 12,
    "slug": "torradinhas-de-maionese-e-queijo",
    "title": "Torradinhas de maionese e queijo",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/torradinhas-de-maionese-e-queijo-730x480.jpeg.webp",
    "description": "Quer um preparo fácil, prático e delicioso? Essa receita é perfeitinha para você! Sirva para seus amigos e se prepare para receber muitos elogios. Aproveite!",
    "sourceUrl": "https://www.receiteria.com.br/receita/torradinhas-de-maionese-e-queijo/"
  },
  {
    "id": 13,
    "slug": "palitos-de-queijo-simples-e-crocantes",
    "title": "Palitos de queijo simples e crocantes",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/palitos-de-queijo-simples-e-crocantes-730x480.jpeg.webp",
    "description": "Um petisco superfácil de fazer e que fica uma delícia. Confira como preparar esses palitinhos de queijo supercrocantes.",
    "sourceUrl": "https://www.receiteria.com.br/receita/palitos-de-queijo-simples-e-crocantes/"
  },
  {
    "id": 14,
    "slug": "bolinho-de-carne-moida-com-queijo",
    "title": "Bolinho de carne moída com queijo",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-carne-moida-com-queijo-730x480.jpeg.webp",
    "description": "Que tal fazer uma festinha em casa e servir comidas de boteco? O bolinho de carne moída com queijo é a opção perfeita! Sirva com maionese de ervas, geleia de pimenta ou o molho de sua preferência.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-carne-moida-com-queijo/"
  },
  {
    "id": 15,
    "slug": "dadinho-de-tapioca-com-geleia-de-pimenta",
    "title": "Dadinho de tapioca com geleia de pimenta",
    "time": "160min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/dadinho-de-tapioca-com-geleia-de-pimenta.jpg.webp",
    "description": "Rendendo uma boa porção de dadinhos, esse é um petisco que promete conquistar seu paladar! Entrega um toque picante pela combinação com geleia de pimenta, que deixa tudo mais delicioso.",
    "sourceUrl": "https://www.receiteria.com.br/receita/dadinho-de-tapioca-com-geleia-de-pimenta/"
  },
  {
    "id": 16,
    "slug": "batatas-assadas",
    "title": "Batatas assadas",
    "time": "55min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/batatas-assadas-capa-730x480.jpg.webp",
    "description": "As batatas assadas são muito versáteis. Podem servir como acompanhamento para carnes vermelhas, e também são ótimos petiscos. No processo da marinada você pode adicionar os temperos de acordo com os de sua preferência. Confira essa receita e aproveite!",
    "sourceUrl": "https://www.receiteria.com.br/receita/batatas-assadas/"
  },
  {
    "id": 17,
    "slug": "pipoca-com-chocolate",
    "title": "Pipoca com chocolate",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/pipoca-com-chocolate-capa-730x480.jpg.webp",
    "description": "Quer deixar sua pipoca ainda mais deliciosa com uma cobertura de chocolate incrível? Veja como fazer esse petisco simples, e descubra o segredo para que sua pipoca não murche. Confira!",
    "sourceUrl": "https://www.receiteria.com.br/receita/pipoca-com-chocolate/"
  },
  {
    "id": 18,
    "slug": "canudinho-de-maionese",
    "title": "Canudinho de maionese",
    "time": "70min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/canudinho-de-maionese-730x480.jpg.webp",
    "description": "Se busca um preparo leve e saboroso para uma reunião com amigos, que tal esses canudinhos? Recheados com maionese, ficam simplesmente deliciosos, trazendo muita cremosidade.",
    "sourceUrl": "https://www.receiteria.com.br/receita/canudinho-de-maionese/"
  },
  {
    "id": 19,
    "slug": "batata-saute-na-air-fryer",
    "title": "Batata sauté na air fryer",
    "time": "45min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/batata-saute-na-air-fryer-730x480.jpg.webp",
    "description": "Uma opção mais rústica e saudável, a batata sauté na air fryer é ideal para quem busca um petisco que não é frito no óleo. Veja como deixar as batatas sequinhas e as melhores dicas para fazer essa delícia!",
    "sourceUrl": "https://www.receiteria.com.br/receita/batata-saute-na-air-fryer/"
  },
  {
    "id": 20,
    "slug": "pao-de-alho-caseiro",
    "title": "Pão de alho caseiro",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/pao-de-alho-caseiro-capa-730x480.png.webp",
    "description": "O melhor pão de alho que você vai provar! Para deixar bem saboroso e cremoso, você precisa utilizar queijos e um creme de queijo de qualidade. Veja a receita!",
    "sourceUrl": "https://www.receiteria.com.br/receita/pao-de-alho-caseiro/"
  },
  {
    "id": 21,
    "slug": "chips-de-banana-na-air-fryer",
    "title": "Chips de banana na air fryer",
    "time": "60min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/chips-de-banana-na-air-fryer-730x480.jpg.webp",
    "description": "Um petisco fácil de fazer, que leva só dois ingredientes e ainda é feito na air fryer. O chips de banana na air fryer é delicioso e você ainda pode temperar com pimenta e sal depois de pronto para incrementar o sabor. Confira a nossa receita passo a passo e aproveite!",
    "sourceUrl": "https://www.receiteria.com.br/receita/chips-de-banana-na-air-fryer/"
  },
  {
    "id": 22,
    "slug": "asa-de-frango",
    "title": "Asa de frango",
    "time": "120min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/asa-de-frango-730x480.jpeg.webp",
    "description": "E que tal aquela asinha de frango bem crocante? Aqui, você vai aprender o segredo para deixar ela bem suculenta por dentro e crocante por fora. Confira!",
    "sourceUrl": "https://www.receiteria.com.br/receita/asa-de-frango/"
  },
  {
    "id": 23,
    "slug": "croquete-de-atum",
    "title": "Croquete de atum",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/croquete-de-atum.jpg.webp",
    "description": "Para fugir dos tradicionais preparos com carne, essa versão de croquete com atum promete surpreender seu paladar! 40 minutos de preparo, com massa de farinha de trigo.",
    "sourceUrl": "https://www.receiteria.com.br/receita/croquete-de-atum/"
  },
  {
    "id": 24,
    "slug": "rosquinhas-de-polvilho-com-chia",
    "title": "Rosquinhas de polvilho com chia",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/rosquinha-de-polvilho-com-chia-730x477.jpg.webp",
    "description": "Crocantes, esse é um biscoitinho perfeito para quem busca preparos mais leves e saudáveis! Com pilvilho e chia, uma combinação nutritiva e que combina com sucos bem gelados.",
    "sourceUrl": "https://www.receiteria.com.br/receita/rosquinhas-de-polvilho-com-chia/"
  },
  {
    "id": 25,
    "slug": "peixe-frito-sequinho",
    "title": "Peixe frito sequinho",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/peixe-frito-sequinho-1-730x480.jpg.webp",
    "description": "Aprenda a preparar o peixe de sua preferência, garantindo que ele fique sequinho e crocante! A dica é empanar o peixe em uma mistura de farinha de trigo, fubá e o amido de milho e, depois de frito, tirar o excesso de óleo com papel toalha.",
    "sourceUrl": "https://www.receiteria.com.br/receita/peixe-frito-sequinho/"
  },
  {
    "id": 26,
    "slug": "nuggets-de-tilapia-na-airfryer",
    "title": "Nuggets de tilápia na airfryer",
    "time": "45min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/nuggets-de-tilapia-na-airfryer-730x480.jpeg.webp",
    "description": "Diferente dos nuggets de frango servidos nos fast food, essa receita é ideal para os amantes de frutos do mar! Feito de tilápia e na air fryer, eles vão te encantar com o sabor e praticidade. Acesse!",
    "sourceUrl": "https://www.receiteria.com.br/receita/nuggets-de-tilapia-na-airfryer/"
  },
  {
    "id": 27,
    "slug": "quibe-de-mandioca",
    "title": "Quibe de mandioca",
    "time": "175min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/quibe-de-mandioca-730x480.jpg.webp",
    "description": "Esse quibe é feito com massa de mandioca e um recheio bem temperado de carne moída. Após empanar na farinha de rosca, é só fritar e ter um petisco crocante para qualquer hora do dia!",
    "sourceUrl": "https://www.receiteria.com.br/receita/quibe-de-mandioca/"
  },
  {
    "id": 28,
    "slug": "croquete-de-carne",
    "title": "Croquete de carne",
    "time": "90min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/croquete-de-carne-730x480.jpeg.webp",
    "description": "Se você quer um petisco fácil, com sabor delicioso e uma crocância incrível, faça esse croquete de carne. Ele é perfeito para acompanhar uma cervejinha ou caipirinha no boteco.",
    "sourceUrl": "https://www.receiteria.com.br/receita/croquete-de-carne/"
  },
  {
    "id": 29,
    "slug": "bolinho-de-mandioca-com-carne-seca",
    "title": "Bolinho de mandioca com carne-seca",
    "time": "35min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-mandioca-com-carne-seca-capa-730x480.jpeg.webp",
    "description": "Quem não gosta de uma massa de mandioca macia e saborosa? Ainda mais quando recheada com carne seca, que possui um sabor característico e marcante! Siga a receita para preparar esse prato supergostoso e servir para aqueles que você ama.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-mandioca-com-carne-seca/"
  },
  {
    "id": 30,
    "slug": "cara-chips-facil",
    "title": "Cará chips fácil",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/cara-chips-730x480.jpg.webp",
    "description": "Aprenda a fazer esse petisco sequinho e simples, uma alternativa para as batatinhas. Para deixar o prato ainda melhor, você pode polvilhar queijo parmesão ralado por cima.",
    "sourceUrl": "https://www.receiteria.com.br/receita/cara-chips/"
  },
  {
    "id": 31,
    "slug": "tulipa-de-frango",
    "title": "Tulipa de frango",
    "time": "80min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/tulipa-de-frango-730x480.jpeg.webp",
    "description": "Simples, prática e muito deliciosa! A tulipa de frango é um corte cheio de sabor e para deixar ainda melhor, tempere com mostarda, páprica, alho, caldo de limão, salsa e pimenta-do-reino. Aproveite!",
    "sourceUrl": "https://www.receiteria.com.br/receita/tulipa-de-frango/"
  },
  {
    "id": 32,
    "slug": "petisco-de-massa-de-pastel",
    "title": "Petisco de massa de pastel",
    "time": "55min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/petisco-de-massa-de-pastel-capa-730x480.png.webp",
    "description": "E que tal esse petisco feito com massa de pastel recheado com queijo? Uma opção deliciosa, crocante e simples.",
    "sourceUrl": "https://www.receiteria.com.br/receita/petisco-de-massa-de-pastel/"
  },
  {
    "id": 33,
    "slug": "croutons-de-frigideira-facil",
    "title": "Croutons de frigideira fácil",
    "time": "15min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/croutons-de-frigideira-facil-capa-730x480.png.webp",
    "description": "Com esse passo a passo você vai aprender a preparar uma deliciosa receita de croutons de frigideira. Além de ser uma excelente opção de acompanhamento para caldos, sopas e saladas, pode ser servido com carne e usado para substituir farofas.",
    "sourceUrl": "https://www.receiteria.com.br/receita/croutons-de-frigideira-facil/"
  },
  {
    "id": 34,
    "slug": "snack-de-grao-de-bico",
    "title": "Snack de grão-de-bico",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/snack-de-grao-de-bico-1-730x480.jpeg.webp",
    "description": "O grão-de-bico é um alimento indispensável em uma dieta mais saudável. Aqui, você aprende a fazer snacks saborosos e crocantes com esse grão tão nutritivo.",
    "sourceUrl": "https://www.receiteria.com.br/receita/snack-de-grao-de-bico/"
  },
  {
    "id": 35,
    "slug": "chips-de-maca-na-airfryer",
    "title": "Chips de maçã na airfryer",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/chips-de-maca-na-airfryer-730x480.jpeg.webp",
    "description": "Os chips de maçã feito na air fryer são superpráticos, saborosos e saudáveis, além de uma opção perfeita de snack doce para você se deliciar! Se preferir, adicione canela em pó.",
    "sourceUrl": "https://www.receiteria.com.br/receita/chips-de-maca-na-airfryer/"
  },
  {
    "id": 36,
    "slug": "enroladinho-frito-de-salsicha",
    "title": "Enroladinho frito de salsicha",
    "time": "80min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/enroladinho-frito-de-salsicha-capa-730x480.png.webp",
    "description": "Que tal fazer aqueles enroladinhos de salsicha que encontramos nas lanchonetes e bares do Brasil? Siga a receita para preparar esse prato supergostoso e nostálgico!",
    "sourceUrl": "https://www.receiteria.com.br/receita/enroladinho-frito-de-salsicha/"
  },
  {
    "id": 37,
    "slug": "mandioca-frita",
    "title": "Mandioca frita",
    "time": "60min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/mandioca-frita-capa-730x480.jpeg.webp",
    "description": "A mandioca frita é um petisco tradicional nos cardápios de botecos do Brasil. Acesse a nossa receita e siga o modo de preparo!",
    "sourceUrl": "https://www.receiteria.com.br/receita/mandioca-frita/"
  },
  {
    "id": 38,
    "slug": "batata-doce-na-air-fryer",
    "title": "Batata-doce na air fryer",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/batata-doce-na-airfryer-730x480.jpeg.webp",
    "description": "Uma receita que vai deixar a sua batata-doce muito saborosa e vai transformá-la em um petisco delicioso. Você só vai precisar de 3 ingredientes e 20 minutos.",
    "sourceUrl": "https://www.receiteria.com.br/receita/batata-doce-na-airfryer/"
  },
  {
    "id": 39,
    "slug": "batata-chips",
    "title": "Batata chips",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/batata-chips-730x480.jpeg.webp",
    "description": "E que tal preparar a sua própria batata chips? Aqui, você vai aprender a fazer essa batatinha na sua casa e muito mais saborosa do que a versão industrializada.",
    "sourceUrl": "https://www.receiteria.com.br/receita/batata-chips/"
  },
  {
    "id": 40,
    "slug": "chips-assado-de-batata-doce-e-alecrim",
    "title": "Chips assado de batata-doce e alecrim",
    "time": "60min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/chips-assado-de-batata-doce-e-alecrim-730x480.jpeg.webp",
    "description": "Se você é fã de snacks, o chips de batata-doce com alecrim tem tudo para te conquistar! Usando apenas batata-doce, azeite, pimenta e alecrim, você prepara um aperitivo perfeito para qualquer hora!",
    "sourceUrl": "https://www.receiteria.com.br/receita/chips-assado-de-batata-doce-e-alecrim/"
  },
  {
    "id": 41,
    "slug": "cebola-empanada-na-air-fryer",
    "title": "Cebola empanada na air fryer",
    "time": "118min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/CEBOLA-EMPANADA-CAPA-H1-730x480.jpg.webp",
    "description": "Com um preparo prático de air fryer, essas cebolas empanadas são o petisco perfeito para um happy hour ou final de semana! Douradinhas e crocantes, a páprica picante deixa tudo mais gostoso e temperadinho.",
    "sourceUrl": "https://www.receiteria.com.br/receita/cebola-empanada-na-air-fryer/"
  },
  {
    "id": 42,
    "slug": "bolinho-caipira",
    "title": "Bolinho caipira",
    "time": "45min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-caipira-00-730x480.jpg.webp",
    "description": "Com uma massa de milho bem amarelinha, esse é um bolinho caipira que será recheado com carne ainda crua, mas que depois de frita no óleo bem quente, ficará devidamente cozida. Experimente!",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-caipira/"
  },
  {
    "id": 43,
    "slug": "berinjela-no-forno-crocante",
    "title": "Berinjela no forno crocante",
    "time": "35min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/berinjela-no-forno-crocante-0-730x480.jpg.webp",
    "description": "Crocante por fora e perfeita para combinar com molhinhos diversos, essa berinjela será assada para nada de bagunças na cozinha! Com um toque de páprica para os melhores sabores.",
    "sourceUrl": "https://www.receiteria.com.br/receita/berinjela-no-forno-crocante/"
  },
  {
    "id": 44,
    "slug": "bolinho-de-farinha-de-arroz-recheado",
    "title": "Bolinho de farinha de arroz recheado",
    "time": "55min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-farinha-de-arroz-recheado-0-730x480.jpg.webp",
    "description": "Com recheio de frango desfiado com queijo ralado, esse é um bolinho sem glúten, em que a farinha de arroz garante um preparo seguro e ao mesmo tempo saboroso. Vale experimentar!",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-farinha-de-arroz-recheado/"
  },
  {
    "id": 45,
    "slug": "gurjao-de-frango",
    "title": "Gurjão de frango",
    "time": "90min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/gurjao-de-frango-730x480.jpg.webp",
    "description": "O gurjão de frango é uma boa escolha para quem quer um petisco fácil, mas com tempero caprichado. As tiras são marinadas com alho, limão, shoyu, mostarda e especiarias, depois passam por um empanamento com água gelada que ajuda a deixar a casquinha mais crocante.",
    "sourceUrl": "https://www.receiteria.com.br/receita/gurjao-de-frango/"
  },
  {
    "id": 46,
    "slug": "bolovo-simples",
    "title": "Bolovo simples",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolovo-simples-730x480.jpeg.webp",
    "description": "Um clássico dos petiscos de boteco! O bolovo conta com uma massa que envolve seu ingrediente principal, ficando bem crocante e demandando apenas 30 minutinhos de preparo. Não deixe de experimentar!",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolovo-simples/"
  },
  {
    "id": 47,
    "slug": "provolone-a-milanesa",
    "title": "Provolone à milanesa",
    "time": "45min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/provolone-a-milanesa-730x480.jpg.webp",
    "description": "Provolone empanado é um sucesso sem precisar de muito esforço, mas aqui o segredo está na casquinha reforçada, ficando crocante por fora e derretido por dentro!",
    "sourceUrl": "https://www.receiteria.com.br/receita/provolone-a-milanesa/"
  },
  {
    "id": 48,
    "slug": "coxinha-rapida-na-air-fryer",
    "title": "Coxinha rápida na air fryer",
    "time": "35min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/coxinha-rapida-na-air-fryer-730x480.jpg.webp",
    "description": "Uma opção super fácil de preparar e com um sabor delicioso, a coxinha rápida na air fryer é leve e prática. Se quiser incrementar o sabor, você pode adicionar paprica ou coentro para temperar o frango. Para uma versão mais nutritiva adicione legumes como ervilhas e cenoura ralada, fica uma delícia.",
    "sourceUrl": "https://www.receiteria.com.br/receita/coxinha-rapida-na-air-fryer/"
  },
  {
    "id": 49,
    "slug": "tilapia-frita-crocante",
    "title": "Tilápia frita crocante",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/tilapia-crocante-capa-730x480.png.webp",
    "description": "Essa receita é perfeita para os amantes de tilápia frita. Seguindo o passo a passo, você vai aprender a preparar esse petisco tradicional, saboroso e crocante.",
    "sourceUrl": "https://www.receiteria.com.br/receita/tilapia-frita-crocante/"
  },
  {
    "id": 50,
    "slug": "amendoim-doce-crocante",
    "title": "Amendoim doce crocante",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/amendoim-doce-crocante-1-730x480.jpeg.webp",
    "description": "Aprenda a fazer um delicioso petisco de amendoim doce crocante com apenas 3 ingredientes: amendoim, açúcar e água. Esse aperitivo é perfeito para servir nas reuniões com os amigos e a família.",
    "sourceUrl": "https://www.receiteria.com.br/receita/amendoim-doce-crocante/"
  },
  {
    "id": 51,
    "slug": "falafel-assado",
    "title": "Falafel assado",
    "time": "25min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/falafel-assado-capa-730x480.jpeg.webp",
    "description": "Se você quer aprender a preparar esse salgadinho de grão-de-bico, está no lugar certo! Clique e confira mais informações do preparo!",
    "sourceUrl": "https://www.receiteria.com.br/receita/falafel-assado/"
  },
  {
    "id": 52,
    "slug": "sambiquira-de-frango",
    "title": "Sambiquira de frango",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/sambiquira-de-frango-730x480.jpg.webp",
    "description": "Aprenda a fazer esse franguinho empanado no capricho para surpreender seus convidados! Veja como temperar a sambiquira da melhor maneira.",
    "sourceUrl": "https://www.receiteria.com.br/receita/sambiquira-de-frango/"
  },
  {
    "id": 53,
    "slug": "bolinho-de-feijoada",
    "title": "Bolinho de feijoada",
    "time": "60min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-feijoada-730x480.jpg.webp",
    "description": "Fez feijoada no fim de semana e sobrou um pouquinho? Veja como reaproveitá-la para fazer deliciosos bolinhos! Saborosos e crocantes, ficarão perfeitamente combinados com couve crispy ou uma vinagrete.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-feijoada/"
  },
  {
    "id": 54,
    "slug": "bolinha-de-queijo",
    "title": "Bolinha de queijo",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinha-de-queijo-capa-730x480.jpeg.webp",
    "description": "Não há quem resista a um salgadinho crocante e saboroso, principalmente quando recheado com queijo! Nessa receita, aprenda a preparar as amadas bolinhas de queijo de forma simples e prática.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinha-de-queijo/"
  },
  {
    "id": 55,
    "slug": "falafel",
    "title": "Faláfel",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/falafel-730x480.jpeg.webp",
    "description": "Receita típica do Oriente-Médio, o faláfel pode ser o seu petisco. Ele nada mais é do que um bolinho feito com grão-de-bico triturado com temperos e especiarias. Confira!",
    "sourceUrl": "https://www.receiteria.com.br/receita/falafel/"
  },
  {
    "id": 56,
    "slug": "barrinha-de-banana-com-aveia-e-canela",
    "title": "Barrinha de banana com aveia e canela",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/barrinha-de-banana-com-aveia-e-canela-capa-730x480.jpeg.webp",
    "description": "Que tal preparar uma opção rápida e saudável para seu lanche da tarde? A barrinha de banana com aveia e canela recheada com chocolate meio amargo e noz-pecã é a opção perfeita para aqueles que não abrem a mão de um docinho. Confira!",
    "sourceUrl": "https://www.receiteria.com.br/receita/barrinha-de-banana-com-aveia-e-canela/"
  },
  {
    "id": 57,
    "slug": "paozinho-de-cebola-recheado-com-queijo",
    "title": "Pãozinho de cebola recheado com queijo",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/paozinho-de-cebola-recheado-com-queijo-capa-730x480.png.webp",
    "description": "Quer aprender a fazer um pãozinho de cebola com queijo? Siga o passo a passo para preparar essa receita aromática e deliciosa!",
    "sourceUrl": "https://www.receiteria.com.br/receita/paozinho-de-cebola-recheado-com-queijo/"
  },
  {
    "id": 58,
    "slug": "porquinho-frito",
    "title": "Porquinho frito",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/porquinho-frito-730x480.jpeg.webp",
    "description": "Um clássico das praias brasileira, o porquinho frito é aquele peixe que ficam bem sequinho, com poucos espinhos e com um sabor bem suave. Venha aprender a fazer ele na sua casa.",
    "sourceUrl": "https://www.receiteria.com.br/receita/porquinho-frito/"
  },
  {
    "id": 59,
    "slug": "quibe-de-abobora-simples",
    "title": "Quibe de abóbora simples",
    "time": "75min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/quibe-de-abobora-simples-730x480.jpeg.webp",
    "description": "Para servir com aquela geleia de pimenta caseira, que tal alguns dadinhos de tapioca para petiscar? A combinação fica ainda mais gostosa a partir do momento em que é incrementado com queijo coalho.",
    "sourceUrl": "https://www.receiteria.com.br/receita/quibe-de-abobora-simples/"
  },
  {
    "id": 60,
    "slug": "croquete-de-mortadela",
    "title": "Croquete de mortadela",
    "time": "75min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/croquete-de-mortadela-730x480.jpg.webp",
    "description": "Seja para comer puro ou combinado com um molho de sua preferência, que tal alguns croquetes de mortadela? Saborosos e aromáticos, tem um modo de preparo simples e ficam completamente crocantes!",
    "sourceUrl": "https://www.receiteria.com.br/receita/croquete-de-mortadela/"
  },
  {
    "id": 61,
    "slug": "tempura-simples",
    "title": "Tempurá simples",
    "time": "35min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/tempura-simples-0-730x480.jpg.webp",
    "description": "Com uma finalização douradinha e que fica ainda melhor quando combinada com um molho shoyu ou outro levemente agridoce! Um tempurá simples que reúne os mais variados legumes.",
    "sourceUrl": "https://www.receiteria.com.br/receita/tempura-simples/"
  },
  {
    "id": 62,
    "slug": "croquete-de-calabresa-facil",
    "title": "Croquete de calabresa fácil",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/croquete-de-calabresa-facil-capa-730x480.png.webp",
    "description": "Sabia que a calabresa pode render um petisco tão gostoso quanto outros clássicos que já apareceram por aqui? E são apenas 20 minutos de cozinha para ter esses croquetes em mãos, combinando com seus molhos preferidos.",
    "sourceUrl": "https://www.receiteria.com.br/receita/croquete-de-calabresa-facil/"
  },
  {
    "id": 63,
    "slug": "bolinho-de-feijao-fradinho",
    "title": "Bolinho de feijão fradinho⁣",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-feijao-fradinho-capa-730x480.png.webp",
    "description": "Já que os preparos com carne são mais tradicionais, esse de feijão fradinho entrega um diferencial quanto a seus sabores! São 25 unidades bem caprichadas, além de usar páprica e pimenta-do-reino para os melhores sabores.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-feijao-fradinho/"
  },
  {
    "id": 64,
    "slug": "bolinho-de-peixe",
    "title": "Bolinho de peixe",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-peixe-2-730x480.jpg.webp",
    "description": "Com interior macio e casquinha dourada, esse bolinho de peixe traz uma combinação simples de ingredientes que resulta em um preparo leve, saboroso e fácil de servir em diferentes ocasiões.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-peixe/"
  },
  {
    "id": 65,
    "slug": "batata-canoa",
    "title": "Batata canoa",
    "time": "95min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/batata-canoa-730x480.jpeg.webp",
    "description": "Numa versão caseira, essas batatas canoas são perfeitas para um happy hour ou final de semana mais gostoso. Combine com seus molhos favoritos e aproveite dos melhores sabores!",
    "sourceUrl": "https://www.receiteria.com.br/receita/batata-canoa/"
  },
  {
    "id": 66,
    "slug": "torresmo-crocante",
    "title": "Torresmo crocante",
    "time": "270min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/torresmo-730x480.jpg.webp",
    "description": "Aquele clássico que não pode faltar na reunião com os amigos, mas também com os familiares! Crocantes e bem fritinhos, ficam ainda mais perfeitos servidos com algumas gotinhas de limão.",
    "sourceUrl": "https://www.receiteria.com.br/receita/torresmo/"
  },
  {
    "id": 67,
    "slug": "bolinho-de-arroz-sem-ovo",
    "title": "Bolinho de arroz sem ovo",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-arroz-sem-ovo-730x480.jpg.webp",
    "description": "Esse bolinho fácil é ótimo para aproveitar aquele arroz que sobrou da refeição anterior. Você não precisa usar ovo, pois o arroz e o queijo dão liga na massa. Experimente!",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-arroz-sem-ovo/"
  },
  {
    "id": 68,
    "slug": "petisco-de-salsicha-facil",
    "title": "Petisco de salsicha fácil",
    "time": "60min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/petisco-de-salsicha-facil-1-730x480.jpg.webp",
    "description": "Semelhante ao enroladinho de salsicha, esse prato é visualmente menor, o que contribui com o conceito dos petiscos e aperitivos servidos em bares e lanchonetes. Não deixe de conferir!",
    "sourceUrl": "https://www.receiteria.com.br/receita/petisco-de-salsicha-facil/"
  },
  {
    "id": 69,
    "slug": "ovos-de-codorna-temperados",
    "title": "Ovos de codorna temperados",
    "time": "50min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/ovos-de-codorna-temperados-730x480.jpeg.webp",
    "description": "Sabe aqueles ovinhos de codornas temperadinhos clássicos de boteco? Venha aprender a fazer na sua casa, com dicas de como descascar sem erros.",
    "sourceUrl": "https://www.receiteria.com.br/receita/ovos-de-codorna-temperados/"
  },
  {
    "id": 70,
    "slug": "iscas-de-frango-crocantes",
    "title": "Iscas de frango crocantes",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/iscas-de-frango-crocantes-730x480.jpg.webp",
    "description": "Se você adora preparar comidas de bar sem precisar sair de sua casa, aposte nas iscas de frango. Saborosas e crocantes, é quase impossível não se esbaldar assim que o prato estiver pronto. Confira!",
    "sourceUrl": "https://www.receiteria.com.br/receita/iscas-de-frango-crocantes/"
  },
  {
    "id": 71,
    "slug": "quibe-frito-caseiro",
    "title": "Quibe frito caseiro",
    "time": "50min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/quibe-frito-caseiro-730x480.jpeg.webp",
    "description": "Se você é um amante dos clássicos salgadinhos fritos, esse é o petisco perfeito para preparar em casa. Lembre-se: o segredo do quibe é temperá-lo com as especiarias certas, por isso, não esqueça de adicionar a hortelã e a pimenta!",
    "sourceUrl": "https://www.receiteria.com.br/receita/quibe-frito-caseiro/"
  },
  {
    "id": 72,
    "slug": "iscas-de-peixe",
    "title": "Iscas de peixe",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/iscas-de-peixe-730x480.jpg.webp",
    "description": "Que tal preparar em casa aquela porção saborosa de peixe? Aqui, você aprende a fazer iscas de peixe bem crocante e deliciosa.",
    "sourceUrl": "https://www.receiteria.com.br/receita/iscas-de-peixe/"
  },
  {
    "id": 73,
    "slug": "conserva-de-alho",
    "title": "Conserva de alho",
    "time": "25min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/conserva-de-alho-1-730x480.jpg.webp",
    "description": "Sabe aquela conserva clássica de alho dos botecos? Aprenda a prepará-la de uma maneira fácil e que fica deliciosa.",
    "sourceUrl": "https://www.receiteria.com.br/receita/conserva-de-alho/"
  },
  {
    "id": 74,
    "slug": "pastel-de-feira-de-carne-moida",
    "title": "Pastel de feira de carne moída",
    "time": "90min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/pastel-de-feira-de-carne-capa-730x480.png.webp",
    "description": "Se você ama pastel, mas ainda não chegou o dia da feira, aprenda a preparar essa receita de pastel recheado com carne moída sem sair de casa! Você também pode complementar a receita usando milho, ovo ou o ingrediente que preferir.",
    "sourceUrl": "https://www.receiteria.com.br/receita/pastel-de-feira-de-carne-moida/"
  },
  {
    "id": 75,
    "slug": "batata-frita",
    "title": "Batata frita",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/batata-frita-730x480.jpeg.webp",
    "description": "Para aquela batata frita clássica, confira a nossa receita que vai te ensinar a fazer esse petisco perfeito, sequinho e bem crocante. Confira!",
    "sourceUrl": "https://www.receiteria.com.br/receita/batata-frita/"
  },
  {
    "id": 76,
    "slug": "pepino-em-conserva",
    "title": "Pepino em conserva",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/pepino-em-conserva-730x480.jpg.webp",
    "description": "As conservas de picles sempre fazem sucesso como aperitivos. Veja como fazer esse clássico com vinagre, água, louro, sal, açúcar, cebolas, pepinos cornichon e pimenta-do-reino.",
    "sourceUrl": "https://www.receiteria.com.br/receita/pepino-em-conserva/"
  },
  {
    "id": 77,
    "slug": "bolinho-de-abobrinha-e-cenoura",
    "title": "Bolinho de abobrinha e cenoura",
    "time": "35min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-abobrinha-e-cenoura-capa-730x480.png.webp",
    "description": "Que aprender a fazer um prato vegetariano com ingredientes que você já tem em casa? Então confira esse passo a passo que vai te ajudar a preparar um bolinho de abobrinha e cenoura irresistível!",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-abobrinha-e-cenoura/"
  },
  {
    "id": 78,
    "slug": "bolinho-de-grao-de-bico",
    "title": "Bolinho de grão-de-bico",
    "time": "35min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-grao-de-bico-730x480.jpeg.webp",
    "description": "O bolinho de grão-de-bico é um dos pratos mais saborosos dentre as receitas que incluem o grão. Além de servi-lo como aperitivo, você pode utilizá-lo como recheio para sanduíches, wraps e até como uma alternativa vegana a almondega.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-grao-de-bico/"
  },
  {
    "id": 79,
    "slug": "enroladinho-de-salsicha-com-massa-de-pastel",
    "title": "Enroladinho de salsicha com massa de pastel",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/enroladinho-de-salsicha-com-massa-de-pastel-730x480.jpg.webp",
    "description": "Essa receita de quibe de abóbora simples vai te conquistar pelos sabores, praticidade e versatilidade. Confira como preparar e aproveite essa deliciosa receita árabe na versão vegana.",
    "sourceUrl": "https://www.receiteria.com.br/receita/enroladinho-de-salsicha-com-massa-de-pastel/"
  },
  {
    "id": 80,
    "slug": "conserva-de-berinjela-crua",
    "title": "Conserva de berinjela crua",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/conserva-de-berinjela-crua-730x480.jpg.webp",
    "description": "A berinjela na conserva serve não somente de acompanhamento para o almoço ou jantar, mas também fica ótima com pães ou torradinhas. Essa é uma mistura bem apimentada, perfeita para quem gosta de petiscos picantes.",
    "sourceUrl": "https://www.receiteria.com.br/receita/conserva-de-berinjela-crua/"
  },
  {
    "id": 81,
    "slug": "pinhao-cozido",
    "title": "Pinhão cozido",
    "time": "60min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/pinhao-cozido-06-730x480.jpg.webp",
    "description": "Perfeito para o inverno e Festa Junina, o pinhão cozido é um petisco fácil e delicioso. Confira o passo a passo para preparar essa delícia na sua casa.",
    "sourceUrl": "https://www.receiteria.com.br/receita/pinhao-cozido/"
  },
  {
    "id": 82,
    "slug": "biscoito-de-polvilho-assado-chimango",
    "title": "Biscoito de polvilho assado (Chimango)",
    "time": "60min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/biscoito-de-polvilho-assado-730x480.jpeg.webp",
    "description": "Esse petisco é ótimo para ser consumido durante aquele filminho no domingo, acompanhado por um café preto e quentinho. Faça hoje mesmo e se divirta com aqueles que mais ama!",
    "sourceUrl": "https://www.receiteria.com.br/receita/biscoito-de-polvilho-assado/"
  },
  {
    "id": 83,
    "slug": "biscoito-salgado-de-chia",
    "title": "Biscoito salgado de chia",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/biscoito-salgado-de-chia-capa-730x480.png.webp",
    "description": "Se você ama biscoitinhos fitness e está em busca de um snack saudável para o seu dia a dia, confira como fazer um biscoito salgado de chia, perfeito para lanchinhos rápidos!",
    "sourceUrl": "https://www.receiteria.com.br/receita/biscoito-salgado-de-chia/"
  },
  {
    "id": 84,
    "slug": "abobrinha-frita",
    "title": "Abobrinha frita",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/abobrinha-frita-capa-730x480.jpeg.webp",
    "description": "Leve e fácil de fazer, a abobrinha frita é uma ótima pedida para quem quer um petisco rápido. Sabia que você pode até mesmo usar as fatias fritas em outras receitas, como lasanha? Veja um passo a passo simples e deguste essa delícia.",
    "sourceUrl": "https://www.receiteria.com.br/receita/abobrinha-frita/"
  },
  {
    "id": 85,
    "slug": "bolinho-de-soja-em-graos",
    "title": "Bolinho de soja em grãos",
    "time": "50min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-soja-em-graos-730x480.jpg.webp",
    "description": "Esse bolinho é perfeito para quem não quer consumir carne. Ele é prático e muito saboroso. Confira!",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-soja-em-graos/"
  },
  {
    "id": 86,
    "slug": "chips-de-banana-da-terra",
    "title": "Chips de banana-da-terra",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/chips-de-banana-da-terra-capa-730x480.jpg.webp",
    "description": "Crocante, sequinho e perfeito para petiscar a qualquer momento do dia. Os chips de banana-da-terra são fritos e temperados com cominho, raspas de limão e sal.",
    "sourceUrl": "https://www.receiteria.com.br/receita/chips-de-banana-da-terra/"
  },
  {
    "id": 87,
    "slug": "falafel-simples",
    "title": "Falafel simples",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/falafel-simples-730x480.jpg.webp",
    "description": "Perfeito para servir com aquele molho de tahine, esse é um falafel pronto em apenas 20 minutinhos! Sequinho e com uma finalização dourada, promete os melhores sabores. Não deixe de experimentar!",
    "sourceUrl": "https://www.receiteria.com.br/receita/falafel-simples/"
  },
  {
    "id": 88,
    "slug": "chips-de-batata-doce-na-air-fryer",
    "title": "Chips de batata-doce na air fryer",
    "time": "45min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/chips-de-batata-doce-na-air-fryer-730x480.jpg.webp",
    "description": "Para petiscar no fim do expediente, ou ainda servir como entrada num jantar mais casual, que tal esses chips de batata-doce? Rápidos e práticos de serem feitos na air fryer.",
    "sourceUrl": "https://www.receiteria.com.br/receita/chips-de-batata-doce-na-air-fryer/"
  },
  {
    "id": 89,
    "slug": "chips-de-batata-doce-no-forno",
    "title": "Chips de batata-doce no forno",
    "time": "25min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/chips-de-batata-doce-no-forno-730x480.jpg.webp",
    "description": "Opção saudável para quem busca um lanchinho rápido e demandando poucos ingredientes! A batata-doce fica ainda mais gostosa por conta dos temperinhos que são utilizados. Experimente!",
    "sourceUrl": "https://www.receiteria.com.br/receita/chips-de-batata-doce-no-forno/"
  },
  {
    "id": 90,
    "slug": "batata-chips-caseira",
    "title": "Batata chips caseira",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/batata-chips-caseira-730x480.jpg.webp",
    "description": "Essas batatinhas estão empanadas em farinha de trigo, com alguns temperinhos, para maior sabor e crocância. Perfeita como petisco ou aperitivo depois de um dia longo e cansativo!",
    "sourceUrl": "https://www.receiteria.com.br/receita/batata-chips-caseira/"
  },
  {
    "id": 91,
    "slug": "mandioca-com-queijo-na-air-fryer",
    "title": "Mandioca com queijo na air fryer",
    "time": "120min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/mandioca-com-queijo-na-air-fryer-730x480.jpg.webp",
    "description": "Quem é que resiste a uma porção de mandioca com aquela finalização de queijo por cima? Bem douradinha, o resultado é bem crocante e ainda fica mais gostosa com um toque de cheiro-verde.",
    "sourceUrl": "https://www.receiteria.com.br/receita/mandioca-com-queijo-na-air-fryer/"
  },
  {
    "id": 92,
    "slug": "tempura-de-berinjela",
    "title": "Tempurá de berinjela",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/tempura-de-berinjela-730x480.jpg.webp",
    "description": "Com finalização douradinha, por ser empanado na mistura clássica de tempurá! Essas berinjelas ficam crocantes e ainda melhores quando acompanhadas de molho shoyu.",
    "sourceUrl": "https://www.receiteria.com.br/receita/tempura-de-berinjela/"
  },
  {
    "id": 93,
    "slug": "biscoito-de-cebola-facil",
    "title": "Biscoito de cebola fácil",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/biscoito-de-cebola-facil-capa-730x480.png.webp",
    "description": "Poucos ingredientes e aquele biscoitinho sem igual e levemente salgadinho! Com um toque de cebola para os melhores sabores, graças à utilização do creme de cebola. Salpique orégano para uma camada extra de sabor!",
    "sourceUrl": "https://www.receiteria.com.br/receita/biscoito-de-cebola-facil/"
  },
  {
    "id": 94,
    "slug": "aneis-de-cebola-na-air-fryer",
    "title": "Anéis de cebola na air fryer",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/aneis-de-cebola-na-airfryer-00-730x480.png.webp",
    "description": "Com apenas 5 ingredientes, garanta 4 porções generosas desses deliciosos anéis de cebola empanados! Para maior praticidade, serão assados na air fryer, ficando crocantes e douradinhos.",
    "sourceUrl": "https://www.receiteria.com.br/receita/aneis-de-cebola-na-airfryer/"
  },
  {
    "id": 95,
    "slug": "chips-de-abobrinha-com-parmesao",
    "title": "Chips de abobrinha com parmesão",
    "time": "25min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/chips-de-abobrinha-com-parmesao-00-730x480.png.webp",
    "description": "Se você pensa que petiscos só são possíveis com carnes, faltou experimentar essa proposta feita com abobrinha empanada! Esses chips serão empanados e ficarão crocantes do jeito que a gente gosta.",
    "sourceUrl": "https://www.receiteria.com.br/receita/chips-de-abobrinha-com-parmesao/"
  },
  {
    "id": 96,
    "slug": "polenta-frita-na-air-fryer",
    "title": "Polenta frita na air fryer",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/polenta-frita-na-airfryer-730x480.jpeg.webp",
    "description": "Crocante e bem douradinha, a porção de polenta frita é simplesmente irresistível, não é mesmo? E quanto feita na air fryer, é uma proposta prática que não tem desculpas para não fazer em casa.",
    "sourceUrl": "https://www.receiteria.com.br/receita/polenta-frita-na-airfryer/"
  },
  {
    "id": 97,
    "slug": "bolinho-de-arroz-assado-facil",
    "title": "Bolinho de arroz assado fácil",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-arroz-assado-facil-capa-730x480.png.webp",
    "description": "Um bolinho feito com o arroz já cozido, ou seja, perfeito para aproveitar sobras que possivelmente seriam descartadas! Com cebola, pimentão, cenoura e abobrinha para ainda mais sabores.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-arroz-assado-facil/"
  },
  {
    "id": 98,
    "slug": "onions-rings-com-queijo-crocantes",
    "title": "Onions rings com queijo crocantes",
    "time": "60min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/onion-rings-com-queijo-730x477.jpg.webp",
    "description": "Com interior bem derretido e levemente puxa-puxa, que tal esses onions rings para se deliciar com um molho bem caprichado? Uma versão feita com farinha de arroz, mas que também pode ser feita com a de milho ou de trigo.",
    "sourceUrl": "https://www.receiteria.com.br/receita/onions-rings-com-queijo-crocantes/"
  },
  {
    "id": 99,
    "slug": "coxinha",
    "title": "Coxinha",
    "time": "90min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/coxinha-capa-730x480.jpeg.webp",
    "description": "Que tal uma coxinha de frango com interior bem molhadinho? Essa com massa de farinho de trigo é bem clássica e pode ser servida desde happy hour até festinhas.",
    "sourceUrl": "https://www.receiteria.com.br/receita/coxinha/"
  },
  {
    "id": 100,
    "slug": "torrada-com-alho",
    "title": "Torrada com alho",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/torrada-com-alho-730x480.png.webp",
    "description": "Para aproveitar pães amanhecidos, essas torradinhas com alho ficarão sequinhas e muito saborosas! Perfeitas tanto como petisco como entradinha para um jantar que espera por um prato mais pesado.",
    "sourceUrl": "https://www.receiteria.com.br/receita/torrada-com-alho/"
  },
  {
    "id": 101,
    "slug": "pipoca-das-marias",
    "title": "Pipoca das Marias",
    "time": "50min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/pipoca-das-marias-capa-730x480.jpg.webp",
    "description": "Se a intenção é provar algo mais docinho, essas pipocas que já foram uma verdadeira febre na internet são a nossa sugestão! Seus grãos serão envolvidos com chocolate nobre, ficando maravilhosas.",
    "sourceUrl": "https://www.receiteria.com.br/receita/pipoca-das-marias/"
  },
  {
    "id": 102,
    "slug": "bolinho-de-aipim",
    "title": "Bolinho de aipim",
    "time": "70min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-aipim.jpg.webp",
    "description": "Iguaria brasileira, esse bolinho de aipim é um clássico que além de saboroso, é também muito prático de ser preparado! Feito com a mandioca cozida e recheado com carne moída bem temperadinha.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-aipim/"
  },
  {
    "id": 103,
    "slug": "bolinho-de-milho",
    "title": "Bolinho de milho",
    "time": "70min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-milho-00-730x480.jpg.webp",
    "description": "Um bolinho com toques caipiras, já que é feito com milho! Perfeito para servir como aperitivo ou petisco nos finais de semana. Finalizados na fritura, para um douradinho irresistível!",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-milho/"
  },
  {
    "id": 104,
    "slug": "batata-noisette",
    "title": "Batata noisette",
    "time": "25min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/batata-noisette-730x480.jpg.webp",
    "description": "Esses são bolinhos feitos com purê de batatas fritos em óleo bem quente! O resultado é crocante, mas totalmente macio por dentro. 25 minutos de preparo para muito sabor!",
    "sourceUrl": "https://www.receiteria.com.br/receita/batata-noisette/"
  },
  {
    "id": 105,
    "slug": "nachos-com-pao-arabe",
    "title": "Nachos com pão árabe",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/nachos-com-pao-arabe-730x480.jpg.webp",
    "description": "Nessa receita, você precisará apenas de pães árabes e alguns temperinhos! Crocantes, ficam perfeitos para serem consumidos com guacamole, sour cream ou até mesmo uma coalhada bem caprichada.",
    "sourceUrl": "https://www.receiteria.com.br/receita/nachos-com-pao-arabe/"
  },
  {
    "id": 106,
    "slug": "abobrinha-empanada",
    "title": "Abobrinha empanada",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/abobrinha-empanada-730x480.jpeg.webp",
    "description": "Ovos, parmesão e abobrinhas! Esses são os únicos ingredientes necessários para esse preparo empanado e bem crocante. Combine com molhos mais leves, mas também fica ótimo com opções mais cremosas e encorpadas!",
    "sourceUrl": "https://www.receiteria.com.br/receita/abobrinha-empanada/"
  },
  {
    "id": 107,
    "slug": "fish-and-chips",
    "title": "Fish and chips",
    "time": "60min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/fish-and-chips-capa-730x480.jpeg.webp",
    "description": "Uma receitinha clássica da Inglaterra, dessas que são simples de fazer e perfeitas para compartilhar! Peixes e batatas fritas bem sequinhas, com um delicioso molho tártaro para complementar.",
    "sourceUrl": "https://www.receiteria.com.br/receita/fish-and-chips/"
  },
  {
    "id": 108,
    "slug": "pastel-de-polenta",
    "title": "Pastel de polenta",
    "time": "60min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/pastel-de-polenta-730x480.jpg.webp",
    "description": "Com massa de polenta e um recheio de de carne moída bem temperadinha, esses pastéis prometem conquistar seu paladar! Deixe seus finais de semana mais gostoso com essa opção.",
    "sourceUrl": "https://www.receiteria.com.br/receita/pastel-de-polenta/"
  },
  {
    "id": 109,
    "slug": "nuggets-caseiro",
    "title": "Nuggets caseiro",
    "time": "40min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/nuggets-caseiro-730x480.jpg.webp",
    "description": "Perfeito para combinar com seus molhos favoritos, o nuggets caseiro é uma opção muito mais saudável que as versões de supermercado! Açafrão e creme de cebola garantem seus sabores especiais.",
    "sourceUrl": "https://www.receiteria.com.br/receita/nuggets-caseiro/"
  },
  {
    "id": 110,
    "slug": "quibe-de-arroz",
    "title": "Quibe de arroz",
    "time": "170min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/quibe-de-arroz-0-730x480.jpg.webp",
    "description": "Se você não pode com trigo, não deixe de experimentar essa receita de quibe feito com sobras de arroz! A opção é ótima, também fica crocante e pode ser combinada com seus molhos favoritos.",
    "sourceUrl": "https://www.receiteria.com.br/receita/quibe-de-arroz/"
  },
  {
    "id": 111,
    "slug": "cebola-crispy-na-air-fryer",
    "title": "Cebola crispy na air fryer",
    "time": "25min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/cebola-crispy-na-air-fryer-730x480.jpg.webp",
    "description": "Crocante e perfeita para combinar com os molhos de sua preferência! A cebola crispy é um daqueles petiscos que combinam de refrigerante a cerveja bem geladinha.",
    "sourceUrl": "https://www.receiteria.com.br/receita/cebola-crispy-na-air-fryer/"
  },
  {
    "id": 112,
    "slug": "banana-empanada-frita",
    "title": "Banana empanada frita",
    "time": "25min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/banana-empanada-frita-730x480.jpg.webp",
    "description": "Seja para complementar o cardápio do seu almoço ou jantar, ou então para servir no lanche da tarde, que tal essa banana empanada? O resultado é crocante e perfeito para surpreender seu paladar.",
    "sourceUrl": "https://www.receiteria.com.br/receita/banana-empanada-frita/"
  },
  {
    "id": 113,
    "slug": "tempura-original",
    "title": "Tempurá original",
    "time": "90min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/tempura-original-0-730x480.jpg.webp",
    "description": "Que tal alguns legumes envolvidos com uma massinha leve e bem tradicional? Esse tempurá é a opção perfeita para quem busca um preparo oriental simplesmente saboroso. Não deixe de experimentar!",
    "sourceUrl": "https://www.receiteria.com.br/receita/tempura-original/"
  },
  {
    "id": 114,
    "slug": "sambiquira-de-boteco",
    "title": "Sambiquira de boteco",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/sambiquira-de-boteco-0-730x480.jpg.webp",
    "description": "Com uma preparação na air fryer, essa sambiquira fica crocante por fora e suculenta por dentro. Servida com um limãozinho e um molho de pimenta, fica ainda mais saborosa. Experimente!",
    "sourceUrl": "https://www.receiteria.com.br/receita/sambiquira-de-boteco/"
  },
  {
    "id": 115,
    "slug": "bolinho-de-mandioca-com-carne",
    "title": "Bolinho de mandioca com carne",
    "time": "80min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-mandioca-com-carne-730x480.jpg.webp",
    "description": "Um preparo que é a cara do Brasil, principalmente por utilizar mandioca na composição de sua massa! Aqui, o recheio é de carne moída, mas você pode fazer como preferir. Não esqueça dos molhos!",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-de-mandioca-com-carne/"
  },
  {
    "id": 116,
    "slug": "azeitonas-recheadas-com-anchova",
    "title": "Azeitonas recheadas com anchova",
    "time": "110min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/azeitonas-recheadas-com-anchova-730x480.jpg.webp",
    "description": "Crocantes e bem recheadas, essas azeitonas são um petisco diferente e ideal para surpreender num happy hour ou fim de semana! Sirva com gotinhas de limão para os melhores sabores.",
    "sourceUrl": "https://www.receiteria.com.br/receita/azeitonas-recheadas-com-anchova/"
  },
  {
    "id": 117,
    "slug": "torrada-na-air-fryer",
    "title": "Torrada na air fryer",
    "time": "11min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/torrada-na-air-fryer-730x480.jpg.webp",
    "description": "Feita direto na air fryer, essa torrada transforma o pão amanhecido em um preparo crocante e cheio de sabor, de forma prática e sem precisar usar forno ou frigideira!",
    "sourceUrl": "https://www.receiteria.com.br/receita/torrada-na-air-fryer/"
  },
  {
    "id": 118,
    "slug": "camarao-frito",
    "title": "Camarão frito",
    "time": "20min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/camarao-frito-capa-730x480.png.webp",
    "description": "Sinta o sabor e a brisa do mar ao saborear uma deliciosa porção de camarão frito igual ao da praia na sua casa. Aprenda a preparar esse petisco que é sucesso em qualquer lugar.",
    "sourceUrl": "https://www.receiteria.com.br/receita/camarao-frito/"
  },
  {
    "id": 119,
    "slug": "lula-a-dore",
    "title": "Lula à dorê",
    "time": "25min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/lula-a-dore-0-730x480.jpg.webp",
    "description": "Lula à dorê é uma receita fácil, mas cheia de personalidade e sabor. Com a casquinha crocante e o interior macio, ela funciona super bem como petisco para compartilhar e combina muito com momentos descontraídos, ainda mais acompanhada de um bom molho.",
    "sourceUrl": "https://www.receiteria.com.br/receita/lula-a-dore/"
  },
  {
    "id": 120,
    "slug": "bolinho-salgado-de-frango",
    "title": "Bolinho salgado de frango",
    "time": "75min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/bolinho-salgado-de-frango-730x480.jpg.webp",
    "description": "A textura crocante por fora e macia por dentro desse bolinho de frango vai ganhar seu coração! Além de prático, essa receita é uma ótima forma de transformar ingredientes básicos em um petisco gostoso e fácil de servir.",
    "sourceUrl": "https://www.receiteria.com.br/receita/bolinho-salgado-de-frango/"
  },
  {
    "id": 121,
    "slug": "toucinho",
    "title": "Toucinho",
    "time": "80min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/toucinho-730x480.jpg.webp",
    "description": "Se você gosta de crocância de verdade, esse toucinho é a escolha certa. Temperado na medida e assado até dourar, ele fica leve e cheio de sabor, ideal para beliscar ou acompanhar refeições.",
    "sourceUrl": "https://www.receiteria.com.br/receita/toucinho/"
  },
  {
    "id": 122,
    "slug": "batata-frita-com-cheddar-e-bacon",
    "title": "Batata frita com cheddar e bacon",
    "time": "30min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/batata-frita-com-cheddar-e-bacon-0-730x480.jpg.webp",
    "description": "Ideal para servir em encontros, noites de filme ou até como acompanhamento especial, essa batata frita com cheddar e bacon combina diferentes texturas em cada mordida. O toque do alecrim ainda ajuda a trazer mais sabor e personalidade ao prato.",
    "sourceUrl": "https://www.receiteria.com.br/receita/batata-frita-com-cheddar-e-bacon/"
  },
  {
    "id": 123,
    "slug": "batata-smile",
    "title": "Batata smile",
    "time": "70min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/batata-smile-730x480.jpg.webp",
    "description": "Com batata, sal e amido de milho, você prepara um petisco caseiro que agrada crianças e adultos. O mais divertido é modelar os rostinhos antes de fritar e servir as batatas bem crocantes com o molho de sua preferência.",
    "sourceUrl": "https://www.receiteria.com.br/receita/batata-smile/"
  },
  {
    "id": 124,
    "slug": "croquete-de-frango",
    "title": "Croquete de frango",
    "time": "65min",
    "image": "https://www.receiteria.com.br/wp-content/uploads/croquete-de-frango-1-730x480.jpg.webp",
    "description": "Perfeito para servir como petisco, esses croquetes são douradinhos e ótimos para compartilhar com amigos ou happy hour com os colegas de trabalho! Invista num molhinho para potencializar seus sabores.",
    "sourceUrl": "https://www.receiteria.com.br/receita/croquete-de-frango/"
  }
];

export function getReceitaBySlug(slug: string) {
  return receitas.find((receita) => receita.slug === slug);
}
