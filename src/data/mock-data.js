import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from "react-icons/gi";
import { AiOutlineCoffee } from "react-icons/ai";
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";
import { RiEarthquakeFill } from "react-icons/ri";

export const locationsTab = [
  { id: 1, label: "Shared Homes", icon: <MdHouseSiding size={24} /> },
  { id: 2, label: "OMG!", icon: <GiSpaceNeedle size={24} /> },
  { id: 3, label: "Beach", icon: <FaUmbrellaBeach size={24} /> },
  { id: 4, label: "Manshions", icon: <MdOutlineApartment size={24} /> },
  { id: 5, label: "Islands", icon: <BsSnow size={24} /> },
  { id: 6, label: "Iconic Cities", icon: <MdOutlineWater size={24} /> },
  { id: 7, label: "Design", icon: <GiKidSlide size={24} /> },
  { id: 8, label: "Caves", icon: <FaCampground size={24} /> },
  { id: 9, label: "Bed & Breakfast ", icon: <AiOutlineCoffee size={24} /> },
  { id: 10, label: "Tropical", icon: <GiCampingTent size={24} /> },
  { id: 11, label: "Amazing pools", icon: <GiLightningDome size={24} /> },
  { id: 12, label: "Cycladic homes", icon: <BiHomeAlt size={24} /> },
  { id: 13, label: "Arctic", icon: <GiEvilTree size={24} /> },
  { id: 14, label: "National park", icon: <GiWaveSurfer size={24} /> },
  { id: 15, label: "Tiny homes", icon: <GiMountainCave size={24} /> },
  { id: 16, label: "Caves", icon: <GiCaveEntrance size={24} /> },
  { id: 17, label: "Golfing", icon: <GiGolfFlag size={24} /> },
  { id: 18, label: "Cabins", icon: <MdCabin size={24} /> },
  { id: 19, label: "Earth Homes", icon: <RiEarthquakeFill size={24} /> },
  { id: 20, label: "Amazing Pools", icon: <FaSwimmingPool size={24} /> },
];

