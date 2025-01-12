import { urlForImage } from '../sanity/lib/image';
import Image from 'next/image'; // Ensure Image is imported correctly
import Link from 'next/link';
import React from 'react';

export default function BlogCard({ post }: { post: Post }) {
  return (
    
    <section>
      <div className="relative max-h-76 flex-l">
        <Image
          src={urlForImage(post.image)}
          alt="AI for everyone"
          fill
          className="object-cover rounded-t"
        />
      </div>
      

      <div>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        

        <Link href={`/postss/${post.slug}`}>
          Read More {/* Add `<a>` for better semantics with `Link` */}
          
        </Link>
      </div>
    
      </section>
      
  );
}

