import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {

  const { productId } = useParams();
  const { products, currency ,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
  }, [productId,products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*----------- Product Data-------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*---------- Product Images------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                ))
              }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className=' flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
          </div>s
          <p className='mt-5 font-medium'> <span style={{ text: "3xl" , fontWeight: "600" }}>{currency}{productData.price} </span> <span style={{ color: "red", text: "2xl" , fontWeight: "600" }}> 30% OFF </span> <span style={{ textDecoration: "line-through", color: "gray", text: "xl" , marginRight: "8px" }}> ₹4999</span></p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
              </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review Section ------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>1.⁠ ⁠Premium Carpet Finish
Experience luxury every time you step into your car — plush, soft, and elegant. Designed to match the interiors of high-end cars.<br/>
2.⁠ ⁠Dust & Dirt Trap Technology
Unlike rubber mats that push dirt around, our carpet layer locks dust, sand, and hair deep within fibers, keeping your car spotless longer.<br/>
3.⁠ ⁠Noise Reduction
Carpet mats naturally absorb sound — reducing road noise and giving your drive a smoother, quieter feel.<br/>
4.⁠ ⁠Anti-Slip Grip
Equipped with non-slip rubber backing, these mats stay firm — no sliding, no folding, even during sharp turns.<br/>
5.⁠ ⁠Custom-Fit Precision
Each mat is hand-cut and tailored for perfect fitting — hugging every corner of your car’s floor.<br/>
6.⁠ ⁠Easy to Clean
Simply vacuum or tap — dust comes right off. The surface is designed for low maintenance and quick cleaning.<br/>
7.⁠ ⁠Weather Friendly
Engineered to handle all Indian conditions — from dusty summers to humid monsoons — without losing shine or softness.<br/>
8.⁠ ⁠Long-Lasting Durability
Made from premium-grade fibers and reinforced stitching, giving you years of luxury performance.<br/>
9.⁠ ⁠Enhanced Resale Value
Luxury interior upgrades like carpet mats boost your car’s resale appeal — because details matter.<br/>
10.⁠ ⁠Designed by Carpet Experts
Each mat is hand-finished by professional carpet layers, giving it that rare craftsmanship you can see and feel.</p>
        </div>
      </div>

     

    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product