export const locations = [
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 2,
        url: "https://plus.unsplash.com/premium_photo-1663091845370-c425a9819396?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60",
      },
    ],
    location: " 5 bedroom Duplex Ajah",
    days: "Oct 2-9",
    price: "$14,999 night",
    isNew: true,
    rating: 4.5,
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://media.istockphoto.com/photos/living-room-in-luxury-home-picture-id531063401?k=20&m=531063401&s=612x612&w=0&h=3JUJVYVbqhiMWcgGTm2cx01mXxFST9-cIabdtFeKqno=",
      },
      {
        id: 3,
        url: "https://media.istockphoto.com/photos/perfect-traditional-living-room-with-beautiful-decor-picture-id480802516?k=20&m=480802516&s=612x612&w=0&h=f5r-_wCk1RaX3LDsBSsptN_RTjaSH5PfrzJkdpMmza4=",
      },
      {
        id: 4,
        url: "https://media.istockphoto.com/photos/furnish-living-room-with-beautiful-timber-beams-picture-id683590572?k=20&m=683590572&s=612x612&w=0&h=Ip-vzdp_wJeY29aGlzC0B1C8WgxSbQtFuYKZ0MF31NM=",
      },
    ],
    location: "3 bedroom Duplex Ikoyi",
    days: "Sep 2-11",
    price: "$3000 night",
    isNew: false,
    rating: 4.99,
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: "https://media.istockphoto.com/photos/home-exterior-design-pavilion-of-pool-villa-and-bedroom-picture-id1155484063?k=20&m=1155484063&s=612x612&w=0&h=dZBJ9DiqDCxy6gOClnhkxlDI9sNO02qidQ-J0DGgHuI=",
      },
      {
        id: 2,
        url: "https://media.istockphoto.com/photos/3d-render-classic-home-interior-living-and-dining-room-picture-id1179624461?k=20&m=1179624461&s=612x612&w=0&h=XgjtKplthiJZpSNzK9KIFJzR5EjmQjOqmaKz40rmG8A=",
      },
      {
        id: 3,
        url: "https://media.istockphoto.com/photos/bedroom-or-hotelroom-interior-3d-illustration-photorealistic-picture-id1163470291?k=20&m=1163470291&s=612x612&w=0&h=ZGOcIKk61nsKRQzNDN-DdXvnGgISPPcNBqv6bOMf2eU=",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: "1 bedroom Duplex Ajah",
    days: "Nov 19-22",
    price: "$1,129 night",
    isNew: true,
    rating: 4.6,
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: " 5 bedroom Duplex Ikoyi",
    days: "Sep 13-18",
    price: "$208 night",
    isNew: false,
    rating: 4.2,
  },
  {
    id: 5,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1556595101-15dc5f6431e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: "3 bedroom Duplex Lekki",
    days: "Aug 1-6",
    price: "$243 night",
    isNew: true,
    rating: 4.1,
  },
  {
    id: 6,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: " 5 bedroom Duplex Ikoyi",
    days: "Oct 9-15",
    price: "$698 night",
    isNew: false,
    rating: 4.6,
  },
  {
    id: 7,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: "3 bedroom Duplex VI",
    days: "June 7-12",
    price: "$467 night",
    isNew: true,
    rating: 4.7,
  },
  {
    id: 8,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: "4 bedroom Duplex Ajah",
    days: "June 7-12",
    price: "$467 night",
    isNew: true,
    rating: 4.7,
  },
  {
    id: 9,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: "Lekki,lagos",
    days: "Jul 1-6",
    price: "$910 night",
    isNew: true,
    rating: 4.3,
  },
  {
    id: 10,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1527694224012-be005121c774?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: "Lagos, Nigeria",
    days: "Jun 12-18",
    price: "$629 night",
    isNew: false,
    rating: 4.6,
  },
  {
    id: 11,
    locationImages: [
      {
        id: 1,
        url: "https://media.istockphoto.com/photos/house-getting-energy-from-solar-power-roof-picture-id1433548039?b=1&k=20&m=1433548039&s=170667a&w=0&h=MF1YJdosIs6_5pm1AbxTYgpDjnx8Qb8swrSAamkEbeY=",
      },
      {
        id: 2,
        url: "https://media.istockphoto.com/photos/solar-panels-on-the-tiled-roof-of-the-building-in-the-sun-picture-id1349360708?b=1&k=20&m=1349360708&s=170667a&w=0&h=OhWp7B92ZXG7In4JM8HsiOEWUQm22FxDZvTl28NfZaA=",
      },
      {
        id: 3,
        url: "https://media.istockphoto.com/photos/residential-community-in-western-usa-with-modern-homes-at-sunrise-picture-id1337285643?b=1&k=20&m=1337285643&s=170667a&w=0&h=Cr6dyN6gg4UtnuW__-YW1wxITO5JNykJSNo3FlFtYCY=",
      },
      {
        id: 4,
        url: "https://media.istockphoto.com/photos/we-all-deserve-a-fresh-break-from-the-city-picture-id1326994520?b=1&k=20&m=1326994520&s=170667a&w=0&h=h9h0d6bcN0Mrr2S7iVzS331BM7U8G3XyCWiVeVjh-AI=",
      },
    ],
    location: "Abuja, Nigeria",
    days: "Nov 2-7",
    price: "$2,595 night",
    isNew: false,
    rating: 4.1,
  },
  {
    id: 12,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: "3 bedroom Duplex Ajah",
    days: "Jun 3-4",
    price: "$4,467 night",
    isNew: false,
    rating: 4.2,
  },
  {
    id: 13,
    locationImages: [
      {
        id: 1,
        url: "https://media.istockphoto.com/photos/energy-efficient-house-with-solar-panels-and-wall-battery-for-energy-picture-id1362872948?k=20&m=1362872948&s=612x612&w=0&h=qyZfsiZo2B5l1rTMBtN5TF3Sc1xMjKACz_wu7qOlG2o=",
      },
      {
        id: 2,
        url: "https://media.istockphoto.com/photos/modern-white-interior-design-with-fireplace-and-beautiful-backyard-picture-id1333804787?k=20&m=1333804787&s=612x612&w=0&h=YtRFA3NBCfVcKS5GU3SWerUoov2dlSXa1U22T4y1l0Q=",
      },
      {
        id: 3,
        url: "https://media.istockphoto.com/photos/aerial-view-of-two-workers-installing-solar-panels-on-a-rooftop-picture-id1368229727?k=20&m=1368229727&s=612x612&w=0&h=BP4h5Fo4uXWIQOMNxDgR2IARrhgS5daJrHGUwGigWpM=",
      },
      {
        id: 4,
        url: "https://media.istockphoto.com/photos/home-garage-picture-id1397942398?k=20&m=1397942398&s=612x612&w=0&h=T9poPEHzurocbCLmtSpNo_WkWv86Mql7lUZ3zFqnXK8=",
      },
    ],
    location: " 5 bedroom Duplex Island",
    days: "Sep 22-25",
    price: "$358 night",
    isNew: true,
    rating: 4.5,
  },
  {
    id: 14,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: " 5 bedroom Duplex Lekki",
    days: "Oct 9-15",
    price: "$698 night",
    isNew: false,
    rating: 4.6,
  },
  {
    id: 15,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: "5 bedroom Duplex Ajah",
    days: "Jul 1-6",
    price: "$910 night",
    isNew: true,
    rating: 4.3,
  },
  {
    id: 16,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&w=400&h=250&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?auto=format&fit=crop&w=400&h=250&q=80",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?auto=format&fit=crop&w=400&h=250&q=60",
      },
    ],
    location: "2 bedroom Duplex VI",
    days: "Oct 4-9",
    price: "$500 night",
    isNew: false,
    rating: 4.2,
  },
  {
    id: 17,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=400&h=250&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1504803900752-c2051699d0e8?auto=format&fit=crop&w=400&h=250&q=80",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1528184039930-bd03972bd974?auto=format&fit=crop&w=400&h=250&q=60",
      },
    ],
    location: "5 bedroom Duplex Ikoyi",
    days: "Jun 2-9",
    price: "$3,369 night",
    isNew: false,
    rating: 4.1,
  },
  {
    id: 18,
    locationImages: [
      {
        id: 1,
        url: "https://plus.unsplash.com/premium_photo-1663091845370-c425a9819396?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: " 2 bedroom Duplex Ajah",
    days: "Oct 9-15",
    price: "$698 night",
    isNew: false,
    rating: 4.6,
  },
  {
    id: 19,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    location: "4 bedroom Duplex Lekki",
    days: "Oct 9-15",
    price: "$698 night",
    isNew: false,
    rating: 4.6,
  },
  {
    id: 20,
    locationImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        url: "https://plus.unsplash.com/premium_photo-1663091845370-c425a9819396?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60",
      },
    ],
    location: " 5 bedroom Duplex in Ajah",
    days: "Oct 2-9",
    price: "$14,999 night",
    isNew: true,
    rating: 4.5,
  },
];
