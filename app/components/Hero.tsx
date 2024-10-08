export default function Hero(){
  return (
    <div className="h-screen flex items-center bg-neutral-50">
      <div style={{
        left: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundImage: 'url(./images/hero-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'left bottom',
      }} />
      <div className="container">
        <div style={{
          backgroundImage: 'url(./images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          position: 'relative',
        }}>
          <h1 className="text-hero mb-0 font-extrabold" style={{
            fontSize: 'clamp(2rem, 40vw, 24rem)',
            lineHeight: '0.8',
          }}>Panda</h1>
        </div>
        <p className="text-2xl mt-0 relative">Proident ad sit adipisicing est cillum in reprehenderit magna quis minim pariatur sunt.</p>
      </div>
    </div>
  );
}