// Placeholder page for blog posts

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post: {slug}</h1>
        <p className="text-gray-600">This is a placeholder for the blog post content.</p>
        <div className="mt-8 h-64 bg-gray-100 flex items-center justify-center rounded-lg">
           Content coming soon...
        </div>
      </div>
    </div>
  );
}
