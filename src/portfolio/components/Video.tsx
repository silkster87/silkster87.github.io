export function Video({ src, title }: { src: string; title: string }) {
  return <iframe className="youtube-video" src={src} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />;
}
