const steps = [
	{
		"step": "1",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "Hvilket af disse navne spillede IKKE på Roskilde Festival i 2014, Rolling Stones, Coldplay eller Stevie Wonder?",
					"buttons": [
						{
							"type": "postback",
							"title": "Rolling Stones",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Coldplay",
							"payload": "2"
						},
						{
							"type": "postback",
							"title": "Stevie Wonder",
							"payload": "INCORRECT"
						}
					]
				}
			}
		}
	},
	{
		"step": "2",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "Hvilket flyselskab tilhørte flyet, der den 17. Juli 2014 blev skudt ned over Ukraine?",
					"buttons": [
						{
							"type": "postback",
							"title": "KLM",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Air China",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Malaysia Airlines",
							"payload": "3"
						}
					]
				}
			}
		}
	},
	{
		"step": "3",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": 'Hvilket land vandt det Europæiske Melodi Grand Prix i 2014 med sangen "Rise Like A Phoenix"?',
					"buttons": [
						{
							"type": "postback",
							"title": "Ungarn",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Østrig",
							"payload": "4"
						},
						{
							"type": "postback",
							"title": "Ukraine",
							"payload": "INCORRECT"
						}
					]
				}
			}
		}
	},
	{
		"step": "4",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "Hvor måtte regeringschefen Aleqa Hammond i 2014 trække sig på grund af overforbrug af offentlige midler?",
					"buttons": [
						{
							"type": "postback",
							"title": "Estland",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Finland",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Grønland",
							"payload": "5"
						}
					]
				}
			}
		}
	},
	{
		"step": "5",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "I 2014 begyndte den hidtil værste epidemi af den dødelige sygdom Ebola. Hvad er sygdommen opkaldt efter?",
					"buttons": [
						{
							"type": "postback",
							"title": "En spansk Læge",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "En flod i DR Congo",
							"payload": "6"
						},
						{
							"type": "postback",
							"title": "En by i Sierra Leone",
							"payload": "INCORRECT"
						}
					]
				}
			}
		}
	},
	{
		"step": "6",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "Hvem var dansk Udenrigsminister den 1. januar 2014?",
					"buttons": [
						{
							"type": "postback",
							"title": "Villy Søvndal",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Martin Lidegaard",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Holger K. Nielsen",
							"payload": "7"
						}
					]
				}
			}
		}
	},
	{
		"step": "7",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "Hvem vandt verdensmesterskabet i fodbold afholdt i Brasilien i 2014?",
					"buttons": [
						{
							"type": "postback",
							"title": "Tyskland",
							"payload": "8"
						},
						{
							"type": "postback",
							"title": "Holland",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Argentina",
							"payload": "INCORRECT"
						}
					]
				}
			}
		}
	},
	{
		"step": "8",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "En milepæl indenfor rumfart blev nået i 2014, da det lykkedes for første gang at lande et rumfartøj på ...",
					"buttons": [
						{
							"type": "postback",
							"title": "En komet",
							"payload": "9"
						},
						{
							"type": "postback",
							"title": "Mars",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Jupiter",
							"payload": "INCORRECT"
						}
					]
				}
			}
		}
	},
	{
		"step": "9",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "Hvem har været chefdirigent for DR Underholdningsorkesteret i 2014?",
					"buttons": [
						{
							"type": "postback",
							"title": "Fabio Luisi",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Michael Schønwandt",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Adam Fischer",
							"payload": "10"
						}
					]
				}
			}
		}
	},
	{
		"step": "10",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "I 2014 var der premiere på Ole Bornedals TV-serie om 1864. Hvad var prisen for TV-produktionen?",
					"buttons": [
						{
							"type": "postback",
							"title": "123 mio kroner",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "173 mio kroner",
							"payload": "11"
						},
						{
							"type": "postback",
							"title": "73 mio kroner",
							"payload": "INCORRECT"
						}
					]
				}
			}
		}
	},
	{
		"step": "11",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "I 2014 blev Margrethe Vestager ny dansk EU-kommisær. Hvad blev hun komissær for?",
					"buttons": [
						{
							"type": "postback",
							"title": "Konkurrence",
							"payload": "12"
						},
						{
							"type": "postback",
							"title": "Miljø",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Økonomi",
							"payload": "INCORRECT"
						}
					]
				}
			}
		}
	},
	{
		"step": "12",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": "Hvilken film vandt prisen som 'Bedste film' ved Oscar-uddelingen i 2014?",
					"buttons": [
						{
							"type": "postback",
							"title": "12 Years a Slave",
							"payload": "13"
						},
						{
							"type": "postback",
							"title": "American Hustle",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Gravity",
							"payload": "INCORRECT"
						}
					]
				}
			}
		}
	},
	{
		"step": "13",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "button",
					"text": 'Hvilken sanger havde i 2014 et stort hit med nummeret "Happy"?',
					"buttons": [
						{
							"type": "postback",
							"title": "Pharrell Williams",
							"payload": "DONE"
						},
						{
							"type": "postback",
							"title": "Katy Perry",
							"payload": "INCORRECT"
						},
						{
							"type": "postback",
							"title": "Sam Smith",
							"payload": "INCORRECT"
						}
					]
				}
			}
		}
	},
	{
		"step": "DONE",
		"content": {
			"text": 'Wow. Alle rigtige! Sådan! Jeg har ikke flere spørgsmål til dig i denne omgang. Tak for nu.'
		}
	},
	{
		"step": "SHARE",
		"content": {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "generic",
					"elements": [
						{
							"title": 'Alle rigtige!',
							"subtitle": 'Jeg har lige testet min viden i den hårdeste quiz.',
							"image_url": 'https://image.shutterstock.com/display_pic_with_logo/1998197/370349945/stock-photo-king-of-style-sneering-young-handsome-man-wearing-suit-and-crown-keeping-arms-crossed-and-looking-370349945.jpg',
							"buttons": [
	              {
	                "type":"element_share"
	              }
	            ]
						}
					]
				}
			}
		}
	},
	{
		"step": "INCORRECT",
		"content": {
			"text": 'Det var desværre forkert, min ven. Du kan altid starte forfra ved at skrive: "Kweez".'
		}
	}
];

module.exports = steps;
