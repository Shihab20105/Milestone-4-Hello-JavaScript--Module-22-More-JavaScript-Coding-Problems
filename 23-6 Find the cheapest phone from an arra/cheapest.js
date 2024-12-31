/* 23-6 Find the cheapest phone from an array of phone objects */

/* 
const phones = [
    { name: 'Samsung', camera: 12, Storage: '32GB', price: 36000, color: 'Silver' },
    { name: 'Walton', camera: 10, Storage: '32GB', price: 22000, color: 'Silver' },
    { name: 'iPhone', camera: 10, Storage: '32GB', price: 82000, color: 'Silver' },
    { name: 'Xaomi', camera: 10, Storage: '32GB', price: 52000, color: 'Silver' },
    { name: 'Oppo', camera: 10, Storage: '32GB', price: 20000, color: 'Silver' },
    { name: 'Nokia', camera: 10, Storage: '32GB', price: 44000, color: 'Silver' },
    { name: 'HTC', camera: 10, Storage: '32GB', price: 62000, color: 'Silver' },
]

function cheapestPhone(phones){
    for(i = 0; i < phones.length; i++){
        const phone = phones[i];
        console.log(phone);
    }
}

const mySelection = cheapestPhone(phones); 
*/

/* Output:
{
  name: 'Samsung',
  camera: 12,
  Storage: '32GB',
  price: 36000,
  color: 'Silver'
}
{
  name: 'Walton',
  camera: 10,
  Storage: '32GB',
  price: 22000,
  color: 'Silver'
}
{
  name: 'iPhone',
  camera: 10,
  Storage: '32GB',
  price: 82000,
  color: 'Silver'
}
{
  name: 'Xaomi',
  camera: 10,
  Storage: '32GB',
  price: 52000,
  color: 'Silver'
}
{
  name: 'Oppo',
  camera: 10,
  Storage: '32GB',
  price: 20000,
  color: 'Silver'
}
{
  name: 'Nokia',
  camera: 10,
  Storage: '32GB',
  price: 44000,
  color: 'Silver'
}
{
  name: 'HTC',
  camera: 10,
  Storage: '32GB',
  price: 62000,
  color: 'Silver'
} */





/* 
const phones = [
  { name: 'Samsung', camera: 12, Storage: '32GB', price: 36000, color: 'Silver' },
  { name: 'Walton', camera: 10, Storage: '32GB', price: 22000, color: 'Silver' },
  { name: 'iPhone', camera: 10, Storage: '32GB', price: 82000, color: 'Silver' },
  { name: 'Xaomi', camera: 10, Storage: '32GB', price: 52000, color: 'Silver' },
  { name: 'Oppo', camera: 10, Storage: '32GB', price: 20000, color: 'Silver' },
  { name: 'Nokia', camera: 10, Storage: '32GB', price: 44000, color: 'Silver' },
  { name: 'HTC', camera: 10, Storage: '32GB', price: 62000, color: 'Silver' },
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(i = 0; i < phones.length; i++){ //Your code is almost correct but needs one minor fix: declaring the i variable in the for loop. In modern JavaScript, you should declare the loop variable using let (or var for older versions).
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection); */
/* Output:
{
  name: 'Oppo',
  camera: 10,
  Storage: '32GB',
  price: 20000,
  color: 'Silver'
} 
*/






/* 
const phones = [
    { name: 'Samsung', camera: 12, Storage: '32GB', price: 36000, color: 'Silver' },
    { name: 'Walton', camera: 10, Storage: '32GB', price: 22000, color: 'Silver' },
    { name: 'iPhone', camera: 10, Storage: '32GB', price: 82000, color: 'Silver' },
    { name: 'Xaomi', camera: 10, Storage: '32GB', price: 52000, color: 'Silver' },
    { name: 'Oppo', camera: 10, Storage: '32GB', price: 20000, color: 'Silver' },
    { name: 'Nokia', camera: 10, Storage: '32GB', price: 44000, color: 'Silver' },
    { name: 'HTC', camera: 10, Storage: '32GB', price: 62000, color: 'Silver' },
  ]
  
  function cheapestPhone(phones){
      let cheapest = phones[0];
      for(let i = 0; i < phones.length; i++){ 
          const phone = phones[i];
          if(phone.price < cheapest.price){
              cheapest = phone;
          }
      }
      return cheapest;
  }
  
  const mySelection = cheapestPhone(phones);
  console.log(mySelection); 
  */
  /* Output:
  {
  name: 'Oppo',
  camera: 10,
  Storage: '32GB',
  price: 20000,
  color: 'Silver'
} */



