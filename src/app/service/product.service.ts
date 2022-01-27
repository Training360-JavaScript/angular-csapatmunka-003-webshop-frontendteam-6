import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = [{
    "id": 1,
    "catId": 4,
    "name": "Mona Lisa ",
    "description": "Leonardo da Vinci, 1503-1519",
    "image": "mona-lisa-c-1503-1519.jpg",
    "price": 61000,
    "stock": 85,
    "featured": true,
    "active": true,
    "specialOffer": true
  }, {
    "id": 2,
    "catId": 3,
    "name": "The Persistence of Memory ",
    "description": "Salvador Dali, 1931",
    "image": "the-persistence-of-memory-1931.jpg",
    "price": 77000,
    "stock": 93,
    "featured": false,
    "active": true
  }, {
    "id": 3,
    "catId": 4,
    "name": "The Starry Night ",
    "description": "Vincent van Gogh, 1889",
    "image": "the-starry-night.jpg",
    "price": 67000,
    "stock": 94,
    "featured": false,
    "active": true,
    "specialOffer": true
  }, {
    "id": 4,
    "catId": 1,
    "name": "Fallen Angel ",
    "description": "Alexandre Cabanel, 1868",
    "image": "fallen-angel-alexandre-cabanel.jpg",
    "price": 15000,
    "stock": 48,
    "featured": false,
    "active": true
  }, {
    "id": 5,
    "catId": 3,
    "name": "The Great Masturbator ",
    "description": "Salvador Dali, 1929",
    "image": "the-great-masturbator-1929.jpg",
    "price": 65000,
    "stock": 86,
    "featured": true,
    "active": true
  }, {
    "id": 6,
    "catId": 4,
    "name": "Forever Always ",
    "description": "Octavio Ocampo, XX cent.",
    "image": "forever-always.jpg",
    "price": 82000,
    "stock": 17,
    "featured": false,
    "active": true,
    "specialOffer": true
  }, {
    "id": 7,
    "catId": 4,
    "name": "Impression, sunrise ",
    "description": "Claude Monet, 1872",
    "image": "impression-sunrise.jpg",
    "price": 47000,
    "stock": 36,
    "featured": true,
    "active": true
  }, {
    "id": 8,
    "catId": 2,
    "name": "Guitar lesson ",
    "description": "Balthus, 1934",
    "image": "guitar-lesson-1934.jpg",
    "price": 67000,
    "stock": 91,
    "featured": false,
    "active": true
  }, {
    "id": 9,
    "catId": 4,
    "name": "Guernica ",
    "description": "Pablo Picasso, 1937",
    "image": "guernica-by-pablo-picasso.jpg",
    "price": 12000,
    "stock": 82,
    "featured": false,
    "active": true
  }, {
    "id": 10,
    "catId": 2,
    "name": "The treachery of images (This is not a pipe) ",
    "description": "Rene Magritte, 1928-1929",
    "image": "the-treachery-of-images-this-is-not-a-pipe-1948(2).jpg",
    "price": 7000,
    "stock": 53,
    "featured": false,
    "active": true
  }, {
    "id": 11,
    "catId": 1,
    "name": "The Kiss ",
    "description": "Gustav Klimt, 1907-1908",
    "image": "the-kiss-1908(1).jpg",
    "price": 87000,
    "stock": 66,
    "featured": false,
    "active": true
  }, {
    "id": 12,
    "catId": 4,
    "name": "Hitler Masturbating ",
    "description": "Salvador Dali, 1973",
    "image": "hitler-masturbating.jpg",
    "price": 36000,
    "stock": 80,
    "featured": false,
    "active": true
  }, {
    "id": 13,
    "catId": 2,
    "name": "Henry Ford Hospital (The Flying Bed) ",
    "description": "Frida Kahlo, 1932",
    "image": "henry-ford-hospital-the-flying-bed-1932.jpg",
    "price": 6000,
    "stock": 94,
    "featured": false,
    "active": true
  }, {
    "id": 14,
    "catId": 4,
    "name": "Sistine Chapel Ceiling: Creation of Adam ",
    "description": "Michelangelo, 1510",
    "image": "sistine-chapel-ceiling-creation-of-adam-1510.jpg",
    "price": 18000,
    "stock": 81,
    "featured": false,
    "active": true
  }, {
    "id": 15,
    "catId": 4,
    "name": "Skull ",
    "description": "Jean-Michel Basquiat, 1981",
    "image": "head.jpg",
    "price": 93000,
    "stock": 46,
    "featured": false,
    "active": true
  }, {
    "id": 16,
    "catId": 3,
    "name": "The Scream ",
    "description": "Edvard Munch, 1893",
    "image": "the-scream-1893(2).jpg",
    "price": 7000,
    "stock": 32,
    "featured": false,
    "active": true
  }, {
    "id": 17,
    "catId": 3,
    "name": "The Garden of Earthly Delights ",
    "description": "Hieronymus Bosch, 1510-1515",
    "image": "the-garden-of-earthly-delights-1515-7.jpg",
    "price": 15000,
    "stock": 18,
    "featured": false,
    "active": true
  }, {
    "id": 18,
    "catId": 3,
    "name": "My Birth ",
    "description": "Frida Kahlo, 1932",
    "image": "my-birth-1932.jpg",
    "price": 32000,
    "stock": 27,
    "featured": false,
    "active": true
  }, {
    "id": 19,
    "catId": 4,
    "name": "Color Study: Squares with Concentric Circles ",
    "description": "Wassily Kandinsky, 1913",
    "image": "color-study-squares-with-concentric-circles-1913(1).jpg",
    "price": 74000,
    "stock": 97,
    "featured": false,
    "active": true,
    "specialOffer": true
  }, {
    "id": 20,
    "catId": 4,
    "name": "Minotaur ",
    "description": "Man Ray, 1934",
    "image": "minotaur-1934.jpg",
    "price": 29000,
    "stock": 34,
    "featured": false,
    "active": true
  }, {
    "id": 21,
    "catId": 2,
    "name": "The Storm on the Sea of Galilee ",
    "description": "Rembrandt, 1633",
    "image": "christ-in-the-storm.jpg",
    "price": 42000,
    "stock": 15,
    "featured": false,
    "active": true
  }, {
    "id": 22,
    "catId": 2,
    "name": "Saturn Devouring One of His Sons ",
    "description": "Francisco Goya, 1819-1823",
    "image": "saturn-devouring-one-of-his-children-1823.jpg",
    "price": 75000,
    "stock": 4,
    "featured": false,
    "active": true
  }, {
    "id": 23,
    "catId": 2,
    "name": "The Birth of Venus ",
    "description": "Sandro Botticelli, 1483-1485",
    "image": "the-birth-of-venus-1485(1).jpg",
    "price": 44000,
    "stock": 30,
    "featured": true,
    "active": true
  }, {
    "id": 24,
    "catId": 3,
    "name": "The Son of Man ",
    "description": "Rene Magritte, 1964",
    "image": "son-of-man-1964(1).jpg",
    "price": 24000,
    "stock": 27,
    "featured": false,
    "active": true
  }, {
    "id": 25,
    "catId": 2,
    "name": "Nighthawks ",
    "description": "Edward Hopper, 1942",
    "image": "nighthawks.jpg",
    "price": 13000,
    "stock": 65,
    "featured": false,
    "active": true
  }, {
    "id": 26,
    "catId": 1,
    "name": "The old blind guitarist ",
    "description": "Pablo Picasso, 1903",
    "image": "old-guitarist-chicago.jpg",
    "price": 58000,
    "stock": 19,
    "featured": false,
    "active": true
  }, {
    "id": 27,
    "catId": 1,
    "name": "Self-Portrait ",
    "description": "Pablo Picasso, 1907",
    "image": "self-portrait-1907.jpg",
    "price": 46000,
    "stock": 35,
    "featured": false,
    "active": true,
    "specialOffer": true
  }, {
    "id": 28,
    "catId": 3,
    "name": "Irony of the Negro Policeman ",
    "description": "Jean-Michel Basquiat, 1981",
    "image": "ironew-york-of-the-negro-policeman.jpg",
    "price": 11000,
    "stock": 63,
    "featured": false,
    "active": false
  }, {
    "id": 29,
    "catId": 4,
    "name": "Observatory Time: The Lovers ",
    "description": "Man Ray, 1936",
    "image": "bservatory-time-the-lovers-1936.jpg",
    "price": 4000,
    "stock": 90,
    "featured": false,
    "active": true
  }, {
    "id": 30,
    "catId": 1,
    "name": "The Eiffel Tower ",
    "description": "Georges Seurat, 1889",
    "image": "the-eiffel-tower-1889.jpg",
    "price": 36000,
    "stock": 18,
    "featured": false,
    "active": true,
    "specialOffer": true
  }, {
    "id": 31,
    "catId": 2,
    "name": "The Gleaners ",
    "description": "Jean-Francois Millet, 1857",
    "image": "jean-fran-ois-millet-gleaners-google-art-project.jpg",
    "price": 36000,
    "stock": 9,
    "featured": true,
    "active": true
  }, {
    "id": 32,
    "catId": 4,
    "name": "The proportions of the human figure (The Vitruvian Man) ",
    "description": "Leonardo da Vinci, 1492",
    "image": "the-proportions-of-the-human-figure-the-vitruvian-man-1492.jpg",
    "price": 29000,
    "stock": 6,
    "featured": false,
    "active": true
  }, {
    "id": 33,
    "catId": 4,
    "name": "Lamentation (The Mourning of Christ) ",
    "description": "Giotto, 1304-1306",
    "image": "lamentation-the-mourning-of-christ.jpg",
    "price": 44000,
    "stock": 15,
    "featured": false,
    "active": true
  }, {
    "id": 34,
    "catId": 2,
    "name": "Untitled ",
    "description": "Zdzislaw Beksinski, 1978",
    "image": "untitled-1978-1.jpg",
    "price": 83000,
    "stock": 11,
    "featured": false,
    "active": true
  }, {
    "id": 35,
    "catId": 2,
    "name": "My Dress Hangs There ",
    "description": "Frida Kahlo, 1933",
    "image": "my-dress-hangs-there-1933.jpg",
    "price": 66000,
    "stock": 56,
    "featured": false,
    "active": true
  }, {
    "id": 36,
    "catId": 1,
    "name": "In Bed, The Kiss ",
    "description": "Henri de Toulouse-Lautrec, 1892",
    "image": "in-bed-the-kiss-1892.jpg",
    "price": 8000,
    "stock": 45,
    "featured": false,
    "active": true
  }, {
    "id": 37,
    "catId": 2,
    "name": "The Two Fridas ",
    "description": "Frida Kahlo, 1939",
    "image": "the-two-fridas-1939.jpg",
    "price": 2000,
    "stock": 87,
    "featured": false,
    "active": false
  }, {
    "id": 38,
    "catId": 2,
    "name": "Glass tears ",
    "description": "Man Ray, 1932",
    "image": "larmes-tears.jpg",
    "price": 90000,
    "stock": 46,
    "featured": true,
    "active": true,
    "specialOffer": true
  }, {
    "id": 39,
    "catId": 4,
    "name": "The Desperate Man (Self-Portrait) ",
    "description": "Gustave Courbet, 1843-1845",
    "image": "the-desperate-man-self-portrait-1845.jpg",
    "price": 73000,
    "stock": 37,
    "featured": false,
    "active": true
  }, {
    "id": 40,
    "catId": 2,
    "name": "Dream Caused by the Flight of a Bee around a Pomegranate a Second before Awakening ",
    "description": "Salvador Dali, 1944",
    "image": "dream-caused-by-the-flight-of-a-bee-around-a-pomegranate-one-second-before-awakening.jpg",
    "price": 23000,
    "stock": 75,
    "featured": false,
    "active": true
  }, {
    "id": 41,
    "catId": 2,
    "name": "Bird on Money ",
    "description": "Jean-Michel Basquiat, 1981",
    "image": "bird-on-money.jpg",
    "price": 31000,
    "stock": 86,
    "featured": false,
    "active": true
  }, {
    "id": 42,
    "catId": 2,
    "name": "Nude Descending a Staircase, No.2 ",
    "description": "Marcel Duchamp, 1912",
    "image": "nude-descending-a-staircase-no-2-1912.jpg",
    "price": 55000,
    "stock": 48,
    "featured": false,
    "active": true
  }, {
    "id": 43,
    "catId": 4,
    "name": "Zebra ",
    "description": "Victor Vasarely, 1937",
    "image": "zebra-1937.jpg",
    "price": 9000,
    "stock": 57,
    "featured": false,
    "active": true
  }, {
    "id": 44,
    "catId": 3,
    "name": "Portrait of Dora Maar ",
    "description": "Pablo Picasso, 1937",
    "image": "portrait-of-dora-maar-1937-1.jpg",
    "price": 38000,
    "stock": 47,
    "featured": false,
    "active": true
  }, {
    "id": 45,
    "catId": 1,
    "name": "The lovers ",
    "description": "Rene Magritte, 1928",
    "image": "the-lovers-1928(1).jpg",
    "price": 50000,
    "stock": 3,
    "featured": false,
    "active": true
  }, {
    "id": 46,
    "catId": 2,
    "name": "The Girl with a Pearl Earring ",
    "description": "Johannes Vermeer, 1665",
    "image": "the-girl-with-a-pearl-earring.jpg",
    "price": 6000,
    "stock": 29,
    "featured": false,
    "active": false
  }, {
    "id": 47,
    "catId": 3,
    "name": "Dance (II) ",
    "description": "Henri Matisse, 1910",
    "image": "dance-ii-1910.jpg",
    "price": 90000,
    "stock": 6,
    "featured": true,
    "active": true
  }, {
    "id": 48,
    "catId": 1,
    "name": "The Wheat Sifters ",
    "description": "Gustave Courbet, 1854-1855",
    "image": "the-winnowers-1855(1).jpg",
    "price": 89000,
    "stock": 76,
    "featured": false,
    "active": true
  }, {
    "id": 49,
    "catId": 4,
    "name": "Ivan the Terrible and His Son Ivan on November 16, 1581 ",
    "description": "Ilya Repin, 1883-1885",
    "image": "ivan-the-terrible-and-his-son-ivan-on-november-16-1581-1885.jpg",
    "price": 27000,
    "stock": 15,
    "featured": true,
    "active": true
  }, {
    "id": 50,
    "catId": 4,
    "name": "The Great Wave off Kanagawa ",
    "description": "Katsushika Hokusai, 1831",
    "image": "the-great-wave-off-kanagawa.jpg",
    "price": 94000,
    "stock": 29,
    "featured": false,
    "active": true
  }, {
    "id": 51,
    "catId": 3,
    "name": "“Untitled” (Portrait of Ross in L.A.) ",
    "description": "Felix Gonzalez-Torres, 1991",
    "image": "untitled-portrait-of-ross-in-l-a-1991.jpg",
    "price": 38000,
    "stock": 93,
    "featured": false,
    "active": true
  }, {
    "id": 52,
    "catId": 4,
    "name": "On White II ",
    "description": "Wassily Kandinsky, 1923",
    "image": "on-white-ii-1923.jpg",
    "price": 65000,
    "stock": 51,
    "featured": false,
    "active": true
  }, {
    "id": 53,
    "catId": 3,
    "name": "Composition A ",
    "description": "Piet Mondrian, 1923",
    "image": "composition-a-1923.jpg",
    "price": 65000,
    "stock": 77,
    "featured": true,
    "active": true
  }, {
    "id": 54,
    "catId": 2,
    "name": "Orange and Yellow ",
    "description": "Mark Rothko, 1956",
    "image": "orange-and-yellow(1).jpg",
    "price": 28000,
    "stock": 63,
    "featured": false,
    "active": true,
    "specialOffer": true
  }, {
    "id": 55,
    "catId": 4,
    "name": "Portrait of Adele Bloch-Bauer I ",
    "description": "Gustav Klimt, 1907",
    "image": "portrait-of-adele-bloch-bauer-i(1).jpg",
    "price": 35000,
    "stock": 52,
    "featured": false,
    "active": true
  }, {
    "id": 56,
    "catId": 4,
    "name": "Young Virgin Auto-Sodomized by the Horns of Her Own Chastity ",
    "description": "Salvador Dali, 1954",
    "image": "young-virgin-auto-sodomized-by-the-horns-of-her-own-chastity.jpg",
    "price": 71000,
    "stock": 87,
    "featured": false,
    "active": true
  }, {
    "id": 57,
    "catId": 4,
    "name": "Women in the garden ",
    "description": "Claude Monet, 1866",
    "image": "women-in-the-garden.jpg",
    "price": 60000,
    "stock": 85,
    "featured": true,
    "active": true
  }, {
    "id": 58,
    "catId": 1,
    "name": "The School of Athens ",
    "description": "Raphael, 1510-1511",
    "image": "the-school-of-atenas-1509-1510.jpg",
    "price": 85000,
    "stock": 39,
    "featured": false,
    "active": true
  }, {
    "id": 59,
    "catId": 4,
    "name": "L.H.O.O.Q, Mona Lisa with moustache ",
    "description": "Marcel Duchamp, 1919",
    "image": "l-h-o-o-q-mona-lisa-with-moustache-1919.jpg",
    "price": 31000,
    "stock": 22,
    "featured": false,
    "active": true
  }, {
    "id": 60,
    "catId": 4,
    "name": "Where Do We Come From? What Are We? Where Are We Going? ",
    "description": "Paul Gauguin, 1897-1898",
    "image": "where-do-we-come-from-what-are-we-where-are-we-going-1897.jpg",
    "price": 45000,
    "stock": 19,
    "featured": true,
    "active": true
  }];

  getAll(): Observable<Product[]> {
    return new Observable(
      subscriber => {
        subscriber.next( JSON.parse(JSON.stringify(this.list)) );
        subscriber.complete();
      }
    )
  }

  constructor() { }
}
