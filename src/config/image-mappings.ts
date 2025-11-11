import { getContentImage } from '../utils/content-loader';

const img = (city: string, subfolder: string, filename: string) => 
  getContentImage(city, subfolder, filename);

export const agraImages = {
  hero: img('agra', 'places to visit', 'Taj Mahal .jpg'),
  dishes: [
    img('agra', 'dishes', 'petha.1.jpg'),
    img('agra', 'dishes', 'petha.2.jpg'),
    img('agra', 'dishes', 'bedai-and-jalebi.jpg'),
    img('agra', 'dishes', 'mughlai cuisine.png'),
    img('agra', 'dishes', 'agra chart 1.jpg'),
    img('agra', 'dishes', 'agra chart 2.jpg'),
  ],
  placesToVisit: [
    img('agra', 'places to visit', 'Taj Mahal .jpg'),
    img('agra', 'places to visit', 'agra fort.jpg'),
    img('agra', 'places to visit', 'itimad-ud-daulahs tomb 1.jpg'),
    img('agra', 'places to visit', 'itmad_ud_daula_tomb_2.jpg'),
    img('agra', 'places to visit', 'sikandra (akhbaras mausoleum).jpg'),
    img('agra', 'places to visit', 'sikandra (akhbaras mausoleum) 2.jpg'),
  ],
  hiddenGems: [
    img('agra', 'hidden gems', 'Rajapur.webp'),
    img('agra', 'hidden gems', 'Sphatik-Shila.jpg'),
    img('agra', 'hidden gems', 'Sphatik Shila2.webp'),
    img('agra', 'hidden gems', 'ganesh bagh 1.jpg'),
  ],
  historicalPlaces: [
    img('agra', 'historical places', 'Mehtab_Bagh_facing_Taj_Mahal.JPG'),
    img('agra', 'historical places', 'chini-ka-rauza-mausoleum-agra 1.jpg'),
    img('agra', 'historical places', 'Gurudwara-Guru-Ka-Taal-Agra.jpg'),
    img('agra', 'historical places', 'guru ka taal gurudwara 2 agra.jpg'),
    img('agra', 'historical places', 'mankameshwar-temple.jpg'),
  ],
  stay: [
    img('agra', 'staying places', 'Dadawadi Shri Vardhaman.jpg'),
    img('agra', 'staying places', 'shri-sundar-lal-jain-dharamashala-loha-mandi-agra-jain-dharamshalas-.jpg'),
    img('agra', 'staying places', 'zoatel hostel image.jpg'),
  ]
};

