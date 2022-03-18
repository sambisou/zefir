
export const AnimatedLoader = ({ size = 200 }: { size?: number }) => (
  <div className="z-0 flex items-center justify-center w-full h-screen bg-white">
    <img className="z-10 animate-pulse animate-bounce" src="/zefir-logo.svg" alt="zefir-logo" height={size} width={size} />
  </div>
);
