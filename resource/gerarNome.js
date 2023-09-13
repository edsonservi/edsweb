const sobrenomes = ["Abaine", "Abaurre", "Abbud", "Abecassis", "Aboudib", "Abraão", "Abreu", "Acátolli", "Aggrizzi", "Agrisi",
    "Agrizi", "Agrizzi", "Aiette Malo", "Aiette", "Airoso", "Akechi", "Alba", "Albani", "Alberico", "Albernaz",
    "Alberto", "Albino", "Albuquerque", "Alcantra", "Alencar", "Alenquer", "Alexandre", "Alexandreli", "Alfarenga", "Almeida",
    "Altoe", "Altoé", "Alvarenga", "Alvernaz", "Alves", "Alvez", "Alázia", "Amaral", "Amato", "Ambrosio",
    "Ambrozim", "Ambrozin", "Ambrozina", "Amim", "Amorim", "Amélia", "Anchesqui", "Andersdatter", "Andersen", "Andrade",
    "Andreasdatter", "Andreão", "Andrião", "Angelo", "Anna", "Antonia", "Antoniazzi", "Antunes", "Antônio", "Apolinário",
    "Apolonio", "Apple", "Appolinario", "Araújo", "Arduíni", "Armellin", "Arpini", "Arrivabene", "Arruda", "Assis",
    "Assumpção", "Assunção", "Assú", "Augusto", "Augustsdatter", "Augustsen", "Avelar", "Aveleda", "Azevedo", "Baceti",
    "Bachetti", "Badaró", "Baiense", "Balança", "Balarini", "Baldo", "Baldotto", "Balestre", "Baliana", "Ballarini",
    "Bandeira", "Baptista", "Baquete", "Barazzuol", "Barbato", "Barbosa", "Barboza", "Barcelos", "Barnabe", "Barnett",
    "Baro", "Barone", "Barrazuol", "Barrazzuol", "Barreira", "Barreto", "Barros", "Barroso", "Basei", "Basoni",
    "Bassan", "Bassani", "Bassetti", "Basso", "Bassos", "Bassul", "Bastianelli", "Bastos", "Batista", "Battaglia",
    "Battagnoli", "Battistela", "Battistella", "Battisti", "Bazoni", "Bedard", "Bedore", "Belcavello", "Belinato", "Bellini",
    "Bellon", "Bellè", "Belmock", "Beltrame", "Beltran", "Benedetti", "Benevenutte", "Benevides", "Benica", "Beraldo",
    "Berard Lepine", "Berg", "Bergami", "Berger", "Bernabé", "Bernadini", "Bernadot", "Bernardes", "Bernardi", "Bernardini",
    "Bernardo", "Berthelsen", "Bertolosso", "Bertone", "Bertonsin", "Berude", "Bet", "Betine", "Betini", "Bettin",
    "Bezerra", "Bianche", "Bianco", "Biazate", "Bicalho", "Bicudo", "Bindaco", "Binelle de Pietro", "Binelle", "Bissoli",
    "Bistafa", "Bitelli", "Bitencourt", "Bjerke", "Blanco", "Boarin", "Boge", "Boiago", "Boizam", "Boldrin",
    "Boldrine", "Boldrini", "Bolzan", "Bonadiman", "Bonfim", "Boni", "Bonicenha", "Bonilha", "Bonot", "Bordin",
    "Borges", "Borghi", "Borsoi", "Bortolini", "Bortolot", "Bortoloth", "Bortoloti", "Bortolotti", "Bosio", "Bossoli",
    "Botacim", "Botacin", "Botelho", "Bottega", "Botteon", "Botti", "Bourguignon", "Bozi", "Bozzi", "Bozzoli",
    "Braceschi", "Braga", "Bragagnolo", "Bragato", "Bragatto", "Braggion", "Braido", "Brancaglioni", "Branch", "Branco",
    "Brandão", "Bravato", "Bravim", "Bravin", "Breda", "Bregesk", "Bregolin", "Breves", "Brezininiski", "Breziniscki",
    "Brezinski", "Brianezi", "Brino", "Brioschi", "Briosqui", "Brisot", "Brito", "Brodeur", "Broedel", "Brogan",
    "Brum", "Brumana", "Bruneli", "Brunelli", "Bruno", "Bruschi", "Brusco", "Brush", "Brusque", "Bueno",
    "Buffo", "Bullock", "Buoro", "Burgues", "Burrows", "Busato", "Busetti", "Buson", "Butler", "Buzatto",
    "Buzon", "Cabral", "Caetano", "Calabrez", "Calabreza", "Calassara", "Calatrone", "Calazans", "Caldeira", "Caldo",
    "Calegari", "Calegario", "Caliari", "Califfe", "Calil", "Calimam", "Caliman", "Calixto", "Calliman", "Calmon",
    "Calotto", "Calvi", "Camara", "Camargo", "Camata", "Camatta", "Cambiage", "Camilete", "Camiletti", "Camillete",
    "Campagnaro", "Camporez", "Camporês", "Campos", "Canal", "Canata", "Canceglieri", "Cancian", "Candido", "Cansi",
    "Cansian", "Cansio", "Canzian", "Capelini", "Caprini", "Capucho", "Caputo", "Carazas", "Cardosa", "Cardoso",
    "Cardozo", "Careta", "Caretta", "Caridade", "Carlesso", "Carminate", "Carminati", "Carmo", "Carneiro", "Carniele",
    "Carnielle", "Carnielli", "Carrasco", "Carrer", "Carriço", "Carvalhido", "Carvalho", "Casagrande", "Casaro", "Cassaro",
    "Cassini", "Castelione", "Casteluber", "Castro", "Catabriga", "Catellan", "Cattai", "Cattelan", "Cavalcanti", "Cavaleiro",
    "Cavallina", "Cavanelas", "Cavatti", "Caversani", "Ceccon", "Cecote", "Cecotti", "Cei", "Celot", "Ceolin",
    "Ceotto", "Cergueira", "Cerqueira", "Cervantes", "Cescon", "Cesconeto", "Cesconetto", "Cevolani", "Chagas", "Chapiniti",
    "Chausse", "Chaves", "Cheibub", "Chiaradia", "Chiecan", "Chiecon", "Chies", "Chiesurin", "Christ", "Christensdatter",
    "Christensen", "Christiandatter", "Christiansdatter", "Christiansen", "Christophersen", "Chtistensdatter", "Cipriano", "Cittera", "Claudino", "Cobo",
    "Cocco", "Coco", "Coelha", "Coelho", "Cola", "Coladeci", "Colato", "Colli", "Colodeta", "Colodete",
    "Colodetti", "Colombi", "Comarela", "Comerio", "Conceicao", "Conciani", "Conde", "Congo", "Constâncio", "Contarato",
    "Contarini", "Conte", "Conterini", "Conti", "Coppo", "Corcos", "Corocher", "Corradi", "Correia", "Correya",
    "Corrêa", "Corte", "Cosme", "Costa Longa", "Costa Longo", "Costa", "Costalonga", "Costariol", "Cota", "Coutinho",
    "Covre", "Cozumeco", "Cravellar", "Cremasco", "Cressafe", "Cricco", "Crozatti", "Cruz", "Cuman", "Cunha",
    "Cunshnir", "Curcio", "Curitiba", "Custódio", "Cypriano", "Cyrillo", "Côgo", "D'Agostini", "D'Agostino", "D'Altoè",
    "Dadalto", "Dal Bo", "Dal Fior", "Dal Piaz", "Dalcin", "Dall'armellina", "Dall'ava", "Dalla Betta Berta", "Dalla Marta", "Dalla",
    "Dalto", "Daltro", "Dalvi", "Dan", "Dancy", "Dansi", "Dantas", "Danzi", "Dardengo", "Dariva",
    "Daroz", "Darroz", "Dassié", "Davel", "David", "Debona", "Del Puppo", "Delai", "Delaparte", "Delarmelina",
    "Delazare", "Dell'Antonia", "Della Coletta", "Della Libera", "Dellaparte", "Delli", "Delpupo", "Demartins", "Demoni", "Denadai",
    "Deprá", "Deschievane", "Dessaure", "Destéfani", "Dias", "Diirr", "Dinis", "Doimo", "Dolôres", "Domene",
    "Domingues", "Domo", "Donadira", "Donald", "Donati", "Donato", "Dorigo", "Dorzenoni", "Duar", "Duarte",
    "Duque", "Durfee", "Dutra", "Ebani", "Eckhardt", "Eller", "Emeli", "Endringer", "Entringer", "Erbolato",
    "Ervati", "Esméria", "Especemile", "Espinosa", "Esposito", "Espíndula", "Espírito Santo", "Esteves", "Evarti", "Eça",
    "Fabis", "Fabre", "Fabro", "Faccini", "Faccitin", "Fachini", "Faco", "Facundes", "Fae", "Fagundes",
    "Falchetto", "Falqueto", "Falquetto", "Falsoni", "Farace", "Fardim", "Fardin", "Faria", "Farias", "Faroni",
    "Fasoli", "Fassarella", "Favoreto", "Fazoli", "Fazollo", "Fazôlo", "Feitoza", "Felete", "Feletti", "Ferlin",
    "Fernandes", "Fernandez", "Ferraco", "Ferrarese", "Ferrari", "Ferreira Braga", "Ferreira", "Ferrighetto", "Ferrão", "Feu",
    "Fidelis", "Figueira", "Filete", "Fileti", "Filetti", "Fillinger", "Fim", "Fioravante", "Fioresi", "Fiorez",
    "Fiorim", "Fiorini", "Fiorot", "Fiorotto", "Firese", "Firme", "Fisch", "Fitipaldi", "Fittipaldi", "Fiório",
    "Flora", "Florêncio", "Flozillo", "Foffi", "Fonseca", "Fontana", "Fontes", "Forafo", "Formigoni", "Fornazier",
    "Frachin", "Frade", "Fraga", "Frais", "Francesca", "Franceschet", "Franceschetto", "Franchin", "Francisca", "Francischeto",
    "Francischetto", "Francisco", "Francisqueti", "Francisqueto", "Franco", "Frandsen", "Frattini", "Frazão", "Fregolent", "Freire",
    "Freitas", "Freyre", "Friezell", "Friezelle", "Friggi", "Frizi", "Frizzera", "Frizzo", "Frossar", "Fruett",
    "Fulaneti", "Fumaneri", "Fumanesi", "Fundão", "Furian", "Furlan", "Furtado", "Fusinato", "Fuzeti", "Fávero",
    "Gabriel", "Gaburro", "Gago", "Gaigher", "Gaiguer", "Gaiotto", "Galavotti", "Galina", "Garcia", "Gardiman",
    "Gargan", "Gaspar", "Gasparello", "Gasparini", "Gasparotto", "Gato", "Gaucci", "Gava", "Gavina", "Gazola",
    "George", "Geraldo", "Ghivan", "Giacomele", "Giacomeli", "Giacomelli", "Giobini", "Giovannetti", "Giro", "Giuduce",
    "Giuriato", "Giuriatto", "Givelli", "Gobbato", "Gobbo", "Goese", "Gomes Luis", "Gomes", "Gonzalves", "Gonçalves",
    "Gonçalvez", "Gottardo", "Grand-Pre", "Grando", "Granzottin", "Granzotto", "Grasseto", "Grassetto", "Grassi", "Graça",
    "Greco", "Gregio", "Gregolin", "Grillo", "Grobério", "Grolla", "Guarnier", "Guedes", "Guerini", "Guerino",
    "Guerra", "Guidini", "Guidolini", "Guilherme", "Guimarães", "Guisso", "Guizzardi", "Gularte", "Guldbrandsdatter", "Habib",
    "Handler", "Hansdatter", "Hansen", "Harper", "Hayes", "Henrichsdatter", "Henrichsen", "Henrique", "Henriques", "Herculano",
    "Herman", "Herzog", "Hoffman", "Hoffmann", "Holliday", "Horacio", "Hostey", "Hypólito", "Iki", "Intringer",
    "Isgária", "Ivie", "Ivonete", "Iwand", "Jacinto", "Jacoboski", "Jacobsen", "Jacome", "Jacomelle", "Jacomelli",
    "Jambo", "Jensdatter", "Jensen", "Jesus", "Joao", "Joaquina", "Joensdatter", "Johannesen", "Johansdatter", "Johansen",
    "Jonsson", "Jordão", "Jorge", "Jorgensen", "Josefa", "Julio", "Justi", "Juvanhol", "Kiefer", "Kiepper",
    "Kilpatrick", "Kirmse", "Kister", "Klein", "Knudsen", "Kolberg", "Kristensen", "Kristiansen", "Kuiger", "La Point",
    "Lacerda", "Lachini", "Ladeira", "Lage", "Lago", "Lagoeiro", "Laiberetor", "Lamha", "Landeira", "Lanes",
    "Langrin", "Lans", "Lapa", "Larsdatter", "Larsen", "Laura", "Laurenco", "Laures", "Laus", "Lay",
    "Leal", "Leite", "Leitão", "Leme", "Lemos", "Lems", "Leonardes", "Leonel", "Leopoldo", "Lepine",
    "Lerner", "Lessa", "Libardi", "Liberator", "Liberatori", "Liduino", "Lima", "Lingiardi", "Lino", "Lisboa",
    "Lizabo", "Longo", "Lopes", "Loredetto", "Lorencini", "Lorenzini", "Lorenzon", "Lorenzoni", "Lorençon", "Lorenção",
    "Loreto", "Lorezon", "Loss", "Lott", "Lougun", "Loureiro", "Loureito", "Lourença", "Lourenço", "Lourenção",
    "Lourneco", "Louzada", "Lovat", "Lovatel", "Lovatti", "Lozano", "Lubiana", "Luca", "Lucas", "Lucca",
    "Lucchetta", "Luchi", "Luciano", "Luis", "Luiz", "Lunz", "Lupino", "Luzorio", "Lyrio", "Légora ",
    "Macatrozzi", "Mace", "Macedo", "Machado", "Maciel", "Madsdatter", "Madsen", "Madureira", "Mafra", "Magaldi",
    "Magalhães", "Magnago", "Magri", "Magro", "Mahtielo", "Maia", "Maida", "Maifredi", "Majeski", "Majeveski",
    "Malini", "Malta", "Malvezzi", "Mamoni", "Maneback", "Manfredo", "Manhães", "Manoel", "Mantoan", "Mantovali",
    "Marangon", "Maranguanhe", "Marcantonio", "Marcarini", "Marchese", "Marchiori", "Marchioro", "Marcon", "Maremiori", "Marett",
    "Maretto", "Maria", "Mariane", "Mariani", "Marim", "Marin", "Marinato", "Marinho", "Marini", "Mario",
    "Mariotto", "Mark", "Marochio", "Maroto", "Marotto", "Marques", "Marquette", "Marquioro", "Marsal", "Martas",
    "Martha", "Martin", "Martinatti", "Martins", "Martinsdatter", "Martinsen", "Martinussu", "Maróquio", "Mascarello", "Mascarelo",
    "Mascarenhas", "Maset", "Massardi", "Massari", "Mastela", "Mastrantoni", "Masut", "Mateus", "Mathias", "Mathiasso",
    "Mathiello", "Mathisen", "Mathiélo", "Matiello", "Matielo", "Matioz", "Matos", "Matsuschita", "Mattar", "Mauro",
    "Mazoco", "Mazzoco", "Mazzon", "McCune", "Meato", "Medeiros", "Meger", "Meira", "Meirelles", "Mello",
    "Melo", "Mendes", "Mendonça", "Menegardo", "Meneghin", "Meneguete", "Meneses", "Menezes", "Mengale", "Merenciano",
    "Mergár", "Merigue", "Merotto", "Mesquita", "Michelsen", "Mikkelsen", "Milanez", "Milaneze", "Milanezi", "Milena",
    "Miller", "Minatel", "Minet", "Minete", "Minette", "Minetti", "Miniguite", "Miniguiti", "Miquelin", "Miranda",
    "Mistura", "Mizzoni", "Modesto", "Modolo", "Moitinho", "Molinaroli", "Monente", "Monfardini", "Moniz", "Monstans",
    "Montanaro", "Monteiro", "Montemor", "Montezano", "Moraes", "Morais", "Moreira", "Morelo", "Moresco", "Morgan",
    "Mork", "Moro", "Morosini", "Mortensdatter", "Mortensen", "Moschon", "Moscon", "Moser", "Mosquini", "Mosso",
    "Moulin", "Moura Filho", "Moura", "Mozer", "Muniz", "Muraro", "Muscareli", "Mutk", "Mørch", "Mørk",
    "Nacaratti", "Nagem", "Nakamurada", "Nalli", "Napoleão", "Nascimento", "Nassar", "Nelson", "Nerg", "Neto",
    "Netto", "Neves", "Nicole", "Nicoli", "Nicolini", "Nielsdatter", "Nielsen", "Nielson", "Nogueira", "Noronha",
    "Nosè", "Novaes", "Novais", "Novo", "Nucci", "Nunes", "Néspoli", "Ockerman", "Ogura", "Oinhos",
    "Olausdatter", "Olausen", "Olerdatter", "Olimpio", "Oliveira", "Oliveria", "Olsdatter", "Olsen", "Onhas", "Orechio",
    "Orelio", "Orletti", "Ormo", "Orsato", "Osthed", "Ostigui Domingue", "Ostiguy Domingue", "Ostitty", "Ostity Domingue", "Pacheca",
    "Pacheco", "Pachequa", "Paes", "Pagani", "Pagiola", "Pagot", "Pagoto", "Pagotto", "Paiva", "Paixão",
    "Pajot", "Palermo", "Palù", "Pancini", "Pancot", "Pandini", "Panhoca", "Pantaroto", "Paoliello", "Parent",
    "Parente", "Paresque", "Paresqui", "Pariz", "Partelli", "Pasca", "Pase", "Pasocco", "Passamani", "Passos",
    "Pasti", "Pastore", "Patricio", "Paulina", "Paulo", "Pauluccio", "Pavan", "Pazeto", "Pazetto", "Pazini",
    "Pedarccini", "Pedersdatter", "Pedersen", "Pedrazini", "Pedrosa", "Pedroza", "Pegovaro", "Peira", "Peixoto", "Penha",
    "Penido", "Penna", "Peppelenbos", "Perdigão", "Perdoná", "Pereira", "Peretti", "Pereyra", "Perez", "Perim",
    "Perin", "Periordi", "Perizin", "Perlatti", "Peroni", "Perota", "Perreira", "Perreyra", "Peruchi", "Pesca",
    "Pescador", "Pessali", "Pessanha", "Pessot", "Peterele", "Peterle", "Peterli", "Pezzin", "Piai", "Piaj",
    "Piana", "Pianassole", "Pianessola", "Pianessoli", "Pianessolil", "Pianezolla", "Pianezzola", "Pianissoli", "Piasentin", "Piassarolli",
    "Piassi", "Piazzarollo", "Piccin", "Pierri", "Pilati", "Pilato", "Pillon", "Pin", "Pinheiro", "Pino",
    "Pinto", "Piovezan", "Pires", "Pissin", "Pitanga", "Pizetta", "Pizzeta", "Pizzol", "Plotegher", "Polesel",
    "Polez", "Poli", "Polinini", "Pollini", "Polloni", "Poloni", "Pontara", "Pontes", "Portilio", "Porto",
    "Possebon", "Pozinni", "Praba", "Prado", "Prata", "Prates", "Prati", "Pravato", "Premero", "Premoli",
    "Preta", "Prieto Garcia", "Provendel", "Puppim", "Pêgas", "Quaresma", "Quartezani", "Queiroz", "Quinelato", "Quirino",
    "Rabello", "Rabelo", "Ragazzi", "Ragazzo", "Rago", "Ramiro", "Ramos", "Rangel", "Raposo", "Rasmusdatter",
    "Rasmusen Tyrne", "Rasmusen", "Rasmussen", "Rassato", "Rauta", "Razal", "Regiani", "Reinehr", "Reis", "Renzo",
    "Renão", "Resolen", "Rezende", "Riatto", "Ribeira", "Ribeiro", "Ricarte", "Righetti", "Rigo", "Rigon",
    "Rigone", "Rigotto", "Riguetto", "Rio", "Rios", "Rissari", "Rissi", "Rivero", "Rizatto", "Rizenente",
    "Rizzato", "Rizzo", "Roberto", "Rocha", "Rochetti", "Rochite", "Rodrigues", "Rodriques", "Rogério", "Romanholi",
    "Romanini", "Romão", "Roncheti", "Ronqueti", "Roriz", "Rosa", "Rosalina", "Rosas", "Rossato", "Rossi",
    "Rossim", "Rossoni", "Roza", "Rozario", "Rubens", "Rufino", "Rugero", "Rui", "Réboli", "Rúbia",
    "Sa", "Sagers", "Saiter", "Sala", "Sales", "Salgado", "Salles", "Salome", "Salomão", "Salvador",
    "Salvago", "Sanavia", "Sancao", "Sandri", "Sandrini", "Sangali", "Sangalli", "Sanson", "Sansão", "Sant'Anna",
    "Santa Ana", "Santiago", "Santori", "Santos", "Sara", "Sarnaglia", "Sartori", "Sartório", "Sbetti", "Scalpelli",
    "Scanferla", "Scarabel", "Scaramussa", "Scaramuzza", "Scarcinelli", "Schael", "Scharra", "Schbert", "Schioter", "Schneider",
    "Schulthais", "Scoot", "Scott", "Scotte", "Scudeler", "Seccom", "Segrini", "Seguro", "Selva", "Selvatici",
    "Seraco", "Serafim", "Serata", "Sesconeto", "Sgario", "Sgulmaro", "Shael", "Shibuya", "Shoel", "Shonio",
    "Siciliano", "Silotti", "Silva", "Simoes", "Simon", "Simonato", "Sipolatti", "Siqueira", "Smith", "Soares",
    "Soave", "Sobrinho", "Sodre", "Soella", "Solda'", "Soldan", "Somera", "Sossai detto Pegorer", "Sossai", "Sousa",
    "Souza", "Spadeto", "Sperandio", "Speranza", "Sperotto", "Spigolon", "Stebenne", "Steele", "Stefani", "Stein",
    "Stelzer", "Strabelli", "Stradiotto", "Stringuine", "Strozzi", "Suave", "Svendsdatter", "São Pedro", "Sørensdatter", "Sørensen",
    "Tagliaferro", "Targa", "Tassinari", "Taufner", "Tavares", "Taylor", "Tedesco", "Tedoldi", "Teganhe", "Teixeira",
    "Teles", "Tessaro", "Tessinari", "Teves", "Thiago", "Thirine", "Thomaz", "Tiborcio", "Toledo", "Tolfano",
    "Tomasi", "Tomasine", "Tomasini", "Tomé", "Ton", "Tonet", "Toneto", "Tonin", "Tonoli", "Tonon",
    "Torres", "Tosi", "Toste", "Tostes", "Tovar", "Toze", "Tozi", "Tozzi", "Toè", "Trabach",
    "Trancho", "Travaglia", "Trave", "Tres", "Trevisan", "Trindade", "Tripeno", "Tristão", "Trombini", "Tsuchiya",
    "Turbian", "Turra", "Uliana", "Ultramar", "Urbino", "Vaccari", "Vadagnin", "Valani", "Valdino", "Valiate",
    "Valiati", "Valiatti", "Valle", "Valoto", "Vanni", "Vantil", "Vanzan", "Varella", "Vargas", "Vasconcelos",
    "Vasoler", "Vaz", "Vekar", "Veloso", "Vendermiatti", "Ventura", "Venturim", "Venturin", "Venturini", "Vereza",
    "Verret", "Vertuane", "Vervloet", "Vescovi", "Vetorazzi", "Viale", "Viana", "Vianna", "Vicente", "Vida",
    "Vidotti", "Viebrantz", "Vieira", "Viens", "Vilar", "Villa Nova", "Villares da Costa", "Villares", "Villela", "Vinco",
    "Vitorazzi", "Vivaldi", "Volpato", "Volponi", "Voluzia", "Vugarato", "Wainer", "Walker", "Wallory", "Wandermurem",
    "Warner", "Wash", "Watanabe", "Weiss", "Werner", "Woodward", "Xavier", "Zacchi", "Zaganelli", "Zaia",
    "Zambon", "Zamparoni", "Zampiroli", "Zampirolli", "Zampirollo", "Zanardo", "Zanata", "Zanatta", "Zancanela", "Zanchetin",
    "Zanchetta", "Zandonadi", "Zanelato", "Zanellato", "Zanette", "Zanetti", "Zanichelli", "Zanol", "Zanon", "Zanoni",
    "Zantonelli", "Zardo", "Zavarise", "Zavarize", "Zerbone", "Zerboni", "Zicardi", "Ziviani", "Zocatelli", "Zoppi",
    "Zorzal", "Zorzanelli", "Zucatelli", "Zuchi", "Zucoloto", "Zulianni", "Zuqui", "da Camara", "da Conceicao", "da Costa", "da Cunha",
    "da Dalt", "da Fraga", "da Gama", "da Gloria", "da Pacciani", "da Rocha", "da Rosa", "da Silva", "da Silveira", "de Abreu",
    "de Agnoi de Angeli", "de Agnoi", "de Aguiar", "de Albergaria", "de Albernas", "de Albernaz", "de Almada", "de Almeida", "de Almeyda", "de Alvarenga",
    "de Andrade", "de Andrades", "de Angeli Neto", "de Angeli", "de Arajuo", "de Araújo", "de Assis", "de Avila", "de Ayrosa", "de Azebedo",
    "de Azedias", "de Azeredo", "de Azevedo", "de Barcellos", "de Barros", "de Biasi", "de Brito", "de Candia", "de Carvalho", "de Castro",
    "de Chaves", "de Conto", "de Deus", "de Faria", "de Farias", "de Figueiredo", "de Freitas", "de Godoy", "de Gois", "de Gouvea",
    "de Góes", "de Jesus", "de Jeus", "de Kardin", "de Lemos", "de Lima", "de Magalhães", "de Marchi", "de Martin", "de Martins",
    "de Matos", "de Mattos", "de Mello", "de Melo", "de Mendonça", "de Moraes", "de Mori", "de Moura", "de Nadai", "de Nardi",
    "de Oliveira", "de Olivença", "de Oliveria", "de Oliviera", "de Osti", "de Paiva", "de Palma", "de Paoli", "de Paula", "de Pierro",
    "de Poli", "de Queiroz", "de Queirós", "de Sa", "de Siqueira", "de Sousa", "de Souza", "de Stefani", "de São Thomé", "de Vargas",
    "de Vasconcelos", "de Vecchi", "de Zan", "di Balliana", "di Barrel", "di Boscarato", "di Girolamo", "do Amparo", "do Bom Sucesso", "do Bonfim",
    "do Carmo", "do Couto", "do Espírito Santo", "do Lago", "do Prado", "do Rosário", "do Sacramento", "dos Reis", "dos Santos", "du Pin",
    "e Almeida", "Álvares"];

