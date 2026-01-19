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
    { id: 'b7', src: '/web/brány/nerezové/IMG_20250830_113902_731.jpg', category: 'brany', alt: 'Nerezová brána' },

    // Zábradlia
    { id: 'z1', src: '/web/zábradlia/nerezové/DSCN3473.JPG', category: 'zabradlia', alt: 'Nerezové zábradlie' },
    { id: 'z2', src: '/web/zábradlia/nerezové/DSCN3476.JPG', category: 'zabradlia', alt: 'Nerezové zábradlie detail' },
    { id: 'z3', src: '/web/zábradlia/nerezové/DSCN3677.JPG', category: 'zabradlia', alt: 'Nerezové zábradlie exteriér' },

    // Schodiská
    { id: 's1', src: '/web/schodiská/schodisko_oceľové_1.jpg', category: 'schodiska', alt: 'Oceľové schodisko' },
    { id: 's2', src: '/web/schodiská/schodisko_oceľové_2.jpg', category: 'schodiska', alt: 'Oceľové schodisko točité' },
    { id: 's3', src: '/web/schodiská/DSC_1283.jpg', category: 'schodiska', alt: 'Schodisko detail' },

    // Plynové skrinky
    { id: 'p1', src: '/web/plynové skrinky/plynovaskrinka T1.jpg', category: 'plynove-skrine', alt: 'Plynová skrinka T1' },
    { id: 'p2', src: '/web/plynové skrinky/dvojskrinka.JPG', category: 'plynove-skrine', alt: 'Dvojskrinka' },
    { id: 'p3', src: '/web/plynové skrinky/Skrinka stojata s podstavcom.jpg', category: 'plynove-skrine', alt: 'Stojatá skrinka s podstavcom' },

    // Ostatné
    { id: 'o1', src: '/web/ostatné výrobky/poklop studňa.JPG', category: 'ostatne', alt: 'Poklop na studňu' },
    { id: 'o2', src: '/web/ostatné výrobky/poklop šachta.JPG', category: 'ostatne', alt: 'Poklop na šachtu' },
    { id: 'o3', src: '/web/ostatné výrobky/svietnik.JPG', category: 'ostatne', alt: 'Svietnik' },

    // Striešky
    { id: 'st1', src: '/web/striešky/DSCN3441.JPG', category: 'striesky', alt: 'Strieška nad vchod' },
    { id: 'st2', src: '/web/striešky/DSCN3485.JPG', category: 'striesky', alt: 'Strieška detail' }
];

export const categories = [
    { id: 'all', label: 'Všetky' },
    { id: 'brany', label: 'Brány a oplotenia' },
    { id: 'zabradlia', label: 'Zábradlia' },
    { id: 'schodiska', label: 'Schodiská' },
    { id: 'plynove-skrine', label: 'Plynové skrine' },
    { id: 'striesky', label: 'Striešky' },
    { id: 'ostatne', label: 'Ostatné' }
];
