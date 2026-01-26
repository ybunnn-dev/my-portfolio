import Image from "next/image";

export default function MainPage({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="flex min-h-screen w-full items-center justify-center px-4"
    >
      <div className="grid w-full max-w-9xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-32">
        
        <div className="flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-md rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm shadow-2xl">
            {/* Later, put your actual Image component here like:
               <Image src="/ivan.jpg" alt="Ivan" fill className="object-cover rounded-lg" />
            */}
          </div>
        </div>

        <div className="flex flex-col justify-center text-center lg:text-left">
          
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl">
            Hi, I’m Ivan
          </h1>
          
          <h2 className="mt-4 text-lg font-medium text-gray-200">
            An Aspiring Full-Stack Web Developer
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            
            <button className="rounded-lg border border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-dark_gradient">
              Download CV
            </button>

            <div className="flex items-center gap-5 text-white">
              <a href="https://github.com/ybunnn-dev" className="transition-transform hover:scale-110 hover:text-gray-300">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>

              <a href="#" className="transition-transform hover:scale-110 hover:text-gray-300">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>

              <a href="#" className="transition-transform hover:scale-110 hover:text-gray-300">
                 <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}