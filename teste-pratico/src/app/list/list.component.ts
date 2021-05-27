import { Component, OnInit } from '@angular/core';
// import { Client } from '../../model/client'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  clients = [
    {
      "nome": "Osvaldo Rodrigo Ryan Ramos",
      "cpf": "61867341611",
      "email": "osvaldorodrigoryanramos-75@bassanpeixoto.adv.br",
      "cep": "77823660",
      "endereco": "Avenida Cônego João Lima",
      "numero": 474,
      "bairro": "Loteamento Pedro Borges",
      "cidade": "Araguaína",
      "estado": "TO",
      "telefone": "63982090406",
    },
    {
      "nome": "Silvana Alice da Conceição",
      "cpf": "19709106740",
      "email": "silvanaalicedaconceicao-90@danielsalla.com.br",
      "cep": "22783180",
      "endereco": "Rua Santo Antônio",
      "numero": 930,
      "bairro": "Vargem Pequena",
      "cidade": "Rio de Janeiro",
      "telefone": "21982062160",
    },
    {
      "nome": "Henry Augusto Ramos",
      "cpf": "26833049009",
      "email": "henryaugustoramos..henryaugustoramos@debiasi.com.br",
      "cep": "69092255",
      "endereco": "Rua Angico-do-Campo",
      "numero": 666,
      "bairro": "Nova Cidade",
      "cidade": "Manaus",
      "estado": "AM",
      "telefone": "92995519811",
    },
    {
      "nome": "Elisa Heloise Adriana Viana",
      "cpf": "41903894042",
      "email": "elisaheloiseadrianaviana..elisaheloiseadrianaviana@aedu.com",
      "cep": "79022060",
      "endereco": "Rua Santa Bárbara",
      "numero": 681,
      "bairro": "Vila Rica",
      "cidade": "Campo Grande",
      "estado": "MS",
      "telefone": "67989911884",
    },
    {
      "nome": "André Gabriel Geraldo Moreira",
      "idade": 62,
      "cpf": "14806984310",
      "email": "aandregabrielgeraldomoreira@microdoc.com.br",
      "cep": "65010390",
      "endereco": "Vila Margarida",
      "numero": 225,
      "bairro": "Centro",
      "cidade": "São Luís",
      "estado": "MA",
      "telefone": "98982858308",
    },
    {
      "nome": "Enzo Geraldo Cavalcanti",
      "cpf": "31516457200",
      "email": "enzogeraldocavalcanti__enzogeraldocavalcanti@cbsdobrasil.com.br",
      "cep": "69053030",
      "endereco": "Avenida Rio Madeira",
      "numero": 223,
      "bairro": "Nossa Senhora das Graças",
      "cidade": "Manaus",
      "estado": "AM",
      "telefone": "92986244322",
    },
    {
      "nome": "Gabriela Tânia Porto",
      "cpf": "89004536884",
      "email": "gabrielataniaporto..gabrielataniaporto@lnaa.com.br",
      "cep": "58700045",
      "endereco": "Travessa Inácio da Catingueira",
      "numero": 965,
      "bairro": "Centro",
      "cidade": "Patos",
      "estado": "PB",
      "telefone": "83985856903",
    },
    {
      "nome": "Sebastião Theo Almada",
      "cpf": "80575166584",
      "email": "sebastiaotheoalmada_@caporal.biz",
      "senha": "4SzcBZorEJ",
      "cep": "59132540",
      "endereco": "Rua do Garimpo",
      "numero": 545,
      "bairro": "Pajuçara",
      "cidade": "Natal",
      "estado": "RN",
      "telefone": "84981527847",
    },
    {
      "nome": "Patrícia Yasmin Pereira",
      "cpf": "54817601426",
      "email": "ppatriciayasminpereira@sercoti.com.br",
      "cep": "58081264",
      "endereco": "Rua Antonio Joaquim de Couto",
      "numero": 566,
      "bairro": "Costa e Silva",
      "cidade": "João Pessoa",
      "estado": "PB",
      "telefone": "83985624046",
    },
    {
      "nome": "Andrea Esther da Silva",
      "cpf": "62596532395",
      "email": "andreaestherdasilva-96@edu.uniso.br",
      "cep": "68746130",
      "endereco": "Travessa Alfredo Alves Rodrigues",
      "numero": 413,
      "bairro": "Jaderlândia",
      "cidade": "Castanhal",
      "estado": "PA",
      "telefone": "91988641479",
    },
    {
      "nome": "Manuel Cauã Ramos",
      "cpf": "94268406301",
      "email": "manuelcauaramos..manuelcauaramos@betti.com.br",
      "cep": "83210316",
      "endereco": "Rua Sete",
      "numero": 551,
      "bairro": "Jardim Iguaçu",
      "cidade": "Paranaguá",
      "estado": "PR",
      "telefone": "41997289552",
    },
    {
      "nome": "Lucas Benjamin Alves",
      "cpf": "70998854131",
      "email": "lucasbenjaminalves__lucasbenjaminalves@debiasi.com.br",
      "cep": "95057600",
      "endereco": "Rua das Tintas",
      "numero": 250,
      "bairro": "Mariland",
      "cidade": "Caxias do Sul",
      "estado": "RS",
      "telefone": "54997727180",
    },
    {
      "nome": "Ayla Emanuelly Brenda Souza",
      "cpf": "37500319320",
      "email": "aaylaemanuellybrendasouza@clinicasilhouette.com.br",
      "cep": "76963502",
      "endereco": "Rua Ji Paraná",
      "numero": 253,
      "bairro": "Jardim Clodoaldo",
      "cidade": "Cacoal",
      "estado": "RO",
      "telefone": "69983761711",
    },
    {
      "nome": "Sérgio Erick Almeida",
      "cpf": "51227409508",
      "email": "ssergioerickalmeida@gmalato.com.br",
      "cep": "76961758",
      "endereco": "Avenida Primavera",
      "numero": 996,
      "bairro": "Conjunto Halley",
      "cidade": "Cacoal",
      "estado": "RO",
      "telefone": "69984014135",
    },
    {
      "nome": "Ester Andrea Cláudia Assis",
      "cpf": "67978392970",
      "email": "esterandreaclaudiaassis..esterandreaclaudiaassis@ozsurfing.com.br",
      "cep": "64600026",
      "endereco": "Rua Francisco Prota",
      "numero": 353,
      "bairro": "Centro",
      "cidade": "Picos",
      "estado": "PI",
      "telefone": "89996482209"
    }
  ]

  constructor() {}
  ngOnInit(): void {}
}