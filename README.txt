Készítő: Leyrer Balázs Valentin
Befejezés dátuma: 2023.06.19

FELHASZNÁLÓI DOKUMENTÁCIÓ:

Cél: Egy olyan oldal létrehozása, ahol csak a meglévő ember tud felvenni új csatlakozót, de
     anonim módon lehetőség van kérdés feltételére mint a gyakorikérdéseken. És a tagok
     akiket meg lehet nézni kik azok tudnak rá adni választ névvel.  Van egy csatlakozás fül
     mely leírja hogyan nyerhet felvételt az illető. A felhasználóknak lehetőségüók van
     az új tag felvételén kívül, profilképet és jelszót valamint rólam leírást változtatni.
     Egy kérdést meg tud válaszolni vagy ha értelmetlen akkor törölni. És logol az oldal
     a /backend/log.txt-be és a terminál/console-ra is.
Telepítés:
	1. Node.js telepítése gépre
	2. Backend és frontend mappában cmd-ben kiadni az npm install parancsot

Elindítani:
	.../backend>node ./server.js

-----------------

FEJLESZTŐI DOKUMENTÁCIÓ

ÖSSZEFOGLALÁS:
Technikai információk:
	Frontend egy React app mivel tesztelés céljából így könnyebb volt fejleszteni
	a frontend részét. 
		Modulok melyeket használ ezeken felül a frontend:
			axios
			react-icons
	A backend egy node.js alapjain nyugszik, minden modul-t amelyet használ
	kézileg telepítettem fel.
		Modulok melyeket a backend használ:
			express
			path
			body-parser
			crypto
			mongoose

SZERKEZET:
	Fájlstruktúra:
		backend
			functions
				date.js
				log.js
				mongoose.js
			models
				questions.js
				useres.js
			node_modules/...
			log.txt
			package-lock.json
			package.json
		frontend
			build
				static/...
				asset-maifest.json
				index.html
				robots.txt
			node_modules/...
			public
				index.html
				maifest.json
				robots.txt
			src
				components
					Bejelentkezes.js
					Csatlakozas.js
					FeltettKerdesek.js
					Kersedfelteves.js
					Menu.js
					Plakat.js
					Profil.js
					Tagok.js
				datas
					plakatok.json
				imgs
					def.jpg
					logo.jpg
				styles
					app.css
					menu.css
					plakat.css
					tagok.css
				App.js
				context.js
				index.js
				MainSite.js
			.gitignore
			package-lock.json
			package.json
		package-lock.json
		package.json
		README.txt

ADATBÁZIS:
A weboldal mongoose adatbázist használ melyben collecion-okben tárolja a dokumentumokat.
	Collections:
		users
			Egy dokumentum szerkezete:
				_id : int,
				name: string,
				username: string,
				img: string (base64),
				about: string,
				password: string (md5 hash)
		questions
			Egy dokumentum szerkezete:
				_id : int,
				question: string,
				answer: string,
				answerer: string

MODOSÍTÁSRA:
Modosítás esetén ha frontendben történik:
	frontend mappában álva a következő parancsokkal lehet frissiteni:
		npm run build
	ezturán a backend mappába a 
		node ./server.js
	paranccsal már fut is
Módosítás esetén ha a backendben történik:
	backend mappában állva a futó folyamatot (ctrl+c) (ha megy) le kell állítani
	(majd) elindítani a következő paranccsal:
		node ./server.js