export const lucknowImages = {
  hero: img('lucknow', 'places to visit', 'Bara Imambara 1.jpeg'),
  dishes: [
    img('lucknow', 'famous dishes', 'Tunday Kababii.jpg'),
    img('lucknow', 'famous dishes', 'Galouti Kebab.jpg'),
    img('lucknow', 'famous dishes', 'Lucknawi Biryanii.jpeg'),
    img('lucknow', 'famous dishes', 'Idris Biryani1.jpg'),
    img('lucknow', 'famous dishes', 'Idris Biryani2.jpg'),
    img('lucknow', 'famous dishes', 'Nihari and Kulcha1.jpg'),
    img('lucknow', 'famous dishes', 'Nihari and Kulcha2.jpeg'),
    img('lucknow', 'famous dishes', "Raheem's Kulcha Nahari1.jpg"),
    img('lucknow', 'famous dishes', "Raheem's Kulcha Nahari2.jpeg"),
  ],
  placesToVisit: [
    img('lucknow', 'places to visit', 'Bara Imambara 1.jpeg'),
    img('lucknow', 'places to visit', 'Bara Imambara 2.png'),
    img('lucknow', 'places to visit', 'Bhul Bhulaiya. 1.webp'),
    img('lucknow', 'places to visit', 'Bhul Bhulaiya. T 2.jpg'),
    img('lucknow', 'places to visit', 'Chhota_imambara_Lucknow.jpg 1.jpg'),
    img('lucknow', 'places to visit', 'Chota Imambara Lucknow 2.jpg'),
    img('lucknow', 'places to visit', 'Chota Imambara Lucknow 3.jpg'),
    img('lucknow', 'places to visit', 'Hazratganj.jpg'),
  ],
  hiddenGems: [
    img('lucknow', 'hidden gems', 'Dilkusha Kothi 1.jpg'),
    img('lucknow', 'hidden gems', 'Dilkusha Kothi2.jpeg'),
    img('lucknow', 'hidden gems', 'Kudiya Ghat1.jpg'),
    img('lucknow', 'hidden gems', 'Kudiya Ghat2.jpg'),
    img('lucknow', 'hidden gems', 'Heritage Food Walks.jpg'),
  ],
  historicalPlaces: [
    img('lucknow', 'historical places', 'Rumi Darwaza1.jpg'),
    img('lucknow', 'historical places', 'Rumi_darwaza_night.jpg 2.jpg'),
    img('lucknow', 'historical places', 'The British Residency 1.jpg'),
    img('lucknow', 'historical places', 'The British Residency2.cms'),
    img('lucknow', 'historical places', 'Ambedkar Memorial Park1.png'),
    img('lucknow', 'historical places', 'Ambedkar Memorial Park2.jpg'),
    img('lucknow', 'historical places', 'Ambedkar Memorial Park3.jpg'),
  ],
  stay: [
    img('lucknow', 'stay', '(Taj, Hyatt Regency ).jpg'),
    img('lucknow', 'stay', 'radission hotel.webp'),
    img('lucknow', 'stay', 'Neem Karoli Baba Ashram.jpg'),
    img('lucknow', 'stay', 'Shree Gandhi Ashram Lucknow.jpg'),
    img('lucknow', 'stay', 'Govind Priya Ashram (Near Fogla Ashram).png'),
    img('lucknow', 'stay', 'anand dham.png'),
    img('lucknow', 'stay', 'bala ji ashram.png'),
    img('lucknow', 'stay', 'fogla ashram.png'),
    img('lucknow', 'stay', 'gaudiya ashram.png'),
  ]
};

export const mathuraVrindavanImages = {
  hero: img('mathura-vrindavan', 'hidden gems', 'prem mandir vrindavan.png'),
  dishes: [
    img('mathura-vrindavan', 'dishess', 'Dwarkadheesh temple mathura.png'),
    img('mathura-vrindavan', 'dishess', 'govardhan hill 1.png'),
    img('mathura-vrindavan', 'dishess', 'govardhan parvat 2.png'),
    img('mathura-vrindavan', 'dishess', 'vishram ghath 1.png'),
    img('mathura-vrindavan', 'dishess', 'vishram ghath 2.png'),
  ],
  placesToVisit: [
    img('mathura-vrindavan', 'hidden gems', 'prem mandir vrindavan.png'),
    img('mathura-vrindavan', 'hidden gems', 'bake bihari temple vrindavan,.png'),
    img('mathura-vrindavan', 'hidden gems', 'iskon temple vrindavan.png'),
    img('mathura-vrindavan', 'hidden gems', 'shree krishna janmbhoomi 1.png'),
    img('mathura-vrindavan', 'hidden gems', 'shree krishna janmbhoomi 2.png'),
    img('mathura-vrindavan', 'hidden gems', 'vrindavan bake bihari jii..png'),
    img('mathura-vrindavan', 'hidden gems', 'vrindavan.png'),
    img('mathura-vrindavan', 'hidden gems', 'Mathura image.png'),
  ],
  ashrams: [
    img('mathura-vrindavan', 'ashram', 'barsana..png'),
    img('mathura-vrindavan', 'ashram', 'kusum sarovar vrindavan.png'),
    img('mathura-vrindavan', 'ashram', 'nandgao .png'),
    img('mathura-vrindavan', 'ashram', 'nidhivan 1.png'),
    img('mathura-vrindavan', 'ashram', 'nidhivan 2.png'),
    img('mathura-vrindavan', 'ashram', 'seva kunj vrindavan.png'),
  ]
};

