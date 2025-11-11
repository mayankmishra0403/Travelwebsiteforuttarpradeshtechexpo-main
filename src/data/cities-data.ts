import { localImageMappings, getImageWithFallback } from '../config/image-mappings';

export interface CityData {
  id: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  heroImage: string;
  placesToVisit: PlaceItem[];
  historicalPlaces: PlaceItem[];
  hiddenGems: PlaceItem[];
  famousDishes: DishItem[];
  stayingPlaces: StayItem[];
}

export interface PlaceItem {
  name: string;
  description: string;
  image: string;
}

export interface DishItem {
  name: string;
  description: string;
  image: string;
}

export interface StayItem {
  name: string;
  type: string;
  description: string;
  image: string;
}

// Helper to map fallback images to local content by index
function withFallbackByIndex<T extends { image: string }>(
  items: T[],
  locals?: string[]
): T[] {
  return items.map((item, i) => ({
    ...item,
    image: getImageWithFallback(locals?.[i] ?? '', item.image),
  }));
}

export const REGIONS = {
  PURVANCHAL: 'Purvanchal',
  CENTRAL_WESTERN: 'Central & Western UP',
  BUNDELKHAND: 'Bundelkhand',
  HIMALAYAN: 'Himalayan Foothill Region',
};

export const citiesData: CityData[] = [
  // PURVANCHAL REGION
  {
    id: 'varanasi',
    name: 'Varanasi',
    region: REGIONS.PURVANCHAL,
    tagline: 'The Spiritual Capital of India',
    description: 'One of the oldest continuously inhabited cities in the world, Varanasi is the heart of Hindu spirituality.',
    heroImage: getImageWithFallback(localImageMappings.varanasi?.hero, 'https://images.unsplash.com/photo-1671512226229-e05294dd1970?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      {
        name: 'Kashi Vishwanath Temple (काशी विश्वनाथ मंदिर)',
        description: 'Jyotirlinga - The holiest temple of Lord Shiva and one of the twelve sacred Jyotirlingas in India. Recently transformed with the Kashi Vishwanath Dham Corridor project, this ancient temple now offers direct connectivity to the Ganga Ghats through a magnificent walkway. The temple has been destroyed and rebuilt multiple times through history, with the current structure built by Maharani Ahilyabai Holkar of Indore in 1780. The golden spire (donated by Maharaja Ranjit Singh) glows magnificently. The inner sanctum houses the Jyotirlinga in the form of a black stone Shivalinga. The temple complex is always bustling with devotees, especially during Mahashivratri and Shravan month. The spiritual energy here is overwhelming, with continuous chants of "Har Har Mahadev" echoing through the lanes. The new corridor has added modern facilities while preserving the ancient sanctity.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Dashashwamedh Ghat (दशाश्वमेध घाट)',
        description: 'Ganga Aarti - The most spectacular ghat in Varanasi where the world-famous Ganga Aarti ceremony is performed every evening at sunset. According to legend, Lord Brahma created this ghat and performed ten (dash) horse (ashwamedh) sacrifices here, hence the name. The ghat comes alive each evening with the mesmerizing aarti ritual performed by young priests in perfect synchronization, holding large multi-tiered brass lamps (diyas), accompanied by bells, conch shells, and devotional songs. Thousands of pilgrims and tourists gather on boats and ghat steps to witness this spiritual spectacle. The reflection of flames on the holy Ganga creates a divine atmosphere. The ghat is also the main point for taking boat rides to experience sunrise and see the entire ghats stretch. Part of the Kashi Vishwanath Dham corridor now connects this ghat directly to the temple.',
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800',
      },
      {
        name: 'Assi Ghat (अस्सी घाट)',
        description: 'Subah-e-Banaras - The southernmost and one of the most peaceful ghats, located at the confluence of Assi and Ganga rivers. This ghat is the starting point for the famous "Subah-e-Banaras" experience - early morning boat rides offering stunning sunrise views over the ancient city. The ghat has a sacred Assi-Sangameshwar (Shiva) temple and a large Peepal tree worshipped by devotees. Morning aarti performed here is more intimate than Dashashwamedh. The ghat has become a hub for cultural activities, yoga sessions, classical music performances, and spiritual discourses. Young priests perform evening aarti with traditional Banarasi folk songs. The ghat attracts students, sadhus, tourists, and locals alike. Famous for its laid-back atmosphere and numerous cafes nearby offering river views. The boat ride from Assi to Dashashwamedh covering all 84 ghats is an unforgettable spiritual journey.',
        image: 'https://images.unsplash.com/photo-1610181941167-69d8b88e4f3e?q=80&w=800',
      },
      {
        name: 'Sarnath (सारनाथ)',
        description: 'Dharmachakra Pravartana - One of Buddhism\'s four most sacred sites, located just 10 km from Varanasi. This is where Lord Buddha gave his first sermon (Dharmachakra Pravartana) after attaining enlightenment at Bodh Gaya in 528 BCE, establishing the Buddhist Sangha. The site features the magnificent Dhamek Stupa, a massive cylindrical structure built by Emperor Ashoka in 249 BCE, standing 43.6 meters tall with intricate floral and geometric carvings. The Archaeological Museum houses the famous Ashoka Pillar with the Lion Capital (now India\'s national emblem) and the Dharmachakra. The Mulagandha Kuti Vihar temple has beautiful frescoes by Japanese artist Kosetsu Nosu depicting Buddha\'s life. Monasteries and temples built by various countries (Thai, Tibetan, Japanese, Chinese) create an international Buddhist community. The peaceful deer park (Isipatana) where Buddha taught still has deer roaming freely. The site attracts Buddhist pilgrims from across the world.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800',
      },
    ], localImageMappings.varanasi?.placesToVisit),
    historicalPlaces: [
      {
        name: 'Ramnagar Fort (रामनगर किला)',
        description: 'An 18th-century fort and palace built in 1750 CE by Maharaja Balwant Singh on the eastern bank of the Ganges River, opposite the main city. This fortified palace showcases Mughal architectural style with cream-colored chunar sandstone. The fort still serves as the residence of the Maharaja of Varanasi (Kashi Naresh). It houses the Saraswati Bhawan Museum containing a rare collection of vintage cars, royal palanquins, medieval weaponry, ivory work, antique clocks, astronomical instruments, and ancient manuscripts. The durbar hall displays royal costumes and ceremonial items. The fort is famous for hosting the month-long Ramnagar Ramlila, one of India\'s oldest and most authentic staged performances of the Ramayana, where the entire city becomes the stage. The fort\'s Vedic observatory and royal temple complex are architectural marvels. The best view of the fort is from boat rides on the Ganga during sunset.',
        image: 'https://images.unsplash.com/photo-1580190076075-e7d93f3d0c3f?q=80&w=800',
      },
      {
        name: 'Kaal Bhairav Temple (काल भैरव मंदिर)',
        description: 'Kotwal of Kashi - A powerful ancient temple dedicated to Kaal Bhairav, the fierce manifestation of Lord Shiva and considered the guardian deity (Kotwal) of Varanasi. According to Hindu tradition, anyone visiting Kashi must seek permission from Kaal Bhairav before visiting Kashi Vishwanath Temple. The temple houses a silver-faced idol of Bhairav adorned with garlands. Uniquely, devotees offer alcohol (wine and liquor) to the deity, which mysteriously disappears from the bowl placed before the idol - a phenomenon that draws curious visitors. The temple is believed to be established by Lord Shiva himself and mentioned in ancient texts. The atmosphere is intense with the sound of bells, drums, and chants. Devotees believe Bhairav punishes wrongdoers and protects devotees. The temple is especially crowded on Sundays and during Bhairav Ashtami festival. The narrow lanes leading to the temple are lined with shops selling offerings and ritual items.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Munshi Ghat / Darbhanga Ghat (मुंशी घाट / दरभंगा घाट)',
        description: 'A hidden gem showcasing majestic Rajasthani-style palace architecture, built by the Maharajas of Darbhanga (Bihar). Unlike the crowded main ghats, this ghat offers peaceful surroundings ideal for quiet walks, photography, and contemplation. The palace complex features intricate stone carvings, beautiful jharokhas (overhanging enclosed balconies), ornate pillars, and terrace gardens overlooking the Ganga. The architecture blends Rajput, Mughal, and local Banarasi styles. Early mornings here are magical with soft golden light illuminating the palace facade and birds chirping. Local fishermen cast nets using traditional methods. The ghat steps are less crowded, making it perfect for meditation and watching the river flow peacefully. Some heritage hotels now operate from portions of the palace, offering authentic experiences. The ghat represents Varanasi\'s lesser-known architectural heritage beyond its famous temples.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Lolark Kund (लोलार्क कुंड)',
        description: 'An ancient sacred water tank (kund) near Tulsi Ghat, believed to be one of the few surviving ancient stepped wells in Varanasi dating back to the Vedic period. The name "Lolark" comes from "Lol" (trembling) and "Ark" (sun), meaning the trembling sun, as the sun\'s reflection shimmers in the water. Dedicated to the Sun God (Surya), this tank is a rare sun worship site in Varanasi, which is predominantly Shiva-centric. The kund descends 15 meters below ground level with steep stone steps on all four sides leading to the water. According to Hindu beliefs, bathing here on the sixth day of the waxing moon in the month of Bhadrapada (August-September) blesses childless couples with children. Thousands gather during Lolark Mela festival. The surrounding Surya temple and the serene atmosphere away from commercial ghats make it a perfect spot for spiritual seekers. The archaeological and mythological significance is immense.',
        image: 'https://images.unsplash.com/photo-1598524721496-3e49d2a43bf0?q=80&w=800',
      },
    ],
    famousDishes: withFallbackByIndex([
      {
        name: 'Malaiyyo (मलाईयो)',
        description: 'A seasonal winter dessert (December-February only) made from milk foam collected from dew during cold nights. This ethereal, cloud-like sweet literally melts in your mouth without chewing. Preparation starts at midnight when fresh buffalo milk is left in large vessels. By dawn, due to temperature difference and dew, a thick foam forms on top, which is carefully scooped and beaten continuously to create the airy texture. It\'s sweetened with sugar and flavored with saffron, cardamom, and pistachio, then served in earthen bowls (kulhads) or leaf bowls. The dessert has no ghee or solid milk products, making it incredibly light. Found only in Varanasi\'s old lanes and specific sweet shops during winter mornings. The traditional process is labor-intensive and weather-dependent, making it a rare delicacy.',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800',
      },
      {
        name: 'Tamatar Chaat (टमाटर चाट)',
        description: 'A unique Banarasi street food where ripe tomatoes are mashed and cooked with special spices creating a hot, spicy, tangy preparation served in earthen cups (kulhads). Unlike regular chaat, this is served piping hot. Finely chopped tomatoes are tempered with cumin, asafoetida, green chilies, and secret spice blends. Topped with boondi, sev, chopped onions, coriander, and various chutneys (tamarind, green, garlic). The earthen kulhad adds an earthy aroma. Best enjoyed at roadside stalls in narrow lanes of Varanasi, especially near Kachori Gali and Godowlia Chowk. The combination of hot spices with tangy tomatoes creates an addictive taste. Usually eaten as an evening snack with crispy pakoras or kachoris.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Banarasi Paan (बनारसी पान)',
        description: 'A world-famous cultural icon and digestive made with betel leaves, served after meals. Banarasi Paan is not just food but an art form passed down through generations of paan-makers (paan-walas). The finest Maghai paan leaves are selected, smeared with lime paste (chuna), filled with sweet ingredients like gulkand (rose petal jam), kattha, coconut flakes, dates, cherries, tutti frutti, saffron, cardamom, fennel seeds, and various secret masalas. Some varieties include silver leaf (chandi ka waraq). Famous shops like Keshav Tambul Bhandar and Pradhan Ji ki Paan have loyal customers across generations. The Meetha Paan (sweet) is most popular, but Saada and Sadha variations exist. Eating paan is a ritual; it should be consumed slowly, allowing flavors to release. Export quality paans are now sent worldwide.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Banarasi Lassi (बनारसी लस्सी)',
        description: 'Thick, creamy lassi topped with a generous layer of malai (cream), served in traditional earthen kulhads or large brass glasses. The Blue Lassi Shop near Manikarnika Ghat is world-famous, featured in international media and travel shows. Made from hung curd (chakka) from buffalo milk, giving it extra richness. Hand-churned in traditional wooden churners (madhani), sweetened with sugar or honey, flavored with cardamom, saffron, and rose water. Topped with dry fruits, fruits, and thick malai layer. Some shops offer fruit lassis (mango, banana, pomegranate) and even chocolate lassi. The lassi is so thick, it\'s often eaten with a spoon rather than drunk. Perfect for cooling down in Varanasi\'s heat after exploring the ghats and temples.',
        image: 'https://images.unsplash.com/photo-1596209347080-a2a52f7a3c5e?q=80&w=800',
      },
      {
        name: 'Kachori Sabzi (कचौरी सब्ज़ी)',
        description: 'Varanasi\'s quintessential breakfast served in the famous Kachori Gali (Chowk area). Crispy, flaky deep-fried lentil-stuffed kachoris served piping hot with spicy Aloo (potato) Sabzi. The kachoris are made from refined flour and filled with spiced moong dal or urad dal paste, deep-fried to golden perfection. The accompanying potato curry is tangy, spicy, and watery, flavored with cumin, asafoetida, coriander, and sometimes tamarind. Best eaten early morning (6-10 AM) when freshly prepared. Famous shops like Madhur Milan Café and Kashi Chat Bhandar have queues of locals and tourists. The combination is completed with sweet-spicy chutneys and sometimes jalebi for those who like mixing sweet and savory. A complete, affordable, and filling breakfast experience.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Choora Matar (चूड़ा मटर)',
        description: 'A warm, comforting evening snack made from flattened rice (poha/chura) cooked in generous amounts of desi ghee with fresh green peas. Prepared especially during winter months when fresh peas are available. The dish is tempered with cumin, curry leaves, green chilies, ginger, turmeric, and garnished with fresh coriander, grated coconut, and lemon juice. The ghee gives it a rich, buttery flavor. Often sold by street vendors in the evening, served in small earthen bowls or leaf bowls. The dish is light yet satisfying, perfect with a cup of masala chai. A traditional winter comfort food enjoyed by locals while sitting on ghat steps watching the evening aarti.',
        image: 'https://images.unsplash.com/photo-1630384082577-4e6d4c27f0ce?q=80&w=800',
      },
      {
        name: 'Chena Dahi Vada (छेना दही वड़ा)',
        description: 'A unique Banarasi variation of dahi vada where vadas are made from chena (fresh cottage cheese/paneer) instead of traditional lentils, making them incredibly soft, spongy, and light. The chena vadas are first fried lightly, then soaked in thick, sweetened curd (dahi), topped with sweet tamarind chutney, spicy green chutney, roasted cumin powder, red chili powder, and garnished with coriander and sev. The texture is melt-in-mouth soft, completely different from regular lentil vadas. This delicacy showcases Varanasi\'s innovation in traditional sweets and snacks. Found in old sweet shops in the narrow lanes of Varanasi, especially in areas around Godowlia and Thatheri Bazaar.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Launglata (लांगलता)',
        description: 'A traditional deep-fried pastry dessert stuffed with sweetened khoya (reduced milk solids), nuts, and coconut, sealed with a clove (laung). The outer covering is made from refined flour rolled thin and stuffed generously with the sweet filling, then deep-fried until golden and crispy. After frying, they are soaked in sugar syrup flavored with cardamom and saffron. The clove not only acts as a seal but adds a warm, aromatic flavor. The dessert has a crispy outside and soft, sweet inside. Common in traditional sweet shops and often prepared during festivals and weddings. The name comes from "laung" (clove) as the clove holds the pastry layers together. A sweet that represents old Banarasi culinary traditions.',
        image: 'https://images.unsplash.com/photo-1571877209935-4a5dcdeb5a1f?q=80&w=800',
      },
      {
        name: 'Launglata',
        description: 'Traditional sweet made during festivals',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
    ], localImageMappings.varanasi?.dishes),
    stayingPlaces: [
      {
        name: 'Heritage Hotels',
        type: 'Hotel',
        description: 'Luxury hotels with traditional architecture',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
      {
        name: 'Dharamshalas',
        type: 'Budget',
        description: 'Traditional pilgrimage accommodations',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },
  {
    id: 'prayagraj',
    name: 'Prayagraj',
    region: REGIONS.PURVANCHAL,
    tagline: 'The Confluence of Sacred Rivers',
    description: 'Home to the Triveni Sangam and host of the Maha Kumbh Mela',
    heroImage: getImageWithFallback(localImageMappings.prayagraj?.hero, 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      {
        name: 'Triveni Sangam (त्रिवेणी संगम)',
        description: 'The Sacred Confluence - The holiest point where three sacred rivers meet: Ganga (visible, blue-green), Yamuna (visible, greenish), and the mythical Saraswati (invisible). This is one of Hinduism\'s most sacred tirths (pilgrimage sites) and the venue for the world\'s largest religious gathering, the Kumbh Mela (held every 12 years; Ardh Kumbh every 6 years). Millions of pilgrims take holy dips here believing it washes away sins and grants moksha. The Sangam can be reached by boats that take you to the exact confluence point where you can see the different colored waters meeting. According to Hindu scriptures, a dip during Kumbh Mela is equivalent to performing a thousand Ashwamedha Yajnas. The site has been mentioned in ancient texts including Rigveda, Ramayana, and Mahabharata. Pilgrims also perform Pind Daan (ancestral rituals) here. The panoramic view of the meeting rivers with boats, temples, and the fort creates a mesmerizing spiritual landscape.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
      {
        name: 'Allahabad Fort (इलाहाबाद किला)',
        description: 'Historical Fortress - A massive fortification built by Mughal Emperor Akbar in 1583 CE on the banks of the Yamuna near Sangam. This is the largest fort built by Akbar, showcasing exemplary Mughal military architecture with huge walls, three galleries flanked by high towers, and four gateways. The fort houses the ancient Akshayavat (immortal Banyan tree) inside Patalpuri Temple, believed to be eternal and mentioned in ancient Hindu texts. According to legend, those who see the tree attain moksha. The fort also contains the famous Ashoka Pillar (Allahabad Pillar) from 232 BCE with inscriptions by three emperors: Ashoka, Samudragupta, and Jahangir. The underground palace (Patalpuri) has historical significance. Most of the fort is under Indian Army control, but selected areas are open to visitors. The Saraswati Koop (well) is believed to be the source of the invisible Saraswati River.',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
      {
        name: 'Anand Bhavan (आनंद भवन)',
        description: 'Freedom Movement History - The historic ancestral mansion of the Nehru-Gandhi family and the epicenter of India\'s independence movement. Originally called Swaraj Bhavan, it was donated to the nation by Motilal Nehru in 1930. The new family residence, Anand Bhavan, was built adjacent to it. Now a museum, it houses photographs, documents, and personal belongings of the Nehru family. The rooms where Jawaharlal Nehru, Indira Gandhi, and other freedom fighters lived and planned the independence movement are preserved. The property has a beautiful garden, a planetarium named after Nehru, and displays vintage cars. The adjoining Swaraj Bhavan museum showcases the freedom struggle through exhibits, including the room where Mahatma Gandhi stayed. The Charkha (spinning wheel) and Nehru\'s study with books give insights into the lifestyle of India\'s first Prime Minister. A must-visit for understanding India\'s modern history.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Khusro Bagh (खुसरो बाग)',
        description: 'Mughal Architecture - A peaceful, large walled garden (bagh) complex from the Mughal era containing magnificent tombs of Prince Khusrau Mirza (Emperor Jahangir\'s eldest son who rebelled against his father), his mother Shah Begum, and his sister Sultan Nithar Begum. Built in early 17th century, the tombs showcase exquisite Mughal architecture with intricate stone carvings, beautiful domes, and Persian-style sandstone structures. Prince Khusrau\'s tomb is the most impressive with a three-story structure topped by a large dome and four octagonal minarets. The garden, spread over 40 acres, has lush lawns, fruit orchards (especially famous for guavas), fountains, and walking paths. The tragic history of Prince Khusrau (who was imprisoned and later killed) adds a melancholic aura. The peaceful ambiance contrasts with the bustling city outside. Best visited during early mornings or evenings.',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
    ], localImageMappings.prayagraj?.placesToVisit),
    historicalPlaces: [
      {
        name: 'All Saints Cathedral - Patthar Girja (पत्थर गिरजा)',
        description: 'Gothic Architecture - Known locally as Patthar Girja (Stone Church), this is a magnificent Anglican Cathedral built in 1887 during British Raj. Designed by architect William Emerson (who also designed Victoria Memorial, Kolkata), it represents one of the finest examples of Gothic Revival architecture in India. The cathedral features soaring spires reaching 175 feet, pointed arches, stained glass windows depicting biblical scenes, ornate stonework, flying buttresses, and a spacious nave that can accommodate 1,000 worshippers. The foundation stone was laid by the then Viceroy Lord Northbrook. The interior has beautiful marble altar, wooden pews, and memorial plaques to British officials and soldiers. The cathedral compound has well-maintained gardens. Sunday services with choir singing create a serene spiritual atmosphere. The architecture stands as a testament to British colonial influence in Prayagraj. The bell tower offers panoramic views of the city.',
        image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=800',
      },
      {
        name: 'Bade Hanuman Ji Temple (बड़े हनुमान जी मंदिर)',
        description: 'Unique Deity - Famous for its unique reclining (Lete Hue) Hanuman idol that is perpetually half-submerged in water throughout the year. Located within Allahabad Fort near Sangam, this temple is one of the few in India depicting Hanuman in a reclining posture rather than the usual standing position. The idol measures about 20 feet and only the upper body is visible above water. According to legend and local belief, the Ganga River rises every year specifically to touch the feet of this deity, considered a sacred blessing. Devotees believe Hanuman Ji chose this spot to meditate after meeting Lord Rama at the Sangam. The temple gains special significance during Hanuman Jayanti and Tuesdays when thousands gather to worship. The continuously flowing water (from an underground spring) adds to the mystical aura. The temple is mentioned in ancient Hindu texts and is considered a Shakti Peeth by some.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Arail Ghat (अरैल घाट)',
        description: 'Panoramic View - Located on the opposite (eastern) bank of the Yamuna River across from the main Sangam area in Jhunsi. This ghat offers a stunning panoramic view of the entire Triveni Sangam, the fort, and the confluence of the three rivers. Unlike the crowded main Sangam ghats, Arail is relatively peaceful and less commercialized, making it perfect for meditation, photography, and quiet contemplation. The ghat has historical significance dating back to ancient times, mentioned in Puranas. The sunrise and sunset views from here are spectacular with the rivers glowing in golden light. Local fishermen still use traditional methods here. Small temples dot the riverside. During Kumbh Mela, this area also hosts temporary camps and becomes part of the extended holy bathing circuit. The boat ride from Sangam to Arail ghat offers a unique perspective of the holy city. Many sadhus and spiritual seekers prefer this quieter spot for their practices.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Ulta Qila - Upside Down Fort (उल्टा किला)',
        description: 'Mythological Ruins - A lesser-known mysterious archaeological site located in Jhunsi, across the Ganga from main Prayagraj. The name "Ulta" (upside-down/inverted) comes from a legend that it was cursed and turned upside-down due to a sage\'s wrath. According to mythology, a king who ruled from here insulted a visiting sage, who cursed the entire fort to be inverted. Archaeological evidence shows this was actually an ancient fortification, possibly from the Mauryan or earlier period. The ruins scattered across a large area include remnants of walls, structures, and pottery. The site offers a sense of mystery and is popular among history enthusiasts and explorers. The surrounding area is rural and peaceful, offering glimpses of traditional village life. The local folklore and legends add to the mystique. Best visited with a local guide who can narrate the stories associated with each ruin.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    famousDishes: withFallbackByIndex([
      {
        name: 'Kaali Gajar Ka Halwa (काली गाजर का हलवा)',
        description: 'Seasonal Dessert - A rare and unique winter delicacy made from black carrots (Kaali Gajar) instead of the typical orange/red carrots. Black carrots are grown only in certain regions and available for a short season (December-January). This halwa has a distinctive deep purple-black color, unique earthy-sweet flavor with slight smoky notes, and denser texture compared to regular carrot halwa. Prepared traditionally by slowly cooking grated black carrots in full-cream milk for hours, then adding sugar, desi ghee, cardamom, and garnishing with dry fruits (almonds, cashews, pistachios). The preparation is time-intensive and labor of love. Famous sweet shops in Prayagraj like Netram and Loknath prepare authentic Kaali Gajar Halwa during winter. Often served warm, it\'s considered not just a dessert but also nutritious, rich in antioxidants. A true seasonal treasure of Prayagraj.',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Kachori Sabzi (कचौरी सब्ज़ी)',
        description: 'Breakfast Staple - Prayagraj\'s quintessential breakfast featuring crispy, flaky Kachoris stuffed with spiced urad dal (black lentils), deep-fried to golden perfection. Served piping hot with Aloo-Chana Sabzi - a tangy, spicy curry combining potatoes and chickpeas in a thin, flavorful gravy tempered with cumin, asafoetida, and green chilies. The kachoris are exceptionally crispy outside while remaining soft inside with perfectly spiced filling. The accompanying sabzi has a distinct tangy flavor from tamarind or dry mango powder. Best enjoyed at famous breakfast spots like Hari Ram & Sons, Indian Coffee House, and roadside stalls in Chowk and Civil Lines areas. The combination is completed with sweet-spicy chutneys. Traditionally eaten early morning (6-10 AM) when freshly prepared. A filling, affordable, and delicious start to the day, loved by locals and tourists alike.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Dahi Jalebi (दही जलेबी)',
        description: 'Sweet & Savory Combo - A popular and unique morning combination where hot, crispy, sugar-syrup-soaked orange Jalebis are served alongside cool, fresh, thick Dahi (curd/yogurt). This contrasting pairing of hot-cold, sweet-tangy creates a perfectly balanced taste experience. The jalebis are made from fermented batter, deep-fried in circular spirals, and immediately soaked in sugar syrup while hot. The dahi is usually sweetened slightly and sometimes flavored with cardamom. The combination is believed to aid digestion while satisfying sweet cravings. Famous shops like the ones in Chowk area and Civil Lines prepare the best versions. Often eaten as a late breakfast or mid-morning snack, especially during festivals and weekends. The practice of eating jalebis with dahi is particularly popular in UP and Bihar regions. The dish showcases the culinary creativity of combining contrasting flavors and temperatures.',
        image: 'https://images.unsplash.com/photo-1571877209935-4a5dcdeb5a1f?q=80&w=800',
      },
      {
        name: 'Imarti (इमरती)',
        description: 'Traditional Sweet - A popular and beautiful sweet similar to jalebi but made from urad dal (black lentils) batter instead of wheat flour, giving it a distinct flavor and texture. The batter is fermented, then piped through special nozzles into hot oil, creating intricate circular flower patterns with petals. Deep-fried to crispy perfection and immediately dunked in sugar syrup, it turns bright orange-red. Imarti is larger, thicker, and chewier than jalebi with a slightly tangy undertone from fermented dal. The preparation requires skill to create perfect flower shapes. Famous sweet shops like Netram Mishtan Bhandar and Loknath have been making imarti for generations using traditional methods. Often served during festivals, religious ceremonies, and special occasions. Can be eaten hot (crispy) or cold (chewier). A specialty of Purvanchal region, particularly beloved in Prayagraj and Jaunpur.',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Kadhai Doodh (कढ़ाई दूध)',
        description: 'Winter Comfort Drink - A rich, thick, slow-cooked milk dessert-drink traditionally prepared in a small Kadhai (iron wok) over low flame. Fresh buffalo milk is continuously stirred and reduced for hours until it thickens significantly, developing a creamy consistency and slightly caramelized flavor from milk solids (malai). Flavored with crushed cardamom pods, saffron strands, and sometimes rose water. Garnished generously with chopped or sliced dry fruits including almonds, cashews, pistachios, and sometimes dates. Served warm in small portions in traditional brass or earthen cups (kulhads). The slow cooking process creates layers of cream (malai) which add richness. Especially popular during winter months as a warming beverage. Found at old sweet shops and traditional milk stalls in areas like Chowk, Johnstongang, and near temples. Often consumed after meals as a digestive or as an evening comfort drink. The preparation method has been passed down through generations.',
        image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=800',
      },
      {
        name: 'Kandmool (कंदमूल)',
        description: 'Unique Seasonal Root - A drum-shaped starchy root vegetable (tuber) that is unique to the Prayagraj region, particularly found near the Sangam area. According to legend, this is the same root (kandmool) that Lord Rama, Sita, and Lakshmana ate during their 14-year exile in the forests. The root is believed to have been a staple food for ancient rishis and forest-dwellers. Available during winter months, it\'s sold sliced on streets, especially during Magh Mela and Kumbh Mela period. The taste is mildly sweet, starchy, and fibrous - similar to raw potato but with unique texture. Rich in fiber and considered healthy. Eaten raw with a sprinkle of salt, black pepper, and lemon juice, or sometimes roasted. Pilgrims visiting Sangam often buy and eat kandmool to connect with the ascetic lifestyle. A fascinating example of ancient food traditions surviving in modern times.',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800',
      },
      {
        name: 'Dahi Sonth Ke Batashe (दही सोंठ के बताशे)',
        description: 'Unique Chaat - A local innovative variation of the popular Golgappa/Pani Puri, unique to Prayagraj. Instead of the typical spicy-tangy water (pani), the crispy hollow puris (batashe) are filled with thick, creamy, seasoned Dahi (curd/yogurt) and sweet-tangy Sonth (dried ginger-tamarind chutney). The combination creates a perfect balance of crispy puri, cool creamy yogurt, sweet-spicy chutney, and aromatic spices. Often topped with sev, boondi, pomegranate seeds, and fresh coriander. The sonth (made from tamarind pulp, jaggery, roasted cumin, black salt, and dry ginger) adds a distinctive sweet-tangy flavor profile. This variation is milder and creamier than regular golgappa, making it popular among those who prefer less spicy food. Found at specialized chaat vendors in markets like Johnstongang, Chowk, and Civil Lines. Best enjoyed fresh as the puri becomes soggy quickly once filled.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Masala Churmura (मसाला चुरमुरा)',
        description: 'Light Street Snack - A quick, delicious, healthy, and budget-friendly street snack made from Churmura (puffed rice/murmura), a staple across Bihar and Eastern UP. Dry roasted puffed rice is mixed with finely chopped vegetables including onions, tomatoes, green chilies, boiled potatoes, raw mango (in season), fresh coriander, roasted peanuts, and sev. Seasoned with lemon juice, chaat masala, black salt, roasted cumin powder, and sometimes mustard oil for authentic flavor. The mixture is tossed together on a plate or in a paper cone. The result is a crunchy, tangy, spicy, light snack perfect for evening hunger pangs. Extremely popular among students, office workers, and budget travelers. Sold by numerous vendors outside colleges, near railway station, at parks, and busy market crossings. Can be customized to taste - more spicy, extra lemon, or additional toppings. A zero-guilt snack that\'s filling yet light.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
    ], localImageMappings.prayagraj?.dishes),
    stayingPlaces: [
      {
        name: 'Riverside Hotels',
        type: 'Hotel',
        description: 'Hotels with views of Sangam',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'ayodhya',
    name: 'Ayodhya',
    region: REGIONS.PURVANCHAL,
    tagline: 'The Birthplace of Lord Rama',
    description: 'Ancient city of immense religious and historical significance',
    heroImage: getImageWithFallback(localImageMappings.ayodhya?.hero, 'https://images.unsplash.com/photo-1588408065718-d86af7b4ca6d?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      {
        name: 'Ram Mandir',
        description: 'Grand temple at the birthplace of Lord Rama',
        image: 'https://images.unsplash.com/photo-1588408065718-d86af7b4ca6d?q=80&w=800',
      },
      {
        name: 'Hanuman Garhi',
        description: 'Fortress temple dedicated to Hanuman',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Kanak Bhavan',
        description: 'Temple gifted to Sita by Kaikeyi',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Ram Ki Paidi',
        description: 'Series of ghats along Saryu River',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ], localImageMappings.ayodhya?.placesToVisit),
    historicalPlaces: [
      {
        name: 'Dashrath Mahal',
        description: 'Palace of King Dashrath, father of Lord Rama',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Sita Ki Rasoi',
        description: 'Kitchen of Goddess Sita',
        image: 'https://images.unsplash.com/photo-1598524721496-3e49d2a43bf0?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Guptar Ghat',
        description: 'Where Lord Rama took Jal Samadhi',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
      {
        name: 'Jain Mandir',
        description: 'Beautiful ancient Jain temple',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    famousDishes: withFallbackByIndex([
      {
        name: 'Ram Laddu',
        description: 'Special laddus offered as prasad',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Ayodhya Peda',
        description: 'Traditional milk-based sweet',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Satvik Thaali',
        description: 'Pure vegetarian traditional meal',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Malpua',
        description: 'Sweet pancake dessert',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
    ], localImageMappings.ayodhya?.dishes),
    stayingPlaces: [
      {
        name: 'Pilgrimage Hotels',
        type: 'Hotel',
        description: 'Hotels catering to pilgrims',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'gorakhpur',
    name: 'Gorakhpur',
    region: REGIONS.PURVANCHAL,
    tagline: 'City of Saints and Spirituality',
    description: 'Known for the Gorakhnath Temple and rich Buddhist heritage',
    heroImage: getImageWithFallback(localImageMappings.gorakhpur?.hero, 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      {
        name: 'Gorakhnath Temple',
        description: 'Major temple dedicated to saint Gorakhnath',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Gita Press',
        description: 'World\'s largest publisher of Hindu religious texts',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800',
      },
      {
        name: 'Ramgarh Taal',
        description: 'Large lake perfect for boating and picnics',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
      },
      {
        name: 'Railway Museum',
        description: 'Historic collection of vintage trains',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800',
      },
    ], localImageMappings.gorakhpur?.placesToVisit),
    historicalPlaces: withFallbackByIndex([
      {
        name: 'Imambara',
        description: 'Beautiful Islamic monument',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Geeta Vatika',
        description: 'Garden with inscriptions from Bhagavad Gita',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
    ], localImageMappings.gorakhpur?.historicalPlaces),
    hiddenGems: withFallbackByIndex([
      {
        name: 'Kushmi Forest',
        description: 'Dense forest area rich in wildlife',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800',
      },
      {
        name: 'Taramandal',
        description: 'Planetarium for astronomy enthusiasts',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800',
      },
    ], localImageMappings.gorakhpur?.hiddenGems),
    famousDishes: withFallbackByIndex([
      {
        name: 'Thaggu Ke Laddu',
        description: 'Famous laddus sold near railway station',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Rabri Jalebi',
        description: 'Jalebi served with thick rabri',
        image: 'https://images.unsplash.com/photo-1571877209935-4a5dcdeb5a1f?q=80&w=800',
      },
      {
        name: 'Galouti Kebab',
        description: 'Melt-in-mouth mutton kebabs',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Lehsun wale Chhole Samosa',
        description: 'Spicy chana-stuffed samosa with garlic notes',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Makuni Roti',
        description: 'Traditional flatbread specialty',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Aloo Poori',
        description: 'Classic breakfast combo',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
    ], localImageMappings.gorakhpur?.dishes),
    stayingPlaces: [
      {
        name: 'City Hotels',
        type: 'Hotel',
        description: 'Modern hotels near temple',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  
  // CENTRAL & WESTERN UP REGION
  {
    id: 'agra',
    name: 'Agra',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'City of the Taj Mahal',
    description: 'Home to three UNESCO World Heritage Sites and Mughal architecture',
    heroImage: getImageWithFallback(localImageMappings.agra?.hero, 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      {
        name: 'Taj Mahal',
        description: 'Iconic marble mausoleum, symbol of eternal love',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800',
      },
      {
        name: 'Agra Fort',
        description: 'Massive red sandstone fort and UNESCO World Heritage Site',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
      {
        name: 'Fatehpur Sikri',
        description: 'Magnificent abandoned Mughal city',
        image: 'https://images.unsplash.com/photo-1610019337951-1d5a42c1e0f8?q=80&w=800',
      },
      {
        name: 'Itimad-ud-Daulah',
        description: 'Baby Taj - exquisite marble tomb',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ], localImageMappings.agra?.placesToVisit),
    historicalPlaces: withFallbackByIndex([
      {
        name: 'Mehtab Bagh',
        description: 'Garden offering stunning view of Taj Mahal',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
      {
        name: 'Chini Ka Rauza',
        description: 'Persian-style mausoleum with glazed tile work',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Mankameshwar Temple',
        description: 'Ancient Shiva temple',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ], localImageMappings.agra?.historicalPlaces),
    hiddenGems: withFallbackByIndex([
      {
        name: 'Guru Ka Taal Gurudwara',
        description: 'Sikh shrine with historical significance',
        image: 'https://images.unsplash.com/photo-1598524721496-3e49d2a43bf0?q=80&w=800',
      },
      {
        name: 'Rajapur',
        description: 'Village known for traditional crafts',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
    ], localImageMappings.agra?.hiddenGems),
    famousDishes: withFallbackByIndex([
      {
        name: 'Petha',
        description: 'Iconic Agra sweet made from ash gourd',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Bedai and Jalebi',
        description: 'Popular breakfast combination',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Mughlai Cuisine',
        description: 'Rich curries and kebabs',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
    ], localImageMappings.agra?.dishes),
    stayingPlaces: withFallbackByIndex([
      {
        name: 'Oberoi Amarvilas',
        type: 'Luxury Hotel',
        description: 'Luxury hotel with Taj view',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
      {
        name: 'Jain Dharamshala',
        type: 'Budget',
        description: 'Traditional pilgrimage accommodation',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ], localImageMappings.agra?.stay),
  },
  {
    id: 'fatehpur-sikri',
    name: 'Fatehpur Sikri',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'Abandoned Mughal Capital',
    description: 'UNESCO World Heritage ghost city built by Emperor Akbar',
    heroImage: getImageWithFallback(localImageMappings.fatehpurSikri?.hero, 'https://images.unsplash.com/photo-1610019337951-1d5a42c1e0f8?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      {
        name: 'Buland Darwaza',
        description: 'Grand victory gateway',
        image: 'https://images.unsplash.com/photo-1610019337951-1d5a42c1e0f8?q=80&w=800',
      },
      {
        name: 'Jama Masjid',
        description: 'Historic mosque within palace complex',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Palace Complex',
        description: 'Courtyards and royal residences',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800',
      },
    ], localImageMappings.fatehpurSikri?.placesToVisit),
    historicalPlaces: withFallbackByIndex([
      {
        name: 'Anup Talao',
        description: 'Decorative pool used for performances',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
      {
        name: 'Hiran Minar',
        description: 'Tower memorial to Akbar’s favorite antelope',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Mariam-uz-Zamani Palace',
        description: 'Residence of Akbar’s chief queen',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ], localImageMappings.fatehpurSikri?.historicalPlaces),
    hiddenGems: [],
    famousDishes: [],
    stayingPlaces: [],
  },
  // Newly added Purvanchal cities with local image mappings
  {
    id: 'mirzapur',
    name: 'Mirzapur',
    region: REGIONS.PURVANCHAL,
    tagline: 'Waterfalls and Carpet Heritage',
    description: 'Known for scenic waterfalls, ancient forts, and carpet weaving traditions',
    heroImage: getImageWithFallback(localImageMappings.mirzapur?.hero, 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      { name: 'Chunar Fort', description: 'Historic fort on the banks of Ganges', image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800' },
      { name: 'Lakhaniya Dari Waterfall', description: 'Spectacular seasonal waterfall', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800' },
      { name: 'Wyndham Falls', description: 'Lush forest waterfall trek', image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800' },
      { name: 'Sita Kund', description: 'Sacred mythological pond', image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800' },
      { name: 'Ancient Temple Complex', description: 'Cluster of shrines with carvings', image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800' },
    ], localImageMappings.mirzapur?.placesToVisit),
    historicalPlaces: [],
    hiddenGems: [],
    famousDishes: withFallbackByIndex([
      { name: 'Baati Chokha', description: 'Roasted wheat balls with smoky chokha', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800' },
      { name: 'Kachori Jalebi', description: 'Sweet-spicy breakfast combo', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800' },
      { name: 'Churmura', description: 'Spiced puffed rice snack', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800' },
      { name: 'Malpua', description: 'Traditional sweet pancake dessert', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800' },
    ], localImageMappings.mirzapur?.dishes),
    stayingPlaces: [],
  },
  {
    id: 'azamgarh',
    name: 'Azamgarh',
    region: REGIONS.PURVANCHAL,
    tagline: 'Pottery and Saree Weaving Hub',
    description: 'Historic town noted for black clay pottery, saree markets, and cultural heritage',
    heroImage: getImageWithFallback(localImageMappings.azamgarh?.hero, 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      { name: 'Govind Sahab', description: 'Prominent local temple complex', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800' },
      { name: 'Daulat Ibrahim Khan Tomb', description: 'Historical tomb architecture', image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800' },
      { name: 'Mehnagar Fort', description: 'Ancient fort ruins with scenic views', image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800' },
      { name: 'Durvasa Rishi Ashram', description: 'Mythological hermitage site', image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800' },
      { name: 'Dattatreya Ashram', description: 'Spiritual retreat near river', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800' },
      { name: 'Tamsa River', description: 'Peaceful riverside landscapes', image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800' },
    ], localImageMappings.azamgarh?.placesToVisit),
    hiddenGems: withFallbackByIndex([
      { name: 'Nizamabad Black Clay Pottery', description: 'Unique craft tradition', image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800' },
      { name: 'Mubarakpur Saree Market', description: 'Traditional weaving and trade', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800' },
    ], localImageMappings.azamgarh?.hiddenGems),
    historicalPlaces: [],
    famousDishes: withFallbackByIndex([
      { name: 'Launglata', description: 'Flaky pastry stuffed with khoya', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800' },
      { name: 'Amla Laddu', description: 'Vitamin-rich sweet spheres', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800' },
      { name: 'Chawal ke Farre', description: 'Steamed rice rolls, lightly spiced', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800' },
      { name: 'Chole Samosa', description: 'Crispy samosa topped with spicy chole', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800' },
      { name: 'Arbi Patta Rolls', description: 'Colocasia leaf savory spirals', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800' },
      { name: 'Chatpati Chaat', description: 'Tangy street food mix', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800' },
      { name: 'Kalika Mutton', description: 'Richly spiced local mutton curry', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800' },
      { name: 'Chicken Biryani', description: 'Aromatic layered rice and chicken', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800' },
    ], localImageMappings.azamgarh?.dishes),
    stayingPlaces: [],
  },
  {
    id: 'ballia',
    name: 'Ballia',
    region: REGIONS.PURVANCHAL,
    tagline: 'Freedom Fighters and River Heritage',
    description: 'Known for independence movement legacy, river ghats, and rustic cuisine',
    heroImage: getImageWithFallback(localImageMappings.ballia?.hero, 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      { name: 'Shaheed Smarak', description: 'Memorial honoring martyrs', image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800' },
      { name: 'Sangam Ghat', description: 'River confluence scenic point', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800' },
      { name: 'Surha Tal', description: 'Seasonal lake and bird habitat', image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800' },
      { name: 'Bhrigu Ashram', description: 'Ancient sage hermitage', image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800' },
      { name: 'Sitab Diara', description: 'Historic village area', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800' },
      { name: 'Janglee Baba Mandir', description: 'Temple in rustic setting', image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800' },
    ], localImageMappings.ballia?.placesToVisit),
    historicalPlaces: [],
    hiddenGems: [],
    famousDishes: withFallbackByIndex([
      { name: 'Launglata', description: 'Khoya-filled festive pastry', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800' },
      { name: 'Litti Chokha', description: 'Roasted wheat and smoky mash', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800' },
      { name: 'Litti Chhola', description: 'Variation with spicy chhola', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800' },
      { name: 'Badi Poori', description: 'Fried lentil dumpling poori combo', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800' },
      { name: 'Kanda Poha', description: 'Onion poha breakfast staple', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800' },
      { name: 'Gajar ka Halwa', description: 'Slow-cooked carrot dessert', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800' },
      { name: 'Sattu ki Lassi', description: 'Cooling yogurt and roasted gram drink', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800' },
      { name: 'Gulab Sakri', description: 'Regional sweet delicacy', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800' },
    ], localImageMappings.ballia?.dishes),
    stayingPlaces: [],
  },
  {
    id: 'deoria',
    name: 'Deoria',
    region: REGIONS.PURVANCHAL,
    tagline: 'Ghats and Temple Traditions',
    description: 'River ghats, spiritual centers, and vibrant local sweets culture',
    heroImage: getImageWithFallback(localImageMappings.deoria?.hero, 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      { name: 'Devraha Baba Ashram', description: 'Spiritual hermitage center', image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800' },
      { name: 'Barhaj Saryu River Ghat', description: 'Peaceful riverside rituals', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800' },
      { name: 'Majhauli Raj Fort', description: 'Historic fort remains', image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800' },
      { name: 'Dudheshwar Nath Mandir', description: 'Popular Shiva temple', image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800' },
      { name: 'Tirupati Balaji Temple', description: 'Southern style temple architecture', image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800' },
      { name: 'Devrahi Mata Mandir', description: 'Local goddess shrine', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800' },
    ], localImageMappings.deoria?.placesToVisit),
    historicalPlaces: [],
    hiddenGems: [],
    famousDishes: withFallbackByIndex([
      { name: 'Samosa Chaat', description: 'Crispy samosa with tangy toppings', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800' },
      { name: 'Bedmi Puri', description: 'Spiced lentil puri breakfast', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800' },
      { name: 'Litti Chokha', description: 'Roasted sattu dumplings and mash', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800' },
      { name: 'Poori Jalebi', description: 'Sweet-spicy festive combo', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800' },
      { name: 'Daal Poori', description: 'Protein-rich puri variant', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800' },
      { name: 'Gud ki Kheer', description: 'Jaggery sweetened rice pudding', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800' },
      { name: 'Chhena Dessert', description: 'Fresh curdled milk sweet', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800' },
      { name: 'Chivda Mix', description: 'Seasoned flattened rice snack', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800' },
    ], localImageMappings.deoria?.dishes),
    stayingPlaces: [],
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'City of Nawabs',
    description: 'Known for its Nawabi culture, kebabs, and architectural marvels',
    heroImage: getImageWithFallback(localImageMappings.lucknow?.hero, 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      {
        name: 'Bara Imambara',
        description: 'Architectural marvel with the famous Bhul Bhulaiya maze',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Chota Imambara',
        description: 'Beautiful monument adorned with chandeliers',
        image: 'https://images.unsplash.com/photo-1598524721496-3e49d2a43bf0?q=80&w=800',
      },
      {
        name: 'Rumi Darwaza',
        description: 'Imposing gateway symbolizing Lucknow',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
      {
        name: 'Hazratganj',
        description: 'Historic shopping and cultural district',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      },
    ], localImageMappings.lucknow?.placesToVisit),
    historicalPlaces: withFallbackByIndex([
      {
        name: 'The British Residency',
        description: 'Ruins from 1857 uprising',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Ambedkar Memorial Park',
        description: 'Massive memorial with impressive architecture',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
    ], localImageMappings.lucknow?.historicalPlaces),
    hiddenGems: withFallbackByIndex([
      {
        name: 'Dilkusha Kothi',
        description: 'English baroque palace ruins',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Kudiya Ghat',
        description: 'Peaceful riverside spot',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ], localImageMappings.lucknow?.hiddenGems),
    famousDishes: withFallbackByIndex([
      {
        name: 'Tunday Kababi',
        description: 'World-famous melt-in-mouth kebabs',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Lucknawi Biryani',
        description: 'Aromatic awadhi-style biryani',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800',
      },
      {
        name: 'Nihari and Kulcha',
        description: 'Slow-cooked meat stew with bread',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Galouti Kebab',
        description: 'Soft, spiced minced meat kebabs',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
    ], localImageMappings.lucknow?.dishes),
    stayingPlaces: withFallbackByIndex([
      {
        name: 'Taj Hotel',
        type: 'Luxury Hotel',
        description: 'Premium luxury accommodation',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
      {
        name: 'Gandhi Ashram',
        type: 'Ashram',
        description: 'Peaceful ashram stay',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ], localImageMappings.lucknow?.stay),
  },
  {
    id: 'mathura-vrindavan',
    name: 'Mathura & Vrindavan',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'Krishna\'s Divine Land',
    description: 'Birthplace of Lord Krishna and center of Krishna devotion',
    heroImage: getImageWithFallback(localImageMappings.mathuraVrindavan?.hero, 'https://images.unsplash.com/photo-1588408065718-d86af7b4ca6d?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      {
        name: 'Shree Krishna Janmabhoomi',
        description: 'Birthplace of Lord Krishna',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Banke Bihari Temple',
        description: 'Most popular temple in Vrindavan',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'ISKCON Temple',
        description: 'Modern temple with stunning architecture',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Prem Mandir',
        description: 'Magnificent illuminated temple',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Vishram Ghat',
        description: 'Sacred bathing ghat on Yamuna',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ], localImageMappings.mathuraVrindavan?.placesToVisit),
    historicalPlaces: [
      {
        name: 'Dwarkadheesh Temple',
        description: 'Ancient temple with intricate carvings',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Govardhan Hill',
        description: 'Sacred hill lifted by Krishna',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Nidhivan',
        description: 'Mysterious garden where Krishna dances at night',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
      {
        name: 'Seva Kunj',
        description: 'Peaceful garden of divine play',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
      {
        name: 'Kusum Sarovar',
        description: 'Beautiful sandstone reservoir',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    famousDishes: withFallbackByIndex([
      {
        name: 'Peda',
        description: 'Famous milk sweet of Mathura',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Satvik Thali',
        description: 'Pure vegetarian meal',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
    ], localImageMappings.mathuraVrindavan?.dishes),
    stayingPlaces: withFallbackByIndex([
      {
        name: 'Temple Ashrams',
        type: 'Ashram',
        description: 'Spiritual accommodation in ashrams',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ], localImageMappings.mathuraVrindavan?.ashrams),
  },

  // HIMALAYAN FOOTHILL & WESTERN UP REGION
  {
    id: 'meerut',
    name: 'Meerut',
    region: REGIONS.HIMALAYAN,
    tagline: 'The Sports City with Rich Heritage',
    description: 'Known for its sports goods industry and historical significance in the 1857 uprising',
    heroImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Shahid Smarak',
        description: 'Memorial for martyrs of 1857 uprising',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Suraj Kund',
        description: 'Ancient temple and sacred pond',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'St. John\'s Church',
        description: 'Historic church from British era',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Gandhi Bagh',
        description: 'Peaceful garden in city center',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
    ],
  famousDishes: withFallbackByIndex([
      {
        name: 'Gajak and Revdi (गजक और रेवड़ी)',
        description: 'Winter delicacies. Gajak is a brittle confectionery of sesame and sugar, while Revdi are small, hard candies of sesame and jaggery',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Naan Khatai (नानखटाई)',
        description: 'Traditional Indian shortbread cookie with a crumbly texture and delicate cardamom flavor',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Shami Kebab (शामी कबाब)',
        description: 'Made from minced meat and lentils, known for their soft texture and robust, spicy flavor',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Poori Sabzi (पूड़ी सब्ज़ी)',
        description: 'Classic North Indian breakfast of deep-fried puffy bread with spicy potato curry',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Paneer Pasanda (पनीर पसंदा)',
        description: 'Thin slices of paneer stuffed with nuts and spices, folded, fried, and simmered in creamy gravy',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800',
      },
      {
        name: 'Aloo Tikki (आलू टिक्की)',
        description: 'Potato patty that\'s perfectly crisp outside while remaining soft and flavorful inside',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
  ], localImageMappings.meerutExtra?.dishes),
    stayingPlaces: [
      {
        name: 'City Hotels',
        type: 'Hotel',
        description: 'Modern hotels near commercial areas',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'bareilly',
    name: 'Bareilly',
    region: REGIONS.HIMALAYAN,
    tagline: 'The Furniture Capital of India',
    description: 'Famous for its furniture industry and mouth-watering street food culture',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Alakhnath Temple',
        description: 'Ancient temple dedicated to Lord Shiva',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Fun City Mall',
        description: 'Modern shopping and entertainment hub',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Trivati Nath Temple',
        description: 'Historic Shiva temple with ancient architecture',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Phoenix United Mall Rooftop',
        description: 'Great views and hangout spot',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      },
    ],
  famousDishes: withFallbackByIndex([
      {
        name: 'Seekh Kebab (सीख कबाब)',
        description: 'Minced mutton expertly spiced, skewered, and grilled over charcoal, resulting in a smoky, tender flavor',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Nihari (निहारी)',
        description: 'Rich, slow-cooked mutton stew, simmered overnight with special spices. Popular hearty breakfast',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Aloo Tikki Chaat (आलू टिक्की चाट)',
        description: 'Fried to a perfect crisp and served with chutneys, yogurt, and spiced chickpeas',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Kulfi Falooda (कुल्फी फालूदा)',
        description: 'Dense, creamy kulfi with vermicelli noodles, sweet basil seeds, and rose syrup',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Swal Aloo (स्वाल आलू)',
        description: 'Bareilly\'s signature breakfast. Spicy, dry potato preparation with crispy triangular flour crisps',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Moong Dal Cheela (मूंग दाल चीला)',
        description: 'Savory pancake from moong lentils, lightly spiced and often stuffed with paneer',
        image: 'https://images.unsplash.com/photo-1630384082577-4e6d4c27f0ce?q=80&w=800',
      },
  ], localImageMappings.bareillyExtra?.dishes),
    stayingPlaces: [
      {
        name: 'Local Hotels',
        type: 'Hotel',
        description: 'Comfortable accommodations near city center',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'moradabad',
    name: 'Moradabad',
    region: REGIONS.HIMALAYAN,
    tagline: 'Brass City of India',
    description: 'World-famous for its brass handicrafts and unique culinary traditions',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Jama Masjid',
        description: 'Beautiful mosque with Mughal architecture',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Sai Temple',
        description: 'Popular pilgrimage site',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Brass Handicraft Market',
        description: 'Explore centuries-old brass craft tradition',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Prem Wonderland',
        description: 'Water park and amusement park',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
    ],
  famousDishes: withFallbackByIndex([
      {
        name: 'Moradabadi Dal (मुरादाबादी दाल)',
        description: 'Light, flavorful Moong Dal garnished with fried onions, green chilies, chaat masala, and lemon',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Moradabadi Biryani (मुरादाबादी बिरयानी)',
        description: 'Lighter, more aromatic version than Lucknow biryani. Known for fragrant rice and subtle spices',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800',
      },
      {
        name: 'Mutton Korma (मटन कोरमा)',
        description: 'Tender mutton in rich, flavorful gravy made from yogurt, fried onions, and aromatic spices',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Multani Chhole Chawal (मुल्तानी छो����े चावल)',
        description: 'Spicy chickpeas served over rice with tangy and hot spices',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Dal Jalebi (दाल जलेबी)',
        description: 'Unique twist on jalebi, made using different types of lentil flour for different texture',
        image: 'https://images.unsplash.com/photo-1571877209935-4a5dcdeb5a1f?q=80&w=800',
      },
  ], localImageMappings.moradabadExtra?.dishes),
    stayingPlaces: [
      {
        name: 'Heritage Hotels',
        type: 'Hotel',
        description: 'Hotels showcasing brass city heritage',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'aligarh',
    name: 'Aligarh',
    region: REGIONS.HIMALAYAN,
    tagline: 'Lock City and Educational Hub',
    description: 'Famous for Aligarh Muslim University and lock manufacturing industry',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Aligarh Muslim University',
        description: 'Historic university with beautiful architecture',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800',
      },
      {
        name: 'Aligarh Fort',
        description: 'Historic fort with rich Mughal history',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Sir Syed House',
        description: 'Former residence of Sir Syed Ahmad Khan',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Jama Masjid',
        description: 'Beautiful mosque in old city',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
  famousDishes: withFallbackByIndex([
      {
        name: 'Aligarh ki Kachori (अलीगढ़ की कचौड़ी)',
        description: 'Distinctly crisp, hard, and flaky kachori served with spicy, thick potato curry heavily flavored with hing',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Shami Kebab (शामी कबाब)',
        description: 'Melt-in-the-mouth kebab from minced meat and lentils, bound with spices and pan-fried',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Gajak (गजक)',
        description: 'High-quality winter sweet made from sesame seeds and jaggery, famous for its crispness',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Tehri (तहरी)',
        description: 'Fragrant, one-pot yellow rice dish cooked with potatoes, peas, and aromatic spices',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Nihari (निहारी)',
        description: 'Slow-cooked meat stew, traditionally for breakfast. Known for aromatic spices and tender meat',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
  ], localImageMappings.aligarhExtra?.dishes),
    stayingPlaces: [
      {
        name: 'University Guest Houses',
        type: 'Guest House',
        description: 'Comfortable stays near AMU campus',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },
  {
    id: 'saharanpur',
    name: 'Saharanpur',
    region: REGIONS.HIMALAYAN,
    tagline: 'Wood Carving Capital',
    description: 'Renowned for exquisite wood carving and mouth-watering street food',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Shakumbhari Devi Temple',
        description: 'Ancient goddess temple on hilltop',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Company Garden',
        description: 'Beautiful botanical garden',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Ambala Cantt Railway Station',
        description: 'Historic railway architecture',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Wood Carving Markets',
        description: 'Explore traditional craftsmen at work',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      },
    ],
  famousDishes: withFallbackByIndex([
      {
        name: 'Aloo Tikki Chaat (आलू टिक्की चाट)',
        description: 'Legendary chaat. Aloo Tikki fried to perfect crisp and served with spicy-sweet chutneys and yogurt',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Moong Dal Pakodi (मूंग दाल पकौड़ी)',
        description: 'Famous crispy fritters from Biharihgarh made from ground moong dal with spicy green chutney',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Ghewar (घेवर)',
        description: 'High-quality traditional sweet enjoyed during monsoon season',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Namkeen (नमकीन)',
        description: 'Wide variety of fresh, locally-made savory snack mixtures',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Rasmalai (रसमलाई)',
        description: 'Exceptionally soft and spongy Rasmalai made with pure, fresh milk',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Khurma (खुरमा)',
        description: 'Traditional deep-fried flour dough coated in crystallized sugar syrup. Crunchy and addictive',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
  ], localImageMappings.saharanpurExtra?.dishes),
    stayingPlaces: [
      {
        name: 'City Hotels',
        type: 'Hotel',
        description: 'Hotels near major attractions',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'rampur',
    name: 'Rampur',
    region: REGIONS.HIMALAYAN,
    tagline: 'City of Royal Heritage',
    description: 'Known for Rampuri cuisine and knife manufacturing',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Raza Library',
        description: 'Repository of rare manuscripts and books',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800',
      },
      {
        name: 'Rampur Raza Fort',
        description: 'Historic fort of Rampur Nawabs',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Jama Masjid',
        description: 'Beautiful mosque with Islamic architecture',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Khas Bagh',
        description: 'Royal garden with historical significance',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
    ],
  famousDishes: withFallbackByIndex([
      {
        name: 'Rampuri Korma (रामपुरी कोरमा)',
        description: 'Rich, aromatic mutton curry with browned onions, yogurt, and vetiver root flavor. Distinct from Awadhi korma',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Seekh Kebab (सीख कबाब)',
        description: 'Known for firm texture and robust, peppery spice blend, different from softer Lucknow kebabs',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Adrak ka Halwa (अदरक का हलवा)',
        description: 'Rare medicinal winter sweet made from ginger, milk, sugar, and ghee. Sharp, sweet, and warming',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Murgh Musallam (मुर्ग मुसल्लम)',
        description: 'Whole chicken marinated, stuffed with eggs and minced meat, and slow-cooked. Celebratory royal dish',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Kachhe Gosht ki Tikia (कच्चे गोश्त की टिकिया)',
        description: 'Pan-fried patties from raw minced meat with raw papaya as tenderizer. Local specialty',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Doodh ki Lauki (दूध की लौकी)',
        description: 'Rich dessert where bottle gourd is slow-cooked in sweetened milk and khoya',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
  ], localImageMappings.rampurExtra?.dishes),
    stayingPlaces: [
      {
        name: 'Heritage Properties',
        type: 'Heritage Hotel',
        description: 'Experience royal Rampur hospitality',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'muzaffarnagar',
    name: 'Muzaffarnagar',
    region: REGIONS.HIMALAYAN,
    tagline: 'Sugar Bowl of India',
    description: 'Major sugarcane and jaggery production hub of North India',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Jaggery Markets',
        description: 'Experience the heart of jaggery trade',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      },
      {
        name: 'Company Bagh',
        description: 'Historic garden and park',
        image: 'https://images.unsplash.com/photo-1591874010161-4ab2ae6c4f06?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Shukratal',
        description: 'Pilgrimage site where Mahabharata was narrated',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Sugarcane Fields',
        description: 'Experience rural agricultural landscape',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800',
      },
    ],
  famousDishes: withFallbackByIndex([
      {
        name: 'Gur (Jaggery) (गुड़)',
        description: 'High-quality jaggery available in many forms: plain, masala, with peanuts. The city\'s signature product',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Gajak / Revdi (गजक / रेवड़ी)',
        description: 'Winter staple made from excellent local jaggery and sesame seeds. Gajak is brittle, Revdi are hard candies',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Kadhi Pakora (कढ़ी पकौड़ा)',
        description: 'Hearty and tangy yogurt-based curry with gram flour fritters. Staple of Western UP',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Aloo Poori (आलू पूड़ी)',
        description: 'Standard hearty breakfast of deep-fried bread and spicy potato curry',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Gur ki Kheer (गुड़ की खीर)',
        description: 'Rice pudding sweetened with local jaggery instead of sugar, giving rustic, earthy flavor',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Ganne ka Ras (गन्ने का रस)',
        description: 'Freshest and most authentic sugarcane juice, especially during harvest season',
        image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=800',
      },
      {
        name: 'Tilkut (तिलकुट)',
        description: 'Simple traditional sweet of pounded roasted sesame seeds and jaggery. High-energy winter snack',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
  ], localImageMappings.muzaffarnagarExtra?.dishes),
    stayingPlaces: [
      {
        name: 'Business Hotels',
        type: 'Hotel',
        description: 'Hotels catering to sugar industry professionals',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'bijnor',
    name: 'Bijnor',
    region: REGIONS.HIMALAYAN,
    tagline: 'Gateway to Uttarakhand',
    description: 'Located near the foothills, known for sugarcane and unique sweets',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Vidur Kuti',
        description: 'Pilgrimage site from Mahabharata era',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Najibabad',
        description: 'Historic town with Mughal heritage',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Mandawar Fort',
        description: 'Ancient fort ruins',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Ganges Riverside',
        description: 'Peaceful river views',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
  famousDishes: withFallbackByIndex([
      {
        name: 'Ganne ka Ras (गन्ने का रस)',
        description: 'Fresh, sweet sugarcane juice, a staple drink as part of the sugarcane belt',
        image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=800',
      },
      {
        name: 'Bal Mithai (बाल मिठाई)',
        description: 'Brown, chocolate-like fudge from roasted khoya, coated in white sugar balls. Uttarakhand influence',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Kadhi Pakora (कढ़ी पकौड़ा)',
        description: 'Tangy yogurt curry with gram flour fritters, a Western UP favorite',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Poori Sabzi (पूड़ी सब्ज़ी)',
        description: 'Hearty breakfast of spicy potato curry with hot, deep-fried bread',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Singori (सिंगोरी)',
        description: 'Traditional Kumaoni sweet where khoya is wrapped in Malu leaf and steamed, giving unique aroma',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Urad Dal ke Pakode (उड़द दाल के पकोड़े)',
        description: 'Crispy fritters from ground urad dal, popular evening snack with green chutney',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Tehri (तहरी)',
        description: 'Simple one-pot vegetarian rice with potatoes, peas, cauliflower, and spices. Comforting meal',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Makhan Malai (मक्खन मलाई)',
        description: 'Seasonal, airy, frothy milk-based dessert, similar to Nimish or Malaiyyo, found in winter',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
  ], localImageMappings.bijnorExtra?.dishes),
    stayingPlaces: [
      {
        name: 'Local Inns',
        type: 'Guest House',
        description: 'Simple accommodations for travelers',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },

  // BUNDELKHAND REGION
  {
    id: 'jhansi',
    name: 'Jhansi',
    region: REGIONS.BUNDELKHAND,
    tagline: 'Gateway to Bundelkhand - City of Rani Lakshmibai',
    description: 'The principal urban hub of Bundelkhand, immortalized by the valor of Rani Lakshmibai during the 1857 Rebellion',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Jhansi Fort (झाँसी का किला)',
        description: 'A formidable hill fort built in 1613 CE by the Bundela Rajput ruler Raja Bir Singh Deo of Orchha. Perched atop Bangira Hill, the fort sprawls over 15 acres and is protected by massive granite walls 16-20 feet thick and up to 30 feet high. The fort has ten gates (darwazas), each designed with defensive mechanisms. The fort gained immortal fame during the 1857 Indian Rebellion when Rani Lakshmibai led a heroic defense against British forces led by General Hugh Rose. After a fierce two-week siege in March-April 1858, the fort fell, but the Rani escaped on horseback with her adopted son strapped to her back - a moment etched in Indian nationalist history. The fort complex includes the Shiva Temple, Ganesh Temple, British-era cannons still positioned on ramparts, the execution tower where captured freedom fighters were hanged, and a memorial to fallen soldiers. The panoramic view from the fort encompasses the entire city and surrounding Bundelkhand landscape. A museum within the fort displays weapons, documents, and artifacts from the 1857 uprising. Sound and light shows recreate the siege and Rani\'s bravery. The fort stands as an eternal symbol of resistance and courage.',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
      {
        name: 'Rani Mahal (रानी महल)',
        description: 'The exquisite palace of Rani Lakshmibai, built in the 18th century in typical Maratha architectural style with intricate frescoes, ornate pillars, and beautiful arches. After the Raja of Jhansi\'s death, the Rani lived here until the 1857 uprising. The palace complex includes multiple halls, residential quarters, courtyards with fountains, and a beautiful garden. The most striking features are the wall paintings (murals) depicting scenes from mythology, royal court life, and the Bundeli culture. The Darbar Hall has beautifully painted ceilings with floral and geometric patterns. The palace now serves as an archaeological museum showcasing the Rani\'s belongings, weapons, costumes, manuscripts, and photographs documenting her life and the 1857 rebellion. Personal items like her sword, shield, and clothing are preserved with reverence. The museum displays rare photographs of the fort siege and documents related to the Doctrine of Lapse that led to Jhansi\'s annexation. A statue of the Rani on horseback adorns the palace grounds. The palace architecture reflects the artistic sensibilities of the Maratha period. Visiting the palace provides intimate insights into the life of India\'s most celebrated woman warrior.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Orchha (25 km from Jhansi) (ओरछा)',
        description: 'A magnificent medieval town on the banks of Betwa River, founded in 1531 by Bundela chief Rudra Pratap Singh as the capital of Orchha Kingdom. This architectural gem is located just 25 km from Jhansi and is easily accessible. The town is frozen in time with stunning palaces, temples, and cenotaphs (chhatris) built in the 16th-17th centuries. The Jahangir Mahal is a grand palace built by Bir Singh Deo to welcome Mughal Emperor Jahangir - a perfect fusion of Mughal and Rajput architecture. The Raj Mahal features beautiful murals depicting religious and courtly themes. The Ram Raja Temple is unique in India as it\'s the only place where Lord Rama is worshipped as a king (Raja) rather than a deity. The Chaturbhuj Temple, with its towering spires, was originally built to house the Rama idol. The Laxminarayan Temple has exquisite frescoes on ceilings and walls. Along the Betwa River stand 14 royal cenotaphs (chhatris) built for Orchha\'s rulers - stunning monuments that reflect beautifully in the river. Evening aarti at Ram Raja Temple is a soul-stirring experience. Orchha offers heritage walks, river rafting, camping, and sound-light shows. The town has been nominated for UNESCO World Heritage status.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Government Museum Jhansi (सरकारी संग्रहालय झाँसी)',
        description: 'Established in 1878, one of UP\'s oldest museums, housed in a beautiful building on Sadar Bazaar. The museum contains an extensive collection of artifacts from Chandela, Bundela, and British periods. The sculpture gallery displays exquisite stone carvings from nearby temples, including Chandela-period sculptures showing the artistic mastery of medieval Bundelkhand. The museum has a dedicated section on the 1857 uprising with weapons, documents, proclamations, and portraits related to the rebellion. Archaeological finds include ancient coins, inscriptions, pottery, and terracotta artifacts providing insights into the region\'s history spanning 2,000 years. The art gallery features Bundeli miniature paintings, manuscripts, and decorative arts. The ethnographic section displays tribal artifacts, traditional costumes, and implements showcasing the lifestyle of Bundelkhand\'s indigenous communities. A special section is devoted to Maithili Sharan Gupt, the national poet born near Jhansi, displaying his works and personal belongings. The museum is essential for understanding Bundelkhand\'s layered history.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Maithili Sharan Gupt Memorial (मैथिलीशरण गुप्त स्मारक)',
        description: 'A memorial and museum dedicated to Maithili Sharan Gupt (1886-1964), one of modern India\'s greatest Hindi poets, born in Chirgaon village near Jhansi. Honored as "Rashtra Kavi" (National Poet) by Mahatma Gandhi, Gupt\'s patriotic poetry, especially "Bharat-Bharati" (1912), became an anthem for the freedom struggle. His works revived the use of Khari Boli dialect in Hindi poetry. The memorial showcases his literary works, manuscripts, letters, photographs, and personal items. The museum provides insights into his contribution to Hindi literature and the independence movement. His poems on Yashodhara (Buddha\'s wife) and Saket (based on Ramayana) are considered masterpieces. The memorial conducts literary events, poetry recitations, and cultural programs celebrating his legacy. Visiting the memorial inspires appreciation for literary heritage and patriotic fervor.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'St. Jude\'s Shrine (सेंट जूड का तीर्थस्थल)',
        description: 'One of North India\'s most important Catholic pilgrimage sites, this beautiful church is dedicated to St. Jude Thaddeus, the patron saint of hopeless causes and desperate situations. The shrine attracts thousands of Christian pilgrims and devotees from other faiths throughout the year, with peak attendance during the annual feast in October. The church architecture blends European Gothic style with local influences. The interior features beautiful stained glass windows, religious paintings, and a serene prayer hall. Devotees believe that prayers offered here are especially powerful in resolving difficult life situations. The shrine organizes regular masses, prayer services, novenas, and healing services. The peaceful atmosphere, beautiful gardens, and spiritual energy make it a place of solace and hope. The annual feast is a grand celebration with processions, cultural programs, and communal meals attracting devotees from across India. The shrine exemplifies Bundelkhand\'s religious diversity and syncretism.',
        image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=800',
      },
      {
        name: 'Parichha Dam (पारीछा बांध)',
        description: 'A scenic dam and reservoir on the Betwa River, located about 25 km from Jhansi. Built in the 1950s, this multipurpose project provides irrigation, hydroelectric power, and water supply to the region. The vast reservoir surrounded by hills and rocks creates a picturesque landscape perfect for day trips and picnics. The area offers boating facilities and nature walks. Bird watchers can spot various aquatic birds and migratory species. The sunset view over the calm waters with hills silhouetted in the background is breathtaking. The dam site is less crowded, making it ideal for peaceful contemplation and photography. A thermal power plant nearby can be viewed from a distance. The dam represents post-independence India\'s developmental aspirations in the water-scarce Bundelkhand region.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
  famousDishes: withFallbackByIndex([
      {
        name: 'Baati Chokha (बाटी चोखा)',
        description: 'Bundelkhand staple. Sattu-stuffed wheat balls roasted over coals, served with mashed vegetables and desi ghee',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Kachori Sabzi (कचौरी सब्ज़ी)',
        description: 'Classic North Indian breakfast of crispy, dal-stuffed kachoris with spicy aloo curry',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Kulfi Falooda (कुल्फी फालूदा)',
        description: 'Dense, creamy kulfi with vermicelli noodles and rose syrup',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Bhutte ka Kees (भुट्टे का कीस)',
        description: 'MP influence. Savory snack of grated fresh corn cooked with milk, mustard seeds, and spices',
        image: 'https://images.unsplash.com/photo-1630384082577-4e6d4c27f0ce?q=80&w=800',
      },
      {
        name: 'Bara (बरा)',
        description: 'Classic Bundeli dish of split black lentil dumplings soaked in tangy buttermilk with spices',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Ras Kheer (रस खीर)',
        description: 'Unique seasonal kheer sweetened with fresh sugarcane juice during harvest, giving earthy sweetness',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Maheri (महेरी)',
        description: 'Savory porridge-like dish with broken wheat or rice and buttermilk. Light yet filling comfort food',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Thopa (थोपा)',
        description: 'Savory cake from chickpea flour cooked thick with spices, then spread and cut into diamonds',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
  ], localImageMappings.jhansiExtra?.dishes),
    stayingPlaces: [
      {
        name: 'Heritage Hotels',
        type: 'Hotel',
        description: 'Hotels celebrating Jhansi\'s brave history',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'hathras',
    name: 'Hathras',
    region: REGIONS.BUNDELKHAND,
    tagline: 'Hing and Rabri Capital',
    description: 'Famous for high-quality asafoetida (hing) and delicious rabri',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Hathras Fort',
        description: 'Historic fort and city landmark',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
      {
        name: 'Local Markets',
        description: 'Famous hing and sweet markets',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Mahamaya Temple',
        description: 'Ancient temple dedicated to goddess',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Sasni',
        description: 'Nearby historical town',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Hathras ki Rabri (हाथरस की रबड़ी)',
        description: 'The city\'s most famous product. Dense, creamy scraped milk dessert known for thick layers and rich texture',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Hing ki Kachori (हींग की कचौड़ी)',
        description: 'Famous pungent and flavorful kachoris with hing (asafoetida) as the star ingredient',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Petha (पेठा)',
        description: 'High-quality ash gourd sweet, similar to Agra petha. Popular local delicacy',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Soan Papdi (सोन पपड़ी)',
        description: 'Flaky, cube-shaped sweet from gram flour, sugar, and ghee that melts in the mouth',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Hing Wale Aloo (हींग वाले आलू)',
        description: 'Simple potato curry defined by generous use of high-quality local hing, giving powerful aroma',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Arbi ke Patrode (अरबी के पतरोड़े)',
        description: 'Savory snack of spiced gram flour paste on taro leaves, rolled, steamed, and fried',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Dahi Bhalle (दही भल्ले)',
        description: 'Soft lentil dumplings soaked in yogurt with sweet-spicy chutneys. Local hing is key ingredient',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Local Hotels',
        type: 'Hotel',
        description: 'Simple comfortable stays',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },

  // CENTRAL & WESTERN UP REGION (Additional cities)
  {
    id: 'sultanpur',
    name: 'Sultanpur',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'Gateway to Awadh',
    description: 'Historic town known for bird sanctuary and traditional Awadhi culture',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Sultanpur Bird Sanctuary (सुल्तानपुर पक्षी विहार)',
        description: 'Spread over 129 hectares, this renowned bird sanctuary is a paradise for ornithologists and nature lovers. Home to over 250 species of resident and migratory birds including Siberian cranes, painted storks, rosy pelicans, and sarus cranes. Best visited from November to March when thousands of migratory birds from Europe, Siberia, and Afghanistan make this their winter home. The sanctuary features well-maintained trails, watch towers, and a small museum. Early morning visits offer spectacular views of birds feeding and calling.',
        image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=800',
      },
      {
        name: 'Hanuman Garhi Temple (हनुमान गढ़ी मंदिर)',
        description: 'An ancient hilltop temple dedicated to Lord Hanuman, believed to be over 300 years old. The temple complex sits atop a small hill accessed by climbing approximately 60 steps. The main sanctum houses a large idol of Hanuman in a standing posture. Local legends suggest this site was blessed by Lord Rama during his exile period. The temple comes alive during Hanuman Jayanti and Tuesdays when thousands of devotees offer prayers. The panoramic view of Sultanpur town from the temple courtyard is breathtaking during sunset.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Maqbara of Khwaja Mashhood (ख्वाजा मशहूद का मकबरा)',
        description: 'A magnificent Mughal-era mausoleum showcasing exquisite Indo-Islamic architecture from the 16th century. Built in honor of the revered Sufi saint Khwaja Mashhood, this structure features intricate lattice work, elegant domes, and beautifully carved archways. The tomb is surrounded by a well-maintained garden with fountains. The walls display Quranic verses in elegant calligraphy. The annual Urs (death anniversary) celebrations attract devotees from across the region. The monument stands as a testament to Sultanpur\'s rich Mughal heritage and the syncretic culture of Awadh.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Gomti Riverbank (गोमती नदी तट)',
        description: 'A serene and often overlooked stretch along the sacred Gomti River, perfect for peaceful walks and experiencing rural Awadhi life. The riverbank comes alive during early mornings when local villagers perform rituals and women wash clothes in traditional style. Several small temples dot the landscape. During winter evenings, the setting sun casts golden hues over the flowing waters. Local fishermen can be seen casting nets using age-old techniques. The area is ideal for photography, meditation, and connecting with the tranquil rural atmosphere. Small chai stalls nearby offer authentic village hospitality.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Tehri (तहरी)',
        description: 'Fragrant yellow rice cooked with vegetables and aromatic spices. Popular one-pot Awadhi meal',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Kakori Kebab style (काकोरी कबाब)',
        description: 'Awadhi influence brings soft, melt-in-mouth kebabs to the region',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Khasta Kachori (खस्ता कचौड़ी)',
        description: 'Crispy kachori stuffed with spiced moong or urad dal, served with tangy chutney',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Malai Peda (मलाई पेड़ा)',
        description: 'Soft, creamy milk sweet flavored with cardamom',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Forest Rest Houses',
        type: 'Guest House',
        description: 'Stays near bird sanctuary',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },
  {
    id: 'badaun',
    name: 'Badaun',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'City of Saints and Scholars',
    description: 'Historic town with rich Islamic heritage and Sufi traditions',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Jama Masjid Badaun (बदायूं जामा मस्जिद)',
        description: 'One of the most magnificent mosques in Uttar Pradesh, built during the Delhi Sultanate period in the 13th century by Sultan Iltutmish. This grand congregational mosque showcases pristine Islamic architecture with soaring minarets, spacious courtyards, and intricately carved stone pillars. The prayer hall can accommodate thousands of worshippers. The mosque features beautiful calligraphy from the Quran inscribed on its walls and arches. The central dome is an architectural marvel. The peaceful courtyard with its ablution pool creates a serene atmosphere. During Ramadan and Eid, the mosque becomes the spiritual heart of Badaun.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Dargah of Sheikh Aali (शेख आली की दरगाह)',
        description: 'A revered Sufi shrine dating back to the 14th century, dedicated to the great Sufi saint Sheikh Aali Qalandar, a contemporary of Nizamuddin Auliya. The dargah complex exemplifies the syncretic culture of medieval India with its blend of Hindu and Islamic architectural elements. The tomb chamber features marble work and colorful glass decorations. Qawwali sessions are held every Thursday evening, filling the air with divine music. The annual Urs festival attracts thousands of devotees from all faiths. The shrine embodies the message of universal love and brotherhood taught by Sufi masters.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Badaun Fort (बदायूं किला)',
        description: 'Ancient fortification with roots tracing back to the early medieval period, possibly 10th-11th century. The fort served as a crucial military and administrative center during various dynasties including the Rajputs, Delhi Sultanate, and later the Mughals. Though now largely in ruins, the remaining ramparts, bastions, and gateways speak of its strategic importance. The fort witnessed significant events during the Revolt of 1857. Archaeological excavations have revealed pottery, coins, and weapons from different periods. The sunset view from the fort\'s remaining walls offers glimpses into Badaun\'s layered history.',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Historical Markets - Chowk Bazaar (ऐतिहासिक बाज़ार - चौक बाज़ार)',
        description: 'A labyrinth of narrow lanes and traditional bazaars that have been the commercial heart of Badaun for over 400 years. These markets retain their medieval charm with wooden shopfronts, carved balconies, and traditional havelis. Famous for brassware, traditional lock-making, and hand-embroidered textiles. The spice market (masala mandi) fills the air with aromatic fragrances. Artisans can be seen practicing age-old crafts. The street food stalls offer authentic local flavors. Visit during early evenings when the markets are most vibrant. This is where the true spirit of old Badaun lives on.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Badauni Nihari (बदायूंनी निहारी)',
        description: 'Slow-cooked meat stew with rich spices, a breakfast specialty',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Sheermal (शीरमल)',
        description: 'Saffron-flavored flatbread, a royal Mughlai bread',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Mutton Korma (मटन कोरमा)',
        description: 'Rich, aromatic curry with tender meat in yogurt-based gravy',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Kheer (खीर)',
        description: 'Traditional rice pudding made with milk, sugar, and cardamom',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'City Hotels',
        type: 'Hotel',
        description: 'Comfortable accommodations in city center',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'pilibhit',
    name: 'Pilibhit',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'Tiger Reserve Gateway',
    description: 'Known for Pilibhit Tiger Reserve and natural beauty',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Pilibhit Tiger Reserve (पीलीभीत टाइगर रिज़र्व)',
        description: 'Established in 2014, this 730 sq km tiger reserve is part of the Terai Arc Landscape and home to approximately 65-70 Bengal tigers. The reserve encompasses diverse ecosystems including sal forests, tall grasslands, and swamp areas. Besides tigers, it shelters leopards, swamp deer, elephants, and over 550 species of birds. The reserve is crucial for the preservation of the endangered Bengal florican. Safari options include jeep safaris through core zones and buffer areas. Best visiting season is November to June. The reserve also has a successful tiger monitoring program. Night stays at forest rest houses offer immersive wildlife experiences with sounds of the jungle.',
        image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?q=80&w=800',
      },
      {
        name: 'Puranpur (पूरनपुर)',
        description: 'A charming historical town established during British colonial rule, formerly known as Pooranpur. The town showcases beautiful colonial architecture including the Circuit House, Railway Station, and several bungalows with Victorian-era design. The town was an important center during the 1857 revolt. The old cantonment area still retains its planned layout with wide roads and colonial buildings. The local church, built in 1850, features Gothic architecture. Puranpur\'s weekly market (haat) is famous for local produce and handicrafts. The town serves as an excellent base for exploring the surrounding Terai region and offers glimpses into colonial history.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Jama Masjid Pilibhit (जामा मस्जिद पीलीभीत)',
        description: 'A historic mosque located in the heart of Pilibhit\'s old city, dating back to the late Mughal period (18th century). Built with red sandstone and featuring Indo-Islamic architectural elements, the mosque has three imposing domes and two elegant minarets. The prayer hall can accommodate nearly 1,000 worshippers. The mosque walls display intricate stone carvings and verses from the Quran in beautiful Nastaliq calligraphy. The courtyard has a central ablution pool with marble flooring. The mosque has been a center of Islamic learning for centuries. The annual Shab-e-Barat and Eid celebrations here draw large congregations.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Chuka Beach (चूका बीच)',
        description: 'A scenic riverside location along the Sharda River, locally called "beach" despite being inland. This hidden gem is popular among locals for picnics and weekend getaways but remains unknown to most tourists. The sandy banks of the river create a beach-like atmosphere, especially during winter when water levels recede. The area is surrounded by dense forest on one side, offering opportunities for bird watching. Local fishermen can be seen casting nets in traditional style. During sunset, the golden light reflecting on the river creates magical moments. Small tea stalls nearby serve hot samosas and chai. The peaceful environment makes it ideal for nature photography and relaxation.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Jungle Chicken Curry (जंगली मुर्गा करी)',
        description: 'Wild fowl preparation reflecting the forest-adjacent culture',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Poori Sabzi (पूड़ी सब्ज़ी)',
        description: 'Traditional breakfast of deep-fried bread with spiced potato curry',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Matar Paneer (मटर पनीर)',
        description: 'Fresh cottage cheese and peas in tomato-based gravy',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800',
      },
      {
        name: 'Gajar ka Halwa (गाजर का हलवा)',
        description: 'Carrot-based sweet dessert cooked in milk and ghee',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Forest Lodges',
        type: 'Lodge',
        description: 'Eco-friendly stays near tiger reserve',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },
  {
    id: 'shahjahanpur',
    name: 'Shahjahanpur',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'Industrial Hub with Heritage',
    description: 'Important commercial city with blend of history and modernity',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Shahjahan Masjid (शाहजहां मस्जिद)',
        description: 'A magnificent mosque built in 1647 by Nawab Bahadur Khan, a noble in Emperor Shah Jahan\'s court, after whom the city is named. This architectural gem showcases classic Mughal design with three white marble domes, elegant minarets reaching 120 feet, and a spacious courtyard that can accommodate 5,000 worshippers. The mosque features intricate marble inlay work (pietra dura) similar to the Taj Mahal, with floral patterns and Quranic verses in beautiful calligraphy. The prayer hall has ornate arches and pillars with detailed stucco work. The central courtyard has a large ablution pool with marble fountains. The mosque\'s white marble gleams brilliantly in sunlight. It remains an active place of worship while also attracting architecture enthusiasts. The serene atmosphere makes it ideal for contemplation.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Jama Masjid Shahjahanpur (जामा मस्जिद शाहजहांपुर)',
        description: 'Another historic congregational mosque from the Mughal era, built in the early 17th century. This grand mosque features traditional Mughal architecture with red sandstone construction, multiple domes, and a large courtyard. The mosque serves as the main center for Friday prayers and Islamic festivals. The structure has beautiful stone carvings depicting geometric Islamic art patterns. The mihrab (prayer niche) is ornately decorated with verses from the Quran. The mosque\'s library houses ancient Islamic manuscripts and religious texts. During Ramadan, the mosque becomes the spiritual hub with special Taraweeh prayers and community iftars. The mosque complex includes a madrasa (Islamic school) that has been educating students for centuries. The architecture reflects the harmonious blend of religious devotion and artistic expression.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Shahjahanpur Fort Remnants (शाहजहांपुर किला अवशेष)',
        description: 'The remnants of a strategic fort complex that once protected the city during the Mughal and later Nawabi periods. Though much of the fort has been lost to time and urban development, remaining sections include parts of the fortification walls, a grand gateway (darwaza), and underground chambers. The fort played a significant role during the 1857 Revolt when it became a center of rebel activity. Historical records indicate the fort had multiple bastions, a moat, and sophisticated defense mechanisms. Archaeological surveys have uncovered coins, weapons, and pottery from various periods. The existing gateway shows fine brickwork and defensive architectural features. The site offers insights into medieval military architecture and the turbulent history of the region during colonial times.',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Roza Sharif - Sufi Dargah (रोज़ा शरीफ - सूफी दरगाह)',
        description: 'A peaceful Sufi shrine complex dedicated to a local Sufi saint from the 18th century, hidden in the older part of the city. Unlike the more famous dargahs, this shrine offers an intimate spiritual experience away from crowds. The tomb chamber features traditional Islamic architecture with a green dome and marble flooring. The surrounding garden has been maintained by the saint\'s descendants for generations. Every Thursday evening, qawwali sessions fill the air with devotional Sufi music. The shrine attracts devotees from all faiths who come seeking blessings and spiritual solace. The walls display poetry verses (shayari) from famous Sufi poets. During the annual Urs (death anniversary), the shrine hosts a small fair with traditional food stalls. The tranquil atmosphere makes it a perfect spot for meditation and inner peace.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Nawabi Biryani (नवाबी बिरयानी)',
        description: 'Fragrant rice with tender meat, cooked in traditional Awadhi style',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800',
      },
      {
        name: 'Seekh Kebab (सीख कबाब)',
        description: 'Minced meat kebabs grilled on skewers with aromatic spices',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Kadhi Pakora (कढ़ी पकौड़ा)',
        description: 'Yogurt-based curry with gram flour fritters',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Jalebi (जलेबी)',
        description: 'Crispy spiral sweet soaked in sugar syrup',
        image: 'https://images.unsplash.com/photo-1571877209935-4a5dcdeb5a1f?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Business Hotels',
        type: 'Hotel',
        description: 'Modern hotels for business travelers',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'bahraich',
    name: 'Bahraich',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'Land of Martyrs',
    description: 'Historic Terai region city known for Ghazi Miyan shrine',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Dargah of Ghazi Miyan (गाज़ी मियां की दरगाह)',
        description: 'One of North India\'s most revered Sufi shrines, dedicated to Salar Masud Ghazi (popularly known as Ghazi Miyan), a 11th-century warrior-saint who is venerated by both Muslims and Hindus. The shrine dates back nearly 1,000 years and is believed to be the place where Ghazi Miyan attained martyrdom in 1034 CE while fighting against Raja Sohal Deo. The dargah complex features stunning Indo-Islamic architecture with a large dome, intricate marble work, and silver doors. The tomb chamber is always draped in colorful chadors (cloth offerings) brought by devotees. Millions of pilgrims visit annually, especially during the Urs (death anniversary) in Rajab month, when a massive fair transforms the entire town. The shrine is famous for fulfilling wishes, particularly for childless couples. Hindu devotees call him Bale Miyan and offer milk to the tomb. The spiritual atmosphere transcends religious boundaries, embodying India\'s syncretic culture.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Katarniaghat Wildlife Sanctuary (कटर्नियाघाट वन्यजीव अभयारण्य)',
        description: 'A pristine 400 sq km wildlife sanctuary in the Terai belt along the India-Nepal border, part of the Dudhwa Tiger Reserve. Established in 1976, this sanctuary protects one of the last remaining patches of Terai ecosystem with its characteristic tall grasslands, sal forests, and swamp wetlands. The sanctuary is home to gharial crocodiles, Gangetic dolphins in the Girwa River, tigers, leopards, elephants, and the rare hispid hare. Over 350 bird species have been recorded, making it a paradise for bird watchers. The sanctuary offers jeep safaris, river safaris to spot dolphins, and nature walks with trained guides. The best time to visit is November to May. The sanctuary plays a crucial role in the conservation of endangered species. Forest rest houses offer immersive jungle experiences with sounds of wild elephants and leopard calls at night.',
        image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Chittaura Jheel (चितौरा झील)',
        description: 'A historic lake shrouded in legends and folklore, believed to date back to the medieval period. According to local legends, this lake marks the spot where a fierce battle was fought between Ghazi Miyan and the local Rajput king. The name "Chittaura" is said to be derived from either the Rajput stronghold of Chittor or from local dialectical words. The lake has significant religious importance as pilgrims visiting the Ghazi Miyan Dargah also pay respects at this lake. The serene water body is surrounded by ancient trees and small shrines. During the annual Urs fair, special rituals are performed at the lake. The lake serves as a habitat for various aquatic birds and migratory species. Local fishermen community has been associated with this lake for generations. The sunset view over the lake creates a mystical atmosphere, especially when temple bells and azaan sounds echo simultaneously.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Gonda Road Traditional Markets (गोंडा रोड पारंपरिक बाज़ार)',
        description: 'A vibrant cluster of traditional bazaars along the Bahraich-Gonda route that showcase authentic Terai region culture and crafts. These markets have been trading hubs for centuries, facilitating commerce between Indian plains and Nepali hills. The markets are famous for handwoven carpets and durries made by local weavers, bamboo and cane handicrafts from nearby tribal communities, and traditional brass utensils. Spice markets offer aromatic blends unique to the Terai belt. The weekly haat (rural market) sees villagers from both sides of the border trading agricultural produce, traditional medicines (herbs), and livestock. Street food stalls serve authentic local delicacies. The markets retain their old-world charm with wooden shops, handpainted signboards, and traditional weighing scales. Bargaining is expected and part of the experience. Visit during morning hours for the freshest produce and most vibrant atmosphere.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Terai Dal Bhat (तराई दाल भात)',
        description: 'Simple, nutritious meal of lentils and rice, Terai region staple',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Mutton Rogan Josh (मटन रोगन जोश)',
        description: 'Aromatic mutton curry with Kashmiri influences',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Samosa (समोसा)',
        description: 'Crispy triangular pastry filled with spiced potatoes',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Gud ki Kheer (गुड़ की खीर)',
        description: 'Rice pudding sweetened with jaggery instead of sugar',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Pilgrimage Hotels',
        type: 'Hotel',
        description: 'Accommodations near shrine',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'balrampur',
    name: 'Balrampur',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'Terai Forest Town',
    description: 'Known for sugar industry and proximity to Nepal border',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Tulsipur',
        description: 'Historical town with cultural significance',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Balrampur Museum',
        description: 'Local history and artifacts',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Maharaja\'s Palace',
        description: 'Former royal residence',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Rapti River Banks',
        description: 'Peaceful riverside spots',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Gur Products (गुड़ उत्पाद)',
        description: 'Various jaggery-based sweets and snacks from sugar belt',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Tehri (तहरी)',
        description: 'One-pot yellow rice with vegetables and whole spices',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Aloo Puri (आलू पूरी)',
        description: 'Deep-fried bread with spicy potato curry, breakfast favorite',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Tilkut (तिलकुट)',
        description: 'Sesame and jaggery sweet, winter specialty',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Local Guest Houses',
        type: 'Guest House',
        description: 'Simple stays for travelers',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },
  {
    id: 'gonda',
    name: 'Gonda',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'Agricultural Heart of Awadh',
    description: 'Known for agriculture and traditional Awadhi culture',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Devi Patan Temple',
        description: 'Ancient Shakti Peeth temple',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Colonelganj',
        description: 'Historic town with colonial architecture',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Ancient Temples',
        description: 'Several old temples dotting the region',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Rural Villages',
        description: 'Experience authentic Awadhi village life',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Awadhi Korma (अवधी कोरमा)',
        description: 'Creamy, mildly-spiced meat curry with royal Awadhi heritage',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800',
      },
      {
        name: 'Khasta Kachori (खस्ता कचौड़ी)',
        description: 'Crispy deep-fried bread stuffed with spiced lentils',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Nimona (निमोना)',
        description: 'Seasonal curry made from fresh green peas, winter specialty',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Peda (पेड़ा)',
        description: 'Milk-based sweet, soft and aromatic',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Circuit House',
        type: 'Guest House',
        description: 'Government guest house for travelers',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },
  {
    id: 'sant-kabir-nagar',
    name: 'Sant Kabir Nagar',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'Land of Sant Kabir',
    description: 'Named after the great saint-poet Kabir, spiritual heritage center',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Kabir Chaura Math',
        description: 'Monastery associated with Sant Kabir',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Maghar',
        description: 'Place where Sant Kabir attained samadhi',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Kabir Samadhi',
        description: 'Memorial of Sant Kabir',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Rural Weaving Villages',
        description: 'Traditional handloom weaving communities',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Sattu Paratha (सत्तू पराठा)',
        description: 'Nutritious flatbread stuffed with roasted gram flour',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Litti Chokha (लिट्टी चोखा)',
        description: 'Roasted wheat balls with mashed vegetables, Purvanchal influence',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Dal Puri (दाल पूरी)',
        description: 'Puffed bread stuffed with spiced lentils',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Kheer (खीर)',
        description: 'Rice pudding offered as prasad in temples',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Dharamshalas',
        type: 'Pilgrim Lodge',
        description: 'Simple lodging for pilgrims',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },
  {
    id: 'siddharthnagar',
    name: 'Siddharthnagar',
    region: REGIONS.CENTRAL_WESTERN,
    tagline: 'Birthplace of Buddha',
    description: 'Near Lumbini, connected to Buddhist heritage and Terai culture',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Naugarh Archaeological Site (नौगढ़ पुरातात्विक स्थल)',
        description: 'An important Buddhist archaeological site dating back to the 3rd century BCE, contemporary with the Mauryan Empire. Located just 25 km from Lumbini (Buddha\'s birthplace in Nepal), this site is part of the ancient Buddhist circuit. Excavations have revealed remains of stupas, monasteries (viharas), and sculptures from the Mauryan, Kushan, and Gupta periods. The site has yielded important artifacts including Buddha statues in Mathura and Gandhara styles, inscribed pottery, coins, and seals. According to Buddhist texts, this area was part of the Shakya kingdom where Buddha spent his youth. The Archaeological Survey of India has preserved the excavated structures and created a small site museum. The peaceful surroundings make it ideal for meditation and contemplation on Buddhist philosophy. The site is gaining importance on the international Buddhist pilgrimage circuit.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Buddhist Stupas and Monasteries (बौद्ध स्तूप और विहार)',
        description: 'A scattered complex of Buddhist stupas and monastic ruins dating from 3rd century BCE to 7th century CE, discovered across various sites in Siddharthnagar district. These archaeological remains provide evidence of the region\'s importance in ancient Buddhist civilization. The stupas vary in size, with some reaching 30 feet in height, built with bricks in typical hemispherical shape. Monastery ruins show cells for monks, meditation halls, and communal spaces. Excavations have uncovered beautiful terracotta plaques depicting Jataka tales (Buddha\'s previous birth stories), Buddha\'s life events, and Buddhist symbols like the Dharmachakra (wheel of law). Some sites have stone pillars with Brahmi script inscriptions. The monasteries were centers of learning where Buddhist philosophy, medicine, and arts were taught. The sites are now protected monuments with ongoing conservation efforts. Buddhist pilgrims from Thailand, Myanmar, Sri Lanka, and Japan increasingly visit these sites.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Ancient Monasteries - Vihara Remains (प्राचीन विहार अवशेष)',
        description: 'Extensive ruins of ancient Buddhist monasteries (viharas) that flourished between 3rd century BCE and 8th century CE. These monasteries were part of the greater Lumbini-Kushinagar Buddhist learning circuit. The architectural layout reveals typical Buddhist monastery design with a central courtyard surrounded by monks\' cells, a prayer hall (chaitya), library sections, and kitchen areas. The monasteries had sophisticated drainage systems and brick-paved pathways. Scholars believe these viharas housed hundreds of monks and served as centers for Buddhist education, attracting students from across Asia. The walls still show remnants of plaster with traces of murals. Stone and terracotta sculptures found here are now in museums. The monasteries were abandoned around 8th century CE following the decline of Buddhism in North India. Today, these silent ruins speak volumes about the intellectual and spiritual heritage of ancient India.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Border Villages - Tharu & Nepali Culture (सीमा गांव - थारू और नेपाली संस्कृति)',
        description: 'Fascinating villages along the India-Nepal border showcasing unique cultural fusion of Tharu tribal traditions, Nepali customs, and Indian influences. The Tharu people are indigenous to the Terai region with distinct language, customs, and artistic traditions. Their traditional mud houses (jhopdi) feature beautiful tribal paintings. The villages practice both Hindu and Buddhist traditions seamlessly. Local festivals blend Indian and Nepali celebrations. The villages are known for traditional Tharu dance forms performed during harvest season and weddings. Handicrafts include bamboo basketry, traditional jewelry, and handwoven textiles with distinctive patterns. The cuisine reflects cross-border influences with dishes like dal-bhat-tarkari, gundruk (fermented vegetables), and local rice beer. Open borders allow free movement, creating a unique cultural melting pot. Village markets see Nepal-India trade in daily goods. These villages offer authentic cultural tourism experiences far from commercialized tourist circuits.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Nepali Momos (नेपाली मोमो)',
        description: 'Steamed dumplings, influence from nearby Nepal',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800',
      },
      {
        name: 'Thukpa (थुक्पा)',
        description: 'Tibetan-style noodle soup popular in border areas',
        image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=800',
      },
      {
        name: 'Chura Dahi (चूड़ा दही)',
        description: 'Flattened rice with yogurt, simple traditional breakfast',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Sel Roti (सेल रोटी)',
        description: 'Ring-shaped sweet rice bread, Nepali influence',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Buddhist Lodges',
        type: 'Lodge',
        description: 'Simple accommodations for Buddhist pilgrims',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },

  // BUNDELKHAND REGION (Additional cities)
  {
    id: 'banda',
    name: 'Banda',
    region: REGIONS.BUNDELKHAND,
    tagline: 'Historic Bundelkhandi Town',
    description: 'Known for granite reserves and historical forts',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Kalinjar Fort (कालिंजर दुर्ग)',
        description: 'One of India\'s most ancient and impregnable hill forts, dating back over 2,000 years, perched atop an isolated rocky hill at 1,203 feet. Mentioned in the Mahabharata as the place where Lord Shiva meditated, and where he drank the poison (Kaal-jar, meaning conqueror of time/death). The fort has witnessed the rise and fall of multiple dynasties - Chandelas, Mughals, and later the British. It has seven gates (darwazas), each with unique architectural features and defensive mechanisms. The fort houses several ancient temples including the Neelkanth Temple dedicated to Shiva, with a natural Shivalinga inside a cave sanctum. The fort has numerous rock-cut sculptures, inscriptions dating to 5th century, underground chambers, and a sacred pond believed to have healing properties. The panoramic view from the top encompasses the entire Bundelkhand landscape. The fort remained unconquered for centuries until the Mughals finally captured it after a year-long siege.',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
      {
        name: 'Khajuraho Temples (nearby) (खजुराहो मंदिर - निकट)',
        description: 'The UNESCO World Heritage Site of Khajuraho, located about 90 km from Banda, features the world-famous group of temples built by Chandela dynasty between 950-1050 CE. While technically in Madhya Pradesh, these magnificent temples are easily accessible from Banda and form part of the greater Bundelkhand cultural circuit. The 22 surviving temples (out of original 85) are renowned for their nagara-style architectural symbolism and erotic sculptures that represent just 10% of the carvings. The temples are divided into Western, Eastern, and Southern groups. The Kandariya Mahadev Temple is the largest and most ornate. The intricate stone carvings depict gods, goddesses, warriors, musicians, and various aspects of medieval life. Sound and light shows in the evening narrate the history. The temples showcase the pinnacle of Indian temple architecture and sculptural art.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Banda Fort (बांदा का किला)',
        description: 'A strategic fort built by the Bundela Rajputs in the 17th century on the banks of Ken River. The fort gained prominence during the 1857 Revolt when Nawab Ali Bahadur of Banda made it his headquarters in the fight against British colonial forces. The fort witnessed fierce battles and became a symbol of resistance. After the revolt\'s suppression, the British executed many rebels here. The fort structure shows typical Bundeli military architecture with thick walls, bastions, and water channels. Though partially ruined, the remaining structures include the darbar hall, residential quarters, and a beautiful baradari (pavilion). The fort complex has a Shiva temple and a mosque, reflecting the syncretic culture. British-era cannons and weapons are still preserved. The fort offers stunning views of Ken River and the surrounding countryside.',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Ken River Valley (केन नदी घाटी)',
        description: 'A pristine and largely unexplored river valley carved by the Ken River through Bundelkhand\'s rocky terrain. The valley features dramatic landscapes with rocky outcrops, seasonal waterfalls, and dense riverine forests. The Ken River is considered sacred and mentioned in ancient Hindu texts. The valley is rich in biodiversity, home to vultures, crocodiles, and various fish species. Ancient rock shelters with prehistoric cave paintings (petroglyphs) can be found along the valley walls. The area is perfect for nature walks, rock climbing, and photography. During monsoons, the river swells and creates spectacular rapids. Local tribal communities still practice traditional fishing methods. The proposed Ken-Betwa river linking project has brought attention to this region\'s ecological importance. The sunset views from valley viewpoints are breathtaking.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Baati Chokha (बाटी चोखा)',
        description: 'Bundeli staple of roasted wheat balls with mashed vegetables',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Bundeli Bafla (बुंदेली बाफला)',
        description: 'Boiled and then roasted wheat dumplings served with ghee',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Kusli (कुसली)',
        description: 'Traditional Bundeli snack made from wheat flour',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Paan (पान)',
        description: 'Betel leaf preparation popular in the region',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Tourist Lodges',
        type: 'Lodge',
        description: 'Government tourism accommodations',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },
  {
    id: 'chitrakoot',
    name: 'Chitrakoot',
    region: REGIONS.BUNDELKHAND,
    tagline: 'Where Rama Lived in Exile',
    description: 'Sacred pilgrimage site associated with Ramayana',
    heroImage: getImageWithFallback(localImageMappings.chitrakoot?.hero, 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000'),
    placesToVisit: withFallbackByIndex([
      {
        name: 'Ramghat (रामघाट)',
        description: 'The most sacred ghat in Chitrakoot on the banks of the holy Mandakini River, where Lord Rama is believed to have bathed daily during his 14-year exile. The ghat stretches along the river with numerous temples and ashrams lining its banks. Every evening, a mesmerizing Ganga Aarti is performed with hundreds of oil lamps, creating a divine atmosphere. The sound of temple bells, Vedic chants, and devotional songs fills the air. Pilgrims take holy dips here believing it washes away sins. The ghat is especially crowded during Diwali when the Ram Vivah ceremony is celebrated with great fervor. Ancient stone steps lead down to the crystal-clear waters where you can see fish swimming. The sunrise view from Ramghat is spiritually uplifting.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
      {
        name: 'Kamadgiri (कामदगिरि)',
        description: 'The original Chitrakoot - a sacred forested hill circumference of approximately 5 km that devotees circumambulate (parikrama) as an act of devotion. According to Ramayana, this is where Lord Rama, Sita, and Lakshmana built their hut and spent most of their exile. The hill is considered the embodiment of Lord Rama himself, hence no temple is built on its peak out of reverence. The parikrama path is lined with small temples, ashrams, and sacred spots mentioned in ancient texts. The walk takes 2-3 hours and is best done early morning or late evening. Saints and sages have meditated in the caves dotting the hill. The spiritual energy here is palpable. During Diwali, the entire hill is illuminated with thousands of diyas, creating a breathtaking sight.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
      },
      {
        name: 'Hanuman Dhara (हनुमान धारा)',
        description: 'A spectacular temple situated on a hilltop, accessed by climbing 360 steep steps. Legend has it that after burning Lanka, Hanuman\'s body was scorching hot, and Lord Rama created a natural spring here to cool him down. The spring water continuously drips on the Hanuman idol, and devotees consider this water highly sacred. The temple offers panoramic views of the surrounding hills and Mandakini River valley. The climb, though strenuous, is spiritually rewarding. Along the way, you\'ll find smaller shrines and resting spots. The temple complex has beautiful murals depicting scenes from Ramayana. Visit during early mornings to avoid crowds and heat. Tuesdays and Saturdays see maximum devotee footfall.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ], localImageMappings.chitrakoot?.placesToVisit),
    historicalPlaces: [
      {
        name: 'Bharat Milap Temple (भरत मिलाप मंदिर)',
        description: 'This sacred site marks the emotional spot where Bharat met his elder brother Rama during the exile period, as described in Valmiki\'s Ramayana. After King Dasharatha\'s death, Bharat came to Chitrakoot to plead with Rama to return to Ayodhya, but Rama refused to break his promise to his father. The temple commemorates this touching reunion of dharma and devotion. The temple has beautiful paintings depicting the entire episode. Ancient stone inscriptions describe the historic meeting. The annual Bharat Milap festival during Diwali recreates this meeting with elaborate performances and processions. The temple architecture reflects the Bundeli style with local stone carvings. This site teaches the values of duty, sacrifice, and brotherly love that are central to Indian culture.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Sphatik Shila (स्फटिक शिला)',
        description: 'A sacred crystalline rock on the banks of Mandakini River where Lord Rama and Sita used to sit and gaze at the river. The rock is believed to have the divine footprints (charan paduka) of Rama and Sita naturally embedded in it. The rock has a translucent, crystal-like quality, hence the name Sphatik (crystal). According to legends, the rock became sanctified by the divine touch. The spot is peaceful and less crowded than other major sites, making it perfect for meditation. Small temple structures have been built around the rock for protection. The serene riverside location with surrounding trees creates a tranquil atmosphere. Many pilgrims sit here in contemplation, imagining the divine couple\'s presence. Best visited during early mornings when sunlight creates beautiful patterns on the rock surface.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
      },
    ],
    famousDishes: withFallbackByIndex([
      {
        name: 'Prasad Ladoo (प्रसाद लड्डू)',
        description: 'Sacred temple offering, gram flour sweet balls',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Peda (पेड़ा)',
        description: 'Milk-based sweet offered as prasad',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Poori Sabzi (पूड़ी सब्ज़ी)',
        description: 'Simple sattvic meal for pilgrims',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Kheer (खीर)',
        description: 'Rice pudding offered in temples',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
    ], localImageMappings.chitrakoot?.dishes),
    stayingPlaces: withFallbackByIndex([
      {
        name: 'Dharamshalas',
        type: 'Pilgrim Lodge',
        description: 'Simple lodging for pilgrims near ghats',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ], localImageMappings.chitrakoot?.stay),
  },
  {
    id: 'hamirpur',
    name: 'Hamirpur',
    region: REGIONS.BUNDELKHAND,
    tagline: 'Education Hub of Bundelkhand',
    description: 'Known for producing civil servants and academic excellence',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Maudaha',
        description: 'Historical town with ancient temples',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Rath',
        description: 'Town with archaeological significance',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Ancient Temples',
        description: 'Several temples from Chandela period',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Betwa Riverbank',
        description: 'Peaceful riverside locations',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Dal Bafla (दाल बाफला)',
        description: 'Bundeli version of dal baati, boiled then roasted dumplings',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Bundeli Peda (बुंदेली पेड़ा)',
        description: 'Regional variation of milk sweet',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Kachori (कचौड़ी)',
        description: 'Spiced lentil-stuffed fried bread',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Mawa Bati (मावा बाटी)',
        description: 'Sweet dumplings made with khoya',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Budget Hotels',
        type: 'Hotel',
        description: 'Simple accommodations for students and travelers',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'mahoba',
    name: 'Mahoba',
    region: REGIONS.BUNDELKHAND,
    tagline: 'City of Chandela Kings',
    description: 'Historic capital of Chandela dynasty with ancient lakes',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Sun Temple - Surya Mandir (सूर्य मंदिर)',
        description: 'A magnificent 9th-century temple built by the Chandela dynasty, dedicated to Surya (Sun God). This architectural marvel is one of the finest examples of Chandela temple architecture outside of Khajuraho. The temple stands on a high platform with intricately carved stone pillars, celestial figures, and geometric patterns. The sanctum sanctorum houses a beautiful idol of Surya riding his chariot drawn by seven horses. The temple walls depict various deities, apsaras (celestial dancers), and scenes from Hindu mythology. The sculptures showcase exceptional craftsmanship with attention to minute details. During sunrise, when sunlight illuminates the sanctum, the experience is divine. The temple complex also has smaller shrines dedicated to other deities. Archaeological studies suggest this was part of a larger temple complex.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Kirat Sagar Lake (कीरत सागर)',
        description: 'An engineering marvel created by Chandela King Kirat Singh in the 11th century. This vast artificial lake was part of an sophisticated water management system that included multiple interconnected lakes. The lake covers approximately 50 acres and was designed to provide water for irrigation, drinking, and the city\'s defense. Stone embankments and ghats line the lake shores, built with precision that has withstood centuries. The lake reflects the Chandela\'s advanced knowledge of hydrology and urban planning. Today, it serves as a peaceful spot for evening walks, boating, and bird watching. Migratory birds visit during winter months. The sunset view over the lake with ancient temples in the background creates stunning photo opportunities. Local legends speak of underwater tunnels connecting it to the fort.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
      {
        name: 'Mahoba Fort (महोबा किला)',
        description: 'Built in the 9th-10th century by the Chandela rulers, this fort was the capital of their kingdom before Khajuraho. Though now in ruins, the fort complex originally encompassed multiple palaces, temples, and administrative buildings spread across 35 acres. The fort played a crucial role during the famous battles between the Chandelas and Prithviraj Chauhan. The legendary warriors Alha and Udal defended this fort in the epic ballads of Bundelkhand. Remnants of the fortification walls, gateways, and underground chambers can still be explored. Archaeological excavations have uncovered ancient weapons, pottery, and coins. The fort offers panoramic views of the entire Mahoba town and surrounding lakes. The ruins whisper tales of medieval valor, romance, and architectural genius.',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Alha-Udal Memorial (आल्हा-ऊदल स्मारक)',
        description: 'A memorial dedicated to the legendary 12th-century warrior brothers Alha and Udal, whose bravery is immortalized in the folk ballads (Alha-Khand) of Bundelkhand. These warriors served King Paramardi of Mahoba and are celebrated for their extraordinary courage and loyalty. The memorial features large statues of the brothers in warrior poses with their weapons and armor. The site includes a small museum displaying weapons, armor replicas, and manuscripts of the Alha ballads. Traditional Bundeli folk singers often perform here, keeping the oral tradition alive. The memorial complex has murals depicting key battles and heroic deeds. Annual celebrations on Dussehra commemorate their memory with traditional performances. This site is a pilgrimage for those who cherish Bundelkhand\'s martial heritage and folk culture.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Madan Sagar Lake (मदन सागर)',
        description: 'Part of the ancient chain of 52 interconnected lakes built by Chandela kings, named after King Madanvarman who enhanced its structure in the 12th century. This engineering masterpiece demonstrates the Chandelas\' advanced understanding of water conservation and urban planning. The lake has beautiful stone ghats with steps leading to the water, carved pavilions (chhatris), and small temple shrines. Underground channels connect it to other lakes, creating a sustainable water management system. The lake area is remarkably peaceful and less visited by tourists, making it perfect for solitude seekers. Bird watchers can spot numerous species, especially during winter. The reflection of ancient structures in the calm waters creates picture-perfect moments. Local fishermen still use traditional methods. The lake embodies the ecological wisdom of medieval India.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Bundeli Thali (बुंदेली थाली)',
        description: 'Complete meal with baati, dal, chokha, and raita',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Aloo Bada (आलू बड़ा)',
        description: 'Spiced potato fritters, popular street snack',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Mawa Jalebi (मावा जलेबी)',
        description: 'Rich version of jalebi made with khoya',
        image: 'https://images.unsplash.com/photo-1571877209935-4a5dcdeb5a1f?q=80&w=800',
      },
      {
        name: 'Bundeli Papad (बुंदेली पापड़)',
        description: 'Traditional lentil wafers with local spices',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Heritage Properties',
        type: 'Hotel',
        description: 'Hotels near historical sites',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho',
    region: REGIONS.BUNDELKHAND,
    tagline: 'UNESCO World Heritage - Temple City',
    description: 'World-famous for Chandela dynasty temples with exquisite sculptures',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Kandariya Mahadev Temple (कंदारिया महादेव मंदिर)',
        description: 'The largest and most magnificent temple in Khajuraho, built around 1050 AD during the reign of Chandela King Vidyadhara. This architectural masterpiece is dedicated to Lord Shiva and represents the pinnacle of Nagara-style temple architecture. The main spire (shikhara) soars to over 31 meters (102 feet), symbolizing Mount Kailash, Shiva\'s abode. The temple is built on a high platform (jagati) and features 84 subsidiary spires arranged in a harmonious ascending sequence, creating a mountain-like silhouette. The entire temple surface is covered with over 900 sculptures, including gods, goddesses, celestial maidens (apsaras), warriors, musicians, and erotic figures representing tantric philosophies and celebration of life. The sanctum houses a marble Shivalinga. The intricate carvings depict various aspects of medieval life, mythology, and spiritual symbolism. The temple showcases perfect integration of architecture and sculpture, where every element serves both structural and artistic purposes.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Lakshmana Temple (लक्ष्मण मंदिर)',
        description: 'One of the earliest and best-preserved temples at Khajuraho, built by King Yashovarman around 930-950 CE and dedicated to Lord Vishnu in his three-headed (Vaikuntha) form. The temple is completely covered with intricate sculptural narratives, making it one of the most elaborately carved temples in the complex. The platform friezes depict military processions, royal court scenes, hunting expeditions, and daily life of the Chandela period, providing invaluable insights into medieval society. The temple walls showcase the entire Hindu pantheon, celestial beings, amorous couples (mithuna), and erotic sculptures. The sanctum contains a three-faced Vishnu idol. An inscription at the entrance records the temple\'s construction and the king\'s victories. The temple\'s architectural elements demonstrate the mature Chandela style. Sound and light shows held here every evening narrate the history of Khajuraho in a captivating manner.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Chausath Yogini Temple (चौसठ योगिनी मंदिर)',
        description: 'The oldest surviving temple at Khajuraho, dating to around 885 CE, making it nearly 1,150 years old. Unlike other Khajuraho temples built from fine sandstone, this temple is constructed from coarse granite, reflecting its early period. Dedicated to the 64 yoginis (Chausath Yogini) - powerful female attendants of Goddess Kali, this temple has a unique open-air, rectangular courtyard design rare among Indian temples. Originally 64 small shrines surrounded the courtyard, each housing a yogini idol, but only 35 cells survive today. The main shrine dedicated to Goddess Kali stands in the center. The temple is perched on a hilltop, requiring a climb that offers panoramic views of the entire Khajuraho landscape. The architectural simplicity and spiritual power of this tantric temple provide a stark contrast to the later ornate temples. This temple marks the beginning of the great Chandela temple-building tradition.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Archaeological Museum Khajuraho (पुरातत्व संग्रहालय)',
        description: 'Established in 1910, this museum houses an extensive collection of sculptures, architectural fragments, and artifacts recovered from Khajuraho temples and surrounding areas. The museum contains over 2,000 exquisite pieces spanning from the 9th to 12th centuries. The collection includes masterpieces like the dancing Ganesha, multi-armed Vishnu, erotic panels, celestial dancers, and various deities that were once part of destroyed or damaged temples. Detailed panels explain the symbolism, iconography, and techniques used by Chandela sculptors. The museum provides context to understand the religious, cultural, and artistic achievements of the Chandela dynasty. Scale models of temple architecture help visitors understand the complex structural elements. The museum is essential for anyone seeking deeper knowledge beyond the temple exteriors. Guided tours available for detailed explanations of the artistic and historical significance.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Ajaygarh Fort (अजयगढ़ किला)',
        description: 'A spectacular Chandela hill fort located 80 km from Khajuraho in the Panna district, perched atop a steep Vindhyan hill at 688 meters elevation. Built in the late Chandela period, this was their last capital after the fall of Mahoba and Kalinjar. The fort is named after King Ajaypal Chandel and offers one of the most dramatic settings in Bundelkhand. The climb to the fort involves ascending through five fortified gates (darwazas), each strategically positioned for defense. The fort complex once contained palaces, temples (including two Shiva temples), and reservoirs carved from rock. The ruins reveal advanced water management systems with interconnected tanks and channels. From the ramparts, you get 360-degree views of the Vindhyan ranges and dense forests below. The fort\'s remote location has preserved it from excessive tourism, maintaining its mysterious atmosphere. Local legends speak of hidden treasures and secret underground passages. The sunset view from the fort is breathtaking.',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
      {
        name: 'Raneh Falls (रानेह जलप्रपात)',
        description: 'A stunning natural wonder located 20 km from Khajuraho, where the Ken River has carved a 5 km long, 30-meter deep canyon through crystalline granite rocks spanning 100 million years of geological history. The gorge displays spectacular layers of different colored rocks - pink, red, and gray granite formations creating a painter\'s palette effect. During monsoon, the Ken River transforms into a series of cascading waterfalls plunging into the canyon, creating a magnificent spectacle. The area is now part of the Ken Gharial Wildlife Sanctuary, protecting endangered gharial crocodiles, vultures, and diverse flora. The site offers thrilling views from multiple vantage points along the canyon rim. Geologists consider this one of the finest examples of crystalline granite canyons in India. The interplay of light and shadow on the layered rocks creates ever-changing visual drama. Best visited post-monsoon (September-October) when water flow is optimal and rocks are clean. The site is perfect for photography and nature walks.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Panna National Park (पन्ना राष्ट्रीय उद्यान)',
        description: 'A pristine 543 sq km tiger reserve located just 30 km from Khajuraho, forming part of the Panna-Ken Tiger Reserve. Despite tiger population decline in 2009, successful reintroduction program has revived the reserve, now home to 40+ tigers. The park features diverse landscapes - dry deciduous teak and sal forests, open grasslands, and the perennial Ken River flowing through its heart creating scenic waterfalls and gorges. Besides tigers, the park shelters leopards, sloth bears, wild dogs, spotted deer, sambars, nilgai, and over 200 bird species. The unique feature is the presence of gharial crocodiles in the Ken River. Safari options include jeep safaris and boat safaris on Ken River, offering chances to spot wildlife and endemic birds. The park also contains ancient cave paintings and Pandav Falls. Diamond mines of Panna (India\'s only operational diamond mine) are located nearby. Best visiting season is November to March. Stay options include forest rest houses and eco-lodges offering immersive wilderness experiences.',
        image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?q=80&w=800',
      },
      {
        name: 'Benisagar Dam (बेनीसागर बांध)',
        description: 'A serene artificial reservoir located 15 km from Khajuraho, created by damming the local river. This lesser-known spot offers a peaceful escape from the temple crowds. The calm waters reflect the surrounding hills and sky, creating mirror-like images perfect for photography. The dam area is surrounded by natural beauty with rocky outcrops and seasonal wildflowers. It has become a favorite picnic spot for locals, especially during evenings and weekends. The area is excellent for bird watching, with various resident and migratory species frequenting the water. Small local vendors sell snacks and refreshments. During monsoon and post-monsoon months, the overflowing dam creates small cascades. The sunset views over the water body are particularly beautiful. It\'s an ideal place for quiet contemplation and nature appreciation away from tourist circuits.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Khajuraho Kachori (खजुराहो कचौड़ी)',
        description: 'Special large-sized kachoris stuffed with spiced moong dal or urad dal mixture, served with tangy tamarind chutney and spicy green chutney. The kachoris are deep-fried to golden perfection with a crispy exterior and soft, flavorful filling. Often topped with yogurt, onions, sev, and aromatic spices to create a complete chaat experience. A breakfast and snack favorite among locals and tourists.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Bundeli Thali (बुंदेली थाली)',
        description: 'Traditional meal platter featuring authentic Bundelkhand cuisine. Includes dal bafla or baati, kadhi, bharwa baingan (stuffed eggplant), aloo bhujia, seasonal vegetables, rice, rotis, papad, chutney, and desserts like mawa bati or kheer. The thali showcases the hearty, ghee-rich cooking style of the region with bold, earthy flavors and generous use of local spices.',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Lavang Lata (लवंग लता)',
        description: 'Khajuraho\'s signature sweet - delicate pastry rolls stuffed with sweetened khoya (reduced milk), nuts, and cardamom, then deep-fried until golden and crispy. The rolls are studded with cloves (lavang) hence the name. After frying, they\'re dipped in sugar syrup, giving them a crunchy-yet-soft texture with aromatic sweetness.',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
      },
      {
        name: 'Bhutte ki Khees (भुट्टे की खीस)',
        description: 'Madhya Pradesh influence - savory dish made from grated fresh corn cooked with milk, ghee, mustard seeds, green chilies, and coriander. The corn is cooked until creamy and slightly grainy in texture. Garnished with fresh coconut and served hot as a snack or side dish. Popular during corn season.',
        image: 'https://images.unsplash.com/photo-1630384082577-4e6d4c27f0ce?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Heritage Resorts',
        type: 'Resort',
        description: 'Luxury heritage properties near temple complex with traditional architecture',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
      {
        name: 'MP Tourism Properties',
        type: 'Hotel',
        description: 'Government-run comfortable hotels and lodges near temples',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
    ],
  },
  {
    id: 'datia',
    name: 'Datia',
    region: REGIONS.BUNDELKHAND,
    tagline: 'Magnificent Seven-Story Palace',
    description: 'Famous for Pitambara Peeth Shaktipeeth and the architectural marvel Datia Palace',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Datia Palace - Govind Mahal (दतिया का महल - गोविंद महल)',
        description: 'An architectural marvel and one of India\'s most unique palaces, built in 1614 AD by the Bundela king Bir Singh Deo (who also built Orchha). This seven-story palace stands 46 meters tall and is remarkable for being constructed entirely of stone and brick - no wood or iron was used in its construction, yet it has stood for over 400 years. The palace was built to host Mughal Emperor Jahangir for a single night during his visit, but ironically, no ruler ever lived in it permanently. The structure showcases a perfect blend of Rajput and Mughal architectural styles with intricate stone carvings, jharokhas (balconies), courtyards, and interconnected rooms and passages. The palace has 440 rooms spread across seven floors, connected by narrow staircases and passages that create a labyrinthine interior. The view from the top floor provides panoramic vistas of the entire Datia town and surrounding countryside. The palace\'s unique feature is its network of underground tunnels said to connect to other forts. The evening sound and light show narrates the palace\'s fascinating history. Despite its grandeur, the palace remains a mystery - why was such magnificence created for just one night?',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Pitambara Peeth Shaktipeeth (पीताम्बरा पीठ शक्तिपीठ)',
        description: 'One of the 51 Shaktipeeths in India and the most revered shrine in Bundelkhand, dedicated to Goddess Baglamukhi (Pitambara Devi), one of the ten Mahavidyas (great wisdom goddesses). According to Hindu belief, this is where a portion of Goddess Sati\'s body fell. The temple\'s history dates back centuries, though the current structure was renovated in recent times. The idol of Pitambara Devi is adorned in yellow (Pitambara means yellow garments), and the temple is painted in distinctive yellow color. Devotees believe the goddess has immense tantric powers to defeat enemies, win legal battles, and remove obstacles. The temple witnesses massive crowds during Navratri, especially on Ashtami and Navami days when lakhs of devotees throng for darshan. Special tantric rituals and havans are performed by priests. The temple complex has expanded with modern facilities but retains its spiritual authenticity. Many prominent personalities visit the temple seeking the goddess\'s blessings. The religious fervor and devotion here are palpable, transcending rational explanation.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
      {
        name: 'Vankhandeshwar Temple (वनखंडेश्वर मंदिर)',
        description: 'An ancient Shiva temple located on the banks of Karnawati River, believed to date back to the 9th-10th century Chandela period. The temple name derives from "Van-Khanda-Ishwar" meaning Lord of the forest region. The temple features classic Chandela architecture with a sanctum, mandapa, and the remnants of intricate stone carvings depicting deities, celestial beings, and mythological scenes. The Shivalinga in the sanctum is naturally formed (swayambhu) and is revered for its spiritual power. The temple complex has several smaller shrines and a sacred kund (water tank) where devotees take holy dips before worship. During Mahashivratri and Shravan month, the temple comes alive with thousands of devotees, decorations, and cultural programs. The peaceful riverside location creates a serene atmosphere for meditation and prayer. The temple\'s historical and archaeological significance has attracted researchers studying Chandela religious architecture. Local legends attribute miraculous healing powers to the temple\'s waters.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Bir Singh Palace Complex (बीर सिंह राजमहल परिसर)',
        description: 'The royal palace complex of Raja Bir Singh Deo, one of the most powerful Bundela kings and a contemporary of Mughal Emperor Jahangir. The complex includes the king\'s residential quarters, administrative buildings, audience halls (darbar), and temples. Though partially ruined, the remaining structures showcase the grandeur of Bundela royal architecture. The complex features beautiful chhatris (cenotaphs), ornate gateways, courtyards with fountains, and residential quarters with painted interiors. The architectural style reflects the transition period when Rajput rulers were adopting Mughal influences while maintaining their distinct identity. The palace walls still bear traces of original frescoes depicting court scenes, royal hunts, and religious themes. The complex offers insights into the lifestyle, administration, and cultural patronage of Bundela royalty. Archaeological excavations have uncovered coins, weapons, and artifacts from the period. The site is perfect for history enthusiasts and photographers.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Sonagiri Jain Temples (सोनगिरि जैन मंदिर)',
        description: 'A sacred Jain pilgrimage site located 15 km from Datia, featuring 77 pristine white Jain temples spread across a golden hill (Sonagiri means golden peak). The temples are dedicated to various Jain Tirthankaras and are architectural gems built between the 9th and 15th centuries. The main attraction is the hilltop temple of Bhagwan Chandraprabhu, the 8th Tirthankara. Devotees must climb 300+ steps barefoot as a mark of respect and devotion. The climb offers stunning views of the surrounding countryside. The temples feature beautiful marble work, intricate carvings, and peaceful sanctums. Sonagiri is considered one of the most important Digambara Jain atishaya kshetras (miracle sites) where many monks have attained salvation through Sallekhana (ritual fasting unto death). The complex has meditation caves where Jain monks practice intense austerities. The serene spiritual atmosphere, combined with architectural beauty and natural surroundings, makes this a unique destination. Mahavir Jayanti and Paryushan festivals witness large gatherings. The site promotes values of non-violence, simple living, and spiritual detachment.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Datia ke Bhujiye (दतिया के भुजिये)',
        description: 'Famous crispy, thin sev-like snack made from spiced gram flour. Datia\'s bhujiye has a distinct texture - finer and crispier than regular sev, with a perfect balance of spices including hing, turmeric, and red chili. Prepared using traditional methods with specific proportions that remain family secrets. Served as a standalone snack or added to chaat preparations. A popular gift item for visitors.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Khoya Jalebi (खोया जलेबी)',
        description: 'A rich variation of traditional jalebi where instead of maida, the spirals are made from solidified milk (khoya/mawa) mixed with a small amount of flour. The result is a denser, richer, and more milk-forward sweetness compared to regular jalebis. Deep-fried until golden and then soaked in fragrant sugar syrup. A winter specialty that\'s heavier and more filling.',
        image: 'https://images.unsplash.com/photo-1571877209935-4a5dcdeb5a1f?q=80&w=800',
      },
      {
        name: 'Poha Jalebi (पोहा जलेबी)',
        description: 'The quintessential breakfast combination of Madhya Pradesh that\'s popular in Datia. Flattened rice (poha) cooked with onions, peanuts, turmeric, and spices served alongside hot, crispy, syrup-soaked jalebis. The savory-sweet combination creates a perfect balance. The contrast of soft, mildly spiced poha with the sweet, crunchy jalebi is addictive. Served with spicy green chutney.',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'Pilgrim Lodges',
        type: 'Lodge',
        description: 'Comfortable dharamshalas and lodges near Pitambara Peeth for pilgrims',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
      {
        name: 'City Hotels',
        type: 'Hotel',
        description: 'Modern hotels in town with good amenities',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
  {
    id: 'lalitpur',
    name: 'Lalitpur',
    region: REGIONS.BUNDELKHAND,
    tagline: 'Land of Forts and Waterfalls',
    description: 'Historic town with stunning waterfalls, ancient forts and rich Bundeli heritage',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Deogarh Fort and Temples (देवगढ़ किला व मंदिर)',
        description: 'A massive hilltop fort dating to the Gupta period (5th-6th century CE), located 30 km from Lalitpur. The fort sits atop a 300-meter high isolated hill providing 360-degree views of the Bundelkhand landscape. The fort was an important stronghold during the Chandela period and later under various Bundela chieftains. The fort complex encompasses approximately 12 km in circumference with multiple gateways, palaces, temples, and water reservoirs carved from rock. The crown jewel is the Dashavatara Temple (Temple of Ten Incarnations), one of the earliest and finest examples of Gupta temple architecture in India. The temple is dedicated to Vishnu and features exquisite stone panels depicting the ten avatars of Vishnu in remarkably detailed relief work. The sculptural quality rivals contemporary Gupta art, with graceful proportions and serene expressions. Other notable structures include Jain temples with beautiful carvings and underground chambers. The fort has played roles in various historical battles. The sunset view from the ramparts is spectacular.',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
      {
        name: 'Rajghat Waterfall (राजघाट जलप्रपात)',
        description: 'A stunning natural waterfall located on the Betwa River, approximately 25 km from Lalitpur town. The waterfall cascades from a height of about 15-20 meters over rocky ledges, creating a spectacular display especially during and after the monsoon season (July-October). The force of water creates a misty atmosphere and a soothing natural symphony. The waterfall is surrounded by natural beauty - rocky terrain, seasonal greenery, and the flowing Betwa River. The site is perfect for picnics, photography, and nature appreciation. Local families frequent the spot during weekends and holidays. The area around the falls has natural rock formations that make excellent viewpoints. During peak flow, the waterfall\'s roar can be heard from a distance. The site has basic facilities but retains its natural, untouched character. Best visited post-monsoon when water flow is optimal but safe.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
      {
        name: 'Talbehat Fort (तालबेहट किला)',
        description: 'A picturesque fort town located 40 km from Lalitpur, built by Bundela rulers on the banks of an artificial lake (tal). The fort served as an important administrative and military center during the medieval period. The fort complex features impressive stone fortifications, gateways with defensive architecture, and remnants of palaces and temples. The unique aspect is its integration with the lake\'s water system - the fort draws its romantic character from the reflection on the calm waters. The fort has witnessed several historical events, including battles during the Maratha period and the 1857 rebellion. Local legends speak of brave Bundela warriors who defended this fort against multiple invaders. The fort town still retains its old-world charm with narrow lanes, traditional havelis, and active temples. The fort ramparts offer beautiful views of the lake and surrounding countryside. The annual fair during Kartik Purnima attracts pilgrims and tourists. The combination of military architecture and scenic lakeside setting makes it unique.',
        image: 'https://images.unsplash.com/photo-1586340965606-4240e8d0e6d2?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Chanderi Influence - Ancient Trade Route (चंदेरी प्रभाव - प्राचीन व्यापार मार्ग)',
        description: 'Lalitpur district was historically positioned on the ancient trade routes connecting northern and central India, showing influence of nearby Chanderi (famous for silk weaving and historical battles). The region has several archaeological sites, ancient wells, serais (rest houses), and temple ruins marking these old trade paths. The architecture shows a blend of styles - Gupta, Chandela, Bundela, and Mughal influences reflecting the diverse rulers and traders who passed through. Several step-wells (baolis) built for travelers still exist, showcasing advanced water conservation techniques. Ancient inscriptions in temples and forts provide insights into medieval trade, taxation systems, and cultural exchanges. Local museums and archaeological sites preserve coins, pottery, and artifacts from various periods. The legacy of this trade heritage continues in local handicrafts and metalwork traditions. Heritage walks and tours now trace these historical routes, connecting forgotten monuments.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Mata Parvati Temple - Deogarh Hill (माता पार्वती मंदिर - देवगढ़ पहाड़ी)',
        description: 'An ancient cave temple dedicated to Goddess Parvati, located within the Deogarh fort complex. The temple is carved out of natural rock, creating a mystical atmosphere. The sanctum has a natural rock formation worshipped as the goddess. Cave walls have ancient carvings and inscriptions. Local legends attribute miraculous powers to the goddess, with devotees believing that prayers here are always answered. The temple is especially revered by women seeking marital bliss and fertility. During Navratri, the temple witnesses large gatherings with special rituals and cultural programs. The trek to the cave temple through the fort ruins adds adventure to the spiritual journey. The cave maintains a naturally cool temperature even in summer. The spiritual energy combined with historical significance makes it a hidden treasure of Lalitpur.',
        image: 'https://images.unsplash.com/photo-1584274578638-2c3f8b3d0b4d?q=80&w=800',
      },
    ],
    famousDishes: [
      {
        name: 'Lalitpur ke Samose (लालितपुर के समोसे)',
        description: 'Distinct large-sized samosas with a unique spicing. The potato filling is cooked with generous amounts of crushed coriander seeds, fennel, and local spices giving it an aromatic flavor profile different from standard samosas. The covering is slightly thicker and flakier. Served piping hot with tangy imli chutney and hari chutney. A beloved snack across all sections of society.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Bundeli Aloo Baingan (बुंदेली आलू बैंगन)',
        description: 'A rustic, dry vegetable preparation of potatoes and eggplant cooked with minimal spices - primarily turmeric, red chili, coriander, and hing. The vegetables are shallow-fried until crispy on the outside while remaining soft inside. Finished with a tempering of mustard seeds and curry leaves. The simplicity allows the natural flavors to shine. Typically served with rotis and dal. Comfort food of Bundelkhand.',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Til ke Ladoo (तिल के लड्डू)',
        description: 'Traditional winter sweet made from sesame seeds and jaggery, essential during Makar Sankranti and Lohri festivals. Roasted sesame seeds are mixed with melted jaggery and ghee, then shaped into balls while still warm. The ladoos have a nutty, earthy sweetness and are considered highly nutritious, providing warmth during cold winter months. Often prepared with peanuts added for extra crunch.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
    ],
    stayingPlaces: [
      {
        name: 'UP Tourism Lodges',
        type: 'Lodge',
        description: 'Government tourism accommodations near major attractions',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800',
      },
      {
        name: 'Budget Hotels',
        type: 'Hotel',
        description: 'Affordable hotels in town for travelers',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },

  // PURVANCHAL REGION (Additional city)
  {
    id: 'ghazipur',
    name: 'Ghazipur',
    region: REGIONS.PURVANCHAL,
    tagline: 'Land of Litti Chokha',
    description: 'Eastern UP city known for authentic Purvanchali cuisine and opium factory',
    heroImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=2000',
    placesToVisit: [
      {
        name: 'Lord Cornwallis Tomb',
        description: 'Historic British-era monument',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
      {
        name: 'Ghazipur Ghat',
        description: 'Peaceful riverside ghats on Ganges',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
    historicalPlaces: [
      {
        name: 'Opium Factory',
        description: 'Historic government opium alkaloid factory',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800',
      },
    ],
    hiddenGems: [
      {
        name: 'Durgakund',
        description: 'Sacred pond and temple',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
      },
    ],
  famousDishes: withFallbackByIndex([
      {
        name: 'Litti Chokha (लिट्टी चोखा)',
        description: 'Purvanchal\'s most famous dish—roasted sattu-stuffed wheat balls with smoky mashed vegetables',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Sattu Paratha (सत्तू पराठा)',
        description: 'Nutritious and filling flatbread stuffed with savory roasted gram flour, spices, and pickles',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
      },
      {
        name: 'Ghughni (घुघनी)',
        description: 'Popular street snack of boiled dried peas cooked with onions, tomatoes, and spices. Served tangy',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Kadhi Chawal (कढ़ी चावल)',
        description: 'Beloved comfort meal of spicy yogurt and gram flour curry served over plain rice',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Dal Pithi (दाल पीठी)',
        description: 'One-pot wholesome meal where wheat flour dumplings shaped like flowers simmer in spicy lentil stew',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Thekua (ठेकुआ)',
        description: 'Traditional deep-fried sweet biscuit of wheat flour, ghee, and jaggery. Festive snack for Chhath Puja',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
      {
        name: 'Nimona (निमोना)',
        description: 'Winter specialty curry from ground fresh green peas cooked with potatoes and spices',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
      },
      {
        name: 'Dahi Chura (दही चूड़ा)',
        description: 'Simple no-cook breakfast of flattened rice mixed with fresh yogurt and sweetener',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800',
      },
  ], localImageMappings.ghazipurExtra?.dishes),
    stayingPlaces: [
      {
        name: 'Riverside Hotels',
        type: 'Hotel',
        description: 'Hotels near Ganges',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      },
    ],
  },
];

export const getCitiesByRegion = (region: string): CityData[] => {
  return citiesData.filter(city => city.region === region);
};

export const getCityById = (id: string): CityData | undefined => {
  return citiesData.find(city => city.id === id);
};

export const getAllCities = (): CityData[] => {
  return citiesData;
};
