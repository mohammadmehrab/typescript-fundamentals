import { Product, productsURL } from "../lib";

const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
}

export default async function updateOutput(id: string) {
  // TODO
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
}

async function getProducts(): Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

// run our samples
runTheLearningSamples();

function runTheLearningSamples() {
  // hoisted
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);

  }

  displayProductInfo(10, 'Pizza');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7,11))

  function addNumbersDeclaration(x: number, y: number): number {
    const sum: number = x + y;
    return sum;
  }

  
  const addNumbersExpression = function(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(7,11))

  const sampleProducts = [
    {
      id: 10,
      name: 'Pizza slice',
      icon: 'fas fa-pizza-slice',
    },
    {
      id: 20,
      name: 'Ice cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese',
    },
  ];

  function getProductNames() {
    return sampleProducts.map((p) => p.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames())

  function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find(p => id === p.id);
  }

  console.log(`${prefix} return ProductType`);
  console.log(getProductById(10));

  function displayProducts(products: ProductType[]): void {
    const productNames = products.map(p => {
      const name = p.name.toLowerCase();
      return name;
    });
    const msg = `Sample products include: ${productNames.join(', ')}`;
    console.log(`${prefix} return void`);
    console.log(msg);
  }

  displayProducts(sampleProducts);

  const getRandomInt = (max: number) => Math.floor(Math.random() * max);

  function createProduct(name: string, icon?: string): ProductType {
    const id = getRandomInt(1000);
    return {
      id,
      name,
      icon
    };
  }

  console.log(`${prefix} Optional parameters`);
  let pineapple = createProduct('pineapple', 'pine-apple.jpg');
  let mango = createProduct('mango');
  console.log(pineapple, mango);

  function buildAddress(street: string, city: string, ...restOfAddress: string[]) {
    const address = `${street} ${city} ${restOfAddress.join(' ')}`;
    return address;
  }

  function displayProduct(product: ProductType): void {
    
  }



}