export const varanasiImages = {
  hero: img('images of purvanchal/Varanasi', '', 'kashi-vishwanath-temple-...webp'),
  dishes: [
    img('images of purvanchal/Varanasi', '', 'Banarasi Paan.webp'),
    img('images of purvanchal/Varanasi', '', 'Banarsi Lassi.jpg'),
    img('images of purvanchal/Varanasi', '', 'Kachori-1.jpg'),
    img('images of purvanchal/Varanasi', '', 'Choora matar varanasi.jpg'),
    img('images of purvanchal/Varanasi', '', 'Tamatar Chaat varanasi.jpg'),
    img('images of purvanchal/Varanasi', '', 'Launlata Varanasi.jpg'),
    img('images of purvanchal/Varanasi', '', 'Malaiyyo.webp'),
    img('images of purvanchal/Varanasi', '', 'chhena dahi vada varanasi.jpg'),
  ],
  placesToVisit: [
    img('images of purvanchal/Varanasi', '', 'kashi-vishwanath-temple-...webp'),
    img('images of purvanchal/Varanasi', '', 'watch-aerial-view-of-the-kashi-vishwanath-dham-corridor-inaugurated-by-pm-modi.webp'),
    img('images of purvanchal/Varanasi', '', 'Dashashwamedh-Ghat-Varanasi-2-1024x576.jpg'),
    img('images of purvanchal/Varanasi', '', 'Assi Ghaat Dev deepawali.jpg'),
    img('images of purvanchal/Varanasi', '', 'Munshi_Ghat_in_Varanasi.jpg'),
    img('images of purvanchal/Varanasi', '', 'Lolark Kund In Dev Deepawali.jpg'),
    img('images of purvanchal/Varanasi', '', 'Sarnath.jpg'),
    img('images of purvanchal/Varanasi', '', 'Ramnagar-Fort.jpg'),
    img('images of purvanchal/Varanasi', '', 'Kaal_Bhairavnath_Varanasi.avif'),
  ]
};

export const ayodhyaImages = {
  hero: img('images of purvanchal/ayodhya', '', 'Ayodhya_Ram_Mandir_.jpg'),
  dishes: [
    img('images of purvanchal/ayodhya', '', 'ayodhya peda.avif'),
    img('images of purvanchal/ayodhya', '', 'Malpua ayodhya.jpg'),
    img('images of purvanchal/ayodhya', '', 'tehri.jpg'),
    img('images of purvanchal/ayodhya', '', 'bedmi-puri.jpg'),
    img('images of purvanchal/ayodhya', '', 'chana ghugni.jpg'),
    img('images of purvanchal/ayodhya', '', 'ghee jalebi ayodhya.jpg'),
    img('images of purvanchal/ayodhya', '', 'ram laddu ayodhya.webp'),
    img('images of purvanchal/ayodhya', '', 'satvik thaali ayodhya.jpg'),
  ],
  placesToVisit: [
    img('images of purvanchal/ayodhya', '', 'Ayodhya_Ram_Mandir_.jpg'),
    img('images of purvanchal/ayodhya', '', 'hanuman garhi ayodhya (2).jpg'),
    img('images of purvanchal/ayodhya', '', 'kanak bhavan ayodhya.png'),
    img('images of purvanchal/ayodhya', '', 'ram ki paidi ayodhya.jpg'),
    img('images of purvanchal/ayodhya', '', 'Sita-ki-Rasoi-Ayodhya.jpg'),
    img('images of purvanchal/ayodhya', '', 'dashrath mahal ayodhya.webp'),
    img('images of purvanchal/ayodhya', '', 'guptar ghat ayodhya.jpg'),
    img('images of purvanchal/ayodhya', '', 'jain mandie ayodhya.jpg'),
  ]
};

