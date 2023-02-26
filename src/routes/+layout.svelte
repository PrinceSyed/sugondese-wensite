<script>
	import "../app.css";
</script>

<!-- Navbar -->


<div class="navbar font-medium">
	<div class="container">
		<div class="flex-1">
			<img src="/images/sugon-icon.png" alt="Sugondese Ninjas Game Logo"/>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a href="#collectibles"> Collectibles </a></li>

				<li><a href="#lore"> Lore </a></li>
				<a href="#lore" class="ml-5">
					<button class="btn btn-primary"> Play Now </button>
				</a>
			</ul>
		</div>
	</div>
</div>

<slot />

<style>
.navbar {
    background: #ffffff54;
    backdrop-filter: blur(10px);
}
</style>