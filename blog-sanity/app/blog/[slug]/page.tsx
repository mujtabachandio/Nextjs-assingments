// app/blog/[slug]/page.tsx
import { client } from '@/sanity/lib/client';
import Image from "next/image";
import { notFound } from "next/navigation";

// Fetch the blog data dynamically based on the slug
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  // Fetch the blog post by slug
  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      title,
      description,
      "imageUrl": mainImage.asset->url
    }`,
    { slug }
  );

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      images: [blog.imageUrl],
    },
  };
}

// Function to render body content dynamically based on block type
const renderBodyContent = (body: any[]) => {
  return body.map((block: any, index: number) => {
    if (block._type === 'block' && block.style === 'normal') {
      return (
        <p key={index} className="mb-4">
          {block.children.map((child: any, i: number) => {
            if (child.marks.includes("strong")) {
              return <strong key={i}>{child.text}</strong>;
            }
            return <span key={i}>{child.text}</span>;
          })}
        </p>
      );
    }
    // Optionally handle other block types like images, lists, etc.
    if (block._type === 'image') {
      return (
        <div key={index} className="my-6">
          <Image
            src={block.asset.url}
            alt={block.alt || 'Image'}
            width={800}
            height={450}
            className="object-cover rounded-lg"
          />
        </div>
      );
    }
    return null;
  });
};

export default async function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch the blog post based on the slug
  const blog = await client.fetch(`
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      body,
      description,
      "imageUrl": mainImage.asset->url
    }
  `, { slug });

  if (!blog) {
    notFound(); // Show 404 if the blog doesn't exist
  }

  return (
    <div className="py-20 px-6 bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-white mb-6">{blog.title}</h1>
      <div className="flex justify-center mb-6">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          className="object-cover rounded-lg"
          width={800}
          height={450}
        />
      </div>
      <div className="text-white max-w-4xl mx-auto">
        {renderBodyContent(blog.body)}
      </div>
    </div>
  );
}