export const prayagrajImages = {
  hero: img('images of purvanchal/Prayagraj', '', 'Triveni Sangam.jpg'),
  dishes: [
    img('images of purvanchal/Prayagraj', '', 'Dahi jalebi prayagraj.jpg'),
    img('images of purvanchal/Prayagraj', '', 'Dahi Sonth Ke Batashe.jpg'),
    img('images of purvanchal/Prayagraj', '', 'Imarti.webp'),
    img('images of purvanchal/Prayagraj', '', 'Kaali Gajar Ka Halwa.jpg'),
    img('images of purvanchal/Prayagraj', '', 'Kadhai Doodh.jpg'),
    img('images of purvanchal/Prayagraj', '', 'Masala-Churmura-resized.jpg'),
    img('images of purvanchal/Prayagraj', '', 'kachori sabji prayagraj.jpg'),
    img('images of purvanchal/Prayagraj', '', 'kandmool prayagraj.avif'),
  ],
  placesToVisit: [
    img('images of purvanchal/Prayagraj', '', 'Triveni Sangam.jpg'),
    img('images of purvanchal/Prayagraj', '', 'Allahabad Fort.jpeg'),
    img('images of purvanchal/Prayagraj', '', 'Anand_Bhawan,_Allahabad.jpg'),
    img('images of purvanchal/Prayagraj', '', 'Khusro-Bagh.png'),
    img('images of purvanchal/Prayagraj', '', 'Arail Ghat prayagraj.jpeg'),
    img('images of purvanchal/Prayagraj', '', 'All Saints Cathedral.jpg'),
    img('images of purvanchal/Prayagraj', '', 'bade-hanuman-ji-prayagraj.jpg'),
    img('images of purvanchal/Prayagraj', '', 'ulta-qila.jpg'),
  ]
};

export const chitrakootImages = {
  hero: img('chitrakoot', '', 'ram-ghat-chitrakoot.jpg'),
  dishes: [
    img('chitrakoot', 'dishes', 'Kamadgiri Parvat.jpg'),
    img('chitrakoot', 'dishes', 'Sati Anusuya Ashram1.jpg'),
    img('chitrakoot', 'dishes', 'Sati Anusuya Ashram2.jpg'),
    img('chitrakoot', 'dishes', 'bharat milap temple..jpg'),
    img('chitrakoot', 'dishes', 'gupt godavari 1.jpg'),
    img('chitrakoot', 'dishes', 'hanuman dhara 1.jpeg'),
    img('chitrakoot', 'dishes', 'hanuman dhara 2.jpg'),
  ],
  placesToVisit: [
    img('chitrakoot', '', 'ram-ghat-chitrakoot.jpg'),
    img('chitrakoot', '', 'ram ghat chitrakoot 2.jpg'),
    img('chitrakoot', '', 'Kamadgiri Parvat.jpg'),
    img('chitrakoot', 'places to visit', 'Anup Talao.jpg'),
    img('chitrakoot', 'places to visit', 'Anup-Talao-2.jpg'),
    img('chitrakoot', 'places to visit', 'Hiran Minar (Tower of the Antelope) 1.jpg'),
    img('chitrakoot', 'places to visit', 'Jodha-Bai-Palace-Fatehpursikri2.jpg'),
    img('chitrakoot', 'places to visit', "Mariam-uz-Zamani's Palace 1.jpg"),
  ],
  stay: [
    img('chitrakoot', 'stay', 'Shree maheshwari temple.jpg'),
    img('chitrakoot', 'stay', 'Tulsi Peeth Seva Nyas (Chitrakoot).jpg'),
    img('chitrakoot', 'historical places', 'jaipuriya Dharamshala.jpg'),
  ]
};

