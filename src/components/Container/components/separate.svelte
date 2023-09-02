<script>
	export let selectedOption;
	let positionCursorSelected;
	$: {
		switch (selectedOption) {
			case (selectedOption = 'Today'):
				positionCursorSelected = '';

				break;
			case (selectedOption = 'Tomorrow'):
				positionCursorSelected = 'right-2/4';

				break;
			case (selectedOption = 'Next 7 Days'):
				positionCursorSelected = 'right-1/4';
				break;

			default:
				positionCursorSelected = '';
				break;
		}
	}
</script>

<div class="w-[200px] h-[0.50px] mx-20 pl-2 bg-zinc-300 flex-col justify-center items-start inline-flex">
	<div class={`w-5 h-[3px] bg-zinc-700 rounded absolute ${positionCursorSelected}`} />
</div>