const masculinos = ["Aarã", "Adriano", "Afonso", "Alan", "Alexander", "Alexandre", "Anderson", "André", "António", "Antônio",
    "Aquiles", "Arthur", "Artur", "Augusto", "Benjamim", "Benjamin", "Bernardo", "Bernardo", "Bruno", "Bruno",
    "Bryan", "Bryan", "Caio", "Caio", "Calebe", "Carlos", "Cauã", "Cristiano", "César", "Daniel",
    "Daniel", "Danilo", "Davi Lucas", "Davi Luiz", "Davi", "David", "Diego", "Diogo", "Douglas", "Duarte",
    "Edgar", "Eduardo", "Eduardo", "Emanuel", "Emanuel", "Enzo Gabriel", "Enzo", "Enzo", "Fabrício", "Felipe",
    "Felipe", "Fernando", "Filipe", "Flávio", "Francisco", "Francisco", "Frederico", "Fábio", "Gabriel", "Gabriel",
    "Guilherme", "Guilherme", "Gustavo", "Gustavo", "Heitor", "Heitor", "Henrique", "Henrique", "Hugo", "Ian",
    "Igor", "Isaac", "Ivan", "Joaquim", "Joaquim", "Jonas", "Jonathan", "Jorge", "José", "João Gabriel",
    "João Miguel", "João Pedro", "João Vitor", "João", "João", "Juliano", "Júlio", "Kelvin", "Kevin", "Leandro",
    "Leonardo", "Leonardo", "Levi", "Lorenzo", "Lorenzo", "Lourenço", "Lucas", "Lucas", "Lucca", "Luis",
    "Manuel", "Marcelo", "Marco", "Marcos", "Martim", "Mateus", "Matheus", "Maurício", "Michael", "Miguel",
    "Miguel", "Muriel", "Murilo", "Nicolas", "Nicolas", "Octávio", "Otávio", "Pablo", "Paulo", "Pedro Henrique",
    "Pedro", "Pedro", "Pietro", "Rafael", "Rafael", "Ramom", "Raul", "Renan", "Renato", "Ricardo",
    "Rodrigo", "Rodrigo", "Samuel", "Samuel", "Santiago", "Theo", "Theo", "Thiago", "Tiago", "Tomás",
    "Valentim", "Vicente", "Victor", "Vinicios", "Vinicius", "Vitor", "Wilian", "Yuri", "Álvaro", "Ângelo"];

