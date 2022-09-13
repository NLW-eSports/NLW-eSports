interface Ad {
    id: string;
    name: string;
    createdAt: Date;
}

function calculaHaQuantoTempoOAnuncioFoiPublicado(ad: Ad) {
    // cálculo há quantos dias foi postado
}

calculaHaQuantoTempoOAnuncioFoiPublicado({
    id: '1',
    name: 'Ad 01',
    createdAt: new Date(),
})