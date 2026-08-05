import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <div className="page">

      <div className="page-header">
        <h1>📸 Our Beautiful Memories</h1>
        <p>Every picture reminds me of you ❤️</p>
      </div>

      <Gallery />

      <div className="gallery-message">

        <h2>Forever Together ❤️</h2>

        <p>
          Every smile, every moment and every memory with you
          is the most beautiful gift of my life.
        </p>

      </div>

    </div>
  );
}