const femininos = ["Abigail", "Agatha", "Alana", "Alice", "Aline", "Alícia", "Amanda", "Ana Beatriz", "Ana Clara", "Ana Julia",
    "Ana Luiza", "Ana Maria", "Ana", "Anabela", "Anita", "Ariana", "Ariela", "Artemis", "Aurora", "Beatriz",
    "Bianca", "Brenda", "Bruna", "Bárbara", "Camila", "Carol", "Carolina", "Catarina", "Cecília", "Clara",
    "Clarissa", "Clarisse", "Cloe", "Daniela", "Diana", "Débora", "Eduarda", "Elisa", "Emanuela", "Emanuelle",
    "Emanuelly", "Estela", "Ester", "Esther", "Eva", "Fernanda", "Gabriela", "Gabrielly", "Giovana", "Giovanna",
    "Helena", "Heloísa", "Iara", "Ingrid", "Isa", "Isabel", "Isabella", "Isabelly", "Isadora", "Isis",
    "Jade", "Jessica", "Joana", "Julia", "Juliana", "Júlia", "Karen", "Kelly", "Laila", "Lara",
    "Larissa", "Laura", "Lavínia", "Laís", "Leticia", "Letícia", "Lia", "Lis", "Lorena", "Luana",
    "Luisa", "Luiza", "Lívia", "Maitê", "Manuela", "Marcela", "Maria Clara", "Maria Eduarda", "Maria Fernanda", "Maria Luiza",
    "Maria", "Mariana", "Marina", "Maísa", "Melissa", "Micaela", "Milene", "Natália", "Nicole", "Olívia",
    "Paloma", "Pamela", "Patrícia", "Pietra", "Priscila", "Rafaela", "Raquel", "Rebeca", "Sabrina", "Sara",
    "Sarah", "Sofia", "Sophia", "Talita", "Taís", "Valentina", "Vitória", "Yara", "Yasmin", "Yasmine",
    "Ágata", "Érica", "Íris"];

