export interface GalleryItem {
    id: string;
    src: string;
    category: string;
    alt: string;
}

export const galleryItems: GalleryItem[] = [
    // Brány
    { id: 'b1', src: '/web/brány/hliníkové/brána_hliníková_lamelová_.JPG', category: 'brany', alt: 'Hliníková lamelová brána' },
    { id: 'b2', src: '/web/brány/hliníkové/IMG_20251008_150250_762.jpg', category: 'brany', alt: 'Hliníková brána' },
    { id: 'b3', src: '/web/brány/kovové/brána_kovaná_dvojitá.JPG', category: 'brany', alt: 'Kovaná dvojitá brána' },
    { id: 'b4', src: '/web/brány/kovové/brána_ťahokov.JPG', category: 'brany', alt: 'Brána ťahokov' },
    { id: 'b5', src: '/web/brány/kovové/bránka_kovaná.JPG', category: 'brany', alt: 'Kovaná bránka' },
    { id: 'b6', src: '/web/brány/kovové/kovaná_plotová_vložka.JPG', category: 'brany', alt: 'Kovaná plotová vložka' },
    { id: 'b7', src: '/web/brány/kovové/2012_04_24-007139.JPG', category: 'brany', alt: 'Kovaná brána detail' },
    { id: 'b8', src: '/web/brány/kovové/IMG-20230313-WA0000.jpg', category: 'brany', alt: 'Kovová brána' },
    { id: 'b9', src: '/web/brány/kovové/IMG-20230313-WA0001.jpg', category: 'brany', alt: 'Kovová brána' },
    { id: 'b10', src: '/web/brány/kovové/IMG_20250528_132345_058.jpg', category: 'brany', alt: 'Kovová brána' },
    { id: 'b11', src: '/web/brány/kovové/IMG_20251006_074210_039.jpg', category: 'brany', alt: 'Kovová brána' },
    { id: 'b12', src: '/web/brány/kovové/klacany_3.JPG', category: 'brany', alt: 'Kovaná brána Kľačany' },
    { id: 'b13', src: '/web/brány/kovové/obyce_2.JPG', category: 'brany', alt: 'Kovaná brána Obyce' },
    { id: 'b14', src: '/web/brány/kovové/zikava_1.JPG', category: 'brany', alt: 'Kovaná brána Žikava' },
    { id: 'b15', src: '/web/brány/kovové/000006.jpg', category: 'brany', alt: 'Kovaná brána' },
    { id: 'b16', src: '/web/brány/nerezové/IMG_20250830_113902_731.jpg', category: 'brany', alt: 'Nerezová brána' },
    { id: 'b17', src: '/web/brány/nerezové/IMG_20250830_114038_070.jpg', category: 'brany', alt: 'Nerezová brána' },
    { id: 'b18', src: '/web/brány/nerezové/P_20190805_162238.jpg', category: 'brany', alt: 'Nerezová brána' },
    { id: 'b19', src: '/web/brány/nerezové/P_20190805_162312.jpg', category: 'brany', alt: 'Nerezová brána' },

    // Zábradlia
    { id: 'z1', src: '/web/zábradlia/nerezové/DSCN3473.JPG', category: 'zabradlia', alt: 'Nerezové zábradlie' },
    { id: 'z2', src: '/web/zábradlia/nerezové/DSCN3476.JPG', category: 'zabradlia', alt: 'Nerezové zábradlie detail' },
    { id: 'z3', src: '/web/zábradlia/nerezové/DSCN3677.JPG', category: 'zabradlia', alt: 'Nerezové zábradlie exteriér' },
    { id: 'z4', src: '/web/zábradlia/nerezové/IMG_20221020_174154_311.jpg', category: 'zabradlia', alt: 'Nerezové zábradlie' },
    { id: 'z5', src: '/web/zábradlia/nerezové/IMG_20221020_174209_066.jpg', category: 'zabradlia', alt: 'Nerezové zábradlie' },
    { id: 'z6', src: '/web/zábradlia/nerezové/P_20191003_115603.resized.jpg', category: 'zabradlia', alt: 'Nerezové zábradlie' },
    { id: 'z7', src: '/web/zábradlia/nerezové/P_20191003_115618.resized.jpg', category: 'zabradlia', alt: 'Nerezové zábradlie' },
    { id: 'z8', src: '/web/zábradlia/nerezové/P_20191003_125327.resized.jpg', category: 'zabradlia', alt: 'Nerezové zábradlie' },
    { id: 'z9', src: '/web/zábradlia/oceľové/06987_11_05_2012.JPG', category: 'zabradlia', alt: 'Oceľové zábradlie' },
    { id: 'z10', src: '/web/zábradlia/oceľové/2012_04_24-007135.resized.JPG', category: 'zabradlia', alt: 'Oceľové zábradlie' },
    { id: 'z11', src: '/web/zábradlia/oceľové/2012_04_24-007151.JPG', category: 'zabradlia', alt: 'Oceľové zábradlie' },

    // Schodiská
    { id: 's1', src: '/web/schodiská/schodisko_oceľové_1.jpg', category: 'schodiska', alt: 'Oceľové schodisko' },
    { id: 's2', src: '/web/schodiská/schodisko_oceľové_2.jpg', category: 'schodiska', alt: 'Oceľové schodisko' },
    { id: 's3', src: '/web/schodiská/DSC_1283.jpg', category: 'schodiska', alt: 'Schodisko detail' },
    { id: 's4', src: '/web/schodiská/IMG_0091.JPG', category: 'schodiska', alt: 'Schodisko točité' },
    { id: 's5', src: '/web/schodiská/IMG_0093.JPG', category: 'schodiska', alt: 'Schodisko točité' },
    { id: 's6', src: '/web/schodiská/IMG_0095.resized.JPG', category: 'schodiska', alt: 'Schodisko točité' },
    { id: 's7', src: '/web/schodiská/IMG_0096.JPG', category: 'schodiska', alt: 'Schodisko točité' },
    { id: 's8', src: '/web/schodiská/IMG_20220912_123046_363.jpg', category: 'schodiska', alt: 'Schodisko kovové' },
    { id: 's9', src: '/web/schodiská/IMG_20230911_174338_001.jpg', category: 'schodiska', alt: 'Schodisko kovové' },
    { id: 's10', src: '/web/schodiská/IMG_20251206_114916_014.jpg', category: 'schodiska', alt: 'Schodisko kovové' },

    // Plynové skrinky
    { id: 'p1', src: '/web/plynové%20skrinky/plynovaskrinka%20T1.jpg', category: 'plynove-skrine', alt: 'Plynová skrinka T1' },
    { id: 'p2', src: '/web/plynové%20skrinky/dvojskrinka.JPG', category: 'plynove-skrine', alt: 'Dvojskrinka' },
    { id: 'p3', src: '/web/plynové%20skrinky/Skrinka%20stojata%20s%20podstavcom.jpg', category: 'plynove-skrine', alt: 'Stojatá skrinka s podstavcom' },
    { id: 'p4', src: '/web/plynové%20skrinky/1500x2000.jpg', category: 'plynove-skrine', alt: 'Plynová skrinka veľká' },

    // Ostatné
    { id: 'o1', src: '/web/ostatné%20výrobky/poklop%20studňa.JPG', category: 'ostatne', alt: 'Poklop na studňu' },
    { id: 'o2', src: '/web/ostatné%20výrobky/poklop%20šachta.JPG', category: 'ostatne', alt: 'Poklop na šachtu' },
    { id: 'o3', src: '/web/ostatné%20výrobky/svietnik.JPG', category: 'ostatne', alt: 'Svietnik' },

    // Striešky
    { id: 'st1', src: '/web/striešky/DSCN3441.JPG', category: 'striesky', alt: 'Strieška nad vchod' },
    { id: 'st2', src: '/web/striešky/DSCN3485.JPG', category: 'striesky', alt: 'Strieška detail' },
    { id: 'st3', src: '/web/striešky/P_20190831_193001.jpg', category: 'striesky', alt: 'Prístrešok' }
];

export const categories = [
    { id: 'brany', label: 'Brány a oplotenia' },
    { id: 'zabradlia', label: 'Zábradlia' },
    { id: 'schodiska', label: 'Schodiská' },
    { id: 'plynove-skrine', label: 'Plynové skrine' },
    { id: 'striesky', label: 'Striešky' },
    { id: 'ostatne', label: 'Ostatné' }
];
