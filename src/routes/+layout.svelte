<script>
	import "../app.css";
</script>



<!-- Navbar -->


<div class="navbar font-medium text-base-100">
	<div class="container">
		<div class="flex-1">
			<img src="/images/sugon-icon.png" alt="Sugondese Ninjas Game Logo" class="nav-img"/>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a href="#collectibles"> Collectibles </a></li>

				<li><a href="#lore"> Lore </a></li>
				<!-- <a href="https://play.sugninjas.com/" target="_blank" rel="noreferrer">
					<button class="btn btn-primary"> Play Now </button>
				</a> -->
			</ul>
		</div>
	</div>
</div>

<slot />

<style>

.navbar {
    backdrop-filter: blur(5px);
	background: #000c;
	margin-bottom: 20px;
}
.nav-img {
	max-width: 50px;
}

</style>