/* 
const phones = [
  { name: 'Samsung', camera: 20, Storage: '32GB', price: 36000, color: 'Silver' },
  { name: 'Walton', camera: 10, Storage: '32GB', price: 22000, color: 'Silver' },
  { name: 'iPhone', camera: 15, Storage: '32GB', price: 82000, color: 'Silver' },
  { name: 'Xaomi', camera: 11, Storage: '32GB', price: 52000, color: 'Silver' },
  { name: 'Oppo', camera: 12, Storage: '32GB', price: 20000, color: 'Silver' },
  { name: 'Nokia', camera: 14, Storage: '32GB', price: 44000, color: 'Silver' },
  { name: 'HTC', camera: 10, Storage: '32GB', price: 62000, color: 'Silver' },
]

function highestCamera(cameras){
    let highest = cameras[0]; // Assume the first phone has the highest camera
    for(let i = 0; i < cameras.length; i++){ //Your code is almost perfect, but it has one small issue: the 'i' variable in the 'for' loop is not declared using 'let' or 'var'. In strict mode or modern JavaScript environments, this will throw an error because 'i' is undefined. To fix this, declare the loop variable 'i' using 'let' or 'var'.
        const camera = cameras[i];
        if(camera.camera > highest.camera){  //* Yes, absolutely! The property 'camera' in your objects is already being used to store those values (20, 10, 15, etc.), which likely represent the camera resolution (e.g., in megapixels). These are numerical values, and you can directly refer to them as the 'camera' property. 
        For example:
        * 'camera: 20' represents the camera resolution of the Samsung phone.
        * 'camera: 10' represents the camera resolution of the Walton phone.
        * And so on.
        In your code, the comparisons like 'if (camera.camera > highest.camera)' make sense because you're comparing the numerical 'camera' values from the array of objects. There's no need to rename or add anything; the property name 'camera' is already descriptive and appropriate! //
            highest = camera;
        }
    }
    return highest;
}

const mySelection = highestCamera(phones);
console.log(mySelection); */
/* Output:
{
  name: 'Samsung',
  camera: 20,
  Storage: '32GB',
  price: 36000,
  color: 'Silver'
} 
*/





const phones = [
    { name: 'Samsung', camera: 20, Storage: '32GB', price: 36000, color: 'Silver' },
    { name: 'Walton', camera: 10, Storage: '32GB', price: 22000, color: 'Silver' },
    { name: 'iPhone', camera: 15, Storage: '32GB', price: 82000, color: 'Silver' },
    { name: 'Xaomi', camera: 11, Storage: '32GB', price: 52000, color: 'Silver' },
    { name: 'Oppo', camera: 12, Storage: '32GB', price: 20000, color: 'Silver' },
    { name: 'Nokia', camera: 14, Storage: '32GB', price: 44000, color: 'Silver' },
    { name: 'HTC', camera: 10, Storage: '32GB', price: 62000, color: 'Silver' },
  ]
  
  function highestCamera(cameras){
      let highest = cameras[0]; 
      for(let i = 0; i < cameras.length; i++){ 
          const camera = cameras[i];
          if(camera.camera > highest.camera){ 
              highest = camera;
          }
      }
      return highest;
  }
  
  const mySelection = highestCamera(phones);
  console.log(mySelection);
  /* Output:
  {
  name: 'Samsung',
  camera: 20,
  Storage: '32GB',
  price: 36000,
  color: 'Silver'
} */