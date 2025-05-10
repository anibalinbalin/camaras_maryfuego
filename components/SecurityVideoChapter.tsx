"use client"

import AutoplayVideo from "@/components/AutoplayVideo"

const SecurityVideoChapter = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Seamless Integration within UniFi</h2>
        <div className="max-w-5xl mx-auto">
          <AutoplayVideo 
            src="https://ui.com/microsite/static/media/video.1add35b5.mp4" 
          />
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-2">Secure Any Angle, Anywhere</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
          Complete flexibility for capturing every crucial angle of your property.
        </p>
        <div className="max-w-5xl mx-auto">
          <AutoplayVideo 
            src="https://ui.com/microsite/static/media/hero.07c59380.mp4" 
          />
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-2">PTZ Control in Real Time</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
          Precise pan, tilt, and zoom controls give you complete visual command of your environment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="relative">
            <AutoplayVideo 
              src="https://ui.com/microsite/static/media/introduction.aa2af962.mp4" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
              <div className="bg-black/30 px-4 py-2 rounded-md backdrop-blur-sm">
                <div className="text-xs sm:text-sm">Precise</div>
                <div className="text-lg sm:text-xl font-semibold">Camera Movement</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <AutoplayVideo 
              src="https://ui.com/microsite/static/media/section-6.8a272347.mp4" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
              <div className="bg-black/30 px-4 py-2 rounded-md backdrop-blur-sm">
                <div className="text-xs sm:text-sm">Dynamic</div>
                <div className="text-lg sm:text-xl font-semibold">Area Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-2">A Smart, AI-Enhanced Interface</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
          A constantly evolving set of AI-centric features keeps your organization safe.
        </p>
        <div className="max-w-5xl mx-auto">
          <AutoplayVideo 
            src="https://ui.com/microsite/static/media/video.ba8ccc76.mp4" 
          />
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-2">Premium Hardware Performance</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
          Exceptional build quality and advanced features designed for demanding environments.
        </p>
        <div className="max-w-5xl mx-auto">
          <AutoplayVideo 
            src="https://cdn.ecomm.ui.com/products/3b2997e9-38a5-499b-9b01-28acaf9bf6b7/044f0139-8894-452b-a74f-7582e0b38262.mp4" 
          />
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-2">Industry-Leading Mobile App Experience</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
          Powerful features and thoughtful design that eliminates the learning curve.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="relative">
            <AutoplayVideo 
              src="https://ui.com/microsite/static/media/responsiveness.a2623446.mp4" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
              <div className="bg-black/30 px-4 py-2 rounded-md backdrop-blur-sm">
                <div className="text-xs sm:text-sm">Impressive</div>
                <div className="text-lg sm:text-xl font-semibold">Streaming Responsiveness</div>
              </div>
            </div>
          </div>
          
          <div>
            <AutoplayVideo 
              src="https://ui.com/microsite/static/media/ptz.7709e05a.mp4" 
            />
          </div>
          
          <div className="relative">
            <AutoplayVideo 
              src="https://ui.com/microsite/static/media/mobile-app-experience.dc87c38d.mp4" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
              <div className="bg-black/30 px-4 py-2 rounded-md backdrop-blur-sm">
                <div className="text-xs sm:text-sm">Unrivaled</div>
                <div className="text-lg sm:text-xl font-semibold">Video Playback Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <AutoplayVideo 
              src="https://ui.com/microsite/static/media/video-retrieval.165df196.mp4" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
              <div className="bg-black/30 px-4 py-2 rounded-md backdrop-blur-sm">
                <div className="text-xs sm:text-sm">Effortless</div>
                <div className="text-lg sm:text-xl font-semibold">Video Retrieval</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-2">Local Storage for Recording Privacy</h2>
        <div className="max-w-5xl mx-auto">
          <AutoplayVideo 
            src="https://ui.com/microsite/static/media/recording-privacy.751235b7.mp4" 
          />
        </div>
      </section>
    </div>
  )
}

export default SecurityVideoChapter 