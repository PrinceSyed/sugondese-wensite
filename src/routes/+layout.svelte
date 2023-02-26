<script>
	import "../app.css";
</script>

<!-- Navbar -->

<div class="navbar bg-base-100">
	<div class="container">
		<div class="flex-1">
			<img src="../src/static/sugon-icon.png" alt="Sugondese Ninjas Game Logo"/>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a href="#collectibles"> Collectibles </a></li>

				<li><a href="#lore"> Lore </a></li>
				<a href="#lore">
					<button class="btn btn-primary"> Play Now </button>
				</a>
			</ul>
		</div>
	</div>
</div>

<slot />
