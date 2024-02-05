import { Major_Mono_Display, Raleway, Roboto_Mono } from 'next/font/google';
import Head from 'next/head'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function EventInfo() {
  return (
    <div className="pt-20 w-full h-full">
      <div className='flex w-full justify-center items-center'>
        <h1 className={`${robotoMono.variable} font-heading text-white text-medium text-7xl text-right `}>EVENT INFO</h1>
      </div>
      <div className="w-full items-center mt-10">
        <p className={`${robotoMono.variable} font-text font-light text-center leading-relaxed text-white text-2xl mx-56`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet porro odit debitis fuga reiciendis eligendi ea sunt adipisci earum quam culpa molestias saepe delectus totam a maiores, velit tenetur, vitae repellat sit incidunt sed nesciunt. Optio, voluptate modi. Tempora voluptates assumenda deleniti consequatur. Culpa minus tenetur repudiandae necessitatibus excepturi corrupti debitis assumenda porro nesciunt quae laudantium, esse, voluptas, harum consequuntur optio ea voluptates facilis aliquam inventore accusamus delectus. Possimus et molestias totam reiciendis nihil rerum rem eligendi officiis perferendis.</p>
      </div>
    </div>
  )
}