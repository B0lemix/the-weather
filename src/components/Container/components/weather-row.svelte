<script>
	export let icon;
	export let type;
	export let typeValue;
	export let unit;
</script>

<div
	class=" h-14 flex flex-row rounded-2xl items-center justify-between self-stretch bg-white bg-opacity-30 shadow-2xl hover:scale-110 transition-transform ease-in-out duration-300"
>
	<div class="w-1/2 flex flex-row items-center justify-start opacity-90 font-medium">
		<img class="h-20 w-20" src={icon} alt={type} />
		<div>{type}</div>
	</div>
	<div class="w-1/2 flex flex-row justify-end mx-5 gap-1 opacity-90 font-medium">
		{typeValue}
		<span>{unit}</span>
	</div>
</div>