/**
 * Função para gerar um nome aleatório com sobrenomes e informações de gênero.
 *
 * @returns {object} - Um objeto contendo o nome, sobrenome e gênero gerados aleatoriamente.
 *                    A estrutura do objeto é: { nome: string, sobrenome: string, genero: string }
 */
export function gerarNome() {
    // Gera um número aleatório para representar o gênero (0 para feminino, 1 para masculino)
    const genero = Math.floor(Math.random() * 2);

    // Seleciona um nome aleatório com base no gênero escolhido
    const nome = genero === 0
        ? femininos[Math.floor(Math.random() * femininos.length)]
        : masculinos[Math.floor(Math.random() * masculinos.length)];

    // Define quantos sobrenomes serão incluídos (pelo menos um sobrenome)
    const qtSobrenomes = Math.floor(Math.random() * 2) + 1;

    // Gera o sobrenome adicionando o número correto de sobrenomes aleatórios
    let sobrenome = "";
    for (let x = 0; x < qtSobrenomes; x++) {
        sobrenome += ` ${sobrenomes[Math.floor(Math.random() * sobrenomes.length)]}`;
    }

    // Define o gênero como uma string (feminino ou masculino)
    const generoStr = genero === 0 ? "feminino" : "masculino";

    // Retorna o objeto contendo o nome, sobrenome e gênero gerados aleatoriamente
    return {
        nome: nome,
        sobrenome: sobrenome.trim(), // Remove espaços em branco do início e fim do sobrenome
        genero: generoStr,
    };
}

/**
 * Função para gerar um nome aleatório com sobrenomes e informações de gênero.
 * É uma exportação padrão para permitir que a função seja importada por meio de um nome personalizado.
 *
 * @returns {object} - Um objeto contendo o nome, sobrenome e gênero gerados aleatoriamente.
 *                    A estrutura do objeto é: { nome: string, sobrenome: string, genero: string }
 */
export default gerarNome;