export const fatehpurSikriImages = {
  hero: img('fatepur sikri', 'hidden gems', 'buland darwaja.jpg'),
  placesToVisit: [
    img('fatepur sikri', 'hidden gems', 'buland darwaja.jpg'),
    img('fatepur sikri', 'hidden gems', 'buland darwaja 2.jpeg'),
    img('fatepur sikri', 'hidden gems', 'Jama_Masjid_Agra.jpg'),
    img('fatepur sikri', 'hidden gems', 'jama masjid 2.jpg'),
    img('fatepur sikri', 'hidden gems', 'Palace Complex 1.jpg'),
    img('fatepur sikri', 'hidden gems', 'Palace Complex 2.jpg'),
  ],
  historicalPlaces: [
    img('chitrakoot', 'places to visit', 'Anup Talao.jpg'),
    img('chitrakoot', 'places to visit', 'Hiran Minar (Tower of the Antelope) 1.jpg'),
    img('chitrakoot', 'places to visit', "Mariam-uz-Zamani's Palace 1.jpg"),
    img('chitrakoot', 'places to visit', 'hiran-minar.jpg 2.jpg'),
  ]
};

// Additional Purvanchal city image mappings
export const gorakhpurImages = {
  hero: img('images of purvanchal/Gorakhpur', '', 'Gorakhnath Temple.jpg'),
  placesToVisit: [
    img('images of purvanchal/Gorakhpur', '', 'Gorakhnath Temple.jpg'),
    img('images of purvanchal/Gorakhpur', '', 'Gita press gorakhpur.webp'),
    img('images of purvanchal/Gorakhpur', '', 'ramgarh-taal.avif'),
    img('images of purvanchal/Gorakhpur', '', 'Railway Museum.webp'),
  ],
  historicalPlaces: [
    img('images of purvanchal/Gorakhpur', '', 'imambara-gorakhpur.avif'),
    img('images of purvanchal/Gorakhpur', '', 'geeta-vatika.avif'),
  ],
  hiddenGems: [
    img('images of purvanchal/Gorakhpur', '', 'kushmi-forest-gorakhpur-ho-gorakhpur-tourist-attraction-wyd3iw4.webp'),
    img('images of purvanchal/Gorakhpur', '', 'taramandal gorakhpur.webp'),
  ],
  dishes: [
    img('images of purvanchal/Gorakhpur', '', 'thaggu ke laddu.png'),
    img('images of purvanchal/Gorakhpur', '', 'rabri-jalebi.jpg'),
    img('images of purvanchal/Gorakhpur', '', 'lehsun wale chhole samose.webp'),
    img('images of purvanchal/Gorakhpur', '', 'makuni roti.jpg'),
    img('images of purvanchal/Gorakhpur', '', 'pudi aalu sabji.avif'),
    img('images of purvanchal/Gorakhpur', '', 'Kanji Vada.webp'),
    img('images of purvanchal/Gorakhpur', '', 'Ghugni.jpg'),
  ],
};

export const mirzapurImages = {
  hero: img('images of purvanchal/Mirzapur', '', 'Chunar Fort.jpg'),
  placesToVisit: [
    img('images of purvanchal/Mirzapur', '', 'Chunar Fort.jpg'),
    img('images of purvanchal/Mirzapur', '', 'Lakhaniya Dari Waterfall.jpg'),
    img('images of purvanchal/Mirzapur', '', 'Wyndham Falls.webp'),
    img('images of purvanchal/Mirzapur', '', 'Sita Kund.jpg'),
    img('images of purvanchal/Mirzapur', '', 'temple_Klmue7RQ_202408131457590.webp'),
  ],
  dishes: [
    img('images of purvanchal/Mirzapur', '', 'Baati Chokha.webp'),
    img('images of purvanchal/Mirzapur', '', 'Kachori Jalebi.webp'),
    img('images of purvanchal/Mirzapur', '', 'Churmura.jpg'),
    img('images of purvanchal/Mirzapur', '', 'Malpua.jpg'),
  ],
};

