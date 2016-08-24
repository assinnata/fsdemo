
// Da qui sotto è possibile generare il menu
$(document).ready(function(){


	// Menu di destra

  $("#menu-container2").generate({
 options:{
      id:"MenuHome2",
      title:"",
      visible:true,
    },
	"<span class='icon-archivio text-home'></span> Archivio":function(){
		$("#content-loader").load("index.html");   // questo torna sempre alla HOME
      },
	"<span class='icon-messaggi text-home'></span> Messaggi":function(){
		$("#content-loader").load("index.html");   // questo torna sempre alla HOME
      },
	 "<span class='icon-rubrica text-home'></span> Rubrica contatti":function(){
		$("#content-loader").load("index.html");   // questo torna sempre alla HOME
      },
	// area conti e carte
	 imieistrumenti:{
		 options:{
			id:"imieistrumenti",
			title:"<span class='icon-strumenti text-conti'></span>I miei strumenti",
		 },
		  'Visualizzazione iban':function(){
			$("#content-loader").load("interna.html");
		  },
		   'Firma elettronica avanzata (FEA)':function(){
			$("#content-loader").load("interna.html");
		  },
		   'Trasferimento titoli':function(){
			$("#content-loader").load("interna.html");
		  },
		   'Strong Authentication':function(){
			$("#content-loader").load("interna.html");
		  },
    },
	gestionesicurezza:{
    options:{
        id:"gestionesicurezza",
        title:"<span class='icon-investimenti text-investimenti'></span>Gestione sicurezza",
    },
	  'Modifica codici di accesso':function(){
		$("#content-loader").load("interna.html");
	  },
	   'Blocco e riemissione codici':function(){
		$("#content-loader").load("interna.html");
	  },
	   'Blocco carte':function(){
		$("#content-loader").load("interna.html");
	  },
	   'MasterCard Securecode':function(){
		$("#content-loader").load("interna.html");
	  },
	   'Contatti e alert':function(){
		$("#content-loader").load("interna.html");
	  },
	   'Attivazione rapporto':function(){
		$("#content-loader").load("interna.html");
	  },
    },
	gestioneprofilo:{
    options:{
      id:"gestioneprofilo",
      title:"<span class='icon-finanziamenti text-finanziamenti'></span>Gestione profilo",
    },
	   'I miei dati':function(){
		$("#content-loader").load("interna.html");
	  },
	   'I miei prodotti':function(){
		$("#content-loader").load("interna.html");
	  },
	   'Il tuo profilo Mifid':function(){
		$("#content-loader").load("interna.html");
	  },
	   'I tuoi consensi privacy':function(){
		$("#content-loader").load("interna.html");
	  },
    }
  })

  
  // Menu di sinistra
  
  $("#menu-container").generate({
    options:{
      id:"MenuHome",
      title:"",
      visible:true,
    },
	"<span class='icon-home text-home'></span> Homepage":function(){
		$("#content-loader").load("index.html");   // questo torna sempre alla HOME
      },
	  
// INIZIO area conti e carte
	 ContieCarte:{
		 options:{
			id:"contiecarte_id",
			title:"<span class='icon-conti text-conti'></span>Conti e Carte",
		 },
		  'Pagina interna':function(){
			$("#content-loader").load("interna.html");
		  },
	// INIZIO dropdown 
		 'Test <span class="arrow-down nome"></span>':function(){
			$(".nome").toggleClass('active');
			$("span.nome").toggleClass('arrow-up');
			$("span.nome").toggleClass('arrow-down');
		  },
			'drop1':{
			options:{
			  id:"drop1",
				title:"drop1",
				li: "nome dropdown-single"
			},
			'Ultima foglia 1':function(){},
			'Ultima foglia 2':function(){},
			'Ultima foglia 3':function(){},
			'Ultima foglia 4':function(){},
		  },
		  	'drop2':{
			options:{
			  id:"drop2",
				title:"drop2",
				li: "nome dropdown-single"
			},
			'Ultima foglia 1':function(){},
			'Ultima foglia 2':function(){},
			'Ultima foglia 3':function(){},
			'Ultima foglia 4':function(){},
		  },
		  	'drop3':{
			options:{
			  id:"drop3",
				title:"drop3",
				li: "nome dropdown-single"
			},
	// FINE dropdown 
			'Ultima foglia 1':function(){},
			'Ultima foglia 2':function(){},
			'Ultima foglia 3':function(){},
			'Ultima foglia 4':function(){},
		  },
		  'Lorem ipsum':{
			options:{
			  id:"voce2",
				title:"mettimi"
			},
			'Ultima foglia 1':function(){},
			'Ultima foglia 2':function(){},
			'Ultima foglia 3':function(){},
			'Ultima foglia 4':function(){},
		  },
    },
// FINE area conti e carte

// INIZIO area investimenti
	RisparmioEInvestimenti:{
    options:{
        id:"rispamrioeinvestimenti_id",
        title:"<span class='icon-investimenti text-investimenti'></span>Risparmio e investimenti",
    },
      sjihos:function(){
        alert("nope")
      }
    },
// FINE area investimenti

// INIZIO area Finanziamenti
	Finanziamenti:{
    options:{
      id:"finanziamenti_id",
      title:"<span class='icon-finanziamenti text-finanziamenti'></span>Finanziamenti",
    },
      sjihos:function(){
        alert("nope")
      }
    },
// FINE area Finanziamenti

// INIZIO area Assicurazioni
	'Assicurazioni':{
    options:{
      id:"assicurazioni_id",
      title:"<span class='icon-assicurazioni text-assicurazioni'></span>Assicurazioni",
	  li:"abracadabra djhijhgaedn  kjhsa"
    },
      sjihos:function(){
        alert("nope");
      }
    },
// FINE area Assicurazioni

  })
  

	 $('#MenuHome').append( '<ul class="external-pages"><li><a href="https://www.chebanca.it/wps/wcm/connect/istituzionale/footer/sicurezza" target="_blank"  >Sicurezza</a></li><li><a href="https://www.chebanca.it/wps/wcm/connect/istituzionale/footer/trasparenza" target="_blank"  >Trasparenza</a></li><li><a href="https://www.chebanca.it/wps/wcm/connect/istituzionale/footer/privacy" target="_blank"  >Responsabili Privacy</a></li><li><a href="https://www.chebanca.it/wps/wcm/connect/istituzionale/footer/mappa-sito" target="_blank"  >Mappa del sito</a></li><li><a href="https://www.chebanca.it/wps/wcm/connect/istituzionale/footer/dati-societari" target="_blank"  >Dati societari</a></li><li><a href="https://www.chebanca.it" target="_blank"  >Esplora chebanca.it</a></li></ul><p class="phone-numbers">Dall Italia: <em>800 10 10 30</em><br>Dall estero: <em>+39 02 32004141</em></p>' );

})
