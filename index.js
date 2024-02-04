'use strict';

const listImages = [
    {
        src: 'заставка1.jpg',
        nameImg: '1',
    },
    {
        src: 'заставканач1.jpg',
        nameImg: '2',
    },
    {
        src: 'сцена1.jpg',
        nameImg: '3',
    },
    {
        src: 'сцена2.jpg',
        nameImg: '4',
    },
    {
        src: 'сцена3.jpg',
        nameImg: '5',
    },
    {
        src: 'сцена4.jpg',
        nameImg: '6',
    },
    {
        src: 'сцена5.jpg',
        nameImg: '7',
    },
    {
        src: 'сцена6.jpg',
        nameImg: '8',
    },
    {
        src: 'cерия7.jpg',
        nameImg: '9',
    },
    {
        src: 'сцена8.jpg',
        nameImg: '00',
    },
    {
        src: 'сцена9.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия10.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия11.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия12.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия13.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия14.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'cерия15.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия16.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия17.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия18.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия19.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'cерия20.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия21.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'cерия22.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия23.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'cерия24.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия25.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия26.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия27.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'cерия28.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия29.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'cерия30.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия31.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'cерия32.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия33.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия34.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия35.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия36.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия37.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия38.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия39.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия40.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия41.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия42.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия43.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия44.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия45.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия46.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия47.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия48.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия49.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия50.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия51.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия52.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия53.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия54.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия55.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия56.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия57.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия58.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия59.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия60.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия61.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия62.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия63.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия64.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия65.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия66.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия67.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия68.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия69.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия70.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия71.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия72.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия73.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия74.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия75.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия76.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия77.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия78.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия79.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия80.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия81.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия82.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия83.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия84.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия85.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия86.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия87.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия88.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия90.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия91.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия92.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия93.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия94.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия95.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия96.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия97.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия98.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия99.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия100.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия101.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия102.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия103.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия104.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия105.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия106.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия107.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия108.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия109.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия110.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия111.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия112.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия113.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'серия114.jpg',
    nameImg: 'Воздушный шар',
    },
    {
        src: 'серия115.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия116.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия117.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия118.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия119.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: 'серия120.jpg',
        nameImg: 'Воздушный шар',
    },
    {
    src: 'бекстейдж6.jpg',
    nameImg: 'Воздушный шар',
    },
];

const img= document.querySelector('img');
const button = document.querySelector('button');

const setImg = (currentDataImg) => {
    img.src = currentDataImg.src;
    img.alt = currentDataImg.nameImg;
}

setImg(listImages[0]);

button.addEventListener('click', onChangeImg);

let count = 0;

function onChangeImg() {
    count += 1;
    setImg(listImages[count]);
}