export const azamgarhImages = {
  hero: img('images of purvanchal/Azamgarh', '', 'Govind-Sahab.jpg'),
  placesToVisit: [
    img('images of purvanchal/Azamgarh', '', 'Govind-Sahab.jpg'),
    img('images of purvanchal/Azamgarh', '', 'Daulat Ibrahim Khan Tomb.webp'),
    img('images of purvanchal/Azamgarh', '', 'Mehnagar Fort.jpg'),
    img('images of purvanchal/Azamgarh', '', 'Durvasa Rishi Ashram.webp'),
    img('images of purvanchal/Azamgarh', '', 'dattatreya aashram.webp'),
    img('images of purvanchal/Azamgarh', '', 'tamsa river.jpg'),
  ],
  hiddenGems: [
    img('images of purvanchal/Azamgarh', '', 'Nizamabad_black_clay_pottery.png'),
    img('images of purvanchal/Azamgarh', '', 'mubarakpur saree market.webp'),
  ],
  dishes: [
    img('images of purvanchal/Azamgarh', '', 'Launglata.jpg'),
    img('images of purvanchal/Azamgarh', '', 'Amla laddu.webp'),
    img('images of purvanchal/Azamgarh', '', 'Chawal ke Farre.jpg'),
    img('images of purvanchal/Azamgarh', '', 'Chole Samosa.webp'),
    img('images of purvanchal/Azamgarh', '', 'arikanch arvi patta.jpg'),
    img('images of purvanchal/Azamgarh', '', 'chatpati chaat.jpg'),
    img('images of purvanchal/Azamgarh', '', 'kalika mutton.webp'),
    img('images of purvanchal/Azamgarh', '', 'chicken biryani.jpg'),
  ],
};

export const balliaImages = {
  hero: img('images of purvanchal/Ballia', '', 'Shahid-Smarak.jpg'),
  placesToVisit: [
    img('images of purvanchal/Ballia', '', 'Shahid-Smarak.jpg'),
    img('images of purvanchal/Ballia', '', 'maldepur-maldepursangam-ghat-ballia-.jpg'),
    img('images of purvanchal/Ballia', '', 'surha_tal.webp'),
    img('images of purvanchal/Ballia', '', 'bhrigu-aashram.webp'),
    img('images of purvanchal/Ballia', '', 'sitabdiara.webp'),
    img('images of purvanchal/Ballia', '', 'janglee baba mandir.jpg'),
  ],
  dishes: [
    img('images of purvanchal/Ballia', '', 'Launglata.jpg'),
    img('images of purvanchal/Ballia', '', 'litti chokha.webp'),
    img('images of purvanchal/Ballia', '', 'litti chhola.jpg'),
    img('images of purvanchal/Ballia', '', 'badi poori.png'),
    img('images of purvanchal/Ballia', '', 'kanda-poha-recipe.jpg'),
    img('images of purvanchal/Ballia', '', 'Gajar-ka-Halwa-03-1024x683.jpg'),
    img('images of purvanchal/Ballia', '', 'sattu ki lassi.avif'),
    img('images of purvanchal/Ballia', '', 'gulbsakri_80328.jpg'),
  ],
};

export const deoriaImages = {
  hero: img('images of purvanchal/Deoria', '', 'Devraha-Baba-Ashram.jpg'),
  placesToVisit: [
    img('images of purvanchal/Deoria', '', 'Devraha-Baba-Ashram.jpg'),
    img('images of purvanchal/Deoria', '', 'barhaj saryu river ghat.jpg'),
    img('images of purvanchal/Deoria', '', 'majhauli-raj-fort-majhauli-raj-deoria-forts-qrkrt0mkee.avif'),
    img('images of purvanchal/Deoria', '', 'dudheshwar-nath-mandir.avif'),
    img('images of purvanchal/Deoria', '', 'tirupati balaji temple.png'),
    img('images of purvanchal/Deoria', '', 'Devrahi mata mandir.webp'),
  ],
  dishes: [
    img('images of purvanchal/Deoria', '', 'Samosa-Chaat.jpg'),
    img('images of purvanchal/Deoria', '', 'bedmi-puri-736x1104.webp'),
    img('images of purvanchal/Deoria', '', 'litti chokha.gif'),
    img('images of purvanchal/Deoria', '', 'poori jalebi.jpg'),
    img('images of purvanchal/Deoria', '', 'daal poori.webp'),
    img('images of purvanchal/Deoria', '', 'gud ki kheer.jpg'),
    img('images of purvanchal/Deoria', '', 'chhena.jpeg'),
    img('images of purvanchal/Deoria', '', 'chivda.jpg'),
  ],
};

