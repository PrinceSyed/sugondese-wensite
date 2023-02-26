<div class="hero min-h-screen">
  <div class="sugon-video-container">
    <video class="sugon-video" autoplay loop>
      <source src="/images/sugon-demo-1.mp4" type="video/mp4" />
      <source src="/images/sugon-demo-1.webm" type="video/webm" />
    </video>
  </div>

  <div />

  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Welcome to Sugondesee</h1>
      <p class="mb-5">
        Mini game where you try to get these little ninjas out of a gambling
        debt.
      </p>
      <button class="btn btn-primary w-full"> Play Now </button>
    </div>
  </div>
</div>

<div id="collectibles" class="mt-20">
  <div class="collectibles container flex gap-x-6 gap-y-4 max-sm:flex-col">
    <!-- Card 1 -->
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src="/images/zach.png" alt="Sugon Collectible 1" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Landon</h2>
        <p>Landon</p>
        <div class="card-actions justify-center">
          <button class="btn btn-primary w-full"> View Collectible </button>
        </div>
      </div>
    </div>
    <!-- End Card 1 -->

    <!-- Card 1 -->
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src="/images/zach.png" alt="Sugon Collectible 1" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Landon</h2>
        <p>Landon</p>
        <div class="card-actions justify-center">
          <button class="btn btn-primary w-full"> View Collectible </button>
        </div>
      </div>
    </div>
    <!-- End Card 1 -->

    <!-- Card 1 -->
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src="/images/zach.png" alt="Sugon Collectible 1" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Landon</h2>
        <p>Landon</p>
        <div class="card-actions justify-center">
          <button class="btn btn-primary w-full"> View Collectible </button>
        </div>
      </div>
    </div>
    <!-- End Card 1 -->
  </div>
</div>

<style>
  .sugon-video {
    position: absolute;
    top: -20px;
    left: 0px;
    width: 100%;
    z-index: -1;
  }

  .hero-content {
    background: rgba(239, 204, 255, 0.75);
    backdrop-filter: blur(10px);
    padding: 30px 30px;
    border-radius: 10px;
    margin: -60px 0px 0px 0px;
  }

  @media (max-width: 600px) {
    .min-h-screen {
      min-height: 50vh;
    }
  }
</style>
