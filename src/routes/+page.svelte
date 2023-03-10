<div class="hero min-h-screen">
  <div class="sugon-video-container">
    <video class="sugon-video" autoplay muted playsinline loop>
      <source src="/images/sugon-demo-1.mp4" type="video/mp4" />
      <source src="/images/sugon-demo-1.webm" type="video/webm" />
    </video>
  </div>

  <div />

  <div class="hero-content main-hero text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Welcome to Sugondese</h1>
      <p class="mb-5">
        Mini game where you try to get these little ninjas out of a gambling
        debt by collecting shitcoins.
      </p>

      <!-- <a href="https://discord.gg/K6Qz93YZEd" target="_blank" rel="noreferrer">
        <button class="btn btn-primary w-full"> Join DIscord For Updates </button>
      </a>  -->

      <a href="https://play.sugninjas.com/" target="_blank" rel="noreferrer">
        <button class="btn btn-primary w-full"> Play Now </button>
      </a>

      <p class="text-sm mt-2">Free to play on Windows and Macs</p>
    </div>
  </div>
</div>

<!-- Collectibles Title -->
<div id="collectibles" class="lg:mt-28 md:mt-0 mb-10 pb-20 pt-5">
  <div class="container text-center">
    <div class="max-w-md mx-auto mb-10">
      <h3 class="font-bold text-3xl">Game Ready Collectibles</h3>
      <p class="pt-2">
        This game was made with collectibles integration in mind from day one.
        The game is free to play for everyone but these skins will give you
        access to leaderboard.
      </p>
    </div>
  </div>

  <div class="collectibles container flex gap-x-6 gap-y-4 max-sm:flex-col">
    <!-- Card 1 -->
    <div class="card card-compact bg-base-100 shadow-xl mb-10">
      <figure>
        <img src="/images/colletible-lee-gandhi.png" alt="Sugon Collectible 1" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Lee Gandhi</h2>
        <p class="-mt-3 mb-3"> 420 Minted. In game skin + leaderboard access.  </p>
        <div class="card-actions justify-center">
          <a class="w-full"
            href="https://app.manifold.xyz/c/sn-lee-gandhi"
            target="_blank"
            rel="noreferrer"
          >
            <button class="btn btn-primary w-full"> Get It Now </button>
          </a>
         
        </div>
      </div>
    </div>
    <!-- End Card 1 -->

    <!-- Card 1 -->
    <div class="card card-compact bg-base-100 shadow-xl mb-10">
      <figure>
        <img src="/images/collectible-image-2.png" alt="Sugon Collectible " />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Ninja 2</h2>
        <p>Digital collectible coming soon</p>
        <div class="card-actions justify-center">
          <!-- <button class="btn btn-primary w-full"> View Collectible </button> -->
        </div>
      </div>
    </div>
    <!-- End Card 1 -->

    <!-- Card 1 -->
    <div class="card card-compact bg-base-100 shadow-xl mb-10">
      <figure>
        <img src="/images/collectible-image-1.png" alt="Sugon Collectible 3" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Ninja 3</h2>
        <p>Digital collectible coming soon</p>
        <div class="card-actions justify-center">
          <!-- <button class="btn btn-primary w-full"> View Collectible </button> -->
        </div>
      </div>
    </div>
    <!-- End Card 1 -->
  </div>
</div>

<!-- Start Lore -->

<div id="lore">
  <div class="hero py-32 text-base-100">
    <div class="container">
      <div class="hero-content flex-col lg:flex-row-reverse gap-x-6">
        <img src="/images/ninja-lore.png" alt="Ninja Lore" />
        <div>
          <h3 class="font-bold text-3xl">Lore</h3>
          <p class="py-6">
            These Ninjas are from the land of Sugondese. They are kind hearted
            Ninjas but they have a gambling addiction which caused them to lose
            their Dojo to the evil rich billionaire Mr Landon.
          </p>
          <p>
            Ever since then, they have been participating in Game Shows hosted
            by Mr Landon, putting their bodies on line just to make some
            shitcoin which hopefully they can use to buy back their dojo. If the
            shitcoin devs don’t rug of course.
          </p>

          <a href="https://discord.gg/K6Qz93YZEd" target="_blank" rel="noreferrer">
            <button class="btn btn-primary mt-10 "> Join The Fun On Discord </button>
          </a>

        </div>
      </div>
    </div>
  </div>
</div>

<!-- Start Styles -->
<style>
  .sugon-video {
    position: absolute;
    top: -20px;
    left: 0px;
    width: 100%;
    z-index: -1;
    object-fit: cover;
  }

  .hero-content.main-hero {
    background: rgba(239, 204, 255, 0.75);
    backdrop-filter: blur(10px);
    padding: 30px 30px;
    border-radius: 10px;
    margin: -60px 0px 0px 0px;
  }

  .hero-lore {
    padding: 50px 0px;
  }

  #lore {
    background: url("/images/lore-bg.jpg");
    background-size: cover;
  }

  @media (max-width: 600px) {
    .min-h-screen {
      min-height: 50vh;
    }
  }
</style>