// Food-only or primarily dishes-focused cities
export const bareillyImages = { dishes: [
  img('images of up food/Bareilly', '', 'seekh kebab.jpg'),
  img('images of up food/Bareilly', '', 'nihari.jpg'),
  img('images of up food/Bareilly', '', 'aloo tikki.jpg'),
  img('images of up food/Bareilly', '', 'up-ka-breakfast-swal-aloo-recipe-main-photo.jpg'),
  img('images of up food/Bareilly', '', 'Green-moong-dal-chilla.jpg'),
]};
export const aligarhImagesExtra = { dishes: [
  img('images of up food/aligarh', '', 'aligarh kacchori.jpg'),
  img('images of up food/aligarh', '', 'shami-kabab-shami-kebab.jpg'),
  img('images of up food/aligarh', '', 'gajak.avif'),
  img('images of up food/aligarh', '', 'tehri.webp'),
  img('images of up food/aligarh', '', 'Nihari-2c750c0.jpg'),
]};
export const bijnorImages = { dishes: [
  img('images of up food/bijnor', '', 'Bal_mithai.jpg'),
  img('images of up food/bijnor', '', 'Urad-Dal-Ke-Pakode-L1.webp'),
  img('images of up food/bijnor', '', 'kadhi pakora.webp'),
  img('images of up food/bijnor', '', 'poori-bhaji-1a.webp'),
  img('images of up food/bijnor', '', 'singori.jpg'),
  img('images of up food/bijnor', '', 'tehri-tahri.webp'),
  img('images of up food/bijnor', '', 'makkhan malai.jpg'),
  img('images of up food/bijnor', '', 'sugarcane-juice.webp'),
]};
export const hathrasImages = { dishes: [
  img('images of up food/hathras', '', 'rabri-500x500.webp'),
  img('images of up food/hathras', '', 'hing-kachori.jpg'),
  img('images of up food/hathras', '', 'hing wale aloo.jpg'),
  img('images of up food/hathras', '', 'Petha.webp'),
  img('images of up food/hathras', '', 'Son_papadi.jpg'),
  img('images of up food/hathras', '', 'Dahi-Bhalla-500x500.jpg'),
]};
export const meerutImagesExtra = { dishes: [
  img('images of up food/meerut', '', 'rewri and gajak.jpg'),
  img('images of up food/meerut', '', 'naankhatai meerut.avif'),
  img('images of up food/meerut', '', 'shami-kabab-shami-kebab.jpg'),
  img('images of up food/meerut', '', 'poori-puri-recipe.jpg'),
  img('images of up food/meerut', '', 'paneer pasanda meerut.jpg'),
  img('images of up food/meerut', '', 'aloo tikki.avif'),
]};
export const moradabadImagesExtra = { dishes: [
  img('images of up food/moradabad', '', 'daal-muradabad.jpg'),
  img('images of up food/moradabad', '', 'moradabadi biryani 11.jpg'),
  img('images of up food/moradabad', '', 'mutton korma.avif'),
  img('images of up food/moradabad', '', 'multani chhole.jpg'),
  img('images of up food/moradabad', '', 'daal jalebi.jpg'),
]};
export const muzaffarnagarImagesExtra = { dishes: [
  img('images of up food/muzzafarnagar', '', 'gud.webp'),
  img('images of up food/muzzafarnagar', '', 'revri.webp'),
  img('images of up food/muzzafarnagar', '', 'Tilkut_Sweet.jpg'),
  img('images of up food/muzzafarnagar', '', 'aloo poori.webp'),
  img('images of up food/muzzafarnagar', '', 'gud ki kheer.webp'),
  img('images of up food/muzzafarnagar', '', 'kadhi-pakora-recipe-1.webp'),
]};
export const rampurImagesExtra = { dishes: [
  img('images of up food/rampur', '', 'rampuri korma.avif'),
  img('images of up food/rampur', '', 'seekh kebaba.avif'),
  img('images of up food/rampur', '', 'adrak ka halwa.avif'),
  img('images of up food/rampur', '', 'murgh musallam.jpg'),
  img('images of up food/rampur', '', 'kacche gosht ki tikiya.jpg'),
  img('images of up food/rampur', '', 'dudh ki lauki.jpg'),
]};
export const saharanpurImagesExtra = { dishes: [
  img('images of up food/saharanpur', '', 'Khurma.jpg'),
  img('images of up food/saharanpur', '', '-ghewar.jpg'),
  img('images of up food/saharanpur', '', 'Moong-Dal-Pakoda-2-3.jpg'),
  img('images of up food/saharanpur', '', 'namkeen.webp'),
  img('images of up food/saharanpur', '', 'Rasmalai.jpg'),
  img('images of up food/saharanpur', '', 'aloo tilli.jpg'),
]};
export const jhansiImagesExtra = { dishes: [
  img('images of up food/jhansi', '', 'bara jhansi.jpg'),
  img('images of up food/jhansi', '', 'besan thopa jhansi.jpg'),
  img('images of up food/jhansi', '', 'bhutte-ka-kees.jpg'),
  img('images of up food/jhansi', '', 'kachori sabji.webp'),
  img('images of up food/jhansi', '', 'kulfi faaluda.jpg'),
  img('images of up food/jhansi', '', 'maheri jhansi.jpg'),
  img('images of up food/jhansi', '', 'ras kheer jhansi.avif'),
]};
export const ghazipurImagesExtra = { dishes: [
  img('images of up food/ghazipur', '', 'litti chokha.gif'),
  img('images of up food/ghazipur', '', 'masala churmura gray.png'),
  img('images of up food/ghazipur', '', 'kachori sabji gray.png'),
  img('images of up food/ghazipur', '', 'revadi.png'),
  img('images of up food/ghazipur', '', 'ghevar gray.png'),
  img('images of up food/ghazipur', '', 'poori-jalebi.jpg'),
]};

