 import BlogCard from "@/Components/BlogCard"
 import CommentSection  from "@/Components/Comment";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Footer from  "@/Components/Footer"
import {client} from "@/sanity/lib/client";
   import {Image} from "sanity";
 import { postcss } from "tailwindcss";



export const revalidate= 5;
export default async function Home() {
   const query = `*[_type=="post"]| order(_createdAt asc){
    summary,description,title,image,
      "slug":slug.current
  }`
   
  //  let res:Iblog[] =await client.fetch(`*[_type == "blogging"]
  const posts: Post[]  =await client.fetch(query)
    return (
    <div >
    <Header/>
      <Hero/>
<p className='text-[36px] font-bold font-color-[pink]'>WELCOME TO  BLOGGING</p>
      <div/>
      <>
      <main className="flex min-h-screen flex-col">
        <section  className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-12">
       {
        posts.map((post :Post) =>(
            <BlogCard post ={post} key={post.slug}/>
            
            
        ))
      }
      </section>
      {/*  */}
      
       <CommentSection /> 
      </main>
       </>
    <div >
      
        <div>
        </div>
        </div>
        
      <Footer/>
      </div>
    )
  }