export const localImageMappings = {
  agra: agraImages,
  lucknow: lucknowImages,
  mathuraVrindavan: mathuraVrindavanImages,
  varanasi: varanasiImages,
  ayodhya: ayodhyaImages,
  prayagraj: prayagrajImages,
  chitrakoot: chitrakootImages,
  fatehpurSikri: fatehpurSikriImages,
  gorakhpur: gorakhpurImages,
  mirzapur: mirzapurImages,
  azamgarh: azamgarhImages,
  ballia: balliaImages,
  deoria: deoriaImages,
  bareillyExtra: bareillyImages,
  aligarhExtra: aligarhImagesExtra,
  bijnorExtra: bijnorImages,
  hathrasExtra: hathrasImages,
  meerutExtra: meerutImagesExtra,
  moradabadExtra: moradabadImagesExtra,
  muzaffarnagarExtra: muzaffarnagarImagesExtra,
  rampurExtra: rampurImagesExtra,
  saharanpurExtra: saharanpurImagesExtra,
  jhansiExtra: jhansiImagesExtra,
  ghazipurExtra: ghazipurImagesExtra,
};

export function hasLocalContent(): boolean {
  return true;
}

export function getImageWithFallback(localPath: string, fallbackUrl: string): string {
  if (hasLocalContent() && localPath) {
    return localPath;
  }
  return fallbackUrl;
}
